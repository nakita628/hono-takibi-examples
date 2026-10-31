import { createRoute, z } from '@hono/zod-openapi'

const PayloadSchema = z.string().openapi('Payload')

const GetClipOutputSchema = z
  .object({
    Payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            'Traditional MP4 file that contains the media clip from the specified video stream. The output will contain the first 100 MB or the first 200 fragments from the specified start timestamp. For more information, see <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>. ',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetClipOutput')

const ClipFragmentSelectorTypeSchema = z
  .enum(['PRODUCER_TIMESTAMP', 'SERVER_TIMESTAMP'])
  .openapi('ClipFragmentSelectorType')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ClipTimestampRangeSchema = z
  .object({
    StartTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The starting timestamp in the range of timestamps for which to return fragments. </p> <p>Only fragments that start exactly at or after <code>StartTimestamp</code> are included in the session. Fragments that start before <code>StartTimestamp</code> and continue past it aren't included in the session. If <code>FragmentSelectorType</code> is <code>SERVER_TIMESTAMP</code>, the <code>StartTimestamp</code> must be later than the stream head. </p>",
        }),
    ),
    EndTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end of the timestamp range for the requested media.</p> <p>This value must be within 24 hours of the specified <code>StartTimestamp</code>, and it must be later than the <code>StartTimestamp</code> value. If <code>FragmentSelectorType</code> for the request is <code>SERVER_TIMESTAMP</code>, this value must be in the past. </p> <p>This value is inclusive. The <code>EndTimestamp</code> is compared to the (starting) timestamp of the fragment. Fragments that start before the <code>EndTimestamp</code> value and continue past it are included in the session. </p>',
        }),
    ),
  })
  .openapi({
    required: ['StartTimestamp', 'EndTimestamp'],
    description: 'The range of timestamps for which to return fragments.',
  })
  .openapi('ClipTimestampRange')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const InvalidArgumentExceptionSchema = z.any().openapi('InvalidArgumentException')

const ClientLimitExceededExceptionSchema = z.any().openapi('ClientLimitExceededException')

const NotAuthorizedExceptionSchema = z.any().openapi('NotAuthorizedException')

const UnsupportedStreamMediaTypeExceptionSchema = z
  .any()
  .openapi('UnsupportedStreamMediaTypeException')

const MissingCodecPrivateDataExceptionSchema = z.any().openapi('MissingCodecPrivateDataException')

const InvalidCodecPrivateDataExceptionSchema = z.any().openapi('InvalidCodecPrivateDataException')

const InvalidMediaFrameExceptionSchema = z.any().openapi('InvalidMediaFrameException')

const NoDataRetentionExceptionSchema = z.any().openapi('NoDataRetentionException')

const DASHStreamingSessionURLSchema = z.string().openapi('DASHStreamingSessionURL')

const GetDASHStreamingSessionURLOutputSchema = z
  .object({
    DASHStreamingSessionURL: DASHStreamingSessionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL (containing the session token) that a media player can use to retrieve the MPEG-DASH manifest.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDASHStreamingSessionURLOutput')

const DASHFragmentSelectorTypeSchema = z
  .enum(['PRODUCER_TIMESTAMP', 'SERVER_TIMESTAMP'])
  .openapi('DASHFragmentSelectorType')

const DASHTimestampRangeSchema = z
  .object({
    StartTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The start of the timestamp range for the requested media.</p> <p>If the <code>DASHTimestampRange</code> value is specified, the <code>StartTimestamp</code> value is required.</p> <p>Only fragments that start exactly at or after <code>StartTimestamp</code> are included in the session. Fragments that start before <code>StartTimestamp</code> and continue past it aren't included in the session. If <code>FragmentSelectorType</code> is <code>SERVER_TIMESTAMP</code>, the <code>StartTimestamp</code> must be later than the stream head. </p>",
        }),
    ).exactOptional(),
    EndTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end of the timestamp range for the requested media. This value must be within 24 hours of the specified <code>StartTimestamp</code>, and it must be later than the <code>StartTimestamp</code> value.</p> <p>If <code>FragmentSelectorType</code> for the request is <code>SERVER_TIMESTAMP</code>, this value must be in the past.</p> <p>The <code>EndTimestamp</code> value is required for <code>ON_DEMAND</code> mode, but optional for <code>LIVE_REPLAY</code> mode. If the <code>EndTimestamp</code> is not set for <code>LIVE_REPLAY</code> mode then the session will continue to include newly ingested fragments until the session expires.</p> <note> <p>This value is inclusive. The <code>EndTimestamp</code> is compared to the (starting) timestamp of the fragment. Fragments that start before the <code>EndTimestamp</code> value and continue past it are included in the session.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p> <p>The values in <code>DASHimestampRange</code> are inclusive. Fragments that start exactly at or after the start time are included in the session. Fragments that start before the start time and continue past it are not included in the session.</p>',
    required: [],
  })
  .openapi('DASHTimestampRange')

const HLSStreamingSessionURLSchema = z.string().openapi('HLSStreamingSessionURL')

