import { createRoute, z } from '@hono/zod-openapi'

const StringSchema = z
  .string()
  .openapi({ description: 'Placeholder documentation for __string' })
  .openapi('String')

const HlsId3SegmentTaggingScheduleActionSettingsSchema = z
  .object({
    Tag: StringSchema.exactOptional().openapi({
      xml: { name: 'tag' },
      description:
        'ID3 tag to insert into each segment. Supports special keyword identifiers to substitute in segment-related values.\\nSupported keyword identifiers: https://docs.aws.amazon.com/medialive/latest/ug/variable-data-identifiers.html',
    }),
    Id3: StringSchema.exactOptional().openapi({
      xml: { name: 'id3' },
      description:
        'Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure',
    }),
  })
  .openapi({
    description: 'Settings for the action to insert a user-defined ID3 tag in each HLS segment',
    required: [],
  })
  .openapi('HlsId3SegmentTaggingScheduleActionSettings')

const HlsTimedMetadataScheduleActionSettingsSchema = z
  .object({
    Id3: StringSchema.openapi({
      xml: { name: 'id3' },
      description:
        'Base64 string formatted according to the ID3 specification: http://id3.org/id3v2.4.0-structure',
    }),
  })
  .openapi({ required: ['Id3'], description: 'Settings for the action to emit HLS metadata' })
  .openapi('HlsTimedMetadataScheduleActionSettings')

const InputTimecodeSourceSchema = z
  .enum(['ZEROBASED', 'EMBEDDED'])
  .openapi({ description: 'Documentation update needed' })
  .openapi('InputTimecodeSource')

const StartTimecodeSchema = z
  .object({
    Timecode: StringSchema.exactOptional().openapi({
      xml: { name: 'timecode' },
      description:
        'The timecode for the frame where you want to start the clip. Optional; if not specified, the clip starts at first frame in the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.',
    }),
  })
  .openapi({ description: 'Settings to identify the start of the clip.', required: [] })
  .openapi('StartTimecode')

const LastFrameClippingBehaviorSchema = z
  .enum(['EXCLUDE_LAST_FRAME', 'INCLUDE_LAST_FRAME'])
  .openapi({
    description:
      'If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.',
  })
  .openapi('LastFrameClippingBehavior')

const StopTimecodeSchema = z
  .object({
    LastFrameClippingBehavior: LastFrameClippingBehaviorSchema.exactOptional().openapi({
      xml: { name: 'lastFrameClippingBehavior' },
      description:
        'If you specify a StopTimecode in an input (in order to clip the file), you can specify if you want the clip to exclude (the default) or include the frame specified by the timecode.',
    }),
    Timecode: StringSchema.exactOptional().openapi({
      xml: { name: 'timecode' },
      description:
        'The timecode for the frame where you want to stop the clip. Optional; if not specified, the clip continues to the end of the file. Enter the timecode as HH:MM:SS:FF or HH:MM:SS;FF.',
    }),
  })
  .openapi({ description: 'Settings to identify the end of the clip.', required: [] })
  .openapi('StopTimecode')

const InputClippingSettingsSchema = z
  .object({
    InputTimecodeSource: InputTimecodeSourceSchema.openapi({
      xml: { name: 'inputTimecodeSource' },
      description: 'The source of the timecodes in the source being clipped.',
    }),
    StartTimecode: StartTimecodeSchema.exactOptional().openapi({
      xml: { name: 'startTimecode' },
      description: 'Settings to identify the start of the clip.',
    }),
    StopTimecode: StopTimecodeSchema.exactOptional().openapi({
      xml: { name: 'stopTimecode' },
      description: 'Settings to identify the end of the clip.',
    }),
  })
  .openapi({
    required: ['InputTimecodeSource'],
    description:
      'Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.',
  })
  .openapi('InputClippingSettings')

const ListOfStringSchema = z
  .array(StringSchema)
  .openapi({ description: 'Placeholder documentation for __listOf__string' })
  .openapi('ListOfString')

const InputPrepareScheduleActionSettingsSchema = z
  .object({
    InputAttachmentNameReference: StringSchema.exactOptional().openapi({
      xml: { name: 'inputAttachmentNameReference' },
      description:
        'The name of the input attachment that should be prepared by this action. If no name is provided, the action will stop the most recent prepare (if any) when activated.',
    }),
    InputClippingSettings: InputClippingSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputClippingSettings' },
      description:
        'Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.',
    }),
    UrlPath: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'urlPath' },
      description:
        'The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.',
    }),
  })
  .openapi({
    description: 'Action to prepare an input for a future immediate input switch.',
    required: [],
  })
  .openapi('InputPrepareScheduleActionSettings')

const InputSwitchScheduleActionSettingsSchema = z
  .object({
    InputAttachmentNameReference: StringSchema.openapi({
      xml: { name: 'inputAttachmentNameReference' },
      description:
        'The name of the input attachment (not the name of the input!) to switch to. The name is specified in the channel configuration.',
    }),
    InputClippingSettings: InputClippingSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputClippingSettings' },
      description:
        'Settings to let you create a clip of the file input, in order to set up the input to ingest only a portion of the file.',
    }),
    UrlPath: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'urlPath' },
      description:
        'The value for the variable portion of the URL for the dynamic input, for this instance of the input. Each time you use the same dynamic input in an input switch action, you can provide a different value, in order to connect the input to a different content source.',
    }),
  })
  .openapi({
    required: ['InputAttachmentNameReference'],
    description:
      'Settings for the "switch input" action: to switch from ingesting one input to ingesting another input.',
  })
  .openapi('InputSwitchScheduleActionSettings')

const LongMin0Max86400000Schema = z
  .int()
  .min(0)
  .max(86400000)
  .openapi({ description: 'Placeholder documentation for __longMin0Max86400000' })
  .openapi('LongMin0Max86400000')

const MotionGraphicsActivateScheduleActionSettingsSchema = z
  .object({
    Duration: LongMin0Max86400000Schema.exactOptional().openapi({
      xml: { name: 'duration' },
      description:
        'Duration (in milliseconds) that motion graphics should render on to the video stream. Leaving out this property or setting to 0 will result in rendering continuing until a deactivate action is processed.',
    }),
    PasswordParam: StringSchema.exactOptional().openapi({
      xml: { name: 'passwordParam' },
      description: 'Key used to extract the password from EC2 Parameter store',
    }),
    Url: StringSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description: 'URI of the HTML5 content to be rendered into the live stream.',
    }),
    Username: StringSchema.exactOptional().openapi({
      xml: { name: 'username' },
      description: 'Documentation update needed',
    }),
  })
  .openapi({
    description: 'Settings to specify the rendering of motion graphics into the video stream.',
    required: [],
  })
  .openapi('MotionGraphicsActivateScheduleActionSettings')

const MotionGraphicsDeactivateScheduleActionSettingsSchema = z
  .looseObject({})
  .openapi({
    description:
      'Settings to specify the ending of rendering motion graphics into the video stream.',
  })
  .openapi('MotionGraphicsDeactivateScheduleActionSettings')

const PipelineIdSchema = z
  .enum(['PIPELINE_0', 'PIPELINE_1'])
  .openapi({ description: 'Pipeline ID' })
  .openapi('PipelineId')

const PipelinePauseStateSettingsSchema = z
  .object({
    PipelineId: PipelineIdSchema.openapi({
      xml: { name: 'pipelineId' },
      description: 'Pipeline ID to pause ("PIPELINE_0" or "PIPELINE_1").',
    }),
  })
  .openapi({ required: ['PipelineId'], description: 'Settings for pausing a pipeline.' })
  .openapi('PipelinePauseStateSettings')

const ListOfPipelinePauseStateSettingsSchema = z
  .array(PipelinePauseStateSettingsSchema)
  .openapi({ description: 'Placeholder documentation for __listOfPipelinePauseStateSettings' })
  .openapi('ListOfPipelinePauseStateSettings')

const PauseStateScheduleActionSettingsSchema = z
  .object({
    Pipelines: ListOfPipelinePauseStateSettingsSchema.exactOptional().openapi({
      xml: { name: 'pipelines' },
    }),
  })
  .openapi({
    description: 'Settings for the action to set pause state of a channel.',
    required: [],
  })
  .openapi('PauseStateScheduleActionSettings')

const Scte35InputModeSchema = z
  .enum(['FIXED', 'FOLLOW_ACTIVE'])
  .openapi({
    description: 'Whether the SCTE-35 input should be the active input or a fixed input.',
  })
  .openapi('Scte35InputMode')

const Scte35InputScheduleActionSettingsSchema = z
  .object({
    InputAttachmentNameReference: StringSchema.exactOptional().openapi({
      xml: { name: 'inputAttachmentNameReference' },
      description:
        'In fixed mode, enter the name of the input attachment that you want to use as a SCTE-35 input. (Don\'t enter the ID of the input.)"',
    }),
    Mode: Scte35InputModeSchema.openapi({
      xml: { name: 'mode' },
      description: 'Whether the SCTE-35 input should be the active input or a fixed input.',
    }),
  })
  .openapi({ required: ['Mode'], description: 'Scte35Input Schedule Action Settings' })
  .openapi('Scte35InputScheduleActionSettings')

const LongMin0Max4294967295Schema = z
  .int()
  .min(0)
  .max(4294967295)
  .openapi({ description: 'Placeholder documentation for __longMin0Max4294967295' })
  .openapi('LongMin0Max4294967295')

const Scte35ReturnToNetworkScheduleActionSettingsSchema = z
  .object({
    SpliceEventId: LongMin0Max4294967295Schema.openapi({
      xml: { name: 'spliceEventId' },
      description: 'The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.',
    }),
  })
  .openapi({
    required: ['SpliceEventId'],
    description: 'Settings for a SCTE-35 return_to_network message.',
  })
  .openapi('Scte35ReturnToNetworkScheduleActionSettings')

const LongMin0Max8589934591Schema = z
  .int()
  .min(0)
  .max(8589934591)
  .openapi({ description: 'Placeholder documentation for __longMin0Max8589934591' })
  .openapi('LongMin0Max8589934591')

const Scte35SpliceInsertScheduleActionSettingsSchema = z
  .object({
    Duration: LongMin0Max8589934591Schema.exactOptional().openapi({
      xml: { name: 'duration' },
      description:
        'Optional, the duration for the splice_insert, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. If you enter a duration, there is an expectation that the downstream system can read the duration and cue in at that time. If you do not enter a duration, the splice_insert will continue indefinitely and there is an expectation that you will enter a return_to_network to end the splice_insert at the appropriate time.',
    }),
    SpliceEventId: LongMin0Max4294967295Schema.openapi({
      xml: { name: 'spliceEventId' },
      description: 'The splice_event_id for the SCTE-35 splice_insert, as defined in SCTE-35.',
    }),
  })
  .openapi({
    required: ['SpliceEventId'],
    description: 'Settings for a SCTE-35 splice_insert message.',
  })
  .openapi('Scte35SpliceInsertScheduleActionSettings')

const Scte35ArchiveAllowedFlagSchema = z
  .enum(['ARCHIVE_NOT_ALLOWED', 'ARCHIVE_ALLOWED'])
  .openapi({
    description:
      'Corresponds to the archive_allowed parameter. A value of ARCHIVE_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.',
  })
  .openapi('Scte35ArchiveAllowedFlag')

const Scte35DeviceRestrictionsSchema = z
  .enum(['NONE', 'RESTRICT_GROUP0', 'RESTRICT_GROUP1', 'RESTRICT_GROUP2'])
  .openapi({
    description:
      'Corresponds to the device_restrictions parameter in a segmentation_descriptor. If you include one of the "restriction" flags then you must include all four of them.',
  })
  .openapi('Scte35DeviceRestrictions')

const Scte35NoRegionalBlackoutFlagSchema = z
  .enum(['REGIONAL_BLACKOUT', 'NO_REGIONAL_BLACKOUT'])
  .openapi({
    description:
      'Corresponds to the no_regional_blackout_flag parameter. A value of REGIONAL_BLACKOUT corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.',
  })
  .openapi('Scte35NoRegionalBlackoutFlag')

const Scte35WebDeliveryAllowedFlagSchema = z
  .enum(['WEB_DELIVERY_NOT_ALLOWED', 'WEB_DELIVERY_ALLOWED'])
  .openapi({
    description:
      'Corresponds to the web_delivery_allowed_flag parameter. A value of WEB_DELIVERY_NOT_ALLOWED corresponds to 0 (false) in the SCTE-35 specification. If you include one of the "restriction" flags then you must include all four of them.',
  })
  .openapi('Scte35WebDeliveryAllowedFlag')

const Scte35DeliveryRestrictionsSchema = z
  .object({
    ArchiveAllowedFlag: Scte35ArchiveAllowedFlagSchema.openapi({
      xml: { name: 'archiveAllowedFlag' },
      description: 'Corresponds to SCTE-35 archive_allowed_flag.',
    }),
    DeviceRestrictions: Scte35DeviceRestrictionsSchema.openapi({
      xml: { name: 'deviceRestrictions' },
      description: 'Corresponds to SCTE-35 device_restrictions parameter.',
    }),
    NoRegionalBlackoutFlag: Scte35NoRegionalBlackoutFlagSchema.openapi({
      xml: { name: 'noRegionalBlackoutFlag' },
      description: 'Corresponds to SCTE-35 no_regional_blackout_flag parameter.',
    }),
    WebDeliveryAllowedFlag: Scte35WebDeliveryAllowedFlagSchema.openapi({
      xml: { name: 'webDeliveryAllowedFlag' },
      description: 'Corresponds to SCTE-35 web_delivery_allowed_flag parameter.',
    }),
  })
  .openapi({
    required: [
      'DeviceRestrictions',
      'ArchiveAllowedFlag',
      'WebDeliveryAllowedFlag',
      'NoRegionalBlackoutFlag',
    ],
    description:
      'Corresponds to SCTE-35 delivery_not_restricted_flag parameter. To declare delivery restrictions, include this element and its four "restriction" flags. To declare that there are no restrictions, omit this element.',
  })
  .openapi('Scte35DeliveryRestrictions')

const IntegerMin0Max255Schema = z
  .int()
  .min(0)
  .max(255)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max255' })
  .openapi('IntegerMin0Max255')

const Scte35SegmentationCancelIndicatorSchema = z
  .enum(['SEGMENTATION_EVENT_NOT_CANCELED', 'SEGMENTATION_EVENT_CANCELED'])
  .openapi({
    description:
      'Corresponds to SCTE-35 segmentation_event_cancel_indicator. SEGMENTATION_EVENT_NOT_CANCELED corresponds to 0 in the SCTE-35 specification and indicates that this is an insertion request. SEGMENTATION_EVENT_CANCELED corresponds to 1 in the SCTE-35 specification and indicates that this is a cancelation request, in which case complete this field and the existing event ID to cancel.',
  })
  .openapi('Scte35SegmentationCancelIndicator')

const LongMin0Max1099511627775Schema = z
  .int()
  .min(0)
  .max(1099511627775)
  .openapi({ description: 'Placeholder documentation for __longMin0Max1099511627775' })
  .openapi('LongMin0Max1099511627775')

const Scte35SegmentationDescriptorSchema = z
  .object({
    DeliveryRestrictions: Scte35DeliveryRestrictionsSchema.exactOptional().openapi({
      xml: { name: 'deliveryRestrictions' },
      description: 'Holds the four SCTE-35 delivery restriction parameters.',
    }),
    SegmentNum: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'segmentNum' },
      description:
        'Corresponds to SCTE-35 segment_num. A value that is valid for the specified segmentation_type_id.',
    }),
    SegmentationCancelIndicator: Scte35SegmentationCancelIndicatorSchema.openapi({
      xml: { name: 'segmentationCancelIndicator' },
      description: 'Corresponds to SCTE-35 segmentation_event_cancel_indicator.',
    }),
    SegmentationDuration: LongMin0Max1099511627775Schema.exactOptional().openapi({
      xml: { name: 'segmentationDuration' },
      description:
        'Corresponds to SCTE-35 segmentation_duration. Optional. The duration for the time_signal, in 90 KHz ticks. To convert seconds to ticks, multiple the seconds by 90,000. Enter time in 90 KHz clock ticks. If you do not enter a duration, the time_signal will continue until you insert a cancellation message.',
    }),
    SegmentationEventId: LongMin0Max4294967295Schema.openapi({
      xml: { name: 'segmentationEventId' },
      description: 'Corresponds to SCTE-35 segmentation_event_id. ',
    }),
    SegmentationTypeId: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'segmentationTypeId' },
      description:
        'Corresponds to SCTE-35 segmentation_type_id. One of the segmentation_type_id values listed in the SCTE-35 specification. On the console, enter the ID in decimal (for example, "52"). In the CLI, API, or an SDK, enter the ID in hex (for example, "0x34") or decimal (for example, "52").',
    }),
    SegmentationUpid: StringSchema.exactOptional().openapi({
      xml: { name: 'segmentationUpid' },
      description:
        'Corresponds to SCTE-35 segmentation_upid. Enter a string containing the hexadecimal representation of the characters that make up the SCTE-35 segmentation_upid value. Must contain an even number of hex characters. Do not include spaces between each hex pair. For example, the ASCII "ADS Information" becomes hex "41445320496e666f726d6174696f6e.',
    }),
    SegmentationUpidType: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'segmentationUpidType' },
      description:
        'Corresponds to SCTE-35 segmentation_upid_type. On the console, enter one of the types listed in the SCTE-35 specification, converted to a decimal. For example, "0x0C" hex from the specification is "12" in decimal. In the CLI, API, or an SDK, enter one of the types listed in the SCTE-35 specification, in either hex (for example, "0x0C" ) or in decimal (for example, "12").',
    }),
    SegmentsExpected: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'segmentsExpected' },
      description:
        'Corresponds to SCTE-35 segments_expected. A value that is valid for the specified segmentation_type_id.',
    }),
    SubSegmentNum: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'subSegmentNum' },
      description:
        'Corresponds to SCTE-35 sub_segment_num. A value that is valid for the specified segmentation_type_id.',
    }),
    SubSegmentsExpected: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'subSegmentsExpected' },
      description:
        'Corresponds to SCTE-35 sub_segments_expected. A value that is valid for the specified segmentation_type_id.',
    }),
  })
  .openapi({
    required: ['SegmentationEventId', 'SegmentationCancelIndicator'],
    description: 'Corresponds to SCTE-35 segmentation_descriptor.',
  })
  .openapi('Scte35SegmentationDescriptor')

const Scte35DescriptorSettingsSchema = z
  .object({
    SegmentationDescriptorScte35DescriptorSettings: Scte35SegmentationDescriptorSchema.openapi({
      xml: { name: 'segmentationDescriptorScte35DescriptorSettings' },
      description: 'SCTE-35 Segmentation Descriptor.',
    }),
  })
  .openapi({
    required: ['SegmentationDescriptorScte35DescriptorSettings'],
    description: 'SCTE-35 Descriptor settings.',
  })
  .openapi('Scte35DescriptorSettings')

const Scte35DescriptorSchema = z
  .object({
    Scte35DescriptorSettings: Scte35DescriptorSettingsSchema.openapi({
      xml: { name: 'scte35DescriptorSettings' },
      description: 'SCTE-35 Descriptor Settings.',
    }),
  })
  .openapi({
    required: ['Scte35DescriptorSettings'],
    description: 'Holds one set of SCTE-35 Descriptor Settings.',
  })
  .openapi('Scte35Descriptor')

const ListOfScte35DescriptorSchema = z
  .array(Scte35DescriptorSchema)
  .openapi({ description: 'Placeholder documentation for __listOfScte35Descriptor' })
  .openapi('ListOfScte35Descriptor')

const Scte35TimeSignalScheduleActionSettingsSchema = z
  .object({
    Scte35Descriptors: ListOfScte35DescriptorSchema.openapi({
      xml: { name: 'scte35Descriptors' },
      description: 'The list of SCTE-35 descriptors accompanying the SCTE-35 time_signal.',
    }),
  })
  .openapi({ required: ['Scte35Descriptors'], description: 'Settings for a SCTE-35 time_signal.' })
  .openapi('Scte35TimeSignalScheduleActionSettings')

const IntegerMin0Schema = z
  .int()
  .min(0)
  .openapi({ description: 'Placeholder documentation for __integerMin0' })
  .openapi('IntegerMin0')

const IntegerMin1Schema = z
  .int()
  .min(1)
  .openapi({ description: 'Placeholder documentation for __integerMin1' })
  .openapi('IntegerMin1')

const StringMax2048Schema = z
  .string()
  .max(2048)
  .openapi({ description: 'Placeholder documentation for __stringMax2048' })
  .openapi('StringMax2048')

const InputLocationSchema = z
  .object({
    PasswordParam: StringSchema.exactOptional().openapi({
      xml: { name: 'passwordParam' },
      description: 'key used to extract the password from EC2 Parameter store',
    }),
    Uri: StringMax2048Schema.openapi({
      xml: { name: 'uri' },
      description:
        'Uniform Resource Identifier - This should be a path to a file accessible to the Live system (eg. a http:// URI) depending on the output type. For example, a RTMP destination should have a uri simliar to: "rtmp://fmsserver/live".',
    }),
    Username: StringSchema.exactOptional().openapi({
      xml: { name: 'username' },
      description: 'Documentation update needed',
    }),
  })
  .openapi({ required: ['Uri'], description: 'Input Location' })
  .openapi('InputLocation')

const IntegerMin0Max7Schema = z
  .int()
  .min(0)
  .max(7)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max7' })
  .openapi('IntegerMin0Max7')

const IntegerMin0Max100Schema = z
  .int()
  .min(0)
  .max(100)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max100' })
  .openapi('IntegerMin0Max100')

const StaticImageActivateScheduleActionSettingsSchema = z
  .object({
    Duration: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'duration' },
      description:
        'The duration in milliseconds for the image to remain on the video. If omitted or set to 0 the duration is unlimited and the image will remain until it is explicitly deactivated.',
    }),
    FadeIn: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'fadeIn' },
      description:
        'The time in milliseconds for the image to fade in. The fade-in starts at the start time of the overlay. Default is 0 (no fade-in).',
    }),
    FadeOut: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'fadeOut' },
      description:
        'Applies only if a duration is specified. The time in milliseconds for the image to fade out. The fade-out starts when the duration time is hit, so it effectively extends the duration. Default is 0 (no fade-out).',
    }),
    Height: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'height' },
      description:
        'The height of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified height. Leave blank to use the native height of the overlay.',
    }),
    Image: InputLocationSchema.openapi({
      xml: { name: 'image' },
      description:
        'The location and filename of the image file to overlay on the video. The file must be a 32-bit BMP, PNG, or TGA file, and must not be larger (in pixels) than the input video.',
    }),
    ImageX: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'imageX' },
      description:
        'Placement of the left edge of the overlay relative to the left edge of the video frame, in pixels. 0 (the default) is the left edge of the frame. If the placement causes the overlay to extend beyond the right edge of the underlying video, then the overlay is cropped on the right.',
    }),
    ImageY: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'imageY' },
      description:
        'Placement of the top edge of the overlay relative to the top edge of the video frame, in pixels. 0 (the default) is the top edge of the frame. If the placement causes the overlay to extend beyond the bottom edge of the underlying video, then the overlay is cropped on the bottom.',
    }),
    Layer: IntegerMin0Max7Schema.exactOptional().openapi({
      xml: { name: 'layer' },
      description:
        'The number of the layer, 0 to 7. There are 8 layers that can be overlaid on the video, each layer with a different image. The layers are in Z order, which means that overlays with higher values of layer are inserted on top of overlays with lower values of layer. Default is 0.',
    }),
    Opacity: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'opacity' },
      description:
        'Opacity of image where 0 is transparent and 100 is fully opaque. Default is 100.',
    }),
    Width: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'width' },
      description:
        'The width of the image when inserted into the video, in pixels. The overlay will be scaled up or down to the specified width. Leave blank to use the native width of the overlay.',
    }),
  })
  .openapi({
    required: ['Image'],
    description: 'Settings for the action to activate a static image.',
  })
  .openapi('StaticImageActivateScheduleActionSettings')

const StaticImageDeactivateScheduleActionSettingsSchema = z
  .object({
    FadeOut: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'fadeOut' },
      description:
        'The time in milliseconds for the image to fade out. Default is 0 (no fade-out).',
    }),
    Layer: IntegerMin0Max7Schema.exactOptional().openapi({
      xml: { name: 'layer' },
      description: 'The image overlay layer to deactivate, 0 to 7. Default is 0.',
    }),
  })
  .openapi({
    description: 'Settings for the action to deactivate the image in a specific layer.',
    required: [],
  })
  .openapi('StaticImageDeactivateScheduleActionSettings')

const ScheduleActionSettingsSchema = z
  .object({
    HlsId3SegmentTaggingSettings:
      HlsId3SegmentTaggingScheduleActionSettingsSchema.exactOptional().openapi({
        xml: { name: 'hlsId3SegmentTaggingSettings' },
        description: 'Action to insert HLS ID3 segment tagging',
      }),
    HlsTimedMetadataSettings: HlsTimedMetadataScheduleActionSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsTimedMetadataSettings' },
      description: 'Action to insert HLS metadata',
    }),
    InputPrepareSettings: InputPrepareScheduleActionSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputPrepareSettings' },
      description: 'Action to prepare an input for a future immediate input switch',
    }),
    InputSwitchSettings: InputSwitchScheduleActionSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputSwitchSettings' },
      description: 'Action to switch the input',
    }),
    MotionGraphicsImageActivateSettings:
      MotionGraphicsActivateScheduleActionSettingsSchema.exactOptional().openapi({
        xml: { name: 'motionGraphicsImageActivateSettings' },
        description: 'Action to activate a motion graphics image overlay',
      }),
    MotionGraphicsImageDeactivateSettings:
      MotionGraphicsDeactivateScheduleActionSettingsSchema.exactOptional().openapi({
        xml: { name: 'motionGraphicsImageDeactivateSettings' },
        description: 'Action to deactivate a motion graphics image overlay',
      }),
    PauseStateSettings: PauseStateScheduleActionSettingsSchema.exactOptional().openapi({
      xml: { name: 'pauseStateSettings' },
      description: 'Action to pause or unpause one or both channel pipelines',
    }),
    Scte35InputSettings: Scte35InputScheduleActionSettingsSchema.exactOptional().openapi({
      xml: { name: 'scte35InputSettings' },
      description: 'Action to specify scte35 input',
    }),
    Scte35ReturnToNetworkSettings:
      Scte35ReturnToNetworkScheduleActionSettingsSchema.exactOptional().openapi({
        xml: { name: 'scte35ReturnToNetworkSettings' },
        description: 'Action to insert SCTE-35 return_to_network message',
      }),
    Scte35SpliceInsertSettings:
      Scte35SpliceInsertScheduleActionSettingsSchema.exactOptional().openapi({
        xml: { name: 'scte35SpliceInsertSettings' },
        description: 'Action to insert SCTE-35 splice_insert message',
      }),
    Scte35TimeSignalSettings: Scte35TimeSignalScheduleActionSettingsSchema.exactOptional().openapi({
      xml: { name: 'scte35TimeSignalSettings' },
      description: 'Action to insert SCTE-35 time_signal message',
    }),
    StaticImageActivateSettings:
      StaticImageActivateScheduleActionSettingsSchema.exactOptional().openapi({
        xml: { name: 'staticImageActivateSettings' },
        description: 'Action to activate a static image overlay',
      }),
    StaticImageDeactivateSettings:
      StaticImageDeactivateScheduleActionSettingsSchema.exactOptional().openapi({
        xml: { name: 'staticImageDeactivateSettings' },
        description: 'Action to deactivate a static image overlay',
      }),
  })
  .openapi({ description: 'Holds the settings for a single schedule action.', required: [] })
  .openapi('ScheduleActionSettings')

const FixedModeScheduleActionStartSettingsSchema = z
  .object({
    Time: StringSchema.openapi({
      xml: { name: 'time' },
      description:
        'Start time for the action to start in the channel. (Not the time for the action to be added to the schedule: actions are always added to the schedule immediately.) UTC format: yyyy-mm-ddThh:mm:ss.nnnZ. All the letters are digits (for example, mm might be 01) except for the two constants "T" for time and "Z" for "UTC format".',
    }),
  })
  .openapi({ required: ['Time'], description: 'Start time for the action.' })
  .openapi('FixedModeScheduleActionStartSettings')

const FollowPointSchema = z
  .enum(['END', 'START'])
  .openapi({ description: 'Follow reference point.' })
  .openapi('FollowPoint')

const FollowModeScheduleActionStartSettingsSchema = z
  .object({
    FollowPoint: FollowPointSchema.openapi({
      xml: { name: 'followPoint' },
      description:
        'Identifies whether this action starts relative to the start or relative to the end of the reference action.',
    }),
    ReferenceActionName: StringSchema.openapi({
      xml: { name: 'referenceActionName' },
      description: 'The action name of another action that this one refers to.',
    }),
  })
  .openapi({
    required: ['ReferenceActionName', 'FollowPoint'],
    description: 'Settings to specify if an action follows another.',
  })
  .openapi('FollowModeScheduleActionStartSettings')

const ImmediateModeScheduleActionStartSettingsSchema = z
  .looseObject({})
  .openapi({
    description: 'Settings to configure an action so that it occurs as soon as possible.',
  })
  .openapi('ImmediateModeScheduleActionStartSettings')

const ScheduleActionStartSettingsSchema = z
  .object({
    FixedModeScheduleActionStartSettings:
      FixedModeScheduleActionStartSettingsSchema.exactOptional().openapi({
        xml: { name: 'fixedModeScheduleActionStartSettings' },
        description: 'Option for specifying the start time for an action.',
      }),
    FollowModeScheduleActionStartSettings:
      FollowModeScheduleActionStartSettingsSchema.exactOptional().openapi({
        xml: { name: 'followModeScheduleActionStartSettings' },
        description: 'Option for specifying an action as relative to another action.',
      }),
    ImmediateModeScheduleActionStartSettings:
      ImmediateModeScheduleActionStartSettingsSchema.exactOptional().openapi({
        xml: { name: 'immediateModeScheduleActionStartSettings' },
        description: 'Option for specifying an action that should be applied immediately.',
      }),
  })
  .openapi({
    description:
      'Settings to specify when an action should occur. Only one of the options must be selected.',
    required: [],
  })
  .openapi('ScheduleActionStartSettings')

type ScheduleActionType = {
  ActionName: z.infer<typeof StringSchema>
  ScheduleActionSettings: z.infer<typeof ScheduleActionSettingsSchema>
  ScheduleActionStartSettings: z.infer<typeof ScheduleActionStartSettingsSchema>
}

const ScheduleActionSchema: z.ZodType<ScheduleActionType> = z
  .object({
    ActionName: StringSchema.openapi({
      xml: { name: 'actionName' },
      description:
        'The name of the action, must be unique within the schedule. This name provides the main reference to an action once it is added to the schedule. A name is unique if it is no longer in the schedule. The schedule is automatically cleaned up to remove actions with a start time of more than 1 hour ago (approximately) so at that point a name can be reused.',
    }),
    ScheduleActionSettings: ScheduleActionSettingsSchema.openapi({
      xml: { name: 'scheduleActionSettings' },
      description: 'Settings for this schedule action.',
    }),
    ScheduleActionStartSettings: ScheduleActionStartSettingsSchema.openapi({
      xml: { name: 'scheduleActionStartSettings' },
      description: 'The time for the action to start in the channel.',
    }),
  })
  .openapi({
    required: ['ActionName', 'ScheduleActionStartSettings', 'ScheduleActionSettings'],
    description: 'Contains information on a single schedule action.',
  })
  .openapi('ScheduleAction')

type ListOfScheduleActionType = z.infer<typeof ScheduleActionSchema>[]

const ListOfScheduleActionSchema: z.ZodType<ListOfScheduleActionType> = z
  .array(ScheduleActionSchema)
  .openapi({ description: 'Placeholder documentation for __listOfScheduleAction' })
  .openapi('ListOfScheduleAction')

type BatchScheduleActionCreateResultType = {
  ScheduleActions: z.infer<typeof ListOfScheduleActionSchema>
}

const BatchScheduleActionCreateResultSchema: z.ZodType<BatchScheduleActionCreateResultType> = z
  .object({
    ScheduleActions: ListOfScheduleActionSchema.openapi({
      xml: { name: 'scheduleActions' },
      description: 'List of actions that have been created in the schedule.',
    }),
  })
  .openapi({
    required: ['ScheduleActions'],
    description: 'List of actions that have been created in the schedule.',
  })
  .openapi('BatchScheduleActionCreateResult')

type BatchScheduleActionDeleteResultType = {
  ScheduleActions: z.infer<typeof ListOfScheduleActionSchema>
}

const BatchScheduleActionDeleteResultSchema: z.ZodType<BatchScheduleActionDeleteResultType> = z
  .object({
    ScheduleActions: ListOfScheduleActionSchema.openapi({
      xml: { name: 'scheduleActions' },
      description: 'List of actions that have been deleted from the schedule.',
    }),
  })
  .openapi({
    required: ['ScheduleActions'],
    description: 'List of actions that have been deleted from the schedule.',
  })
  .openapi('BatchScheduleActionDeleteResult')

type BatchUpdateScheduleResponseType = {
  Creates?: z.infer<typeof BatchScheduleActionCreateResultSchema>
  Deletes?: z.infer<typeof BatchScheduleActionDeleteResultSchema>
}

const CdiInputResolutionSchema = z
  .enum(['SD', 'HD', 'FHD', 'UHD'])
  .openapi({
    description:
      'Maximum CDI input resolution; SD is 480i and 576i up to 30 frames-per-second (fps), HD is 720p up to 60 fps / 1080i up to 30 fps, FHD is 1080p up to 60 fps, UHD is 2160p up to 60 fps\n',
  })
  .openapi('CdiInputResolution')

const CdiInputSpecificationSchema = z
  .object({
    Resolution: CdiInputResolutionSchema.exactOptional().openapi({
      xml: { name: 'resolution' },
      description: 'Maximum CDI input resolution',
    }),
  })
  .openapi({ description: 'Placeholder documentation for CdiInputSpecification', required: [] })
  .openapi('CdiInputSpecification')

const ChannelClassSchema = z
  .enum(['STANDARD', 'SINGLE_PIPELINE'])
  .openapi({
    description:
      'A standard channel has two encoding pipelines and a single pipeline channel only has one.',
  })
  .openapi('ChannelClass')

const StringMin1Schema = z
  .string()
  .min(1)
  .openapi({ description: 'Placeholder documentation for __stringMin1' })
  .openapi('StringMin1')

const MediaPackageOutputDestinationSettingsSchema = z
  .object({
    ChannelId: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'channelId' },
      description:
        'ID of the channel in MediaPackage that is the destination for this output group. You do not need to specify the individual inputs in MediaPackage; MediaLive will handle the connection of the two MediaLive pipelines to the two MediaPackage inputs. The MediaPackage channel and MediaLive channel must be in the same region.',
    }),
  })
  .openapi({ description: 'MediaPackage Output Destination Settings', required: [] })
  .openapi('MediaPackageOutputDestinationSettings')

const ListOfMediaPackageOutputDestinationSettingsSchema = z
  .array(MediaPackageOutputDestinationSettingsSchema)
  .openapi({
    description: 'Placeholder documentation for __listOfMediaPackageOutputDestinationSettings',
  })
  .openapi('ListOfMediaPackageOutputDestinationSettings')

const MultiplexProgramChannelDestinationSettingsSchema = z
  .object({
    MultiplexId: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'multiplexId' },
      description:
        'The ID of the Multiplex that the encoder is providing output to. You do not need to specify the individual inputs to the Multiplex; MediaLive will handle the connection of the two MediaLive pipelines to the two Multiplex instances.\nThe Multiplex must be in the same region as the Channel.',
    }),
    ProgramName: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'programName' },
      description:
        'The program name of the Multiplex program that the encoder is providing output to.',
    }),
  })
  .openapi({
    description:
      'Multiplex Program Input Destination Settings for outputting a Channel to a Multiplex',
    required: [],
  })
  .openapi('MultiplexProgramChannelDestinationSettings')

const OutputDestinationSettingsSchema = z
  .object({
    PasswordParam: StringSchema.exactOptional().openapi({
      xml: { name: 'passwordParam' },
      description: 'key used to extract the password from EC2 Parameter store',
    }),
    StreamName: StringSchema.exactOptional().openapi({
      xml: { name: 'streamName' },
      description: 'Stream name for RTMP destinations (URLs of type rtmp://)',
    }),
    Url: StringSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description: 'A URL specifying a destination',
    }),
    Username: StringSchema.exactOptional().openapi({
      xml: { name: 'username' },
      description: 'username for destination',
    }),
  })
  .openapi({ description: 'Placeholder documentation for OutputDestinationSettings', required: [] })
  .openapi('OutputDestinationSettings')

const ListOfOutputDestinationSettingsSchema = z
  .array(OutputDestinationSettingsSchema)
  .openapi({ description: 'Placeholder documentation for __listOfOutputDestinationSettings' })
  .openapi('ListOfOutputDestinationSettings')

const OutputDestinationSchema = z
  .object({
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'User-specified id. This is used in an output group or an output.',
    }),
    MediaPackageSettings: ListOfMediaPackageOutputDestinationSettingsSchema.exactOptional().openapi(
      {
        xml: { name: 'mediaPackageSettings' },
        description:
          'Destination settings for a MediaPackage output; one destination for both encoders.',
      },
    ),
    MultiplexSettings: MultiplexProgramChannelDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexSettings' },
      description:
        'Destination settings for a Multiplex output; one destination for both encoders.',
    }),
    Settings: ListOfOutputDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'settings' },
      description:
        'Destination settings for a standard output; one destination for each redundant encoder.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for OutputDestination', required: [] })
  .openapi('OutputDestination')

const ListOfOutputDestinationSchema = z
  .array(OutputDestinationSchema)
  .openapi({ description: 'Placeholder documentation for __listOfOutputDestination' })
  .openapi('ListOfOutputDestination')

const ChannelEgressEndpointSchema = z
  .object({
    SourceIp: StringSchema.exactOptional().openapi({
      xml: { name: 'sourceIp' },
      description: "Public IP of where a channel's output comes from",
    }),
  })
  .openapi({ description: 'Placeholder documentation for ChannelEgressEndpoint', required: [] })
  .openapi('ChannelEgressEndpoint')

const ListOfChannelEgressEndpointSchema = z
  .array(ChannelEgressEndpointSchema)
  .openapi({ description: 'Placeholder documentation for __listOfChannelEgressEndpoint' })
  .openapi('ListOfChannelEgressEndpoint')

const AudioNormalizationAlgorithmSchema = z
  .enum(['ITU_1770_1', 'ITU_1770_2'])
  .openapi({ description: 'Audio Normalization Algorithm' })
  .openapi('AudioNormalizationAlgorithm')

const AudioNormalizationAlgorithmControlSchema = z
  .literal('CORRECT_AUDIO')
  .openapi({ description: 'Audio Normalization Algorithm Control' })
  .openapi('AudioNormalizationAlgorithmControl')

const DoubleMinNegative59Max0Schema = z
  .float64()
  .openapi({ description: 'Placeholder documentation for __doubleMinNegative59Max0' })
  .openapi('DoubleMinNegative59Max0')

const AudioNormalizationSettingsSchema = z
  .object({
    Algorithm: AudioNormalizationAlgorithmSchema.exactOptional().openapi({
      xml: { name: 'algorithm' },
      description:
        'Audio normalization algorithm to use. itu17701 conforms to the CALM Act specification, itu17702 conforms to the EBU R-128 specification.',
    }),
    AlgorithmControl: AudioNormalizationAlgorithmControlSchema.exactOptional().openapi({
      xml: { name: 'algorithmControl' },
      description:
        'When set to correctAudio the output audio is corrected using the chosen algorithm. If set to measureOnly, the audio will be measured but not adjusted.',
    }),
    TargetLkfs: DoubleMinNegative59Max0Schema.exactOptional().openapi({
      xml: { name: 'targetLkfs' },
      description:
        'Target LKFS(loudness) to adjust volume to. If no value is entered, a default value will be used according to the chosen algorithm.  The CALM Act (1770-1) recommends a target of -24 LKFS. The EBU R-128 specification (1770-2) recommends a target of -23 LKFS.',
    }),
  })
  .openapi({ description: 'Audio Normalization Settings', required: [] })
  .openapi('AudioNormalizationSettings')

const AudioTypeSchema = z
  .enum(['CLEAN_EFFECTS', 'HEARING_IMPAIRED', 'UNDEFINED', 'VISUAL_IMPAIRED_COMMENTARY'])
  .openapi({ description: 'Audio Type' })
  .openapi('AudioType')

const AudioDescriptionAudioTypeControlSchema = z
  .enum(['FOLLOW_INPUT', 'USE_CONFIGURED'])
  .openapi({ description: 'Audio Description Audio Type Control' })
  .openapi('AudioDescriptionAudioTypeControl')

const StringMin2Max2Schema = z
  .string()
  .length(2)
  .openapi({ description: 'Placeholder documentation for __stringMin2Max2' })
  .openapi('StringMin2Max2')

const NielsenWatermarksCbetStepasideSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Nielsen Watermarks Cbet Stepaside' })
  .openapi('NielsenWatermarksCbetStepaside')

const StringMin1Max7Schema = z
  .string()
  .min(1)
  .max(7)
  .openapi({ description: 'Placeholder documentation for __stringMin1Max7' })
  .openapi('StringMin1Max7')

const NielsenCBETSchema = z
  .object({
    CbetCheckDigitString: StringMin2Max2Schema.openapi({
      xml: { name: 'cbetCheckDigitString' },
      description: 'Enter the CBET check digits to use in the watermark.',
    }),
    CbetStepaside: NielsenWatermarksCbetStepasideSchema.openapi({
      xml: { name: 'cbetStepaside' },
      description:
        'Determines the method of CBET insertion mode when prior encoding is detected on the same layer.',
    }),
    Csid: StringMin1Max7Schema.openapi({
      xml: { name: 'csid' },
      description: 'Enter the CBET Source ID (CSID) to use in the watermark',
    }),
  })
  .openapi({
    required: ['CbetCheckDigitString', 'CbetStepaside', 'Csid'],
    description: 'Nielsen CBET',
  })
  .openapi('NielsenCBET')

const NielsenWatermarksDistributionTypesSchema = z
  .enum(['FINAL_DISTRIBUTOR', 'PROGRAM_CONTENT'])
  .openapi({ description: 'Nielsen Watermarks Distribution Types' })
  .openapi('NielsenWatermarksDistributionTypes')

const DoubleMin1Max65535Schema = z
  .float64()
  .openapi({ description: 'Placeholder documentation for __doubleMin1Max65535' })
  .openapi('DoubleMin1Max65535')

const NielsenWatermarkTimezonesSchema = z
  .enum([
    'AMERICA_PUERTO_RICO',
    'US_ALASKA',
    'US_ARIZONA',
    'US_CENTRAL',
    'US_EASTERN',
    'US_HAWAII',
    'US_MOUNTAIN',
    'US_PACIFIC',
    'US_SAMOA',
    'UTC',
  ])
  .openapi({ description: 'Nielsen Watermark Timezones' })
  .openapi('NielsenWatermarkTimezones')

const NielsenNaesIiNwSchema = z
  .object({
    CheckDigitString: StringMin2Max2Schema.openapi({
      xml: { name: 'checkDigitString' },
      description: 'Enter the check digit string for the watermark',
    }),
    Sid: DoubleMin1Max65535Schema.openapi({
      xml: { name: 'sid' },
      description: 'Enter the Nielsen Source ID (SID) to include in the watermark',
    }),
    Timezone: NielsenWatermarkTimezonesSchema.exactOptional().openapi({
      xml: { name: 'timezone' },
      description:
        'Choose the timezone for the time stamps in the watermark. If not provided,\nthe timestamps will be in Coordinated Universal Time (UTC)',
    }),
  })
  .openapi({ required: ['CheckDigitString', 'Sid'], description: 'Nielsen Naes Ii Nw' })
  .openapi('NielsenNaesIiNw')

const NielsenWatermarksSettingsSchema = z
  .object({
    NielsenCbetSettings: NielsenCBETSchema.exactOptional().openapi({
      xml: { name: 'nielsenCbetSettings' },
      description:
        'Complete these fields only if you want to insert watermarks of type Nielsen CBET',
    }),
    NielsenDistributionType: NielsenWatermarksDistributionTypesSchema.exactOptional().openapi({
      xml: { name: 'nielsenDistributionType' },
      description:
        'Choose the distribution types that you want to assign to the watermarks:\n- PROGRAM_CONTENT\n- FINAL_DISTRIBUTOR',
    }),
    NielsenNaesIiNwSettings: NielsenNaesIiNwSchema.exactOptional().openapi({
      xml: { name: 'nielsenNaesIiNwSettings' },
      description:
        'Complete these fields only if you want to insert watermarks of type Nielsen NAES II (N2) and Nielsen NAES VI (NW).',
    }),
  })
  .openapi({ description: 'Nielsen Watermarks Settings', required: [] })
  .openapi('NielsenWatermarksSettings')

const AudioWatermarkSettingsSchema = z
  .object({
    NielsenWatermarksSettings: NielsenWatermarksSettingsSchema.exactOptional().openapi({
      xml: { name: 'nielsenWatermarksSettings' },
      description: 'Settings to configure Nielsen Watermarks in the audio encode',
    }),
  })
  .openapi({ description: 'Audio Watermark Settings', required: [] })
  .openapi('AudioWatermarkSettings')

const DoubleSchema = z
  .float64()
  .openapi({ description: 'Placeholder documentation for __double' })
  .openapi('Double')

const AacCodingModeSchema = z
  .enum([
    'AD_RECEIVER_MIX',
    'CODING_MODE_1_0',
    'CODING_MODE_1_1',
    'CODING_MODE_2_0',
    'CODING_MODE_5_1',
  ])
  .openapi({ description: 'Aac Coding Mode' })
  .openapi('AacCodingMode')

const AacInputTypeSchema = z
  .enum(['BROADCASTER_MIXED_AD', 'NORMAL'])
  .openapi({ description: 'Aac Input Type' })
  .openapi('AacInputType')

const AacProfileSchema = z
  .enum(['HEV1', 'HEV2', 'LC'])
  .openapi({ description: 'Aac Profile' })
  .openapi('AacProfile')

const AacRateControlModeSchema = z
  .enum(['CBR', 'VBR'])
  .openapi({ description: 'Aac Rate Control Mode' })
  .openapi('AacRateControlMode')

const AacRawFormatSchema = z
  .enum(['LATM_LOAS', 'NONE'])
  .openapi({ description: 'Aac Raw Format' })
  .openapi('AacRawFormat')

const AacSpecSchema = z
  .enum(['MPEG2', 'MPEG4'])
  .openapi({ description: 'Aac Spec' })
  .openapi('AacSpec')

const AacVbrQualitySchema = z
  .enum(['HIGH', 'LOW', 'MEDIUM_HIGH', 'MEDIUM_LOW'])
  .openapi({ description: 'Aac Vbr Quality' })
  .openapi('AacVbrQuality')

const AacSettingsSchema = z
  .object({
    Bitrate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Average bitrate in bits/second. Valid values depend on rate control mode and profile.',
    }),
    CodingMode: AacCodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description:
        'Mono, Stereo, or 5.1 channel layout. Valid values depend on rate control mode and profile. The adReceiverMix setting receives a stereo description plus control track and emits a mono AAC encode of the description track, with control data emitted in the PES header as per ETSI TS 101 154 Annex E.',
    }),
    InputType: AacInputTypeSchema.exactOptional().openapi({
      xml: { name: 'inputType' },
      description:
        'Set to "broadcasterMixedAd" when input contains pre-mixed main audio + AD (narration) as a stereo pair.  The Audio Type field (audioType) will be set to 3, which signals to downstream systems that this stream contains "broadcaster mixed AD". Note that the input received by the encoder must contain pre-mixed audio; the encoder does not perform the mixing. The values in audioTypeControl and audioType (in AudioDescription) are ignored when set to broadcasterMixedAd.\n\nLeave set to "normal" when input does not contain pre-mixed audio + AD.',
    }),
    Profile: AacProfileSchema.exactOptional().openapi({
      xml: { name: 'profile' },
      description: 'AAC Profile.',
    }),
    RateControlMode: AacRateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description: 'Rate Control Mode.',
    }),
    RawFormat: AacRawFormatSchema.exactOptional().openapi({
      xml: { name: 'rawFormat' },
      description: 'Sets LATM / LOAS AAC output for raw containers.',
    }),
    SampleRate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'Sample rate in Hz. Valid values depend on rate control mode and profile.',
    }),
    Spec: AacSpecSchema.exactOptional().openapi({
      xml: { name: 'spec' },
      description:
        'Use MPEG-2 AAC audio instead of MPEG-4 AAC audio for raw or MPEG-2 Transport Stream containers.',
    }),
    VbrQuality: AacVbrQualitySchema.exactOptional().openapi({
      xml: { name: 'vbrQuality' },
      description: 'VBR Quality Level - Only used if rateControlMode is VBR.',
    }),
  })
  .openapi({ description: 'Aac Settings', required: [] })
  .openapi('AacSettings')

const Ac3BitstreamModeSchema = z
  .enum([
    'COMMENTARY',
    'COMPLETE_MAIN',
    'DIALOGUE',
    'EMERGENCY',
    'HEARING_IMPAIRED',
    'MUSIC_AND_EFFECTS',
    'VISUALLY_IMPAIRED',
    'VOICE_OVER',
  ])
  .openapi({ description: 'Ac3 Bitstream Mode' })
  .openapi('Ac3BitstreamMode')

const Ac3CodingModeSchema = z
  .enum(['CODING_MODE_1_0', 'CODING_MODE_1_1', 'CODING_MODE_2_0', 'CODING_MODE_3_2_LFE'])
  .openapi({ description: 'Ac3 Coding Mode' })
  .openapi('Ac3CodingMode')

const IntegerMin1Max31Schema = z
  .int()
  .min(1)
  .max(31)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max31' })
  .openapi('IntegerMin1Max31')

const Ac3DrcProfileSchema = z
  .enum(['FILM_STANDARD', 'NONE'])
  .openapi({ description: 'Ac3 Drc Profile' })
  .openapi('Ac3DrcProfile')

const Ac3LfeFilterSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Ac3 Lfe Filter' })
  .openapi('Ac3LfeFilter')

const Ac3MetadataControlSchema = z
  .enum(['FOLLOW_INPUT', 'USE_CONFIGURED'])
  .openapi({ description: 'Ac3 Metadata Control' })
  .openapi('Ac3MetadataControl')

const Ac3SettingsSchema = z
  .object({
    Bitrate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description: 'Average bitrate in bits/second. Valid bitrates depend on the coding mode.',
    }),
    BitstreamMode: Ac3BitstreamModeSchema.exactOptional().openapi({
      xml: { name: 'bitstreamMode' },
      description:
        'Specifies the bitstream mode (bsmod) for the emitted AC-3 stream. See ATSC A/52-2012 for background on these values.',
    }),
    CodingMode: Ac3CodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description: 'Dolby Digital coding mode. Determines number of channels.',
    }),
    Dialnorm: IntegerMin1Max31Schema.exactOptional().openapi({
      xml: { name: 'dialnorm' },
      description:
        'Sets the dialnorm for the output. If excluded and input audio is Dolby Digital, dialnorm will be passed through.',
    }),
    DrcProfile: Ac3DrcProfileSchema.exactOptional().openapi({
      xml: { name: 'drcProfile' },
      description:
        'If set to filmStandard, adds dynamic range compression signaling to the output bitstream as defined in the Dolby Digital specification.',
    }),
    LfeFilter: Ac3LfeFilterSchema.exactOptional().openapi({
      xml: { name: 'lfeFilter' },
      description:
        'When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid in codingMode32Lfe mode.',
    }),
    MetadataControl: Ac3MetadataControlSchema.exactOptional().openapi({
      xml: { name: 'metadataControl' },
      description:
        'When set to "followInput", encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.',
    }),
  })
  .openapi({ description: 'Ac3 Settings', required: [] })
  .openapi('Ac3Settings')

const Eac3AtmosCodingModeSchema = z
  .enum(['CODING_MODE_5_1_4', 'CODING_MODE_7_1_4', 'CODING_MODE_9_1_6'])
  .openapi({ description: 'Eac3 Atmos Coding Mode' })
  .openapi('Eac3AtmosCodingMode')

const Eac3AtmosDrcLineSchema = z
  .enum(['FILM_LIGHT', 'FILM_STANDARD', 'MUSIC_LIGHT', 'MUSIC_STANDARD', 'NONE', 'SPEECH'])
  .openapi({ description: 'Eac3 Atmos Drc Line' })
  .openapi('Eac3AtmosDrcLine')

const Eac3AtmosDrcRfSchema = z
  .enum(['FILM_LIGHT', 'FILM_STANDARD', 'MUSIC_LIGHT', 'MUSIC_STANDARD', 'NONE', 'SPEECH'])
  .openapi({ description: 'Eac3 Atmos Drc Rf' })
  .openapi('Eac3AtmosDrcRf')

const Eac3AtmosSettingsSchema = z
  .object({
    Bitrate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Average bitrate in bits/second. Valid bitrates depend on the coding mode.\n//  * @affectsRightSizing true',
    }),
    CodingMode: Eac3AtmosCodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description:
        'Dolby Digital Plus with Dolby Atmos coding mode. Determines number of channels.',
    }),
    Dialnorm: IntegerMin1Max31Schema.exactOptional().openapi({
      xml: { name: 'dialnorm' },
      description: 'Sets the dialnorm for the output. Default 23.',
    }),
    DrcLine: Eac3AtmosDrcLineSchema.exactOptional().openapi({
      xml: { name: 'drcLine' },
      description: 'Sets the Dolby dynamic range compression profile.',
    }),
    DrcRf: Eac3AtmosDrcRfSchema.exactOptional().openapi({
      xml: { name: 'drcRf' },
      description:
        'Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.',
    }),
    HeightTrim: DoubleSchema.exactOptional().openapi({
      xml: { name: 'heightTrim' },
      description:
        'Height dimensional trim. Sets the maximum amount to attenuate the height channels when the downstream player isn??t configured to handle Dolby Digital Plus with Dolby Atmos and must remix the channels.',
    }),
    SurroundTrim: DoubleSchema.exactOptional().openapi({
      xml: { name: 'surroundTrim' },
      description:
        "Surround dimensional trim. Sets the maximum amount to attenuate the surround channels when the downstream player isn't configured to handle Dolby Digital Plus with Dolby Atmos and must remix the channels.",
    }),
  })
  .openapi({ description: 'Eac3 Atmos Settings', required: [] })
  .openapi('Eac3AtmosSettings')

const Eac3AttenuationControlSchema = z
  .enum(['ATTENUATE_3_DB', 'NONE'])
  .openapi({ description: 'Eac3 Attenuation Control' })
  .openapi('Eac3AttenuationControl')

const Eac3BitstreamModeSchema = z
  .enum(['COMMENTARY', 'COMPLETE_MAIN', 'EMERGENCY', 'HEARING_IMPAIRED', 'VISUALLY_IMPAIRED'])
  .openapi({ description: 'Eac3 Bitstream Mode' })
  .openapi('Eac3BitstreamMode')

const Eac3CodingModeSchema = z
  .enum(['CODING_MODE_1_0', 'CODING_MODE_2_0', 'CODING_MODE_3_2'])
  .openapi({ description: 'Eac3 Coding Mode' })
  .openapi('Eac3CodingMode')

const Eac3DcFilterSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Eac3 Dc Filter' })
  .openapi('Eac3DcFilter')

const Eac3DrcLineSchema = z
  .enum(['FILM_LIGHT', 'FILM_STANDARD', 'MUSIC_LIGHT', 'MUSIC_STANDARD', 'NONE', 'SPEECH'])
  .openapi({ description: 'Eac3 Drc Line' })
  .openapi('Eac3DrcLine')

const Eac3DrcRfSchema = z
  .enum(['FILM_LIGHT', 'FILM_STANDARD', 'MUSIC_LIGHT', 'MUSIC_STANDARD', 'NONE', 'SPEECH'])
  .openapi({ description: 'Eac3 Drc Rf' })
  .openapi('Eac3DrcRf')

const Eac3LfeControlSchema = z
  .enum(['LFE', 'NO_LFE'])
  .openapi({ description: 'Eac3 Lfe Control' })
  .openapi('Eac3LfeControl')

const Eac3LfeFilterSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Eac3 Lfe Filter' })
  .openapi('Eac3LfeFilter')

const Eac3MetadataControlSchema = z
  .enum(['FOLLOW_INPUT', 'USE_CONFIGURED'])
  .openapi({ description: 'Eac3 Metadata Control' })
  .openapi('Eac3MetadataControl')

const Eac3PassthroughControlSchema = z
  .enum(['NO_PASSTHROUGH', 'WHEN_POSSIBLE'])
  .openapi({ description: 'Eac3 Passthrough Control' })
  .openapi('Eac3PassthroughControl')

const Eac3PhaseControlSchema = z
  .enum(['NO_SHIFT', 'SHIFT_90_DEGREES'])
  .openapi({ description: 'Eac3 Phase Control' })
  .openapi('Eac3PhaseControl')

const Eac3StereoDownmixSchema = z
  .enum(['DPL2', 'LO_RO', 'LT_RT', 'NOT_INDICATED'])
  .openapi({ description: 'Eac3 Stereo Downmix' })
  .openapi('Eac3StereoDownmix')

const Eac3SurroundExModeSchema = z
  .enum(['DISABLED', 'ENABLED', 'NOT_INDICATED'])
  .openapi({ description: 'Eac3 Surround Ex Mode' })
  .openapi('Eac3SurroundExMode')

const Eac3SurroundModeSchema = z
  .enum(['DISABLED', 'ENABLED', 'NOT_INDICATED'])
  .openapi({ description: 'Eac3 Surround Mode' })
  .openapi('Eac3SurroundMode')

const Eac3SettingsSchema = z
  .object({
    AttenuationControl: Eac3AttenuationControlSchema.exactOptional().openapi({
      xml: { name: 'attenuationControl' },
      description:
        'When set to attenuate3Db, applies a 3 dB attenuation to the surround channels. Only used for 3/2 coding mode.',
    }),
    Bitrate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description: 'Average bitrate in bits/second. Valid bitrates depend on the coding mode.',
    }),
    BitstreamMode: Eac3BitstreamModeSchema.exactOptional().openapi({
      xml: { name: 'bitstreamMode' },
      description:
        'Specifies the bitstream mode (bsmod) for the emitted E-AC-3 stream. See ATSC A/52-2012 (Annex E) for background on these values.',
    }),
    CodingMode: Eac3CodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description: 'Dolby Digital Plus coding mode. Determines number of channels.',
    }),
    DcFilter: Eac3DcFilterSchema.exactOptional().openapi({
      xml: { name: 'dcFilter' },
      description: 'When set to enabled, activates a DC highpass filter for all input channels.',
    }),
    Dialnorm: IntegerMin1Max31Schema.exactOptional().openapi({
      xml: { name: 'dialnorm' },
      description:
        'Sets the dialnorm for the output. If blank and input audio is Dolby Digital Plus, dialnorm will be passed through.',
    }),
    DrcLine: Eac3DrcLineSchema.exactOptional().openapi({
      xml: { name: 'drcLine' },
      description: 'Sets the Dolby dynamic range compression profile.',
    }),
    DrcRf: Eac3DrcRfSchema.exactOptional().openapi({
      xml: { name: 'drcRf' },
      description:
        'Sets the profile for heavy Dolby dynamic range compression, ensures that the instantaneous signal peaks do not exceed specified levels.',
    }),
    LfeControl: Eac3LfeControlSchema.exactOptional().openapi({
      xml: { name: 'lfeControl' },
      description: 'When encoding 3/2 audio, setting to lfe enables the LFE channel',
    }),
    LfeFilter: Eac3LfeFilterSchema.exactOptional().openapi({
      xml: { name: 'lfeFilter' },
      description:
        'When set to enabled, applies a 120Hz lowpass filter to the LFE channel prior to encoding. Only valid with codingMode32 coding mode.',
    }),
    LoRoCenterMixLevel: DoubleSchema.exactOptional().openapi({
      xml: { name: 'loRoCenterMixLevel' },
      description: 'Left only/Right only center mix level. Only used for 3/2 coding mode.',
    }),
    LoRoSurroundMixLevel: DoubleSchema.exactOptional().openapi({
      xml: { name: 'loRoSurroundMixLevel' },
      description: 'Left only/Right only surround mix level. Only used for 3/2 coding mode.',
    }),
    LtRtCenterMixLevel: DoubleSchema.exactOptional().openapi({
      xml: { name: 'ltRtCenterMixLevel' },
      description: 'Left total/Right total center mix level. Only used for 3/2 coding mode.',
    }),
    LtRtSurroundMixLevel: DoubleSchema.exactOptional().openapi({
      xml: { name: 'ltRtSurroundMixLevel' },
      description: 'Left total/Right total surround mix level. Only used for 3/2 coding mode.',
    }),
    MetadataControl: Eac3MetadataControlSchema.exactOptional().openapi({
      xml: { name: 'metadataControl' },
      description:
        'When set to followInput, encoder metadata will be sourced from the DD, DD+, or DolbyE decoder that supplied this audio data. If audio was not supplied from one of these streams, then the static metadata settings will be used.',
    }),
    PassthroughControl: Eac3PassthroughControlSchema.exactOptional().openapi({
      xml: { name: 'passthroughControl' },
      description:
        'When set to whenPossible, input DD+ audio will be passed through if it is present on the input. This detection is dynamic over the life of the transcode. Inputs that alternate between DD+ and non-DD+ content will have a consistent DD+ output as the system alternates between passthrough and encoding.',
    }),
    PhaseControl: Eac3PhaseControlSchema.exactOptional().openapi({
      xml: { name: 'phaseControl' },
      description:
        'When set to shift90Degrees, applies a 90-degree phase shift to the surround channels. Only used for 3/2 coding mode.',
    }),
    StereoDownmix: Eac3StereoDownmixSchema.exactOptional().openapi({
      xml: { name: 'stereoDownmix' },
      description: 'Stereo downmix preference. Only used for 3/2 coding mode.',
    }),
    SurroundExMode: Eac3SurroundExModeSchema.exactOptional().openapi({
      xml: { name: 'surroundExMode' },
      description:
        'When encoding 3/2 audio, sets whether an extra center back surround channel is matrix encoded into the left and right surround channels.',
    }),
    SurroundMode: Eac3SurroundModeSchema.exactOptional().openapi({
      xml: { name: 'surroundMode' },
      description:
        'When encoding 2/0 audio, sets whether Dolby Surround is matrix encoded into the two channels.',
    }),
  })
  .openapi({ description: 'Eac3 Settings', required: [] })
  .openapi('Eac3Settings')

const Mp2CodingModeSchema = z
  .enum(['CODING_MODE_1_0', 'CODING_MODE_2_0'])
  .openapi({ description: 'Mp2 Coding Mode' })
  .openapi('Mp2CodingMode')

const Mp2SettingsSchema = z
  .object({
    Bitrate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description: 'Average bitrate in bits/second.',
    }),
    CodingMode: Mp2CodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description:
        'The MPEG2 Audio coding mode.  Valid values are codingMode10 (for mono) or codingMode20 (for stereo).',
    }),
    SampleRate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'Sample rate in Hz.',
    }),
  })
  .openapi({ description: 'Mp2 Settings', required: [] })
  .openapi('Mp2Settings')

const PassThroughSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Pass Through Settings' })
  .openapi('PassThroughSettings')

const WavCodingModeSchema = z
  .enum(['CODING_MODE_1_0', 'CODING_MODE_2_0', 'CODING_MODE_4_0', 'CODING_MODE_8_0'])
  .openapi({ description: 'Wav Coding Mode' })
  .openapi('WavCodingMode')

const WavSettingsSchema = z
  .object({
    BitDepth: DoubleSchema.exactOptional().openapi({
      xml: { name: 'bitDepth' },
      description: 'Bits per sample.',
    }),
    CodingMode: WavCodingModeSchema.exactOptional().openapi({
      xml: { name: 'codingMode' },
      description:
        'The audio coding mode for the WAV audio. The mode determines the number of channels in the audio.',
    }),
    SampleRate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'sampleRate' },
      description: 'Sample rate in Hz.',
    }),
  })
  .openapi({ description: 'Wav Settings', required: [] })
  .openapi('WavSettings')

const AudioCodecSettingsSchema = z
  .object({
    AacSettings: AacSettingsSchema.exactOptional().openapi({ xml: { name: 'aacSettings' } }),
    Ac3Settings: Ac3SettingsSchema.exactOptional().openapi({ xml: { name: 'ac3Settings' } }),
    Eac3AtmosSettings: Eac3AtmosSettingsSchema.exactOptional().openapi({
      xml: { name: 'eac3AtmosSettings' },
    }),
    Eac3Settings: Eac3SettingsSchema.exactOptional().openapi({ xml: { name: 'eac3Settings' } }),
    Mp2Settings: Mp2SettingsSchema.exactOptional().openapi({ xml: { name: 'mp2Settings' } }),
    PassThroughSettings: PassThroughSettingsSchema.exactOptional().openapi({
      xml: { name: 'passThroughSettings' },
    }),
    WavSettings: WavSettingsSchema.exactOptional().openapi({ xml: { name: 'wavSettings' } }),
  })
  .openapi({ description: 'Audio Codec Settings', required: [] })
  .openapi('AudioCodecSettings')

const StringMin1Max35Schema = z
  .string()
  .min(1)
  .max(35)
  .openapi({ description: 'Placeholder documentation for __stringMin1Max35' })
  .openapi('StringMin1Max35')

const AudioDescriptionLanguageCodeControlSchema = z
  .enum(['FOLLOW_INPUT', 'USE_CONFIGURED'])
  .openapi({ description: 'Audio Description Language Code Control' })
  .openapi('AudioDescriptionLanguageCodeControl')

const StringMax255Schema = z
  .string()
  .max(255)
  .openapi({ description: 'Placeholder documentation for __stringMax255' })
  .openapi('StringMax255')

const IntegerMinNegative60Max6Schema = z
  .int()
  .min(-60)
  .max(6)
  .openapi({ description: 'Placeholder documentation for __integerMinNegative60Max6' })
  .openapi('IntegerMinNegative60Max6')

const IntegerMin0Max15Schema = z
  .int()
  .min(0)
  .max(15)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max15' })
  .openapi('IntegerMin0Max15')

const InputChannelLevelSchema = z
  .object({
    Gain: IntegerMinNegative60Max6Schema.openapi({
      xml: { name: 'gain' },
      description:
        'Remixing value. Units are in dB and acceptable values are within the range from -60 (mute) and 6 dB.',
    }),
    InputChannel: IntegerMin0Max15Schema.openapi({
      xml: { name: 'inputChannel' },
      description: 'The index of the input channel used as a source.',
    }),
  })
  .openapi({ required: ['InputChannel', 'Gain'], description: 'Input Channel Level' })
  .openapi('InputChannelLevel')

const ListOfInputChannelLevelSchema = z
  .array(InputChannelLevelSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputChannelLevel' })
  .openapi('ListOfInputChannelLevel')

const AudioChannelMappingSchema = z
  .object({
    InputChannelLevels: ListOfInputChannelLevelSchema.openapi({
      xml: { name: 'inputChannelLevels' },
      description:
        'Indices and gain values for each input channel that should be remixed into this output channel.',
    }),
    OutputChannel: IntegerMin0Max7Schema.openapi({
      xml: { name: 'outputChannel' },
      description: 'The index of the output channel being produced.',
    }),
  })
  .openapi({
    required: ['OutputChannel', 'InputChannelLevels'],
    description: 'Audio Channel Mapping',
  })
  .openapi('AudioChannelMapping')

const ListOfAudioChannelMappingSchema = z
  .array(AudioChannelMappingSchema)
  .openapi({ description: 'Placeholder documentation for __listOfAudioChannelMapping' })
  .openapi('ListOfAudioChannelMapping')

const IntegerMin1Max16Schema = z
  .int()
  .min(1)
  .max(16)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max16' })
  .openapi('IntegerMin1Max16')

const IntegerMin1Max8Schema = z
  .int()
  .min(1)
  .max(8)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max8' })
  .openapi('IntegerMin1Max8')

const RemixSettingsSchema = z
  .object({
    ChannelMappings: ListOfAudioChannelMappingSchema.openapi({
      xml: { name: 'channelMappings' },
      description:
        'Mapping of input channels to output channels, with appropriate gain adjustments.',
    }),
    ChannelsIn: IntegerMin1Max16Schema.exactOptional().openapi({
      xml: { name: 'channelsIn' },
      description: 'Number of input channels to be used.',
    }),
    ChannelsOut: IntegerMin1Max8Schema.exactOptional().openapi({
      xml: { name: 'channelsOut' },
      description: 'Number of output channels to be produced.\nValid values: 1, 2, 4, 6, 8',
    }),
  })
  .openapi({ required: ['ChannelMappings'], description: 'Remix Settings' })
  .openapi('RemixSettings')

const AudioDescriptionSchema = z
  .object({
    AudioNormalizationSettings: AudioNormalizationSettingsSchema.exactOptional().openapi({
      xml: { name: 'audioNormalizationSettings' },
      description: 'Advanced audio normalization settings.',
    }),
    AudioSelectorName: StringSchema.openapi({
      xml: { name: 'audioSelectorName' },
      description: 'The name of the AudioSelector used as the source for this AudioDescription.',
    }),
    AudioType: AudioTypeSchema.exactOptional().openapi({
      xml: { name: 'audioType' },
      description:
        'Applies only if audioTypeControl is useConfigured. The values for audioType are defined in ISO-IEC 13818-1.',
    }),
    AudioTypeControl: AudioDescriptionAudioTypeControlSchema.exactOptional().openapi({
      xml: { name: 'audioTypeControl' },
      description:
        'Determines how audio type is determined.\n  followInput: If the input contains an ISO 639 audioType, then that value is passed through to the output. If the input contains no ISO 639 audioType, the value in Audio Type is included in the output.\n  useConfigured: The value in Audio Type is included in the output.\nNote that this field and audioType are both ignored if inputType is broadcasterMixedAd.',
    }),
    AudioWatermarkingSettings: AudioWatermarkSettingsSchema.exactOptional().openapi({
      xml: { name: 'audioWatermarkingSettings' },
      description:
        'Settings to configure one or more solutions that insert audio watermarks in the audio encode',
    }),
    CodecSettings: AudioCodecSettingsSchema.exactOptional().openapi({
      xml: { name: 'codecSettings' },
      description: 'Audio codec settings.',
    }),
    LanguageCode: StringMin1Max35Schema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description:
        'RFC 5646 language code representing the language of the audio output track. Only used if languageControlMode is useConfigured, or there is no ISO 639 language code specified in the input.',
    }),
    LanguageCodeControl: AudioDescriptionLanguageCodeControlSchema.exactOptional().openapi({
      xml: { name: 'languageCodeControl' },
      description:
        'Choosing followInput will cause the ISO 639 language code of the output to follow the ISO 639 language code of the input. The languageCode will be used when useConfigured is set, or when followInput is selected but there is no ISO 639 language code specified by the input.',
    }),
    Name: StringMax255Schema.openapi({
      xml: { name: 'name' },
      description:
        'The name of this AudioDescription. Outputs will use this name to uniquely identify this AudioDescription.  Description names should be unique within this Live Event.',
    }),
    RemixSettings: RemixSettingsSchema.exactOptional().openapi({
      xml: { name: 'remixSettings' },
      description:
        'Settings that control how input audio channels are remixed into the output audio channels.',
    }),
    StreamName: StringSchema.exactOptional().openapi({
      xml: { name: 'streamName' },
      description:
        'Used for MS Smooth and Apple HLS outputs. Indicates the name displayed by the player (eg. English, or Director Commentary).',
    }),
  })
  .openapi({ required: ['AudioSelectorName', 'Name'], description: 'Audio Description' })
  .openapi('AudioDescription')

const ListOfAudioDescriptionSchema = z
  .array(AudioDescriptionSchema)
  .openapi({ description: 'Placeholder documentation for __listOfAudioDescription' })
  .openapi('ListOfAudioDescription')

const AvailBlankingStateSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Avail Blanking State' })
  .openapi('AvailBlankingState')

const AvailBlankingSchema = z
  .object({
    AvailBlankingImage: InputLocationSchema.exactOptional().openapi({
      xml: { name: 'availBlankingImage' },
      description:
        'Blanking image to be used. Leave empty for solid black. Only bmp and png images are supported.',
    }),
    State: AvailBlankingStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description:
        'When set to enabled, causes video, audio and captions to be blanked when insertion metadata is added.',
    }),
  })
  .openapi({ description: 'Avail Blanking', required: [] })
  .openapi('AvailBlanking')

const StringMax256Schema = z
  .string()
  .max(256)
  .openapi({ description: 'Placeholder documentation for __stringMax256' })
  .openapi('StringMax256')

const IntegerMinNegative1000Max1000Schema = z
  .int()
  .min(-1000)
  .max(1000)
  .openapi({ description: 'Placeholder documentation for __integerMinNegative1000Max1000' })
  .openapi('IntegerMinNegative1000Max1000')

const EsamSchema = z
  .object({
    AcquisitionPointId: StringMax256Schema.openapi({
      xml: { name: 'acquisitionPointId' },
      description:
        'Sent as acquisitionPointIdentity to identify the MediaLive channel to the POIS.',
    }),
    AdAvailOffset: IntegerMinNegative1000Max1000Schema.exactOptional().openapi({
      xml: { name: 'adAvailOffset' },
      description:
        'When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.',
    }),
    PasswordParam: StringSchema.exactOptional().openapi({
      xml: { name: 'passwordParam' },
      description: 'Documentation update needed',
    }),
    PoisEndpoint: StringMax2048Schema.openapi({
      xml: { name: 'poisEndpoint' },
      description:
        'The URL of the signal conditioner endpoint on the Placement Opportunity Information System (POIS). MediaLive sends SignalProcessingEvents here when SCTE-35 messages are read.',
    }),
    Username: StringSchema.exactOptional().openapi({
      xml: { name: 'username' },
      description: 'Documentation update needed',
    }),
    ZoneIdentity: StringMax256Schema.exactOptional().openapi({
      xml: { name: 'zoneIdentity' },
      description:
        'Optional data sent as zoneIdentity to identify the MediaLive channel to the POIS.',
    }),
  })
  .openapi({ required: ['AcquisitionPointId', 'PoisEndpoint'], description: 'Esam' })
  .openapi('Esam')

const Scte35SpliceInsertNoRegionalBlackoutBehaviorSchema = z
  .enum(['FOLLOW', 'IGNORE'])
  .openapi({ description: 'Scte35 Splice Insert No Regional Blackout Behavior' })
  .openapi('Scte35SpliceInsertNoRegionalBlackoutBehavior')

const Scte35SpliceInsertWebDeliveryAllowedBehaviorSchema = z
  .enum(['FOLLOW', 'IGNORE'])
  .openapi({ description: 'Scte35 Splice Insert Web Delivery Allowed Behavior' })
  .openapi('Scte35SpliceInsertWebDeliveryAllowedBehavior')

const Scte35SpliceInsertSchema = z
  .object({
    AdAvailOffset: IntegerMinNegative1000Max1000Schema.exactOptional().openapi({
      xml: { name: 'adAvailOffset' },
      description:
        'When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.',
    }),
    NoRegionalBlackoutFlag:
      Scte35SpliceInsertNoRegionalBlackoutBehaviorSchema.exactOptional().openapi({
        xml: { name: 'noRegionalBlackoutFlag' },
        description:
          'When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates',
      }),
    WebDeliveryAllowedFlag:
      Scte35SpliceInsertWebDeliveryAllowedBehaviorSchema.exactOptional().openapi({
        xml: { name: 'webDeliveryAllowedFlag' },
        description:
          'When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates',
      }),
  })
  .openapi({
    description:
      'Typical configuration that applies breaks on splice inserts in addition to time signal placement opportunities, breaks, and advertisements.',
    required: [],
  })
  .openapi('Scte35SpliceInsert')

const Scte35AposNoRegionalBlackoutBehaviorSchema = z
  .enum(['FOLLOW', 'IGNORE'])
  .openapi({ description: 'Scte35 Apos No Regional Blackout Behavior' })
  .openapi('Scte35AposNoRegionalBlackoutBehavior')

const Scte35AposWebDeliveryAllowedBehaviorSchema = z
  .enum(['FOLLOW', 'IGNORE'])
  .openapi({ description: 'Scte35 Apos Web Delivery Allowed Behavior' })
  .openapi('Scte35AposWebDeliveryAllowedBehavior')

const Scte35TimeSignalAposSchema = z
  .object({
    AdAvailOffset: IntegerMinNegative1000Max1000Schema.exactOptional().openapi({
      xml: { name: 'adAvailOffset' },
      description:
        'When specified, this offset (in milliseconds) is added to the input Ad Avail PTS time. This only applies to embedded SCTE 104/35 messages and does not apply to OOB messages.',
    }),
    NoRegionalBlackoutFlag: Scte35AposNoRegionalBlackoutBehaviorSchema.exactOptional().openapi({
      xml: { name: 'noRegionalBlackoutFlag' },
      description:
        'When set to ignore, Segment Descriptors with noRegionalBlackoutFlag set to 0 will no longer trigger blackouts or Ad Avail slates',
    }),
    WebDeliveryAllowedFlag: Scte35AposWebDeliveryAllowedBehaviorSchema.exactOptional().openapi({
      xml: { name: 'webDeliveryAllowedFlag' },
      description:
        'When set to ignore, Segment Descriptors with webDeliveryAllowedFlag set to 0 will no longer trigger blackouts or Ad Avail slates',
    }),
  })
  .openapi({
    description:
      'Atypical configuration that applies segment breaks only on SCTE-35 time signal placement opportunities and breaks.',
    required: [],
  })
  .openapi('Scte35TimeSignalApos')

const AvailSettingsSchema = z
  .object({
    Esam: EsamSchema.exactOptional().openapi({ xml: { name: 'esam' } }),
    Scte35SpliceInsert: Scte35SpliceInsertSchema.exactOptional().openapi({
      xml: { name: 'scte35SpliceInsert' },
    }),
    Scte35TimeSignalApos: Scte35TimeSignalAposSchema.exactOptional().openapi({
      xml: { name: 'scte35TimeSignalApos' },
    }),
  })
  .openapi({ description: 'Avail Settings', required: [] })
  .openapi('AvailSettings')

const AvailConfigurationSchema = z
  .object({
    AvailSettings: AvailSettingsSchema.exactOptional().openapi({
      xml: { name: 'availSettings' },
      description:
        'Controls how SCTE-35 messages create cues. Splice Insert mode treats all segmentation signals traditionally. With Time Signal APOS mode only Time Signal Placement Opportunity and Break messages create segment breaks. With ESAM mode, signals are forwarded to an ESAM server for possible update.',
    }),
  })
  .openapi({ description: 'Avail Configuration', required: [] })
  .openapi('AvailConfiguration')

const BlackoutSlateNetworkEndBlackoutSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Blackout Slate Network End Blackout' })
  .openapi('BlackoutSlateNetworkEndBlackout')

const StringMin34Max34Schema = z
  .string()
  .length(34)
  .openapi({ description: 'Placeholder documentation for __stringMin34Max34' })
  .openapi('StringMin34Max34')

const BlackoutSlateStateSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Blackout Slate State' })
  .openapi('BlackoutSlateState')

const BlackoutSlateSchema = z
  .object({
    BlackoutSlateImage: InputLocationSchema.exactOptional().openapi({
      xml: { name: 'blackoutSlateImage' },
      description:
        'Blackout slate image to be used. Leave empty for solid black. Only bmp and png images are supported.',
    }),
    NetworkEndBlackout: BlackoutSlateNetworkEndBlackoutSchema.exactOptional().openapi({
      xml: { name: 'networkEndBlackout' },
      description:
        'Setting to enabled causes the encoder to blackout the video, audio, and captions, and raise the "Network Blackout Image" slate when an SCTE104/35 Network End Segmentation Descriptor is encountered. The blackout will be lifted when the Network Start Segmentation Descriptor is encountered. The Network End and Network Start descriptors must contain a network ID that matches the value entered in "Network ID".',
    }),
    NetworkEndBlackoutImage: InputLocationSchema.exactOptional().openapi({
      xml: { name: 'networkEndBlackoutImage' },
      description:
        'Path to local file to use as Network End Blackout image. Image will be scaled to fill the entire output raster.',
    }),
    NetworkId: StringMin34Max34Schema.exactOptional().openapi({
      xml: { name: 'networkId' },
      description:
        'Provides Network ID that matches EIDR ID format (e.g., "10.XXXX/XXXX-XXXX-XXXX-XXXX-XXXX-C").',
    }),
    State: BlackoutSlateStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description:
        'When set to enabled, causes video, audio and captions to be blanked when indicated by program metadata.',
    }),
  })
  .openapi({ description: 'Blackout Slate', required: [] })
  .openapi('BlackoutSlate')

const AccessibilityTypeSchema = z
  .enum(['DOES_NOT_IMPLEMENT_ACCESSIBILITY_FEATURES', 'IMPLEMENTS_ACCESSIBILITY_FEATURES'])
  .openapi({ description: 'Accessibility Type' })
  .openapi('AccessibilityType')

const AribDestinationSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Arib Destination Settings' })
  .openapi('AribDestinationSettings')

const BurnInAlignmentSchema = z
  .enum(['CENTERED', 'LEFT', 'SMART'])
  .openapi({ description: 'Burn In Alignment' })
  .openapi('BurnInAlignment')

const BurnInBackgroundColorSchema = z
  .enum(['BLACK', 'NONE', 'WHITE'])
  .openapi({ description: 'Burn In Background Color' })
  .openapi('BurnInBackgroundColor')

const BurnInFontColorSchema = z
  .enum(['BLACK', 'BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW'])
  .openapi({ description: 'Burn In Font Color' })
  .openapi('BurnInFontColor')

const IntegerMin96Max600Schema = z
  .int()
  .min(96)
  .max(600)
  .openapi({ description: 'Placeholder documentation for __integerMin96Max600' })
  .openapi('IntegerMin96Max600')

const BurnInOutlineColorSchema = z
  .enum(['BLACK', 'BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW'])
  .openapi({ description: 'Burn In Outline Color' })
  .openapi('BurnInOutlineColor')

const IntegerMin0Max10Schema = z
  .int()
  .min(0)
  .max(10)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max10' })
  .openapi('IntegerMin0Max10')

const BurnInShadowColorSchema = z
  .enum(['BLACK', 'NONE', 'WHITE'])
  .openapi({ description: 'Burn In Shadow Color' })
  .openapi('BurnInShadowColor')

const IntegerSchema = z
  .int()
  .openapi({ description: 'Placeholder documentation for __integer' })
  .openapi('Integer')

const BurnInTeletextGridControlSchema = z
  .enum(['FIXED', 'SCALED'])
  .openapi({ description: 'Burn In Teletext Grid Control' })
  .openapi('BurnInTeletextGridControl')

const BurnInDestinationSettingsSchema = z
  .object({
    Alignment: BurnInAlignmentSchema.exactOptional().openapi({
      xml: { name: 'alignment' },
      description:
        'If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  All burn-in and DVB-Sub font settings must match.',
    }),
    BackgroundColor: BurnInBackgroundColorSchema.exactOptional().openapi({
      xml: { name: 'backgroundColor' },
      description:
        'Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.',
    }),
    BackgroundOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'backgroundOpacity' },
      description:
        'Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.',
    }),
    Font: InputLocationSchema.exactOptional().openapi({
      xml: { name: 'font' },
      description:
        "External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions,  embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.",
    }),
    FontColor: BurnInFontColorSchema.exactOptional().openapi({
      xml: { name: 'fontColor' },
      description:
        'Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.',
    }),
    FontOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'fontOpacity' },
      description:
        'Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.',
    }),
    FontResolution: IntegerMin96Max600Schema.exactOptional().openapi({
      xml: { name: 'fontResolution' },
      description:
        'Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.',
    }),
    FontSize: StringSchema.exactOptional().openapi({
      xml: { name: 'fontSize' },
      description:
        "When set to 'auto' fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.",
    }),
    OutlineColor: BurnInOutlineColorSchema.exactOptional().openapi({
      xml: { name: 'outlineColor' },
      description:
        'Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.',
    }),
    OutlineSize: IntegerMin0Max10Schema.exactOptional().openapi({
      xml: { name: 'outlineSize' },
      description:
        'Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.',
    }),
    ShadowColor: BurnInShadowColorSchema.exactOptional().openapi({
      xml: { name: 'shadowColor' },
      description:
        'Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.',
    }),
    ShadowOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'shadowOpacity' },
      description:
        'Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter out is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.',
    }),
    ShadowXOffset: IntegerSchema.exactOptional().openapi({
      xml: { name: 'shadowXOffset' },
      description:
        'Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.',
    }),
    ShadowYOffset: IntegerSchema.exactOptional().openapi({
      xml: { name: 'shadowYOffset' },
      description:
        'Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.',
    }),
    TeletextGridControl: BurnInTeletextGridControlSchema.exactOptional().openapi({
      xml: { name: 'teletextGridControl' },
      description:
        'Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.',
    }),
    XPosition: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'xPosition' },
      description:
        'Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  All burn-in and DVB-Sub font settings must match.',
    }),
    YPosition: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'yPosition' },
      description:
        'Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  All burn-in and DVB-Sub font settings must match.',
    }),
  })
  .openapi({ description: 'Burn In Destination Settings', required: [] })
  .openapi('BurnInDestinationSettings')

const DvbSubDestinationAlignmentSchema = z
  .enum(['CENTERED', 'LEFT', 'SMART'])
  .openapi({ description: 'Dvb Sub Destination Alignment' })
  .openapi('DvbSubDestinationAlignment')

const DvbSubDestinationBackgroundColorSchema = z
  .enum(['BLACK', 'NONE', 'WHITE'])
  .openapi({ description: 'Dvb Sub Destination Background Color' })
  .openapi('DvbSubDestinationBackgroundColor')

const DvbSubDestinationFontColorSchema = z
  .enum(['BLACK', 'BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW'])
  .openapi({ description: 'Dvb Sub Destination Font Color' })
  .openapi('DvbSubDestinationFontColor')

const DvbSubDestinationOutlineColorSchema = z
  .enum(['BLACK', 'BLUE', 'GREEN', 'RED', 'WHITE', 'YELLOW'])
  .openapi({ description: 'Dvb Sub Destination Outline Color' })
  .openapi('DvbSubDestinationOutlineColor')

const DvbSubDestinationShadowColorSchema = z
  .enum(['BLACK', 'NONE', 'WHITE'])
  .openapi({ description: 'Dvb Sub Destination Shadow Color' })
  .openapi('DvbSubDestinationShadowColor')

const DvbSubDestinationTeletextGridControlSchema = z
  .enum(['FIXED', 'SCALED'])
  .openapi({ description: 'Dvb Sub Destination Teletext Grid Control' })
  .openapi('DvbSubDestinationTeletextGridControl')

const DvbSubDestinationSettingsSchema = z
  .object({
    Alignment: DvbSubDestinationAlignmentSchema.exactOptional().openapi({
      xml: { name: 'alignment' },
      description:
        'If no explicit xPosition or yPosition is provided, setting alignment to centered will place the captions at the bottom center of the output. Similarly, setting a left alignment will align captions to the bottom left of the output. If x and y positions are given in conjunction with the alignment parameter, the font will be justified (either left or centered) relative to those coordinates. Selecting "smart" justification will left-justify live subtitles and center-justify pre-recorded subtitles.  This option is not valid for source captions that are STL or 608/embedded.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.',
    }),
    BackgroundColor: DvbSubDestinationBackgroundColorSchema.exactOptional().openapi({
      xml: { name: 'backgroundColor' },
      description:
        'Specifies the color of the rectangle behind the captions.  All burn-in and DVB-Sub font settings must match.',
    }),
    BackgroundOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'backgroundOpacity' },
      description:
        'Specifies the opacity of the background rectangle. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.',
    }),
    Font: InputLocationSchema.exactOptional().openapi({
      xml: { name: 'font' },
      description:
        "External font file used for caption burn-in. File extension must be 'ttf' or 'tte'.  Although the user can select output fonts for many different types of input captions, embedded, STL and teletext sources use a strict grid system. Using external fonts with these caption sources could cause unexpected display of proportional fonts.  All burn-in and DVB-Sub font settings must match.",
    }),
    FontColor: DvbSubDestinationFontColorSchema.exactOptional().openapi({
      xml: { name: 'fontColor' },
      description:
        'Specifies the color of the burned-in captions.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.',
    }),
    FontOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'fontOpacity' },
      description:
        'Specifies the opacity of the burned-in captions. 255 is opaque; 0 is transparent.  All burn-in and DVB-Sub font settings must match.',
    }),
    FontResolution: IntegerMin96Max600Schema.exactOptional().openapi({
      xml: { name: 'fontResolution' },
      description:
        'Font resolution in DPI (dots per inch); default is 96 dpi.  All burn-in and DVB-Sub font settings must match.',
    }),
    FontSize: StringSchema.exactOptional().openapi({
      xml: { name: 'fontSize' },
      description:
        'When set to auto fontSize will scale depending on the size of the output.  Giving a positive integer will specify the exact font size in points.  All burn-in and DVB-Sub font settings must match.',
    }),
    OutlineColor: DvbSubDestinationOutlineColorSchema.exactOptional().openapi({
      xml: { name: 'outlineColor' },
      description:
        'Specifies font outline color. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.',
    }),
    OutlineSize: IntegerMin0Max10Schema.exactOptional().openapi({
      xml: { name: 'outlineSize' },
      description:
        'Specifies font outline size in pixels. This option is not valid for source captions that are either 608/embedded or teletext. These source settings are already pre-defined by the caption stream. All burn-in and DVB-Sub font settings must match.',
    }),
    ShadowColor: DvbSubDestinationShadowColorSchema.exactOptional().openapi({
      xml: { name: 'shadowColor' },
      description:
        'Specifies the color of the shadow cast by the captions.  All burn-in and DVB-Sub font settings must match.',
    }),
    ShadowOpacity: IntegerMin0Max255Schema.exactOptional().openapi({
      xml: { name: 'shadowOpacity' },
      description:
        'Specifies the opacity of the shadow. 255 is opaque; 0 is transparent. Leaving this parameter blank is equivalent to setting it to 0 (transparent).  All burn-in and DVB-Sub font settings must match.',
    }),
    ShadowXOffset: IntegerSchema.exactOptional().openapi({
      xml: { name: 'shadowXOffset' },
      description:
        'Specifies the horizontal offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels to the left.  All burn-in and DVB-Sub font settings must match.',
    }),
    ShadowYOffset: IntegerSchema.exactOptional().openapi({
      xml: { name: 'shadowYOffset' },
      description:
        'Specifies the vertical offset of the shadow relative to the captions in pixels. A value of -2 would result in a shadow offset 2 pixels above the text.  All burn-in and DVB-Sub font settings must match.',
    }),
    TeletextGridControl: DvbSubDestinationTeletextGridControlSchema.exactOptional().openapi({
      xml: { name: 'teletextGridControl' },
      description:
        'Controls whether a fixed grid size will be used to generate the output subtitles bitmap. Only applicable for Teletext inputs and DVB-Sub/Burn-in outputs.',
    }),
    XPosition: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'xPosition' },
      description:
        'Specifies the horizontal position of the caption relative to the left side of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the left of the output. If no explicit xPosition is provided, the horizontal caption position will be determined by the alignment parameter.  This option is not valid for source captions that are STL, 608/embedded or teletext. These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.',
    }),
    YPosition: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'yPosition' },
      description:
        'Specifies the vertical position of the caption relative to the top of the output in pixels. A value of 10 would result in the captions starting 10 pixels from the top of the output. If no explicit yPosition is provided, the caption will be positioned towards the bottom of the output.  This option is not valid for source captions that are STL, 608/embedded or teletext.  These source settings are already pre-defined by the caption stream.  All burn-in and DVB-Sub font settings must match.',
    }),
  })
  .openapi({ description: 'Dvb Sub Destination Settings', required: [] })
  .openapi('DvbSubDestinationSettings')

const StringMax1000Schema = z
  .string()
  .max(1000)
  .openapi({ description: 'Placeholder documentation for __stringMax1000' })
  .openapi('StringMax1000')

const EbuTtDFillLineGapControlSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Ebu Tt DFill Line Gap Control' })
  .openapi('EbuTtDFillLineGapControl')

const EbuTtDDestinationStyleControlSchema = z
  .enum(['EXCLUDE', 'INCLUDE'])
  .openapi({ description: 'Ebu Tt DDestination Style Control' })
  .openapi('EbuTtDDestinationStyleControl')

const EbuTtDDestinationSettingsSchema = z
  .object({
    CopyrightHolder: StringMax1000Schema.exactOptional().openapi({
      xml: { name: 'copyrightHolder' },
      description:
        'Complete this field if you want to include the name of the copyright holder in the copyright tag in the captions metadata.',
    }),
    FillLineGap: EbuTtDFillLineGapControlSchema.exactOptional().openapi({
      xml: { name: 'fillLineGap' },
      description:
        'Specifies how to handle the gap between the lines (in multi-line captions).\n\n- enabled: Fill with the captions background color (as specified in the input captions).\n- disabled: Leave the gap unfilled.',
    }),
    FontFamily: StringSchema.exactOptional().openapi({
      xml: { name: 'fontFamily' },
      description:
        'Specifies the font family to include in the font data attached to the EBU-TT captions. Valid only if styleControl is set to include. If you leave this field empty, the font family is set to "monospaced". (If styleControl is set to exclude, the font family is always set to "monospaced".)\n\nYou specify only the font family. All other style information (color, bold, position and so on) is copied from the input captions. The size is always set to 100% to allow the downstream player to choose the size.\n\n- Enter a list of font families, as a comma-separated list of font names, in order of preference. The name can be a font family (such as “Arial”), or a generic font family (such as “serif”), or “default” (to let the downstream player choose the font).\n- Leave blank to set the family to “monospace”.',
    }),
    StyleControl: EbuTtDDestinationStyleControlSchema.exactOptional().openapi({
      xml: { name: 'styleControl' },
      description:
        'Specifies the style information (font color, font position, and so on) to include in the font data that is attached to the EBU-TT captions.\n\n- include: Take the style information (font color, font position, and so on) from the source captions and include that information in the font data attached to the EBU-TT captions. This option is valid only if the source captions are Embedded or Teletext.\n- exclude: In the font data attached to the EBU-TT captions, set the font family to "monospaced". Do not include any other style information.',
    }),
  })
  .openapi({ description: 'Ebu Tt DDestination Settings', required: [] })
  .openapi('EbuTtDDestinationSettings')

const EmbeddedDestinationSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Embedded Destination Settings' })
  .openapi('EmbeddedDestinationSettings')

const EmbeddedPlusScte20DestinationSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Embedded Plus Scte20 Destination Settings' })
  .openapi('EmbeddedPlusScte20DestinationSettings')

const RtmpCaptionInfoDestinationSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Rtmp Caption Info Destination Settings' })
  .openapi('RtmpCaptionInfoDestinationSettings')

const Scte20PlusEmbeddedDestinationSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Scte20 Plus Embedded Destination Settings' })
  .openapi('Scte20PlusEmbeddedDestinationSettings')

const Scte27DestinationSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Scte27 Destination Settings' })
  .openapi('Scte27DestinationSettings')

const SmpteTtDestinationSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Smpte Tt Destination Settings' })
  .openapi('SmpteTtDestinationSettings')

const TeletextDestinationSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Teletext Destination Settings' })
  .openapi('TeletextDestinationSettings')

const TtmlDestinationStyleControlSchema = z
  .enum(['PASSTHROUGH', 'USE_CONFIGURED'])
  .openapi({ description: 'Ttml Destination Style Control' })
  .openapi('TtmlDestinationStyleControl')

const TtmlDestinationSettingsSchema = z
  .object({
    StyleControl: TtmlDestinationStyleControlSchema.exactOptional().openapi({
      xml: { name: 'styleControl' },
      description:
        'This field is not currently supported and will not affect the output styling. Leave the default value.',
    }),
  })
  .openapi({ description: 'Ttml Destination Settings', required: [] })
  .openapi('TtmlDestinationSettings')

const WebvttDestinationStyleControlSchema = z
  .enum(['NO_STYLE_DATA', 'PASSTHROUGH'])
  .openapi({ description: 'Webvtt Destination Style Control' })
  .openapi('WebvttDestinationStyleControl')

const WebvttDestinationSettingsSchema = z
  .object({
    StyleControl: WebvttDestinationStyleControlSchema.exactOptional().openapi({
      xml: { name: 'styleControl' },
      description:
        "Controls whether the color and position of the source captions is passed through to the WebVTT output captions.  PASSTHROUGH - Valid only if the source captions are EMBEDDED or TELETEXT.  NO_STYLE_DATA - Don't pass through the style. The output captions will not contain any font styling information.",
    }),
  })
  .openapi({ description: 'Webvtt Destination Settings', required: [] })
  .openapi('WebvttDestinationSettings')

const CaptionDestinationSettingsSchema = z
  .object({
    AribDestinationSettings: AribDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'aribDestinationSettings' },
    }),
    BurnInDestinationSettings: BurnInDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'burnInDestinationSettings' },
    }),
    DvbSubDestinationSettings: DvbSubDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbSubDestinationSettings' },
    }),
    EbuTtDDestinationSettings: EbuTtDDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'ebuTtDDestinationSettings' },
    }),
    EmbeddedDestinationSettings: EmbeddedDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'embeddedDestinationSettings' },
    }),
    EmbeddedPlusScte20DestinationSettings:
      EmbeddedPlusScte20DestinationSettingsSchema.exactOptional().openapi({
        xml: { name: 'embeddedPlusScte20DestinationSettings' },
      }),
    RtmpCaptionInfoDestinationSettings:
      RtmpCaptionInfoDestinationSettingsSchema.exactOptional().openapi({
        xml: { name: 'rtmpCaptionInfoDestinationSettings' },
      }),
    Scte20PlusEmbeddedDestinationSettings:
      Scte20PlusEmbeddedDestinationSettingsSchema.exactOptional().openapi({
        xml: { name: 'scte20PlusEmbeddedDestinationSettings' },
      }),
    Scte27DestinationSettings: Scte27DestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'scte27DestinationSettings' },
    }),
    SmpteTtDestinationSettings: SmpteTtDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'smpteTtDestinationSettings' },
    }),
    TeletextDestinationSettings: TeletextDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'teletextDestinationSettings' },
    }),
    TtmlDestinationSettings: TtmlDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'ttmlDestinationSettings' },
    }),
    WebvttDestinationSettings: WebvttDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'webvttDestinationSettings' },
    }),
  })
  .openapi({ description: 'Caption Destination Settings', required: [] })
  .openapi('CaptionDestinationSettings')

const CaptionDescriptionSchema = z
  .object({
    Accessibility: AccessibilityTypeSchema.exactOptional().openapi({
      xml: { name: 'accessibility' },
      description:
        'Indicates whether the caption track implements accessibility features such as written descriptions of spoken dialog, music, and sounds.',
    }),
    CaptionSelectorName: StringSchema.openapi({
      xml: { name: 'captionSelectorName' },
      description:
        'Specifies which input caption selector to use as a caption source when generating output captions. This field should match a captionSelector name.',
    }),
    DestinationSettings: CaptionDestinationSettingsSchema.exactOptional().openapi({
      xml: { name: 'destinationSettings' },
      description:
        'Additional settings for captions destination that depend on the destination type.',
    }),
    LanguageCode: StringSchema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description: 'ISO 639-2 three-digit code: http://www.loc.gov/standards/iso639-2/',
    }),
    LanguageDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'languageDescription' },
      description:
        'Human readable information to indicate captions available for players (eg. English, or Spanish).',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description:
        'Name of the caption description.  Used to associate a caption description with an output.  Names must be unique within an event.',
    }),
  })
  .openapi({ required: ['CaptionSelectorName', 'Name'], description: 'Caption Description' })
  .openapi('CaptionDescription')

const ListOfCaptionDescriptionSchema = z
  .array(CaptionDescriptionSchema)
  .openapi({ description: 'Placeholder documentation for __listOfCaptionDescription' })
  .openapi('ListOfCaptionDescription')

const FeatureActivationsInputPrepareScheduleActionsSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Feature Activations Input Prepare Schedule Actions' })
  .openapi('FeatureActivationsInputPrepareScheduleActions')

const FeatureActivationsSchema = z
  .object({
    InputPrepareScheduleActions:
      FeatureActivationsInputPrepareScheduleActionsSchema.exactOptional().openapi({
        xml: { name: 'inputPrepareScheduleActions' },
        description:
          'Enables the Input Prepare feature. You can create Input Prepare actions in the schedule only if this feature is enabled.\nIf you disable the feature on an existing schedule, make sure that you first delete all input prepare actions from the schedule.',
      }),
  })
  .openapi({ description: 'Feature Activations', required: [] })
  .openapi('FeatureActivations')

const IntegerMinNegative60Max60Schema = z
  .int()
  .min(-60)
  .max(60)
  .openapi({ description: 'Placeholder documentation for __integerMinNegative60Max60' })
  .openapi('IntegerMinNegative60Max60')

const GlobalConfigurationInputEndActionSchema = z
  .enum(['NONE', 'SWITCH_AND_LOOP_INPUTS'])
  .openapi({ description: 'Global Configuration Input End Action' })
  .openapi('GlobalConfigurationInputEndAction')

const IntegerMin0Max1000000Schema = z
  .int()
  .min(0)
  .max(1000000)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max1000000' })
  .openapi('IntegerMin0Max1000000')

const StringMin6Max6Schema = z
  .string()
  .length(6)
  .openapi({ description: 'Placeholder documentation for __stringMin6Max6' })
  .openapi('StringMin6Max6')

const InputLossImageTypeSchema = z
  .enum(['COLOR', 'SLATE'])
  .openapi({ description: 'Input Loss Image Type' })
  .openapi('InputLossImageType')

const InputLossBehaviorSchema = z
  .object({
    BlackFrameMsec: IntegerMin0Max1000000Schema.exactOptional().openapi({
      xml: { name: 'blackFrameMsec' },
      description: 'Documentation update needed',
    }),
    InputLossImageColor: StringMin6Max6Schema.exactOptional().openapi({
      xml: { name: 'inputLossImageColor' },
      description:
        'When input loss image type is "color" this field specifies the color to use. Value: 6 hex characters representing the values of RGB.',
    }),
    InputLossImageSlate: InputLocationSchema.exactOptional().openapi({
      xml: { name: 'inputLossImageSlate' },
      description:
        'When input loss image type is "slate" these fields specify the parameters for accessing the slate.',
    }),
    InputLossImageType: InputLossImageTypeSchema.exactOptional().openapi({
      xml: { name: 'inputLossImageType' },
      description:
        'Indicates whether to substitute a solid color or a slate into the output after input loss exceeds blackFrameMsec.',
    }),
    RepeatFrameMsec: IntegerMin0Max1000000Schema.exactOptional().openapi({
      xml: { name: 'repeatFrameMsec' },
      description: 'Documentation update needed',
    }),
  })
  .openapi({ description: 'Input Loss Behavior', required: [] })
  .openapi('InputLossBehavior')

const GlobalConfigurationOutputLockingModeSchema = z
  .enum(['EPOCH_LOCKING', 'PIPELINE_LOCKING'])
  .openapi({ description: 'Global Configuration Output Locking Mode' })
  .openapi('GlobalConfigurationOutputLockingMode')

const GlobalConfigurationOutputTimingSourceSchema = z
  .enum(['INPUT_CLOCK', 'SYSTEM_CLOCK'])
  .openapi({ description: 'Global Configuration Output Timing Source' })
  .openapi('GlobalConfigurationOutputTimingSource')

const GlobalConfigurationLowFramerateInputsSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Global Configuration Low Framerate Inputs' })
  .openapi('GlobalConfigurationLowFramerateInputs')

const GlobalConfigurationSchema = z
  .object({
    InitialAudioGain: IntegerMinNegative60Max60Schema.exactOptional().openapi({
      xml: { name: 'initialAudioGain' },
      description: 'Value to set the initial audio gain for the Live Event.',
    }),
    InputEndAction: GlobalConfigurationInputEndActionSchema.exactOptional().openapi({
      xml: { name: 'inputEndAction' },
      description:
        'Indicates the action to take when the current input completes (e.g. end-of-file). When switchAndLoopInputs is configured the encoder will restart at the beginning of the first input.  When "none" is configured the encoder will transcode either black, a solid color, or a user specified slate images per the "Input Loss Behavior" configuration until the next input switch occurs (which is controlled through the Channel Schedule API).',
    }),
    InputLossBehavior: InputLossBehaviorSchema.exactOptional().openapi({
      xml: { name: 'inputLossBehavior' },
      description: 'Settings for system actions when input is lost.',
    }),
    OutputLockingMode: GlobalConfigurationOutputLockingModeSchema.exactOptional().openapi({
      xml: { name: 'outputLockingMode' },
      description:
        'Indicates how MediaLive pipelines are synchronized.\n\nPIPELINE_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the other.\nEPOCH_LOCKING - MediaLive will attempt to synchronize the output of each pipeline to the Unix epoch.',
    }),
    OutputTimingSource: GlobalConfigurationOutputTimingSourceSchema.exactOptional().openapi({
      xml: { name: 'outputTimingSource' },
      description:
        'Indicates whether the rate of frames emitted by the Live encoder should be paced by its system clock (which optionally may be locked to another source via NTP) or should be locked to the clock of the source that is providing the input stream.',
    }),
    SupportLowFramerateInputs: GlobalConfigurationLowFramerateInputsSchema.exactOptional().openapi({
      xml: { name: 'supportLowFramerateInputs' },
      description:
        'Adjusts video input buffer for streams with very low video framerates. This is commonly set to enabled for music channels with less than one video frame per second.',
    }),
  })
  .openapi({ description: 'Global Configuration', required: [] })
  .openapi('GlobalConfiguration')

const MotionGraphicsInsertionSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Motion Graphics Insertion' })
  .openapi('MotionGraphicsInsertion')

const HtmlMotionGraphicsSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Html Motion Graphics Settings' })
  .openapi('HtmlMotionGraphicsSettings')

const MotionGraphicsSettingsSchema = z
  .object({
    HtmlMotionGraphicsSettings: HtmlMotionGraphicsSettingsSchema.exactOptional().openapi({
      xml: { name: 'htmlMotionGraphicsSettings' },
    }),
  })
  .openapi({ description: 'Motion Graphics Settings', required: [] })
  .openapi('MotionGraphicsSettings')

const MotionGraphicsConfigurationSchema = z
  .object({
    MotionGraphicsInsertion: MotionGraphicsInsertionSchema.exactOptional().openapi({
      xml: { name: 'motionGraphicsInsertion' },
    }),
    MotionGraphicsSettings: MotionGraphicsSettingsSchema.openapi({
      xml: { name: 'motionGraphicsSettings' },
      description: 'Motion Graphics Settings',
    }),
  })
  .openapi({ required: ['MotionGraphicsSettings'], description: 'Motion Graphics Configuration' })
  .openapi('MotionGraphicsConfiguration')

const NielsenPcmToId3TaggingStateSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'State of Nielsen PCM to ID3 tagging' })
  .openapi('NielsenPcmToId3TaggingState')

const NielsenConfigurationSchema = z
  .object({
    DistributorId: StringSchema.exactOptional().openapi({
      xml: { name: 'distributorId' },
      description: 'Enter the Distributor ID assigned to your organization by Nielsen.',
    }),
    NielsenPcmToId3Tagging: NielsenPcmToId3TaggingStateSchema.exactOptional().openapi({
      xml: { name: 'nielsenPcmToId3Tagging' },
      description: 'Enables Nielsen PCM to ID3 tagging',
    }),
  })
  .openapi({ description: 'Nielsen Configuration', required: [] })
  .openapi('NielsenConfiguration')

const StringMax32Schema = z
  .string()
  .max(32)
  .openapi({ description: 'Placeholder documentation for __stringMax32' })
  .openapi('StringMax32')

const S3CannedAclSchema = z
  .enum(['AUTHENTICATED_READ', 'BUCKET_OWNER_FULL_CONTROL', 'BUCKET_OWNER_READ', 'PUBLIC_READ'])
  .openapi({ description: 'S3 Canned Acl' })
  .openapi('S3CannedAcl')

const ArchiveS3SettingsSchema = z
  .object({
    CannedAcl: S3CannedAclSchema.exactOptional().openapi({
      xml: { name: 'cannedAcl' },
      description: 'Specify the canned ACL to apply to each S3 request. Defaults to none.',
    }),
  })
  .openapi({ description: 'Archive S3 Settings', required: [] })
  .openapi('ArchiveS3Settings')

const ArchiveCdnSettingsSchema = z
  .object({
    ArchiveS3Settings: ArchiveS3SettingsSchema.exactOptional().openapi({
      xml: { name: 'archiveS3Settings' },
    }),
  })
  .openapi({ description: 'Archive Cdn Settings', required: [] })
  .openapi('ArchiveCdnSettings')

const OutputLocationRefSchema = z
  .object({
    DestinationRefId: StringSchema.exactOptional().openapi({ xml: { name: 'destinationRefId' } }),
  })
  .openapi({
    description: 'Reference to an OutputDestination ID defined in the channel',
    required: [],
  })
  .openapi('OutputLocationRef')

const ArchiveGroupSettingsSchema = z
  .object({
    ArchiveCdnSettings: ArchiveCdnSettingsSchema.exactOptional().openapi({
      xml: { name: 'archiveCdnSettings' },
      description: 'Parameters that control interactions with the CDN.',
    }),
    Destination: OutputLocationRefSchema.openapi({
      xml: { name: 'destination' },
      description: 'A directory and base filename where archive files should be written.',
    }),
    RolloverInterval: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'rolloverInterval' },
      description:
        'Number of seconds to write to archive file before closing and starting a new one.',
    }),
  })
  .openapi({ required: ['Destination'], description: 'Archive Group Settings' })
  .openapi('ArchiveGroupSettings')

const FrameCaptureS3SettingsSchema = z
  .object({
    CannedAcl: S3CannedAclSchema.exactOptional().openapi({
      xml: { name: 'cannedAcl' },
      description: 'Specify the canned ACL to apply to each S3 request. Defaults to none.',
    }),
  })
  .openapi({ description: 'Frame Capture S3 Settings', required: [] })
  .openapi('FrameCaptureS3Settings')

const FrameCaptureCdnSettingsSchema = z
  .object({
    FrameCaptureS3Settings: FrameCaptureS3SettingsSchema.exactOptional().openapi({
      xml: { name: 'frameCaptureS3Settings' },
    }),
  })
  .openapi({ description: 'Frame Capture Cdn Settings', required: [] })
  .openapi('FrameCaptureCdnSettings')

const FrameCaptureGroupSettingsSchema = z
  .object({
    Destination: OutputLocationRefSchema.openapi({
      xml: { name: 'destination' },
      description:
        'The destination for the frame capture files. Either the URI for an Amazon S3 bucket and object, plus a file name prefix (for example, s3ssl://sportsDelivery/highlights/20180820/curling-) or the URI for a MediaStore container, plus a file name prefix (for example, mediastoressl://sportsDelivery/20180820/curling-). The final file names consist of the prefix from the destination field (for example, "curling-") + name modifier + the counter (5 digits, starting from 00001) + extension (which is always .jpg).  For example, curling-low.00001.jpg',
    }),
    FrameCaptureCdnSettings: FrameCaptureCdnSettingsSchema.exactOptional().openapi({
      xml: { name: 'frameCaptureCdnSettings' },
      description: 'Parameters that control interactions with the CDN.',
    }),
  })
  .openapi({ required: ['Destination'], description: 'Frame Capture Group Settings' })
  .openapi('FrameCaptureGroupSettings')

const HlsAdMarkersSchema = z
  .enum(['ADOBE', 'ELEMENTAL', 'ELEMENTAL_SCTE35'])
  .openapi({ description: 'Hls Ad Markers' })
  .openapi('HlsAdMarkers')

const ListOfHlsAdMarkersSchema = z
  .array(HlsAdMarkersSchema)
  .openapi({ description: 'Placeholder documentation for __listOfHlsAdMarkers' })
  .openapi('ListOfHlsAdMarkers')

const IntegerMin1Max4Schema = z
  .int()
  .min(1)
  .max(4)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max4' })
  .openapi('IntegerMin1Max4')

const StringMin3Max3Schema = z
  .string()
  .length(3)
  .openapi({ description: 'Placeholder documentation for __stringMin3Max3' })
  .openapi('StringMin3Max3')

const CaptionLanguageMappingSchema = z
  .object({
    CaptionChannel: IntegerMin1Max4Schema.openapi({
      xml: { name: 'captionChannel' },
      description:
        'The closed caption channel being described by this CaptionLanguageMapping.  Each channel mapping must have a unique channel number (maximum of 4)',
    }),
    LanguageCode: StringMin3Max3Schema.openapi({
      xml: { name: 'languageCode' },
      description:
        'Three character ISO 639-2 language code (see http://www.loc.gov/standards/iso639-2)',
    }),
    LanguageDescription: StringMin1Schema.openapi({
      xml: { name: 'languageDescription' },
      description: 'Textual description of language',
    }),
  })
  .openapi({
    required: ['LanguageCode', 'LanguageDescription', 'CaptionChannel'],
    description:
      'Maps a caption channel to an ISO 693-2 language code (http://www.loc.gov/standards/iso639-2), with an optional description.',
  })
  .openapi('CaptionLanguageMapping')

const ListOfCaptionLanguageMappingSchema = z
  .array(CaptionLanguageMappingSchema)
  .openapi({ description: 'Placeholder documentation for __listOfCaptionLanguageMapping' })
  .openapi('ListOfCaptionLanguageMapping')

const HlsCaptionLanguageSettingSchema = z
  .enum(['INSERT', 'NONE', 'OMIT'])
  .openapi({ description: 'Hls Caption Language Setting' })
  .openapi('HlsCaptionLanguageSetting')

const HlsClientCacheSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Hls Client Cache' })
  .openapi('HlsClientCache')

const HlsCodecSpecificationSchema = z
  .enum(['RFC_4281', 'RFC_6381'])
  .openapi({ description: 'Hls Codec Specification' })
  .openapi('HlsCodecSpecification')

const StringMin32Max32Schema = z
  .string()
  .length(32)
  .openapi({ description: 'Placeholder documentation for __stringMin32Max32' })
  .openapi('StringMin32Max32')

const HlsDirectoryStructureSchema = z
  .enum(['SINGLE_DIRECTORY', 'SUBDIRECTORY_PER_STREAM'])
  .openapi({ description: 'Hls Directory Structure' })
  .openapi('HlsDirectoryStructure')

const HlsDiscontinuityTagsSchema = z
  .enum(['INSERT', 'NEVER_INSERT'])
  .openapi({ description: 'Hls Discontinuity Tags' })
  .openapi('HlsDiscontinuityTags')

const HlsEncryptionTypeSchema = z
  .enum(['AES128', 'SAMPLE_AES'])
  .openapi({ description: 'Hls Encryption Type' })
  .openapi('HlsEncryptionType')

const IntegerMin0Max600Schema = z
  .int()
  .min(0)
  .max(600)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max600' })
  .openapi('IntegerMin0Max600')

const HlsAkamaiHttpTransferModeSchema = z
  .enum(['CHUNKED', 'NON_CHUNKED'])
  .openapi({ description: 'Hls Akamai Http Transfer Mode' })
  .openapi('HlsAkamaiHttpTransferMode')

const HlsAkamaiSettingsSchema = z
  .object({
    ConnectionRetryInterval: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'connectionRetryInterval' },
      description:
        'Number of seconds to wait before retrying connection to the CDN if the connection is lost.',
    }),
    FilecacheDuration: IntegerMin0Max600Schema.exactOptional().openapi({
      xml: { name: 'filecacheDuration' },
      description: 'Size in seconds of file cache for streaming outputs.',
    }),
    HttpTransferMode: HlsAkamaiHttpTransferModeSchema.exactOptional().openapi({
      xml: { name: 'httpTransferMode' },
      description:
        'Specify whether or not to use chunked transfer encoding to Akamai. User should contact Akamai to enable this feature.',
    }),
    NumRetries: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'numRetries' },
      description:
        'Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.',
    }),
    RestartDelay: IntegerMin0Max15Schema.exactOptional().openapi({
      xml: { name: 'restartDelay' },
      description:
        'If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.',
    }),
    Salt: StringSchema.exactOptional().openapi({
      xml: { name: 'salt' },
      description: 'Salt for authenticated Akamai.',
    }),
    Token: StringSchema.exactOptional().openapi({
      xml: { name: 'token' },
      description: 'Token parameter for authenticated akamai. If not specified, _gda_ is used.',
    }),
  })
  .openapi({ description: 'Hls Akamai Settings', required: [] })
  .openapi('HlsAkamaiSettings')

const HlsBasicPutSettingsSchema = z
  .object({
    ConnectionRetryInterval: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'connectionRetryInterval' },
      description:
        'Number of seconds to wait before retrying connection to the CDN if the connection is lost.',
    }),
    FilecacheDuration: IntegerMin0Max600Schema.exactOptional().openapi({
      xml: { name: 'filecacheDuration' },
      description: 'Size in seconds of file cache for streaming outputs.',
    }),
    NumRetries: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'numRetries' },
      description:
        'Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.',
    }),
    RestartDelay: IntegerMin0Max15Schema.exactOptional().openapi({
      xml: { name: 'restartDelay' },
      description:
        'If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.',
    }),
  })
  .openapi({ description: 'Hls Basic Put Settings', required: [] })
  .openapi('HlsBasicPutSettings')

const HlsMediaStoreStorageClassSchema = z
  .literal('TEMPORAL')
  .openapi({ description: 'Hls Media Store Storage Class' })
  .openapi('HlsMediaStoreStorageClass')

const HlsMediaStoreSettingsSchema = z
  .object({
    ConnectionRetryInterval: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'connectionRetryInterval' },
      description:
        'Number of seconds to wait before retrying connection to the CDN if the connection is lost.',
    }),
    FilecacheDuration: IntegerMin0Max600Schema.exactOptional().openapi({
      xml: { name: 'filecacheDuration' },
      description: 'Size in seconds of file cache for streaming outputs.',
    }),
    MediaStoreStorageClass: HlsMediaStoreStorageClassSchema.exactOptional().openapi({
      xml: { name: 'mediaStoreStorageClass' },
      description:
        'When set to temporal, output files are stored in non-persistent memory for faster reading and writing.',
    }),
    NumRetries: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'numRetries' },
      description:
        'Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.',
    }),
    RestartDelay: IntegerMin0Max15Schema.exactOptional().openapi({
      xml: { name: 'restartDelay' },
      description:
        'If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.',
    }),
  })
  .openapi({ description: 'Hls Media Store Settings', required: [] })
  .openapi('HlsMediaStoreSettings')

const HlsS3SettingsSchema = z
  .object({
    CannedAcl: S3CannedAclSchema.exactOptional().openapi({
      xml: { name: 'cannedAcl' },
      description: 'Specify the canned ACL to apply to each S3 request. Defaults to none.',
    }),
  })
  .openapi({ description: 'Hls S3 Settings', required: [] })
  .openapi('HlsS3Settings')

const HlsWebdavHttpTransferModeSchema = z
  .enum(['CHUNKED', 'NON_CHUNKED'])
  .openapi({ description: 'Hls Webdav Http Transfer Mode' })
  .openapi('HlsWebdavHttpTransferMode')

const HlsWebdavSettingsSchema = z
  .object({
    ConnectionRetryInterval: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'connectionRetryInterval' },
      description:
        'Number of seconds to wait before retrying connection to the CDN if the connection is lost.',
    }),
    FilecacheDuration: IntegerMin0Max600Schema.exactOptional().openapi({
      xml: { name: 'filecacheDuration' },
      description: 'Size in seconds of file cache for streaming outputs.',
    }),
    HttpTransferMode: HlsWebdavHttpTransferModeSchema.exactOptional().openapi({
      xml: { name: 'httpTransferMode' },
      description: 'Specify whether or not to use chunked transfer encoding to WebDAV.',
    }),
    NumRetries: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'numRetries' },
      description:
        'Number of retry attempts that will be made before the Live Event is put into an error state. Applies only if the CDN destination URI begins with "s3" or "mediastore". For other URIs, the value is always 3.',
    }),
    RestartDelay: IntegerMin0Max15Schema.exactOptional().openapi({
      xml: { name: 'restartDelay' },
      description:
        'If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.',
    }),
  })
  .openapi({ description: 'Hls Webdav Settings', required: [] })
  .openapi('HlsWebdavSettings')

const HlsCdnSettingsSchema = z
  .object({
    HlsAkamaiSettings: HlsAkamaiSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsAkamaiSettings' },
    }),
    HlsBasicPutSettings: HlsBasicPutSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsBasicPutSettings' },
    }),
    HlsMediaStoreSettings: HlsMediaStoreSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsMediaStoreSettings' },
    }),
    HlsS3Settings: HlsS3SettingsSchema.exactOptional().openapi({ xml: { name: 'hlsS3Settings' } }),
    HlsWebdavSettings: HlsWebdavSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsWebdavSettings' },
    }),
  })
  .openapi({ description: 'Hls Cdn Settings', required: [] })
  .openapi('HlsCdnSettings')

const HlsId3SegmentTaggingStateSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'State of HLS ID3 Segment Tagging' })
  .openapi('HlsId3SegmentTaggingState')

const IFrameOnlyPlaylistTypeSchema = z
  .enum(['DISABLED', 'STANDARD'])
  .openapi({
    description:
      'When set to "standard", an I-Frame only playlist will be written out for each video output in the output group. This I-Frame only playlist will contain byte range offsets pointing to the I-frame(s) in each segment.',
  })
  .openapi('IFrameOnlyPlaylistType')

const HlsIncompleteSegmentBehaviorSchema = z
  .enum(['AUTO', 'SUPPRESS'])
  .openapi({ description: 'Hls Incomplete Segment Behavior' })
  .openapi('HlsIncompleteSegmentBehavior')

const IntegerMin3Schema = z
  .int()
  .min(3)
  .openapi({ description: 'Placeholder documentation for __integerMin3' })
  .openapi('IntegerMin3')

const InputLossActionForHlsOutSchema = z
  .enum(['EMIT_OUTPUT', 'PAUSE_OUTPUT'])
  .openapi({ description: 'Input Loss Action For Hls Out' })
  .openapi('InputLossActionForHlsOut')

const HlsIvInManifestSchema = z
  .enum(['EXCLUDE', 'INCLUDE'])
  .openapi({ description: 'Hls Iv In Manifest' })
  .openapi('HlsIvInManifest')

const HlsIvSourceSchema = z
  .enum(['EXPLICIT', 'FOLLOWS_SEGMENT_NUMBER'])
  .openapi({ description: 'Hls Iv Source' })
  .openapi('HlsIvSource')

const StaticKeySettingsSchema = z
  .object({
    KeyProviderServer: InputLocationSchema.exactOptional().openapi({
      xml: { name: 'keyProviderServer' },
      description: 'The URL of the license server used for protecting content.',
    }),
    StaticKeyValue: StringMin32Max32Schema.openapi({
      xml: { name: 'staticKeyValue' },
      description: 'Static key value as a 32 character hexadecimal string.',
    }),
  })
  .openapi({ required: ['StaticKeyValue'], description: 'Static Key Settings' })
  .openapi('StaticKeySettings')

const KeyProviderSettingsSchema = z
  .object({
    StaticKeySettings: StaticKeySettingsSchema.exactOptional().openapi({
      xml: { name: 'staticKeySettings' },
    }),
  })
  .openapi({ description: 'Key Provider Settings', required: [] })
  .openapi('KeyProviderSettings')

const HlsManifestCompressionSchema = z
  .enum(['GZIP', 'NONE'])
  .openapi({ description: 'Hls Manifest Compression' })
  .openapi('HlsManifestCompression')

const HlsManifestDurationFormatSchema = z
  .enum(['FLOATING_POINT', 'INTEGER'])
  .openapi({ description: 'Hls Manifest Duration Format' })
  .openapi('HlsManifestDurationFormat')

const HlsModeSchema = z
  .enum(['LIVE', 'VOD'])
  .openapi({ description: 'Hls Mode' })
  .openapi('HlsMode')

const HlsOutputSelectionSchema = z
  .enum(['MANIFESTS_AND_SEGMENTS', 'SEGMENTS_ONLY', 'VARIANT_MANIFESTS_AND_SEGMENTS'])
  .openapi({ description: 'Hls Output Selection' })
  .openapi('HlsOutputSelection')

const HlsProgramDateTimeSchema = z
  .enum(['EXCLUDE', 'INCLUDE'])
  .openapi({ description: 'Hls Program Date Time' })
  .openapi('HlsProgramDateTime')

const HlsProgramDateTimeClockSchema = z
  .enum(['INITIALIZE_FROM_OUTPUT_TIMECODE', 'SYSTEM_CLOCK'])
  .openapi({ description: 'Hls Program Date Time Clock' })
  .openapi('HlsProgramDateTimeClock')

const IntegerMin0Max3600Schema = z
  .int()
  .min(0)
  .max(3600)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max3600' })
  .openapi('IntegerMin0Max3600')

const HlsRedundantManifestSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Hls Redundant Manifest' })
  .openapi('HlsRedundantManifest')

const HlsSegmentationModeSchema = z
  .enum(['USE_INPUT_SEGMENTATION', 'USE_SEGMENT_DURATION'])
  .openapi({ description: 'Hls Segmentation Mode' })
  .openapi('HlsSegmentationMode')

const HlsStreamInfResolutionSchema = z
  .enum(['EXCLUDE', 'INCLUDE'])
  .openapi({ description: 'Hls Stream Inf Resolution' })
  .openapi('HlsStreamInfResolution')

const HlsTimedMetadataId3FrameSchema = z
  .enum(['NONE', 'PRIV', 'TDRL'])
  .openapi({ description: 'Hls Timed Metadata Id3 Frame' })
  .openapi('HlsTimedMetadataId3Frame')

const HlsTsFileModeSchema = z
  .enum(['SEGMENTED_FILES', 'SINGLE_FILE'])
  .openapi({ description: 'Hls Ts File Mode' })
  .openapi('HlsTsFileMode')

const HlsGroupSettingsSchema = z
  .object({
    AdMarkers: ListOfHlsAdMarkersSchema.exactOptional().openapi({
      xml: { name: 'adMarkers' },
      description:
        'Choose one or more ad marker types to pass SCTE35 signals through to this group of Apple HLS outputs.',
    }),
    BaseUrlContent: StringSchema.exactOptional().openapi({
      xml: { name: 'baseUrlContent' },
      description:
        'A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.',
    }),
    BaseUrlContent1: StringSchema.exactOptional().openapi({
      xml: { name: 'baseUrlContent1' },
      description:
        'Optional. One value per output group.\n\nThis field is required only if you are completing Base URL content A, and the downstream system has notified you that the media files for pipeline 1 of all outputs are in a location different from the media files for pipeline 0.',
    }),
    BaseUrlManifest: StringSchema.exactOptional().openapi({
      xml: { name: 'baseUrlManifest' },
      description:
        'A partial URI prefix that will be prepended to each output in the media .m3u8 file. Can be used if base manifest is delivered from a different URL than the main .m3u8 file.',
    }),
    BaseUrlManifest1: StringSchema.exactOptional().openapi({
      xml: { name: 'baseUrlManifest1' },
      description:
        'Optional. One value per output group.\n\nComplete this field only if you are completing Base URL manifest A, and the downstream system has notified you that the child manifest files for pipeline 1 of all outputs are in a location different from the child manifest files for pipeline 0.',
    }),
    CaptionLanguageMappings: ListOfCaptionLanguageMappingSchema.exactOptional().openapi({
      xml: { name: 'captionLanguageMappings' },
      description:
        'Mapping of up to 4 caption channels to caption languages.  Is only meaningful if captionLanguageSetting is set to "insert".',
    }),
    CaptionLanguageSetting: HlsCaptionLanguageSettingSchema.exactOptional().openapi({
      xml: { name: 'captionLanguageSetting' },
      description:
        'Applies only to 608 Embedded output captions.\ninsert: Include CLOSED-CAPTIONS lines in the manifest. Specify at least one language in the CC1 Language Code field. One CLOSED-CAPTION line is added for each Language Code you specify. Make sure to specify the languages in the order in which they appear in the original source (if the source is embedded format) or the order of the caption selectors (if the source is other than embedded). Otherwise, languages in the manifest will not match up properly with the output captions.\nnone: Include CLOSED-CAPTIONS=NONE line in the manifest.\nomit: Omit any CLOSED-CAPTIONS line from the manifest.',
    }),
    ClientCache: HlsClientCacheSchema.exactOptional().openapi({
      xml: { name: 'clientCache' },
      description:
        'When set to "disabled", sets the #EXT-X-ALLOW-CACHE:no tag in the manifest, which prevents clients from saving media segments for later replay.',
    }),
    CodecSpecification: HlsCodecSpecificationSchema.exactOptional().openapi({
      xml: { name: 'codecSpecification' },
      description:
        'Specification to use (RFC-6381 or the default RFC-4281) during m3u8 playlist generation.',
    }),
    ConstantIv: StringMin32Max32Schema.exactOptional().openapi({
      xml: { name: 'constantIv' },
      description:
        'For use with encryptionType. This is a 128-bit, 16-byte hex value represented by a 32-character text string. If ivSource is set to "explicit" then this parameter is required and is used as the IV for encryption.',
    }),
    Destination: OutputLocationRefSchema.openapi({
      xml: { name: 'destination' },
      description:
        'A directory or HTTP destination for the HLS segments, manifest files, and encryption keys (if enabled).',
    }),
    DirectoryStructure: HlsDirectoryStructureSchema.exactOptional().openapi({
      xml: { name: 'directoryStructure' },
      description: 'Place segments in subdirectories.',
    }),
    DiscontinuityTags: HlsDiscontinuityTagsSchema.exactOptional().openapi({
      xml: { name: 'discontinuityTags' },
      description:
        'Specifies whether to insert EXT-X-DISCONTINUITY tags in the HLS child manifests for this output group.\nTypically, choose Insert because these tags are required in the manifest (according to the HLS specification) and serve an important purpose.\nChoose Never Insert only if the downstream system is doing real-time failover (without using the MediaLive automatic failover feature) and only if that downstream system has advised you to exclude the tags.',
    }),
    EncryptionType: HlsEncryptionTypeSchema.exactOptional().openapi({
      xml: { name: 'encryptionType' },
      description:
        'Encrypts the segments with the given encryption scheme.  Exclude this parameter if no encryption is desired.',
    }),
    HlsCdnSettings: HlsCdnSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsCdnSettings' },
      description: 'Parameters that control interactions with the CDN.',
    }),
    HlsId3SegmentTagging: HlsId3SegmentTaggingStateSchema.exactOptional().openapi({
      xml: { name: 'hlsId3SegmentTagging' },
      description: 'State of HLS ID3 Segment Tagging',
    }),
    IFrameOnlyPlaylists: IFrameOnlyPlaylistTypeSchema.exactOptional().openapi({
      xml: { name: 'iFrameOnlyPlaylists' },
      description:
        'DISABLED: Do not create an I-frame-only manifest, but do create the master and media manifests (according to the Output Selection field).\n\nSTANDARD: Create an I-frame-only manifest for each output that contains video, as well as the other manifests (according to the Output Selection field). The I-frame manifest contains a #EXT-X-I-FRAMES-ONLY tag to indicate it is I-frame only, and one or more #EXT-X-BYTERANGE entries identifying the I-frame position. For example, #EXT-X-BYTERANGE:160364@1461888"',
    }),
    IncompleteSegmentBehavior: HlsIncompleteSegmentBehaviorSchema.exactOptional().openapi({
      xml: { name: 'incompleteSegmentBehavior' },
      description:
        'Specifies whether to include the final (incomplete) segment in the media output when the pipeline stops producing output because of a channel stop, a channel pause or a loss of input to the pipeline.\nAuto means that MediaLive decides whether to include the final segment, depending on the channel class and the types of output groups.\nSuppress means to never include the incomplete segment. We recommend you choose Auto and let MediaLive control the behavior.',
    }),
    IndexNSegments: IntegerMin3Schema.exactOptional().openapi({
      xml: { name: 'indexNSegments' },
      description:
        'Applies only if Mode field is LIVE.\n\nSpecifies the maximum number of segments in the media manifest file. After this maximum, older segments are removed from the media manifest. This number must be smaller than the number in the Keep Segments field.',
    }),
    InputLossAction: InputLossActionForHlsOutSchema.exactOptional().openapi({
      xml: { name: 'inputLossAction' },
      description: 'Parameter that control output group behavior on input loss.',
    }),
    IvInManifest: HlsIvInManifestSchema.exactOptional().openapi({
      xml: { name: 'ivInManifest' },
      description:
        'For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If set to "include", IV is listed in the manifest, otherwise the IV is not in the manifest.',
    }),
    IvSource: HlsIvSourceSchema.exactOptional().openapi({
      xml: { name: 'ivSource' },
      description:
        'For use with encryptionType. The IV (Initialization Vector) is a 128-bit number used in conjunction with the key for encrypting blocks. If this setting is "followsSegmentNumber", it will cause the IV to change every segment (to match the segment number). If this is set to "explicit", you must enter a constantIv value.',
    }),
    KeepSegments: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'keepSegments' },
      description:
        'Applies only if Mode field is LIVE.\n\nSpecifies the number of media segments to retain in the destination directory. This number should be bigger than indexNSegments (Num segments). We recommend (value = (2 x indexNsegments) + 1).\n\nIf this "keep segments" number is too low, the following might happen: the player is still reading a media manifest file that lists this segment, but that segment has been removed from the destination directory (as directed by indexNSegments). This situation would result in a 404 HTTP error on the player.',
    }),
    KeyFormat: StringSchema.exactOptional().openapi({
      xml: { name: 'keyFormat' },
      description:
        'The value specifies how the key is represented in the resource identified by the URI.  If parameter is absent, an implicit value of "identity" is used.  A reverse DNS string can also be given.',
    }),
    KeyFormatVersions: StringSchema.exactOptional().openapi({
      xml: { name: 'keyFormatVersions' },
      description:
        'Either a single positive integer version value or a slash delimited list of version values (1/2/3).',
    }),
    KeyProviderSettings: KeyProviderSettingsSchema.exactOptional().openapi({
      xml: { name: 'keyProviderSettings' },
      description: 'The key provider settings.',
    }),
    ManifestCompression: HlsManifestCompressionSchema.exactOptional().openapi({
      xml: { name: 'manifestCompression' },
      description: 'When set to gzip, compresses HLS playlist.',
    }),
    ManifestDurationFormat: HlsManifestDurationFormatSchema.exactOptional().openapi({
      xml: { name: 'manifestDurationFormat' },
      description:
        'Indicates whether the output manifest should use floating point or integer values for segment duration.',
    }),
    MinSegmentLength: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'minSegmentLength' },
      description:
        'Minimum length of MPEG-2 Transport Stream segments in seconds. When set, minimum segment length is enforced by looking ahead and back within the specified range for a nearby avail and extending the segment size if needed.',
    }),
    Mode: HlsModeSchema.exactOptional().openapi({
      xml: { name: 'mode' },
      description:
        'If "vod", all segments are indexed and kept permanently in the destination and manifest. If "live", only the number segments specified in keepSegments and indexNSegments are kept; newer segments replace older segments, which may prevent players from rewinding all the way to the beginning of the event.\n\nVOD mode uses HLS EXT-X-PLAYLIST-TYPE of EVENT while the channel is running, converting it to a "VOD" type manifest on completion of the stream.',
    }),
    OutputSelection: HlsOutputSelectionSchema.exactOptional().openapi({
      xml: { name: 'outputSelection' },
      description:
        'MANIFESTS_AND_SEGMENTS: Generates manifests (master manifest, if applicable, and media manifests) for this output group.\n\nVARIANT_MANIFESTS_AND_SEGMENTS: Generates media manifests for this output group, but not a master manifest.\n\nSEGMENTS_ONLY: Does not generate any manifests for this output group.',
    }),
    ProgramDateTime: HlsProgramDateTimeSchema.exactOptional().openapi({
      xml: { name: 'programDateTime' },
      description:
        'Includes or excludes EXT-X-PROGRAM-DATE-TIME tag in .m3u8 manifest files. The value is calculated using the program date time clock.',
    }),
    ProgramDateTimeClock: HlsProgramDateTimeClockSchema.exactOptional().openapi({
      xml: { name: 'programDateTimeClock' },
      description:
        'Specifies the algorithm used to drive the HLS EXT-X-PROGRAM-DATE-TIME clock. Options include:\n\nINITIALIZE_FROM_OUTPUT_TIMECODE: The PDT clock is initialized as a function of the first output timecode, then incremented by the EXTINF duration of each encoded segment.\n\nSYSTEM_CLOCK: The PDT clock is initialized as a function of the UTC wall clock, then incremented by the EXTINF duration of each encoded segment. If the PDT clock diverges from the wall clock by more than 500ms, it is resynchronized to the wall clock.',
    }),
    ProgramDateTimePeriod: IntegerMin0Max3600Schema.exactOptional().openapi({
      xml: { name: 'programDateTimePeriod' },
      description: 'Period of insertion of EXT-X-PROGRAM-DATE-TIME entry, in seconds.',
    }),
    RedundantManifest: HlsRedundantManifestSchema.exactOptional().openapi({
      xml: { name: 'redundantManifest' },
      description:
        'ENABLED: The master manifest (.m3u8 file) for each pipeline includes information about both pipelines: first its own media files, then the media files of the other pipeline. This feature allows playout device that support stale manifest detection to switch from one manifest to the other, when the current manifest seems to be stale. There are still two destinations and two master manifests, but both master manifests reference the media files from both pipelines.\n\nDISABLED: The master manifest (.m3u8 file) for each pipeline includes information about its own pipeline only.\n\nFor an HLS output group with MediaPackage as the destination, the DISABLED behavior is always followed. MediaPackage regenerates the manifests it serves to players so a redundant manifest from MediaLive is irrelevant.',
    }),
    SegmentLength: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'segmentLength' },
      description:
        'Length of MPEG-2 Transport Stream segments to create in seconds. Note that segments will end on the next keyframe after this duration, so actual segment length may be longer.',
    }),
    SegmentationMode: HlsSegmentationModeSchema.exactOptional().openapi({
      xml: { name: 'segmentationMode' },
      description:
        'useInputSegmentation has been deprecated. The configured segment size is always used.',
    }),
    SegmentsPerSubdirectory: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'segmentsPerSubdirectory' },
      description:
        'Number of segments to write to a subdirectory before starting a new one. directoryStructure must be subdirectoryPerStream for this setting to have an effect.',
    }),
    StreamInfResolution: HlsStreamInfResolutionSchema.exactOptional().openapi({
      xml: { name: 'streamInfResolution' },
      description:
        'Include or exclude RESOLUTION attribute for video in EXT-X-STREAM-INF tag of variant manifest.',
    }),
    TimedMetadataId3Frame: HlsTimedMetadataId3FrameSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataId3Frame' },
      description: 'Indicates ID3 frame that has the timecode.',
    }),
    TimedMetadataId3Period: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'timedMetadataId3Period' },
      description: 'Timed Metadata interval in seconds.',
    }),
    TimestampDeltaMilliseconds: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'timestampDeltaMilliseconds' },
      description: 'Provides an extra millisecond delta offset to fine tune the timestamps.',
    }),
    TsFileMode: HlsTsFileModeSchema.exactOptional().openapi({
      xml: { name: 'tsFileMode' },
      description:
        'SEGMENTED_FILES: Emit the program as segments - multiple .ts media files.\n\nSINGLE_FILE: Applies only if Mode field is VOD. Emit the program as a single .ts media file. The media manifest includes #EXT-X-BYTERANGE tags to index segments for playback. A typical use for this value is when sending the output to AWS Elemental MediaConvert, which can accept only a single media file. Playback while the channel is running is not guaranteed due to HTTP server caching.',
    }),
  })
  .openapi({ required: ['Destination'], description: 'Hls Group Settings' })
  .openapi('HlsGroupSettings')

const MediaPackageGroupSettingsSchema = z
  .object({
    Destination: OutputLocationRefSchema.openapi({
      xml: { name: 'destination' },
      description: 'MediaPackage channel destination.',
    }),
  })
  .openapi({ required: ['Destination'], description: 'Media Package Group Settings' })
  .openapi('MediaPackageGroupSettings')

const SmoothGroupAudioOnlyTimecodeControlSchema = z
  .enum(['PASSTHROUGH', 'USE_CONFIGURED_CLOCK'])
  .openapi({ description: 'Smooth Group Audio Only Timecode Control' })
  .openapi('SmoothGroupAudioOnlyTimecodeControl')

const SmoothGroupCertificateModeSchema = z
  .enum(['SELF_SIGNED', 'VERIFY_AUTHENTICITY'])
  .openapi({ description: 'Smooth Group Certificate Mode' })
  .openapi('SmoothGroupCertificateMode')

const SmoothGroupEventIdModeSchema = z
  .enum(['NO_EVENT_ID', 'USE_CONFIGURED', 'USE_TIMESTAMP'])
  .openapi({ description: 'Smooth Group Event Id Mode' })
  .openapi('SmoothGroupEventIdMode')

const SmoothGroupEventStopBehaviorSchema = z
  .enum(['NONE', 'SEND_EOS'])
  .openapi({ description: 'Smooth Group Event Stop Behavior' })
  .openapi('SmoothGroupEventStopBehavior')

const InputLossActionForMsSmoothOutSchema = z
  .enum(['EMIT_OUTPUT', 'PAUSE_OUTPUT'])
  .openapi({ description: 'Input Loss Action For Ms Smooth Out' })
  .openapi('InputLossActionForMsSmoothOut')

const SmoothGroupSegmentationModeSchema = z
  .enum(['USE_INPUT_SEGMENTATION', 'USE_SEGMENT_DURATION'])
  .openapi({ description: 'Smooth Group Segmentation Mode' })
  .openapi('SmoothGroupSegmentationMode')

const IntegerMin0Max10000Schema = z
  .int()
  .min(0)
  .max(10000)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max10000' })
  .openapi('IntegerMin0Max10000')

const SmoothGroupSparseTrackTypeSchema = z
  .enum(['NONE', 'SCTE_35', 'SCTE_35_WITHOUT_SEGMENTATION'])
  .openapi({ description: 'Smooth Group Sparse Track Type' })
  .openapi('SmoothGroupSparseTrackType')

const SmoothGroupStreamManifestBehaviorSchema = z
  .enum(['DO_NOT_SEND', 'SEND'])
  .openapi({ description: 'Smooth Group Stream Manifest Behavior' })
  .openapi('SmoothGroupStreamManifestBehavior')

const SmoothGroupTimestampOffsetModeSchema = z
  .enum(['USE_CONFIGURED_OFFSET', 'USE_EVENT_START_DATE'])
  .openapi({ description: 'Smooth Group Timestamp Offset Mode' })
  .openapi('SmoothGroupTimestampOffsetMode')

const MsSmoothGroupSettingsSchema = z
  .object({
    AcquisitionPointId: StringSchema.exactOptional().openapi({
      xml: { name: 'acquisitionPointId' },
      description:
        'The ID to include in each message in the sparse track. Ignored if sparseTrackType is NONE.',
    }),
    AudioOnlyTimecodeControl: SmoothGroupAudioOnlyTimecodeControlSchema.exactOptional().openapi({
      xml: { name: 'audioOnlyTimecodeControl' },
      description:
        'If set to passthrough for an audio-only MS Smooth output, the fragment absolute time will be set to the current timecode. This option does not write timecodes to the audio elementary stream.',
    }),
    CertificateMode: SmoothGroupCertificateModeSchema.exactOptional().openapi({
      xml: { name: 'certificateMode' },
      description:
        'If set to verifyAuthenticity, verify the https certificate chain to a trusted Certificate Authority (CA).  This will cause https outputs to self-signed certificates to fail.',
    }),
    ConnectionRetryInterval: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'connectionRetryInterval' },
      description:
        'Number of seconds to wait before retrying connection to the IIS server if the connection is lost. Content will be cached during this time and the cache will be be delivered to the IIS server once the connection is re-established.',
    }),
    Destination: OutputLocationRefSchema.openapi({
      xml: { name: 'destination' },
      description:
        'Smooth Streaming publish point on an IIS server. Elemental Live acts as a "Push" encoder to IIS.',
    }),
    EventId: StringSchema.exactOptional().openapi({
      xml: { name: 'eventId' },
      description:
        'MS Smooth event ID to be sent to the IIS server.\n\nShould only be specified if eventIdMode is set to useConfigured.',
    }),
    EventIdMode: SmoothGroupEventIdModeSchema.exactOptional().openapi({
      xml: { name: 'eventIdMode' },
      description:
        'Specifies whether or not to send an event ID to the IIS server. If no event ID is sent and the same Live Event is used without changing the publishing point, clients might see cached video from the previous run.\n\nOptions:\n- "useConfigured" - use the value provided in eventId\n- "useTimestamp" - generate and send an event ID based on the current timestamp\n- "noEventId" - do not send an event ID to the IIS server.',
    }),
    EventStopBehavior: SmoothGroupEventStopBehaviorSchema.exactOptional().openapi({
      xml: { name: 'eventStopBehavior' },
      description: 'When set to sendEos, send EOS signal to IIS server when stopping the event',
    }),
    FilecacheDuration: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'filecacheDuration' },
      description: 'Size in seconds of file cache for streaming outputs.',
    }),
    FragmentLength: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'fragmentLength' },
      description:
        'Length of mp4 fragments to generate (in seconds). Fragment length must be compatible with GOP size and framerate.',
    }),
    InputLossAction: InputLossActionForMsSmoothOutSchema.exactOptional().openapi({
      xml: { name: 'inputLossAction' },
      description: 'Parameter that control output group behavior on input loss.',
    }),
    NumRetries: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'numRetries' },
      description: 'Number of retry attempts.',
    }),
    RestartDelay: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'restartDelay' },
      description:
        'Number of seconds before initiating a restart due to output failure, due to exhausting the numRetries on one segment, or exceeding filecacheDuration.',
    }),
    SegmentationMode: SmoothGroupSegmentationModeSchema.exactOptional().openapi({
      xml: { name: 'segmentationMode' },
      description:
        'useInputSegmentation has been deprecated. The configured segment size is always used.',
    }),
    SendDelayMs: IntegerMin0Max10000Schema.exactOptional().openapi({
      xml: { name: 'sendDelayMs' },
      description: 'Number of milliseconds to delay the output from the second pipeline.',
    }),
    SparseTrackType: SmoothGroupSparseTrackTypeSchema.exactOptional().openapi({
      xml: { name: 'sparseTrackType' },
      description:
        "Identifies the type of data to place in the sparse track:\n- SCTE35: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame to start a new segment.\n- SCTE35_WITHOUT_SEGMENTATION: Insert SCTE-35 messages from the source content. With each message, insert an IDR frame but don't start a new segment.\n- NONE: Don't generate a sparse track for any outputs in this output group.",
    }),
    StreamManifestBehavior: SmoothGroupStreamManifestBehaviorSchema.exactOptional().openapi({
      xml: { name: 'streamManifestBehavior' },
      description:
        "When set to send, send stream manifest so publishing point doesn't start until all streams start.",
    }),
    TimestampOffset: StringSchema.exactOptional().openapi({
      xml: { name: 'timestampOffset' },
      description:
        'Timestamp offset for the event.  Only used if timestampOffsetMode is set to useConfiguredOffset.',
    }),
    TimestampOffsetMode: SmoothGroupTimestampOffsetModeSchema.exactOptional().openapi({
      xml: { name: 'timestampOffsetMode' },
      description:
        'Type of timestamp date offset to use.\n- useEventStartDate: Use the date the event was started as the offset\n- useConfiguredOffset: Use an explicitly configured date as the offset',
    }),
  })
  .openapi({ required: ['Destination'], description: 'Ms Smooth Group Settings' })
  .openapi('MsSmoothGroupSettings')

const MultiplexGroupSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Multiplex Group Settings' })
  .openapi('MultiplexGroupSettings')

const RtmpAdMarkersSchema = z
  .literal('ON_CUE_POINT_SCTE35')
  .openapi({ description: 'Rtmp Ad Markers' })
  .openapi('RtmpAdMarkers')

const ListOfRtmpAdMarkersSchema = z
  .array(RtmpAdMarkersSchema)
  .openapi({ description: 'Placeholder documentation for __listOfRtmpAdMarkers' })
  .openapi('ListOfRtmpAdMarkers')

const AuthenticationSchemeSchema = z
  .enum(['AKAMAI', 'COMMON'])
  .openapi({ description: 'Authentication Scheme' })
  .openapi('AuthenticationScheme')

const RtmpCacheFullBehaviorSchema = z
  .enum(['DISCONNECT_IMMEDIATELY', 'WAIT_FOR_SERVER'])
  .openapi({ description: 'Rtmp Cache Full Behavior' })
  .openapi('RtmpCacheFullBehavior')

const IntegerMin30Schema = z
  .int()
  .min(30)
  .openapi({ description: 'Placeholder documentation for __integerMin30' })
  .openapi('IntegerMin30')

const RtmpCaptionDataSchema = z
  .enum(['ALL', 'FIELD1_608', 'FIELD1_AND_FIELD2_608'])
  .openapi({ description: 'Rtmp Caption Data' })
  .openapi('RtmpCaptionData')

const InputLossActionForRtmpOutSchema = z
  .enum(['EMIT_OUTPUT', 'PAUSE_OUTPUT'])
  .openapi({ description: 'Input Loss Action For Rtmp Out' })
  .openapi('InputLossActionForRtmpOut')

const RtmpGroupSettingsSchema = z
  .object({
    AdMarkers: ListOfRtmpAdMarkersSchema.exactOptional().openapi({
      xml: { name: 'adMarkers' },
      description:
        'Choose the ad marker type for this output group. MediaLive will create a message based on the content of each SCTE-35 message, format it for that marker type, and insert it in the datastream.',
    }),
    AuthenticationScheme: AuthenticationSchemeSchema.exactOptional().openapi({
      xml: { name: 'authenticationScheme' },
      description: 'Authentication scheme to use when connecting with CDN',
    }),
    CacheFullBehavior: RtmpCacheFullBehaviorSchema.exactOptional().openapi({
      xml: { name: 'cacheFullBehavior' },
      description:
        "Controls behavior when content cache fills up. If remote origin server stalls the RTMP connection and does not accept content fast enough the 'Media Cache' will fill up. When the cache reaches the duration specified by cacheLength the cache will stop accepting new content. If set to disconnectImmediately, the RTMP output will force a disconnect. Clear the media cache, and reconnect after restartDelay seconds. If set to waitForServer, the RTMP output will wait up to 5 minutes to allow the origin server to begin accepting data again.",
    }),
    CacheLength: IntegerMin30Schema.exactOptional().openapi({
      xml: { name: 'cacheLength' },
      description: 'Cache length, in seconds, is used to calculate buffer size.',
    }),
    CaptionData: RtmpCaptionDataSchema.exactOptional().openapi({
      xml: { name: 'captionData' },
      description:
        "Controls the types of data that passes to onCaptionInfo outputs.  If set to 'all' then 608 and 708 carried DTVCC data will be passed.  If set to 'field1AndField2608' then DTVCC data will be stripped out, but 608 data from both fields will be passed. If set to 'field1608' then only the data carried in 608 from field 1 video will be passed.",
    }),
    InputLossAction: InputLossActionForRtmpOutSchema.exactOptional().openapi({
      xml: { name: 'inputLossAction' },
      description:
        'Controls the behavior of this RTMP group if input becomes unavailable.\n\n- emitOutput: Emit a slate until input returns.\n- pauseOutput: Stop transmitting data until input returns. This does not close the underlying RTMP connection.',
    }),
    RestartDelay: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'restartDelay' },
      description:
        'If a streaming output fails, number of seconds to wait until a restart is initiated. A value of 0 means never restart.',
    }),
  })
  .openapi({ description: 'Rtmp Group Settings', required: [] })
  .openapi('RtmpGroupSettings')

const InputLossActionForUdpOutSchema = z
  .enum(['DROP_PROGRAM', 'DROP_TS', 'EMIT_PROGRAM'])
  .openapi({ description: 'Input Loss Action For Udp Out' })
  .openapi('InputLossActionForUdpOut')

const UdpTimedMetadataId3FrameSchema = z
  .enum(['NONE', 'PRIV', 'TDRL'])
  .openapi({ description: 'Udp Timed Metadata Id3 Frame' })
  .openapi('UdpTimedMetadataId3Frame')

const UdpGroupSettingsSchema = z
  .object({
    InputLossAction: InputLossActionForUdpOutSchema.exactOptional().openapi({
      xml: { name: 'inputLossAction' },
      description:
        'Specifies behavior of last resort when input video is lost, and no more backup inputs are available. When dropTs is selected the entire transport stream will stop being emitted.  When dropProgram is selected the program can be dropped from the transport stream (and replaced with null packets to meet the TS bitrate requirement).  Or, when emitProgram is chosen the transport stream will continue to be produced normally with repeat frames, black frames, or slate frames substituted for the absent input video.',
    }),
    TimedMetadataId3Frame: UdpTimedMetadataId3FrameSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataId3Frame' },
      description: 'Indicates ID3 frame that has the timecode.',
    }),
    TimedMetadataId3Period: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'timedMetadataId3Period' },
      description: 'Timed Metadata interval in seconds.',
    }),
  })
  .openapi({ description: 'Udp Group Settings', required: [] })
  .openapi('UdpGroupSettings')

const OutputGroupSettingsSchema = z
  .object({
    ArchiveGroupSettings: ArchiveGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'archiveGroupSettings' },
    }),
    FrameCaptureGroupSettings: FrameCaptureGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'frameCaptureGroupSettings' },
    }),
    HlsGroupSettings: HlsGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsGroupSettings' },
    }),
    MediaPackageGroupSettings: MediaPackageGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'mediaPackageGroupSettings' },
    }),
    MsSmoothGroupSettings: MsSmoothGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'msSmoothGroupSettings' },
    }),
    MultiplexGroupSettings: MultiplexGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexGroupSettings' },
    }),
    RtmpGroupSettings: RtmpGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'rtmpGroupSettings' },
    }),
    UdpGroupSettings: UdpGroupSettingsSchema.exactOptional().openapi({
      xml: { name: 'udpGroupSettings' },
    }),
  })
  .openapi({ description: 'Output Group Settings', required: [] })
  .openapi('OutputGroupSettings')

const StringMin1Max255Schema = z
  .string()
  .min(1)
  .max(255)
  .openapi({ description: 'Placeholder documentation for __stringMin1Max255' })
  .openapi('StringMin1Max255')

const M2tsAbsentInputAudioBehaviorSchema = z
  .enum(['DROP', 'ENCODE_SILENCE'])
  .openapi({ description: 'M2ts Absent Input Audio Behavior' })
  .openapi('M2tsAbsentInputAudioBehavior')

const M2tsAribSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'M2ts Arib' })
  .openapi('M2tsArib')

const M2tsAribCaptionsPidControlSchema = z
  .enum(['AUTO', 'USE_CONFIGURED'])
  .openapi({ description: 'M2ts Arib Captions Pid Control' })
  .openapi('M2tsAribCaptionsPidControl')

const M2tsAudioBufferModelSchema = z
  .enum(['ATSC', 'DVB'])
  .openapi({ description: 'M2ts Audio Buffer Model' })
  .openapi('M2tsAudioBufferModel')

const M2tsAudioStreamTypeSchema = z
  .enum(['ATSC', 'DVB'])
  .openapi({ description: 'M2ts Audio Stream Type' })
  .openapi('M2tsAudioStreamType')

const M2tsBufferModelSchema = z
  .enum(['MULTIPLEX', 'NONE'])
  .openapi({ description: 'M2ts Buffer Model' })
  .openapi('M2tsBufferModel')

const M2tsCcDescriptorSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'M2ts Cc Descriptor' })
  .openapi('M2tsCcDescriptor')

const IntegerMin0Max65536Schema = z
  .int()
  .min(0)
  .max(65536)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max65536' })
  .openapi('IntegerMin0Max65536')

const StringMin1Max256Schema = z
  .string()
  .min(1)
  .max(256)
  .openapi({ description: 'Placeholder documentation for __stringMin1Max256' })
  .openapi('StringMin1Max256')

const IntegerMin25Max10000Schema = z
  .int()
  .min(25)
  .max(10000)
  .openapi({ description: 'Placeholder documentation for __integerMin25Max10000' })
  .openapi('IntegerMin25Max10000')

const DvbNitSettingsSchema = z
  .object({
    NetworkId: IntegerMin0Max65536Schema.openapi({
      xml: { name: 'networkId' },
      description: 'The numeric value placed in the Network Information Table (NIT).',
    }),
    NetworkName: StringMin1Max256Schema.openapi({
      xml: { name: 'networkName' },
      description:
        'The network name text placed in the networkNameDescriptor inside the Network Information Table. Maximum length is 256 characters.',
    }),
    RepInterval: IntegerMin25Max10000Schema.exactOptional().openapi({
      xml: { name: 'repInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
  })
  .openapi({
    required: ['NetworkName', 'NetworkId'],
    description: 'DVB Network Information Table (NIT)',
  })
  .openapi('DvbNitSettings')

const DvbSdtOutputSdtSchema = z
  .enum(['SDT_FOLLOW', 'SDT_FOLLOW_IF_PRESENT', 'SDT_MANUAL', 'SDT_NONE'])
  .openapi({ description: 'Dvb Sdt Output Sdt' })
  .openapi('DvbSdtOutputSdt')

const IntegerMin25Max2000Schema = z
  .int()
  .min(25)
  .max(2000)
  .openapi({ description: 'Placeholder documentation for __integerMin25Max2000' })
  .openapi('IntegerMin25Max2000')

const DvbSdtSettingsSchema = z
  .object({
    OutputSdt: DvbSdtOutputSdtSchema.exactOptional().openapi({
      xml: { name: 'outputSdt' },
      description:
        'Selects method of inserting SDT information into output stream. The sdtFollow setting copies SDT information from input stream to output stream. The sdtFollowIfPresent setting copies SDT information from input stream to output stream if SDT information is present in the input, otherwise it will fall back on the user-defined values. The sdtManual setting means user will enter the SDT information. The sdtNone setting means output stream will not contain SDT information.',
    }),
    RepInterval: IntegerMin25Max2000Schema.exactOptional().openapi({
      xml: { name: 'repInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
    ServiceName: StringMin1Max256Schema.exactOptional().openapi({
      xml: { name: 'serviceName' },
      description:
        'The service name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.',
    }),
    ServiceProviderName: StringMin1Max256Schema.exactOptional().openapi({
      xml: { name: 'serviceProviderName' },
      description:
        'The service provider name placed in the serviceDescriptor in the Service Description Table. Maximum length is 256 characters.',
    }),
  })
  .openapi({ description: 'DVB Service Description Table (SDT)', required: [] })
  .openapi('DvbSdtSettings')

const IntegerMin1000Max30000Schema = z
  .int()
  .min(1000)
  .max(30000)
  .openapi({ description: 'Placeholder documentation for __integerMin1000Max30000' })
  .openapi('IntegerMin1000Max30000')

const DvbTdtSettingsSchema = z
  .object({
    RepInterval: IntegerMin1000Max30000Schema.exactOptional().openapi({
      xml: { name: 'repInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.',
    }),
  })
  .openapi({ description: 'DVB Time and Date Table (SDT)', required: [] })
  .openapi('DvbTdtSettings')

const M2tsEbifControlSchema = z
  .enum(['NONE', 'PASSTHROUGH'])
  .openapi({ description: 'M2ts Ebif Control' })
  .openapi('M2tsEbifControl')

const M2tsAudioIntervalSchema = z
  .enum(['VIDEO_AND_FIXED_INTERVALS', 'VIDEO_INTERVAL'])
  .openapi({ description: 'M2ts Audio Interval' })
  .openapi('M2tsAudioInterval')

const M2tsEbpPlacementSchema = z
  .enum(['VIDEO_AND_AUDIO_PIDS', 'VIDEO_PID'])
  .openapi({ description: 'M2ts Ebp Placement' })
  .openapi('M2tsEbpPlacement')

const M2tsEsRateInPesSchema = z
  .enum(['EXCLUDE', 'INCLUDE'])
  .openapi({ description: 'M2ts Es Rate In Pes' })
  .openapi('M2tsEsRateInPes')

const DoubleMin0Schema = z
  .float64()
  .openapi({ description: 'Placeholder documentation for __doubleMin0' })
  .openapi('DoubleMin0')

const M2tsKlvSchema = z
  .enum(['NONE', 'PASSTHROUGH'])
  .openapi({ description: 'M2ts Klv' })
  .openapi('M2tsKlv')

const M2tsNielsenId3BehaviorSchema = z
  .enum(['NO_PASSTHROUGH', 'PASSTHROUGH'])
  .openapi({ description: 'M2ts Nielsen Id3 Behavior' })
  .openapi('M2tsNielsenId3Behavior')

const IntegerMin0Max1000Schema = z
  .int()
  .min(0)
  .max(1000)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max1000' })
  .openapi('IntegerMin0Max1000')

const M2tsPcrControlSchema = z
  .enum(['CONFIGURED_PCR_PERIOD', 'PCR_EVERY_PES_PACKET'])
  .openapi({ description: 'M2ts Pcr Control' })
  .openapi('M2tsPcrControl')

const IntegerMin0Max500Schema = z
  .int()
  .min(0)
  .max(500)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max500' })
  .openapi('IntegerMin0Max500')

const IntegerMin0Max65535Schema = z
  .int()
  .min(0)
  .max(65535)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max65535' })
  .openapi('IntegerMin0Max65535')

const M2tsRateModeSchema = z
  .enum(['CBR', 'VBR'])
  .openapi({ description: 'M2ts Rate Mode' })
  .openapi('M2tsRateMode')

const M2tsScte35ControlSchema = z
  .enum(['NONE', 'PASSTHROUGH'])
  .openapi({ description: 'M2ts Scte35 Control' })
  .openapi('M2tsScte35Control')

const M2tsSegmentationMarkersSchema = z
  .enum(['EBP', 'EBP_LEGACY', 'NONE', 'PSI_SEGSTART', 'RAI_ADAPT', 'RAI_SEGSTART'])
  .openapi({ description: 'M2ts Segmentation Markers' })
  .openapi('M2tsSegmentationMarkers')

const M2tsSegmentationStyleSchema = z
  .enum(['MAINTAIN_CADENCE', 'RESET_CADENCE'])
  .openapi({ description: 'M2ts Segmentation Style' })
  .openapi('M2tsSegmentationStyle')

const DoubleMin1Schema = z
  .float64()
  .openapi({ description: 'Placeholder documentation for __doubleMin1' })
  .openapi('DoubleMin1')

const M2tsTimedMetadataBehaviorSchema = z
  .enum(['NO_PASSTHROUGH', 'PASSTHROUGH'])
  .openapi({ description: 'M2ts Timed Metadata Behavior' })
  .openapi('M2tsTimedMetadataBehavior')

const DoubleMin0Max5000Schema = z
  .float64()
  .openapi({ description: 'Placeholder documentation for __doubleMin0Max5000' })
  .openapi('DoubleMin0Max5000')

const M2tsSettingsSchema = z
  .object({
    AbsentInputAudioBehavior: M2tsAbsentInputAudioBehaviorSchema.exactOptional().openapi({
      xml: { name: 'absentInputAudioBehavior' },
      description:
        'When set to drop, output audio streams will be removed from the program if the selected input audio stream is removed from the input. This allows the output audio configuration to dynamically change based on input configuration. If this is set to encodeSilence, all output audio streams will output encoded silence when not connected to an active input stream.',
    }),
    Arib: M2tsAribSchema.exactOptional().openapi({
      xml: { name: 'arib' },
      description:
        'When set to enabled, uses ARIB-compliant field muxing and removes video descriptor.',
    }),
    AribCaptionsPid: StringSchema.exactOptional().openapi({
      xml: { name: 'aribCaptionsPid' },
      description:
        'Packet Identifier (PID) for ARIB Captions in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    AribCaptionsPidControl: M2tsAribCaptionsPidControlSchema.exactOptional().openapi({
      xml: { name: 'aribCaptionsPidControl' },
      description:
        'If set to auto, pid number used for ARIB Captions will be auto-selected from unused pids.  If set to useConfigured, ARIB Captions will be on the configured pid number.',
    }),
    AudioBufferModel: M2tsAudioBufferModelSchema.exactOptional().openapi({
      xml: { name: 'audioBufferModel' },
      description:
        'When set to dvb, uses DVB buffer model for Dolby Digital audio.  When set to atsc, the ATSC model is used.',
    }),
    AudioFramesPerPes: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'audioFramesPerPes' },
      description: 'The number of audio frames to insert for each PES packet.',
    }),
    AudioPids: StringSchema.exactOptional().openapi({
      xml: { name: 'audioPids' },
      description:
        'Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values. Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    AudioStreamType: M2tsAudioStreamTypeSchema.exactOptional().openapi({
      xml: { name: 'audioStreamType' },
      description:
        'When set to atsc, uses stream type = 0x81 for AC3 and stream type = 0x87 for EAC3. When set to dvb, uses stream type = 0x06.',
    }),
    Bitrate: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'The output bitrate of the transport stream in bits per second. Setting to 0 lets the muxer automatically determine the appropriate bitrate.',
    }),
    BufferModel: M2tsBufferModelSchema.exactOptional().openapi({
      xml: { name: 'bufferModel' },
      description:
        'Controls the timing accuracy for output network traffic. Leave as MULTIPLEX to ensure accurate network packet timing. Or set to NONE, which might result in lower latency but will result in more variability in output network packet timing. This variability might cause interruptions, jitter, or bursty behavior in your playback or receiving devices.',
    }),
    CcDescriptor: M2tsCcDescriptorSchema.exactOptional().openapi({
      xml: { name: 'ccDescriptor' },
      description: 'When set to enabled, generates captionServiceDescriptor in PMT.',
    }),
    DvbNitSettings: DvbNitSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbNitSettings' },
      description:
        'Inserts DVB Network Information Table (NIT) at the specified table repetition interval.',
    }),
    DvbSdtSettings: DvbSdtSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbSdtSettings' },
      description:
        'Inserts DVB Service Description Table (SDT) at the specified table repetition interval.',
    }),
    DvbSubPids: StringSchema.exactOptional().openapi({
      xml: { name: 'dvbSubPids' },
      description:
        'Packet Identifier (PID) for input source DVB Subtitle data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    DvbTdtSettings: DvbTdtSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbTdtSettings' },
      description:
        'Inserts DVB Time and Date Table (TDT) at the specified table repetition interval.',
    }),
    DvbTeletextPid: StringSchema.exactOptional().openapi({
      xml: { name: 'dvbTeletextPid' },
      description:
        'Packet Identifier (PID) for input source DVB Teletext data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    Ebif: M2tsEbifControlSchema.exactOptional().openapi({
      xml: { name: 'ebif' },
      description:
        'If set to passthrough, passes any EBIF data from the input source to this output.',
    }),
    EbpAudioInterval: M2tsAudioIntervalSchema.exactOptional().openapi({
      xml: { name: 'ebpAudioInterval' },
      description:
        'When videoAndFixedIntervals is selected, audio EBP markers will be added to partitions 3 and 4. The interval between these additional markers will be fixed, and will be slightly shorter than the video EBP marker interval. Only available when EBP Cablelabs segmentation markers are selected.  Partitions 1 and 2 will always follow the video interval.',
    }),
    EbpLookaheadMs: IntegerMin0Max10000Schema.exactOptional().openapi({
      xml: { name: 'ebpLookaheadMs' },
      description:
        'When set, enforces that Encoder Boundary Points do not come within the specified time interval of each other by looking ahead at input video. If another EBP is going to come in within the specified time interval, the current EBP is not emitted, and the segment is "stretched" to the next marker.  The lookahead value does not add latency to the system. The Live Event must be configured elsewhere to create sufficient latency to make the lookahead accurate.',
    }),
    EbpPlacement: M2tsEbpPlacementSchema.exactOptional().openapi({
      xml: { name: 'ebpPlacement' },
      description:
        'Controls placement of EBP on Audio PIDs. If set to videoAndAudioPids, EBP markers will be placed on the video PID and all audio PIDs.  If set to videoPid, EBP markers will be placed on only the video PID.',
    }),
    EcmPid: StringSchema.exactOptional().openapi({
      xml: { name: 'ecmPid' },
      description: 'This field is unused and deprecated.',
    }),
    EsRateInPes: M2tsEsRateInPesSchema.exactOptional().openapi({
      xml: { name: 'esRateInPes' },
      description: 'Include or exclude the ES Rate field in the PES header.',
    }),
    EtvPlatformPid: StringSchema.exactOptional().openapi({
      xml: { name: 'etvPlatformPid' },
      description:
        'Packet Identifier (PID) for input source ETV Platform data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    EtvSignalPid: StringSchema.exactOptional().openapi({
      xml: { name: 'etvSignalPid' },
      description:
        'Packet Identifier (PID) for input source ETV Signal data to this output. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    FragmentTime: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'fragmentTime' },
      description: 'The length in seconds of each fragment. Only used with EBP markers.',
    }),
    Klv: M2tsKlvSchema.exactOptional().openapi({
      xml: { name: 'klv' },
      description:
        'If set to passthrough, passes any KLV data from the input source to this output.',
    }),
    KlvDataPids: StringSchema.exactOptional().openapi({
      xml: { name: 'klvDataPids' },
      description:
        'Packet Identifier (PID) for input source KLV data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    NielsenId3Behavior: M2tsNielsenId3BehaviorSchema.exactOptional().openapi({
      xml: { name: 'nielsenId3Behavior' },
      description:
        'If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.',
    }),
    NullPacketBitrate: DoubleMin0Schema.exactOptional().openapi({
      xml: { name: 'nullPacketBitrate' },
      description:
        'Value in bits per second of extra null packets to insert into the transport stream. This can be used if a downstream encryption system requires periodic null packets.',
    }),
    PatInterval: IntegerMin0Max1000Schema.exactOptional().openapi({
      xml: { name: 'patInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream.  Valid values are 0, 10..1000.',
    }),
    PcrControl: M2tsPcrControlSchema.exactOptional().openapi({
      xml: { name: 'pcrControl' },
      description:
        'When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.',
    }),
    PcrPeriod: IntegerMin0Max500Schema.exactOptional().openapi({
      xml: { name: 'pcrPeriod' },
      description:
        'Maximum time in milliseconds between Program Clock Reference (PCRs) inserted into the transport stream.',
    }),
    PcrPid: StringSchema.exactOptional().openapi({
      xml: { name: 'pcrPid' },
      description:
        'Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    PmtInterval: IntegerMin0Max1000Schema.exactOptional().openapi({
      xml: { name: 'pmtInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream. Valid values are 0, 10..1000.',
    }),
    PmtPid: StringSchema.exactOptional().openapi({
      xml: { name: 'pmtPid' },
      description:
        'Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value. Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    ProgramNum: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'programNum' },
      description: 'The value of the program number field in the Program Map Table.',
    }),
    RateMode: M2tsRateModeSchema.exactOptional().openapi({
      xml: { name: 'rateMode' },
      description:
        'When vbr, does not insert null packets into transport stream to fill specified bitrate. The bitrate setting acts as the maximum bitrate when vbr is set.',
    }),
    Scte27Pids: StringSchema.exactOptional().openapi({
      xml: { name: 'scte27Pids' },
      description:
        'Packet Identifier (PID) for input source SCTE-27 data to this output. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.  Each PID specified must be in the range of 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    Scte35Control: M2tsScte35ControlSchema.exactOptional().openapi({
      xml: { name: 'scte35Control' },
      description: 'Optionally pass SCTE-35 signals from the input source to this output.',
    }),
    Scte35Pid: StringSchema.exactOptional().openapi({
      xml: { name: 'scte35Pid' },
      description:
        'Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    SegmentationMarkers: M2tsSegmentationMarkersSchema.exactOptional().openapi({
      xml: { name: 'segmentationMarkers' },
      description:
        'Inserts segmentation markers at each segmentationTime period. raiSegstart sets the Random Access Indicator bit in the adaptation field. raiAdapt sets the RAI bit and adds the current timecode in the private data bytes. psiSegstart inserts PAT and PMT tables at the start of segments. ebp adds Encoder Boundary Point information to the adaptation field as per OpenCable specification OC-SP-EBP-I01-130118. ebpLegacy adds Encoder Boundary Point information to the adaptation field using a legacy proprietary format.',
    }),
    SegmentationStyle: M2tsSegmentationStyleSchema.exactOptional().openapi({
      xml: { name: 'segmentationStyle' },
      description:
        'The segmentation style parameter controls how segmentation markers are inserted into the transport stream. With avails, it is possible that segments may be truncated, which can influence where future segmentation markers are inserted.\n\nWhen a segmentation style of "resetCadence" is selected and a segment is truncated due to an avail, we will reset the segmentation cadence. This means the subsequent segment will have a duration of $segmentationTime seconds.\n\nWhen a segmentation style of "maintainCadence" is selected and a segment is truncated due to an avail, we will not reset the segmentation cadence. This means the subsequent segment will likely be truncated as well. However, all segments after that will have a duration of $segmentationTime seconds. Note that EBP lookahead is a slight exception to this rule.',
    }),
    SegmentationTime: DoubleMin1Schema.exactOptional().openapi({
      xml: { name: 'segmentationTime' },
      description:
        'The length in seconds of each segment. Required unless markers is set to _none_.',
    }),
    TimedMetadataBehavior: M2tsTimedMetadataBehaviorSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataBehavior' },
      description:
        'When set to passthrough, timed metadata will be passed through from input to output.',
    }),
    TimedMetadataPid: StringSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataPid' },
      description:
        'Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    TransportStreamId: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'transportStreamId' },
      description: 'The value of the transport stream ID field in the Program Map Table.',
    }),
    VideoPid: StringSchema.exactOptional().openapi({
      xml: { name: 'videoPid' },
      description:
        'Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    Scte35PrerollPullupMilliseconds: DoubleMin0Max5000Schema.exactOptional().openapi({
      xml: { name: 'scte35PrerollPullupMilliseconds' },
      description:
        "Defines the amount SCTE-35 preroll will be increased (in milliseconds) on the output. Preroll is the amount of time between the presence of a SCTE-35 indication in a transport stream and the PTS of the video frame it references. Zero means don't add pullup (it doesn't mean set the preroll to zero). Negative pullup is not supported, which means that you can't make the preroll shorter. Be aware that latency in the output will increase by the pullup amount.",
    }),
  })
  .openapi({ description: 'M2ts Settings', required: [] })
  .openapi('M2tsSettings')

const RawSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Raw Settings' })
  .openapi('RawSettings')

const ArchiveContainerSettingsSchema = z
  .object({
    M2tsSettings: M2tsSettingsSchema.exactOptional().openapi({ xml: { name: 'm2tsSettings' } }),
    RawSettings: RawSettingsSchema.exactOptional().openapi({ xml: { name: 'rawSettings' } }),
  })
  .openapi({ description: 'Archive Container Settings', required: [] })
  .openapi('ArchiveContainerSettings')

const ArchiveOutputSettingsSchema = z
  .object({
    ContainerSettings: ArchiveContainerSettingsSchema.openapi({
      xml: { name: 'containerSettings' },
      description: 'Settings specific to the container type of the file.',
    }),
    Extension: StringSchema.exactOptional().openapi({
      xml: { name: 'extension' },
      description:
        'Output file extension. If excluded, this will be auto-selected from the container type.',
    }),
    NameModifier: StringSchema.exactOptional().openapi({
      xml: { name: 'nameModifier' },
      description:
        'String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.',
    }),
  })
  .openapi({ required: ['ContainerSettings'], description: 'Archive Output Settings' })
  .openapi('ArchiveOutputSettings')

const FrameCaptureOutputSettingsSchema = z
  .object({
    NameModifier: StringSchema.exactOptional().openapi({
      xml: { name: 'nameModifier' },
      description:
        'Required if the output group contains more than one output. This modifier forms part of the output file name.',
    }),
  })
  .openapi({ description: 'Frame Capture Output Settings', required: [] })
  .openapi('FrameCaptureOutputSettings')

const HlsH265PackagingTypeSchema = z
  .enum(['HEV1', 'HVC1'])
  .openapi({ description: 'Hls H265 Packaging Type' })
  .openapi('HlsH265PackagingType')

const AudioOnlyHlsTrackTypeSchema = z
  .enum([
    'ALTERNATE_AUDIO_AUTO_SELECT',
    'ALTERNATE_AUDIO_AUTO_SELECT_DEFAULT',
    'ALTERNATE_AUDIO_NOT_AUTO_SELECT',
    'AUDIO_ONLY_VARIANT_STREAM',
  ])
  .openapi({ description: 'Audio Only Hls Track Type' })
  .openapi('AudioOnlyHlsTrackType')

const AudioOnlyHlsSegmentTypeSchema = z
  .enum(['AAC', 'FMP4'])
  .openapi({ description: 'Audio Only Hls Segment Type' })
  .openapi('AudioOnlyHlsSegmentType')

const AudioOnlyHlsSettingsSchema = z
  .object({
    AudioGroupId: StringSchema.exactOptional().openapi({
      xml: { name: 'audioGroupId' },
      description: 'Specifies the group to which the audio Rendition belongs.',
    }),
    AudioOnlyImage: InputLocationSchema.exactOptional().openapi({
      xml: { name: 'audioOnlyImage' },
      description:
        'Optional. Specifies the .jpg or .png image to use as the cover art for an audio-only output. We recommend a low bit-size file because the image increases the output audio bandwidth.\n\nThe image is attached to the audio as an ID3 tag, frame type APIC, picture type 0x10, as per the "ID3 tag version 2.4.0 - Native Frames" standard.',
    }),
    AudioTrackType: AudioOnlyHlsTrackTypeSchema.exactOptional().openapi({
      xml: { name: 'audioTrackType' },
      description:
        'Four types of audio-only tracks are supported:\n\nAudio-Only Variant Stream\nThe client can play back this audio-only stream instead of video in low-bandwidth scenarios. Represented as an EXT-X-STREAM-INF in the HLS manifest.\n\nAlternate Audio, Auto Select, Default\nAlternate rendition that the client should try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=YES, AUTOSELECT=YES\n\nAlternate Audio, Auto Select, Not Default\nAlternate rendition that the client may try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=YES\n\nAlternate Audio, not Auto Select\nAlternate rendition that the client will not try to play back by default. Represented as an EXT-X-MEDIA in the HLS manifest with DEFAULT=NO, AUTOSELECT=NO',
    }),
    SegmentType: AudioOnlyHlsSegmentTypeSchema.exactOptional().openapi({
      xml: { name: 'segmentType' },
      description: 'Specifies the segment type.',
    }),
  })
  .openapi({ description: 'Audio Only Hls Settings', required: [] })
  .openapi('AudioOnlyHlsSettings')

const Fmp4NielsenId3BehaviorSchema = z
  .enum(['NO_PASSTHROUGH', 'PASSTHROUGH'])
  .openapi({ description: 'Fmp4 Nielsen Id3 Behavior' })
  .openapi('Fmp4NielsenId3Behavior')

const Fmp4TimedMetadataBehaviorSchema = z
  .enum(['NO_PASSTHROUGH', 'PASSTHROUGH'])
  .openapi({ description: 'Fmp4 Timed Metadata Behavior' })
  .openapi('Fmp4TimedMetadataBehavior')

const Fmp4HlsSettingsSchema = z
  .object({
    AudioRenditionSets: StringSchema.exactOptional().openapi({
      xml: { name: 'audioRenditionSets' },
      description:
        "List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.",
    }),
    NielsenId3Behavior: Fmp4NielsenId3BehaviorSchema.exactOptional().openapi({
      xml: { name: 'nielsenId3Behavior' },
      description:
        'If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.',
    }),
    TimedMetadataBehavior: Fmp4TimedMetadataBehaviorSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataBehavior' },
      description:
        'When set to passthrough, timed metadata is passed through from input to output.',
    }),
  })
  .openapi({ description: 'Fmp4 Hls Settings', required: [] })
  .openapi('Fmp4HlsSettings')

const FrameCaptureHlsSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Frame Capture Hls Settings' })
  .openapi('FrameCaptureHlsSettings')

const M3u8NielsenId3BehaviorSchema = z
  .enum(['NO_PASSTHROUGH', 'PASSTHROUGH'])
  .openapi({ description: 'M3u8 Nielsen Id3 Behavior' })
  .openapi('M3u8NielsenId3Behavior')

const M3u8PcrControlSchema = z
  .enum(['CONFIGURED_PCR_PERIOD', 'PCR_EVERY_PES_PACKET'])
  .openapi({ description: 'M3u8 Pcr Control' })
  .openapi('M3u8PcrControl')

const M3u8Scte35BehaviorSchema = z
  .enum(['NO_PASSTHROUGH', 'PASSTHROUGH'])
  .openapi({ description: 'M3u8 Scte35 Behavior' })
  .openapi('M3u8Scte35Behavior')

const M3u8TimedMetadataBehaviorSchema = z
  .enum(['NO_PASSTHROUGH', 'PASSTHROUGH'])
  .openapi({ description: 'M3u8 Timed Metadata Behavior' })
  .openapi('M3u8TimedMetadataBehavior')

const M3u8SettingsSchema = z
  .object({
    AudioFramesPerPes: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'audioFramesPerPes' },
      description: 'The number of audio frames to insert for each PES packet.',
    }),
    AudioPids: StringSchema.exactOptional().openapi({
      xml: { name: 'audioPids' },
      description:
        'Packet Identifier (PID) of the elementary audio stream(s) in the transport stream. Multiple values are accepted, and can be entered in ranges and/or by comma separation. Can be entered as decimal or hexadecimal values.',
    }),
    EcmPid: StringSchema.exactOptional().openapi({
      xml: { name: 'ecmPid' },
      description: 'This parameter is unused and deprecated.',
    }),
    NielsenId3Behavior: M3u8NielsenId3BehaviorSchema.exactOptional().openapi({
      xml: { name: 'nielsenId3Behavior' },
      description:
        'If set to passthrough, Nielsen inaudible tones for media tracking will be detected in the input audio and an equivalent ID3 tag will be inserted in the output.',
    }),
    PatInterval: IntegerMin0Max1000Schema.exactOptional().openapi({
      xml: { name: 'patInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream. A value of \\"0\\" writes out the PMT once per segment file.',
    }),
    PcrControl: M3u8PcrControlSchema.exactOptional().openapi({
      xml: { name: 'pcrControl' },
      description:
        'When set to pcrEveryPesPacket, a Program Clock Reference value is inserted for every Packetized Elementary Stream (PES) header. This parameter is effective only when the PCR PID is the same as the video or audio elementary stream.',
    }),
    PcrPeriod: IntegerMin0Max500Schema.exactOptional().openapi({
      xml: { name: 'pcrPeriod' },
      description:
        'Maximum time in milliseconds between Program Clock References (PCRs) inserted into the transport stream.',
    }),
    PcrPid: StringSchema.exactOptional().openapi({
      xml: { name: 'pcrPid' },
      description:
        'Packet Identifier (PID) of the Program Clock Reference (PCR) in the transport stream. When no value is given, the encoder will assign the same value as the Video PID. Can be entered as a decimal or hexadecimal value.',
    }),
    PmtInterval: IntegerMin0Max1000Schema.exactOptional().openapi({
      xml: { name: 'pmtInterval' },
      description:
        'The number of milliseconds between instances of this table in the output transport stream. A value of \\"0\\" writes out the PMT once per segment file.',
    }),
    PmtPid: StringSchema.exactOptional().openapi({
      xml: { name: 'pmtPid' },
      description:
        'Packet Identifier (PID) for the Program Map Table (PMT) in the transport stream. Can be entered as a decimal or hexadecimal value.',
    }),
    ProgramNum: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'programNum' },
      description: 'The value of the program number field in the Program Map Table.',
    }),
    Scte35Behavior: M3u8Scte35BehaviorSchema.exactOptional().openapi({
      xml: { name: 'scte35Behavior' },
      description:
        'If set to passthrough, passes any SCTE-35 signals from the input source to this output.',
    }),
    Scte35Pid: StringSchema.exactOptional().openapi({
      xml: { name: 'scte35Pid' },
      description:
        'Packet Identifier (PID) of the SCTE-35 stream in the transport stream. Can be entered as a decimal or hexadecimal value.',
    }),
    TimedMetadataBehavior: M3u8TimedMetadataBehaviorSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataBehavior' },
      description:
        'When set to passthrough, timed metadata is passed through from input to output.',
    }),
    TimedMetadataPid: StringSchema.exactOptional().openapi({
      xml: { name: 'timedMetadataPid' },
      description:
        'Packet Identifier (PID) of the timed metadata stream in the transport stream. Can be entered as a decimal or hexadecimal value.  Valid values are 32 (or 0x20)..8182 (or 0x1ff6).',
    }),
    TransportStreamId: IntegerMin0Max65535Schema.exactOptional().openapi({
      xml: { name: 'transportStreamId' },
      description: 'The value of the transport stream ID field in the Program Map Table.',
    }),
    VideoPid: StringSchema.exactOptional().openapi({
      xml: { name: 'videoPid' },
      description:
        'Packet Identifier (PID) of the elementary video stream in the transport stream. Can be entered as a decimal or hexadecimal value.',
    }),
  })
  .openapi({ description: 'Settings information for the .m3u8 container', required: [] })
  .openapi('M3u8Settings')

const StandardHlsSettingsSchema = z
  .object({
    AudioRenditionSets: StringSchema.exactOptional().openapi({
      xml: { name: 'audioRenditionSets' },
      description:
        "List all the audio groups that are used with the video output stream. Input all the audio GROUP-IDs that are associated to the video, separate by ','.",
    }),
    M3u8Settings: M3u8SettingsSchema.openapi({ xml: { name: 'm3u8Settings' } }),
  })
  .openapi({ required: ['M3u8Settings'], description: 'Standard Hls Settings' })
  .openapi('StandardHlsSettings')

const HlsSettingsSchema = z
  .object({
    AudioOnlyHlsSettings: AudioOnlyHlsSettingsSchema.exactOptional().openapi({
      xml: { name: 'audioOnlyHlsSettings' },
    }),
    Fmp4HlsSettings: Fmp4HlsSettingsSchema.exactOptional().openapi({
      xml: { name: 'fmp4HlsSettings' },
    }),
    FrameCaptureHlsSettings: FrameCaptureHlsSettingsSchema.exactOptional().openapi({
      xml: { name: 'frameCaptureHlsSettings' },
    }),
    StandardHlsSettings: StandardHlsSettingsSchema.exactOptional().openapi({
      xml: { name: 'standardHlsSettings' },
    }),
  })
  .openapi({ description: 'Hls Settings', required: [] })
  .openapi('HlsSettings')

const HlsOutputSettingsSchema = z
  .object({
    H265PackagingType: HlsH265PackagingTypeSchema.exactOptional().openapi({
      xml: { name: 'h265PackagingType' },
      description:
        'Only applicable when this output is referencing an H.265 video description.\nSpecifies whether MP4 segments should be packaged as HEV1 or HVC1.',
    }),
    HlsSettings: HlsSettingsSchema.openapi({
      xml: { name: 'hlsSettings' },
      description:
        'Settings regarding the underlying stream. These settings are different for audio-only outputs.',
    }),
    NameModifier: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'nameModifier' },
      description:
        'String concatenated to the end of the destination filename. Accepts \\"Format Identifiers\\":#formatIdentifierParameters.',
    }),
    SegmentModifier: StringSchema.exactOptional().openapi({
      xml: { name: 'segmentModifier' },
      description: 'String concatenated to end of segment filenames.',
    }),
  })
  .openapi({ required: ['HlsSettings'], description: 'Hls Output Settings' })
  .openapi('HlsOutputSettings')

const MediaPackageOutputSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Media Package Output Settings' })
  .openapi('MediaPackageOutputSettings')

const MsSmoothH265PackagingTypeSchema = z
  .enum(['HEV1', 'HVC1'])
  .openapi({ description: 'Ms Smooth H265 Packaging Type' })
  .openapi('MsSmoothH265PackagingType')

const MsSmoothOutputSettingsSchema = z
  .object({
    H265PackagingType: MsSmoothH265PackagingTypeSchema.exactOptional().openapi({
      xml: { name: 'h265PackagingType' },
      description:
        'Only applicable when this output is referencing an H.265 video description.\nSpecifies whether MP4 segments should be packaged as HEV1 or HVC1.',
    }),
    NameModifier: StringSchema.exactOptional().openapi({
      xml: { name: 'nameModifier' },
      description:
        'String concatenated to the end of the destination filename.  Required for multiple outputs of the same type.',
    }),
  })
  .openapi({ description: 'Ms Smooth Output Settings', required: [] })
  .openapi('MsSmoothOutputSettings')

const MultiplexOutputSettingsSchema = z
  .object({
    Destination: OutputLocationRefSchema.openapi({
      xml: { name: 'destination' },
      description: 'Destination is a Multiplex.',
    }),
  })
  .openapi({ required: ['Destination'], description: 'Multiplex Output Settings' })
  .openapi('MultiplexOutputSettings')

const RtmpOutputCertificateModeSchema = z
  .enum(['SELF_SIGNED', 'VERIFY_AUTHENTICITY'])
  .openapi({ description: 'Rtmp Output Certificate Mode' })
  .openapi('RtmpOutputCertificateMode')

const RtmpOutputSettingsSchema = z
  .object({
    CertificateMode: RtmpOutputCertificateModeSchema.exactOptional().openapi({
      xml: { name: 'certificateMode' },
      description:
        'If set to verifyAuthenticity, verify the tls certificate chain to a trusted Certificate Authority (CA).  This will cause rtmps outputs with self-signed certificates to fail.',
    }),
    ConnectionRetryInterval: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'connectionRetryInterval' },
      description:
        'Number of seconds to wait before retrying a connection to the Flash Media server if the connection is lost.',
    }),
    Destination: OutputLocationRefSchema.openapi({
      xml: { name: 'destination' },
      description:
        'The RTMP endpoint excluding the stream name (eg. rtmp://host/appname). For connection to Akamai, a username and password must be supplied. URI fields accept format identifiers.',
    }),
    NumRetries: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'numRetries' },
      description: 'Number of retry attempts.',
    }),
  })
  .openapi({ required: ['Destination'], description: 'Rtmp Output Settings' })
  .openapi('RtmpOutputSettings')

const UdpContainerSettingsSchema = z
  .object({
    M2tsSettings: M2tsSettingsSchema.exactOptional().openapi({ xml: { name: 'm2tsSettings' } }),
  })
  .openapi({ description: 'Udp Container Settings', required: [] })
  .openapi('UdpContainerSettings')

const IntegerMin4Max20Schema = z
  .int()
  .min(4)
  .max(20)
  .openapi({ description: 'Placeholder documentation for __integerMin4Max20' })
  .openapi('IntegerMin4Max20')

const FecOutputIncludeFecSchema = z
  .enum(['COLUMN', 'COLUMN_AND_ROW'])
  .openapi({ description: 'Fec Output Include Fec' })
  .openapi('FecOutputIncludeFec')

const IntegerMin1Max20Schema = z
  .int()
  .min(1)
  .max(20)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max20' })
  .openapi('IntegerMin1Max20')

const FecOutputSettingsSchema = z
  .object({
    ColumnDepth: IntegerMin4Max20Schema.exactOptional().openapi({
      xml: { name: 'columnDepth' },
      description:
        'Parameter D from SMPTE 2022-1. The height of the FEC protection matrix.  The number of transport stream packets per column error correction packet. Must be between 4 and 20, inclusive.',
    }),
    IncludeFec: FecOutputIncludeFecSchema.exactOptional().openapi({
      xml: { name: 'includeFec' },
      description: 'Enables column only or column and row based FEC',
    }),
    RowLength: IntegerMin1Max20Schema.exactOptional().openapi({
      xml: { name: 'rowLength' },
      description:
        'Parameter L from SMPTE 2022-1. The width of the FEC protection matrix.  Must be between 1 and 20, inclusive. If only Column FEC is used, then larger values increase robustness.  If Row FEC is used, then this is the number of transport stream packets per row error correction packet, and the value must be between 4 and 20, inclusive, if includeFec is columnAndRow. If includeFec is column, this value must be 1 to 20, inclusive.',
    }),
  })
  .openapi({ description: 'Fec Output Settings', required: [] })
  .openapi('FecOutputSettings')

const UdpOutputSettingsSchema = z
  .object({
    BufferMsec: IntegerMin0Max10000Schema.exactOptional().openapi({
      xml: { name: 'bufferMsec' },
      description:
        'UDP output buffering in milliseconds. Larger values increase latency through the transcoder but simultaneously assist the transcoder in maintaining a constant, low-jitter UDP/RTP output while accommodating clock recovery, input switching, input disruptions, picture reordering, etc.',
    }),
    ContainerSettings: UdpContainerSettingsSchema.openapi({ xml: { name: 'containerSettings' } }),
    Destination: OutputLocationRefSchema.openapi({
      xml: { name: 'destination' },
      description:
        'Destination address and port number for RTP or UDP packets. Can be unicast or multicast RTP or UDP (eg. rtp://239.10.10.10:5001 or udp://10.100.100.100:5002).',
    }),
    FecOutputSettings: FecOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'fecOutputSettings' },
      description: 'Settings for enabling and adjusting Forward Error Correction on UDP outputs.',
    }),
  })
  .openapi({ required: ['Destination', 'ContainerSettings'], description: 'Udp Output Settings' })
  .openapi('UdpOutputSettings')

const OutputSettingsSchema = z
  .object({
    ArchiveOutputSettings: ArchiveOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'archiveOutputSettings' },
    }),
    FrameCaptureOutputSettings: FrameCaptureOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'frameCaptureOutputSettings' },
    }),
    HlsOutputSettings: HlsOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsOutputSettings' },
    }),
    MediaPackageOutputSettings: MediaPackageOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'mediaPackageOutputSettings' },
    }),
    MsSmoothOutputSettings: MsSmoothOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'msSmoothOutputSettings' },
    }),
    MultiplexOutputSettings: MultiplexOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexOutputSettings' },
    }),
    RtmpOutputSettings: RtmpOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'rtmpOutputSettings' },
    }),
    UdpOutputSettings: UdpOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'udpOutputSettings' },
    }),
  })
  .openapi({ description: 'Output Settings', required: [] })
  .openapi('OutputSettings')

const OutputSchema = z
  .object({
    AudioDescriptionNames: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'audioDescriptionNames' },
      description: 'The names of the AudioDescriptions used as audio sources for this output.',
    }),
    CaptionDescriptionNames: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'captionDescriptionNames' },
      description: 'The names of the CaptionDescriptions used as caption sources for this output.',
    }),
    OutputName: StringMin1Max255Schema.exactOptional().openapi({
      xml: { name: 'outputName' },
      description: 'The name used to identify an output.',
    }),
    OutputSettings: OutputSettingsSchema.openapi({
      xml: { name: 'outputSettings' },
      description: 'Output type-specific settings.',
    }),
    VideoDescriptionName: StringSchema.exactOptional().openapi({
      xml: { name: 'videoDescriptionName' },
      description: 'The name of the VideoDescription used as the source for this output.',
    }),
  })
  .openapi({
    required: ['OutputSettings'],
    description: 'Output settings. There can be multiple outputs within a group.',
  })
  .openapi('Output')

const ListOfOutputSchema = z
  .array(OutputSchema)
  .openapi({ description: 'Placeholder documentation for __listOfOutput' })
  .openapi('ListOfOutput')

type OutputGroupType = {
  Name?: z.infer<typeof StringMax32Schema>
  OutputGroupSettings: z.infer<typeof OutputGroupSettingsSchema>
  Outputs: z.infer<typeof ListOfOutputSchema>
}

const OutputGroupSchema: z.ZodType<OutputGroupType> = z
  .object({
    Name: StringMax32Schema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Custom output group name optionally defined by the user.',
    }),
    OutputGroupSettings: OutputGroupSettingsSchema.openapi({
      xml: { name: 'outputGroupSettings' },
      description: 'Settings associated with the output group.',
    }),
    Outputs: ListOfOutputSchema.openapi({ xml: { name: 'outputs' } }),
  })
  .openapi({
    required: ['Outputs', 'OutputGroupSettings'],
    description:
      'Output groups for this Live Event. Output groups contain information about where streams should be distributed.',
  })
  .openapi('OutputGroup')

type ListOfOutputGroupType = z.infer<typeof OutputGroupSchema>[]

const ListOfOutputGroupSchema: z.ZodType<ListOfOutputGroupType> = z
  .array(OutputGroupSchema)
  .openapi({ description: 'Placeholder documentation for __listOfOutputGroup' })
  .openapi('ListOfOutputGroup')

const TimecodeConfigSourceSchema = z
  .enum(['EMBEDDED', 'SYSTEMCLOCK', 'ZEROBASED'])
  .openapi({ description: 'Timecode Config Source' })
  .openapi('TimecodeConfigSource')

const IntegerMin1Max1000000Schema = z
  .int()
  .min(1)
  .max(1000000)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max1000000' })
  .openapi('IntegerMin1Max1000000')

const TimecodeConfigSchema = z
  .object({
    Source: TimecodeConfigSourceSchema.openapi({
      xml: { name: 'source' },
      description:
        'Identifies the source for the timecode that will be associated with the events outputs.\n-Embedded (embedded): Initialize the output timecode with timecode from the the source.  If no embedded timecode is detected in the source, the system falls back to using "Start at 0" (zerobased).\n-System Clock (systemclock): Use the UTC time.\n-Start at 0 (zerobased): The time of the first frame of the event will be 00:00:00:00.',
    }),
    SyncThreshold: IntegerMin1Max1000000Schema.exactOptional().openapi({
      xml: { name: 'syncThreshold' },
      description:
        'Threshold in frames beyond which output timecode is resynchronized to the input timecode. Discrepancies below this threshold are permitted to avoid unnecessary discontinuities in the output timecode. No timecode sync when this is not specified.',
    }),
  })
  .openapi({ required: ['Source'], description: 'Timecode Config' })
  .openapi('TimecodeConfig')

const IntegerMin1Max3600000Schema = z
  .int()
  .min(1)
  .max(3600000)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max3600000' })
  .openapi('IntegerMin1Max3600000')

const FrameCaptureIntervalUnitSchema = z
  .enum(['MILLISECONDS', 'SECONDS'])
  .openapi({ description: 'Frame Capture Interval Unit' })
  .openapi('FrameCaptureIntervalUnit')

const TimecodeBurninFontSizeSchema = z
  .enum(['EXTRA_SMALL_10', 'LARGE_48', 'MEDIUM_32', 'SMALL_16'])
  .openapi({ description: 'Timecode Burnin Font Size' })
  .openapi('TimecodeBurninFontSize')

const TimecodeBurninPositionSchema = z
  .enum([
    'BOTTOM_CENTER',
    'BOTTOM_LEFT',
    'BOTTOM_RIGHT',
    'MIDDLE_CENTER',
    'MIDDLE_LEFT',
    'MIDDLE_RIGHT',
    'TOP_CENTER',
    'TOP_LEFT',
    'TOP_RIGHT',
  ])
  .openapi({ description: 'Timecode Burnin Position' })
  .openapi('TimecodeBurninPosition')

const TimecodeBurninSettingsSchema = z
  .object({
    FontSize: TimecodeBurninFontSizeSchema.openapi({
      xml: { name: 'fontSize' },
      description: 'Choose a timecode burn-in font size',
    }),
    Position: TimecodeBurninPositionSchema.openapi({
      xml: { name: 'position' },
      description: 'Choose a timecode burn-in output position',
    }),
    Prefix: StringMax255Schema.exactOptional().openapi({
      xml: { name: 'prefix' },
      description: 'Create a timecode burn-in prefix (optional)',
    }),
  })
  .openapi({ required: ['Position', 'FontSize'], description: 'Timecode Burnin Settings' })
  .openapi('TimecodeBurninSettings')

const FrameCaptureSettingsSchema = z
  .object({
    CaptureInterval: IntegerMin1Max3600000Schema.exactOptional().openapi({
      xml: { name: 'captureInterval' },
      description:
        'The frequency at which to capture frames for inclusion in the output. May be specified in either seconds or milliseconds, as specified by captureIntervalUnits.',
    }),
    CaptureIntervalUnits: FrameCaptureIntervalUnitSchema.exactOptional().openapi({
      xml: { name: 'captureIntervalUnits' },
      description: 'Unit for the frame capture interval.',
    }),
    TimecodeBurninSettings: TimecodeBurninSettingsSchema.exactOptional().openapi({
      xml: { name: 'timecodeBurninSettings' },
      description: 'Timecode burn-in settings',
    }),
  })
  .openapi({ description: 'Frame Capture Settings', required: [] })
  .openapi('FrameCaptureSettings')

const H264AdaptiveQuantizationSchema = z
  .enum(['AUTO', 'HIGH', 'HIGHER', 'LOW', 'MAX', 'MEDIUM', 'OFF'])
  .openapi({ description: 'H264 Adaptive Quantization' })
  .openapi('H264AdaptiveQuantization')

const AfdSignalingSchema = z
  .enum(['AUTO', 'FIXED', 'NONE'])
  .openapi({ description: 'Afd Signaling' })
  .openapi('AfdSignaling')

const IntegerMin1000Schema = z
  .int()
  .min(1000)
  .openapi({ description: 'Placeholder documentation for __integerMin1000' })
  .openapi('IntegerMin1000')

const H264ColorMetadataSchema = z
  .enum(['IGNORE', 'INSERT'])
  .openapi({ description: 'H264 Color Metadata' })
  .openapi('H264ColorMetadata')

const ColorSpacePassthroughSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Passthrough applies no color space conversion to the output' })
  .openapi('ColorSpacePassthroughSettings')

const Rec601SettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Rec601 Settings' })
  .openapi('Rec601Settings')

const Rec709SettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Rec709 Settings' })
  .openapi('Rec709Settings')

const H264ColorSpaceSettingsSchema = z
  .object({
    ColorSpacePassthroughSettings: ColorSpacePassthroughSettingsSchema.exactOptional().openapi({
      xml: { name: 'colorSpacePassthroughSettings' },
    }),
    Rec601Settings: Rec601SettingsSchema.exactOptional().openapi({
      xml: { name: 'rec601Settings' },
    }),
    Rec709Settings: Rec709SettingsSchema.exactOptional().openapi({
      xml: { name: 'rec709Settings' },
    }),
  })
  .openapi({ description: 'H264 Color Space Settings', required: [] })
  .openapi('H264ColorSpaceSettings')

const H264EntropyEncodingSchema = z
  .enum(['CABAC', 'CAVLC'])
  .openapi({ description: 'H264 Entropy Encoding' })
  .openapi('H264EntropyEncoding')

const TemporalFilterPostFilterSharpeningSchema = z
  .enum(['AUTO', 'DISABLED', 'ENABLED'])
  .openapi({ description: 'Temporal Filter Post Filter Sharpening' })
  .openapi('TemporalFilterPostFilterSharpening')

const TemporalFilterStrengthSchema = z
  .enum([
    'AUTO',
    'STRENGTH_1',
    'STRENGTH_2',
    'STRENGTH_3',
    'STRENGTH_4',
    'STRENGTH_5',
    'STRENGTH_6',
    'STRENGTH_7',
    'STRENGTH_8',
    'STRENGTH_9',
    'STRENGTH_10',
    'STRENGTH_11',
    'STRENGTH_12',
    'STRENGTH_13',
    'STRENGTH_14',
    'STRENGTH_15',
    'STRENGTH_16',
  ])
  .openapi({ description: 'Temporal Filter Strength' })
  .openapi('TemporalFilterStrength')

const TemporalFilterSettingsSchema = z
  .object({
    PostFilterSharpening: TemporalFilterPostFilterSharpeningSchema.exactOptional().openapi({
      xml: { name: 'postFilterSharpening' },
      description:
        'If you enable this filter, the results are the following:\n- If the source content is noisy (it contains excessive digital artifacts), the filter cleans up the source.\n- If the source content is already clean, the filter tends to decrease the bitrate, especially when the rate control mode is QVBR.',
    }),
    Strength: TemporalFilterStrengthSchema.exactOptional().openapi({
      xml: { name: 'strength' },
      description:
        'Choose a filter strength. We recommend a strength of 1 or 2. A higher strength might take out good information, resulting in an image that is overly soft.',
    }),
  })
  .openapi({ description: 'Temporal Filter Settings', required: [] })
  .openapi('TemporalFilterSettings')

const H264FilterSettingsSchema = z
  .object({
    TemporalFilterSettings: TemporalFilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'temporalFilterSettings' },
    }),
  })
  .openapi({ description: 'H264 Filter Settings', required: [] })
  .openapi('H264FilterSettings')

const FixedAfdSchema = z
  .enum([
    'AFD_0000',
    'AFD_0010',
    'AFD_0011',
    'AFD_0100',
    'AFD_1000',
    'AFD_1001',
    'AFD_1010',
    'AFD_1011',
    'AFD_1101',
    'AFD_1110',
    'AFD_1111',
  ])
  .openapi({ description: 'Fixed Afd' })
  .openapi('FixedAfd')

const H264FlickerAqSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'H264 Flicker Aq' })
  .openapi('H264FlickerAq')

const H264ForceFieldPicturesSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'H264 Force Field Pictures' })
  .openapi('H264ForceFieldPictures')

const H264FramerateControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({ description: 'H264 Framerate Control' })
  .openapi('H264FramerateControl')

const H264GopBReferenceSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'H264 Gop BReference' })
  .openapi('H264GopBReference')

const H264GopSizeUnitsSchema = z
  .enum(['FRAMES', 'SECONDS'])
  .openapi({ description: 'H264 Gop Size Units' })
  .openapi('H264GopSizeUnits')

const H264LevelSchema = z
  .enum([
    'H264_LEVEL_1',
    'H264_LEVEL_1_1',
    'H264_LEVEL_1_2',
    'H264_LEVEL_1_3',
    'H264_LEVEL_2',
    'H264_LEVEL_2_1',
    'H264_LEVEL_2_2',
    'H264_LEVEL_3',
    'H264_LEVEL_3_1',
    'H264_LEVEL_3_2',
    'H264_LEVEL_4',
    'H264_LEVEL_4_1',
    'H264_LEVEL_4_2',
    'H264_LEVEL_5',
    'H264_LEVEL_5_1',
    'H264_LEVEL_5_2',
    'H264_LEVEL_AUTO',
  ])
  .openapi({ description: 'H264 Level' })
  .openapi('H264Level')

const H264LookAheadRateControlSchema = z
  .enum(['HIGH', 'LOW', 'MEDIUM'])
  .openapi({ description: 'H264 Look Ahead Rate Control' })
  .openapi('H264LookAheadRateControl')

const IntegerMin0Max30Schema = z
  .int()
  .min(0)
  .max(30)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max30' })
  .openapi('IntegerMin0Max30')

const IntegerMin1Max6Schema = z
  .int()
  .min(1)
  .max(6)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max6' })
  .openapi('IntegerMin1Max6')

const H264ParControlSchema = z
  .enum(['INITIALIZE_FROM_SOURCE', 'SPECIFIED'])
  .openapi({ description: 'H264 Par Control' })
  .openapi('H264ParControl')

const H264ProfileSchema = z
  .enum(['BASELINE', 'HIGH', 'HIGH_10BIT', 'HIGH_422', 'HIGH_422_10BIT', 'MAIN'])
  .openapi({ description: 'H264 Profile' })
  .openapi('H264Profile')

const H264QualityLevelSchema = z
  .enum(['ENHANCED_QUALITY', 'STANDARD_QUALITY'])
  .openapi({ description: 'H264 Quality Level' })
  .openapi('H264QualityLevel')

const IntegerMin1Max10Schema = z
  .int()
  .min(1)
  .max(10)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max10' })
  .openapi('IntegerMin1Max10')

const H264RateControlModeSchema = z
  .enum(['CBR', 'MULTIPLEX', 'QVBR', 'VBR'])
  .openapi({ description: 'H264 Rate Control Mode' })
  .openapi('H264RateControlMode')

const H264ScanTypeSchema = z
  .enum(['INTERLACED', 'PROGRESSIVE'])
  .openapi({ description: 'H264 Scan Type' })
  .openapi('H264ScanType')

const H264SceneChangeDetectSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'H264 Scene Change Detect' })
  .openapi('H264SceneChangeDetect')

const IntegerMin1Max32Schema = z
  .int()
  .min(1)
  .max(32)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max32' })
  .openapi('IntegerMin1Max32')

const IntegerMin0Max128Schema = z
  .int()
  .min(0)
  .max(128)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max128' })
  .openapi('IntegerMin0Max128')

const H264SpatialAqSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'H264 Spatial Aq' })
  .openapi('H264SpatialAq')

const H264SubGopLengthSchema = z
  .enum(['DYNAMIC', 'FIXED'])
  .openapi({ description: 'H264 Sub Gop Length' })
  .openapi('H264SubGopLength')

const H264SyntaxSchema = z
  .enum(['DEFAULT', 'RP2027'])
  .openapi({ description: 'H264 Syntax' })
  .openapi('H264Syntax')

const H264TemporalAqSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'H264 Temporal Aq' })
  .openapi('H264TemporalAq')

const H264TimecodeInsertionBehaviorSchema = z
  .enum(['DISABLED', 'PIC_TIMING_SEI'])
  .openapi({ description: 'H264 Timecode Insertion Behavior' })
  .openapi('H264TimecodeInsertionBehavior')

const H264SettingsSchema = z
  .object({
    AdaptiveQuantization: H264AdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'adaptiveQuantization' },
      description:
        'Enables or disables adaptive quantization, which is a technique MediaLive can apply to video on a frame-by-frame basis to produce more compression without losing quality. There are three types of adaptive quantization: flicker, spatial, and temporal. Set the field in one of these ways: Set to Auto. Recommended. For each type of AQ, MediaLive will determine if AQ is needed, and if so, the appropriate strength. Set a strength (a value other than Auto or Disable). This strength will apply to any of the AQ fields that you choose to enable. Set to Disabled to disable all types of adaptive quantization.',
    }),
    AfdSignaling: AfdSignalingSchema.exactOptional().openapi({
      xml: { name: 'afdSignaling' },
      description:
        'Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.',
    }),
    Bitrate: IntegerMin1000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.',
    }),
    BufFillPct: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'bufFillPct' },
      description: 'Percentage of the buffer that should initially be filled (HRD buffer model).',
    }),
    BufSize: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'bufSize' },
      description: 'Size of buffer (HRD buffer model) in bits.',
    }),
    ColorMetadata: H264ColorMetadataSchema.exactOptional().openapi({
      xml: { name: 'colorMetadata' },
      description: 'Includes colorspace metadata in the output.',
    }),
    ColorSpaceSettings: H264ColorSpaceSettingsSchema.exactOptional().openapi({
      xml: { name: 'colorSpaceSettings' },
      description: 'Color Space settings',
    }),
    EntropyEncoding: H264EntropyEncodingSchema.exactOptional().openapi({
      xml: { name: 'entropyEncoding' },
      description: 'Entropy encoding mode.  Use cabac (must be in Main or High profile) or cavlc.',
    }),
    FilterSettings: H264FilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'filterSettings' },
      description: 'Optional filters that you can apply to an encode.',
    }),
    FixedAfd: FixedAfdSchema.exactOptional().openapi({
      xml: { name: 'fixedAfd' },
      description:
        "Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.",
    }),
    FlickerAq: H264FlickerAqSchema.exactOptional().openapi({
      xml: { name: 'flickerAq' },
      description:
        "Flicker AQ makes adjustments within each frame to reduce flicker or 'pop' on I-frames. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if flicker AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply flicker AQ using the specified strength. Disabled: MediaLive won't apply flicker AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply flicker AQ.",
    }),
    ForceFieldPictures: H264ForceFieldPicturesSchema.exactOptional().openapi({
      xml: { name: 'forceFieldPictures' },
      description:
        'This setting applies only when scan type is "interlaced." It controls whether coding is performed on a field basis or on a frame basis. (When the video is progressive, the coding is always performed on a frame basis.)\nenabled: Force MediaLive to code on a field basis, so that odd and even sets of fields are coded separately.\ndisabled: Code the two sets of fields separately (on a field basis) or together (on a frame basis using PAFF), depending on what is most appropriate for the content.',
    }),
    FramerateControl: H264FramerateControlSchema.exactOptional().openapi({
      xml: { name: 'framerateControl' },
      description:
        'This field indicates how the output video frame rate is specified.  If "specified" is selected then the output video frame rate is determined by framerateNumerator and framerateDenominator, else if "initializeFromSource" is selected then the output video frame rate will be set equal to the input video frame rate of the first input.',
    }),
    FramerateDenominator: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'framerateDenominator' },
      description: 'Framerate denominator.',
    }),
    FramerateNumerator: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'framerateNumerator' },
      description: 'Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.',
    }),
    GopBReference: H264GopBReferenceSchema.exactOptional().openapi({
      xml: { name: 'gopBReference' },
      description: 'Documentation update needed',
    }),
    GopClosedCadence: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'gopClosedCadence' },
      description:
        'Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.',
    }),
    GopNumBFrames: IntegerMin0Max7Schema.exactOptional().openapi({
      xml: { name: 'gopNumBFrames' },
      description: 'Number of B-frames between reference frames.',
    }),
    GopSize: DoubleSchema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description:
        'GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.\nIf gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.\nIf gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.',
    }),
    GopSizeUnits: H264GopSizeUnitsSchema.exactOptional().openapi({
      xml: { name: 'gopSizeUnits' },
      description:
        'Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.',
    }),
    Level: H264LevelSchema.exactOptional().openapi({
      xml: { name: 'level' },
      description: 'H.264 Level.',
    }),
    LookAheadRateControl: H264LookAheadRateControlSchema.exactOptional().openapi({
      xml: { name: 'lookAheadRateControl' },
      description:
        'Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.',
    }),
    MaxBitrate: IntegerMin1000Schema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'For QVBR: See the tooltip for Quality level\n\nFor VBR: Set the maximum bitrate in order to accommodate expected spikes in the complexity of the video.',
    }),
    MinIInterval: IntegerMin0Max30Schema.exactOptional().openapi({
      xml: { name: 'minIInterval' },
      description:
        'Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1',
    }),
    NumRefFrames: IntegerMin1Max6Schema.exactOptional().openapi({
      xml: { name: 'numRefFrames' },
      description:
        'Number of reference frames to use. The encoder may use more than requested if using B-frames and/or interlaced encoding.',
    }),
    ParControl: H264ParControlSchema.exactOptional().openapi({
      xml: { name: 'parControl' },
      description:
        'This field indicates how the output pixel aspect ratio is specified.  If "specified" is selected then the output video pixel aspect ratio is determined by parNumerator and parDenominator, else if "initializeFromSource" is selected then the output pixsel aspect ratio will be set equal to the input video pixel aspect ratio of the first input.',
    }),
    ParDenominator: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'parDenominator' },
      description: 'Pixel Aspect Ratio denominator.',
    }),
    ParNumerator: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'parNumerator' },
      description: 'Pixel Aspect Ratio numerator.',
    }),
    Profile: H264ProfileSchema.exactOptional().openapi({
      xml: { name: 'profile' },
      description: 'H.264 Profile.',
    }),
    QualityLevel: H264QualityLevelSchema.exactOptional().openapi({
      xml: { name: 'qualityLevel' },
      description:
        'Leave as STANDARD_QUALITY or choose a different value (which might result in additional costs to run the channel).\n- ENHANCED_QUALITY: Produces a slightly better video quality without an increase in the bitrate. Has an effect only when the Rate control mode is QVBR or CBR. If this channel is in a MediaLive multiplex, the value must be ENHANCED_QUALITY.\n- STANDARD_QUALITY: Valid for any Rate control mode.',
    }),
    QvbrQualityLevel: IntegerMin1Max10Schema.exactOptional().openapi({
      xml: { name: 'qvbrQualityLevel' },
      description:
        'Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. You can set a target quality or you can let MediaLive determine the best quality. To set a target quality, enter values in the QVBR quality level field and the Max bitrate field. Enter values that suit your most important viewing devices. Recommended values are:\n- Primary screen: Quality level: 8 to 10. Max bitrate: 4M\n- PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M\n- Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M\nTo let MediaLive decide, leave the QVBR quality level field empty, and in Max bitrate enter the maximum rate you want in the video. For more information, see the section called "Video - rate control mode" in the MediaLive user guide',
    }),
    RateControlMode: H264RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        'Rate control mode.\n\nQVBR: Quality will match the specified quality level except when it is constrained by the\nmaximum bitrate.  Recommended if you or your viewers pay for bandwidth.\n\nVBR: Quality and bitrate vary, depending on the video complexity. Recommended instead of QVBR\nif you want to maintain a specific average bitrate over the duration of the channel.\n\nCBR: Quality varies, depending on the video complexity. Recommended only if you distribute\nyour assets to devices that cannot handle variable bitrates.\n\nMultiplex: This rate control mode is only supported (and is required) when the video is being\ndelivered to a MediaLive Multiplex in which case the rate control configuration is controlled\nby the properties within the Multiplex Program.',
    }),
    ScanType: H264ScanTypeSchema.exactOptional().openapi({
      xml: { name: 'scanType' },
      description: 'Sets the scan type of the output to progressive or top-field-first interlaced.',
    }),
    SceneChangeDetect: H264SceneChangeDetectSchema.exactOptional().openapi({
      xml: { name: 'sceneChangeDetect' },
      description:
        'Scene change detection.\n\n- On: inserts I-frames when scene change is detected.\n- Off: does not force an I-frame when scene change is detected.',
    }),
    Slices: IntegerMin1Max32Schema.exactOptional().openapi({
      xml: { name: 'slices' },
      description:
        'Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.\nThis field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.',
    }),
    Softness: IntegerMin0Max128Schema.exactOptional().openapi({
      xml: { name: 'softness' },
      description:
        'Softness. Selects quantizer matrix, larger values reduce high-frequency content in the encoded image.  If not set to zero, must be greater than 15.',
    }),
    SpatialAq: H264SpatialAqSchema.exactOptional().openapi({
      xml: { name: 'spatialAq' },
      description:
        "Spatial AQ makes adjustments within each frame based on spatial variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if spatial AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply spatial AQ using the specified strength. Disabled: MediaLive won't apply spatial AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply spatial AQ.",
    }),
    SubgopLength: H264SubGopLengthSchema.exactOptional().openapi({
      xml: { name: 'subgopLength' },
      description:
        'If set to fixed, use gopNumBFrames B-frames per sub-GOP. If set to dynamic, optimize the number of B-frames used for each sub-GOP to improve visual quality.',
    }),
    Syntax: H264SyntaxSchema.exactOptional().openapi({
      xml: { name: 'syntax' },
      description: 'Produces a bitstream compliant with SMPTE RP-2027.',
    }),
    TemporalAq: H264TemporalAqSchema.exactOptional().openapi({
      xml: { name: 'temporalAq' },
      description:
        "Temporal makes adjustments within each frame based on temporal variation of content complexity. The value to enter in this field depends on the value in the Adaptive quantization field: If you have set the Adaptive quantization field to Auto, MediaLive ignores any value in this field. MediaLive will determine if temporal AQ is appropriate and will apply the appropriate strength. If you have set the Adaptive quantization field to a strength, you can set this field to Enabled or Disabled. Enabled: MediaLive will apply temporal AQ using the specified strength. Disabled: MediaLive won't apply temporal AQ. If you have set the Adaptive quantization to Disabled, MediaLive ignores any value in this field and doesn't apply temporal AQ.",
    }),
    TimecodeInsertion: H264TimecodeInsertionBehaviorSchema.exactOptional().openapi({
      xml: { name: 'timecodeInsertion' },
      description:
        "Determines how timecodes should be inserted into the video elementary stream.\n- 'disabled': Do not include timecodes\n- 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config",
    }),
    TimecodeBurninSettings: TimecodeBurninSettingsSchema.exactOptional().openapi({
      xml: { name: 'timecodeBurninSettings' },
      description: 'Timecode burn-in settings',
    }),
  })
  .openapi({ description: 'H264 Settings', required: [] })
  .openapi('H264Settings')

const H265AdaptiveQuantizationSchema = z
  .enum(['AUTO', 'HIGH', 'HIGHER', 'LOW', 'MAX', 'MEDIUM', 'OFF'])
  .openapi({ description: 'H265 Adaptive Quantization' })
  .openapi('H265AdaptiveQuantization')

const H265AlternativeTransferFunctionSchema = z
  .enum(['INSERT', 'OMIT'])
  .openapi({ description: 'H265 Alternative Transfer Function' })
  .openapi('H265AlternativeTransferFunction')

const IntegerMin100000Max40000000Schema = z
  .int()
  .min(100000)
  .max(40000000)
  .openapi({ description: 'Placeholder documentation for __integerMin100000Max40000000' })
  .openapi('IntegerMin100000Max40000000')

const IntegerMin100000Max80000000Schema = z
  .int()
  .min(100000)
  .max(80000000)
  .openapi({ description: 'Placeholder documentation for __integerMin100000Max80000000' })
  .openapi('IntegerMin100000Max80000000')

const H265ColorMetadataSchema = z
  .enum(['IGNORE', 'INSERT'])
  .openapi({ description: 'H265 Color Metadata' })
  .openapi('H265ColorMetadata')

const DolbyVision81SettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Dolby Vision81 Settings' })
  .openapi('DolbyVision81Settings')

const IntegerMin0Max32768Schema = z
  .int()
  .min(0)
  .max(32768)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max32768' })
  .openapi('IntegerMin0Max32768')

const Hdr10SettingsSchema = z
  .object({
    MaxCll: IntegerMin0Max32768Schema.exactOptional().openapi({
      xml: { name: 'maxCll' },
      description:
        'Maximum Content Light Level\nAn integer metadata value defining the maximum light level, in nits,\nof any single pixel within an encoded HDR video stream or file.',
    }),
    MaxFall: IntegerMin0Max32768Schema.exactOptional().openapi({
      xml: { name: 'maxFall' },
      description:
        'Maximum Frame Average Light Level\nAn integer metadata value defining the maximum average light level, in nits,\nfor any single frame within an encoded HDR video stream or file.',
    }),
  })
  .openapi({ description: 'Hdr10 Settings', required: [] })
  .openapi('Hdr10Settings')

const H265ColorSpaceSettingsSchema = z
  .object({
    ColorSpacePassthroughSettings: ColorSpacePassthroughSettingsSchema.exactOptional().openapi({
      xml: { name: 'colorSpacePassthroughSettings' },
    }),
    DolbyVision81Settings: DolbyVision81SettingsSchema.exactOptional().openapi({
      xml: { name: 'dolbyVision81Settings' },
    }),
    Hdr10Settings: Hdr10SettingsSchema.exactOptional().openapi({ xml: { name: 'hdr10Settings' } }),
    Rec601Settings: Rec601SettingsSchema.exactOptional().openapi({
      xml: { name: 'rec601Settings' },
    }),
    Rec709Settings: Rec709SettingsSchema.exactOptional().openapi({
      xml: { name: 'rec709Settings' },
    }),
  })
  .openapi({ description: 'H265 Color Space Settings', required: [] })
  .openapi('H265ColorSpaceSettings')

const H265FilterSettingsSchema = z
  .object({
    TemporalFilterSettings: TemporalFilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'temporalFilterSettings' },
    }),
  })
  .openapi({ description: 'H265 Filter Settings', required: [] })
  .openapi('H265FilterSettings')

const H265FlickerAqSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'H265 Flicker Aq' })
  .openapi('H265FlickerAq')

const IntegerMin1Max3003Schema = z
  .int()
  .min(1)
  .max(3003)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max3003' })
  .openapi('IntegerMin1Max3003')

const H265GopSizeUnitsSchema = z
  .enum(['FRAMES', 'SECONDS'])
  .openapi({ description: 'H265 Gop Size Units' })
  .openapi('H265GopSizeUnits')

const H265LevelSchema = z
  .enum([
    'H265_LEVEL_1',
    'H265_LEVEL_2',
    'H265_LEVEL_2_1',
    'H265_LEVEL_3',
    'H265_LEVEL_3_1',
    'H265_LEVEL_4',
    'H265_LEVEL_4_1',
    'H265_LEVEL_5',
    'H265_LEVEL_5_1',
    'H265_LEVEL_5_2',
    'H265_LEVEL_6',
    'H265_LEVEL_6_1',
    'H265_LEVEL_6_2',
    'H265_LEVEL_AUTO',
  ])
  .openapi({ description: 'H265 Level' })
  .openapi('H265Level')

const H265LookAheadRateControlSchema = z
  .enum(['HIGH', 'LOW', 'MEDIUM'])
  .openapi({ description: 'H265 Look Ahead Rate Control' })
  .openapi('H265LookAheadRateControl')

const H265ProfileSchema = z
  .enum(['MAIN', 'MAIN_10BIT'])
  .openapi({ description: 'H265 Profile' })
  .openapi('H265Profile')

const H265RateControlModeSchema = z
  .enum(['CBR', 'MULTIPLEX', 'QVBR'])
  .openapi({ description: 'H265 Rate Control Mode' })
  .openapi('H265RateControlMode')

const H265ScanTypeSchema = z
  .enum(['INTERLACED', 'PROGRESSIVE'])
  .openapi({ description: 'H265 Scan Type' })
  .openapi('H265ScanType')

const H265SceneChangeDetectSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'H265 Scene Change Detect' })
  .openapi('H265SceneChangeDetect')

const H265TierSchema = z
  .enum(['HIGH', 'MAIN'])
  .openapi({ description: 'H265 Tier' })
  .openapi('H265Tier')

const H265TimecodeInsertionBehaviorSchema = z
  .enum(['DISABLED', 'PIC_TIMING_SEI'])
  .openapi({ description: 'H265 Timecode Insertion Behavior' })
  .openapi('H265TimecodeInsertionBehavior')

const H265SettingsSchema = z
  .object({
    AdaptiveQuantization: H265AdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'adaptiveQuantization' },
      description:
        'Adaptive quantization. Allows intra-frame quantizers to vary to improve visual quality.',
    }),
    AfdSignaling: AfdSignalingSchema.exactOptional().openapi({
      xml: { name: 'afdSignaling' },
      description:
        'Indicates that AFD values will be written into the output stream.  If afdSignaling is "auto", the system will try to preserve the input AFD value (in cases where multiple AFD values are valid). If set to "fixed", the AFD value will be the value configured in the fixedAfd parameter.',
    }),
    AlternativeTransferFunction: H265AlternativeTransferFunctionSchema.exactOptional().openapi({
      xml: { name: 'alternativeTransferFunction' },
      description:
        'Whether or not EML should insert an Alternative Transfer Function SEI message to support backwards compatibility with non-HDR decoders and displays.',
    }),
    Bitrate: IntegerMin100000Max40000000Schema.exactOptional().openapi({
      xml: { name: 'bitrate' },
      description:
        'Average bitrate in bits/second. Required when the rate control mode is VBR or CBR. Not used for QVBR. In an MS Smooth output group, each output must have a unique value when its bitrate is rounded down to the nearest multiple of 1000.',
    }),
    BufSize: IntegerMin100000Max80000000Schema.exactOptional().openapi({
      xml: { name: 'bufSize' },
      description: 'Size of buffer (HRD buffer model) in bits.',
    }),
    ColorMetadata: H265ColorMetadataSchema.exactOptional().openapi({
      xml: { name: 'colorMetadata' },
      description: 'Includes colorspace metadata in the output.',
    }),
    ColorSpaceSettings: H265ColorSpaceSettingsSchema.exactOptional().openapi({
      xml: { name: 'colorSpaceSettings' },
      description: 'Color Space settings',
    }),
    FilterSettings: H265FilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'filterSettings' },
      description: 'Optional filters that you can apply to an encode.',
    }),
    FixedAfd: FixedAfdSchema.exactOptional().openapi({
      xml: { name: 'fixedAfd' },
      description:
        "Four bit AFD value to write on all frames of video in the output stream. Only valid when afdSignaling is set to 'Fixed'.",
    }),
    FlickerAq: H265FlickerAqSchema.exactOptional().openapi({
      xml: { name: 'flickerAq' },
      description:
        "If set to enabled, adjust quantization within each frame to reduce flicker or 'pop' on I-frames.",
    }),
    FramerateDenominator: IntegerMin1Max3003Schema.openapi({
      xml: { name: 'framerateDenominator' },
      description: 'Framerate denominator.',
    }),
    FramerateNumerator: IntegerMin1Schema.openapi({
      xml: { name: 'framerateNumerator' },
      description: 'Framerate numerator - framerate is a fraction, e.g. 24000 / 1001 = 23.976 fps.',
    }),
    GopClosedCadence: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'gopClosedCadence' },
      description:
        'Frequency of closed GOPs. In streaming applications, it is recommended that this be set to 1 so a decoder joining mid-stream will receive an IDR frame as quickly as possible. Setting this value to 0 will break output segmenting.',
    }),
    GopSize: DoubleSchema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description:
        'GOP size (keyframe interval) in units of either frames or seconds per gopSizeUnits.\nIf gopSizeUnits is frames, gopSize must be an integer and must be greater than or equal to 1.\nIf gopSizeUnits is seconds, gopSize must be greater than 0, but need not be an integer.',
    }),
    GopSizeUnits: H265GopSizeUnitsSchema.exactOptional().openapi({
      xml: { name: 'gopSizeUnits' },
      description:
        'Indicates if the gopSize is specified in frames or seconds. If seconds the system will convert the gopSize into a frame count at run time.',
    }),
    Level: H265LevelSchema.exactOptional().openapi({
      xml: { name: 'level' },
      description: 'H.265 Level.',
    }),
    LookAheadRateControl: H265LookAheadRateControlSchema.exactOptional().openapi({
      xml: { name: 'lookAheadRateControl' },
      description:
        'Amount of lookahead. A value of low can decrease latency and memory usage, while high can produce better quality for certain content.',
    }),
    MaxBitrate: IntegerMin100000Max40000000Schema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description: 'For QVBR: See the tooltip for Quality level',
    }),
    MinIInterval: IntegerMin0Max30Schema.exactOptional().openapi({
      xml: { name: 'minIInterval' },
      description:
        'Only meaningful if sceneChangeDetect is set to enabled.  Defaults to 5 if multiplex rate control is used.  Enforces separation between repeated (cadence) I-frames and I-frames inserted by Scene Change Detection. If a scene change I-frame is within I-interval frames of a cadence I-frame, the GOP is shrunk and/or stretched to the scene change I-frame. GOP stretch requires enabling lookahead as well as setting I-interval. The normal cadence resumes for the next GOP. Note: Maximum GOP stretch = GOP size + Min-I-interval - 1',
    }),
    ParDenominator: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'parDenominator' },
      description: 'Pixel Aspect Ratio denominator.',
    }),
    ParNumerator: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'parNumerator' },
      description: 'Pixel Aspect Ratio numerator.',
    }),
    Profile: H265ProfileSchema.exactOptional().openapi({
      xml: { name: 'profile' },
      description: 'H.265 Profile.',
    }),
    QvbrQualityLevel: IntegerMin1Max10Schema.exactOptional().openapi({
      xml: { name: 'qvbrQualityLevel' },
      description:
        'Controls the target quality for the video encode. Applies only when the rate control mode is QVBR. Set values for the QVBR quality level field and Max bitrate field that suit your most important viewing devices. Recommended values are:\n- Primary screen: Quality level: 8 to 10. Max bitrate: 4M\n- PC or tablet: Quality level: 7. Max bitrate: 1.5M to 3M\n- Smartphone: Quality level: 6. Max bitrate: 1M to 1.5M',
    }),
    RateControlMode: H265RateControlModeSchema.exactOptional().openapi({
      xml: { name: 'rateControlMode' },
      description:
        'Rate control mode.\n\nQVBR: Quality will match the specified quality level except when it is constrained by the\nmaximum bitrate.  Recommended if you or your viewers pay for bandwidth.\n\nCBR: Quality varies, depending on the video complexity. Recommended only if you distribute\nyour assets to devices that cannot handle variable bitrates.\n\nMultiplex: This rate control mode is only supported (and is required) when the video is being\ndelivered to a MediaLive Multiplex in which case the rate control configuration is controlled\nby the properties within the Multiplex Program.',
    }),
    ScanType: H265ScanTypeSchema.exactOptional().openapi({
      xml: { name: 'scanType' },
      description: 'Sets the scan type of the output to progressive or top-field-first interlaced.',
    }),
    SceneChangeDetect: H265SceneChangeDetectSchema.exactOptional().openapi({
      xml: { name: 'sceneChangeDetect' },
      description: 'Scene change detection.',
    }),
    Slices: IntegerMin1Max16Schema.exactOptional().openapi({
      xml: { name: 'slices' },
      description:
        'Number of slices per picture. Must be less than or equal to the number of macroblock rows for progressive pictures, and less than or equal to half the number of macroblock rows for interlaced pictures.\nThis field is optional; when no value is specified the encoder will choose the number of slices based on encode resolution.',
    }),
    Tier: H265TierSchema.exactOptional().openapi({
      xml: { name: 'tier' },
      description: 'H.265 Tier.',
    }),
    TimecodeInsertion: H265TimecodeInsertionBehaviorSchema.exactOptional().openapi({
      xml: { name: 'timecodeInsertion' },
      description:
        "Determines how timecodes should be inserted into the video elementary stream.\n- 'disabled': Do not include timecodes\n- 'picTimingSei': Pass through picture timing SEI messages from the source specified in Timecode Config",
    }),
    TimecodeBurninSettings: TimecodeBurninSettingsSchema.exactOptional().openapi({
      xml: { name: 'timecodeBurninSettings' },
      description: 'Timecode burn-in settings',
    }),
  })
  .openapi({
    required: ['FramerateNumerator', 'FramerateDenominator'],
    description: 'H265 Settings',
  })
  .openapi('H265Settings')

const Mpeg2AdaptiveQuantizationSchema = z
  .enum(['AUTO', 'HIGH', 'LOW', 'MEDIUM', 'OFF'])
  .openapi({ description: 'Mpeg2 Adaptive Quantization' })
  .openapi('Mpeg2AdaptiveQuantization')

const Mpeg2ColorMetadataSchema = z
  .enum(['IGNORE', 'INSERT'])
  .openapi({ description: 'Mpeg2 Color Metadata' })
  .openapi('Mpeg2ColorMetadata')

const Mpeg2ColorSpaceSchema = z
  .enum(['AUTO', 'PASSTHROUGH'])
  .openapi({ description: 'Mpeg2 Color Space' })
  .openapi('Mpeg2ColorSpace')

const Mpeg2DisplayRatioSchema = z
  .enum(['DISPLAYRATIO16X9', 'DISPLAYRATIO4X3'])
  .openapi({ description: 'Mpeg2 Display Ratio' })
  .openapi('Mpeg2DisplayRatio')

const Mpeg2FilterSettingsSchema = z
  .object({
    TemporalFilterSettings: TemporalFilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'temporalFilterSettings' },
    }),
  })
  .openapi({ description: 'Mpeg2 Filter Settings', required: [] })
  .openapi('Mpeg2FilterSettings')

const Mpeg2GopSizeUnitsSchema = z
  .enum(['FRAMES', 'SECONDS'])
  .openapi({ description: 'Mpeg2 Gop Size Units' })
  .openapi('Mpeg2GopSizeUnits')

const Mpeg2ScanTypeSchema = z
  .enum(['INTERLACED', 'PROGRESSIVE'])
  .openapi({ description: 'Mpeg2 Scan Type' })
  .openapi('Mpeg2ScanType')

const Mpeg2SubGopLengthSchema = z
  .enum(['DYNAMIC', 'FIXED'])
  .openapi({ description: 'Mpeg2 Sub Gop Length' })
  .openapi('Mpeg2SubGopLength')

const Mpeg2TimecodeInsertionBehaviorSchema = z
  .enum(['DISABLED', 'GOP_TIMECODE'])
  .openapi({ description: 'Mpeg2 Timecode Insertion Behavior' })
  .openapi('Mpeg2TimecodeInsertionBehavior')

const Mpeg2SettingsSchema = z
  .object({
    AdaptiveQuantization: Mpeg2AdaptiveQuantizationSchema.exactOptional().openapi({
      xml: { name: 'adaptiveQuantization' },
      description:
        'Choose Off to disable adaptive quantization. Or choose another value to enable the quantizer and set its strength. The strengths are: Auto, Off, Low, Medium, High. When you enable this field, MediaLive allows intra-frame quantizers to vary, which might improve visual quality.',
    }),
    AfdSignaling: AfdSignalingSchema.exactOptional().openapi({
      xml: { name: 'afdSignaling' },
      description:
        'Indicates the AFD values that MediaLive will write into the video encode. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose AUTO.\nAUTO: MediaLive will try to preserve the input AFD value (in cases where multiple AFD values are valid).\nFIXED: MediaLive will use the value you specify in fixedAFD.',
    }),
    ColorMetadata: Mpeg2ColorMetadataSchema.exactOptional().openapi({
      xml: { name: 'colorMetadata' },
      description:
        'Specifies whether to include the color space metadata. The metadata describes the color space that applies to the video (the colorSpace field). We recommend that you insert the metadata.',
    }),
    ColorSpace: Mpeg2ColorSpaceSchema.exactOptional().openapi({
      xml: { name: 'colorSpace' },
      description:
        'Choose the type of color space conversion to apply to the output. For detailed information on setting up both the input and the output to obtain the desired color space in the output, see the section on \\"MediaLive Features - Video - color space\\" in the MediaLive User Guide.\nPASSTHROUGH: Keep the color space of the input content - do not convert it.\nAUTO:Convert all content that is SD to rec 601, and convert all content that is HD to rec 709.',
    }),
    DisplayAspectRatio: Mpeg2DisplayRatioSchema.exactOptional().openapi({
      xml: { name: 'displayAspectRatio' },
      description: 'Sets the pixel aspect ratio for the encode.',
    }),
    FilterSettings: Mpeg2FilterSettingsSchema.exactOptional().openapi({
      xml: { name: 'filterSettings' },
      description:
        'Optionally specify a noise reduction filter, which can improve quality of compressed content. If you do not choose a filter, no filter will be applied.\nTEMPORAL: This filter is useful for both source content that is noisy (when it has excessive digital artifacts) and source content that is clean.\nWhen the content is noisy, the filter cleans up the source content before the encoding phase, with these two effects: First, it improves the output video quality because the content has been cleaned up. Secondly, it decreases the bandwidth because MediaLive does not waste bits on encoding noise.\nWhen the content is reasonably clean, the filter tends to decrease the bitrate.',
    }),
    FixedAfd: FixedAfdSchema.exactOptional().openapi({
      xml: { name: 'fixedAfd' },
      description:
        'Complete this field only when afdSignaling is set to FIXED. Enter the AFD value (4 bits) to write on all frames of the video encode.',
    }),
    FramerateDenominator: IntegerMin1Schema.openapi({
      xml: { name: 'framerateDenominator' },
      description:
        'description": "The framerate denominator. For example, 1001. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.',
    }),
    FramerateNumerator: IntegerMin1Schema.openapi({
      xml: { name: 'framerateNumerator' },
      description:
        'The framerate numerator. For example, 24000. The framerate is the numerator divided by the denominator. For example, 24000 / 1001 = 23.976 FPS.',
    }),
    GopClosedCadence: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'gopClosedCadence' },
      description: 'MPEG2: default is open GOP.',
    }),
    GopNumBFrames: IntegerMin0Max7Schema.exactOptional().openapi({
      xml: { name: 'gopNumBFrames' },
      description:
        'Relates to the GOP structure. The number of B-frames between reference frames. If you do not know what a B-frame is, use the default.',
    }),
    GopSize: DoubleSchema.exactOptional().openapi({
      xml: { name: 'gopSize' },
      description:
        'Relates to the GOP structure. The GOP size (keyframe interval) in the units specified in gopSizeUnits. If you do not know what GOP is, use the default.\nIf gopSizeUnits is frames, then the gopSize must be an integer and must be greater than or equal to 1.\nIf gopSizeUnits is seconds, the gopSize must be greater than 0, but does not need to be an integer.',
    }),
    GopSizeUnits: Mpeg2GopSizeUnitsSchema.exactOptional().openapi({
      xml: { name: 'gopSizeUnits' },
      description:
        'Relates to the GOP structure. Specifies whether the gopSize is specified in frames or seconds. If you do not plan to change the default gopSize, leave the default. If you specify SECONDS, MediaLive will internally convert the gop size to a frame count.',
    }),
    ScanType: Mpeg2ScanTypeSchema.exactOptional().openapi({
      xml: { name: 'scanType' },
      description:
        'Set the scan type of the output to PROGRESSIVE or INTERLACED (top field first).',
    }),
    SubgopLength: Mpeg2SubGopLengthSchema.exactOptional().openapi({
      xml: { name: 'subgopLength' },
      description:
        'Relates to the GOP structure. If you do not know what GOP is, use the default.\nFIXED: Set the number of B-frames in each sub-GOP to the value in gopNumBFrames.\nDYNAMIC: Let MediaLive optimize the number of B-frames in each sub-GOP, to improve visual quality.',
    }),
    TimecodeInsertion: Mpeg2TimecodeInsertionBehaviorSchema.exactOptional().openapi({
      xml: { name: 'timecodeInsertion' },
      description:
        'Determines how MediaLive inserts timecodes in the output video. For detailed information about setting up the input and the output for a timecode, see the section on \\"MediaLive Features - Timecode configuration\\" in the MediaLive User Guide.\nDISABLED: do not include timecodes.\nGOP_TIMECODE: Include timecode metadata in the GOP header.',
    }),
    TimecodeBurninSettings: TimecodeBurninSettingsSchema.exactOptional().openapi({
      xml: { name: 'timecodeBurninSettings' },
      description: 'Timecode burn-in settings',
    }),
  })
  .openapi({
    required: ['FramerateNumerator', 'FramerateDenominator'],
    description: 'Mpeg2 Settings',
  })
  .openapi('Mpeg2Settings')

const VideoCodecSettingsSchema = z
  .object({
    FrameCaptureSettings: FrameCaptureSettingsSchema.exactOptional().openapi({
      xml: { name: 'frameCaptureSettings' },
    }),
    H264Settings: H264SettingsSchema.exactOptional().openapi({ xml: { name: 'h264Settings' } }),
    H265Settings: H265SettingsSchema.exactOptional().openapi({ xml: { name: 'h265Settings' } }),
    Mpeg2Settings: Mpeg2SettingsSchema.exactOptional().openapi({ xml: { name: 'mpeg2Settings' } }),
  })
  .openapi({ description: 'Video Codec Settings', required: [] })
  .openapi('VideoCodecSettings')

const VideoDescriptionRespondToAfdSchema = z
  .enum(['NONE', 'PASSTHROUGH', 'RESPOND'])
  .openapi({ description: 'Video Description Respond To Afd' })
  .openapi('VideoDescriptionRespondToAfd')

const VideoDescriptionScalingBehaviorSchema = z
  .enum(['DEFAULT', 'STRETCH_TO_OUTPUT'])
  .openapi({ description: 'Video Description Scaling Behavior' })
  .openapi('VideoDescriptionScalingBehavior')

const VideoDescriptionSchema = z
  .object({
    CodecSettings: VideoCodecSettingsSchema.exactOptional().openapi({
      xml: { name: 'codecSettings' },
      description: 'Video codec settings.',
    }),
    Height: IntegerSchema.exactOptional().openapi({
      xml: { name: 'height' },
      description:
        'Output video height, in pixels. Must be an even number. For most codecs, you can leave this field and width blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.',
    }),
    Name: StringSchema.openapi({
      xml: { name: 'name' },
      description:
        'The name of this VideoDescription. Outputs will use this name to uniquely identify this Description.  Description names should be unique within this Live Event.',
    }),
    RespondToAfd: VideoDescriptionRespondToAfdSchema.exactOptional().openapi({
      xml: { name: 'respondToAfd' },
      description:
        'Indicates how MediaLive will respond to the AFD values that might be in the input video. If you do not know what AFD signaling is, or if your downstream system has not given you guidance, choose PASSTHROUGH.\nRESPOND: MediaLive clips the input video using a formula that uses the AFD values (configured in afdSignaling ), the input display aspect ratio, and the output display aspect ratio. MediaLive also includes the AFD values in the output, unless the codec for this encode is FRAME_CAPTURE.\nPASSTHROUGH: MediaLive ignores the AFD values and does not clip the video. But MediaLive does include the values in the output.\nNONE: MediaLive does not clip the input video and does not include the AFD values in the output',
    }),
    ScalingBehavior: VideoDescriptionScalingBehaviorSchema.exactOptional().openapi({
      xml: { name: 'scalingBehavior' },
      description:
        'STRETCH_TO_OUTPUT configures the output position to stretch the video to the specified output resolution (height and width). This option will override any position value. DEFAULT may insert black boxes (pillar boxes or letter boxes) around the video to provide the specified output resolution.',
    }),
    Sharpness: IntegerMin0Max100Schema.exactOptional().openapi({
      xml: { name: 'sharpness' },
      description:
        'Changes the strength of the anti-alias filter used for scaling. 0 is the softest setting, 100 is the sharpest. A setting of 50 is recommended for most content.',
    }),
    Width: IntegerSchema.exactOptional().openapi({
      xml: { name: 'width' },
      description:
        'Output video width, in pixels. Must be an even number. For most codecs, you can leave this field and height blank in order to use the height and width (resolution) from the source. Note, however, that leaving blank is not recommended. For the Frame Capture codec, height and width are required.',
    }),
  })
  .openapi({ required: ['Name'], description: 'Video settings for this stream.' })
  .openapi('VideoDescription')

const ListOfVideoDescriptionSchema = z
  .array(VideoDescriptionSchema)
  .openapi({ description: 'Placeholder documentation for __listOfVideoDescription' })
  .openapi('ListOfVideoDescription')

type EncoderSettingsType = {
  AudioDescriptions: z.infer<typeof ListOfAudioDescriptionSchema>
  AvailBlanking?: z.infer<typeof AvailBlankingSchema>
  AvailConfiguration?: z.infer<typeof AvailConfigurationSchema>
  BlackoutSlate?: z.infer<typeof BlackoutSlateSchema>
  CaptionDescriptions?: z.infer<typeof ListOfCaptionDescriptionSchema>
  FeatureActivations?: z.infer<typeof FeatureActivationsSchema>
  GlobalConfiguration?: z.infer<typeof GlobalConfigurationSchema>
  MotionGraphicsConfiguration?: z.infer<typeof MotionGraphicsConfigurationSchema>
  NielsenConfiguration?: z.infer<typeof NielsenConfigurationSchema>
  OutputGroups: z.infer<typeof ListOfOutputGroupSchema>
  TimecodeConfig: z.infer<typeof TimecodeConfigSchema>
  VideoDescriptions: z.infer<typeof ListOfVideoDescriptionSchema>
}

const EncoderSettingsSchema: z.ZodType<EncoderSettingsType> = z
  .object({
    AudioDescriptions: ListOfAudioDescriptionSchema.openapi({ xml: { name: 'audioDescriptions' } }),
    AvailBlanking: AvailBlankingSchema.exactOptional().openapi({
      xml: { name: 'availBlanking' },
      description: 'Settings for ad avail blanking.',
    }),
    AvailConfiguration: AvailConfigurationSchema.exactOptional().openapi({
      xml: { name: 'availConfiguration' },
      description: 'Event-wide configuration settings for ad avail insertion.',
    }),
    BlackoutSlate: BlackoutSlateSchema.exactOptional().openapi({
      xml: { name: 'blackoutSlate' },
      description: 'Settings for blackout slate.',
    }),
    CaptionDescriptions: ListOfCaptionDescriptionSchema.exactOptional().openapi({
      xml: { name: 'captionDescriptions' },
      description: 'Settings for caption decriptions',
    }),
    FeatureActivations: FeatureActivationsSchema.exactOptional().openapi({
      xml: { name: 'featureActivations' },
      description: 'Feature Activations',
    }),
    GlobalConfiguration: GlobalConfigurationSchema.exactOptional().openapi({
      xml: { name: 'globalConfiguration' },
      description: 'Configuration settings that apply to the event as a whole.',
    }),
    MotionGraphicsConfiguration: MotionGraphicsConfigurationSchema.exactOptional().openapi({
      xml: { name: 'motionGraphicsConfiguration' },
      description: 'Settings for motion graphics.',
    }),
    NielsenConfiguration: NielsenConfigurationSchema.exactOptional().openapi({
      xml: { name: 'nielsenConfiguration' },
      description: 'Nielsen configuration settings.',
    }),
    OutputGroups: ListOfOutputGroupSchema.openapi({ xml: { name: 'outputGroups' } }),
    TimecodeConfig: TimecodeConfigSchema.openapi({
      xml: { name: 'timecodeConfig' },
      description: 'Contains settings used to acquire and adjust timecode information from inputs.',
    }),
    VideoDescriptions: ListOfVideoDescriptionSchema.openapi({ xml: { name: 'videoDescriptions' } }),
  })
  .openapi({
    required: ['VideoDescriptions', 'AudioDescriptions', 'OutputGroups', 'TimecodeConfig'],
    description: 'Encoder Settings',
  })
  .openapi('EncoderSettings')

const AudioSilenceFailoverSettingsSchema = z
  .object({
    AudioSelectorName: StringSchema.openapi({
      xml: { name: 'audioSelectorName' },
      description:
        "The name of the audio selector in the input that MediaLive should monitor to detect silence. Select your most important rendition. If you didn't create an audio selector in this input, leave blank.",
    }),
    AudioSilenceThresholdMsec: IntegerMin1000Schema.exactOptional().openapi({
      xml: { name: 'audioSilenceThresholdMsec' },
      description:
        'The amount of time (in milliseconds) that the active input must be silent before automatic input failover occurs. Silence is defined as audio loss or audio quieter than -50 dBFS.',
    }),
  })
  .openapi({
    required: ['AudioSelectorName'],
    description: 'Placeholder documentation for AudioSilenceFailoverSettings',
  })
  .openapi('AudioSilenceFailoverSettings')

const IntegerMin100Schema = z
  .int()
  .min(100)
  .openapi({ description: 'Placeholder documentation for __integerMin100' })
  .openapi('IntegerMin100')

const InputLossFailoverSettingsSchema = z
  .object({
    InputLossThresholdMsec: IntegerMin100Schema.exactOptional().openapi({
      xml: { name: 'inputLossThresholdMsec' },
      description:
        'The amount of time (in milliseconds) that no input is detected. After that time, an input failover will occur.',
    }),
  })
  .openapi({
    description:
      'MediaLive will perform a failover if content is not detected in this input for the specified period.',
    required: [],
  })
  .openapi('InputLossFailoverSettings')

const DoubleMin0Max1Schema = z
  .float64()
  .openapi({ description: 'Placeholder documentation for __doubleMin0Max1' })
  .openapi('DoubleMin0Max1')

const VideoBlackFailoverSettingsSchema = z
  .object({
    BlackDetectThreshold: DoubleMin0Max1Schema.exactOptional().openapi({
      xml: { name: 'blackDetectThreshold' },
      description:
        "A value used in calculating the threshold below which MediaLive considers a pixel to be 'black'. For the input to be considered black, every pixel in a frame must be below this threshold. The threshold is calculated as a percentage (expressed as a decimal) of white. Therefore .1 means 10% white (or 90% black). Note how the formula works for any color depth. For example, if you set this field to 0.1 in 10-bit color depth: (1023*0.1=102.3), which means a pixel value of 102 or less is 'black'. If you set this field to .1 in an 8-bit color depth: (255*0.1=25.5), which means a pixel value of 25 or less is 'black'. The range is 0.0 to 1.0, with any number of decimal places.",
    }),
    VideoBlackThresholdMsec: IntegerMin1000Schema.exactOptional().openapi({
      xml: { name: 'videoBlackThresholdMsec' },
      description:
        'The amount of time (in milliseconds) that the active input must be black before automatic input failover occurs.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for VideoBlackFailoverSettings',
    required: [],
  })
  .openapi('VideoBlackFailoverSettings')

const FailoverConditionSettingsSchema = z
  .object({
    AudioSilenceSettings: AudioSilenceFailoverSettingsSchema.exactOptional().openapi({
      xml: { name: 'audioSilenceSettings' },
      description:
        'MediaLive will perform a failover if the specified audio selector is silent for the specified period.',
    }),
    InputLossSettings: InputLossFailoverSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputLossSettings' },
      description:
        'MediaLive will perform a failover if content is not detected in this input for the specified period.',
    }),
    VideoBlackSettings: VideoBlackFailoverSettingsSchema.exactOptional().openapi({
      xml: { name: 'videoBlackSettings' },
      description:
        'MediaLive will perform a failover if content is considered black for the specified period.',
    }),
  })
  .openapi({ description: 'Settings for one failover condition.', required: [] })
  .openapi('FailoverConditionSettings')

const FailoverConditionSchema = z
  .object({
    FailoverConditionSettings: FailoverConditionSettingsSchema.exactOptional().openapi({
      xml: { name: 'failoverConditionSettings' },
      description: 'Failover condition type-specific settings.',
    }),
  })
  .openapi({
    description:
      'Failover Condition settings. There can be multiple failover conditions inside AutomaticInputFailoverSettings.',
    required: [],
  })
  .openapi('FailoverCondition')

const ListOfFailoverConditionSchema = z
  .array(FailoverConditionSchema)
  .openapi({ description: 'Placeholder documentation for __listOfFailoverCondition' })
  .openapi('ListOfFailoverCondition')

const InputPreferenceSchema = z
  .enum(['EQUAL_INPUT_PREFERENCE', 'PRIMARY_INPUT_PREFERRED'])
  .openapi({
    description:
      'Input preference when deciding which input to make active when a previously failed input has recovered.\nIf \\"EQUAL_INPUT_PREFERENCE\\", then the active input will stay active as long as it is healthy.\nIf \\"PRIMARY_INPUT_PREFERRED\\", then always switch back to the primary input when it is healthy.\n',
  })
  .openapi('InputPreference')

const AutomaticInputFailoverSettingsSchema = z
  .object({
    ErrorClearTimeMsec: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'errorClearTimeMsec' },
      description:
        'This clear time defines the requirement a recovered input must meet to be considered healthy. The input must have no failover conditions for this length of time. Enter a time in milliseconds. This value is particularly important if the input_preference for the failover pair is set to PRIMARY_INPUT_PREFERRED, because after this time, MediaLive will switch back to the primary input.',
    }),
    FailoverConditions: ListOfFailoverConditionSchema.exactOptional().openapi({
      xml: { name: 'failoverConditions' },
      description:
        'A list of failover conditions. If any of these conditions occur, MediaLive will perform a failover to the other input.',
    }),
    InputPreference: InputPreferenceSchema.exactOptional().openapi({
      xml: { name: 'inputPreference' },
      description:
        'Input preference when deciding which input to make active when a previously failed input has recovered.',
    }),
    SecondaryInputId: StringSchema.openapi({
      xml: { name: 'secondaryInputId' },
      description: 'The input ID of the secondary input in the automatic input failover pair.',
    }),
  })
  .openapi({
    required: ['SecondaryInputId'],
    description: 'The settings for Automatic Input Failover.',
  })
  .openapi('AutomaticInputFailoverSettings')

const AudioHlsRenditionSelectionSchema = z
  .object({
    GroupId: StringMin1Schema.openapi({
      xml: { name: 'groupId' },
      description:
        'Specifies the GROUP-ID in the #EXT-X-MEDIA tag of the target HLS audio rendition.',
    }),
    Name: StringMin1Schema.openapi({
      xml: { name: 'name' },
      description: 'Specifies the NAME in the #EXT-X-MEDIA tag of the target HLS audio rendition.',
    }),
  })
  .openapi({ required: ['Name', 'GroupId'], description: 'Audio Hls Rendition Selection' })
  .openapi('AudioHlsRenditionSelection')

const AudioLanguageSelectionPolicySchema = z
  .enum(['LOOSE', 'STRICT'])
  .openapi({ description: 'Audio Language Selection Policy' })
  .openapi('AudioLanguageSelectionPolicy')

const AudioLanguageSelectionSchema = z
  .object({
    LanguageCode: StringSchema.openapi({
      xml: { name: 'languageCode' },
      description: 'Selects a specific three-letter language code from within an audio source.',
    }),
    LanguageSelectionPolicy: AudioLanguageSelectionPolicySchema.exactOptional().openapi({
      xml: { name: 'languageSelectionPolicy' },
      description:
        'When set to "strict", the transport stream demux strictly identifies audio streams by their language descriptor. If a PMT update occurs such that an audio stream matching the initially selected language is no longer present then mute will be encoded until the language returns. If "loose", then on a PMT update the demux will choose another audio stream in the program with the same stream type if it can\'t find one with the same language.',
    }),
  })
  .openapi({ required: ['LanguageCode'], description: 'Audio Language Selection' })
  .openapi('AudioLanguageSelection')

const IntegerMin0Max8191Schema = z
  .int()
  .min(0)
  .max(8191)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max8191' })
  .openapi('IntegerMin0Max8191')

const AudioPidSelectionSchema = z
  .object({
    Pid: IntegerMin0Max8191Schema.openapi({
      xml: { name: 'pid' },
      description: 'Selects a specific PID from within a source.',
    }),
  })
  .openapi({ required: ['Pid'], description: 'Audio Pid Selection' })
  .openapi('AudioPidSelection')

const AudioTrackSchema = z
  .object({
    Track: IntegerMin1Schema.openapi({
      xml: { name: 'track' },
      description: '1-based integer value that maps to a specific audio track',
    }),
  })
  .openapi({ required: ['Track'], description: 'Audio Track' })
  .openapi('AudioTrack')

const ListOfAudioTrackSchema = z
  .array(AudioTrackSchema)
  .openapi({ description: 'Placeholder documentation for __listOfAudioTrack' })
  .openapi('ListOfAudioTrack')

const DolbyEProgramSelectionSchema = z
  .enum([
    'ALL_CHANNELS',
    'PROGRAM_1',
    'PROGRAM_2',
    'PROGRAM_3',
    'PROGRAM_4',
    'PROGRAM_5',
    'PROGRAM_6',
    'PROGRAM_7',
    'PROGRAM_8',
  ])
  .openapi({ description: 'Dolby EProgram Selection' })
  .openapi('DolbyEProgramSelection')

const AudioDolbyEDecodeSchema = z
  .object({
    ProgramSelection: DolbyEProgramSelectionSchema.openapi({
      xml: { name: 'programSelection' },
      description:
        'Applies only to Dolby E. Enter the program ID (according to the metadata in the audio) of the Dolby E program to extract from the specified track. One program extracted per audio selector. To select multiple programs, create multiple selectors with the same Track and different Program numbers. “All channels” means to ignore the program IDs and include all the channels in this selector; useful if metadata is known to be incorrect.',
    }),
  })
  .openapi({ required: ['ProgramSelection'], description: 'Audio Dolby EDecode' })
  .openapi('AudioDolbyEDecode')

const AudioTrackSelectionSchema = z
  .object({
    Tracks: ListOfAudioTrackSchema.openapi({
      xml: { name: 'tracks' },
      description: 'Selects one or more unique audio tracks from within a source.',
    }),
    DolbyEDecode: AudioDolbyEDecodeSchema.exactOptional().openapi({
      xml: { name: 'dolbyEDecode' },
      description:
        'Configure decoding options for Dolby E streams - these should be Dolby E frames carried in PCM streams tagged with SMPTE-337',
    }),
  })
  .openapi({ required: ['Tracks'], description: 'Audio Track Selection' })
  .openapi('AudioTrackSelection')

const AudioSelectorSettingsSchema = z
  .object({
    AudioHlsRenditionSelection: AudioHlsRenditionSelectionSchema.exactOptional().openapi({
      xml: { name: 'audioHlsRenditionSelection' },
    }),
    AudioLanguageSelection: AudioLanguageSelectionSchema.exactOptional().openapi({
      xml: { name: 'audioLanguageSelection' },
    }),
    AudioPidSelection: AudioPidSelectionSchema.exactOptional().openapi({
      xml: { name: 'audioPidSelection' },
    }),
    AudioTrackSelection: AudioTrackSelectionSchema.exactOptional().openapi({
      xml: { name: 'audioTrackSelection' },
    }),
  })
  .openapi({ description: 'Audio Selector Settings', required: [] })
  .openapi('AudioSelectorSettings')

const AudioSelectorSchema = z
  .object({
    Name: StringMin1Schema.openapi({
      xml: { name: 'name' },
      description:
        'The name of this AudioSelector. AudioDescriptions will use this name to uniquely identify this Selector.  Selector names should be unique per input.',
    }),
    SelectorSettings: AudioSelectorSettingsSchema.exactOptional().openapi({
      xml: { name: 'selectorSettings' },
      description: 'The audio selector settings.',
    }),
  })
  .openapi({ required: ['Name'], description: 'Audio Selector' })
  .openapi('AudioSelector')

const ListOfAudioSelectorSchema = z
  .array(AudioSelectorSchema)
  .openapi({ description: 'Placeholder documentation for __listOfAudioSelector' })
  .openapi('ListOfAudioSelector')

const AncillarySourceSettingsSchema = z
  .object({
    SourceAncillaryChannelNumber: IntegerMin1Max4Schema.exactOptional().openapi({
      xml: { name: 'sourceAncillaryChannelNumber' },
      description:
        'Specifies the number (1 to 4) of the captions channel you want to extract from the ancillary captions. If you plan to convert the ancillary captions to another format, complete this field. If you plan to choose Embedded as the captions destination in the output (to pass through all the channels in the ancillary captions), leave this field blank because MediaLive ignores the field.',
    }),
  })
  .openapi({ description: 'Ancillary Source Settings', required: [] })
  .openapi('AncillarySourceSettings')

const AribSourceSettingsSchema = z
  .looseObject({})
  .openapi({ description: 'Arib Source Settings' })
  .openapi('AribSourceSettings')

const DvbSubOcrLanguageSchema = z
  .enum(['DEU', 'ENG', 'FRA', 'NLD', 'POR', 'SPA'])
  .openapi({ description: 'Dvb Sub Ocr Language' })
  .openapi('DvbSubOcrLanguage')

const DvbSubSourceSettingsSchema = z
  .object({
    OcrLanguage: DvbSubOcrLanguageSchema.exactOptional().openapi({
      xml: { name: 'ocrLanguage' },
      description:
        'If you will configure a WebVTT caption description that references this caption selector, use this field to\nprovide the language to consider when translating the image-based source to text.',
    }),
    Pid: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'pid' },
      description:
        'When using DVB-Sub with Burn-In or SMPTE-TT, use this PID for the source content. Unused for DVB-Sub passthrough. All DVB-Sub content is passed through, regardless of selectors.',
    }),
  })
  .openapi({ description: 'Dvb Sub Source Settings', required: [] })
  .openapi('DvbSubSourceSettings')

const EmbeddedConvert608To708Schema = z
  .enum(['DISABLED', 'UPCONVERT'])
  .openapi({ description: 'Embedded Convert608 To708' })
  .openapi('EmbeddedConvert608To708')

const EmbeddedScte20DetectionSchema = z
  .enum(['AUTO', 'OFF'])
  .openapi({ description: 'Embedded Scte20 Detection' })
  .openapi('EmbeddedScte20Detection')

const IntegerMin1Max5Schema = z
  .int()
  .min(1)
  .max(5)
  .openapi({ description: 'Placeholder documentation for __integerMin1Max5' })
  .openapi('IntegerMin1Max5')

const EmbeddedSourceSettingsSchema = z
  .object({
    Convert608To708: EmbeddedConvert608To708Schema.exactOptional().openapi({
      xml: { name: 'convert608To708' },
      description:
        'If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.',
    }),
    Scte20Detection: EmbeddedScte20DetectionSchema.exactOptional().openapi({
      xml: { name: 'scte20Detection' },
      description:
        'Set to "auto" to handle streams with intermittent and/or non-aligned SCTE-20 and Embedded captions.',
    }),
    Source608ChannelNumber: IntegerMin1Max4Schema.exactOptional().openapi({
      xml: { name: 'source608ChannelNumber' },
      description:
        'Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.',
    }),
    Source608TrackNumber: IntegerMin1Max5Schema.exactOptional().openapi({
      xml: { name: 'source608TrackNumber' },
      description: 'This field is unused and deprecated.',
    }),
  })
  .openapi({ description: 'Embedded Source Settings', required: [] })
  .openapi('EmbeddedSourceSettings')

const Scte20Convert608To708Schema = z
  .enum(['DISABLED', 'UPCONVERT'])
  .openapi({ description: 'Scte20 Convert608 To708' })
  .openapi('Scte20Convert608To708')

const Scte20SourceSettingsSchema = z
  .object({
    Convert608To708: Scte20Convert608To708Schema.exactOptional().openapi({
      xml: { name: 'convert608To708' },
      description:
        'If upconvert, 608 data is both passed through via the "608 compatibility bytes" fields of the 708 wrapper as well as translated into 708. 708 data present in the source content will be discarded.',
    }),
    Source608ChannelNumber: IntegerMin1Max4Schema.exactOptional().openapi({
      xml: { name: 'source608ChannelNumber' },
      description:
        'Specifies the 608/708 channel number within the video track from which to extract captions. Unused for passthrough.',
    }),
  })
  .openapi({ description: 'Scte20 Source Settings', required: [] })
  .openapi('Scte20SourceSettings')

const Scte27OcrLanguageSchema = z
  .enum(['DEU', 'ENG', 'FRA', 'NLD', 'POR', 'SPA'])
  .openapi({ description: 'Scte27 Ocr Language' })
  .openapi('Scte27OcrLanguage')

const Scte27SourceSettingsSchema = z
  .object({
    OcrLanguage: Scte27OcrLanguageSchema.exactOptional().openapi({
      xml: { name: 'ocrLanguage' },
      description:
        'If you will configure a WebVTT caption description that references this caption selector, use this field to\nprovide the language to consider when translating the image-based source to text.',
    }),
    Pid: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'pid' },
      description:
        'The pid field is used in conjunction with the caption selector languageCode field as follows:\n  - Specify PID and Language: Extracts captions from that PID; the language is "informational".\n  - Specify PID and omit Language: Extracts the specified PID.\n  - Omit PID and specify Language: Extracts the specified language, whichever PID that happens to be.\n  - Omit PID and omit Language: Valid only if source is DVB-Sub that is being passed through; all languages will be passed through.',
    }),
  })
  .openapi({ description: 'Scte27 Source Settings', required: [] })
  .openapi('Scte27SourceSettings')

const DoubleMin0Max100Schema = z
  .float64()
  .openapi({ description: 'Placeholder documentation for __doubleMin0Max100' })
  .openapi('DoubleMin0Max100')

const CaptionRectangleSchema = z
  .object({
    Height: DoubleMin0Max100Schema.openapi({
      xml: { name: 'height' },
      description:
        'See the description in leftOffset.\nFor height, specify the entire height of the rectangle as a percentage of the underlying frame height. For example, \\"80\\" means the rectangle height is 80% of the underlying frame height. The topOffset and rectangleHeight must add up to 100% or less.\nThis field corresponds to tts:extent - Y in the TTML standard.',
    }),
    LeftOffset: DoubleMin0Max100Schema.openapi({
      xml: { name: 'leftOffset' },
      description:
        'Applies only if you plan to convert these source captions to EBU-TT-D or TTML in an output. (Make sure to leave the default if you don\'t have either of these formats in the output.) You can define a display rectangle for the captions that is smaller than the underlying video frame. You define the rectangle by specifying the position of the left edge, top edge, bottom edge, and right edge of the rectangle, all within the underlying video frame. The units for the measurements are percentages.\nIf you specify a value for one of these fields, you must specify a value for all of them.\nFor leftOffset, specify the position of the left edge of the rectangle, as a percentage of the underlying frame width, and relative to the left edge of the frame. For example, \\"10\\" means the measurement is 10% of the underlying frame width. The rectangle left edge starts at that position from the left edge of the frame.\nThis field corresponds to tts:origin - X in the TTML standard.',
    }),
    TopOffset: DoubleMin0Max100Schema.openapi({
      xml: { name: 'topOffset' },
      description:
        'See the description in leftOffset.\nFor topOffset, specify the position of the top edge of the rectangle, as a percentage of the underlying frame height, and relative to the top edge of the frame. For example, \\"10\\" means the measurement is 10% of the underlying frame height. The rectangle top edge starts at that position from the top edge of the frame.\nThis field corresponds to tts:origin - Y in the TTML standard.',
    }),
    Width: DoubleMin0Max100Schema.openapi({
      xml: { name: 'width' },
      description:
        'See the description in leftOffset.\nFor width, specify the entire width of the rectangle as a percentage of the underlying frame width. For example, \\"80\\" means the rectangle width is 80% of the underlying frame width. The leftOffset and rectangleWidth must add up to 100% or less.\nThis field corresponds to tts:extent - X in the TTML standard.',
    }),
  })
  .openapi({
    required: ['TopOffset', 'Height', 'Width', 'LeftOffset'],
    description: 'Caption Rectangle',
  })
  .openapi('CaptionRectangle')

const TeletextSourceSettingsSchema = z
  .object({
    OutputRectangle: CaptionRectangleSchema.exactOptional().openapi({
      xml: { name: 'outputRectangle' },
      description: 'Optionally defines a region where TTML style captions will be displayed',
    }),
    PageNumber: StringSchema.exactOptional().openapi({
      xml: { name: 'pageNumber' },
      description:
        'Specifies the teletext page number within the data stream from which to extract captions. Range of 0x100 (256) to 0x8FF (2303). Unused for passthrough. Should be specified as a hexadecimal string with no "0x" prefix.',
    }),
  })
  .openapi({ description: 'Teletext Source Settings', required: [] })
  .openapi('TeletextSourceSettings')

const CaptionSelectorSettingsSchema = z
  .object({
    AncillarySourceSettings: AncillarySourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'ancillarySourceSettings' },
    }),
    AribSourceSettings: AribSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'aribSourceSettings' },
    }),
    DvbSubSourceSettings: DvbSubSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'dvbSubSourceSettings' },
    }),
    EmbeddedSourceSettings: EmbeddedSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'embeddedSourceSettings' },
    }),
    Scte20SourceSettings: Scte20SourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'scte20SourceSettings' },
    }),
    Scte27SourceSettings: Scte27SourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'scte27SourceSettings' },
    }),
    TeletextSourceSettings: TeletextSourceSettingsSchema.exactOptional().openapi({
      xml: { name: 'teletextSourceSettings' },
    }),
  })
  .openapi({ description: 'Caption Selector Settings', required: [] })
  .openapi('CaptionSelectorSettings')

const CaptionSelectorSchema = z
  .object({
    LanguageCode: StringSchema.exactOptional().openapi({
      xml: { name: 'languageCode' },
      description:
        'When specified this field indicates the three letter language code of the caption track to extract from the source.',
    }),
    Name: StringMin1Schema.openapi({
      xml: { name: 'name' },
      description:
        'Name identifier for a caption selector.  This name is used to associate this caption selector with one or more caption descriptions.  Names must be unique within an event.',
    }),
    SelectorSettings: CaptionSelectorSettingsSchema.exactOptional().openapi({
      xml: { name: 'selectorSettings' },
      description: 'Caption selector settings.',
    }),
  })
  .openapi({ required: ['Name'], description: 'Caption Selector' })
  .openapi('CaptionSelector')

const ListOfCaptionSelectorSchema = z
  .array(CaptionSelectorSchema)
  .openapi({ description: 'Placeholder documentation for __listOfCaptionSelector' })
  .openapi('ListOfCaptionSelector')

const InputDeblockFilterSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Input Deblock Filter' })
  .openapi('InputDeblockFilter')

const InputDenoiseFilterSchema = z
  .enum(['DISABLED', 'ENABLED'])
  .openapi({ description: 'Input Denoise Filter' })
  .openapi('InputDenoiseFilter')

const InputFilterSchema = z
  .enum(['AUTO', 'DISABLED', 'FORCED'])
  .openapi({ description: 'Input Filter' })
  .openapi('InputFilter')

const HlsScte35SourceTypeSchema = z
  .enum(['MANIFEST', 'SEGMENTS'])
  .openapi({ description: 'Hls Scte35 Source Type' })
  .openapi('HlsScte35SourceType')

const HlsInputSettingsSchema = z
  .object({
    Bandwidth: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'bandwidth' },
      description:
        'When specified the HLS stream with the m3u8 BANDWIDTH that most closely matches this value will be chosen, otherwise the highest bandwidth stream in the m3u8 will be chosen.  The bitrate is specified in bits per second, as in an HLS manifest.',
    }),
    BufferSegments: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'bufferSegments' },
      description:
        'When specified, reading of the HLS input will begin this many buffer segments from the end (most recently written segment).  When not specified, the HLS input will begin with the first segment specified in the m3u8.',
    }),
    Retries: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'retries' },
      description:
        'The number of consecutive times that attempts to read a manifest or segment must fail before the input is considered unavailable.',
    }),
    RetryInterval: IntegerMin0Schema.exactOptional().openapi({
      xml: { name: 'retryInterval' },
      description:
        'The number of seconds between retries when an attempt to read a manifest or segment fails.',
    }),
    Scte35Source: HlsScte35SourceTypeSchema.exactOptional().openapi({
      xml: { name: 'scte35Source' },
      description:
        'Identifies the source for the SCTE-35 messages that MediaLive will ingest. Messages can be ingested from the content segments (in the stream) or from tags in the playlist (the HLS manifest). MediaLive ignores SCTE-35 information in the source that is not selected.',
    }),
  })
  .openapi({ description: 'Hls Input Settings', required: [] })
  .openapi('HlsInputSettings')

const NetworkInputServerValidationSchema = z
  .enum(['CHECK_CRYPTOGRAPHY_AND_VALIDATE_NAME', 'CHECK_CRYPTOGRAPHY_ONLY'])
  .openapi({ description: 'Network Input Server Validation' })
  .openapi('NetworkInputServerValidation')

const NetworkInputSettingsSchema = z
  .object({
    HlsInputSettings: HlsInputSettingsSchema.exactOptional().openapi({
      xml: { name: 'hlsInputSettings' },
      description: 'Specifies HLS input settings when the uri is for a HLS manifest.',
    }),
    ServerValidation: NetworkInputServerValidationSchema.exactOptional().openapi({
      xml: { name: 'serverValidation' },
      description:
        "Check HTTPS server certificates. When set to checkCryptographyOnly, cryptography in the certificate will be checked, but not the server's name. Certain subdomains (notably S3 buckets that use dots in the bucket name) do not strictly match the corresponding certificate's wildcard pattern and would otherwise cause the event to error. This setting is ignored for protocols that do not use https.",
    }),
  })
  .openapi({
    description:
      'Network source to transcode. Must be accessible to the Elemental Live node that is running the live event through a network connection.',
    required: [],
  })
  .openapi('NetworkInputSettings')

const IntegerMin32Max8191Schema = z
  .int()
  .min(32)
  .max(8191)
  .openapi({ description: 'Placeholder documentation for __integerMin32Max8191' })
  .openapi('IntegerMin32Max8191')

const Smpte2038DataPreferenceSchema = z
  .enum(['IGNORE', 'PREFER'])
  .openapi({ description: 'Smpte2038 Data Preference' })
  .openapi('Smpte2038DataPreference')

const InputSourceEndBehaviorSchema = z
  .enum(['CONTINUE', 'LOOP'])
  .openapi({ description: 'Input Source End Behavior' })
  .openapi('InputSourceEndBehavior')

const VideoSelectorColorSpaceSchema = z
  .enum(['FOLLOW', 'HDR10', 'HLG_2020', 'REC_601', 'REC_709'])
  .openapi({ description: 'Video Selector Color Space' })
  .openapi('VideoSelectorColorSpace')

const VideoSelectorColorSpaceSettingsSchema = z
  .object({
    Hdr10Settings: Hdr10SettingsSchema.exactOptional().openapi({ xml: { name: 'hdr10Settings' } }),
  })
  .openapi({ description: 'Video Selector Color Space Settings', required: [] })
  .openapi('VideoSelectorColorSpaceSettings')

const VideoSelectorColorSpaceUsageSchema = z
  .enum(['FALLBACK', 'FORCE'])
  .openapi({ description: 'Video Selector Color Space Usage' })
  .openapi('VideoSelectorColorSpaceUsage')

const VideoSelectorPidSchema = z
  .object({
    Pid: IntegerMin0Max8191Schema.exactOptional().openapi({
      xml: { name: 'pid' },
      description: 'Selects a specific PID from within a video source.',
    }),
  })
  .openapi({ description: 'Video Selector Pid', required: [] })
  .openapi('VideoSelectorPid')

const VideoSelectorProgramIdSchema = z
  .object({
    ProgramId: IntegerMin0Max65536Schema.exactOptional().openapi({
      xml: { name: 'programId' },
      description:
        "Selects a specific program from within a multi-program transport stream. If the program doesn't exist, the first program within the transport stream will be selected by default.",
    }),
  })
  .openapi({ description: 'Video Selector Program Id', required: [] })
  .openapi('VideoSelectorProgramId')

const VideoSelectorSettingsSchema = z
  .object({
    VideoSelectorPid: VideoSelectorPidSchema.exactOptional().openapi({
      xml: { name: 'videoSelectorPid' },
    }),
    VideoSelectorProgramId: VideoSelectorProgramIdSchema.exactOptional().openapi({
      xml: { name: 'videoSelectorProgramId' },
    }),
  })
  .openapi({ description: 'Video Selector Settings', required: [] })
  .openapi('VideoSelectorSettings')

const VideoSelectorSchema = z
  .object({
    ColorSpace: VideoSelectorColorSpaceSchema.exactOptional().openapi({
      xml: { name: 'colorSpace' },
      description:
        "Specifies the color space of an input. This setting works in tandem with colorSpaceUsage and a video description's colorSpaceSettingsChoice to determine if any conversion will be performed.",
    }),
    ColorSpaceSettings: VideoSelectorColorSpaceSettingsSchema.exactOptional().openapi({
      xml: { name: 'colorSpaceSettings' },
      description: 'Color space settings',
    }),
    ColorSpaceUsage: VideoSelectorColorSpaceUsageSchema.exactOptional().openapi({
      xml: { name: 'colorSpaceUsage' },
      description:
        'Applies only if colorSpace is a value other than follow. This field controls how the value in the colorSpace field will be used. fallback means that when the input does include color space data, that data will be used, but when the input has no color space data, the value in colorSpace will be used. Choose fallback if your input is sometimes missing color space data, but when it does have color space data, that data is correct. force means to always use the value in colorSpace. Choose force if your input usually has no color space data or might have unreliable color space data.',
    }),
    SelectorSettings: VideoSelectorSettingsSchema.exactOptional().openapi({
      xml: { name: 'selectorSettings' },
      description: 'The video selector settings.',
    }),
  })
  .openapi({
    description:
      'Specifies a particular video stream within an input source. An input may have only a single video selector.',
    required: [],
  })
  .openapi('VideoSelector')

const InputSettingsSchema = z
  .object({
    AudioSelectors: ListOfAudioSelectorSchema.exactOptional().openapi({
      xml: { name: 'audioSelectors' },
      description:
        'Used to select the audio stream to decode for inputs that have multiple available.',
    }),
    CaptionSelectors: ListOfCaptionSelectorSchema.exactOptional().openapi({
      xml: { name: 'captionSelectors' },
      description:
        'Used to select the caption input to use for inputs that have multiple available.',
    }),
    DeblockFilter: InputDeblockFilterSchema.exactOptional().openapi({
      xml: { name: 'deblockFilter' },
      description: 'Enable or disable the deblock filter when filtering.',
    }),
    DenoiseFilter: InputDenoiseFilterSchema.exactOptional().openapi({
      xml: { name: 'denoiseFilter' },
      description: 'Enable or disable the denoise filter when filtering.',
    }),
    FilterStrength: IntegerMin1Max5Schema.exactOptional().openapi({
      xml: { name: 'filterStrength' },
      description: 'Adjusts the magnitude of filtering from 1 (minimal) to 5 (strongest).',
    }),
    InputFilter: InputFilterSchema.exactOptional().openapi({
      xml: { name: 'inputFilter' },
      description:
        'Turns on the filter for this input. MPEG-2 inputs have the deblocking filter enabled by default.\n1) auto - filtering will be applied depending on input type/quality\n2) disabled - no filtering will be applied to the input\n3) forced - filtering will be applied regardless of input type',
    }),
    NetworkInputSettings: NetworkInputSettingsSchema.exactOptional().openapi({
      xml: { name: 'networkInputSettings' },
      description: 'Input settings.',
    }),
    Scte35Pid: IntegerMin32Max8191Schema.exactOptional().openapi({
      xml: { name: 'scte35Pid' },
      description:
        'PID from which to read SCTE-35 messages. If left undefined, EML will select the first SCTE-35 PID found in the input.',
    }),
    Smpte2038DataPreference: Smpte2038DataPreferenceSchema.exactOptional().openapi({
      xml: { name: 'smpte2038DataPreference' },
      description:
        'Specifies whether to extract applicable ancillary data from a SMPTE-2038 source in this input. Applicable data types are captions, timecode, AFD, and SCTE-104 messages.\n- PREFER: Extract from SMPTE-2038 if present in this input, otherwise extract from another source (if any).\n- IGNORE: Never extract any ancillary data from SMPTE-2038.',
    }),
    SourceEndBehavior: InputSourceEndBehaviorSchema.exactOptional().openapi({
      xml: { name: 'sourceEndBehavior' },
      description:
        'Loop input if it is a file. This allows a file input to be streamed indefinitely.',
    }),
    VideoSelector: VideoSelectorSchema.exactOptional().openapi({
      xml: { name: 'videoSelector' },
      description:
        'Informs which video elementary stream to decode for input types that have multiple available.',
    }),
  })
  .openapi({
    description:
      'Live Event input parameters. There can be multiple inputs in a single Live Event.',
    required: [],
  })
  .openapi('InputSettings')

type InputAttachmentType = {
  AutomaticInputFailoverSettings?: z.infer<typeof AutomaticInputFailoverSettingsSchema>
  InputAttachmentName?: z.infer<typeof StringSchema>
  InputId?: z.infer<typeof StringSchema>
  InputSettings?: z.infer<typeof InputSettingsSchema>
}

const InputAttachmentSchema: z.ZodType<InputAttachmentType> = z
  .object({
    AutomaticInputFailoverSettings: AutomaticInputFailoverSettingsSchema.exactOptional().openapi({
      xml: { name: 'automaticInputFailoverSettings' },
      description:
        'User-specified settings for defining what the conditions are for declaring the input unhealthy and failing over to a different input.',
    }),
    InputAttachmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'inputAttachmentName' },
      description:
        'User-specified name for the attachment. This is required if the user wants to use this input in an input switch action.',
    }),
    InputId: StringSchema.exactOptional().openapi({
      xml: { name: 'inputId' },
      description: 'The ID of the input',
    }),
    InputSettings: InputSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputSettings' },
      description: 'Settings of an input (caption selector, etc.)',
    }),
  })
  .openapi({ description: 'Placeholder documentation for InputAttachment', required: [] })
  .openapi('InputAttachment')

type ListOfInputAttachmentType = z.infer<typeof InputAttachmentSchema>[]

const ListOfInputAttachmentSchema: z.ZodType<ListOfInputAttachmentType> = z
  .array(InputAttachmentSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputAttachment' })
  .openapi('ListOfInputAttachment')

const InputCodecSchema = z
  .enum(['MPEG2', 'AVC', 'HEVC'])
  .openapi({ description: 'codec in increasing order of complexity' })
  .openapi('InputCodec')

const InputMaximumBitrateSchema = z
  .enum(['MAX_10_MBPS', 'MAX_20_MBPS', 'MAX_50_MBPS'])
  .openapi({
    description:
      'Maximum input bitrate in megabits per second. Bitrates up to 50 Mbps are supported currently.',
  })
  .openapi('InputMaximumBitrate')

const InputResolutionSchema = z
  .enum(['SD', 'HD', 'UHD'])
  .openapi({
    description:
      'Input resolution based on lines of vertical resolution in the input; SD is less than 720 lines, HD is 720 to 1080 lines, UHD is greater than 1080 lines\n',
  })
  .openapi('InputResolution')

const InputSpecificationSchema = z
  .object({
    Codec: InputCodecSchema.exactOptional().openapi({
      xml: { name: 'codec' },
      description: 'Input codec',
    }),
    MaximumBitrate: InputMaximumBitrateSchema.exactOptional().openapi({
      xml: { name: 'maximumBitrate' },
      description: 'Maximum input bitrate, categorized coarsely',
    }),
    Resolution: InputResolutionSchema.exactOptional().openapi({
      xml: { name: 'resolution' },
      description: 'Input resolution, categorized coarsely',
    }),
  })
  .openapi({ description: 'Placeholder documentation for InputSpecification', required: [] })
  .openapi('InputSpecification')

const LogLevelSchema = z
  .enum(['ERROR', 'WARNING', 'INFO', 'DEBUG', 'DISABLED'])
  .openapi({ description: 'The log level the user wants for their channel.' })
  .openapi('LogLevel')

const MaintenanceDaySchema = z
  .enum(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'])
  .openapi({ description: 'The currently selected maintenance day.' })
  .openapi('MaintenanceDay')

const MaintenanceStatusSchema = z
  .object({
    MaintenanceDay: MaintenanceDaySchema.exactOptional().openapi({
      xml: { name: 'maintenanceDay' },
      description: 'The currently selected maintenance day.',
    }),
    MaintenanceDeadline: StringSchema.exactOptional().openapi({
      xml: { name: 'maintenanceDeadline' },
      description:
        'Maintenance is required by the displayed date and time. Date and time is in ISO.',
    }),
    MaintenanceScheduledDate: StringSchema.exactOptional().openapi({
      xml: { name: 'maintenanceScheduledDate' },
      description: 'The currently scheduled maintenance date and time. Date and time is in ISO.',
    }),
    MaintenanceStartTime: StringSchema.exactOptional().openapi({
      xml: { name: 'maintenanceStartTime' },
      description: 'The currently selected maintenance start time. Time is in UTC.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for MaintenanceStatus', required: [] })
  .openapi('MaintenanceStatus')

const PipelineDetailSchema = z
  .object({
    ActiveInputAttachmentName: StringSchema.exactOptional().openapi({
      xml: { name: 'activeInputAttachmentName' },
      description:
        'The name of the active input attachment currently being ingested by this pipeline.',
    }),
    ActiveInputSwitchActionName: StringSchema.exactOptional().openapi({
      xml: { name: 'activeInputSwitchActionName' },
      description:
        'The name of the input switch schedule action that occurred most recently and that resulted in the switch to the current input attachment for this pipeline.',
    }),
    ActiveMotionGraphicsActionName: StringSchema.exactOptional().openapi({
      xml: { name: 'activeMotionGraphicsActionName' },
      description:
        'The name of the motion graphics activate action that occurred most recently and that resulted in the current graphics URI for this pipeline.',
    }),
    ActiveMotionGraphicsUri: StringSchema.exactOptional().openapi({
      xml: { name: 'activeMotionGraphicsUri' },
      description: 'The current URI being used for HTML5 motion graphics for this pipeline.',
    }),
    PipelineId: StringSchema.exactOptional().openapi({
      xml: { name: 'pipelineId' },
      description: 'Pipeline ID',
    }),
  })
  .openapi({
    description: 'Runtime details of a pipeline when a channel is running.',
    required: [],
  })
  .openapi('PipelineDetail')

const ListOfPipelineDetailSchema = z
  .array(PipelineDetailSchema)
  .openapi({ description: 'Placeholder documentation for __listOfPipelineDetail' })
  .openapi('ListOfPipelineDetail')

const ChannelStateSchema = z
  .enum([
    'CREATING',
    'CREATE_FAILED',
    'IDLE',
    'STARTING',
    'RUNNING',
    'RECOVERING',
    'STOPPING',
    'DELETING',
    'DELETED',
    'UPDATING',
    'UPDATE_FAILED',
  ])
  .openapi({ description: 'Placeholder documentation for ChannelState' })
  .openapi('ChannelState')

const TagsSchema = z
  .record(z.string(), StringSchema)
  .openapi({ description: 'Placeholder documentation for Tags' })
  .openapi('Tags')

const VpcOutputSettingsDescriptionSchema = z
  .object({
    AvailabilityZones: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZones' },
      description:
        'The Availability Zones where the vpc subnets are located.\nThe first Availability Zone applies to the first subnet in the list of subnets.\nThe second Availability Zone applies to the second subnet.\n',
    }),
    NetworkInterfaceIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'networkInterfaceIds' },
      description:
        "A list of Elastic Network Interfaces created by MediaLive in the customer's VPC\n",
    }),
    SecurityGroupIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'securityGroupIds' },
      description:
        'A list of up EC2 VPC security group IDs attached to the Output VPC network interfaces.\n',
    }),
    SubnetIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'subnetIds' },
      description:
        'A list of VPC subnet IDs from the same VPC.\nIf STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).\n',
    }),
  })
  .openapi({ description: 'The properties for a private VPC Output\n', required: [] })
  .openapi('VpcOutputSettingsDescription')

type ChannelType = {
  Arn?: z.infer<typeof StringSchema>
  CdiInputSpecification?: z.infer<typeof CdiInputSpecificationSchema>
  ChannelClass?: z.infer<typeof ChannelClassSchema>
  Destinations?: z.infer<typeof ListOfOutputDestinationSchema>
  EgressEndpoints?: z.infer<typeof ListOfChannelEgressEndpointSchema>
  EncoderSettings?: z.infer<typeof EncoderSettingsSchema>
  Id?: z.infer<typeof StringSchema>
  InputAttachments?: z.infer<typeof ListOfInputAttachmentSchema>
  InputSpecification?: z.infer<typeof InputSpecificationSchema>
  LogLevel?: z.infer<typeof LogLevelSchema>
  Maintenance?: z.infer<typeof MaintenanceStatusSchema>
  Name?: z.infer<typeof StringSchema>
  PipelineDetails?: z.infer<typeof ListOfPipelineDetailSchema>
  PipelinesRunningCount?: z.infer<typeof IntegerSchema>
  RoleArn?: z.infer<typeof StringSchema>
  State?: z.infer<typeof ChannelStateSchema>
  Tags?: z.infer<typeof TagsSchema>
  Vpc?: z.infer<typeof VpcOutputSettingsDescriptionSchema>
}

const ChannelSchema: z.ZodType<ChannelType> = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the channel.',
    }),
    CdiInputSpecification: CdiInputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'cdiInputSpecification' },
      description: 'Specification of CDI inputs for this channel',
    }),
    ChannelClass: ChannelClassSchema.exactOptional().openapi({
      xml: { name: 'channelClass' },
      description:
        'The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description:
        'A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n',
    }),
    EgressEndpoints: ListOfChannelEgressEndpointSchema.exactOptional().openapi({
      xml: { name: 'egressEndpoints' },
      description: 'The endpoints where outgoing connections initiate from',
    }),
    EncoderSettings: EncoderSettingsSchema.exactOptional().openapi({
      xml: { name: 'encoderSettings' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the channel.',
    }),
    InputAttachments: ListOfInputAttachmentSchema.exactOptional().openapi({
      xml: { name: 'inputAttachments' },
      description: 'List of input attachments for channel.',
    }),
    InputSpecification: InputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'inputSpecification' },
      description: 'Specification of network and file inputs for this channel',
    }),
    LogLevel: LogLevelSchema.exactOptional().openapi({
      xml: { name: 'logLevel' },
      description: 'The log level being written to CloudWatch Logs.',
    }),
    Maintenance: MaintenanceStatusSchema.exactOptional().openapi({
      xml: { name: 'maintenance' },
      description: 'Maintenance settings for this channel.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the channel. (user-mutable)',
    }),
    PipelineDetails: ListOfPipelineDetailSchema.exactOptional().openapi({
      xml: { name: 'pipelineDetails' },
      description: 'Runtime details for the pipelines of a running channel.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description: 'The Amazon Resource Name (ARN) of the role assumed when running the Channel.',
    }),
    State: ChannelStateSchema.exactOptional().openapi({ xml: { name: 'state' } }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Vpc: VpcOutputSettingsDescriptionSchema.exactOptional().openapi({
      xml: { name: 'vpc' },
      description: 'Settings for VPC output',
    }),
  })
  .openapi({ description: 'Placeholder documentation for Channel', required: [] })
  .openapi('Channel')

type CreateChannelResponseType = { Channel?: z.infer<typeof ChannelSchema> }

type DeleteChannelResponseType = {
  Arn?: z.infer<typeof StringSchema>
  CdiInputSpecification?: z.infer<typeof CdiInputSpecificationSchema>
  ChannelClass?: z.infer<typeof ChannelClassSchema>
  Destinations?: z.infer<typeof ListOfOutputDestinationSchema>
  EgressEndpoints?: z.infer<typeof ListOfChannelEgressEndpointSchema>
  EncoderSettings?: z.infer<typeof EncoderSettingsSchema>
  Id?: z.infer<typeof StringSchema>
  InputAttachments?: z.infer<typeof ListOfInputAttachmentSchema>
  InputSpecification?: z.infer<typeof InputSpecificationSchema>
  LogLevel?: z.infer<typeof LogLevelSchema>
  Maintenance?: z.infer<typeof MaintenanceStatusSchema>
  Name?: z.infer<typeof StringSchema>
  PipelineDetails?: z.infer<typeof ListOfPipelineDetailSchema>
  PipelinesRunningCount?: z.infer<typeof IntegerSchema>
  RoleArn?: z.infer<typeof StringSchema>
  State?: z.infer<typeof ChannelStateSchema>
  Tags?: z.infer<typeof TagsSchema>
  Vpc?: z.infer<typeof VpcOutputSettingsDescriptionSchema>
}

type DescribeChannelResponseType = {
  Arn?: z.infer<typeof StringSchema>
  CdiInputSpecification?: z.infer<typeof CdiInputSpecificationSchema>
  ChannelClass?: z.infer<typeof ChannelClassSchema>
  Destinations?: z.infer<typeof ListOfOutputDestinationSchema>
  EgressEndpoints?: z.infer<typeof ListOfChannelEgressEndpointSchema>
  EncoderSettings?: z.infer<typeof EncoderSettingsSchema>
  Id?: z.infer<typeof StringSchema>
  InputAttachments?: z.infer<typeof ListOfInputAttachmentSchema>
  InputSpecification?: z.infer<typeof InputSpecificationSchema>
  LogLevel?: z.infer<typeof LogLevelSchema>
  Maintenance?: z.infer<typeof MaintenanceStatusSchema>
  Name?: z.infer<typeof StringSchema>
  PipelineDetails?: z.infer<typeof ListOfPipelineDetailSchema>
  PipelinesRunningCount?: z.infer<typeof IntegerSchema>
  RoleArn?: z.infer<typeof StringSchema>
  State?: z.infer<typeof ChannelStateSchema>
  Tags?: z.infer<typeof TagsSchema>
  Vpc?: z.infer<typeof VpcOutputSettingsDescriptionSchema>
}

type DescribeScheduleResponseType = {
  NextToken?: z.infer<typeof StringSchema>
  ScheduleActions?: z.infer<typeof ListOfScheduleActionSchema>
}

type ChannelSummaryType = {
  Arn?: z.infer<typeof StringSchema>
  CdiInputSpecification?: z.infer<typeof CdiInputSpecificationSchema>
  ChannelClass?: z.infer<typeof ChannelClassSchema>
  Destinations?: z.infer<typeof ListOfOutputDestinationSchema>
  EgressEndpoints?: z.infer<typeof ListOfChannelEgressEndpointSchema>
  Id?: z.infer<typeof StringSchema>
  InputAttachments?: z.infer<typeof ListOfInputAttachmentSchema>
  InputSpecification?: z.infer<typeof InputSpecificationSchema>
  LogLevel?: z.infer<typeof LogLevelSchema>
  Maintenance?: z.infer<typeof MaintenanceStatusSchema>
  Name?: z.infer<typeof StringSchema>
  PipelinesRunningCount?: z.infer<typeof IntegerSchema>
  RoleArn?: z.infer<typeof StringSchema>
  State?: z.infer<typeof ChannelStateSchema>
  Tags?: z.infer<typeof TagsSchema>
  Vpc?: z.infer<typeof VpcOutputSettingsDescriptionSchema>
}

const ChannelSummarySchema: z.ZodType<ChannelSummaryType> = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the channel.',
    }),
    CdiInputSpecification: CdiInputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'cdiInputSpecification' },
      description: 'Specification of CDI inputs for this channel',
    }),
    ChannelClass: ChannelClassSchema.exactOptional().openapi({
      xml: { name: 'channelClass' },
      description:
        'The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description:
        'A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n',
    }),
    EgressEndpoints: ListOfChannelEgressEndpointSchema.exactOptional().openapi({
      xml: { name: 'egressEndpoints' },
      description: 'The endpoints where outgoing connections initiate from',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the channel.',
    }),
    InputAttachments: ListOfInputAttachmentSchema.exactOptional().openapi({
      xml: { name: 'inputAttachments' },
      description: 'List of input attachments for channel.',
    }),
    InputSpecification: InputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'inputSpecification' },
      description: 'Specification of network and file inputs for this channel',
    }),
    LogLevel: LogLevelSchema.exactOptional().openapi({
      xml: { name: 'logLevel' },
      description: 'The log level being written to CloudWatch Logs.',
    }),
    Maintenance: MaintenanceStatusSchema.exactOptional().openapi({
      xml: { name: 'maintenance' },
      description: 'Maintenance settings for this channel.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the channel. (user-mutable)',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description: 'The Amazon Resource Name (ARN) of the role assumed when running the Channel.',
    }),
    State: ChannelStateSchema.exactOptional().openapi({ xml: { name: 'state' } }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Vpc: VpcOutputSettingsDescriptionSchema.exactOptional().openapi({
      xml: { name: 'vpc' },
      description: 'Settings for any VPC outputs.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for ChannelSummary', required: [] })
  .openapi('ChannelSummary')

type ListOfChannelSummaryType = z.infer<typeof ChannelSummarySchema>[]

const ListOfChannelSummarySchema: z.ZodType<ListOfChannelSummaryType> = z
  .array(ChannelSummarySchema)
  .openapi({ description: 'Placeholder documentation for __listOfChannelSummary' })
  .openapi('ListOfChannelSummary')

type ListChannelsResponseType = {
  Channels?: z.infer<typeof ListOfChannelSummarySchema>
  NextToken?: z.infer<typeof StringSchema>
}

type StartChannelResponseType = {
  Arn?: z.infer<typeof StringSchema>
  CdiInputSpecification?: z.infer<typeof CdiInputSpecificationSchema>
  ChannelClass?: z.infer<typeof ChannelClassSchema>
  Destinations?: z.infer<typeof ListOfOutputDestinationSchema>
  EgressEndpoints?: z.infer<typeof ListOfChannelEgressEndpointSchema>
  EncoderSettings?: z.infer<typeof EncoderSettingsSchema>
  Id?: z.infer<typeof StringSchema>
  InputAttachments?: z.infer<typeof ListOfInputAttachmentSchema>
  InputSpecification?: z.infer<typeof InputSpecificationSchema>
  LogLevel?: z.infer<typeof LogLevelSchema>
  Maintenance?: z.infer<typeof MaintenanceStatusSchema>
  Name?: z.infer<typeof StringSchema>
  PipelineDetails?: z.infer<typeof ListOfPipelineDetailSchema>
  PipelinesRunningCount?: z.infer<typeof IntegerSchema>
  RoleArn?: z.infer<typeof StringSchema>
  State?: z.infer<typeof ChannelStateSchema>
  Tags?: z.infer<typeof TagsSchema>
  Vpc?: z.infer<typeof VpcOutputSettingsDescriptionSchema>
}

type StopChannelResponseType = {
  Arn?: z.infer<typeof StringSchema>
  CdiInputSpecification?: z.infer<typeof CdiInputSpecificationSchema>
  ChannelClass?: z.infer<typeof ChannelClassSchema>
  Destinations?: z.infer<typeof ListOfOutputDestinationSchema>
  EgressEndpoints?: z.infer<typeof ListOfChannelEgressEndpointSchema>
  EncoderSettings?: z.infer<typeof EncoderSettingsSchema>
  Id?: z.infer<typeof StringSchema>
  InputAttachments?: z.infer<typeof ListOfInputAttachmentSchema>
  InputSpecification?: z.infer<typeof InputSpecificationSchema>
  LogLevel?: z.infer<typeof LogLevelSchema>
  Maintenance?: z.infer<typeof MaintenanceStatusSchema>
  Name?: z.infer<typeof StringSchema>
  PipelineDetails?: z.infer<typeof ListOfPipelineDetailSchema>
  PipelinesRunningCount?: z.infer<typeof IntegerSchema>
  RoleArn?: z.infer<typeof StringSchema>
  State?: z.infer<typeof ChannelStateSchema>
  Tags?: z.infer<typeof TagsSchema>
  Vpc?: z.infer<typeof VpcOutputSettingsDescriptionSchema>
}

type UpdateChannelResponseType = { Channel?: z.infer<typeof ChannelSchema> }

type UpdateChannelClassResponseType = { Channel?: z.infer<typeof ChannelSchema> }

type BatchScheduleActionCreateRequestType = {
  ScheduleActions: z.infer<typeof ListOfScheduleActionSchema>
}

const BatchScheduleActionCreateRequestSchema: z.ZodType<BatchScheduleActionCreateRequestType> = z
  .object({
    ScheduleActions: ListOfScheduleActionSchema.openapi({
      xml: { name: 'scheduleActions' },
      description: 'A list of schedule actions to create.',
    }),
  })
  .openapi({
    required: ['ScheduleActions'],
    description:
      'A list of schedule actions to create (in a request) or that have been created (in a response).',
  })
  .openapi('BatchScheduleActionCreateRequest')

const BatchScheduleActionDeleteRequestSchema = z
  .object({
    ActionNames: ListOfStringSchema.openapi({
      xml: { name: 'actionNames' },
      description: 'A list of schedule actions to delete.',
    }),
  })
  .openapi({ required: ['ActionNames'], description: 'A list of schedule actions to delete.' })
  .openapi('BatchScheduleActionDeleteRequest')

type BatchUpdateScheduleRequestType = {
  Creates?: z.infer<typeof BatchScheduleActionCreateRequestSchema>
  Deletes?: z.infer<typeof BatchScheduleActionDeleteRequestSchema>
}

const StringPattern010920300Schema = z
  .string()
  .regex(/^([0,1]?[0-9]|2[0-3]):00$/)
  .openapi({ description: 'Placeholder documentation for __stringPattern010920300' })
  .openapi('StringPattern010920300')

const MaintenanceCreateSettingsSchema = z
  .object({
    MaintenanceDay: MaintenanceDaySchema.exactOptional().openapi({
      xml: { name: 'maintenanceDay' },
      description:
        'Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.',
    }),
    MaintenanceStartTime: StringPattern010920300Schema.exactOptional().openapi({
      xml: { name: 'maintenanceStartTime' },
      description:
        'Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for MaintenanceCreateSettings', required: [] })
  .openapi('MaintenanceCreateSettings')

const VpcOutputSettingsSchema = z
  .object({
    PublicAddressAllocationIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'publicAddressAllocationIds' },
      description:
        'List of public address allocation ids to associate with ENIs that will be created in Output VPC.\nMust specify one for SINGLE_PIPELINE, two for STANDARD channels\n',
    }),
    SecurityGroupIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'securityGroupIds' },
      description:
        'A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.\nIf none are specified then the VPC default security group will be used\n',
    }),
    SubnetIds: ListOfStringSchema.openapi({
      xml: { name: 'subnetIds' },
      description:
        'A list of VPC subnet IDs from the same VPC.\nIf STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).\n',
    }),
  })
  .openapi({
    required: ['SubnetIds'],
    description:
      'The properties for a private VPC Output\nWhen this property is specified, the output egress addresses will be created in a user specified VPC\n',
  })
  .openapi('VpcOutputSettings')

type CreateChannelRequestType = {
  CdiInputSpecification?: z.infer<typeof CdiInputSpecificationSchema>
  ChannelClass?: z.infer<typeof ChannelClassSchema>
  Destinations?: z.infer<typeof ListOfOutputDestinationSchema>
  EncoderSettings?: z.infer<typeof EncoderSettingsSchema>
  InputAttachments?: z.infer<typeof ListOfInputAttachmentSchema>
  InputSpecification?: z.infer<typeof InputSpecificationSchema>
  LogLevel?: z.infer<typeof LogLevelSchema>
  Maintenance?: z.infer<typeof MaintenanceCreateSettingsSchema>
  Name?: z.infer<typeof StringSchema>
  RequestId?: z.infer<typeof StringSchema>
  Reserved?: z.infer<typeof StringSchema>
  RoleArn?: z.infer<typeof StringSchema>
  Tags?: z.infer<typeof TagsSchema>
  Vpc?: z.infer<typeof VpcOutputSettingsSchema>
}

const MaintenanceUpdateSettingsSchema = z
  .object({
    MaintenanceDay: MaintenanceDaySchema.exactOptional().openapi({
      xml: { name: 'maintenanceDay' },
      description:
        'Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.',
    }),
    MaintenanceScheduledDate: StringSchema.exactOptional().openapi({
      xml: { name: 'maintenanceScheduledDate' },
      description:
        'Choose a specific date for maintenance to occur. The chosen date is used for the next maintenance window only.',
    }),
    MaintenanceStartTime: StringPattern010920300Schema.exactOptional().openapi({
      xml: { name: 'maintenanceStartTime' },
      description:
        'Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for MaintenanceUpdateSettings', required: [] })
  .openapi('MaintenanceUpdateSettings')

type UpdateChannelRequestType = {
  CdiInputSpecification?: z.infer<typeof CdiInputSpecificationSchema>
  Destinations?: z.infer<typeof ListOfOutputDestinationSchema>
  EncoderSettings?: z.infer<typeof EncoderSettingsSchema>
  InputAttachments?: z.infer<typeof ListOfInputAttachmentSchema>
  InputSpecification?: z.infer<typeof InputSpecificationSchema>
  LogLevel?: z.infer<typeof LogLevelSchema>
  Maintenance?: z.infer<typeof MaintenanceUpdateSettingsSchema>
  Name?: z.infer<typeof StringSchema>
  RoleArn?: z.infer<typeof StringSchema>
}

const AcceptInputDeviceTransferResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for AcceptInputDeviceTransferResponse' })
  .openapi('AcceptInputDeviceTransferResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const UnprocessableEntityExceptionSchema = z.any().openapi('UnprocessableEntityException')

const InternalServerErrorExceptionSchema = z.any().openapi('InternalServerErrorException')

const ForbiddenExceptionSchema = z.any().openapi('ForbiddenException')

const BadGatewayExceptionSchema = z.any().openapi('BadGatewayException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const GatewayTimeoutExceptionSchema = z.any().openapi('GatewayTimeoutException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const BatchFailedResultModelSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'ARN of the resource',
    }),
    Code: StringSchema.exactOptional().openapi({
      xml: { name: 'code' },
      description: 'Error code for the failed operation',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'ID of the resource',
    }),
    Message: StringSchema.exactOptional().openapi({
      xml: { name: 'message' },
      description: 'Error message for the failed operation',
    }),
  })
  .openapi({ description: 'Details from a failed operation', required: [] })
  .openapi('BatchFailedResultModel')

const ListOfBatchFailedResultModelSchema = z
  .array(BatchFailedResultModelSchema)
  .openapi({ description: 'Placeholder documentation for __listOfBatchFailedResultModel' })
  .openapi('ListOfBatchFailedResultModel')

const BatchSuccessfulResultModelSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'ARN of the resource',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'ID of the resource',
    }),
    State: StringSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'Current state of the resource',
    }),
  })
  .openapi({ description: 'Details from a successful operation', required: [] })
  .openapi('BatchSuccessfulResultModel')

const ListOfBatchSuccessfulResultModelSchema = z
  .array(BatchSuccessfulResultModelSchema)
  .openapi({ description: 'Placeholder documentation for __listOfBatchSuccessfulResultModel' })
  .openapi('ListOfBatchSuccessfulResultModel')

const BatchDeleteResponseSchema = z
  .object({
    Failed: ListOfBatchFailedResultModelSchema.exactOptional().openapi({
      xml: { name: 'failed' },
      description: 'List of failed operations',
    }),
    Successful: ListOfBatchSuccessfulResultModelSchema.exactOptional().openapi({
      xml: { name: 'successful' },
      description: 'List of successful operations',
    }),
  })
  .openapi({ description: 'Placeholder documentation for BatchDeleteResponse', required: [] })
  .openapi('BatchDeleteResponse')

const BatchStartResponseSchema = z
  .object({
    Failed: ListOfBatchFailedResultModelSchema.exactOptional().openapi({
      xml: { name: 'failed' },
      description: 'List of failed operations',
    }),
    Successful: ListOfBatchSuccessfulResultModelSchema.exactOptional().openapi({
      xml: { name: 'successful' },
      description: 'List of successful operations',
    }),
  })
  .openapi({ description: 'Placeholder documentation for BatchStartResponse', required: [] })
  .openapi('BatchStartResponse')

const BatchStopResponseSchema = z
  .object({
    Failed: ListOfBatchFailedResultModelSchema.exactOptional().openapi({
      xml: { name: 'failed' },
      description: 'List of failed operations',
    }),
    Successful: ListOfBatchSuccessfulResultModelSchema.exactOptional().openapi({
      xml: { name: 'successful' },
      description: 'List of successful operations',
    }),
  })
  .openapi({ description: 'Placeholder documentation for BatchStopResponse', required: [] })
  .openapi('BatchStopResponse')

const BatchUpdateScheduleResponseSchema: z.ZodType<BatchUpdateScheduleResponseType> = z
  .object({
    Creates: BatchScheduleActionCreateResultSchema.exactOptional().openapi({
      xml: { name: 'creates' },
      description: 'Schedule actions created in the schedule.',
    }),
    Deletes: BatchScheduleActionDeleteResultSchema.exactOptional().openapi({
      xml: { name: 'deletes' },
      description: 'Schedule actions deleted from the schedule.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for BatchUpdateScheduleResponse',
    required: [],
  })
  .openapi('BatchUpdateScheduleResponse')

const CancelInputDeviceTransferResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for CancelInputDeviceTransferResponse' })
  .openapi('CancelInputDeviceTransferResponse')

const ClaimDeviceResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for ClaimDeviceResponse' })
  .openapi('ClaimDeviceResponse')

const CreateChannelResponseSchema: z.ZodType<CreateChannelResponseType> = z
  .object({ Channel: ChannelSchema.exactOptional().openapi({ xml: { name: 'channel' } }) })
  .openapi({ description: 'Placeholder documentation for CreateChannelResponse', required: [] })
  .openapi('CreateChannelResponse')

const InputDestinationVpcSchema = z
  .object({
    AvailabilityZone: StringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZone' },
      description: 'The availability zone of the Input destination.\n',
    }),
    NetworkInterfaceId: StringSchema.exactOptional().openapi({
      xml: { name: 'networkInterfaceId' },
      description: 'The network interface ID of the Input destination in the VPC.\n',
    }),
  })
  .openapi({ description: 'The properties for a VPC type input destination.', required: [] })
  .openapi('InputDestinationVpc')

const InputDestinationSchema = z
  .object({
    Ip: StringSchema.exactOptional().openapi({
      xml: { name: 'ip' },
      description:
        'The system-generated static IP address of endpoint.\nIt remains fixed for the lifetime of the input.\n',
    }),
    Port: StringSchema.exactOptional().openapi({
      xml: { name: 'port' },
      description: 'The port number for the input.',
    }),
    Url: StringSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description: 'This represents the endpoint that the customer stream will be\npushed to.\n',
    }),
    Vpc: InputDestinationVpcSchema.exactOptional().openapi({ xml: { name: 'vpc' } }),
  })
  .openapi({ description: 'The settings for a PUSH type input.', required: [] })
  .openapi('InputDestination')

const ListOfInputDestinationSchema = z
  .array(InputDestinationSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputDestination' })
  .openapi('ListOfInputDestination')

const InputClassSchema = z
  .enum(['STANDARD', 'SINGLE_PIPELINE'])
  .openapi({
    description: 'A standard input has two sources and a single pipeline input only has one.',
  })
  .openapi('InputClass')

const InputDeviceSettingsSchema = z
  .object({
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique ID for the device.',
    }),
  })
  .openapi({ description: 'Settings for an input device.', required: [] })
  .openapi('InputDeviceSettings')

const ListOfInputDeviceSettingsSchema = z
  .array(InputDeviceSettingsSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputDeviceSettings' })
  .openapi('ListOfInputDeviceSettings')

const InputSourceTypeSchema = z
  .enum(['STATIC', 'DYNAMIC'])
  .openapi({
    description:
      'There are two types of input sources, static and dynamic. If an input source is dynamic you can\nchange the source url of the input dynamically using an input switch action. Currently, two input types\nsupport a dynamic url at this time, MP4_FILE and TS_FILE. By default all input sources are static.\n',
  })
  .openapi('InputSourceType')

const MediaConnectFlowSchema = z
  .object({
    FlowArn: StringSchema.exactOptional().openapi({
      xml: { name: 'flowArn' },
      description: 'The unique ARN of the MediaConnect Flow being used as a source.',
    }),
  })
  .openapi({ description: 'The settings for a MediaConnect Flow.', required: [] })
  .openapi('MediaConnectFlow')

const ListOfMediaConnectFlowSchema = z
  .array(MediaConnectFlowSchema)
  .openapi({ description: 'Placeholder documentation for __listOfMediaConnectFlow' })
  .openapi('ListOfMediaConnectFlow')

const InputSourceSchema = z
  .object({
    PasswordParam: StringSchema.exactOptional().openapi({
      xml: { name: 'passwordParam' },
      description: 'The key used to extract the password from EC2 Parameter store.',
    }),
    Url: StringSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description: "This represents the customer's source URL where stream is\npulled from.\n",
    }),
    Username: StringSchema.exactOptional().openapi({
      xml: { name: 'username' },
      description: 'The username for the input source.',
    }),
  })
  .openapi({ description: 'The settings for a PULL type input.', required: [] })
  .openapi('InputSource')

const ListOfInputSourceSchema = z
  .array(InputSourceSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputSource' })
  .openapi('ListOfInputSource')

const InputStateSchema = z
  .enum(['CREATING', 'DETACHED', 'ATTACHED', 'DELETING', 'DELETED'])
  .openapi({ description: 'Placeholder documentation for InputState' })
  .openapi('InputState')

const InputTypeSchema = z
  .enum([
    'UDP_PUSH',
    'RTP_PUSH',
    'RTMP_PUSH',
    'RTMP_PULL',
    'URL_PULL',
    'MP4_FILE',
    'MEDIACONNECT',
    'INPUT_DEVICE',
    'AWS_CDI',
    'TS_FILE',
  ])
  .openapi({ description: 'The different types of inputs that AWS Elemental MediaLive supports.' })
  .openapi('InputType')

const InputSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The Unique ARN of the input (generated, immutable).',
    }),
    AttachedChannels: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'attachedChannels' },
      description:
        'A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).',
    }),
    Destinations: ListOfInputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of the destinations of the input (PUSH-type).',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The generated ID of the input (unique for user account, immutable).',
    }),
    InputClass: InputClassSchema.exactOptional().openapi({
      xml: { name: 'inputClass' },
      description:
        'STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.\nSINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.\n',
    }),
    InputDevices: ListOfInputDeviceSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputDevices' },
      description: 'Settings for the input devices.',
    }),
    InputPartnerIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'inputPartnerIds' },
      description: 'A list of IDs for all Inputs which are partners of this one.',
    }),
    InputSourceType: InputSourceTypeSchema.exactOptional().openapi({
      xml: { name: 'inputSourceType' },
      description:
        "Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes\nduring input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.\n",
    }),
    MediaConnectFlows: ListOfMediaConnectFlowSchema.exactOptional().openapi({
      xml: { name: 'mediaConnectFlows' },
      description: 'A list of MediaConnect Flows for this input.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The user-assigned name (This is a mutable value).',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description:
        'The Amazon Resource Name (ARN) of the role this input assumes during and after creation.',
    }),
    SecurityGroups: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'securityGroups' },
      description: 'A list of IDs for all the Input Security Groups attached to the input.',
    }),
    Sources: ListOfInputSourceSchema.exactOptional().openapi({
      xml: { name: 'sources' },
      description: 'A list of the sources of the input (PULL-type).',
    }),
    State: InputStateSchema.exactOptional().openapi({ xml: { name: 'state' } }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Type: InputTypeSchema.exactOptional().openapi({ xml: { name: 'type' } }),
  })
  .openapi({ description: 'Placeholder documentation for Input', required: [] })
  .openapi('Input')

const CreateInputResponseSchema = z
  .object({ Input: InputSchema.exactOptional().openapi({ xml: { name: 'input' } }) })
  .openapi({ description: 'Placeholder documentation for CreateInputResponse', required: [] })
  .openapi('CreateInputResponse')

const InputDestinationRequestSchema = z
  .object({
    StreamName: StringSchema.exactOptional().openapi({
      xml: { name: 'streamName' },
      description: 'A unique name for the location the RTMP stream is being pushed\nto.\n',
    }),
  })
  .openapi({ description: 'Endpoint settings for a PUSH type input.', required: [] })
  .openapi('InputDestinationRequest')

const MediaConnectFlowRequestSchema = z
  .object({
    FlowArn: StringSchema.exactOptional().openapi({
      xml: { name: 'flowArn' },
      description: 'The ARN of the MediaConnect Flow that you want to use as a source.',
    }),
  })
  .openapi({ description: 'The settings for a MediaConnect Flow.', required: [] })
  .openapi('MediaConnectFlowRequest')

const InputSourceRequestSchema = z
  .object({
    PasswordParam: StringSchema.exactOptional().openapi({
      xml: { name: 'passwordParam' },
      description: 'The key used to extract the password from EC2 Parameter store.',
    }),
    Url: StringSchema.exactOptional().openapi({
      xml: { name: 'url' },
      description: "This represents the customer's source URL where stream is\npulled from.\n",
    }),
    Username: StringSchema.exactOptional().openapi({
      xml: { name: 'username' },
      description: 'The username for the input source.',
    }),
  })
  .openapi({ description: 'Settings for for a PULL type input.', required: [] })
  .openapi('InputSourceRequest')

const InputSecurityGroupStateSchema = z
  .enum(['IDLE', 'IN_USE', 'UPDATING', 'DELETED'])
  .openapi({ description: 'Placeholder documentation for InputSecurityGroupState' })
  .openapi('InputSecurityGroupState')

const InputWhitelistRuleSchema = z
  .object({
    Cidr: StringSchema.exactOptional().openapi({
      xml: { name: 'cidr' },
      description: "The IPv4 CIDR that's whitelisted.",
    }),
  })
  .openapi({ description: 'Whitelist rule', required: [] })
  .openapi('InputWhitelistRule')

const ListOfInputWhitelistRuleSchema = z
  .array(InputWhitelistRuleSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputWhitelistRule' })
  .openapi('ListOfInputWhitelistRule')

const InputSecurityGroupSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'Unique ARN of Input Security Group',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The Id of the Input Security Group',
    }),
    Inputs: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'inputs' },
      description: 'The list of inputs currently using this Input Security Group.',
    }),
    State: InputSecurityGroupStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'The current state of the Input Security Group.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    WhitelistRules: ListOfInputWhitelistRuleSchema.exactOptional().openapi({
      xml: { name: 'whitelistRules' },
      description: 'Whitelist rules and their sync status',
    }),
  })
  .openapi({ description: 'An Input Security Group', required: [] })
  .openapi('InputSecurityGroup')

const CreateInputSecurityGroupResponseSchema = z
  .object({
    SecurityGroup: InputSecurityGroupSchema.exactOptional().openapi({
      xml: { name: 'securityGroup' },
    }),
  })
  .openapi({
    description: 'Placeholder documentation for CreateInputSecurityGroupResponse',
    required: [],
  })
  .openapi('CreateInputSecurityGroupResponse')

const InputWhitelistRuleCidrSchema = z
  .object({
    Cidr: StringSchema.exactOptional().openapi({
      xml: { name: 'cidr' },
      description: 'The IPv4 CIDR to whitelist.',
    }),
  })
  .openapi({ description: 'An IPv4 CIDR to whitelist.', required: [] })
  .openapi('InputWhitelistRuleCidr')

const MultiplexMediaConnectOutputDestinationSettingsSchema = z
  .object({
    EntitlementArn: StringMin1Schema.exactOptional().openapi({
      xml: { name: 'entitlementArn' },
      description: 'The MediaConnect entitlement ARN available as a Flow source.',
    }),
  })
  .openapi({ description: 'Multiplex MediaConnect output destination settings.', required: [] })
  .openapi('MultiplexMediaConnectOutputDestinationSettings')

const MultiplexOutputDestinationSchema = z
  .object({
    MediaConnectSettings:
      MultiplexMediaConnectOutputDestinationSettingsSchema.exactOptional().openapi({
        xml: { name: 'mediaConnectSettings' },
        description: 'Multiplex MediaConnect output destination settings.',
      }),
  })
  .openapi({ description: 'Multiplex output destination settings', required: [] })
  .openapi('MultiplexOutputDestination')

const ListOfMultiplexOutputDestinationSchema = z
  .array(MultiplexOutputDestinationSchema)
  .openapi({ description: 'Placeholder documentation for __listOfMultiplexOutputDestination' })
  .openapi('ListOfMultiplexOutputDestination')

const IntegerMin800Max3000Schema = z
  .int()
  .min(800)
  .max(3000)
  .openapi({ description: 'Placeholder documentation for __integerMin800Max3000' })
  .openapi('IntegerMin800Max3000')

const IntegerMin1000000Max100000000Schema = z
  .int()
  .min(1000000)
  .max(100000000)
  .openapi({ description: 'Placeholder documentation for __integerMin1000000Max100000000' })
  .openapi('IntegerMin1000000Max100000000')

const IntegerMin0Max100000000Schema = z
  .int()
  .min(0)
  .max(100000000)
  .openapi({ description: 'Placeholder documentation for __integerMin0Max100000000' })
  .openapi('IntegerMin0Max100000000')

const MultiplexSettingsSchema = z
  .object({
    MaximumVideoBufferDelayMilliseconds: IntegerMin800Max3000Schema.exactOptional().openapi({
      xml: { name: 'maximumVideoBufferDelayMilliseconds' },
      description: 'Maximum video buffer delay in milliseconds.',
    }),
    TransportStreamBitrate: IntegerMin1000000Max100000000Schema.openapi({
      xml: { name: 'transportStreamBitrate' },
      description: 'Transport stream bit rate.',
    }),
    TransportStreamId: IntegerMin0Max65535Schema.openapi({
      xml: { name: 'transportStreamId' },
      description: 'Transport stream ID.',
    }),
    TransportStreamReservedBitrate: IntegerMin0Max100000000Schema.exactOptional().openapi({
      xml: { name: 'transportStreamReservedBitrate' },
      description: 'Transport stream reserved bit rate.',
    }),
  })
  .openapi({
    required: ['TransportStreamBitrate', 'TransportStreamId'],
    description: 'Contains configuration for a Multiplex event',
  })
  .openapi('MultiplexSettings')

const MultiplexStateSchema = z
  .enum([
    'CREATING',
    'CREATE_FAILED',
    'IDLE',
    'STARTING',
    'RUNNING',
    'RECOVERING',
    'STOPPING',
    'DELETING',
    'DELETED',
  ])
  .openapi({ description: 'The current state of the multiplex.' })
  .openapi('MultiplexState')

const MultiplexSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the multiplex.',
    }),
    AvailabilityZones: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZones' },
      description: 'A list of availability zones for the multiplex.',
    }),
    Destinations: ListOfMultiplexOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of the multiplex output destinations.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the multiplex.',
    }),
    MultiplexSettings: MultiplexSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexSettings' },
      description: 'Configuration for a multiplex event.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the multiplex.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    ProgramCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'programCount' },
      description: 'The number of programs in the multiplex.',
    }),
    State: MultiplexStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'The current state of the multiplex.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({ description: 'The multiplex object.', required: [] })
  .openapi('Multiplex')

const CreateMultiplexResponseSchema = z
  .object({
    Multiplex: MultiplexSchema.exactOptional().openapi({
      xml: { name: 'multiplex' },
      description: 'The newly created multiplex.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for CreateMultiplexResponse', required: [] })
  .openapi('CreateMultiplexResponse')

const PreferredChannelPipelineSchema = z
  .enum(['CURRENTLY_ACTIVE', 'PIPELINE_0', 'PIPELINE_1'])
  .openapi({
    description:
      'Indicates which pipeline is preferred by the multiplex for program ingest.\nIf set to \\"PIPELINE_0\\" or \\"PIPELINE_1\\" and an unhealthy ingest causes the multiplex to switch to the non-preferred pipeline,\nit will switch back once that ingest is healthy again. If set to \\"CURRENTLY_ACTIVE\\",\nit will not switch back to the other pipeline based on it recovering to a healthy state,\nit will only switch if the active pipeline becomes unhealthy.\n',
  })
  .openapi('PreferredChannelPipeline')

const MultiplexProgramServiceDescriptorSchema = z
  .object({
    ProviderName: StringMax256Schema.openapi({
      xml: { name: 'providerName' },
      description: 'Name of the provider.',
    }),
    ServiceName: StringMax256Schema.openapi({
      xml: { name: 'serviceName' },
      description: 'Name of the service.',
    }),
  })
  .openapi({
    required: ['ProviderName', 'ServiceName'],
    description: 'Transport stream service descriptor configuration for the Multiplex program.',
  })
  .openapi('MultiplexProgramServiceDescriptor')

const IntegerMin100000Max100000000Schema = z
  .int()
  .min(100000)
  .max(100000000)
  .openapi({ description: 'Placeholder documentation for __integerMin100000Max100000000' })
  .openapi('IntegerMin100000Max100000000')

const IntegerMinNegative5Max5Schema = z
  .int()
  .min(-5)
  .max(5)
  .openapi({ description: 'Placeholder documentation for __integerMinNegative5Max5' })
  .openapi('IntegerMinNegative5Max5')

const MultiplexStatmuxVideoSettingsSchema = z
  .object({
    MaximumBitrate: IntegerMin100000Max100000000Schema.exactOptional().openapi({
      xml: { name: 'maximumBitrate' },
      description: 'Maximum statmux bitrate.',
    }),
    MinimumBitrate: IntegerMin100000Max100000000Schema.exactOptional().openapi({
      xml: { name: 'minimumBitrate' },
      description: 'Minimum statmux bitrate.',
    }),
    Priority: IntegerMinNegative5Max5Schema.exactOptional().openapi({
      xml: { name: 'priority' },
      description:
        'The purpose of the priority is to use a combination of the\\nmultiplex rate control algorithm and the QVBR capability of the\\nencoder to prioritize the video quality of some channels in a\\nmultiplex over others.  Channels that have a higher priority will\\nget higher video quality at the expense of the video quality of\\nother channels in the multiplex with lower priority.',
    }),
  })
  .openapi({ description: 'Statmux rate control settings', required: [] })
  .openapi('MultiplexStatmuxVideoSettings')

const MultiplexVideoSettingsSchema = z
  .object({
    ConstantBitrate: IntegerMin100000Max100000000Schema.exactOptional().openapi({
      xml: { name: 'constantBitrate' },
      description:
        'The constant bitrate configuration for the video encode.\nWhen this field is defined, StatmuxSettings must be undefined.',
    }),
    StatmuxSettings: MultiplexStatmuxVideoSettingsSchema.exactOptional().openapi({
      xml: { name: 'statmuxSettings' },
      description:
        'Statmux rate control settings.\nWhen this field is defined, ConstantBitrate must be undefined.',
    }),
  })
  .openapi({
    description: 'The video configuration for each program in a multiplex.',
    required: [],
  })
  .openapi('MultiplexVideoSettings')

const MultiplexProgramSettingsSchema = z
  .object({
    PreferredChannelPipeline: PreferredChannelPipelineSchema.exactOptional().openapi({
      xml: { name: 'preferredChannelPipeline' },
      description: 'Indicates which pipeline is preferred by the multiplex for program ingest.',
    }),
    ProgramNumber: IntegerMin0Max65535Schema.openapi({
      xml: { name: 'programNumber' },
      description: 'Unique program number.',
    }),
    ServiceDescriptor: MultiplexProgramServiceDescriptorSchema.exactOptional().openapi({
      xml: { name: 'serviceDescriptor' },
      description: 'Transport stream service descriptor configuration for the Multiplex program.',
    }),
    VideoSettings: MultiplexVideoSettingsSchema.exactOptional().openapi({
      xml: { name: 'videoSettings' },
      description: 'Program video settings configuration.',
    }),
  })
  .openapi({
    required: ['ProgramNumber'],
    description: 'Multiplex Program settings configuration.',
  })
  .openapi('MultiplexProgramSettings')

const ListOfIntegerSchema = z
  .array(IntegerSchema)
  .openapi({ description: 'Placeholder documentation for __listOf__integer' })
  .openapi('ListOfInteger')

const MultiplexProgramPacketIdentifiersMapSchema = z
  .object({
    AudioPids: ListOfIntegerSchema.exactOptional().openapi({ xml: { name: 'audioPids' } }),
    DvbSubPids: ListOfIntegerSchema.exactOptional().openapi({ xml: { name: 'dvbSubPids' } }),
    DvbTeletextPid: IntegerSchema.exactOptional().openapi({ xml: { name: 'dvbTeletextPid' } }),
    EtvPlatformPid: IntegerSchema.exactOptional().openapi({ xml: { name: 'etvPlatformPid' } }),
    EtvSignalPid: IntegerSchema.exactOptional().openapi({ xml: { name: 'etvSignalPid' } }),
    KlvDataPids: ListOfIntegerSchema.exactOptional().openapi({ xml: { name: 'klvDataPids' } }),
    PcrPid: IntegerSchema.exactOptional().openapi({ xml: { name: 'pcrPid' } }),
    PmtPid: IntegerSchema.exactOptional().openapi({ xml: { name: 'pmtPid' } }),
    PrivateMetadataPid: IntegerSchema.exactOptional().openapi({
      xml: { name: 'privateMetadataPid' },
    }),
    Scte27Pids: ListOfIntegerSchema.exactOptional().openapi({ xml: { name: 'scte27Pids' } }),
    Scte35Pid: IntegerSchema.exactOptional().openapi({ xml: { name: 'scte35Pid' } }),
    TimedMetadataPid: IntegerSchema.exactOptional().openapi({ xml: { name: 'timedMetadataPid' } }),
    VideoPid: IntegerSchema.exactOptional().openapi({ xml: { name: 'videoPid' } }),
  })
  .openapi({ description: 'Packet identifiers map for a given Multiplex program.', required: [] })
  .openapi('MultiplexProgramPacketIdentifiersMap')

const MultiplexProgramPipelineDetailSchema = z
  .object({
    ActiveChannelPipeline: StringSchema.exactOptional().openapi({
      xml: { name: 'activeChannelPipeline' },
      description:
        'Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.',
    }),
    PipelineId: StringSchema.exactOptional().openapi({
      xml: { name: 'pipelineId' },
      description: 'Identifies a specific pipeline in the multiplex.',
    }),
  })
  .openapi({
    description: 'The current source for one of the pipelines in the multiplex.',
    required: [],
  })
  .openapi('MultiplexProgramPipelineDetail')

const ListOfMultiplexProgramPipelineDetailSchema = z
  .array(MultiplexProgramPipelineDetailSchema)
  .openapi({ description: 'Placeholder documentation for __listOfMultiplexProgramPipelineDetail' })
  .openapi('ListOfMultiplexProgramPipelineDetail')

const MultiplexProgramSchema = z
  .object({
    ChannelId: StringSchema.exactOptional().openapi({
      xml: { name: 'channelId' },
      description: 'The MediaLive channel associated with the program.',
    }),
    MultiplexProgramSettings: MultiplexProgramSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexProgramSettings' },
      description: 'The settings for this multiplex program.',
    }),
    PacketIdentifiersMap: MultiplexProgramPacketIdentifiersMapSchema.exactOptional().openapi({
      xml: { name: 'packetIdentifiersMap' },
      description: 'The packet identifier map for this multiplex program.',
    }),
    PipelineDetails: ListOfMultiplexProgramPipelineDetailSchema.exactOptional().openapi({
      xml: { name: 'pipelineDetails' },
      description:
        'Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.',
    }),
    ProgramName: StringSchema.exactOptional().openapi({
      xml: { name: 'programName' },
      description: 'The name of the multiplex program.',
    }),
  })
  .openapi({ description: 'The multiplex program object.', required: [] })
  .openapi('MultiplexProgram')

const CreateMultiplexProgramResponseSchema = z
  .object({
    MultiplexProgram: MultiplexProgramSchema.exactOptional().openapi({
      xml: { name: 'multiplexProgram' },
      description: 'The newly created multiplex program.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for CreateMultiplexProgramResponse',
    required: [],
  })
  .openapi('CreateMultiplexProgramResponse')

const CreatePartnerInputResponseSchema = z
  .object({ Input: InputSchema.exactOptional().openapi({ xml: { name: 'input' } }) })
  .openapi({
    description: 'Placeholder documentation for CreatePartnerInputResponse',
    required: [],
  })
  .openapi('CreatePartnerInputResponse')

const DeleteChannelResponseSchema: z.ZodType<DeleteChannelResponseType> = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the channel.',
    }),
    CdiInputSpecification: CdiInputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'cdiInputSpecification' },
      description: 'Specification of CDI inputs for this channel',
    }),
    ChannelClass: ChannelClassSchema.exactOptional().openapi({
      xml: { name: 'channelClass' },
      description:
        'The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description:
        'A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n',
    }),
    EgressEndpoints: ListOfChannelEgressEndpointSchema.exactOptional().openapi({
      xml: { name: 'egressEndpoints' },
      description: 'The endpoints where outgoing connections initiate from',
    }),
    EncoderSettings: EncoderSettingsSchema.exactOptional().openapi({
      xml: { name: 'encoderSettings' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the channel.',
    }),
    InputAttachments: ListOfInputAttachmentSchema.exactOptional().openapi({
      xml: { name: 'inputAttachments' },
      description: 'List of input attachments for channel.',
    }),
    InputSpecification: InputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'inputSpecification' },
      description: 'Specification of network and file inputs for this channel',
    }),
    LogLevel: LogLevelSchema.exactOptional().openapi({
      xml: { name: 'logLevel' },
      description: 'The log level being written to CloudWatch Logs.',
    }),
    Maintenance: MaintenanceStatusSchema.exactOptional().openapi({
      xml: { name: 'maintenance' },
      description: 'Maintenance settings for this channel.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the channel. (user-mutable)',
    }),
    PipelineDetails: ListOfPipelineDetailSchema.exactOptional().openapi({
      xml: { name: 'pipelineDetails' },
      description: 'Runtime details for the pipelines of a running channel.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description: 'The Amazon Resource Name (ARN) of the role assumed when running the Channel.',
    }),
    State: ChannelStateSchema.exactOptional().openapi({ xml: { name: 'state' } }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Vpc: VpcOutputSettingsDescriptionSchema.exactOptional().openapi({
      xml: { name: 'vpc' },
      description: 'Settings for VPC output',
    }),
  })
  .openapi({ description: 'Placeholder documentation for DeleteChannelResponse', required: [] })
  .openapi('DeleteChannelResponse')

const DeleteInputResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for DeleteInputResponse' })
  .openapi('DeleteInputResponse')

const DeleteInputSecurityGroupResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for DeleteInputSecurityGroupResponse' })
  .openapi('DeleteInputSecurityGroupResponse')

const DeleteMultiplexResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the multiplex.',
    }),
    AvailabilityZones: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZones' },
      description: 'A list of availability zones for the multiplex.',
    }),
    Destinations: ListOfMultiplexOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of the multiplex output destinations.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the multiplex.',
    }),
    MultiplexSettings: MultiplexSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexSettings' },
      description: 'Configuration for a multiplex event.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the multiplex.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    ProgramCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'programCount' },
      description: 'The number of programs in the multiplex.',
    }),
    State: MultiplexStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'The current state of the multiplex.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for DeleteMultiplexResponse', required: [] })
  .openapi('DeleteMultiplexResponse')

const DeleteMultiplexProgramResponseSchema = z
  .object({
    ChannelId: StringSchema.exactOptional().openapi({
      xml: { name: 'channelId' },
      description: 'The MediaLive channel associated with the program.',
    }),
    MultiplexProgramSettings: MultiplexProgramSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexProgramSettings' },
      description: 'The settings for this multiplex program.',
    }),
    PacketIdentifiersMap: MultiplexProgramPacketIdentifiersMapSchema.exactOptional().openapi({
      xml: { name: 'packetIdentifiersMap' },
      description: 'The packet identifier map for this multiplex program.',
    }),
    PipelineDetails: ListOfMultiplexProgramPipelineDetailSchema.exactOptional().openapi({
      xml: { name: 'pipelineDetails' },
      description:
        'Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.',
    }),
    ProgramName: StringSchema.exactOptional().openapi({
      xml: { name: 'programName' },
      description: 'The name of the multiplex program.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for DeleteMultiplexProgramResponse',
    required: [],
  })
  .openapi('DeleteMultiplexProgramResponse')

const OfferingDurationUnitsSchema = z
  .literal('MONTHS')
  .openapi({ description: "Units for duration, e.g. 'MONTHS'" })
  .openapi('OfferingDurationUnits')

const OfferingTypeSchema = z
  .literal('NO_UPFRONT')
  .openapi({ description: "Offering type, e.g. 'NO_UPFRONT'" })
  .openapi('OfferingType')

const ReservationAutomaticRenewalSchema = z
  .enum(['DISABLED', 'ENABLED', 'UNAVAILABLE'])
  .openapi({ description: 'Automatic Renewal Status for Reservation' })
  .openapi('ReservationAutomaticRenewal')

const RenewalSettingsSchema = z
  .object({
    AutomaticRenewal: ReservationAutomaticRenewalSchema.exactOptional().openapi({
      xml: { name: 'automaticRenewal' },
      description: 'Automatic renewal status for the reservation',
    }),
    RenewalCount: IntegerMin1Schema.exactOptional().openapi({
      xml: { name: 'renewalCount' },
      description: 'Count for the reservation renewal',
    }),
  })
  .openapi({ description: 'The Renewal settings for Reservations', required: [] })
  .openapi('RenewalSettings')

const ReservationCodecSchema = z
  .enum(['MPEG2', 'AVC', 'HEVC', 'AUDIO', 'LINK'])
  .openapi({ description: "Codec, 'MPEG2', 'AVC', 'HEVC', or 'AUDIO'" })
  .openapi('ReservationCodec')

const ReservationMaximumBitrateSchema = z
  .enum(['MAX_10_MBPS', 'MAX_20_MBPS', 'MAX_50_MBPS'])
  .openapi({ description: 'Maximum bitrate in megabits per second' })
  .openapi('ReservationMaximumBitrate')

const ReservationMaximumFramerateSchema = z
  .enum(['MAX_30_FPS', 'MAX_60_FPS'])
  .openapi({ description: 'Maximum framerate in frames per second (Outputs only)' })
  .openapi('ReservationMaximumFramerate')

const ReservationResolutionSchema = z
  .enum(['SD', 'HD', 'FHD', 'UHD'])
  .openapi({
    description:
      'Resolution based on lines of vertical resolution; SD is less than 720 lines, HD is 720 to 1080 lines, FHD is 1080 lines, UHD is greater than 1080 lines\n',
  })
  .openapi('ReservationResolution')

const ReservationResourceTypeSchema = z
  .enum(['INPUT', 'OUTPUT', 'MULTIPLEX', 'CHANNEL'])
  .openapi({ description: "Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'" })
  .openapi('ReservationResourceType')

const ReservationSpecialFeatureSchema = z
  .enum(['ADVANCED_AUDIO', 'AUDIO_NORMALIZATION', 'MGHD', 'MGUHD'])
  .openapi({
    description: "Special features, 'ADVANCED_AUDIO' 'AUDIO_NORMALIZATION' 'MGHD' or 'MGUHD'",
  })
  .openapi('ReservationSpecialFeature')

const ReservationVideoQualitySchema = z
  .enum(['STANDARD', 'ENHANCED', 'PREMIUM'])
  .openapi({ description: "Video quality, e.g. 'STANDARD' (Outputs only)" })
  .openapi('ReservationVideoQuality')

const ReservationResourceSpecificationSchema = z
  .object({
    ChannelClass: ChannelClassSchema.exactOptional().openapi({
      xml: { name: 'channelClass' },
      description: "Channel class, e.g. 'STANDARD'",
    }),
    Codec: ReservationCodecSchema.exactOptional().openapi({
      xml: { name: 'codec' },
      description: "Codec, e.g. 'AVC'",
    }),
    MaximumBitrate: ReservationMaximumBitrateSchema.exactOptional().openapi({
      xml: { name: 'maximumBitrate' },
      description: "Maximum bitrate, e.g. 'MAX_20_MBPS'",
    }),
    MaximumFramerate: ReservationMaximumFramerateSchema.exactOptional().openapi({
      xml: { name: 'maximumFramerate' },
      description: "Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)",
    }),
    Resolution: ReservationResolutionSchema.exactOptional().openapi({
      xml: { name: 'resolution' },
      description: "Resolution, e.g. 'HD'",
    }),
    ResourceType: ReservationResourceTypeSchema.exactOptional().openapi({
      xml: { name: 'resourceType' },
      description: "Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'",
    }),
    SpecialFeature: ReservationSpecialFeatureSchema.exactOptional().openapi({
      xml: { name: 'specialFeature' },
      description: "Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)",
    }),
    VideoQuality: ReservationVideoQualitySchema.exactOptional().openapi({
      xml: { name: 'videoQuality' },
      description: "Video quality, e.g. 'STANDARD' (Outputs only)",
    }),
  })
  .openapi({
    description: 'Resource configuration (codec, resolution, bitrate, ...)',
    required: [],
  })
  .openapi('ReservationResourceSpecification')

const ReservationStateSchema = z
  .enum(['ACTIVE', 'EXPIRED', 'CANCELED', 'DELETED'])
  .openapi({ description: 'Current reservation state' })
  .openapi('ReservationState')

const DeleteReservationResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description:
        "Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'",
    }),
    Count: IntegerSchema.exactOptional().openapi({
      xml: { name: 'count' },
      description: 'Number of reserved resources',
    }),
    CurrencyCode: StringSchema.exactOptional().openapi({
      xml: { name: 'currencyCode' },
      description: "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'",
    }),
    Duration: IntegerSchema.exactOptional().openapi({
      xml: { name: 'duration' },
      description: "Lease duration, e.g. '12'",
    }),
    DurationUnits: OfferingDurationUnitsSchema.exactOptional().openapi({
      xml: { name: 'durationUnits' },
      description: "Units for duration, e.g. 'MONTHS'",
    }),
    End: StringSchema.exactOptional().openapi({
      xml: { name: 'end' },
      description:
        "Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'",
    }),
    FixedPrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'fixedPrice' },
      description:
        "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering",
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'User specified reservation name',
    }),
    OfferingDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringDescription' },
      description:
        "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'",
    }),
    OfferingId: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringId' },
      description: "Unique offering ID, e.g. '87654321'",
    }),
    OfferingType: OfferingTypeSchema.exactOptional().openapi({
      xml: { name: 'offeringType' },
      description: "Offering type, e.g. 'NO_UPFRONT'",
    }),
    Region: StringSchema.exactOptional().openapi({
      xml: { name: 'region' },
      description: "AWS region, e.g. 'us-west-2'",
    }),
    RenewalSettings: RenewalSettingsSchema.exactOptional().openapi({
      xml: { name: 'renewalSettings' },
      description: 'Renewal settings for the reservation',
    }),
    ReservationId: StringSchema.exactOptional().openapi({
      xml: { name: 'reservationId' },
      description: "Unique reservation ID, e.g. '1234567'",
    }),
    ResourceSpecification: ReservationResourceSpecificationSchema.exactOptional().openapi({
      xml: { name: 'resourceSpecification' },
      description: 'Resource configuration details',
    }),
    Start: StringSchema.exactOptional().openapi({
      xml: { name: 'start' },
      description:
        "Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'",
    }),
    State: ReservationStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: "Current state of reservation, e.g. 'ACTIVE'",
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs',
    }),
    UsagePrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'usagePrice' },
      description: "Recurring usage charge for each reserved resource, e.g. '157.0'",
    }),
  })
  .openapi({ description: 'Placeholder documentation for DeleteReservationResponse', required: [] })
  .openapi('DeleteReservationResponse')

const DeleteScheduleResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for DeleteScheduleResponse' })
  .openapi('DeleteScheduleResponse')

const DescribeChannelResponseSchema: z.ZodType<DescribeChannelResponseType> = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the channel.',
    }),
    CdiInputSpecification: CdiInputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'cdiInputSpecification' },
      description: 'Specification of CDI inputs for this channel',
    }),
    ChannelClass: ChannelClassSchema.exactOptional().openapi({
      xml: { name: 'channelClass' },
      description:
        'The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description:
        'A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n',
    }),
    EgressEndpoints: ListOfChannelEgressEndpointSchema.exactOptional().openapi({
      xml: { name: 'egressEndpoints' },
      description: 'The endpoints where outgoing connections initiate from',
    }),
    EncoderSettings: EncoderSettingsSchema.exactOptional().openapi({
      xml: { name: 'encoderSettings' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the channel.',
    }),
    InputAttachments: ListOfInputAttachmentSchema.exactOptional().openapi({
      xml: { name: 'inputAttachments' },
      description: 'List of input attachments for channel.',
    }),
    InputSpecification: InputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'inputSpecification' },
      description: 'Specification of network and file inputs for this channel',
    }),
    LogLevel: LogLevelSchema.exactOptional().openapi({
      xml: { name: 'logLevel' },
      description: 'The log level being written to CloudWatch Logs.',
    }),
    Maintenance: MaintenanceStatusSchema.exactOptional().openapi({
      xml: { name: 'maintenance' },
      description: 'Maintenance settings for this channel.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the channel. (user-mutable)',
    }),
    PipelineDetails: ListOfPipelineDetailSchema.exactOptional().openapi({
      xml: { name: 'pipelineDetails' },
      description: 'Runtime details for the pipelines of a running channel.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description: 'The Amazon Resource Name (ARN) of the role assumed when running the Channel.',
    }),
    State: ChannelStateSchema.exactOptional().openapi({ xml: { name: 'state' } }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Vpc: VpcOutputSettingsDescriptionSchema.exactOptional().openapi({
      xml: { name: 'vpc' },
      description: 'Settings for VPC output',
    }),
  })
  .openapi({ description: 'Placeholder documentation for DescribeChannelResponse', required: [] })
  .openapi('DescribeChannelResponse')

const DescribeInputResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The Unique ARN of the input (generated, immutable).',
    }),
    AttachedChannels: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'attachedChannels' },
      description:
        'A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).',
    }),
    Destinations: ListOfInputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of the destinations of the input (PUSH-type).',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The generated ID of the input (unique for user account, immutable).',
    }),
    InputClass: InputClassSchema.exactOptional().openapi({
      xml: { name: 'inputClass' },
      description:
        'STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.\nSINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also  SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.\n',
    }),
    InputDevices: ListOfInputDeviceSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputDevices' },
      description: 'Settings for the input devices.',
    }),
    InputPartnerIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'inputPartnerIds' },
      description: 'A list of IDs for all Inputs which are partners of this one.',
    }),
    InputSourceType: InputSourceTypeSchema.exactOptional().openapi({
      xml: { name: 'inputSourceType' },
      description:
        "Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes\nduring input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.\n",
    }),
    MediaConnectFlows: ListOfMediaConnectFlowSchema.exactOptional().openapi({
      xml: { name: 'mediaConnectFlows' },
      description: 'A list of MediaConnect Flows for this input.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The user-assigned name (This is a mutable value).',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description:
        'The Amazon Resource Name (ARN) of the role this input assumes during and after creation.',
    }),
    SecurityGroups: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'securityGroups' },
      description: 'A list of IDs for all the Input Security Groups attached to the input.',
    }),
    Sources: ListOfInputSourceSchema.exactOptional().openapi({
      xml: { name: 'sources' },
      description: 'A list of the sources of the input (PULL-type).',
    }),
    State: InputStateSchema.exactOptional().openapi({ xml: { name: 'state' } }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Type: InputTypeSchema.exactOptional().openapi({ xml: { name: 'type' } }),
  })
  .openapi({ description: 'Placeholder documentation for DescribeInputResponse', required: [] })
  .openapi('DescribeInputResponse')

const InputDeviceConnectionStateSchema = z
  .enum(['DISCONNECTED', 'CONNECTED'])
  .openapi({ description: 'The state of the connection between the input device and AWS.' })
  .openapi('InputDeviceConnectionState')

const DeviceSettingsSyncStateSchema = z
  .enum(['SYNCED', 'SYNCING'])
  .openapi({
    description:
      'The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.',
  })
  .openapi('DeviceSettingsSyncState')

const DeviceUpdateStatusSchema = z
  .enum(['UP_TO_DATE', 'NOT_UP_TO_DATE', 'UPDATING'])
  .openapi({ description: 'The status of software on the input device.' })
  .openapi('DeviceUpdateStatus')

const InputDeviceActiveInputSchema = z
  .enum(['HDMI', 'SDI'])
  .openapi({ description: 'The source at the input device that is currently active.' })
  .openapi('InputDeviceActiveInput')

const InputDeviceConfiguredInputSchema = z
  .enum(['AUTO', 'HDMI', 'SDI'])
  .openapi({ description: 'The source to activate (use) from the input device.' })
  .openapi('InputDeviceConfiguredInput')

const InputDeviceStateSchema = z
  .enum(['IDLE', 'STREAMING'])
  .openapi({ description: 'The state of the input device.' })
  .openapi('InputDeviceState')

const InputDeviceScanTypeSchema = z
  .enum(['INTERLACED', 'PROGRESSIVE'])
  .openapi({ description: 'The scan type of the video source.' })
  .openapi('InputDeviceScanType')

const InputDeviceHdSettingsSchema = z
  .object({
    ActiveInput: InputDeviceActiveInputSchema.exactOptional().openapi({
      xml: { name: 'activeInput' },
      description:
        'If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).',
    }),
    ConfiguredInput: InputDeviceConfiguredInputSchema.exactOptional().openapi({
      xml: { name: 'configuredInput' },
      description:
        'The source at the input device that is currently active. You can specify this source.',
    }),
    DeviceState: InputDeviceStateSchema.exactOptional().openapi({
      xml: { name: 'deviceState' },
      description: 'The state of the input device.',
    }),
    Framerate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'framerate' },
      description: 'The frame rate of the video source.',
    }),
    Height: IntegerSchema.exactOptional().openapi({
      xml: { name: 'height' },
      description: 'The height of the video source, in pixels.',
    }),
    MaxBitrate: IntegerSchema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.',
    }),
    ScanType: InputDeviceScanTypeSchema.exactOptional().openapi({
      xml: { name: 'scanType' },
      description: 'The scan type of the video source.',
    }),
    Width: IntegerSchema.exactOptional().openapi({
      xml: { name: 'width' },
      description: 'The width of the video source, in pixels.',
    }),
    LatencyMs: IntegerSchema.exactOptional().openapi({
      xml: { name: 'latencyMs' },
      description:
        "The Link device's buffer size (latency) in milliseconds (ms). You can specify this value.",
    }),
  })
  .openapi({
    description:
      'Settings that describe the active source from the input device, and the video characteristics of that source.',
    required: [],
  })
  .openapi('InputDeviceHdSettings')

const InputDeviceIpSchemeSchema = z
  .enum(['STATIC', 'DHCP'])
  .openapi({
    description:
      'Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.',
  })
  .openapi('InputDeviceIpScheme')

const InputDeviceNetworkSettingsSchema = z
  .object({
    DnsAddresses: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'dnsAddresses' },
      description: 'The DNS addresses of the input device.',
    }),
    Gateway: StringSchema.exactOptional().openapi({
      xml: { name: 'gateway' },
      description: 'The network gateway IP address.',
    }),
    IpAddress: StringSchema.exactOptional().openapi({
      xml: { name: 'ipAddress' },
      description: 'The IP address of the input device.',
    }),
    IpScheme: InputDeviceIpSchemeSchema.exactOptional().openapi({
      xml: { name: 'ipScheme' },
      description:
        'Specifies whether the input device has been configured (outside of MediaLive) to use a dynamic IP address assignment (DHCP) or a static IP address.',
    }),
    SubnetMask: StringSchema.exactOptional().openapi({
      xml: { name: 'subnetMask' },
      description: 'The subnet mask of the input device.',
    }),
  })
  .openapi({ description: 'The network settings for the input device.', required: [] })
  .openapi('InputDeviceNetworkSettings')

const InputDeviceTypeSchema = z
  .enum(['HD', 'UHD'])
  .openapi({
    description:
      'The type of the input device. For an AWS Elemental Link device that outputs resolutions up to 1080, choose "HD".',
  })
  .openapi('InputDeviceType')

const InputDeviceUhdSettingsSchema = z
  .object({
    ActiveInput: InputDeviceActiveInputSchema.exactOptional().openapi({
      xml: { name: 'activeInput' },
      description:
        'If you specified Auto as the configured input, specifies which of the sources is currently active (SDI or HDMI).',
    }),
    ConfiguredInput: InputDeviceConfiguredInputSchema.exactOptional().openapi({
      xml: { name: 'configuredInput' },
      description:
        'The source at the input device that is currently active. You can specify this source.',
    }),
    DeviceState: InputDeviceStateSchema.exactOptional().openapi({
      xml: { name: 'deviceState' },
      description: 'The state of the input device.',
    }),
    Framerate: DoubleSchema.exactOptional().openapi({
      xml: { name: 'framerate' },
      description: 'The frame rate of the video source.',
    }),
    Height: IntegerSchema.exactOptional().openapi({
      xml: { name: 'height' },
      description: 'The height of the video source, in pixels.',
    }),
    MaxBitrate: IntegerSchema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'The current maximum bitrate for ingesting this source, in bits per second. You can specify this maximum.',
    }),
    ScanType: InputDeviceScanTypeSchema.exactOptional().openapi({
      xml: { name: 'scanType' },
      description: 'The scan type of the video source.',
    }),
    Width: IntegerSchema.exactOptional().openapi({
      xml: { name: 'width' },
      description: 'The width of the video source, in pixels.',
    }),
    LatencyMs: IntegerSchema.exactOptional().openapi({
      xml: { name: 'latencyMs' },
      description:
        "The Link device's buffer size (latency) in milliseconds (ms). You can specify this value.",
    }),
  })
  .openapi({
    description:
      'Settings that describe the active source from the input device, and the video characteristics of that source.',
    required: [],
  })
  .openapi('InputDeviceUhdSettings')

const DescribeInputDeviceResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique ARN of the input device.',
    }),
    ConnectionState: InputDeviceConnectionStateSchema.exactOptional().openapi({
      xml: { name: 'connectionState' },
      description: 'The state of the connection between the input device and AWS.',
    }),
    DeviceSettingsSyncState: DeviceSettingsSyncStateSchema.exactOptional().openapi({
      xml: { name: 'deviceSettingsSyncState' },
      description:
        'The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.',
    }),
    DeviceUpdateStatus: DeviceUpdateStatusSchema.exactOptional().openapi({
      xml: { name: 'deviceUpdateStatus' },
      description: 'The status of software on the input device.',
    }),
    HdDeviceSettings: InputDeviceHdSettingsSchema.exactOptional().openapi({
      xml: { name: 'hdDeviceSettings' },
      description: 'Settings that describe an input device that is type HD.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique ID of the input device.',
    }),
    MacAddress: StringSchema.exactOptional().openapi({
      xml: { name: 'macAddress' },
      description: 'The network MAC address of the input device.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'A name that you specify for the input device.',
    }),
    NetworkSettings: InputDeviceNetworkSettingsSchema.exactOptional().openapi({
      xml: { name: 'networkSettings' },
      description: 'The network settings for the input device.',
    }),
    SerialNumber: StringSchema.exactOptional().openapi({
      xml: { name: 'serialNumber' },
      description: 'The unique serial number of the input device.',
    }),
    Type: InputDeviceTypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description: 'The type of the input device.',
    }),
    UhdDeviceSettings: InputDeviceUhdSettingsSchema.exactOptional().openapi({
      xml: { name: 'uhdDeviceSettings' },
      description: 'Settings that describe an input device that is type UHD.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for DescribeInputDeviceResponse',
    required: [],
  })
  .openapi('DescribeInputDeviceResponse')

const InputDeviceThumbnailSchema = z
  .string()
  .openapi({
    description:
      'The binary data for the thumbnail that the Link device has most recently sent to MediaLive.',
  })
  .openapi('InputDeviceThumbnail')

const DescribeInputDeviceThumbnailResponseSchema = z
  .object({
    Body: InputDeviceThumbnailSchema.exactOptional().openapi({
      xml: { name: 'body' },
      description:
        'The binary data for the thumbnail that the Link device has most recently sent to MediaLive.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for DescribeInputDeviceThumbnailResponse',
    required: [],
  })
  .openapi('DescribeInputDeviceThumbnailResponse')

const DescribeInputSecurityGroupResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'Unique ARN of Input Security Group',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The Id of the Input Security Group',
    }),
    Inputs: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'inputs' },
      description: 'The list of inputs currently using this Input Security Group.',
    }),
    State: InputSecurityGroupStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'The current state of the Input Security Group.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    WhitelistRules: ListOfInputWhitelistRuleSchema.exactOptional().openapi({
      xml: { name: 'whitelistRules' },
      description: 'Whitelist rules and their sync status',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for DescribeInputSecurityGroupResponse',
    required: [],
  })
  .openapi('DescribeInputSecurityGroupResponse')

const DescribeMultiplexResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the multiplex.',
    }),
    AvailabilityZones: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZones' },
      description: 'A list of availability zones for the multiplex.',
    }),
    Destinations: ListOfMultiplexOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of the multiplex output destinations.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the multiplex.',
    }),
    MultiplexSettings: MultiplexSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexSettings' },
      description: 'Configuration for a multiplex event.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the multiplex.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    ProgramCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'programCount' },
      description: 'The number of programs in the multiplex.',
    }),
    State: MultiplexStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'The current state of the multiplex.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for DescribeMultiplexResponse', required: [] })
  .openapi('DescribeMultiplexResponse')

const DescribeMultiplexProgramResponseSchema = z
  .object({
    ChannelId: StringSchema.exactOptional().openapi({
      xml: { name: 'channelId' },
      description: 'The MediaLive channel associated with the program.',
    }),
    MultiplexProgramSettings: MultiplexProgramSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexProgramSettings' },
      description: 'The settings for this multiplex program.',
    }),
    PacketIdentifiersMap: MultiplexProgramPacketIdentifiersMapSchema.exactOptional().openapi({
      xml: { name: 'packetIdentifiersMap' },
      description: 'The packet identifier map for this multiplex program.',
    }),
    PipelineDetails: ListOfMultiplexProgramPipelineDetailSchema.exactOptional().openapi({
      xml: { name: 'pipelineDetails' },
      description:
        'Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.',
    }),
    ProgramName: StringSchema.exactOptional().openapi({
      xml: { name: 'programName' },
      description: 'The name of the multiplex program.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for DescribeMultiplexProgramResponse',
    required: [],
  })
  .openapi('DescribeMultiplexProgramResponse')

const DescribeOfferingResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description:
        "Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'",
    }),
    CurrencyCode: StringSchema.exactOptional().openapi({
      xml: { name: 'currencyCode' },
      description: "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'",
    }),
    Duration: IntegerSchema.exactOptional().openapi({
      xml: { name: 'duration' },
      description: "Lease duration, e.g. '12'",
    }),
    DurationUnits: OfferingDurationUnitsSchema.exactOptional().openapi({
      xml: { name: 'durationUnits' },
      description: "Units for duration, e.g. 'MONTHS'",
    }),
    FixedPrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'fixedPrice' },
      description:
        "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering",
    }),
    OfferingDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringDescription' },
      description:
        "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'",
    }),
    OfferingId: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringId' },
      description: "Unique offering ID, e.g. '87654321'",
    }),
    OfferingType: OfferingTypeSchema.exactOptional().openapi({
      xml: { name: 'offeringType' },
      description: "Offering type, e.g. 'NO_UPFRONT'",
    }),
    Region: StringSchema.exactOptional().openapi({
      xml: { name: 'region' },
      description: "AWS region, e.g. 'us-west-2'",
    }),
    ResourceSpecification: ReservationResourceSpecificationSchema.exactOptional().openapi({
      xml: { name: 'resourceSpecification' },
      description: 'Resource configuration details',
    }),
    UsagePrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'usagePrice' },
      description: "Recurring usage charge for each reserved resource, e.g. '157.0'",
    }),
  })
  .openapi({ description: 'Placeholder documentation for DescribeOfferingResponse', required: [] })
  .openapi('DescribeOfferingResponse')

const DescribeReservationResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description:
        "Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'",
    }),
    Count: IntegerSchema.exactOptional().openapi({
      xml: { name: 'count' },
      description: 'Number of reserved resources',
    }),
    CurrencyCode: StringSchema.exactOptional().openapi({
      xml: { name: 'currencyCode' },
      description: "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'",
    }),
    Duration: IntegerSchema.exactOptional().openapi({
      xml: { name: 'duration' },
      description: "Lease duration, e.g. '12'",
    }),
    DurationUnits: OfferingDurationUnitsSchema.exactOptional().openapi({
      xml: { name: 'durationUnits' },
      description: "Units for duration, e.g. 'MONTHS'",
    }),
    End: StringSchema.exactOptional().openapi({
      xml: { name: 'end' },
      description:
        "Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'",
    }),
    FixedPrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'fixedPrice' },
      description:
        "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering",
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'User specified reservation name',
    }),
    OfferingDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringDescription' },
      description:
        "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'",
    }),
    OfferingId: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringId' },
      description: "Unique offering ID, e.g. '87654321'",
    }),
    OfferingType: OfferingTypeSchema.exactOptional().openapi({
      xml: { name: 'offeringType' },
      description: "Offering type, e.g. 'NO_UPFRONT'",
    }),
    Region: StringSchema.exactOptional().openapi({
      xml: { name: 'region' },
      description: "AWS region, e.g. 'us-west-2'",
    }),
    RenewalSettings: RenewalSettingsSchema.exactOptional().openapi({
      xml: { name: 'renewalSettings' },
      description: 'Renewal settings for the reservation',
    }),
    ReservationId: StringSchema.exactOptional().openapi({
      xml: { name: 'reservationId' },
      description: "Unique reservation ID, e.g. '1234567'",
    }),
    ResourceSpecification: ReservationResourceSpecificationSchema.exactOptional().openapi({
      xml: { name: 'resourceSpecification' },
      description: 'Resource configuration details',
    }),
    Start: StringSchema.exactOptional().openapi({
      xml: { name: 'start' },
      description:
        "Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'",
    }),
    State: ReservationStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: "Current state of reservation, e.g. 'ACTIVE'",
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs',
    }),
    UsagePrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'usagePrice' },
      description: "Recurring usage charge for each reserved resource, e.g. '157.0'",
    }),
  })
  .openapi({
    description: 'Placeholder documentation for DescribeReservationResponse',
    required: [],
  })
  .openapi('DescribeReservationResponse')

const DescribeScheduleResponseSchema: z.ZodType<DescribeScheduleResponseType> = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'The next token; for use in pagination.',
    }),
    ScheduleActions: ListOfScheduleActionSchema.exactOptional().openapi({
      xml: { name: 'scheduleActions' },
      description: 'The list of actions in the schedule.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for DescribeScheduleResponse', required: [] })
  .openapi('DescribeScheduleResponse')

const ListChannelsResponseSchema: z.ZodType<ListChannelsResponseType> = z
  .object({
    Channels: ListOfChannelSummarySchema.exactOptional().openapi({ xml: { name: 'channels' } }),
    NextToken: StringSchema.exactOptional().openapi({ xml: { name: 'nextToken' } }),
  })
  .openapi({ description: 'Placeholder documentation for ListChannelsResponse', required: [] })
  .openapi('ListChannelsResponse')

const InputDeviceTransferTypeSchema = z
  .enum(['OUTGOING', 'INCOMING'])
  .openapi({
    description:
      'The type of device transfer. INCOMING for an input device that is being transferred to you, OUTGOING for an input device that you are transferring to another AWS account.',
  })
  .openapi('InputDeviceTransferType')

const TransferringInputDeviceSummarySchema = z
  .object({
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique ID of the input device.',
    }),
    Message: StringSchema.exactOptional().openapi({
      xml: { name: 'message' },
      description: 'The optional message that the sender has attached to the transfer.',
    }),
    TargetCustomerId: StringSchema.exactOptional().openapi({
      xml: { name: 'targetCustomerId' },
      description: 'The AWS account ID for the recipient of the input device transfer.',
    }),
    TransferType: InputDeviceTransferTypeSchema.exactOptional().openapi({
      xml: { name: 'transferType' },
      description: 'The type (direction) of the input device transfer.',
    }),
  })
  .openapi({
    description: 'Details about the input device that is being transferred.',
    required: [],
  })
  .openapi('TransferringInputDeviceSummary')

const ListOfTransferringInputDeviceSummarySchema = z
  .array(TransferringInputDeviceSummarySchema)
  .openapi({ description: 'Placeholder documentation for __listOfTransferringInputDeviceSummary' })
  .openapi('ListOfTransferringInputDeviceSummary')

const ListInputDeviceTransfersResponseSchema = z
  .object({
    InputDeviceTransfers: ListOfTransferringInputDeviceSummarySchema.exactOptional().openapi({
      xml: { name: 'inputDeviceTransfers' },
      description: 'The list of devices that you are transferring or are being transferred to you.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'A token to get additional list results.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for ListInputDeviceTransfersResponse',
    required: [],
  })
  .openapi('ListInputDeviceTransfersResponse')

const InputDeviceSummarySchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique ARN of the input device.',
    }),
    ConnectionState: InputDeviceConnectionStateSchema.exactOptional().openapi({
      xml: { name: 'connectionState' },
      description: 'The state of the connection between the input device and AWS.',
    }),
    DeviceSettingsSyncState: DeviceSettingsSyncStateSchema.exactOptional().openapi({
      xml: { name: 'deviceSettingsSyncState' },
      description:
        'The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.',
    }),
    DeviceUpdateStatus: DeviceUpdateStatusSchema.exactOptional().openapi({
      xml: { name: 'deviceUpdateStatus' },
      description: 'The status of software on the input device.',
    }),
    HdDeviceSettings: InputDeviceHdSettingsSchema.exactOptional().openapi({
      xml: { name: 'hdDeviceSettings' },
      description: 'Settings that describe an input device that is type HD.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique ID of the input device.',
    }),
    MacAddress: StringSchema.exactOptional().openapi({
      xml: { name: 'macAddress' },
      description: 'The network MAC address of the input device.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'A name that you specify for the input device.',
    }),
    NetworkSettings: InputDeviceNetworkSettingsSchema.exactOptional().openapi({
      xml: { name: 'networkSettings' },
      description: 'Network settings for the input device.',
    }),
    SerialNumber: StringSchema.exactOptional().openapi({
      xml: { name: 'serialNumber' },
      description: 'The unique serial number of the input device.',
    }),
    Type: InputDeviceTypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description: 'The type of the input device.',
    }),
    UhdDeviceSettings: InputDeviceUhdSettingsSchema.exactOptional().openapi({
      xml: { name: 'uhdDeviceSettings' },
      description: 'Settings that describe an input device that is type UHD.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({ description: 'Details of the input device.', required: [] })
  .openapi('InputDeviceSummary')

const ListOfInputDeviceSummarySchema = z
  .array(InputDeviceSummarySchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputDeviceSummary' })
  .openapi('ListOfInputDeviceSummary')

const ListInputDevicesResponseSchema = z
  .object({
    InputDevices: ListOfInputDeviceSummarySchema.exactOptional().openapi({
      xml: { name: 'inputDevices' },
      description: 'The list of input devices.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'A token to get additional list results.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for ListInputDevicesResponse', required: [] })
  .openapi('ListInputDevicesResponse')

const ListOfInputSecurityGroupSchema = z
  .array(InputSecurityGroupSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputSecurityGroup' })
  .openapi('ListOfInputSecurityGroup')

const ListInputSecurityGroupsResponseSchema = z
  .object({
    InputSecurityGroups: ListOfInputSecurityGroupSchema.exactOptional().openapi({
      xml: { name: 'inputSecurityGroups' },
      description: 'List of input security groups',
    }),
    NextToken: StringSchema.exactOptional().openapi({ xml: { name: 'nextToken' } }),
  })
  .openapi({
    description: 'Placeholder documentation for ListInputSecurityGroupsResponse',
    required: [],
  })
  .openapi('ListInputSecurityGroupsResponse')

const ListOfInputSchema = z
  .array(InputSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInput' })
  .openapi('ListOfInput')

const ListInputsResponseSchema = z
  .object({
    Inputs: ListOfInputSchema.exactOptional().openapi({ xml: { name: 'inputs' } }),
    NextToken: StringSchema.exactOptional().openapi({ xml: { name: 'nextToken' } }),
  })
  .openapi({ description: 'Placeholder documentation for ListInputsResponse', required: [] })
  .openapi('ListInputsResponse')

const MultiplexProgramSummarySchema = z
  .object({
    ChannelId: StringSchema.exactOptional().openapi({
      xml: { name: 'channelId' },
      description: 'The MediaLive Channel associated with the program.',
    }),
    ProgramName: StringSchema.exactOptional().openapi({
      xml: { name: 'programName' },
      description: 'The name of the multiplex program.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for MultiplexProgramSummary', required: [] })
  .openapi('MultiplexProgramSummary')

const ListOfMultiplexProgramSummarySchema = z
  .array(MultiplexProgramSummarySchema)
  .openapi({ description: 'Placeholder documentation for __listOfMultiplexProgramSummary' })
  .openapi('ListOfMultiplexProgramSummary')

const ListMultiplexProgramsResponseSchema = z
  .object({
    MultiplexPrograms: ListOfMultiplexProgramSummarySchema.exactOptional().openapi({
      xml: { name: 'multiplexPrograms' },
      description: 'List of multiplex programs.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Token for the next ListMultiplexProgram request.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for ListMultiplexProgramsResponse',
    required: [],
  })
  .openapi('ListMultiplexProgramsResponse')

const MultiplexSettingsSummarySchema = z
  .object({
    TransportStreamBitrate: IntegerMin1000000Max100000000Schema.exactOptional().openapi({
      xml: { name: 'transportStreamBitrate' },
      description: 'Transport stream bit rate.',
    }),
  })
  .openapi({ description: 'Contains summary configuration for a Multiplex event.', required: [] })
  .openapi('MultiplexSettingsSummary')

const MultiplexSummarySchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the multiplex.',
    }),
    AvailabilityZones: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZones' },
      description: 'A list of availability zones for the multiplex.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the multiplex.',
    }),
    MultiplexSettings: MultiplexSettingsSummarySchema.exactOptional().openapi({
      xml: { name: 'multiplexSettings' },
      description: 'Configuration for a multiplex event.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the multiplex.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    ProgramCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'programCount' },
      description: 'The number of programs in the multiplex.',
    }),
    State: MultiplexStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'The current state of the multiplex.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for MultiplexSummary', required: [] })
  .openapi('MultiplexSummary')

const ListOfMultiplexSummarySchema = z
  .array(MultiplexSummarySchema)
  .openapi({ description: 'Placeholder documentation for __listOfMultiplexSummary' })
  .openapi('ListOfMultiplexSummary')

const ListMultiplexesResponseSchema = z
  .object({
    Multiplexes: ListOfMultiplexSummarySchema.exactOptional().openapi({
      xml: { name: 'multiplexes' },
      description: 'List of multiplexes.',
    }),
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Token for the next ListMultiplexes request.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for ListMultiplexesResponse', required: [] })
  .openapi('ListMultiplexesResponse')

const OfferingSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description:
        "Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'",
    }),
    CurrencyCode: StringSchema.exactOptional().openapi({
      xml: { name: 'currencyCode' },
      description: "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'",
    }),
    Duration: IntegerSchema.exactOptional().openapi({
      xml: { name: 'duration' },
      description: "Lease duration, e.g. '12'",
    }),
    DurationUnits: OfferingDurationUnitsSchema.exactOptional().openapi({
      xml: { name: 'durationUnits' },
      description: "Units for duration, e.g. 'MONTHS'",
    }),
    FixedPrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'fixedPrice' },
      description:
        "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering",
    }),
    OfferingDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringDescription' },
      description:
        "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'",
    }),
    OfferingId: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringId' },
      description: "Unique offering ID, e.g. '87654321'",
    }),
    OfferingType: OfferingTypeSchema.exactOptional().openapi({
      xml: { name: 'offeringType' },
      description: "Offering type, e.g. 'NO_UPFRONT'",
    }),
    Region: StringSchema.exactOptional().openapi({
      xml: { name: 'region' },
      description: "AWS region, e.g. 'us-west-2'",
    }),
    ResourceSpecification: ReservationResourceSpecificationSchema.exactOptional().openapi({
      xml: { name: 'resourceSpecification' },
      description: 'Resource configuration details',
    }),
    UsagePrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'usagePrice' },
      description: "Recurring usage charge for each reserved resource, e.g. '157.0'",
    }),
  })
  .openapi({ description: 'Reserved resources available for purchase', required: [] })
  .openapi('Offering')

const ListOfOfferingSchema = z
  .array(OfferingSchema)
  .openapi({ description: 'Placeholder documentation for __listOfOffering' })
  .openapi('ListOfOffering')

const ListOfferingsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Token to retrieve the next page of results',
    }),
    Offerings: ListOfOfferingSchema.exactOptional().openapi({
      xml: { name: 'offerings' },
      description: 'List of offerings',
    }),
  })
  .openapi({ description: 'Placeholder documentation for ListOfferingsResponse', required: [] })
  .openapi('ListOfferingsResponse')

const ReservationSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description:
        "Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'",
    }),
    Count: IntegerSchema.exactOptional().openapi({
      xml: { name: 'count' },
      description: 'Number of reserved resources',
    }),
    CurrencyCode: StringSchema.exactOptional().openapi({
      xml: { name: 'currencyCode' },
      description: "Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'",
    }),
    Duration: IntegerSchema.exactOptional().openapi({
      xml: { name: 'duration' },
      description: "Lease duration, e.g. '12'",
    }),
    DurationUnits: OfferingDurationUnitsSchema.exactOptional().openapi({
      xml: { name: 'durationUnits' },
      description: "Units for duration, e.g. 'MONTHS'",
    }),
    End: StringSchema.exactOptional().openapi({
      xml: { name: 'end' },
      description:
        "Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'",
    }),
    FixedPrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'fixedPrice' },
      description:
        "One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering",
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'User specified reservation name',
    }),
    OfferingDescription: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringDescription' },
      description:
        "Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'",
    }),
    OfferingId: StringSchema.exactOptional().openapi({
      xml: { name: 'offeringId' },
      description: "Unique offering ID, e.g. '87654321'",
    }),
    OfferingType: OfferingTypeSchema.exactOptional().openapi({
      xml: { name: 'offeringType' },
      description: "Offering type, e.g. 'NO_UPFRONT'",
    }),
    Region: StringSchema.exactOptional().openapi({
      xml: { name: 'region' },
      description: "AWS region, e.g. 'us-west-2'",
    }),
    RenewalSettings: RenewalSettingsSchema.exactOptional().openapi({
      xml: { name: 'renewalSettings' },
      description: 'Renewal settings for the reservation',
    }),
    ReservationId: StringSchema.exactOptional().openapi({
      xml: { name: 'reservationId' },
      description: "Unique reservation ID, e.g. '1234567'",
    }),
    ResourceSpecification: ReservationResourceSpecificationSchema.exactOptional().openapi({
      xml: { name: 'resourceSpecification' },
      description: 'Resource configuration details',
    }),
    Start: StringSchema.exactOptional().openapi({
      xml: { name: 'start' },
      description:
        "Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'",
    }),
    State: ReservationStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: "Current state of reservation, e.g. 'ACTIVE'",
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs',
    }),
    UsagePrice: DoubleSchema.exactOptional().openapi({
      xml: { name: 'usagePrice' },
      description: "Recurring usage charge for each reserved resource, e.g. '157.0'",
    }),
  })
  .openapi({ description: 'Reserved resources available to use', required: [] })
  .openapi('Reservation')

const ListOfReservationSchema = z
  .array(ReservationSchema)
  .openapi({ description: 'Placeholder documentation for __listOfReservation' })
  .openapi('ListOfReservation')

const ListReservationsResponseSchema = z
  .object({
    NextToken: StringSchema.exactOptional().openapi({
      xml: { name: 'nextToken' },
      description: 'Token to retrieve the next page of results',
    }),
    Reservations: ListOfReservationSchema.exactOptional().openapi({
      xml: { name: 'reservations' },
      description: 'List of reservations',
    }),
  })
  .openapi({ description: 'Placeholder documentation for ListReservationsResponse', required: [] })
  .openapi('ListReservationsResponse')

const ListTagsForResourceResponseSchema = z
  .object({ Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }) })
  .openapi({
    description: 'Placeholder documentation for ListTagsForResourceResponse',
    required: [],
  })
  .openapi('ListTagsForResourceResponse')

const PurchaseOfferingResponseSchema = z
  .object({
    Reservation: ReservationSchema.exactOptional().openapi({ xml: { name: 'reservation' } }),
  })
  .openapi({ description: 'Placeholder documentation for PurchaseOfferingResponse', required: [] })
  .openapi('PurchaseOfferingResponse')

const RebootInputDeviceResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for RebootInputDeviceResponse' })
  .openapi('RebootInputDeviceResponse')

const RejectInputDeviceTransferResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for RejectInputDeviceTransferResponse' })
  .openapi('RejectInputDeviceTransferResponse')

const StartChannelResponseSchema: z.ZodType<StartChannelResponseType> = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the channel.',
    }),
    CdiInputSpecification: CdiInputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'cdiInputSpecification' },
      description: 'Specification of CDI inputs for this channel',
    }),
    ChannelClass: ChannelClassSchema.exactOptional().openapi({
      xml: { name: 'channelClass' },
      description:
        'The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description:
        'A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n',
    }),
    EgressEndpoints: ListOfChannelEgressEndpointSchema.exactOptional().openapi({
      xml: { name: 'egressEndpoints' },
      description: 'The endpoints where outgoing connections initiate from',
    }),
    EncoderSettings: EncoderSettingsSchema.exactOptional().openapi({
      xml: { name: 'encoderSettings' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the channel.',
    }),
    InputAttachments: ListOfInputAttachmentSchema.exactOptional().openapi({
      xml: { name: 'inputAttachments' },
      description: 'List of input attachments for channel.',
    }),
    InputSpecification: InputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'inputSpecification' },
      description: 'Specification of network and file inputs for this channel',
    }),
    LogLevel: LogLevelSchema.exactOptional().openapi({
      xml: { name: 'logLevel' },
      description: 'The log level being written to CloudWatch Logs.',
    }),
    Maintenance: MaintenanceStatusSchema.exactOptional().openapi({
      xml: { name: 'maintenance' },
      description: 'Maintenance settings for this channel.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the channel. (user-mutable)',
    }),
    PipelineDetails: ListOfPipelineDetailSchema.exactOptional().openapi({
      xml: { name: 'pipelineDetails' },
      description: 'Runtime details for the pipelines of a running channel.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description: 'The Amazon Resource Name (ARN) of the role assumed when running the Channel.',
    }),
    State: ChannelStateSchema.exactOptional().openapi({ xml: { name: 'state' } }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Vpc: VpcOutputSettingsDescriptionSchema.exactOptional().openapi({
      xml: { name: 'vpc' },
      description: 'Settings for VPC output',
    }),
  })
  .openapi({ description: 'Placeholder documentation for StartChannelResponse', required: [] })
  .openapi('StartChannelResponse')

const StartInputDeviceMaintenanceWindowResponseSchema = z
  .looseObject({})
  .openapi({
    description: 'Placeholder documentation for StartInputDeviceMaintenanceWindowResponse',
  })
  .openapi('StartInputDeviceMaintenanceWindowResponse')

const StartMultiplexResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the multiplex.',
    }),
    AvailabilityZones: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZones' },
      description: 'A list of availability zones for the multiplex.',
    }),
    Destinations: ListOfMultiplexOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of the multiplex output destinations.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the multiplex.',
    }),
    MultiplexSettings: MultiplexSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexSettings' },
      description: 'Configuration for a multiplex event.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the multiplex.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    ProgramCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'programCount' },
      description: 'The number of programs in the multiplex.',
    }),
    State: MultiplexStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'The current state of the multiplex.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for StartMultiplexResponse', required: [] })
  .openapi('StartMultiplexResponse')

const StopChannelResponseSchema: z.ZodType<StopChannelResponseType> = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the channel.',
    }),
    CdiInputSpecification: CdiInputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'cdiInputSpecification' },
      description: 'Specification of CDI inputs for this channel',
    }),
    ChannelClass: ChannelClassSchema.exactOptional().openapi({
      xml: { name: 'channelClass' },
      description:
        'The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description:
        'A list of destinations of the channel. For UDP outputs, there is one\ndestination per output. For other types (HLS, for example), there is\none destination per packager.\n',
    }),
    EgressEndpoints: ListOfChannelEgressEndpointSchema.exactOptional().openapi({
      xml: { name: 'egressEndpoints' },
      description: 'The endpoints where outgoing connections initiate from',
    }),
    EncoderSettings: EncoderSettingsSchema.exactOptional().openapi({
      xml: { name: 'encoderSettings' },
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the channel.',
    }),
    InputAttachments: ListOfInputAttachmentSchema.exactOptional().openapi({
      xml: { name: 'inputAttachments' },
      description: 'List of input attachments for channel.',
    }),
    InputSpecification: InputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'inputSpecification' },
      description: 'Specification of network and file inputs for this channel',
    }),
    LogLevel: LogLevelSchema.exactOptional().openapi({
      xml: { name: 'logLevel' },
      description: 'The log level being written to CloudWatch Logs.',
    }),
    Maintenance: MaintenanceStatusSchema.exactOptional().openapi({
      xml: { name: 'maintenance' },
      description: 'Maintenance settings for this channel.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the channel. (user-mutable)',
    }),
    PipelineDetails: ListOfPipelineDetailSchema.exactOptional().openapi({
      xml: { name: 'pipelineDetails' },
      description: 'Runtime details for the pipelines of a running channel.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description: 'The Amazon Resource Name (ARN) of the role assumed when running the Channel.',
    }),
    State: ChannelStateSchema.exactOptional().openapi({ xml: { name: 'state' } }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Vpc: VpcOutputSettingsDescriptionSchema.exactOptional().openapi({
      xml: { name: 'vpc' },
      description: 'Settings for VPC output',
    }),
  })
  .openapi({ description: 'Placeholder documentation for StopChannelResponse', required: [] })
  .openapi('StopChannelResponse')

const StopMultiplexResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique arn of the multiplex.',
    }),
    AvailabilityZones: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'availabilityZones' },
      description: 'A list of availability zones for the multiplex.',
    }),
    Destinations: ListOfMultiplexOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of the multiplex output destinations.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique id of the multiplex.',
    }),
    MultiplexSettings: MultiplexSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexSettings' },
      description: 'Configuration for a multiplex event.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the multiplex.',
    }),
    PipelinesRunningCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'pipelinesRunningCount' },
      description: 'The number of currently healthy pipelines.',
    }),
    ProgramCount: IntegerSchema.exactOptional().openapi({
      xml: { name: 'programCount' },
      description: 'The number of programs in the multiplex.',
    }),
    State: MultiplexStateSchema.exactOptional().openapi({
      xml: { name: 'state' },
      description: 'The current state of the multiplex.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for StopMultiplexResponse', required: [] })
  .openapi('StopMultiplexResponse')

const TransferInputDeviceResponseSchema = z
  .looseObject({})
  .openapi({ description: 'Placeholder documentation for TransferInputDeviceResponse' })
  .openapi('TransferInputDeviceResponse')

const UpdateChannelResponseSchema: z.ZodType<UpdateChannelResponseType> = z
  .object({ Channel: ChannelSchema.exactOptional().openapi({ xml: { name: 'channel' } }) })
  .openapi({ description: 'Placeholder documentation for UpdateChannelResponse', required: [] })
  .openapi('UpdateChannelResponse')

const UpdateChannelClassResponseSchema: z.ZodType<UpdateChannelClassResponseType> = z
  .object({ Channel: ChannelSchema.exactOptional().openapi({ xml: { name: 'channel' } }) })
  .openapi({
    description: 'Placeholder documentation for UpdateChannelClassResponse',
    required: [],
  })
  .openapi('UpdateChannelClassResponse')

const UpdateInputResponseSchema = z
  .object({ Input: InputSchema.exactOptional().openapi({ xml: { name: 'input' } }) })
  .openapi({ description: 'Placeholder documentation for UpdateInputResponse', required: [] })
  .openapi('UpdateInputResponse')

const InputDeviceRequestSchema = z
  .object({
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique ID for the device.',
    }),
  })
  .openapi({ description: 'Settings for an input device.', required: [] })
  .openapi('InputDeviceRequest')

const UpdateInputDeviceResponseSchema = z
  .object({
    Arn: StringSchema.exactOptional().openapi({
      xml: { name: 'arn' },
      description: 'The unique ARN of the input device.',
    }),
    ConnectionState: InputDeviceConnectionStateSchema.exactOptional().openapi({
      xml: { name: 'connectionState' },
      description: 'The state of the connection between the input device and AWS.',
    }),
    DeviceSettingsSyncState: DeviceSettingsSyncStateSchema.exactOptional().openapi({
      xml: { name: 'deviceSettingsSyncState' },
      description:
        'The status of the action to synchronize the device configuration. If you change the configuration of the input device (for example, the maximum bitrate), MediaLive sends the new data to the device. The device might not update itself immediately. SYNCED means the device has updated its configuration. SYNCING means that it has not updated its configuration.',
    }),
    DeviceUpdateStatus: DeviceUpdateStatusSchema.exactOptional().openapi({
      xml: { name: 'deviceUpdateStatus' },
      description: 'The status of software on the input device.',
    }),
    HdDeviceSettings: InputDeviceHdSettingsSchema.exactOptional().openapi({
      xml: { name: 'hdDeviceSettings' },
      description: 'Settings that describe an input device that is type HD.',
    }),
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The unique ID of the input device.',
    }),
    MacAddress: StringSchema.exactOptional().openapi({
      xml: { name: 'macAddress' },
      description: 'The network MAC address of the input device.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'A name that you specify for the input device.',
    }),
    NetworkSettings: InputDeviceNetworkSettingsSchema.exactOptional().openapi({
      xml: { name: 'networkSettings' },
      description: 'The network settings for the input device.',
    }),
    SerialNumber: StringSchema.exactOptional().openapi({
      xml: { name: 'serialNumber' },
      description: 'The unique serial number of the input device.',
    }),
    Type: InputDeviceTypeSchema.exactOptional().openapi({
      xml: { name: 'type' },
      description: 'The type of the input device.',
    }),
    UhdDeviceSettings: InputDeviceUhdSettingsSchema.exactOptional().openapi({
      xml: { name: 'uhdDeviceSettings' },
      description: 'Settings that describe an input device that is type UHD.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for UpdateInputDeviceResponse', required: [] })
  .openapi('UpdateInputDeviceResponse')

const UpdateInputSecurityGroupResponseSchema = z
  .object({
    SecurityGroup: InputSecurityGroupSchema.exactOptional().openapi({
      xml: { name: 'securityGroup' },
    }),
  })
  .openapi({
    description: 'Placeholder documentation for UpdateInputSecurityGroupResponse',
    required: [],
  })
  .openapi('UpdateInputSecurityGroupResponse')

const UpdateMultiplexResponseSchema = z
  .object({
    Multiplex: MultiplexSchema.exactOptional().openapi({
      xml: { name: 'multiplex' },
      description: 'The updated multiplex.',
    }),
  })
  .openapi({ description: 'Placeholder documentation for UpdateMultiplexResponse', required: [] })
  .openapi('UpdateMultiplexResponse')

const UpdateMultiplexProgramResponseSchema = z
  .object({
    MultiplexProgram: MultiplexProgramSchema.exactOptional().openapi({
      xml: { name: 'multiplexProgram' },
      description: 'The updated multiplex program.',
    }),
  })
  .openapi({
    description: 'Placeholder documentation for UpdateMultiplexProgramResponse',
    required: [],
  })
  .openapi('UpdateMultiplexProgramResponse')

const UpdateReservationResponseSchema = z
  .object({
    Reservation: ReservationSchema.exactOptional().openapi({ xml: { name: 'reservation' } }),
  })
  .openapi({ description: 'Placeholder documentation for UpdateReservationResponse', required: [] })
  .openapi('UpdateReservationResponse')

const AcceptInputDeviceTransferRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'AcceptInputDeviceTransferRequest',
    description: 'Placeholder documentation for AcceptInputDeviceTransferRequest',
  })
  .openapi('AcceptInputDeviceTransferRequest')

const BatchDeleteRequestSchema = z
  .object({
    ChannelIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'channelIds' },
      description: 'List of channel IDs',
    }),
    InputIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'inputIds' },
      description: 'List of input IDs',
    }),
    InputSecurityGroupIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'inputSecurityGroupIds' },
      description: 'List of input security group IDs',
    }),
    MultiplexIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'multiplexIds' },
      description: 'List of multiplex IDs',
    }),
  })
  .openapi({
    title: 'BatchDeleteRequest',
    description: 'A request to delete resources',
    required: [],
  })
  .openapi('BatchDeleteRequest')

const BatchStartRequestSchema = z
  .object({
    ChannelIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'channelIds' },
      description: 'List of channel IDs',
    }),
    MultiplexIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'multiplexIds' },
      description: 'List of multiplex IDs',
    }),
  })
  .openapi({
    title: 'BatchStartRequest',
    description: 'A request to start resources',
    required: [],
  })
  .openapi('BatchStartRequest')

const BatchStopRequestSchema = z
  .object({
    ChannelIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'channelIds' },
      description: 'List of channel IDs',
    }),
    MultiplexIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'multiplexIds' },
      description: 'List of multiplex IDs',
    }),
  })
  .openapi({ title: 'BatchStopRequest', description: 'A request to stop resources', required: [] })
  .openapi('BatchStopRequest')

const BatchUpdateScheduleRequestSchema: z.ZodType<BatchUpdateScheduleRequestType> = z
  .object({
    Creates: BatchScheduleActionCreateRequestSchema.exactOptional().openapi({
      xml: { name: 'creates' },
      description: 'Schedule actions to create in the schedule.',
    }),
    Deletes: BatchScheduleActionDeleteRequestSchema.exactOptional().openapi({
      xml: { name: 'deletes' },
      description: 'Schedule actions to delete from the schedule.',
    }),
  })
  .openapi({
    title: 'BatchUpdateScheduleRequest',
    description: 'List of actions to create and list of actions to delete.',
    required: [],
  })
  .openapi('BatchUpdateScheduleRequest')

const CancelInputDeviceTransferRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'CancelInputDeviceTransferRequest',
    description: 'Placeholder documentation for CancelInputDeviceTransferRequest',
  })
  .openapi('CancelInputDeviceTransferRequest')

const ClaimDeviceRequestSchema = z
  .object({
    Id: StringSchema.exactOptional().openapi({
      xml: { name: 'id' },
      description: 'The id of the device you want to claim.',
    }),
  })
  .openapi({
    title: 'ClaimDeviceRequest',
    description:
      'A request to claim an AWS Elemental device that you have purchased from a third-party vendor.',
    required: [],
  })
  .openapi('ClaimDeviceRequest')

const CreateChannelRequestSchema: z.ZodType<CreateChannelRequestType> = z
  .object({
    CdiInputSpecification: CdiInputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'cdiInputSpecification' },
      description: 'Specification of CDI inputs for this channel',
    }),
    ChannelClass: ChannelClassSchema.exactOptional().openapi({
      xml: { name: 'channelClass' },
      description:
        'The class for this channel. STANDARD for a channel with two pipelines or SINGLE_PIPELINE for a channel with one pipeline.',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
    }),
    EncoderSettings: EncoderSettingsSchema.exactOptional().openapi({
      xml: { name: 'encoderSettings' },
    }),
    InputAttachments: ListOfInputAttachmentSchema.exactOptional().openapi({
      xml: { name: 'inputAttachments' },
      description: 'List of input attachments for channel.',
    }),
    InputSpecification: InputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'inputSpecification' },
      description: 'Specification of network and file inputs for this channel',
    }),
    LogLevel: LogLevelSchema.exactOptional().openapi({
      xml: { name: 'logLevel' },
      description: 'The log level to write to CloudWatch Logs.',
    }),
    Maintenance: MaintenanceCreateSettingsSchema.exactOptional().openapi({
      xml: { name: 'maintenance' },
      description: 'Maintenance settings for this channel.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of channel.',
    }),
    RequestId: StringSchema.exactOptional().openapi({
      xml: { name: 'requestId' },
      description:
        'Unique request ID to be specified. This is needed to prevent retries from\ncreating multiple resources.\n',
    }),
    Reserved: StringSchema.exactOptional().openapi({
      deprecated: true,
      xml: { name: 'reserved' },
      description: "Deprecated field that's only usable by whitelisted customers.",
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description:
        'An optional Amazon Resource Name (ARN) of the role to assume when running the Channel.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Vpc: VpcOutputSettingsSchema.exactOptional().openapi({
      xml: { name: 'vpc' },
      description: 'Settings for the VPC outputs',
    }),
  })
  .openapi({
    title: 'CreateChannelRequest',
    description: 'A request to create a channel',
    required: [],
  })
  .openapi('CreateChannelRequest')

const ListOfInputDestinationRequestSchema = z
  .array(InputDestinationRequestSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputDestinationRequest' })
  .openapi('ListOfInputDestinationRequest')

const ListOfMediaConnectFlowRequestSchema = z
  .array(MediaConnectFlowRequestSchema)
  .openapi({ description: 'Placeholder documentation for __listOfMediaConnectFlowRequest' })
  .openapi('ListOfMediaConnectFlowRequest')

const ListOfInputSourceRequestSchema = z
  .array(InputSourceRequestSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputSourceRequest' })
  .openapi('ListOfInputSourceRequest')

const InputVpcRequestSchema = z
  .object({
    SecurityGroupIds: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'securityGroupIds' },
      description:
        'A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.\nRequires subnetIds. If none are specified then the VPC default security group will be used.\n',
    }),
    SubnetIds: ListOfStringSchema.openapi({
      xml: { name: 'subnetIds' },
      description:
        'A list of 2 VPC subnet IDs from the same VPC.\nSubnet IDs must be mapped to two unique availability zones (AZ).\n',
    }),
  })
  .openapi({
    required: ['SubnetIds'],
    description:
      'Settings for a private VPC Input.\nWhen this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.\nThis property requires setting the roleArn property on Input creation.\nNot compatible with the inputSecurityGroups property.\n',
  })
  .openapi('InputVpcRequest')

const CreateInputRequestSchema = z
  .object({
    Destinations: ListOfInputDestinationRequestSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'Destination settings for PUSH type inputs.',
    }),
    InputDevices: ListOfInputDeviceSettingsSchema.exactOptional().openapi({
      xml: { name: 'inputDevices' },
      description: 'Settings for the devices.',
    }),
    InputSecurityGroups: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'inputSecurityGroups' },
      description: 'A list of security groups referenced by IDs to attach to the input.',
    }),
    MediaConnectFlows: ListOfMediaConnectFlowRequestSchema.exactOptional().openapi({
      xml: { name: 'mediaConnectFlows' },
      description:
        'A list of the MediaConnect Flows that you want to use in this input. You can specify as few as one\nFlow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a\nseparate Availability Zone as this ensures your EML input is redundant to AZ issues.\n',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of the input.',
    }),
    RequestId: StringSchema.exactOptional().openapi({
      xml: { name: 'requestId' },
      description:
        'Unique identifier of the request to ensure the request is handled\nexactly once in case of retries.\n',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description:
        'The Amazon Resource Name (ARN) of the role this input assumes during and after creation.',
    }),
    Sources: ListOfInputSourceRequestSchema.exactOptional().openapi({
      xml: { name: 'sources' },
      description:
        'The source URLs for a PULL-type input. Every PULL type input needs\nexactly two source URLs for redundancy.\nOnly specify sources for PULL type Inputs. Leave Destinations empty.\n',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    Type: InputTypeSchema.exactOptional().openapi({ xml: { name: 'type' } }),
    Vpc: InputVpcRequestSchema.exactOptional().openapi({ xml: { name: 'vpc' } }),
  })
  .openapi({ title: 'CreateInputRequest', description: 'The name of the input', required: [] })
  .openapi('CreateInputRequest')

const ListOfInputWhitelistRuleCidrSchema = z
  .array(InputWhitelistRuleCidrSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputWhitelistRuleCidr' })
  .openapi('ListOfInputWhitelistRuleCidr')

const CreateInputSecurityGroupRequestSchema = z
  .object({
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    WhitelistRules: ListOfInputWhitelistRuleCidrSchema.exactOptional().openapi({
      xml: { name: 'whitelistRules' },
      description: 'List of IPv4 CIDR addresses to whitelist',
    }),
  })
  .openapi({
    title: 'CreateInputSecurityGroupRequest',
    description: 'The IPv4 CIDRs to whitelist for this Input Security Group',
    required: [],
  })
  .openapi('CreateInputSecurityGroupRequest')

const CreateMultiplexProgramRequestSchema = z
  .object({
    MultiplexProgramSettings: MultiplexProgramSettingsSchema.openapi({
      xml: { name: 'multiplexProgramSettings' },
      description: 'The settings for this multiplex program.',
    }),
    ProgramName: StringSchema.openapi({
      xml: { name: 'programName' },
      description: 'Name of multiplex program.',
    }),
    RequestId: StringSchema.openapi({
      xml: { name: 'requestId' },
      description: 'Unique request ID. This prevents retries from creating multiple\nresources.\n',
    }),
  })
  .openapi({
    required: ['RequestId', 'MultiplexProgramSettings', 'ProgramName'],
    title: 'CreateMultiplexProgramRequest',
    description: 'A request to create a program in a multiplex.',
  })
  .openapi('CreateMultiplexProgramRequest')

const CreateMultiplexRequestSchema = z
  .object({
    AvailabilityZones: ListOfStringSchema.openapi({
      xml: { name: 'availabilityZones' },
      description: 'A list of availability zones for the multiplex. You must specify exactly two.',
    }),
    MultiplexSettings: MultiplexSettingsSchema.openapi({
      xml: { name: 'multiplexSettings' },
      description: 'Configuration for a multiplex event.',
    }),
    Name: StringSchema.openapi({ xml: { name: 'name' }, description: 'Name of multiplex.' }),
    RequestId: StringSchema.openapi({
      xml: { name: 'requestId' },
      description: 'Unique request ID. This prevents retries from creating multiple\nresources.\n',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({
    required: ['RequestId', 'MultiplexSettings', 'AvailabilityZones', 'Name'],
    title: 'CreateMultiplexRequest',
    description: 'A request to create a multiplex.',
  })
  .openapi('CreateMultiplexRequest')

const CreatePartnerInputRequestSchema = z
  .object({
    RequestId: StringSchema.exactOptional().openapi({
      xml: { name: 'requestId' },
      description:
        'Unique identifier of the request to ensure the request is handled\nexactly once in case of retries.\n',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
  })
  .openapi({
    title: 'CreatePartnerInputRequest',
    description: 'A request to create a partner input',
    required: [],
  })
  .openapi('CreatePartnerInputRequest')

const CreateTagsRequestSchema = z
  .object({ Tags: TagsSchema.exactOptional().openapi({ xml: { name: 'tags' } }) })
  .openapi({
    title: 'CreateTagsRequest',
    description: 'Placeholder documentation for CreateTagsRequest',
    required: [],
  })
  .openapi('CreateTagsRequest')

const DeleteChannelRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteChannelRequest',
    description: 'Placeholder documentation for DeleteChannelRequest',
  })
  .openapi('DeleteChannelRequest')

const DeleteInputRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteInputRequest',
    description: 'Placeholder documentation for DeleteInputRequest',
  })
  .openapi('DeleteInputRequest')

const DeleteInputSecurityGroupRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteInputSecurityGroupRequest',
    description: 'Placeholder documentation for DeleteInputSecurityGroupRequest',
  })
  .openapi('DeleteInputSecurityGroupRequest')

const DeleteMultiplexProgramRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteMultiplexProgramRequest',
    description: 'Placeholder documentation for DeleteMultiplexProgramRequest',
  })
  .openapi('DeleteMultiplexProgramRequest')

const DeleteMultiplexRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteMultiplexRequest',
    description: 'Placeholder documentation for DeleteMultiplexRequest',
  })
  .openapi('DeleteMultiplexRequest')

const DeleteReservationRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteReservationRequest',
    description: 'Placeholder documentation for DeleteReservationRequest',
  })
  .openapi('DeleteReservationRequest')

const DeleteScheduleRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteScheduleRequest',
    description: 'Placeholder documentation for DeleteScheduleRequest',
  })
  .openapi('DeleteScheduleRequest')

const DeleteTagsRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DeleteTagsRequest',
    description: 'Placeholder documentation for DeleteTagsRequest',
  })
  .openapi('DeleteTagsRequest')

const DescribeChannelRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeChannelRequest',
    description: 'Placeholder documentation for DescribeChannelRequest',
  })
  .openapi('DescribeChannelRequest')

const DescribeInputDeviceRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeInputDeviceRequest',
    description: 'Placeholder documentation for DescribeInputDeviceRequest',
  })
  .openapi('DescribeInputDeviceRequest')

const AcceptHeaderSchema = z
  .literal('image/jpeg')
  .openapi({ description: 'The HTTP Accept header. Indicates the requested type fothe thumbnail.' })
  .openapi('AcceptHeader')

const DescribeInputDeviceThumbnailRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeInputDeviceThumbnailRequest',
    description: 'Placeholder documentation for DescribeInputDeviceThumbnailRequest',
  })
  .openapi('DescribeInputDeviceThumbnailRequest')

const ContentTypeSchema = z
  .literal('image/jpeg')
  .openapi({ description: 'Specifies the media type of the thumbnail.' })
  .openapi('ContentType')

const LongSchema = z
  .int()
  .openapi({ description: 'Placeholder documentation for __long' })
  .openapi('Long')

const TimestampSchema = z.iso
  .datetime({ offset: true })
  .openapi({ description: 'Placeholder documentation for __timestamp' })
  .openapi('Timestamp')

const DescribeInputRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeInputRequest',
    description: 'Placeholder documentation for DescribeInputRequest',
  })
  .openapi('DescribeInputRequest')

const DescribeInputSecurityGroupRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeInputSecurityGroupRequest',
    description: 'Placeholder documentation for DescribeInputSecurityGroupRequest',
  })
  .openapi('DescribeInputSecurityGroupRequest')

const DescribeMultiplexProgramRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeMultiplexProgramRequest',
    description: 'Placeholder documentation for DescribeMultiplexProgramRequest',
  })
  .openapi('DescribeMultiplexProgramRequest')

const DescribeMultiplexRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeMultiplexRequest',
    description: 'Placeholder documentation for DescribeMultiplexRequest',
  })
  .openapi('DescribeMultiplexRequest')

const DescribeOfferingRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeOfferingRequest',
    description: 'Placeholder documentation for DescribeOfferingRequest',
  })
  .openapi('DescribeOfferingRequest')

const DescribeReservationRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeReservationRequest',
    description: 'Placeholder documentation for DescribeReservationRequest',
  })
  .openapi('DescribeReservationRequest')

const MaxResultsSchema = z
  .int()
  .min(1)
  .max(1000)
  .openapi({ description: 'Placeholder documentation for MaxResults' })
  .openapi('MaxResults')

const DescribeScheduleRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'DescribeScheduleRequest',
    description: 'Placeholder documentation for DescribeScheduleRequest',
  })
  .openapi('DescribeScheduleRequest')

const InputDeviceConfigurableSettingsSchema = z
  .object({
    ConfiguredInput: InputDeviceConfiguredInputSchema.exactOptional().openapi({
      xml: { name: 'configuredInput' },
      description:
        "The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.",
    }),
    MaxBitrate: IntegerSchema.exactOptional().openapi({
      xml: { name: 'maxBitrate' },
      description:
        'The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.',
    }),
    LatencyMs: IntegerSchema.exactOptional().openapi({
      xml: { name: 'latencyMs' },
      description: "The Link device's buffer size (latency) in milliseconds (ms).",
    }),
  })
  .openapi({ description: 'Configurable settings for the input device.', required: [] })
  .openapi('InputDeviceConfigurableSettings')

const ListChannelsRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListChannelsRequest',
    description: 'Placeholder documentation for ListChannelsRequest',
  })
  .openapi('ListChannelsRequest')

const ListInputDeviceTransfersRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListInputDeviceTransfersRequest',
    description: 'Placeholder documentation for ListInputDeviceTransfersRequest',
  })
  .openapi('ListInputDeviceTransfersRequest')

const ListInputDevicesRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListInputDevicesRequest',
    description: 'Placeholder documentation for ListInputDevicesRequest',
  })
  .openapi('ListInputDevicesRequest')

const ListInputSecurityGroupsRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListInputSecurityGroupsRequest',
    description: 'Placeholder documentation for ListInputSecurityGroupsRequest',
  })
  .openapi('ListInputSecurityGroupsRequest')

const ListInputsRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListInputsRequest',
    description: 'Placeholder documentation for ListInputsRequest',
  })
  .openapi('ListInputsRequest')

const ListMultiplexProgramsRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListMultiplexProgramsRequest',
    description: 'Placeholder documentation for ListMultiplexProgramsRequest',
  })
  .openapi('ListMultiplexProgramsRequest')

const ListMultiplexesRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListMultiplexesRequest',
    description: 'Placeholder documentation for ListMultiplexesRequest',
  })
  .openapi('ListMultiplexesRequest')

const ListOfferingsRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListOfferingsRequest',
    description: 'Placeholder documentation for ListOfferingsRequest',
  })
  .openapi('ListOfferingsRequest')

const ListReservationsRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListReservationsRequest',
    description: 'Placeholder documentation for ListReservationsRequest',
  })
  .openapi('ListReservationsRequest')

const ListTagsForResourceRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'ListTagsForResourceRequest',
    description: 'Placeholder documentation for ListTagsForResourceRequest',
  })
  .openapi('ListTagsForResourceRequest')

const PurchaseOfferingRequestSchema = z
  .object({
    Count: IntegerMin1Schema.openapi({
      xml: { name: 'count' },
      description: 'Number of resources',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name for the new reservation',
    }),
    RenewalSettings: RenewalSettingsSchema.exactOptional().openapi({
      xml: { name: 'renewalSettings' },
      description: 'Renewal settings for the reservation',
    }),
    RequestId: StringSchema.exactOptional().openapi({
      xml: { name: 'requestId' },
      description:
        'Unique request ID to be specified. This is needed to prevent retries from creating multiple resources.',
    }),
    Start: StringSchema.exactOptional().openapi({
      xml: { name: 'start' },
      description:
        'Requested reservation start time (UTC) in ISO-8601 format. The specified time must be between the first day of the current month and one year from now. If no value is given, the default is now.',
    }),
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs',
    }),
  })
  .openapi({
    required: ['Count'],
    title: 'PurchaseOfferingRequest',
    description: 'Placeholder documentation for PurchaseOfferingRequest',
  })
  .openapi('PurchaseOfferingRequest')

const RebootInputDeviceForceSchema = z
  .enum(['NO', 'YES'])
  .openapi({ description: 'Whether or not to force reboot the input device.' })
  .openapi('RebootInputDeviceForce')

const RebootInputDeviceRequestSchema = z
  .object({
    Force: RebootInputDeviceForceSchema.exactOptional().openapi({
      xml: { name: 'force' },
      description:
        'Force a reboot of an input device. If the device is streaming, it will stop streaming and begin rebooting within a few seconds of sending the command. If the device was streaming prior to the reboot, the device will resume streaming when the reboot completes.',
    }),
  })
  .openapi({
    title: 'RebootInputDeviceRequest',
    description: 'A request to reboot an AWS Elemental device.',
    required: [],
  })
  .openapi('RebootInputDeviceRequest')

const RejectInputDeviceTransferRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'RejectInputDeviceTransferRequest',
    description: 'Placeholder documentation for RejectInputDeviceTransferRequest',
  })
  .openapi('RejectInputDeviceTransferRequest')

const StartChannelRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'StartChannelRequest',
    description: 'Placeholder documentation for StartChannelRequest',
  })
  .openapi('StartChannelRequest')

const StartInputDeviceMaintenanceWindowRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'StartInputDeviceMaintenanceWindowRequest',
    description: 'Placeholder documentation for StartInputDeviceMaintenanceWindowRequest',
  })
  .openapi('StartInputDeviceMaintenanceWindowRequest')

const StartMultiplexRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'StartMultiplexRequest',
    description: 'Placeholder documentation for StartMultiplexRequest',
  })
  .openapi('StartMultiplexRequest')

const StopChannelRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'StopChannelRequest',
    description: 'Placeholder documentation for StopChannelRequest',
  })
  .openapi('StopChannelRequest')

const StopMultiplexRequestSchema = z
  .looseObject({})
  .openapi({
    title: 'StopMultiplexRequest',
    description: 'Placeholder documentation for StopMultiplexRequest',
  })
  .openapi('StopMultiplexRequest')

const TransferInputDeviceRequestSchema = z
  .object({
    TargetCustomerId: StringSchema.exactOptional().openapi({
      xml: { name: 'targetCustomerId' },
      description: 'The AWS account ID (12 digits) for the recipient of the device transfer.',
    }),
    TargetRegion: StringSchema.exactOptional().openapi({
      xml: { name: 'targetRegion' },
      description: 'The target AWS region to transfer the device.',
    }),
    TransferMessage: StringSchema.exactOptional().openapi({
      xml: { name: 'transferMessage' },
      description: 'An optional message for the recipient. Maximum 280 characters.',
    }),
  })
  .openapi({
    title: 'TransferInputDeviceRequest',
    description: 'A request to transfer an input device.',
    required: [],
  })
  .openapi('TransferInputDeviceRequest')

const UpdateChannelClassRequestSchema = z
  .object({
    ChannelClass: ChannelClassSchema.openapi({
      xml: { name: 'channelClass' },
      description: 'The channel class that you wish to update this channel to use.',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of output destinations for this channel.',
    }),
  })
  .openapi({
    required: ['ChannelClass'],
    title: 'UpdateChannelClassRequest',
    description: 'Channel class that the channel should be updated to.',
  })
  .openapi('UpdateChannelClassRequest')

const UpdateChannelRequestSchema: z.ZodType<UpdateChannelRequestType> = z
  .object({
    CdiInputSpecification: CdiInputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'cdiInputSpecification' },
      description: 'Specification of CDI inputs for this channel',
    }),
    Destinations: ListOfOutputDestinationSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'A list of output destinations for this channel.',
    }),
    EncoderSettings: EncoderSettingsSchema.exactOptional().openapi({
      xml: { name: 'encoderSettings' },
      description: 'The encoder settings for this channel.',
    }),
    InputAttachments: ListOfInputAttachmentSchema.exactOptional().openapi({
      xml: { name: 'inputAttachments' },
    }),
    InputSpecification: InputSpecificationSchema.exactOptional().openapi({
      xml: { name: 'inputSpecification' },
      description: 'Specification of network and file inputs for this channel',
    }),
    LogLevel: LogLevelSchema.exactOptional().openapi({
      xml: { name: 'logLevel' },
      description: 'The log level to write to CloudWatch Logs.',
    }),
    Maintenance: MaintenanceUpdateSettingsSchema.exactOptional().openapi({
      xml: { name: 'maintenance' },
      description: 'Maintenance settings for this channel.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name of the channel.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description:
        'An optional Amazon Resource Name (ARN) of the role to assume when running the Channel. If you do not specify this on an update call but the role was previously set that role will be removed.',
    }),
  })
  .openapi({
    title: 'UpdateChannelRequest',
    description: 'A request to update a channel.',
    required: [],
  })
  .openapi('UpdateChannelRequest')

const UpdateInputDeviceRequestSchema = z
  .object({
    HdDeviceSettings: InputDeviceConfigurableSettingsSchema.exactOptional().openapi({
      xml: { name: 'hdDeviceSettings' },
      description: 'The settings that you want to apply to the HD input device.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'The name that you assigned to this input device (not the unique ID).',
    }),
    UhdDeviceSettings: InputDeviceConfigurableSettingsSchema.exactOptional().openapi({
      xml: { name: 'uhdDeviceSettings' },
      description: 'The settings that you want to apply to the UHD input device.',
    }),
  })
  .openapi({
    title: 'UpdateInputDeviceRequest',
    description: 'A request to update an input device.',
    required: [],
  })
  .openapi('UpdateInputDeviceRequest')

const ListOfInputDeviceRequestSchema = z
  .array(InputDeviceRequestSchema)
  .openapi({ description: 'Placeholder documentation for __listOfInputDeviceRequest' })
  .openapi('ListOfInputDeviceRequest')

const UpdateInputRequestSchema = z
  .object({
    Destinations: ListOfInputDestinationRequestSchema.exactOptional().openapi({
      xml: { name: 'destinations' },
      description: 'Destination settings for PUSH type inputs.',
    }),
    InputDevices: ListOfInputDeviceRequestSchema.exactOptional().openapi({
      xml: { name: 'inputDevices' },
      description: 'Settings for the devices.',
    }),
    InputSecurityGroups: ListOfStringSchema.exactOptional().openapi({
      xml: { name: 'inputSecurityGroups' },
      description: 'A list of security groups referenced by IDs to attach to the input.',
    }),
    MediaConnectFlows: ListOfMediaConnectFlowRequestSchema.exactOptional().openapi({
      xml: { name: 'mediaConnectFlows' },
      description:
        'A list of the MediaConnect Flow ARNs that you want to use as the source of the input. You can specify as few as one\nFlow and presently, as many as two. The only requirement is when you have more than one is that each Flow is in a\nseparate Availability Zone as this ensures your EML input is redundant to AZ issues.\n',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of the input.',
    }),
    RoleArn: StringSchema.exactOptional().openapi({
      xml: { name: 'roleArn' },
      description:
        'The Amazon Resource Name (ARN) of the role this input assumes during and after creation.',
    }),
    Sources: ListOfInputSourceRequestSchema.exactOptional().openapi({
      xml: { name: 'sources' },
      description:
        'The source URLs for a PULL-type input. Every PULL type input needs\nexactly two source URLs for redundancy.\nOnly specify sources for PULL type Inputs. Leave Destinations empty.\n',
    }),
  })
  .openapi({
    title: 'UpdateInputRequest',
    description: 'A request to update an input.',
    required: [],
  })
  .openapi('UpdateInputRequest')

const UpdateInputSecurityGroupRequestSchema = z
  .object({
    Tags: TagsSchema.exactOptional().openapi({
      xml: { name: 'tags' },
      description: 'A collection of key-value pairs.',
    }),
    WhitelistRules: ListOfInputWhitelistRuleCidrSchema.exactOptional().openapi({
      xml: { name: 'whitelistRules' },
      description: 'List of IPv4 CIDR addresses to whitelist',
    }),
  })
  .openapi({
    title: 'UpdateInputSecurityGroupRequest',
    description:
      'The request to update some combination of the Input Security Group name and the IPv4 CIDRs the Input Security Group should allow.',
    required: [],
  })
  .openapi('UpdateInputSecurityGroupRequest')

const UpdateMultiplexProgramRequestSchema = z
  .object({
    MultiplexProgramSettings: MultiplexProgramSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexProgramSettings' },
      description: 'The new settings for a multiplex program.',
    }),
  })
  .openapi({
    title: 'UpdateMultiplexProgramRequest',
    description: 'A request to update a program in a multiplex.',
    required: [],
  })
  .openapi('UpdateMultiplexProgramRequest')

const UpdateMultiplexRequestSchema = z
  .object({
    MultiplexSettings: MultiplexSettingsSchema.exactOptional().openapi({
      xml: { name: 'multiplexSettings' },
      description: 'The new settings for a multiplex.',
    }),
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of the multiplex.',
    }),
  })
  .openapi({
    title: 'UpdateMultiplexRequest',
    description: 'A request to update a multiplex.',
    required: [],
  })
  .openapi('UpdateMultiplexRequest')

const UpdateReservationRequestSchema = z
  .object({
    Name: StringSchema.exactOptional().openapi({
      xml: { name: 'name' },
      description: 'Name of the reservation',
    }),
    RenewalSettings: RenewalSettingsSchema.exactOptional().openapi({
      xml: { name: 'renewalSettings' },
      description: 'Renewal settings for the reservation',
    }),
  })
  .openapi({
    title: 'UpdateReservationRequest',
    description: 'Request to update a reservation',
    required: [],
  })
  .openapi('UpdateReservationRequest')

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

export const postProdInputDevicesInputDeviceIdAcceptRoute = createRoute({
  method: 'post',
  path: '/prod/inputDevices/{inputDeviceId}/accept',
  description:
    'Accept an incoming input device transfer. The ownership of the device will transfer to your AWS account.',
  operationId: 'AcceptInputDeviceTransfer',
  request: {
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
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the input device to accept. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AcceptInputDeviceTransferResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/prod/batch/delete',
  description: 'Starts delete of resources.',
  operationId: 'BatchDelete',
  request: {
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
              channelIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
              inputIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
              inputSecurityGroupIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
              multiplexIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
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
      content: { 'application/json': { schema: BatchDeleteResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdBatchStartRoute = createRoute({
  method: 'post',
  path: '/prod/batch/start',
  description: 'Starts existing resources',
  operationId: 'BatchStart',
  request: {
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
              channelIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
              multiplexIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
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
      content: { 'application/json': { schema: BatchStartResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdBatchStopRoute = createRoute({
  method: 'post',
  path: '/prod/batch/stop',
  description: 'Stops running resources',
  operationId: 'BatchStop',
  request: {
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
              channelIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
              multiplexIds: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
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
      content: { 'application/json': { schema: BatchStopResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getProdChannelsChannelIdScheduleRoute = createRoute({
  method: 'get',
  path: '/prod/channels/{channelId}/schedule',
  description: 'Get a channel schedule',
  operationId: 'DescribeSchedule',
  request: {
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'Id of the channel whose schedule is being updated.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
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
            description: '',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      content: { 'application/json': { schema: DescribeScheduleResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putProdChannelsChannelIdScheduleRoute = createRoute({
  method: 'put',
  path: '/prod/channels/{channelId}/schedule',
  description: 'Update a channel schedule',
  operationId: 'BatchUpdateSchedule',
  request: {
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'Id of the channel whose schedule is being updated.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              creates: z
                .object({
                  ScheduleActions: ListOfScheduleActionSchema.exactOptional().openapi({
                    xml: { name: 'scheduleActions' },
                    description: 'A list of schedule actions to create.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'A list of schedule actions to create (in a request) or that have been created (in a response).',
                  required: [],
                }),
              deletes: z
                .object({
                  ActionNames: ListOfStringSchema.exactOptional().openapi({
                    xml: { name: 'actionNames' },
                    description: 'A list of schedule actions to delete.',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'A list of schedule actions to delete.', required: [] }),
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
      content: { 'application/json': { schema: BatchUpdateScheduleResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteProdChannelsChannelIdScheduleRoute = createRoute({
  method: 'delete',
  path: '/prod/channels/{channelId}/schedule',
  description: 'Delete all schedule actions on a channel.',
  operationId: 'DeleteSchedule',
  request: {
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'Id of the channel whose schedule is being deleted.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteScheduleResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdInputDevicesInputDeviceIdCancelRoute = createRoute({
  method: 'post',
  path: '/prod/inputDevices/{inputDeviceId}/cancel',
  description: 'Cancel an input device transfer that you have requested.',
  operationId: 'CancelInputDeviceTransfer',
  request: {
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
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the input device to cancel. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: CancelInputDeviceTransferResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdClaimDeviceRoute = createRoute({
  method: 'post',
  path: '/prod/claimDevice',
  description:
    'Send a request to claim an AWS Elemental device that you have purchased from a third-party vendor. After the request succeeds, you will own the device.',
  operationId: 'ClaimDevice',
  request: {
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
              id: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
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
      content: { 'application/json': { schema: ClaimDeviceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdChannelsRoute = createRoute({
  method: 'get',
  path: '/prod/channels',
  description: 'Produces list of channels that have been created',
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
            description: '',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdChannelsRoute = createRoute({
  method: 'post',
  path: '/prod/channels',
  description: 'Creates a new channel',
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
              cdiInputSpecification: z
                .object({
                  Resolution: CdiInputResolutionSchema.exactOptional().openapi({
                    xml: { name: 'resolution' },
                    description: 'Maximum CDI input resolution',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for CdiInputSpecification',
                  required: [],
                }),
              channelClass: z
                .enum(['STANDARD', 'SINGLE_PIPELINE'])
                .exactOptional()
                .openapi({
                  description:
                    'A standard channel has two encoding pipelines and a single pipeline channel only has one.',
                }),
              destinations: z
                .array(OutputDestinationSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfOutputDestination',
                }),
              encoderSettings: z
                .object({
                  AudioDescriptions: ListOfAudioDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'audioDescriptions' },
                  }),
                  AvailBlanking: AvailBlankingSchema.exactOptional().openapi({
                    xml: { name: 'availBlanking' },
                    description: 'Settings for ad avail blanking.',
                  }),
                  AvailConfiguration: AvailConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'availConfiguration' },
                    description: 'Event-wide configuration settings for ad avail insertion.',
                  }),
                  BlackoutSlate: BlackoutSlateSchema.exactOptional().openapi({
                    xml: { name: 'blackoutSlate' },
                    description: 'Settings for blackout slate.',
                  }),
                  CaptionDescriptions: ListOfCaptionDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'captionDescriptions' },
                    description: 'Settings for caption decriptions',
                  }),
                  FeatureActivations: FeatureActivationsSchema.exactOptional().openapi({
                    xml: { name: 'featureActivations' },
                    description: 'Feature Activations',
                  }),
                  GlobalConfiguration: GlobalConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'globalConfiguration' },
                    description: 'Configuration settings that apply to the event as a whole.',
                  }),
                  MotionGraphicsConfiguration:
                    MotionGraphicsConfigurationSchema.exactOptional().openapi({
                      xml: { name: 'motionGraphicsConfiguration' },
                      description: 'Settings for motion graphics.',
                    }),
                  NielsenConfiguration: NielsenConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'nielsenConfiguration' },
                    description: 'Nielsen configuration settings.',
                  }),
                  OutputGroups: ListOfOutputGroupSchema.exactOptional().openapi({
                    xml: { name: 'outputGroups' },
                  }),
                  TimecodeConfig: TimecodeConfigSchema.exactOptional().openapi({
                    xml: { name: 'timecodeConfig' },
                    description:
                      'Contains settings used to acquire and adjust timecode information from inputs.',
                  }),
                  VideoDescriptions: ListOfVideoDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'videoDescriptions' },
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Encoder Settings', required: [] }),
              inputAttachments: z
                .array(InputAttachmentSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOfInputAttachment' }),
              inputSpecification: z
                .object({
                  Codec: InputCodecSchema.exactOptional().openapi({
                    xml: { name: 'codec' },
                    description: 'Input codec',
                  }),
                  MaximumBitrate: InputMaximumBitrateSchema.exactOptional().openapi({
                    xml: { name: 'maximumBitrate' },
                    description: 'Maximum input bitrate, categorized coarsely',
                  }),
                  Resolution: InputResolutionSchema.exactOptional().openapi({
                    xml: { name: 'resolution' },
                    description: 'Input resolution, categorized coarsely',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for InputSpecification',
                  required: [],
                }),
              logLevel: z
                .enum(['ERROR', 'WARNING', 'INFO', 'DEBUG', 'DISABLED'])
                .exactOptional()
                .openapi({ description: 'The log level the user wants for their channel.' }),
              maintenance: z
                .object({
                  MaintenanceDay: MaintenanceDaySchema.exactOptional().openapi({
                    xml: { name: 'maintenanceDay' },
                    description:
                      'Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.',
                  }),
                  MaintenanceStartTime: StringPattern010920300Schema.exactOptional().openapi({
                    xml: { name: 'maintenanceStartTime' },
                    description:
                      'Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for MaintenanceCreateSettings',
                  required: [],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              requestId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              reserved: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              roleArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for Tags' }),
              vpc: z
                .object({
                  PublicAddressAllocationIds: ListOfStringSchema.exactOptional().openapi({
                    xml: { name: 'publicAddressAllocationIds' },
                    description:
                      'List of public address allocation ids to associate with ENIs that will be created in Output VPC.\nMust specify one for SINGLE_PIPELINE, two for STANDARD channels\n',
                  }),
                  SecurityGroupIds: ListOfStringSchema.exactOptional().openapi({
                    xml: { name: 'securityGroupIds' },
                    description:
                      'A list of up to 5 EC2 VPC security group IDs to attach to the Output VPC network interfaces.\nIf none are specified then the VPC default security group will be used\n',
                  }),
                  SubnetIds: ListOfStringSchema.exactOptional().openapi({
                    xml: { name: 'subnetIds' },
                    description:
                      'A list of VPC subnet IDs from the same VPC.\nIf STANDARD channel, subnet IDs must be mapped to two unique availability zones (AZ).\n',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'The properties for a private VPC Output\nWhen this property is specified, the output egress addresses will be created in a user specified VPC\n',
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
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateChannelResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getProdInputsRoute = createRoute({
  method: 'get',
  path: '/prod/inputs',
  description: 'Produces list of inputs that have been created',
  operationId: 'ListInputs',
  request: {
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
            description: '',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      content: { 'application/json': { schema: ListInputsResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdInputsRoute = createRoute({
  method: 'post',
  path: '/prod/inputs',
  description: 'Create an input',
  operationId: 'CreateInput',
  request: {
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
              destinations: z
                .array(InputDestinationRequestSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfInputDestinationRequest',
                }),
              inputDevices: z
                .array(InputDeviceSettingsSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfInputDeviceSettings',
                }),
              inputSecurityGroups: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
              mediaConnectFlows: z
                .array(MediaConnectFlowRequestSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfMediaConnectFlowRequest',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              requestId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              roleArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              sources: z
                .array(InputSourceRequestSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfInputSourceRequest',
                }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for Tags' }),
              type: z
                .enum([
                  'UDP_PUSH',
                  'RTP_PUSH',
                  'RTMP_PUSH',
                  'RTMP_PULL',
                  'URL_PULL',
                  'MP4_FILE',
                  'MEDIACONNECT',
                  'INPUT_DEVICE',
                  'AWS_CDI',
                  'TS_FILE',
                ])
                .exactOptional()
                .openapi({
                  description:
                    'The different types of inputs that AWS Elemental MediaLive supports.',
                }),
              vpc: z
                .object({
                  SecurityGroupIds: ListOfStringSchema.exactOptional().openapi({
                    xml: { name: 'securityGroupIds' },
                    description:
                      'A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.\nRequires subnetIds. If none are specified then the VPC default security group will be used.\n',
                  }),
                  SubnetIds: ListOfStringSchema.exactOptional().openapi({
                    xml: { name: 'subnetIds' },
                    description:
                      'A list of 2 VPC subnet IDs from the same VPC.\nSubnet IDs must be mapped to two unique availability zones (AZ).\n',
                  }),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Settings for a private VPC Input.\nWhen this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.\nThis property requires setting the roleArn property on Input creation.\nNot compatible with the inputSecurityGroups property.\n',
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
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateInputResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdInputSecurityGroupsRoute = createRoute({
  method: 'get',
  path: '/prod/inputSecurityGroups',
  description: 'Produces a list of Input Security Groups for an account',
  operationId: 'ListInputSecurityGroups',
  request: {
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
            description: '',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      content: { 'application/json': { schema: ListInputSecurityGroupsResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdInputSecurityGroupsRoute = createRoute({
  method: 'post',
  path: '/prod/inputSecurityGroups',
  description: 'Creates a Input Security Group',
  operationId: 'CreateInputSecurityGroup',
  request: {
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
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for Tags' }),
              whitelistRules: z
                .array(InputWhitelistRuleCidrSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfInputWhitelistRuleCidr',
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
      content: { 'application/json': { schema: CreateInputSecurityGroupResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdMultiplexesRoute = createRoute({
  method: 'get',
  path: '/prod/multiplexes',
  description: 'Retrieve a list of the existing multiplexes.',
  operationId: 'ListMultiplexes',
  request: {
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
            description: 'The maximum number of items to return.',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to retrieve the next page of results.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      content: { 'application/json': { schema: ListMultiplexesResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdMultiplexesRoute = createRoute({
  method: 'post',
  path: '/prod/multiplexes',
  description: 'Create a new multiplex.',
  operationId: 'CreateMultiplex',
  request: {
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
              availabilityZones: z
                .array(StringSchema)
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
              multiplexSettings: z
                .object({
                  MaximumVideoBufferDelayMilliseconds:
                    IntegerMin800Max3000Schema.exactOptional().openapi({
                      xml: { name: 'maximumVideoBufferDelayMilliseconds' },
                      description: 'Maximum video buffer delay in milliseconds.',
                    }),
                  TransportStreamBitrate:
                    IntegerMin1000000Max100000000Schema.exactOptional().openapi({
                      xml: { name: 'transportStreamBitrate' },
                      description: 'Transport stream bit rate.',
                    }),
                  TransportStreamId: IntegerMin0Max65535Schema.exactOptional().openapi({
                    xml: { name: 'transportStreamId' },
                    description: 'Transport stream ID.',
                  }),
                  TransportStreamReservedBitrate:
                    IntegerMin0Max100000000Schema.exactOptional().openapi({
                      xml: { name: 'transportStreamReservedBitrate' },
                      description: 'Transport stream reserved bit rate.',
                    }),
                })
                .openapi({
                  description: 'Contains configuration for a Multiplex event',
                  required: [],
                }),
              name: z.string().openapi({ description: 'Placeholder documentation for __string' }),
              requestId: z
                .string()
                .openapi({ description: 'Placeholder documentation for __string' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for Tags' }),
            })
            .openapi({ required: ['availabilityZones', 'multiplexSettings', 'name', 'requestId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMultiplexResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getProdMultiplexesMultiplexIdProgramsRoute = createRoute({
  method: 'get',
  path: '/prod/multiplexes/{multiplexId}/programs',
  description: 'List the programs that currently exist for a specific multiplex.',
  operationId: 'ListMultiplexPrograms',
  request: {
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
            description: 'The maximum number of items to return.',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'The token to retrieve the next page of results.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'The ID of the multiplex that the programs belong to.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListMultiplexProgramsResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdMultiplexesMultiplexIdProgramsRoute = createRoute({
  method: 'post',
  path: '/prod/multiplexes/{multiplexId}/programs',
  description: 'Create a new program in the multiplex.',
  operationId: 'CreateMultiplexProgram',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'ID of the multiplex where the program is to be created.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              multiplexProgramSettings: z
                .object({
                  PreferredChannelPipeline: PreferredChannelPipelineSchema.exactOptional().openapi({
                    xml: { name: 'preferredChannelPipeline' },
                    description:
                      'Indicates which pipeline is preferred by the multiplex for program ingest.',
                  }),
                  ProgramNumber: IntegerMin0Max65535Schema.exactOptional().openapi({
                    xml: { name: 'programNumber' },
                    description: 'Unique program number.',
                  }),
                  ServiceDescriptor:
                    MultiplexProgramServiceDescriptorSchema.exactOptional().openapi({
                      xml: { name: 'serviceDescriptor' },
                      description:
                        'Transport stream service descriptor configuration for the Multiplex program.',
                    }),
                  VideoSettings: MultiplexVideoSettingsSchema.exactOptional().openapi({
                    xml: { name: 'videoSettings' },
                    description: 'Program video settings configuration.',
                  }),
                })
                .openapi({
                  description: 'Multiplex Program settings configuration.',
                  required: [],
                }),
              programName: z
                .string()
                .openapi({ description: 'Placeholder documentation for __string' }),
              requestId: z
                .string()
                .openapi({ description: 'Placeholder documentation for __string' }),
            })
            .openapi({ required: ['multiplexProgramSettings', 'programName', 'requestId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateMultiplexProgramResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdInputsInputIdPartnersRoute = createRoute({
  method: 'post',
  path: '/prod/inputs/{inputId}/partners',
  description: 'Create a partner input',
  operationId: 'CreatePartnerInput',
  request: {
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
      inputId: z
        .string()
        .openapi({
          param: {
            name: 'inputId',
            in: 'path',
            required: true,
            description: 'Unique ID of the input.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              requestId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for Tags' }),
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
      content: { 'application/json': { schema: CreatePartnerInputResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/prod/tags/{resource-arn}',
  description: 'Produces list of tags that have been created for a resource',
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
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const postProdTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/prod/tags/{resource-arn}',
  description: 'Create tags for a resource',
  operationId: 'CreateTags',
  request: {
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
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for Tags' }),
            })
            .openapi({ required: [] }),
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
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getProdChannelsChannelIdRoute = createRoute({
  method: 'get',
  path: '/prod/channels/{channelId}',
  description: 'Gets details about a channel',
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'channel ID',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeChannelResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putProdChannelsChannelIdRoute = createRoute({
  method: 'put',
  path: '/prod/channels/{channelId}',
  description: 'Updates a channel.',
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'channel ID',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              cdiInputSpecification: z
                .object({
                  Resolution: CdiInputResolutionSchema.exactOptional().openapi({
                    xml: { name: 'resolution' },
                    description: 'Maximum CDI input resolution',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for CdiInputSpecification',
                  required: [],
                }),
              destinations: z
                .array(OutputDestinationSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfOutputDestination',
                }),
              encoderSettings: z
                .object({
                  AudioDescriptions: ListOfAudioDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'audioDescriptions' },
                  }),
                  AvailBlanking: AvailBlankingSchema.exactOptional().openapi({
                    xml: { name: 'availBlanking' },
                    description: 'Settings for ad avail blanking.',
                  }),
                  AvailConfiguration: AvailConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'availConfiguration' },
                    description: 'Event-wide configuration settings for ad avail insertion.',
                  }),
                  BlackoutSlate: BlackoutSlateSchema.exactOptional().openapi({
                    xml: { name: 'blackoutSlate' },
                    description: 'Settings for blackout slate.',
                  }),
                  CaptionDescriptions: ListOfCaptionDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'captionDescriptions' },
                    description: 'Settings for caption decriptions',
                  }),
                  FeatureActivations: FeatureActivationsSchema.exactOptional().openapi({
                    xml: { name: 'featureActivations' },
                    description: 'Feature Activations',
                  }),
                  GlobalConfiguration: GlobalConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'globalConfiguration' },
                    description: 'Configuration settings that apply to the event as a whole.',
                  }),
                  MotionGraphicsConfiguration:
                    MotionGraphicsConfigurationSchema.exactOptional().openapi({
                      xml: { name: 'motionGraphicsConfiguration' },
                      description: 'Settings for motion graphics.',
                    }),
                  NielsenConfiguration: NielsenConfigurationSchema.exactOptional().openapi({
                    xml: { name: 'nielsenConfiguration' },
                    description: 'Nielsen configuration settings.',
                  }),
                  OutputGroups: ListOfOutputGroupSchema.exactOptional().openapi({
                    xml: { name: 'outputGroups' },
                  }),
                  TimecodeConfig: TimecodeConfigSchema.exactOptional().openapi({
                    xml: { name: 'timecodeConfig' },
                    description:
                      'Contains settings used to acquire and adjust timecode information from inputs.',
                  }),
                  VideoDescriptions: ListOfVideoDescriptionSchema.exactOptional().openapi({
                    xml: { name: 'videoDescriptions' },
                  }),
                })
                .exactOptional()
                .openapi({ description: 'Encoder Settings', required: [] }),
              inputAttachments: z
                .array(InputAttachmentSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOfInputAttachment' }),
              inputSpecification: z
                .object({
                  Codec: InputCodecSchema.exactOptional().openapi({
                    xml: { name: 'codec' },
                    description: 'Input codec',
                  }),
                  MaximumBitrate: InputMaximumBitrateSchema.exactOptional().openapi({
                    xml: { name: 'maximumBitrate' },
                    description: 'Maximum input bitrate, categorized coarsely',
                  }),
                  Resolution: InputResolutionSchema.exactOptional().openapi({
                    xml: { name: 'resolution' },
                    description: 'Input resolution, categorized coarsely',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for InputSpecification',
                  required: [],
                }),
              logLevel: z
                .enum(['ERROR', 'WARNING', 'INFO', 'DEBUG', 'DISABLED'])
                .exactOptional()
                .openapi({ description: 'The log level the user wants for their channel.' }),
              maintenance: z
                .object({
                  MaintenanceDay: MaintenanceDaySchema.exactOptional().openapi({
                    xml: { name: 'maintenanceDay' },
                    description:
                      'Choose one day of the week for maintenance. The chosen day is used for all future maintenance windows.',
                  }),
                  MaintenanceScheduledDate: StringSchema.exactOptional().openapi({
                    xml: { name: 'maintenanceScheduledDate' },
                    description:
                      'Choose a specific date for maintenance to occur. The chosen date is used for the next maintenance window only.',
                  }),
                  MaintenanceStartTime: StringPattern010920300Schema.exactOptional().openapi({
                    xml: { name: 'maintenanceStartTime' },
                    description:
                      'Choose the hour that maintenance will start. The chosen time is used for all future maintenance windows.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for MaintenanceUpdateSettings',
                  required: [],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              roleArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
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
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteProdChannelsChannelIdRoute = createRoute({
  method: 'delete',
  path: '/prod/channels/{channelId}',
  description: 'Starts deletion of channel. The associated outputs are also deleted.',
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'Unique ID of the channel.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteChannelResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getProdInputsInputIdRoute = createRoute({
  method: 'get',
  path: '/prod/inputs/{inputId}',
  description: 'Produces details about an input',
  operationId: 'DescribeInput',
  request: {
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
      inputId: z
        .string()
        .openapi({
          param: {
            name: 'inputId',
            in: 'path',
            required: true,
            description: 'Unique ID of the input',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInputResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putProdInputsInputIdRoute = createRoute({
  method: 'put',
  path: '/prod/inputs/{inputId}',
  description: 'Updates an input.',
  operationId: 'UpdateInput',
  request: {
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
      inputId: z
        .string()
        .openapi({
          param: {
            name: 'inputId',
            in: 'path',
            required: true,
            description: 'Unique ID of the input.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              destinations: z
                .array(InputDestinationRequestSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfInputDestinationRequest',
                }),
              inputDevices: z
                .array(InputDeviceRequestSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfInputDeviceRequest',
                }),
              inputSecurityGroups: z
                .array(StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __listOf__string' }),
              mediaConnectFlows: z
                .array(MediaConnectFlowRequestSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfMediaConnectFlowRequest',
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              roleArn: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              sources: z
                .array(InputSourceRequestSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfInputSourceRequest',
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
      content: { 'application/json': { schema: UpdateInputResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteProdInputsInputIdRoute = createRoute({
  method: 'delete',
  path: '/prod/inputs/{inputId}',
  description: 'Deletes the input end point',
  operationId: 'DeleteInput',
  request: {
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
      inputId: z
        .string()
        .openapi({
          param: {
            name: 'inputId',
            in: 'path',
            required: true,
            description: 'Unique ID of the input',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInputResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getProdInputSecurityGroupsInputSecurityGroupIdRoute = createRoute({
  method: 'get',
  path: '/prod/inputSecurityGroups/{inputSecurityGroupId}',
  description: 'Produces a summary of an Input Security Group',
  operationId: 'DescribeInputSecurityGroup',
  request: {
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
      inputSecurityGroupId: z
        .string()
        .openapi({
          param: {
            name: 'inputSecurityGroupId',
            in: 'path',
            required: true,
            description: 'The id of the Input Security Group to describe',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInputSecurityGroupResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putProdInputSecurityGroupsInputSecurityGroupIdRoute = createRoute({
  method: 'put',
  path: '/prod/inputSecurityGroups/{inputSecurityGroupId}',
  description: "Update an Input Security Group's Whilelists.",
  operationId: 'UpdateInputSecurityGroup',
  request: {
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
      inputSecurityGroupId: z
        .string()
        .openapi({
          param: {
            name: 'inputSecurityGroupId',
            in: 'path',
            required: true,
            description: 'The id of the Input Security Group to update.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for Tags' }),
              whitelistRules: z
                .array(InputWhitelistRuleCidrSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfInputWhitelistRuleCidr',
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
      content: { 'application/json': { schema: UpdateInputSecurityGroupResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteProdInputSecurityGroupsInputSecurityGroupIdRoute = createRoute({
  method: 'delete',
  path: '/prod/inputSecurityGroups/{inputSecurityGroupId}',
  description: 'Deletes an Input Security Group',
  operationId: 'DeleteInputSecurityGroup',
  request: {
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
      inputSecurityGroupId: z
        .string()
        .openapi({
          param: {
            name: 'inputSecurityGroupId',
            in: 'path',
            required: true,
            description: 'The Input Security Group to delete',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteInputSecurityGroupResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdMultiplexesMultiplexIdRoute = createRoute({
  method: 'get',
  path: '/prod/multiplexes/{multiplexId}',
  description: 'Gets details about a multiplex.',
  operationId: 'DescribeMultiplex',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'The ID of the multiplex.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMultiplexResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putProdMultiplexesMultiplexIdRoute = createRoute({
  method: 'put',
  path: '/prod/multiplexes/{multiplexId}',
  description: 'Updates a multiplex.',
  operationId: 'UpdateMultiplex',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'ID of the multiplex to update.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              multiplexSettings: z
                .object({
                  MaximumVideoBufferDelayMilliseconds:
                    IntegerMin800Max3000Schema.exactOptional().openapi({
                      xml: { name: 'maximumVideoBufferDelayMilliseconds' },
                      description: 'Maximum video buffer delay in milliseconds.',
                    }),
                  TransportStreamBitrate:
                    IntegerMin1000000Max100000000Schema.exactOptional().openapi({
                      xml: { name: 'transportStreamBitrate' },
                      description: 'Transport stream bit rate.',
                    }),
                  TransportStreamId: IntegerMin0Max65535Schema.exactOptional().openapi({
                    xml: { name: 'transportStreamId' },
                    description: 'Transport stream ID.',
                  }),
                  TransportStreamReservedBitrate:
                    IntegerMin0Max100000000Schema.exactOptional().openapi({
                      xml: { name: 'transportStreamReservedBitrate' },
                      description: 'Transport stream reserved bit rate.',
                    }),
                })
                .exactOptional()
                .openapi({
                  description: 'Contains configuration for a Multiplex event',
                  required: [],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
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
      content: { 'application/json': { schema: UpdateMultiplexResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteProdMultiplexesMultiplexIdRoute = createRoute({
  method: 'delete',
  path: '/prod/multiplexes/{multiplexId}',
  description: 'Delete a multiplex. The multiplex must be idle.',
  operationId: 'DeleteMultiplex',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'The ID of the multiplex.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMultiplexResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getProdMultiplexesMultiplexIdProgramsProgramNameRoute = createRoute({
  method: 'get',
  path: '/prod/multiplexes/{multiplexId}/programs/{programName}',
  description: 'Get the details for a program in a multiplex.',
  operationId: 'DescribeMultiplexProgram',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'The ID of the multiplex that the program belongs to.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      programName: z
        .string()
        .openapi({
          param: {
            name: 'programName',
            in: 'path',
            required: true,
            description: 'The name of the program.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeMultiplexProgramResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putProdMultiplexesMultiplexIdProgramsProgramNameRoute = createRoute({
  method: 'put',
  path: '/prod/multiplexes/{multiplexId}/programs/{programName}',
  description: 'Update a program in a multiplex.',
  operationId: 'UpdateMultiplexProgram',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'The ID of the multiplex of the program to update.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      programName: z
        .string()
        .openapi({
          param: {
            name: 'programName',
            in: 'path',
            required: true,
            description: 'The name of the program to update.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              multiplexProgramSettings: z
                .object({
                  PreferredChannelPipeline: PreferredChannelPipelineSchema.exactOptional().openapi({
                    xml: { name: 'preferredChannelPipeline' },
                    description:
                      'Indicates which pipeline is preferred by the multiplex for program ingest.',
                  }),
                  ProgramNumber: IntegerMin0Max65535Schema.exactOptional().openapi({
                    xml: { name: 'programNumber' },
                    description: 'Unique program number.',
                  }),
                  ServiceDescriptor:
                    MultiplexProgramServiceDescriptorSchema.exactOptional().openapi({
                      xml: { name: 'serviceDescriptor' },
                      description:
                        'Transport stream service descriptor configuration for the Multiplex program.',
                    }),
                  VideoSettings: MultiplexVideoSettingsSchema.exactOptional().openapi({
                    xml: { name: 'videoSettings' },
                    description: 'Program video settings configuration.',
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Multiplex Program settings configuration.',
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
      content: { 'application/json': { schema: UpdateMultiplexProgramResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteProdMultiplexesMultiplexIdProgramsProgramNameRoute = createRoute({
  method: 'delete',
  path: '/prod/multiplexes/{multiplexId}/programs/{programName}',
  description: 'Delete a program from a multiplex.',
  operationId: 'DeleteMultiplexProgram',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'The ID of the multiplex that the program belongs to.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      programName: z
        .string()
        .openapi({
          param: {
            name: 'programName',
            in: 'path',
            required: true,
            description: 'The multiplex program name.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteMultiplexProgramResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const getProdReservationsReservationIdRoute = createRoute({
  method: 'get',
  path: '/prod/reservations/{reservationId}',
  description: 'Get details for a reservation.',
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
      reservationId: z
        .string()
        .openapi({
          param: {
            name: 'reservationId',
            in: 'path',
            required: true,
            description: "Unique reservation ID, e.g. '1234567'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeReservationResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putProdReservationsReservationIdRoute = createRoute({
  method: 'put',
  path: '/prod/reservations/{reservationId}',
  description: 'Update reservation.',
  operationId: 'UpdateReservation',
  request: {
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
      reservationId: z
        .string()
        .openapi({
          param: {
            name: 'reservationId',
            in: 'path',
            required: true,
            description: "Unique reservation ID, e.g. '1234567'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              renewalSettings: z
                .object({
                  AutomaticRenewal: ReservationAutomaticRenewalSchema.exactOptional().openapi({
                    xml: { name: 'automaticRenewal' },
                    description: 'Automatic renewal status for the reservation',
                  }),
                  RenewalCount: IntegerMin1Schema.exactOptional().openapi({
                    xml: { name: 'renewalCount' },
                    description: 'Count for the reservation renewal',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'The Renewal settings for Reservations', required: [] }),
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
      content: { 'application/json': { schema: UpdateReservationResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteProdReservationsReservationIdRoute = createRoute({
  method: 'delete',
  path: '/prod/reservations/{reservationId}',
  description: 'Delete an expired reservation.',
  operationId: 'DeleteReservation',
  request: {
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
      reservationId: z
        .string()
        .openapi({
          param: {
            name: 'reservationId',
            in: 'path',
            required: true,
            description: "Unique reservation ID, e.g. '1234567'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DeleteReservationResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const deleteProdTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/prod/tags/{resource-arn}#tagKeys',
  description: 'Removes tags for a resource',
  operationId: 'DeleteTags',
  request: {
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
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
            description: 'An array of tag keys to delete',
            schema: {
              type: 'array',
              description: 'Placeholder documentation for __listOf__string',
              items: { $ref: '#/components/schemas/__string' },
            },
          },
          description: 'Placeholder documentation for __listOf__string',
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
    483: {
      description: 'ForbiddenException',
      content: { 'application/json': { schema: ForbiddenExceptionSchema } },
    },
  },
})

export const getProdInputDevicesInputDeviceIdRoute = createRoute({
  method: 'get',
  path: '/prod/inputDevices/{inputDeviceId}',
  description: 'Gets the details for the input device',
  operationId: 'DescribeInputDevice',
  request: {
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
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description: 'The unique ID of this input device. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInputDeviceResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const putProdInputDevicesInputDeviceIdRoute = createRoute({
  method: 'put',
  path: '/prod/inputDevices/{inputDeviceId}',
  description: 'Updates the parameters for the input device.',
  operationId: 'UpdateInputDevice',
  request: {
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
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description: 'The unique ID of the input device. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              hdDeviceSettings: z
                .object({
                  ConfiguredInput: InputDeviceConfiguredInputSchema.exactOptional().openapi({
                    xml: { name: 'configuredInput' },
                    description:
                      "The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.",
                  }),
                  MaxBitrate: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'maxBitrate' },
                    description:
                      'The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.',
                  }),
                  LatencyMs: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'latencyMs' },
                    description: "The Link device's buffer size (latency) in milliseconds (ms).",
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Configurable settings for the input device.',
                  required: [],
                }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              uhdDeviceSettings: z
                .object({
                  ConfiguredInput: InputDeviceConfiguredInputSchema.exactOptional().openapi({
                    xml: { name: 'configuredInput' },
                    description:
                      "The input source that you want to use. If the device has a source connected to only one of its input ports, or if you don't care which source the device sends, specify Auto. If the device has sources connected to both its input ports, and you want to use a specific source, specify the source.",
                  }),
                  MaxBitrate: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'maxBitrate' },
                    description:
                      'The maximum bitrate in bits per second. Set a value here to throttle the bitrate of the source video.',
                  }),
                  LatencyMs: IntegerSchema.exactOptional().openapi({
                    xml: { name: 'latencyMs' },
                    description: "The Link device's buffer size (latency) in milliseconds (ms).",
                  }),
                })
                .exactOptional()
                .openapi({
                  description: 'Configurable settings for the input device.',
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
      content: { 'application/json': { schema: UpdateInputDeviceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdInputDevicesInputDeviceIdThumbnailDataAcceptRoute = createRoute({
  method: 'get',
  path: '/prod/inputDevices/{inputDeviceId}/thumbnailData#accept',
  description: 'Get the latest thumbnail data for the input device.',
  operationId: 'DescribeInputDeviceThumbnail',
  request: {
    headers: z.object({
      'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
      'X-Amz-Date': XAmzDateParamsSchema,
      'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
      'X-Amz-Credential': XAmzCredentialParamsSchema,
      'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
      'X-Amz-Signature': XAmzSignatureParamsSchema,
      'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
      accept: z
        .literal('image/jpeg')
        .openapi({
          param: {
            name: 'accept',
            in: 'header',
            required: true,
            description: 'The HTTP Accept header. Indicates the requested type for the thumbnail.',
            schema: {
              type: 'string',
              enum: ['image/jpeg'],
              description: 'The HTTP Accept header. Indicates the requested type fothe thumbnail.',
            },
          },
          description: 'The HTTP Accept header. Indicates the requested type fothe thumbnail.',
        }),
    }),
    params: z.object({
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description: 'The unique ID of this input device. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeInputDeviceThumbnailResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdOfferingsOfferingIdRoute = createRoute({
  method: 'get',
  path: '/prod/offerings/{offeringId}',
  description: 'Get details for an offering.',
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
      offeringId: z
        .string()
        .openapi({
          param: {
            name: 'offeringId',
            in: 'path',
            required: true,
            description: "Unique offering ID, e.g. '87654321'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeOfferingResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdInputDeviceTransfersTransferTypeRoute = createRoute({
  method: 'get',
  path: '/prod/inputDeviceTransfers#transferType',
  description:
    'List input devices that are currently being transferred. List input devices that you are transferring from your AWS account or input devices that another AWS account is transferring to you.',
  operationId: 'ListInputDeviceTransfers',
  request: {
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
            description: '',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      transferType: z
        .string()
        .openapi({
          param: {
            name: 'transferType',
            in: 'query',
            required: true,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      content: { 'application/json': { schema: ListInputDeviceTransfersResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdInputDevicesRoute = createRoute({
  method: 'get',
  path: '/prod/inputDevices',
  description: 'List input devices',
  operationId: 'ListInputDevices',
  request: {
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
            description: '',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      content: { 'application/json': { schema: ListInputDevicesResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdOfferingsRoute = createRoute({
  method: 'get',
  path: '/prod/offerings',
  description: 'List offerings available for purchase.',
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
      channelClass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'channelClass',
            in: 'query',
            required: false,
            description: "Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      channelConfiguration: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'channelConfiguration',
            in: 'query',
            required: false,
            description:
              "Filter to offerings that match the configuration of an existing channel, e.g. '2345678' (a channel ID)\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      codec: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'codec',
            in: 'query',
            required: false,
            description: "Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      duration: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'duration',
            in: 'query',
            required: false,
            description: "Filter by offering duration, e.g. '12'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
            description: '',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      maximumBitrate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumBitrate',
            in: 'query',
            required: false,
            description: "Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      maximumFramerate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumFramerate',
            in: 'query',
            required: false,
            description: "Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      resolution: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resolution',
            in: 'query',
            required: false,
            description: "Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      resourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description: "Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      specialFeature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'specialFeature',
            in: 'query',
            required: false,
            description: "Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      videoQuality: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'videoQuality',
            in: 'query',
            required: false,
            description: "Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const getProdReservationsRoute = createRoute({
  method: 'get',
  path: '/prod/reservations',
  description: 'List purchased reservations.',
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
      channelClass: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'channelClass',
            in: 'query',
            required: false,
            description: "Filter by channel class, 'STANDARD' or 'SINGLE_PIPELINE'\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      codec: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'codec',
            in: 'query',
            required: false,
            description: "Filter by codec, 'AVC', 'HEVC', 'MPEG2', 'AUDIO', or 'LINK'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
            description: '',
            schema: {
              type: 'integer',
              description: 'Placeholder documentation for MaxResults',
              minimum: 1,
              maximum: 1000,
            },
          },
          description: 'Placeholder documentation for MaxResults',
        }),
      maximumBitrate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumBitrate',
            in: 'query',
            required: false,
            description: "Filter by bitrate, 'MAX_10_MBPS', 'MAX_20_MBPS', or 'MAX_50_MBPS'\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      maximumFramerate: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'maximumFramerate',
            in: 'query',
            required: false,
            description: "Filter by framerate, 'MAX_30_FPS' or 'MAX_60_FPS'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: '',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      resolution: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resolution',
            in: 'query',
            required: false,
            description: "Filter by resolution, 'SD', 'HD', 'FHD', or 'UHD'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      resourceType: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'resourceType',
            in: 'query',
            required: false,
            description: "Filter by resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      specialFeature: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'specialFeature',
            in: 'query',
            required: false,
            description: "Filter by special feature, 'ADVANCED_AUDIO' or 'AUDIO_NORMALIZATION'\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
      videoQuality: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'videoQuality',
            in: 'query',
            required: false,
            description: "Filter by video quality, 'STANDARD', 'ENHANCED', or 'PREMIUM'\n",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdOfferingsOfferingIdPurchaseRoute = createRoute({
  method: 'post',
  path: '/prod/offerings/{offeringId}/purchase',
  description: 'Purchase an offering and create a reservation.',
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
      offeringId: z
        .string()
        .openapi({
          param: {
            name: 'offeringId',
            in: 'path',
            required: true,
            description: "Offering to purchase, e.g. '87654321'",
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              count: z
                .int()
                .min(1)
                .openapi({ description: 'Placeholder documentation for __integerMin1' }),
              name: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              renewalSettings: z
                .object({
                  AutomaticRenewal: ReservationAutomaticRenewalSchema.exactOptional().openapi({
                    xml: { name: 'automaticRenewal' },
                    description: 'Automatic renewal status for the reservation',
                  }),
                  RenewalCount: IntegerMin1Schema.exactOptional().openapi({
                    xml: { name: 'renewalCount' },
                    description: 'Count for the reservation renewal',
                  }),
                })
                .exactOptional()
                .openapi({ description: 'The Renewal settings for Reservations', required: [] }),
              requestId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              start: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for Tags' }),
            })
            .openapi({ required: ['count'] }),
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdInputDevicesInputDeviceIdRebootRoute = createRoute({
  method: 'post',
  path: '/prod/inputDevices/{inputDeviceId}/reboot',
  description:
    'Send a reboot command to the specified input device. The device will begin rebooting within a few seconds of sending the command. When the reboot is complete, the device’s connection status will change to connected.',
  operationId: 'RebootInputDevice',
  request: {
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
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the input device to reboot. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              force: z
                .enum(['NO', 'YES'])
                .exactOptional()
                .openapi({ description: 'Whether or not to force reboot the input device.' }),
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
      content: { 'application/json': { schema: RebootInputDeviceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdInputDevicesInputDeviceIdRejectRoute = createRoute({
  method: 'post',
  path: '/prod/inputDevices/{inputDeviceId}/reject',
  description: 'Reject the transfer of the specified input device to your AWS account.',
  operationId: 'RejectInputDeviceTransfer',
  request: {
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
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the input device to reject. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RejectInputDeviceTransferResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdChannelsChannelIdStartRoute = createRoute({
  method: 'post',
  path: '/prod/channels/{channelId}/start',
  description: 'Starts an existing channel',
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'A request to start a channel',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartChannelResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowRoute = createRoute({
  method: 'post',
  path: '/prod/inputDevices/{inputDeviceId}/startInputDeviceMaintenanceWindow',
  description:
    'Start a maintenance window for the specified input device. Starting a maintenance window will give the device up to two hours to install software. If the device was streaming prior to the maintenance, it will resume streaming when the software is fully installed. Devices automatically install updates while they are powered on and their MediaLive channels are stopped. A maintenance window allows you to update a device without having to stop MediaLive channels that use the device. The device must remain powered on and connected to the internet for the duration of the maintenance.',
  operationId: 'StartInputDeviceMaintenanceWindow',
  request: {
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
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description:
              'The unique ID of the input device to start a maintenance window for. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartInputDeviceMaintenanceWindowResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postProdMultiplexesMultiplexIdStartRoute = createRoute({
  method: 'post',
  path: '/prod/multiplexes/{multiplexId}/start',
  description:
    'Start (run) the multiplex. Starting the multiplex does not start the channels. You must explicitly start each channel.',
  operationId: 'StartMultiplex',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'The ID of the multiplex.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartMultiplexResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdChannelsChannelIdStopRoute = createRoute({
  method: 'post',
  path: '/prod/channels/{channelId}/stop',
  description: 'Stops a running channel',
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'A request to stop a running channel',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StopChannelResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdMultiplexesMultiplexIdStopRoute = createRoute({
  method: 'post',
  path: '/prod/multiplexes/{multiplexId}/stop',
  description:
    "Stops a running multiplex. If the multiplex isn't running, this action has no effect.",
  operationId: 'StopMultiplex',
  request: {
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
      multiplexId: z
        .string()
        .openapi({
          param: {
            name: 'multiplexId',
            in: 'path',
            required: true,
            description: 'The ID of the multiplex.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StopMultiplexResponseSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    484: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    485: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    486: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    487: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const postProdInputDevicesInputDeviceIdTransferRoute = createRoute({
  method: 'post',
  path: '/prod/inputDevices/{inputDeviceId}/transfer',
  description:
    'Start an input device transfer to another AWS account. After you make the request, the other account must accept or reject the transfer.',
  operationId: 'TransferInputDevice',
  request: {
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
      inputDeviceId: z
        .string()
        .openapi({
          param: {
            name: 'inputDeviceId',
            in: 'path',
            required: true,
            description: 'The unique ID of this input device. For example, hd-123456789abcdef.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              targetCustomerId: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              targetRegion: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
              transferMessage: z
                .string()
                .exactOptional()
                .openapi({ description: 'Placeholder documentation for __string' }),
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
      content: { 'application/json': { schema: TransferInputDeviceResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})

export const putProdChannelsChannelIdChannelClassRoute = createRoute({
  method: 'put',
  path: '/prod/channels/{channelId}/channelClass',
  description: 'Changes the class of the channel.',
  operationId: 'UpdateChannelClass',
  request: {
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
      channelId: z
        .string()
        .openapi({
          param: {
            name: 'channelId',
            in: 'path',
            required: true,
            description: 'Channel Id of the channel whose class should be updated.',
            schema: { type: 'string', description: 'Placeholder documentation for __string' },
          },
          description: 'Placeholder documentation for __string',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              channelClass: z
                .enum(['STANDARD', 'SINGLE_PIPELINE'])
                .openapi({
                  description:
                    'A standard channel has two encoding pipelines and a single pipeline channel only has one.',
                }),
              destinations: z
                .array(OutputDestinationSchema)
                .exactOptional()
                .openapi({
                  description: 'Placeholder documentation for __listOfOutputDestination',
                }),
            })
            .openapi({ required: ['channelClass'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdateChannelClassResponseSchema } },
    },
    480: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    481: {
      description: 'UnprocessableEntityException',
      content: { 'application/json': { schema: UnprocessableEntityExceptionSchema } },
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
      description: 'BadGatewayException',
      content: { 'application/json': { schema: BadGatewayExceptionSchema } },
    },
    485: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    486: {
      description: 'GatewayTimeoutException',
      content: { 'application/json': { schema: GatewayTimeoutExceptionSchema } },
    },
    487: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    488: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
  },
})