const GetHLSStreamingSessionURLOutputSchema = z
  .object({
    HLSStreamingSessionURL: HLSStreamingSessionURLSchema.and(
      z
        .any()
        .openapi({
          description:
            'The URL (containing the session token) that a media player can use to retrieve the HLS master playlist.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetHLSStreamingSessionURLOutput')

const HLSFragmentSelectorTypeSchema = z
  .enum(['PRODUCER_TIMESTAMP', 'SERVER_TIMESTAMP'])
  .openapi('HLSFragmentSelectorType')

const HLSTimestampRangeSchema = z
  .object({
    StartTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The start of the timestamp range for the requested media.</p> <p>If the <code>HLSTimestampRange</code> value is specified, the <code>StartTimestamp</code> value is required. </p> <p>Only fragments that start exactly at or after <code>StartTimestamp</code> are included in the session. Fragments that start before <code>StartTimestamp</code> and continue past it aren't included in the session. If <code>FragmentSelectorType</code> is <code>SERVER_TIMESTAMP</code>, the <code>StartTimestamp</code> must be later than the stream head. </p>",
        }),
    ).exactOptional(),
    EndTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The end of the timestamp range for the requested media. This value must be within 24 hours of the specified <code>StartTimestamp</code>, and it must be later than the <code>StartTimestamp</code> value.</p> <p>If <code>FragmentSelectorType</code> for the request is <code>SERVER_TIMESTAMP</code>, this value must be in the past.</p> <p>The <code>EndTimestamp</code> value is required for <code>ON_DEMAND</code> mode, but optional for <code>LIVE_REPLAY</code> mode. If the <code>EndTimestamp</code> is not set for <code>LIVE_REPLAY</code> mode then the session will continue to include newly ingested fragments until the session expires.</p> <note> <p>This value is inclusive. The <code>EndTimestamp</code> is compared to the (starting) timestamp of the fragment. Fragments that start before the <code>EndTimestamp</code> value and continue past it are included in the session.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>',
    required: [],
  })
  .openapi('HLSTimestampRange')

const ImageErrorSchema = z.enum(['NO_MEDIA', 'MEDIA_ERROR']).openapi('ImageError')

const ImageContentSchema = z.string().min(1).max(6291456).openapi('ImageContent')

const ImageSchema = z
  .object({
    TimeStamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'An attribute of the <code>Image</code> object that is used to extract an image from the video stream. This field is used to manage gaps on images or to better understand the pagination window.',
        }),
    ).exactOptional(),
    Error: ImageErrorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The error message shown when the image for the provided timestamp was not extracted due to a non-tryable error. An error will be returned if: </p> <ul> <li> <p>There is no media that exists for the specified <code>Timestamp</code>.</p> </li> </ul> <ul> <li> <p>The media for the specified time does not allow an image to be extracted. In this case the media is audio only, or the incorrect media has been ingested.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ImageContent: ImageContentSchema.and(
      z
        .any()
        .openapi({
          description: 'An attribute of the <code>Image</code> object that is Base64 encoded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A structure that contains the <code>Timestamp</code>, <code>Error</code>, and <code>ImageContent</code>.',
    required: [],
  })
  .openapi('Image')

const ImagesSchema = z.array(ImageSchema).openapi('Images')

const NextTokenSchema = z
  .string()
  .regex(/[a-zA-Z0-9+\/]+={0,2}/)
  .min(1)
  .max(4096)
  .openapi('NextToken')

const GetImagesOutputSchema = z
  .object({
    Images: ImagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The list of images generated from the video stream. If there is no media available for the given timestamp, the <code>NO_MEDIA</code> error will be listed in the output. If an error occurs while the image is being generated, the <code>MEDIA_ERROR</code> will be listed in the output as the cause of the missing image. ',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'The encrypted token that was used in the request to get more images.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetImagesOutput')

const FormatConfigValueSchema = z
  .string()
  .regex(/^[a-zA-Z_0-9]+/)
  .min(0)
  .max(256)
  .openapi('FormatConfigValue')

const GetMediaForFragmentListOutputSchema = z
  .object({
    Payload: PayloadSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The payload that Kinesis Video Streams returns is a sequence of chunks from the specified stream. For information about the chunks, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_dataplane_PutMedia.html">PutMedia</a>. The chunks that Kinesis Video Streams returns in the <code>GetMediaForFragmentList</code> call also include the following additional Matroska (MKV) tags: </p> <ul> <li> <p>AWS_KINESISVIDEO_FRAGMENT_NUMBER - Fragment number returned in the chunk.</p> </li> <li> <p>AWS_KINESISVIDEO_SERVER_SIDE_TIMESTAMP - Server-side timestamp of the fragment.</p> </li> <li> <p>AWS_KINESISVIDEO_PRODUCER_SIDE_TIMESTAMP - Producer-side timestamp of the fragment.</p> </li> </ul> <p>The following tags will be included if an exception occurs:</p> <ul> <li> <p>AWS_KINESISVIDEO_FRAGMENT_NUMBER - The number of the fragment that threw the exception</p> </li> <li> <p>AWS_KINESISVIDEO_EXCEPTION_ERROR_CODE - The integer code of the exception</p> </li> <li> <p>AWS_KINESISVIDEO_EXCEPTION_MESSAGE - A text description of the exception</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetMediaForFragmentListOutput')

const FragmentNumberStringSchema = z
  .string()
  .regex(/^[0-9]+$/)
  .min(1)
  .max(128)
  .openapi('FragmentNumberString')

const LongSchema = z.int().openapi('Long')

const FragmentSchema = z
  .object({
    FragmentNumber: FragmentNumberStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier of the fragment. This value monotonically increases based on the ingestion order.',
        }),
    ).exactOptional(),
    FragmentSizeInBytes: LongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total fragment size, including information about the fragment and contained media data.',
        }),
    ).exactOptional(),
    ProducerTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The timestamp from the producer corresponding to the fragment.' }),
    ).exactOptional(),
    ServerTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The timestamp from the AWS server corresponding to the fragment.',
        }),
    ).exactOptional(),
    FragmentLengthInMilliseconds: LongSchema.and(
      z
        .any()
        .openapi({
          description: 'The playback duration or other time value associated with the fragment.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Represents a segment of video or other time-delimited data.',
    required: [],
  })
  .openapi('Fragment')

const FragmentListSchema = z.array(FragmentSchema).openapi('FragmentList')

const ListFragmentsOutputSchema = z
  .object({
    Fragments: FragmentListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of archived <a>Fragment</a> objects from the stream that meet the selector criteria. Results are in no specific order, even across pages.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the returned list is truncated, the operation returns this token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListFragmentsOutput')

const FragmentSelectorTypeSchema = z
  .enum(['PRODUCER_TIMESTAMP', 'SERVER_TIMESTAMP'])
  .openapi('FragmentSelectorType')

const TimestampRangeSchema = z
  .object({
    StartTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting timestamp in the range of timestamps for which to return fragments.',
        }),
    ),
    EndTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ending timestamp in the range of timestamps for which to return fragments.',
        }),
    ),
  })
  .openapi({
    required: ['StartTimestamp', 'EndTimestamp'],
    description: 'The range of timestamps for which to return fragments.',
  })
  .openapi('TimestampRange')

const ClipFragmentSelectorSchema = z
  .object({
    FragmentSelectorType: ClipFragmentSelectorTypeSchema.and(
      z.any().openapi({ description: 'The origin of the timestamps to use (Server or Producer).' }),
    ),
    TimestampRange: ClipTimestampRangeSchema.and(
      z.any().openapi({ description: 'The range of timestamps to return.' }),
    ),
  })
  .openapi({
    required: ['FragmentSelectorType', 'TimestampRange'],
    description:
      '<p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>',
  })
  .openapi('ClipFragmentSelector')

const ContainerFormatSchema = z.enum(['FRAGMENTED_MP4', 'MPEG_TS']).openapi('ContainerFormat')

const ContentTypeSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_\.\-]+$/)
  .min(1)
  .max(128)
  .openapi('ContentType')

const DASHDisplayFragmentNumberSchema = z
  .enum(['ALWAYS', 'NEVER'])
  .openapi('DASHDisplayFragmentNumber')

const DASHDisplayFragmentTimestampSchema = z
  .enum(['ALWAYS', 'NEVER'])
  .openapi('DASHDisplayFragmentTimestamp')

const DASHFragmentSelectorSchema = z
  .object({
    FragmentSelectorType: DASHFragmentSelectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The source of the timestamps for the requested media.</p> <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and <a>GetDASHStreamingSessionURLInput$PlaybackMode</a> is <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>, the first fragment ingested with a producer timestamp within the specified <a>FragmentSelector$TimestampRange</a> is included in the media playlist. In addition, the fragments with producer timestamps within the <code>TimestampRange</code> ingested immediately following the first fragment (up to the <a>GetDASHStreamingSessionURLInput$MaxManifestFragmentResults</a> value) are included. </p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the MPEG-DASH manifest will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p> <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and <a>GetDASHStreamingSessionURLInput$PlaybackMode</a> is <code>LIVE</code>, the producer timestamps are used in the MP4 fragments and for deduplication. But the most recently ingested fragments based on server timestamps are included in the MPEG-DASH manifest. This means that even if fragments ingested in the past have producer timestamps with values now, they are not included in the HLS media playlist.</p> <p>The default is <code>SERVER_TIMESTAMP</code>.</p>',
        }),
    ).exactOptional(),
    TimestampRange: DASHTimestampRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the range of timestamps for the requested media, and the source of the timestamps. ',
    required: [],
  })
  .openapi('DASHFragmentSelector')

const DASHMaxResultsSchema = z.int().min(1).max(5000).openapi('DASHMaxResults')

const DASHPlaybackModeSchema = z
  .enum(['LIVE', 'LIVE_REPLAY', 'ON_DEMAND'])
  .openapi('DASHPlaybackMode')

const ExpiresSchema = z.int().min(300).max(43200).openapi('Expires')

const FormatSchema = z.enum(['JPEG', 'PNG']).openapi('Format')

const FormatConfigSchema = z
  .record(z.string(), FormatConfigValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 1)
  .openapi('FormatConfig')

const FormatConfigKeySchema = z.literal('JPEGQuality').openapi('FormatConfigKey')

const FragmentNumberListSchema = z
  .array(FragmentNumberStringSchema)
  .min(1)
  .max(1000)
  .openapi('FragmentNumberList')

const FragmentSelectorSchema = z
  .object({
    FragmentSelectorType: FragmentSelectorTypeSchema.and(
      z.any().openapi({ description: 'The origin of the timestamps to use (Server or Producer).' }),
    ),
    TimestampRange: TimestampRangeSchema.and(
      z.any().openapi({ description: 'The range of timestamps to return.' }),
    ),
  })
  .openapi({
    required: ['FragmentSelectorType', 'TimestampRange'],
    description:
      '<p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>',
  })
  .openapi('FragmentSelector')

const StreamNameSchema = z
  .string()
  .regex(/[a-zA-Z0-9_.-]+/)
  .min(1)
  .max(256)
  .openapi('StreamName')

const ResourceARNSchema = z
  .string()
  .regex(/arn:[a-z\d-]+:kinesisvideo:[a-z0-9-]+:[0-9]+:[a-z]+\/[a-zA-Z0-9_.-]+\/[0-9]+/)
  .min(1)
  .max(1024)
  .openapi('ResourceARN')

const GetClipInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>',
        }),
    ).exactOptional(),
    ClipFragmentSelector: ClipFragmentSelectorSchema.and(
      z
        .any()
        .openapi({
          description: 'The time range of the requested clip and the source of the timestamps.',
        }),
    ),
  })
  .openapi({ required: ['ClipFragmentSelector'], title: 'GetClipInput' })
  .openapi('GetClipInput')

const GetDASHStreamingSessionURLInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>',
        }),
    ).exactOptional(),
    PlaybackMode: DASHPlaybackModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the MPEG-DASH manifest is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new manifest on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an MPEG-DASH manifest, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the MPEG-DASH manifest if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the manifest, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the MPEG-DASH manifest is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the manifest every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the MPEG-DASH manifest contains all the fragments for the session, up to the number that is specified in <code>MaxManifestFragmentResults</code>. The manifest must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the MPEG-DASH manifest. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the MPEG-DASH manifest. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p>',
        }),
    ).exactOptional(),
    DisplayFragmentTimestamp: DASHDisplayFragmentTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Per the MPEG-DASH specification, the wall-clock time of fragments in the manifest file can be derived using attributes in the manifest itself. However, typically, MPEG-DASH compatible media players do not properly handle gaps in the media timeline. Kinesis Video Streams adjusts the media timeline in the manifest file to enable playback of media with discontinuities. Therefore, the wall-clock time derived from the manifest file may be inaccurate. If DisplayFragmentTimestamp is set to <code>ALWAYS</code>, the accurate fragment timestamp is added to each S element in the manifest file with the attribute name “kvs:ts”. A custom MPEG-DASH media player is necessary to leverage this custom attribute.</p> <p>The default value is <code>NEVER</code>. When <a>DASHFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>DASHFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p>',
        }),
    ).exactOptional(),
    DisplayFragmentNumber: DASHDisplayFragmentNumberSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Fragments are identified in the manifest file based on their sequence number in the session. If DisplayFragmentNumber is set to <code>ALWAYS</code>, the Kinesis Video Streams fragment number is added to each S element in the manifest file with the attribute name “kvs:fn”. These fragment numbers can be used for logging or for use with other APIs (e.g. <code>GetMedia</code> and <code>GetMediaForFragmentList</code>). A custom MPEG-DASH media player is necessary to leverage these this custom attribute.</p> <p>The default value is <code>NEVER</code>.</p>',
        }),
    ).exactOptional(),
    DASHFragmentSelector: DASHFragmentSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time range of the requested fragment and the source of the timestamps.</p> <p>This parameter is required if <code>PlaybackMode</code> is <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>. This parameter is optional if PlaybackMode is<code/> <code>LIVE</code>. If <code>PlaybackMode</code> is <code>LIVE</code>, the <code>FragmentSelectorType</code> can be set, but the <code>TimestampRange</code> should not be set. If <code>PlaybackMode</code> is <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>, both <code>FragmentSelectorType</code> and <code>TimestampRange</code> must be set.</p>',
        }),
    ).exactOptional(),
    Expires: ExpiresSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetDashManifest</code>, <code>GetMP4InitFragment</code>, or <code>GetMP4MediaFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>',
        }),
    ).exactOptional(),
    MaxManifestFragmentResults: DASHMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of fragments that are returned in the MPEG-DASH manifest.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live MPEG-DASH manifest, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live MPEG-DASH manifest have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetDASHStreamingSessionURLInput', required: [] })
  .openapi('GetDASHStreamingSessionURLInput')

const HLSPlaybackModeSchema = z
  .enum(['LIVE', 'LIVE_REPLAY', 'ON_DEMAND'])
  .openapi('HLSPlaybackMode')

const HLSFragmentSelectorSchema = z
  .object({
    FragmentSelectorType: HLSFragmentSelectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The source of the timestamps for the requested media.</p> <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and <a>GetHLSStreamingSessionURLInput$PlaybackMode</a> is <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>, the first fragment ingested with a producer timestamp within the specified <a>FragmentSelector$TimestampRange</a> is included in the media playlist. In addition, the fragments with producer timestamps within the <code>TimestampRange</code> ingested immediately following the first fragment (up to the <a>GetHLSStreamingSessionURLInput$MaxMediaPlaylistFragmentResults</a> value) are included. </p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the HLS media playlists will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p> <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and <a>GetHLSStreamingSessionURLInput$PlaybackMode</a> is <code>LIVE</code>, the producer timestamps are used in the MP4 fragments and for deduplication. But the most recently ingested fragments based on server timestamps are included in the HLS media playlist. This means that even if fragments ingested in the past have producer timestamps with values now, they are not included in the HLS media playlist.</p> <p>The default is <code>SERVER_TIMESTAMP</code>.</p>',
        }),
    ).exactOptional(),
    TimestampRange: HLSTimestampRangeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains the range of timestamps for the requested media, and the source of the timestamps.',
    required: [],
  })
  .openapi('HLSFragmentSelector')

const HLSDiscontinuityModeSchema = z
  .enum(['ALWAYS', 'NEVER', 'ON_DISCONTINUITY'])
  .openapi('HLSDiscontinuityMode')

const HLSDisplayFragmentTimestampSchema = z
  .enum(['ALWAYS', 'NEVER'])
  .openapi('HLSDisplayFragmentTimestamp')

const HLSMaxResultsSchema = z.int().min(1).max(5000).openapi('HLSMaxResults')

const GetHLSStreamingSessionURLInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>',
        }),
    ).exactOptional(),
    PlaybackMode: HLSPlaybackModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the HLS media playlist is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new playlist on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an HLS media playlist, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the HLS media playlist if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the playlist, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the HLS media playlist is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the media playlist every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the HLS media playlist contains all the fragments for the session, up to the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>. The playlist must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the largest fragment number (that is, the newest fragment) is included in the HLS media playlist. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the HLS media playlist. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p>',
        }),
    ).exactOptional(),
    HLSFragmentSelector: HLSFragmentSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time range of the requested fragment and the source of the timestamps.</p> <p>This parameter is required if <code>PlaybackMode</code> is <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>. This parameter is optional if PlaybackMode is<code/> <code>LIVE</code>. If <code>PlaybackMode</code> is <code>LIVE</code>, the <code>FragmentSelectorType</code> can be set, but the <code>TimestampRange</code> should not be set. If <code>PlaybackMode</code> is <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>, both <code>FragmentSelectorType</code> and <code>TimestampRange</code> must be set.</p>',
        }),
    ).exactOptional(),
    ContainerFormat: ContainerFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies which format should be used for packaging the media. Specifying the <code>FRAGMENTED_MP4</code> container format packages the media into MP4 fragments (fMP4 or CMAF). This is the recommended packaging because there is minimal packaging overhead. The other container format option is <code>MPEG_TS</code>. HLS has supported MPEG TS chunks since it was released and is sometimes the only supported packaging on older HLS players. MPEG TS typically has a 5-25 percent packaging overhead. This means MPEG TS typically requires 5-25 percent more bandwidth and cost than fMP4.</p> <p>The default is <code>FRAGMENTED_MP4</code>.</p>',
        }),
    ).exactOptional(),
    DiscontinuityMode: HLSDiscontinuityModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies when flags marking discontinuities between fragments are added to the media playlists.</p> <p>Media players typically build a timeline of media content to play, based on the timestamps of each fragment. This means that if there is any overlap or gap between fragments (as is typical if <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>), the media player timeline will also have small gaps between fragments in some places, and will overwrite frames in other places. Gaps in the media player timeline can cause playback to stall and overlaps can cause playback to be jittery. When there are discontinuity flags between fragments, the media player is expected to reset the timeline, resulting in the next fragment being played immediately after the previous fragment. </p> <p>The following modes are supported:</p> <ul> <li> <p> <code>ALWAYS</code>: a discontinuity marker is placed between every fragment in the HLS media playlist. It is recommended to use a value of <code>ALWAYS</code> if the fragment timestamps are not accurate.</p> </li> <li> <p> <code>NEVER</code>: no discontinuity markers are placed anywhere. It is recommended to use a value of <code>NEVER</code> to ensure the media player timeline most accurately maps to the producer timestamps. </p> </li> <li> <p> <code>ON_DISCONTINUITY</code>: a discontinuity marker is placed between fragments that have a gap or overlap of more than 50 milliseconds. For most playback scenarios, it is recommended to use a value of <code>ON_DISCONTINUITY</code> so that the media player timeline is only reset when there is a significant issue with the media timeline (e.g. a missing fragment).</p> </li> </ul> <p>The default is <code>ALWAYS</code> when <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>, and <code>NEVER</code> when it is set to <code>PRODUCER_TIMESTAMP</code>.</p>',
        }),
    ).exactOptional(),
    DisplayFragmentTimestamp: HLSDisplayFragmentTimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specifies when the fragment start timestamps should be included in the HLS media playlist. Typically, media players report the playhead position as a time relative to the start of the first fragment in the playback session. However, when the start timestamps are included in the HLS media playlist, some media players might report the current playhead as an absolute time based on the fragment timestamps. This can be useful for creating a playback experience that shows viewers the wall-clock time of the media.</p> <p>The default is <code>NEVER</code>. When <a>HLSFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>HLSFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p>',
        }),
    ).exactOptional(),
    Expires: ExpiresSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetHLSMasterPlaylist</code>, <code>GetHLSMediaPlaylist</code>, <code>GetMP4InitFragment</code>, <code>GetMP4MediaFragment</code>, or <code>GetTSFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>',
        }),
    ).exactOptional(),
    MaxMediaPlaylistFragmentResults: HLSMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of fragments that are returned in the HLS media playlists.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live HLS media playlist, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live HLS media playlist have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 5,000 fragments corresponds to more than 80 minutes of video on streams with 1-second fragments, and more than 13 hours of video on streams with 10-second fragments.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'GetHLSStreamingSessionURLInput', required: [] })
  .openapi('GetHLSStreamingSessionURLInput')

const ImageSelectorTypeSchema = z
  .enum(['PRODUCER_TIMESTAMP', 'SERVER_TIMESTAMP'])
  .openapi('ImageSelectorType')

const SamplingIntervalSchema = z.int().min(3000).max(20000).openapi('SamplingInterval')

const WidthPixelsSchema = z.int().min(1).max(3840).openapi('WidthPixels')

const HeightPixelsSchema = z.int().min(1).max(2160).openapi('HeightPixels')

const GetImagesMaxResultsSchema = z.int().min(1).max(100).openapi('GetImagesMaxResults')

const GetImagesInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
        }),
    ).exactOptional(),
    ImageSelectorType: ImageSelectorTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The origin of the Server or Producer timestamps to use to generate the images.',
        }),
    ),
    StartTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The starting point from which the images should be generated. This <code>StartTimestamp</code> must be within an inclusive range of timestamps for an image to be returned.',
        }),
    ),
    EndTimestamp: TimestampSchema.and(
      z
        .any()
        .openapi({ description: 'The end timestamp for the range of images to be generated.' }),
    ),
    SamplingInterval: SamplingIntervalSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 3000 ms. If the timestamp range is less than the sampling interval, the Image from the <code>startTimestamp</code> will be returned if available. </p> <note> <p>The minimum value of 3000 ms is a soft limit. If needed, a lower sampling frequency can be requested.</p> </note>',
        }),
    ),
    Format: FormatSchema.and(
      z.any().openapi({ description: 'The format that will be used to encode the image.' }),
    ),
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
            'The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is provided or if only the <code>HeightPixels</code> is provided, a <code>ValidationException</code> will be thrown. If neither parameter is provided, the original image size from the stream will be returned.',
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
    MaxResults: GetImagesMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum number of images to be returned by the API. </p> <note> <p>The default limit is 100 images per API response. The additional results will be paginated. </p> </note>',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token that specifies where to start paginating the next set of Images. This is the <code>GetImages:NextToken</code> from a previously truncated response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['ImageSelectorType', 'StartTimestamp', 'EndTimestamp', 'SamplingInterval', 'Format'],
    title: 'GetImagesInput',
  })
  .openapi('GetImagesInput')

const GetMediaForFragmentListInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamARN</code> parameter.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamName</code> parameter.',
        }),
    ).exactOptional(),
    Fragments: FragmentNumberListSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of the numbers of fragments for which to retrieve media. You retrieve these values with <a>ListFragments</a>.',
        }),
    ),
  })
  .openapi({ required: ['Fragments'], title: 'GetMediaForFragmentListInput' })
  .openapi('GetMediaForFragmentListInput')

const ListFragmentsMaxResultsSchema = z.int().min(1).max(1000).openapi('ListFragmentsMaxResults')

const ListFragmentsInputSchema = z
  .object({
    StreamName: StreamNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamARN</code> parameter.',
        }),
    ).exactOptional(),
    StreamARN: ResourceARNSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamName</code> parameter.',
        }),
    ).exactOptional(),
    MaxResults: ListFragmentsMaxResultsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The total number of fragments to return. If the total number of fragments available is more than the value specified in <code>max-results</code>, then a <a>ListFragmentsOutput$NextToken</a> is provided in the output that you can use to resume pagination.',
        }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'A token to specify where to start paginating. This is the <a>ListFragmentsOutput$NextToken</a> from a previously truncated response.',
        }),
    ).exactOptional(),
    FragmentSelector: FragmentSelectorSchema.and(
      z
        .any()
        .openapi({
          description:
            'Describes the timestamp range and timestamp origin for the range of fragments to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'ListFragmentsInput', required: [] })
  .openapi('ListFragmentsInput')

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

export const postGetClipRoute = createRoute({
  method: 'post',
  path: '/getClip',
  description:
    '<p>Downloads an MP4 file (clip) containing the archived, on-demand media from the specified video stream over the specified time range. </p> <p>Both the StreamName and the StreamARN parameters are optional, but you must specify either the StreamName or the StreamARN when invoking this API operation. </p> <p>As a prerequisite to using GetCLip API, you must obtain an endpoint using <code>GetDataEndpoint</code>, specifying GET_CLIP for<code/> the <code>APIName</code> parameter. </p> <p>An Amazon Kinesis video stream has the following requirements for providing data through MP4:</p> <ul> <li> <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or A_MS/ACM (for G.711).</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>. For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS Wave format</a>.</p> </li> </ul> <p>You can monitor the amount of outgoing data by monitoring the <code>GetClip.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">AWS Pricing</a>. Charges for outgoing AWS data apply.</p>',
  operationId: 'GetClip',
  request: {
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
                    '<p>The name of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>',
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
                    '<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the media clip. </p> <p>You must specify either the StreamName or the StreamARN. </p>',
                }),
              ClipFragmentSelector: z
                .object({
                  FragmentSelectorType: ClipFragmentSelectorTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The origin of the timestamps to use (Server or Producer).',
                      }),
                  ).exactOptional(),
                  TimestampRange: ClipTimestampRangeSchema.and(
                    z.any().openapi({ description: 'The range of timestamps to return.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the clip will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p>',
                  required: [],
                }),
            })
            .openapi({ required: ['ClipFragmentSelector'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetClipOutputSchema } },
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
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UnsupportedStreamMediaTypeException',
      content: { 'application/json': { schema: UnsupportedStreamMediaTypeExceptionSchema } },
    },
    485: {
      description: 'MissingCodecPrivateDataException',
      content: { 'application/json': { schema: MissingCodecPrivateDataExceptionSchema } },
    },
    486: {
      description: 'InvalidCodecPrivateDataException',
      content: { 'application/json': { schema: InvalidCodecPrivateDataExceptionSchema } },
    },
    487: {
      description: 'InvalidMediaFrameException',
      content: { 'application/json': { schema: InvalidMediaFrameExceptionSchema } },
    },
    488: {
      description: 'NoDataRetentionException',
      content: { 'application/json': { schema: NoDataRetentionExceptionSchema } },
    },
  },
})

export const postGetDASHStreamingSessionURLRoute = createRoute({
  method: 'post',
  path: '/getDASHStreamingSessionURL',
  description:
    '<p>Retrieves an MPEG Dynamic Adaptive Streaming over HTTP (DASH) URL for the stream. You can then open the URL in a media player to view the stream contents.</p> <p>Both the <code>StreamName</code> and the <code>StreamARN</code> parameters are optional, but you must specify either the <code>StreamName</code> or the <code>StreamARN</code> when invoking this API operation.</p> <p>An Amazon Kinesis video stream has the following requirements for providing data through MPEG-DASH:</p> <ul> <li> <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC or G.711 encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for h.264) or V_MPEGH/ISO/HEVC (for H.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code> (for AAC) or A_MS/ACM (for G.711).</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format and HEVC for H.265 format. For more information, see <a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>. For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>) or the <a href="http://www-mmsp.ece.mcgill.ca/Documents/AudioFormats/WAVE/WAVE.html">MS Wave format</a>.</p> </li> </ul> <p>The following procedure shows how to use MPEG-DASH with Kinesis Video Streams:</p> <ol> <li> <p>Get an endpoint using <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html">GetDataEndpoint</a>, specifying <code>GET_DASH_STREAMING_SESSION_URL</code> for the <code>APIName</code> parameter.</p> </li> <li> <p>Retrieve the MPEG-DASH URL using <code>GetDASHStreamingSessionURL</code>. Kinesis Video Streams creates an MPEG-DASH streaming session to be used for accessing content in a stream using the MPEG-DASH protocol. <code>GetDASHStreamingSessionURL</code> returns an authenticated URL (that includes an encrypted session token) for the session\'s MPEG-DASH <i>manifest</i> (the root resource needed for streaming with MPEG-DASH).</p> <note> <p>Don\'t share or store this token where an unauthorized entity can access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you use with your AWS credentials.</p> </note> <p>The media that is made available through the manifest consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bitrates) is made available.</p> </li> <li> <p>Provide the URL (containing the encrypted session token) for the MPEG-DASH manifest to a media player that supports the MPEG-DASH protocol. Kinesis Video Streams makes the initialization fragment and media fragments available through the manifest URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video or audio decoder and renderer. The media fragments contain encoded video frames or encoded audio samples.</p> </li> <li> <p>The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:</p> <ul> <li> <p> <b>GetDASHManifest:</b> Retrieves an MPEG DASH manifest, which contains the metadata for the media that you want to playback.</p> </li> <li> <p> <b>GetMP4InitFragment:</b> Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "<code>fytp</code>" and "<code>moov</code>" MP4 atoms, and the child atoms that are needed to initialize the media player decoder.</p> <p>The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream and respective track, which the media player needs to decode the media frames.</p> </li> <li> <p> <b>GetMP4MediaFragment:</b> Retrieves MP4 media fragments. These fragments contain the "<code>moof</code>" and "<code>mdat</code>" MP4 atoms and their child atoms, containing the encoded fragment\'s media frames and their timestamps. </p> <note> <p>After the first media fragment is made available in a streaming session, any fragments that don\'t contain the same codec private data cause an error to be returned when those different media fragments are loaded. Therefore, the codec private data should not change between fragments in a session. This also means that the session fails if the fragments in a stream change from having only video to having both audio and video.</p> </note> <p>Data retrieved with this action is billable. See <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Pricing</a> for details.</p> </li> </ul> </li> </ol> <note> <p>For restrictions that apply to MPEG-DASH sessions, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> </note> <p>You can monitor the amount of data that the media player consumes by monitoring the <code>GetMP4MediaFragment.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">AWS Pricing</a>. Charges for both HLS sessions and outgoing AWS data apply.</p> <p>For more information about HLS, see <a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a> on the <a href="https://developer.apple.com">Apple Developer site</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>',
  operationId: 'GetDASHStreamingSessionURL',
  request: {
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
                    '<p>The name of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>',
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
                    '<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the MPEG-DASH manifest URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>',
                }),
              PlaybackMode: z
                .enum(['LIVE', 'LIVE_REPLAY', 'ON_DEMAND'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the MPEG-DASH manifest is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new manifest on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an MPEG-DASH manifest, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the MPEG-DASH manifest if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the manifest, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the MPEG-DASH manifest is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the manifest every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the MPEG-DASH manifest contains all the fragments for the session, up to the number that is specified in <code>MaxManifestFragmentResults</code>. The manifest must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the larger fragment number (that is, the newer fragment) is included in the MPEG-DASH manifest. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the MPEG-DASH manifest. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p>',
                }),
              DisplayFragmentTimestamp: z
                .enum(['ALWAYS', 'NEVER'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Per the MPEG-DASH specification, the wall-clock time of fragments in the manifest file can be derived using attributes in the manifest itself. However, typically, MPEG-DASH compatible media players do not properly handle gaps in the media timeline. Kinesis Video Streams adjusts the media timeline in the manifest file to enable playback of media with discontinuities. Therefore, the wall-clock time derived from the manifest file may be inaccurate. If DisplayFragmentTimestamp is set to <code>ALWAYS</code>, the accurate fragment timestamp is added to each S element in the manifest file with the attribute name “kvs:ts”. A custom MPEG-DASH media player is necessary to leverage this custom attribute.</p> <p>The default value is <code>NEVER</code>. When <a>DASHFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>DASHFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p>',
                }),
              DisplayFragmentNumber: z
                .enum(['ALWAYS', 'NEVER'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Fragments are identified in the manifest file based on their sequence number in the session. If DisplayFragmentNumber is set to <code>ALWAYS</code>, the Kinesis Video Streams fragment number is added to each S element in the manifest file with the attribute name “kvs:fn”. These fragment numbers can be used for logging or for use with other APIs (e.g. <code>GetMedia</code> and <code>GetMediaForFragmentList</code>). A custom MPEG-DASH media player is necessary to leverage these this custom attribute.</p> <p>The default value is <code>NEVER</code>.</p>',
                }),
              DASHFragmentSelector: z
                .object({
                  FragmentSelectorType: DASHFragmentSelectorTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The source of the timestamps for the requested media.</p> <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and <a>GetDASHStreamingSessionURLInput$PlaybackMode</a> is <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>, the first fragment ingested with a producer timestamp within the specified <a>FragmentSelector$TimestampRange</a> is included in the media playlist. In addition, the fragments with producer timestamps within the <code>TimestampRange</code> ingested immediately following the first fragment (up to the <a>GetDASHStreamingSessionURLInput$MaxManifestFragmentResults</a> value) are included. </p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the MPEG-DASH manifest will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p> <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and <a>GetDASHStreamingSessionURLInput$PlaybackMode</a> is <code>LIVE</code>, the producer timestamps are used in the MP4 fragments and for deduplication. But the most recently ingested fragments based on server timestamps are included in the MPEG-DASH manifest. This means that even if fragments ingested in the past have producer timestamps with values now, they are not included in the HLS media playlist.</p> <p>The default is <code>SERVER_TIMESTAMP</code>.</p>',
                      }),
                  ).exactOptional(),
                  TimestampRange: DASHTimestampRangeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains the range of timestamps for the requested media, and the source of the timestamps. ',
                  required: [],
                }),
              Expires: z
                .int()
                .min(300)
                .max(43200)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetDashManifest</code>, <code>GetMP4InitFragment</code>, or <code>GetMP4MediaFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>',
                }),
              MaxManifestFragmentResults: z
                .int()
                .min(1)
                .max(5000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum number of fragments that are returned in the MPEG-DASH manifest.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live MPEG-DASH manifest, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live MPEG-DASH manifest have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 1,000 fragments corresponds to more than 16 minutes of video on streams with 1-second fragments, and more than 2 1/2 hours of video on streams with 10-second fragments.</p>',
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
      content: { 'application/json': { schema: GetDASHStreamingSessionURLOutputSchema } },
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
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UnsupportedStreamMediaTypeException',
      content: { 'application/json': { schema: UnsupportedStreamMediaTypeExceptionSchema } },
    },
    485: {
      description: 'NoDataRetentionException',
      content: { 'application/json': { schema: NoDataRetentionExceptionSchema } },
    },
    486: {
      description: 'MissingCodecPrivateDataException',
      content: { 'application/json': { schema: MissingCodecPrivateDataExceptionSchema } },
    },
    487: {
      description: 'InvalidCodecPrivateDataException',
      content: { 'application/json': { schema: InvalidCodecPrivateDataExceptionSchema } },
    },
  },
})

export const postGetHLSStreamingSessionURLRoute = createRoute({
  method: 'post',
  path: '/getHLSStreamingSessionURL',
  description:
    '<p>Retrieves an HTTP Live Streaming (HLS) URL for the stream. You can then open the URL in a browser or media player to view the stream contents.</p> <p>Both the <code>StreamName</code> and the <code>StreamARN</code> parameters are optional, but you must specify either the <code>StreamName</code> or the <code>StreamARN</code> when invoking this API operation.</p> <p>An Amazon Kinesis video stream has the following requirements for providing data through HLS:</p> <ul> <li> <p>The media must contain h.264 or h.265 encoded video and, optionally, AAC encoded audio. Specifically, the codec ID of track 1 should be <code>V_MPEG/ISO/AVC</code> (for h.264) or <code>V_MPEG/ISO/HEVC</code> (for h.265). Optionally, the codec ID of track 2 should be <code>A_AAC</code>.</p> </li> <li> <p>Data retention must be greater than 0.</p> </li> <li> <p>The video track of each fragment must contain codec private data in the Advanced Video Coding (AVC) for H.264 format or HEVC for H.265 format (<a href="https://www.iso.org/standard/55980.html">MPEG-4 specification ISO/IEC 14496-15</a>). For information about adapting stream data to a given format, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/producer-reference-nal.html">NAL Adaptation Flags</a>.</p> </li> <li> <p>The audio track (if present) of each fragment must contain codec private data in the AAC format (<a href="https://www.iso.org/standard/43345.html">AAC specification ISO/IEC 13818-7</a>).</p> </li> </ul> <p>Kinesis Video Streams HLS sessions contain fragments in the fragmented MPEG-4 form (also called fMP4 or CMAF) or the MPEG-2 form (also called TS chunks, which the HLS specification also supports). For more information about HLS fragment types, see the <a href="https://tools.ietf.org/html/draft-pantos-http-live-streaming-23">HLS specification</a>.</p> <p>The following procedure shows how to use HLS with Kinesis Video Streams:</p> <ol> <li> <p>Get an endpoint using <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/API_GetDataEndpoint.html">GetDataEndpoint</a>, specifying <code>GET_HLS_STREAMING_SESSION_URL</code> for the <code>APIName</code> parameter.</p> </li> <li> <p>Retrieve the HLS URL using <code>GetHLSStreamingSessionURL</code>. Kinesis Video Streams creates an HLS streaming session to be used for accessing content in a stream using the HLS protocol. <code>GetHLSStreamingSessionURL</code> returns an authenticated URL (that includes an encrypted session token) for the session\'s HLS <i>master playlist</i> (the root resource needed for streaming with HLS).</p> <note> <p>Don\'t share or store this token where an unauthorized entity could access it. The token provides access to the content of the stream. Safeguard the token with the same measures that you would use with your AWS credentials.</p> </note> <p>The media that is made available through the playlist consists only of the requested stream, time range, and format. No other media data (such as frames outside the requested window or alternate bitrates) is made available.</p> </li> <li> <p>Provide the URL (containing the encrypted session token) for the HLS master playlist to a media player that supports the HLS protocol. Kinesis Video Streams makes the HLS media playlist, initialization fragment, and media fragments available through the master playlist URL. The initialization fragment contains the codec private data for the stream, and other data needed to set up the video or audio decoder and renderer. The media fragments contain H.264-encoded video frames or AAC-encoded audio samples.</p> </li> <li> <p>The media player receives the authenticated URL and requests stream metadata and media data normally. When the media player requests data, it calls the following actions:</p> <ul> <li> <p> <b>GetHLSMasterPlaylist:</b> Retrieves an HLS master playlist, which contains a URL for the <code>GetHLSMediaPlaylist</code> action for each track, and additional metadata for the media player, including estimated bitrate and resolution.</p> </li> <li> <p> <b>GetHLSMediaPlaylist:</b> Retrieves an HLS media playlist, which contains a URL to access the MP4 initialization fragment with the <code>GetMP4InitFragment</code> action, and URLs to access the MP4 media fragments with the <code>GetMP4MediaFragment</code> actions. The HLS media playlist also contains metadata about the stream that the player needs to play it, such as whether the <code>PlaybackMode</code> is <code>LIVE</code> or <code>ON_DEMAND</code>. The HLS media playlist is typically static for sessions with a <code>PlaybackType</code> of <code>ON_DEMAND</code>. The HLS media playlist is continually updated with new fragments for sessions with a <code>PlaybackType</code> of <code>LIVE</code>. There is a distinct HLS media playlist for the video track and the audio track (if applicable) that contains MP4 media URLs for the specific track. </p> </li> <li> <p> <b>GetMP4InitFragment:</b> Retrieves the MP4 initialization fragment. The media player typically loads the initialization fragment before loading any media fragments. This fragment contains the "<code>fytp</code>" and "<code>moov</code>" MP4 atoms, and the child atoms that are needed to initialize the media player decoder.</p> <p>The initialization fragment does not correspond to a fragment in a Kinesis video stream. It contains only the codec private data for the stream and respective track, which the media player needs to decode the media frames.</p> </li> <li> <p> <b>GetMP4MediaFragment:</b> Retrieves MP4 media fragments. These fragments contain the "<code>moof</code>" and "<code>mdat</code>" MP4 atoms and their child atoms, containing the encoded fragment\'s media frames and their timestamps. </p> <note> <p>After the first media fragment is made available in a streaming session, any fragments that don\'t contain the same codec private data cause an error to be returned when those different media fragments are loaded. Therefore, the codec private data should not change between fragments in a session. This also means that the session fails if the fragments in a stream change from having only video to having both audio and video.</p> </note> <p>Data retrieved with this action is billable. See <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Pricing</a> for details.</p> </li> <li> <p> <b>GetTSFragment:</b> Retrieves MPEG TS fragments containing both initialization and media data for all tracks in the stream.</p> <note> <p>If the <code>ContainerFormat</code> is <code>MPEG_TS</code>, this API is used instead of <code>GetMP4InitFragment</code> and <code>GetMP4MediaFragment</code> to retrieve stream media.</p> </note> <p>Data retrieved with this action is billable. For more information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Kinesis Video Streams pricing</a>.</p> </li> </ul> </li> </ol> <p>A streaming session URL must not be shared between players. The service might throttle a session if multiple media players are sharing it. For connection limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> <p>You can monitor the amount of data that the media player consumes by monitoring the <code>GetMP4MediaFragment.OutgoingBytes</code> Amazon CloudWatch metric. For information about using CloudWatch to monitor Kinesis Video Streams, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/monitoring.html">Monitoring Kinesis Video Streams</a>. For pricing information, see <a href="https://aws.amazon.com/kinesis/video-streams/pricing/">Amazon Kinesis Video Streams Pricing</a> and <a href="https://aws.amazon.com/pricing/">AWS Pricing</a>. Charges for both HLS sessions and outgoing AWS data apply.</p> <p>For more information about HLS, see <a href="https://developer.apple.com/streaming/">HTTP Live Streaming</a> on the <a href="https://developer.apple.com">Apple Developer site</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>',
  operationId: 'GetHLSStreamingSessionURL',
  request: {
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
                    '<p>The name of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>',
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
                    '<p>The Amazon Resource Name (ARN) of the stream for which to retrieve the HLS master playlist URL.</p> <p>You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.</p>',
                }),
              PlaybackMode: z
                .enum(['LIVE', 'LIVE_REPLAY', 'ON_DEMAND'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Whether to retrieve live, live replay, or archived, on-demand data.</p> <p>Features of the three types of sessions include the following:</p> <ul> <li> <p> <b> <code>LIVE</code> </b>: For sessions of this type, the HLS media playlist is continually updated with the latest fragments as they become available. We recommend that the media player retrieve a new playlist on a one-second interval. When this type of session is played in a media player, the user interface typically displays a "live" notification, with no scrubber control for choosing the position in the playback window to display.</p> <note> <p>In <code>LIVE</code> mode, the newest available fragments are included in an HLS media playlist, even if there is a gap between fragments (that is, if a fragment is missing). A gap like this might cause a media player to halt or cause a jump in playback. In this mode, fragments are not added to the HLS media playlist if they are older than the newest fragment in the playlist. If the missing fragment becomes available after a subsequent fragment is added to the playlist, the older fragment is not added, and the gap is not filled.</p> </note> </li> <li> <p> <b> <code>LIVE_REPLAY</code> </b>: For sessions of this type, the HLS media playlist is updated similarly to how it is updated for <code>LIVE</code> mode except that it starts by including fragments from a given start time. Instead of fragments being added as they are ingested, fragments are added as the duration of the next fragment elapses. For example, if the fragments in the session are two seconds long, then a new fragment is added to the media playlist every two seconds. This mode is useful to be able to start playback from when an event is detected and continue live streaming media that has not yet been ingested as of the time of the session creation. This mode is also useful to stream previously archived media without being limited by the 1,000 fragment limit in the <code>ON_DEMAND</code> mode. </p> </li> <li> <p> <b> <code>ON_DEMAND</code> </b>: For sessions of this type, the HLS media playlist contains all the fragments for the session, up to the number that is specified in <code>MaxMediaPlaylistFragmentResults</code>. The playlist must be retrieved only once for each session. When this type of session is played in a media player, the user interface typically displays a scrubber control for choosing the position in the playback window to display.</p> </li> </ul> <p>In all playback modes, if <code>FragmentSelectorType</code> is <code>PRODUCER_TIMESTAMP</code>, and if there are multiple fragments with the same start timestamp, the fragment that has the largest fragment number (that is, the newest fragment) is included in the HLS media playlist. The other fragments are not included. Fragments that have different timestamps but have overlapping durations are still included in the HLS media playlist. This can lead to unexpected behavior in the media player.</p> <p>The default is <code>LIVE</code>.</p>',
                }),
              HLSFragmentSelector: z
                .object({
                  FragmentSelectorType: HLSFragmentSelectorTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The source of the timestamps for the requested media.</p> <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and <a>GetHLSStreamingSessionURLInput$PlaybackMode</a> is <code>ON_DEMAND</code> or <code>LIVE_REPLAY</code>, the first fragment ingested with a producer timestamp within the specified <a>FragmentSelector$TimestampRange</a> is included in the media playlist. In addition, the fragments with producer timestamps within the <code>TimestampRange</code> ingested immediately following the first fragment (up to the <a>GetHLSStreamingSessionURLInput$MaxMediaPlaylistFragmentResults</a> value) are included. </p> <p>Fragments that have duplicate producer timestamps are deduplicated. This means that if producers are producing a stream of fragments with producer timestamps that are approximately equal to the true clock time, the HLS media playlists will contain all of the fragments within the requested timestamp range. If some fragments are ingested within the same time range and very different points in time, only the oldest ingested collection of fragments are returned.</p> <p>When <code>FragmentSelectorType</code> is set to <code>PRODUCER_TIMESTAMP</code> and <a>GetHLSStreamingSessionURLInput$PlaybackMode</a> is <code>LIVE</code>, the producer timestamps are used in the MP4 fragments and for deduplication. But the most recently ingested fragments based on server timestamps are included in the HLS media playlist. This means that even if fragments ingested in the past have producer timestamps with values now, they are not included in the HLS media playlist.</p> <p>The default is <code>SERVER_TIMESTAMP</code>.</p>',
                      }),
                  ).exactOptional(),
                  TimestampRange: HLSTimestampRangeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The start and end of the timestamp range for the requested media.</p> <p>This value should not be present if <code>PlaybackType</code> is <code>LIVE</code>.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Contains the range of timestamps for the requested media, and the source of the timestamps.',
                  required: [],
                }),
              ContainerFormat: z
                .enum(['FRAGMENTED_MP4', 'MPEG_TS'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies which format should be used for packaging the media. Specifying the <code>FRAGMENTED_MP4</code> container format packages the media into MP4 fragments (fMP4 or CMAF). This is the recommended packaging because there is minimal packaging overhead. The other container format option is <code>MPEG_TS</code>. HLS has supported MPEG TS chunks since it was released and is sometimes the only supported packaging on older HLS players. MPEG TS typically has a 5-25 percent packaging overhead. This means MPEG TS typically requires 5-25 percent more bandwidth and cost than fMP4.</p> <p>The default is <code>FRAGMENTED_MP4</code>.</p>',
                }),
              DiscontinuityMode: z
                .enum(['ALWAYS', 'NEVER', 'ON_DISCONTINUITY'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies when flags marking discontinuities between fragments are added to the media playlists.</p> <p>Media players typically build a timeline of media content to play, based on the timestamps of each fragment. This means that if there is any overlap or gap between fragments (as is typical if <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>), the media player timeline will also have small gaps between fragments in some places, and will overwrite frames in other places. Gaps in the media player timeline can cause playback to stall and overlaps can cause playback to be jittery. When there are discontinuity flags between fragments, the media player is expected to reset the timeline, resulting in the next fragment being played immediately after the previous fragment. </p> <p>The following modes are supported:</p> <ul> <li> <p> <code>ALWAYS</code>: a discontinuity marker is placed between every fragment in the HLS media playlist. It is recommended to use a value of <code>ALWAYS</code> if the fragment timestamps are not accurate.</p> </li> <li> <p> <code>NEVER</code>: no discontinuity markers are placed anywhere. It is recommended to use a value of <code>NEVER</code> to ensure the media player timeline most accurately maps to the producer timestamps. </p> </li> <li> <p> <code>ON_DISCONTINUITY</code>: a discontinuity marker is placed between fragments that have a gap or overlap of more than 50 milliseconds. For most playback scenarios, it is recommended to use a value of <code>ON_DISCONTINUITY</code> so that the media player timeline is only reset when there is a significant issue with the media timeline (e.g. a missing fragment).</p> </li> </ul> <p>The default is <code>ALWAYS</code> when <a>HLSFragmentSelector</a> is set to <code>SERVER_TIMESTAMP</code>, and <code>NEVER</code> when it is set to <code>PRODUCER_TIMESTAMP</code>.</p>',
                }),
              DisplayFragmentTimestamp: z
                .enum(['ALWAYS', 'NEVER'])
                .exactOptional()
                .openapi({
                  description:
                    '<p>Specifies when the fragment start timestamps should be included in the HLS media playlist. Typically, media players report the playhead position as a time relative to the start of the first fragment in the playback session. However, when the start timestamps are included in the HLS media playlist, some media players might report the current playhead as an absolute time based on the fragment timestamps. This can be useful for creating a playback experience that shows viewers the wall-clock time of the media.</p> <p>The default is <code>NEVER</code>. When <a>HLSFragmentSelector</a> is <code>SERVER_TIMESTAMP</code>, the timestamps will be the server start timestamps. Similarly, when <a>HLSFragmentSelector</a> is <code>PRODUCER_TIMESTAMP</code>, the timestamps will be the producer start timestamps. </p>',
                }),
              Expires: z
                .int()
                .min(300)
                .max(43200)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The time in seconds until the requested session expires. This value can be between 300 (5 minutes) and 43200 (12 hours).</p> <p>When a session expires, no new calls to <code>GetHLSMasterPlaylist</code>, <code>GetHLSMediaPlaylist</code>, <code>GetMP4InitFragment</code>, <code>GetMP4MediaFragment</code>, or <code>GetTSFragment</code> can be made for that session.</p> <p>The default is 300 (5 minutes).</p>',
                }),
              MaxMediaPlaylistFragmentResults: z
                .int()
                .min(1)
                .max(5000)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum number of fragments that are returned in the HLS media playlists.</p> <p>When the <code>PlaybackMode</code> is <code>LIVE</code>, the most recent fragments are returned up to this value. When the <code>PlaybackMode</code> is <code>ON_DEMAND</code>, the oldest fragments are returned, up to this maximum number.</p> <p>When there are a higher number of fragments available in a live HLS media playlist, video players often buffer content before starting playback. Increasing the buffer size increases the playback latency, but it decreases the likelihood that rebuffering will occur during playback. We recommend that a live HLS media playlist have a minimum of 3 fragments and a maximum of 10 fragments.</p> <p>The default is 5 fragments if <code>PlaybackMode</code> is <code>LIVE</code> or <code>LIVE_REPLAY</code>, and 1,000 if <code>PlaybackMode</code> is <code>ON_DEMAND</code>. </p> <p>The maximum value of 5,000 fragments corresponds to more than 80 minutes of video on streams with 1-second fragments, and more than 13 hours of video on streams with 10-second fragments.</p>',
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
      content: { 'application/json': { schema: GetHLSStreamingSessionURLOutputSchema } },
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
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
    484: {
      description: 'UnsupportedStreamMediaTypeException',
      content: { 'application/json': { schema: UnsupportedStreamMediaTypeExceptionSchema } },
    },
    485: {
      description: 'NoDataRetentionException',
      content: { 'application/json': { schema: NoDataRetentionExceptionSchema } },
    },
    486: {
      description: 'MissingCodecPrivateDataException',
      content: { 'application/json': { schema: MissingCodecPrivateDataExceptionSchema } },
    },
    487: {
      description: 'InvalidCodecPrivateDataException',
      content: { 'application/json': { schema: InvalidCodecPrivateDataExceptionSchema } },
    },
  },
})

export const postGetImagesRoute = createRoute({
  method: 'post',
  path: '/getImages',
  description:
    'Retrieves a list of Images corresponding to each timestamp for a given time range, sampling interval, and image format configuration.',
  operationId: 'GetImages',
  request: {
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
                .openapi({
                  description:
                    'The name of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
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
                    'The Amazon Resource Name (ARN) of the stream from which to retrieve the images. You must specify either the <code>StreamName</code> or the <code>StreamARN</code>.',
                }),
              ImageSelectorType: z
                .enum(['PRODUCER_TIMESTAMP', 'SERVER_TIMESTAMP'])
                .openapi({
                  description:
                    'The origin of the Server or Producer timestamps to use to generate the images.',
                }),
              StartTimestamp: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'The starting point from which the images should be generated. This <code>StartTimestamp</code> must be within an inclusive range of timestamps for an image to be returned.',
                }),
              EndTimestamp: z.iso
                .datetime({ offset: true })
                .openapi({
                  description: 'The end timestamp for the range of images to be generated.',
                }),
              SamplingInterval: z
                .int()
                .min(3000)
                .max(20000)
                .openapi({
                  description:
                    '<p>The time interval in milliseconds (ms) at which the images need to be generated from the stream. The minimum value that can be provided is 3000 ms. If the timestamp range is less than the sampling interval, the Image from the <code>startTimestamp</code> will be returned if available. </p> <note> <p>The minimum value of 3000 ms is a soft limit. If needed, a lower sampling frequency can be requested.</p> </note>',
                }),
              Format: z
                .enum(['JPEG', 'PNG'])
                .openapi({ description: 'The format that will be used to encode the image.' }),
              FormatConfig: z
                .record(z.string(), FormatConfigValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 1)
                .exactOptional()
                .openapi({
                  description:
                    'The list of a key-value pair structure that contains extra parameters that can be applied when the image is generated. The <code>FormatConfig</code> key is the <code>JPEGQuality</code>, which indicates the JPEG quality key to be used to generate the image. The <code>FormatConfig</code> value accepts ints from 1 to 100. If the value is 1, the image will be generated with less quality and the best compression. If the value is 100, the image will be generated with the best quality and less compression. If no value is provided, the default value of the <code>JPEGQuality</code> key will be set to 80.',
                }),
              WidthPixels: z
                .int()
                .min(1)
                .max(3840)
                .exactOptional()
                .openapi({
                  description:
                    'The width of the output image that is used in conjunction with the <code>HeightPixels</code> parameter. When both <code>WidthPixels</code> and <code>HeightPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>WidthPixels</code> parameter is provided or if only the <code>HeightPixels</code> is provided, a <code>ValidationException</code> will be thrown. If neither parameter is provided, the original image size from the stream will be returned.',
                }),
              HeightPixels: z
                .int()
                .min(1)
                .max(2160)
                .exactOptional()
                .openapi({
                  description:
                    'The height of the output image that is used in conjunction with the <code>WidthPixels</code> parameter. When both <code>HeightPixels</code> and <code>WidthPixels</code> parameters are provided, the image will be stretched to fit the specified aspect ratio. If only the <code>HeightPixels</code> parameter is provided, its original aspect ratio will be used to calculate the <code>WidthPixels</code> ratio. If neither parameter is provided, the original image size will be returned.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(100)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The maximum number of images to be returned by the API. </p> <note> <p>The default limit is 100 images per API response. The additional results will be paginated. </p> </note>',
                }),
              NextToken: z
                .string()
                .regex(/[a-zA-Z0-9+\/]+={0,2}/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'A token that specifies where to start paginating the next set of Images. This is the <code>GetImages:NextToken</code> from a previously truncated response.',
                }),
            })
            .openapi({
              required: [
                'ImageSelectorType',
                'StartTimestamp',
                'EndTimestamp',
                'SamplingInterval',
                'Format',
              ],
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetImagesOutputSchema } },
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
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postGetMediaForFragmentListRoute = createRoute({
  method: 'post',
  path: '/getMediaForFragmentList',
  description:
    '<p>Gets media for a list of fragments (specified by fragment number) from the archived data in an Amazon Kinesis video stream.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>GetMediaForFragmentList</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <p>For limits, see <a href="http://docs.aws.amazon.com/kinesisvideostreams/latest/dg/limits.html">Kinesis Video Streams Limits</a>.</p> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>',
  operationId: 'GetMediaForFragmentList',
  request: {
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
                    'The name of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamARN</code> parameter.',
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
                    'The Amazon Resource Name (ARN) of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamName</code> parameter.',
                }),
              Fragments: z
                .array(FragmentNumberStringSchema)
                .min(1)
                .max(1000)
                .openapi({
                  description:
                    'A list of the numbers of fragments for which to retrieve media. You retrieve these values with <a>ListFragments</a>.',
                }),
            })
            .openapi({ required: ['Fragments'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetMediaForFragmentListOutputSchema } },
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
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})

export const postListFragmentsRoute = createRoute({
  method: 'post',
  path: '/listFragments',
  description:
    '<p>Returns a list of <a>Fragment</a> objects from the specified stream and timestamp range within the archived data.</p> <p>Listing fragments is eventually consistent. This means that even if the producer receives an acknowledgment that a fragment is persisted, the result might not be returned immediately from a request to <code>ListFragments</code>. However, results are typically available in less than one second.</p> <note> <p>You must first call the <code>GetDataEndpoint</code> API to get an endpoint. Then send the <code>ListFragments</code> requests to this endpoint using the <a href="https://docs.aws.amazon.com/cli/latest/reference/">--endpoint-url parameter</a>. </p> </note> <important> <p>If an error is thrown after invoking a Kinesis Video Streams archived media API, in addition to the HTTP status code and the response body, it includes the following pieces of information: </p> <ul> <li> <p> <code>x-amz-ErrorType</code> HTTP header – contains a more specific error type in addition to what the HTTP status code provides. </p> </li> <li> <p> <code>x-amz-RequestId</code> HTTP header – if you want to report an issue to AWS, the support team can better diagnose the problem if given the Request Id.</p> </li> </ul> <p>Both the HTTP status code and the ErrorType header can be utilized to make programmatic decisions about whether errors are retry-able and under what conditions, as well as provide information on what actions the client programmer might need to take in order to successfully try again.</p> <p>For more information, see the <b>Errors</b> section at the bottom of this topic, as well as <a href="https://docs.aws.amazon.com/kinesisvideostreams/latest/dg/CommonErrors.html">Common Errors</a>. </p> </important>',
  operationId: 'ListFragments',
  request: {
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
                .openapi({
                  description:
                    'The name of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamARN</code> parameter.',
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
                    'The Amazon Resource Name (ARN) of the stream from which to retrieve a fragment list. Specify either this parameter or the <code>StreamName</code> parameter.',
                }),
              MaxResults: z
                .int()
                .min(1)
                .max(1000)
                .exactOptional()
                .openapi({
                  description:
                    'The total number of fragments to return. If the total number of fragments available is more than the value specified in <code>max-results</code>, then a <a>ListFragmentsOutput$NextToken</a> is provided in the output that you can use to resume pagination.',
                }),
              NextToken: z
                .string()
                .regex(/[a-zA-Z0-9+\/]+={0,2}/)
                .min(1)
                .max(4096)
                .exactOptional()
                .openapi({
                  description:
                    'A token to specify where to start paginating. This is the <a>ListFragmentsOutput$NextToken</a> from a previously truncated response.',
                }),
              FragmentSelector: z
                .object({
                  FragmentSelectorType: FragmentSelectorTypeSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The origin of the timestamps to use (Server or Producer).',
                      }),
                  ).exactOptional(),
                  TimestampRange: TimestampRangeSchema.and(
                    z.any().openapi({ description: 'The range of timestamps to return.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>Describes the timestamp range and timestamp origin of a range of fragments.</p> <p>Only fragments with a start timestamp greater than or equal to the given start time and less than or equal to the end time are returned. For example, if a stream contains fragments with the following start timestamps: </p> <ul> <li> <p>00:00:00</p> </li> <li> <p>00:00:02</p> </li> <li> <p>00:00:04</p> </li> <li> <p>00:00:06</p> </li> </ul> <p> A fragment selector range with a start time of 00:00:01 and end time of 00:00:04 would return the fragments with start times of 00:00:02 and 00:00:04. </p>',
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
      content: { 'application/json': { schema: ListFragmentsOutputSchema } },
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
      description: 'ClientLimitExceededException',
      content: { 'application/json': { schema: ClientLimitExceededExceptionSchema } },
    },
    483: {
      description: 'NotAuthorizedException',
      content: { 'application/json': { schema: NotAuthorizedExceptionSchema } },
    },
  },
})
