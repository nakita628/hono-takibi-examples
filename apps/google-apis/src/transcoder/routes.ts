import { createRoute, z } from '@hono/zod-openapi'

const AdBreakSchema = z
  .object({
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Start time in seconds for the ad break, relative to the output file timeline. The default is `0s`.',
      }),
  })
  .openapi({ description: 'Ad break.', required: [] })
  .openapi('AdBreak')

const AnimationEndSchema = z
  .object({
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time to end overlay object, in seconds. Default: 0' }),
  })
  .openapi({
    description:
      'End previous overlay animation from the video. Without AnimationEnd, the overlay object will keep the state of previous animation until the end of the video.',
    required: [],
  })
  .openapi('AnimationEnd')

const NormalizedCoordinateSchema = z
  .object({
    x: z.float64().exactOptional().openapi({ description: 'Normalized x coordinate.' }),
    y: z.float64().exactOptional().openapi({ description: 'Normalized y coordinate.' }),
  })
  .openapi({ description: '2D normalized coordinates. Default: `{0.0, 0.0}`', required: [] })
  .openapi('NormalizedCoordinate')

const AnimationFadeSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time to end the fade animation, in seconds. Default: `start_time_offset` + 1s',
      }),
    fadeType: z
      .enum(['FADE_TYPE_UNSPECIFIED', 'FADE_IN', 'FADE_OUT'])
      .exactOptional()
      .openapi({ description: 'Required. Type of fade animation: `FADE_IN` or `FADE_OUT`.' }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'The time to start the fade animation, in seconds. Default: 0' }),
    xy: NormalizedCoordinateSchema.exactOptional().openapi({
      description:
        'Normalized coordinates based on output video resolution. Valid values: `0.0`–`1.0`. `xy` is the upper-left coordinate of the overlay object. For example, use the x and y coordinates {0,0} to position the top-left corner of the overlay animation in the top-left corner of the output video.',
    }),
  })
  .openapi({ description: 'Display overlay object with fade animation.', required: [] })
  .openapi('AnimationFade')

const AnimationStaticSchema = z
  .object({
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time to start displaying the overlay object, in seconds. Default: 0',
      }),
    xy: NormalizedCoordinateSchema.exactOptional().openapi({
      description:
        'Normalized coordinates based on output video resolution. Valid values: `0.0`–`1.0`. `xy` is the upper-left coordinate of the overlay object. For example, use the x and y coordinates {0,0} to position the top-left corner of the overlay animation in the top-left corner of the output video.',
    }),
  })
  .openapi({ description: 'Display static overlay object.', required: [] })
  .openapi('AnimationStatic')

const AnimationSchema = z
  .object({
    animationEnd: AnimationEndSchema.exactOptional().openapi({
      description: 'End previous animation.',
    }),
    animationFade: AnimationFadeSchema.exactOptional().openapi({
      description: 'Display overlay object with fade animation.',
    }),
    animationStatic: AnimationStaticSchema.exactOptional().openapi({
      description: 'Display static overlay object.',
    }),
  })
  .openapi({ description: 'Animation types.', required: [] })
  .openapi('Animation')

const AudioSchema = z
  .object({
    highBoost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable boosting high frequency components. The default is `false`. **Note:** This field is not supported.',
      }),
    lowBoost: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable boosting low frequency components. The default is `false`. **Note:** This field is not supported.',
      }),
    lufs: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Specify audio loudness normalization in loudness units relative to full scale (LUFS). Enter a value between -24 and 0 (the default), where: * -24 is the Advanced Television Systems Committee (ATSC A/85) standard * -23 is the EU R128 broadcast standard * -19 is the prior standard for online mono audio * -18 is the ReplayGain standard * -16 is the prior standard for stereo audio * -14 is the new online audio standard recommended by Spotify, as well as Amazon Echo * 0 disables normalization',
      }),
  })
  .openapi({ description: 'Audio preprocessing configuration.', required: [] })
  .openapi('Audio')

const AudioMappingSchema = z
  .object({
    atomKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The `EditAtom.key` that references the atom with audio inputs in the `Job.edit_list`.',
      }),
    gainDb: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Audio volume control in dB. Negative values decrease volume, positive values increase. The default is 0.',
      }),
    inputChannel: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Required. The zero-based index of the channel in the input audio stream.',
      }),
    inputKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The `Input.key` that identifies the input file.' }),
    inputTrack: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The zero-based index of the track in the input file.' }),
    outputChannel: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Required. The zero-based index of the channel in the output audio stream.',
      }),
  })
  .openapi({
    description: 'The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.',
    required: [],
  })
  .openapi('AudioMapping')

const AudioStreamSchema = z
  .object({
    bitrateBps: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. Audio bitrate in bits per second. Must be between 1 and 10,000,000.',
      }),
    channelCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of audio channels. Must be between 1 and 6. The default is 2.',
      }),
    channelLayout: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of channel names specifying layout of the audio channels. This only affects the metadata embedded in the container headers, if supported by the specified format. The default is `["fl", "fr"]`. Supported channel names: - `fl` - Front left channel - `fr` - Front right channel - `sl` - Side left channel - `sr` - Side right channel - `fc` - Front center channel - `lfe` - Low frequency',
      }),
    codec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The codec for this audio stream. The default is `aac`. Supported audio codecs: - `aac` - `aac-he` - `aac-he-v2` - `mp3` - `ac3` - `eac3`',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name for this particular audio stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files.',
      }),
    mapping: z
      .array(AudioMappingSchema)
      .exactOptional()
      .openapi({
        description: 'The mapping for the `Job.edit_list` atoms with audio `EditAtom.inputs`.',
      }),
    sampleRateHertz: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The audio sample rate in Hertz. The default is 48000 Hertz.' }),
  })
  .openapi({ description: 'Audio stream resource.', required: [] })
  .openapi('AudioStream')

const BwdifConfigSchema = z
  .object({
    deinterlaceAllFrames: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`.',
      }),
    mode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values: - `send_frame`: Output one frame for each frame - `send_field`: Output one frame for each field',
      }),
    parity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values: - `tff`: Assume the top field is first - `bff`: Assume the bottom field is first - `auto`: Enable automatic detection of field parity',
      }),
  })
  .openapi({ description: 'Bob Weaver Deinterlacing Filter Configuration.', required: [] })
  .openapi('BwdifConfig')

const ColorSchema = z
  .object({
    brightness: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Control brightness of the video. Enter a value between -1 and 1, where -1 is minimum brightness and 1 is maximum brightness. 0 is no change. The default is 0.',
      }),
    contrast: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Control black and white contrast of the video. Enter a value between -1 and 1, where -1 is minimum contrast and 1 is maximum contrast. 0 is no change. The default is 0.',
      }),
    saturation: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Control color saturation of the video. Enter a value between -1 and 1, where -1 is fully desaturated and 1 is maximum saturation. 0 is no change. The default is 0.',
      }),
  })
  .openapi({
    description:
      'Color preprocessing configuration. **Note:** This configuration is not supported.',
    required: [],
  })
  .openapi('Color')

const CropSchema = z
  .object({
    bottomPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pixels to crop from the bottom. The default is 0.' }),
    leftPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pixels to crop from the left. The default is 0.' }),
    rightPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pixels to crop from the right. The default is 0.' }),
    topPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pixels to crop from the top. The default is 0.' }),
  })
  .openapi({
    description:
      'Video cropping configuration for the input video. The cropped input video is scaled to match the output resolution.',
    required: [],
  })
  .openapi('Crop')

const DeblockSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable deblocker. The default is `false`.' }),
    strength: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Set strength of the deblocker. Enter a value between 0 and 1. The higher the value, the stronger the block removal. 0 is no deblocking. The default is 0.',
      }),
  })
  .openapi({
    description:
      'Deblock preprocessing configuration. **Note:** This configuration is not supported.',
    required: [],
  })
  .openapi('Deblock')

const YadifConfigSchema = z
  .object({
    deinterlaceAllFrames: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Deinterlace all frames rather than just the frames identified as interlaced. The default is `false`.',
      }),
    disableSpatialInterlacing: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Disable spacial interlacing. The default is `false`.' }),
    mode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specifies the deinterlacing mode to adopt. The default is `send_frame`. Supported values: - `send_frame`: Output one frame for each frame - `send_field`: Output one frame for each field',
      }),
    parity: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The picture field parity assumed for the input interlaced video. The default is `auto`. Supported values: - `tff`: Assume the top field is first - `bff`: Assume the bottom field is first - `auto`: Enable automatic detection of field parity',
      }),
  })
  .openapi({ description: 'Yet Another Deinterlacing Filter Configuration.', required: [] })
  .openapi('YadifConfig')

const DeinterlaceSchema = z
  .object({
    bwdif: BwdifConfigSchema.exactOptional().openapi({
      description: 'Specifies the Bob Weaver Deinterlacing Filter Configuration.',
    }),
    yadif: YadifConfigSchema.exactOptional().openapi({
      description: 'Specifies the Yet Another Deinterlacing Filter Configuration.',
    }),
  })
  .openapi({ description: 'Deinterlace configuration for input video.', required: [] })
  .openapi('Deinterlace')

const DenoiseSchema = z
  .object({
    strength: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Set strength of the denoise. Enter a value between 0 and 1. The higher the value, the smoother the image. 0 is no denoising. The default is 0.',
      }),
    tune: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Set the denoiser mode. The default is `standard`. Supported denoiser modes: - `standard` - `grain`',
      }),
  })
  .openapi({
    description:
      'Denoise preprocessing configuration. **Note:** This configuration is not supported.',
    required: [],
  })
  .openapi('Denoise')

const EditAtomSchema = z
  .object({
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'End time in seconds for the atom, relative to the input file timeline. When `end_time_offset` is not specified, the `inputs` are used until the end of the atom.',
      }),
    inputs: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of `Input.key`s identifying files that should be used in this atom. The listed `inputs` must have the same timeline.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A unique key for this atom. Must be specified when using advanced mapping.',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Start time in seconds for the atom, relative to the input file timeline. The default is `0s`.',
      }),
  })
  .openapi({ description: 'Edit atom.', required: [] })
  .openapi('EditAtom')

const TextMappingSchema = z
  .object({
    atomKey: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The `EditAtom.key` that references atom with text inputs in the `Job.edit_list`.',
      }),
    inputKey: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The `Input.key` that identifies the input file.' }),
    inputTrack: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Required. The zero-based index of the track in the input file.' }),
  })
  .openapi({
    description: 'The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.',
    required: [],
  })
  .openapi('TextMapping')

const TextStreamSchema = z
  .object({
    codec: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The codec for this text stream. The default is `webvtt`. Supported text codecs: - `srt` - `ttml` - `cea608` - `cea708` - `webvtt`',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name for this particular text stream that will be added to the HLS/DASH manifest. Not supported in MP4 files.',
      }),
    languageCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The BCP-47 language code, such as `en-US` or `sr-Latn`. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files.',
      }),
    mapping: z
      .array(TextMappingSchema)
      .exactOptional()
      .openapi({
        description: 'The mapping for the `Job.edit_list` atoms with text `EditAtom.inputs`.',
      }),
  })
  .openapi({
    description: 'Encoding of a text stream. For example, closed captions or subtitles.',
    required: [],
  })
  .openapi('TextStream')

const H264CodecSettingsSchema = z
  .object({
    allowOpenGop: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`.',
      }),
    aqStrength: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.',
      }),
    bFrameCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than `VideoStream.gop_frame_count` if set. The default is 0.',
      }),
    bPyramid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`.',
      }),
    bitrateBps: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000.',
      }),
    crfLevel: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.',
      }),
    enableTwoPass: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Use two-pass encoding strategy to achieve better video quality. `VideoStream.rate_control_mode` must be `vbr`. The default is `false`.',
      }),
    entropyCoder: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The entropy coder to use. The default is `cabac`. Supported entropy coders: - `cavlc` - `cabac`',
      }),
    frameRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculating frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.',
      }),
    gopDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`.',
      }),
    gopFrameCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Select the GOP size based on the specified frame count. Must be greater than zero.',
      }),
    heightPixels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.',
      }),
    pixelFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format',
      }),
    preset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enforces the specified codec preset. The default is `veryfast`. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Preset). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.',
      }),
    profile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enforces the specified codec profile. The following profiles are supported: * `baseline` * `main` * `high` (default) The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.',
      }),
    rateControlMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify the `rate_control_mode`. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate - `crf` - constant rate factor',
      }),
    tune: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enforces the specified codec tune. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.264#Tune). Note that certain values for this field may cause the transcoder to override other fields you set in the `H264CodecSettings` message.',
      }),
    vbvFullnessBits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of `VideoStream.vbv_size_bits`.',
      }),
    vbvSizeBits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`.',
      }),
    widthPixels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.',
      }),
  })
  .openapi({ description: 'H264 codec settings.', required: [] })
  .openapi('H264CodecSettings')

const H265CodecSettingsSchema = z
  .object({
    allowOpenGop: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Specifies whether an open Group of Pictures (GOP) structure should be allowed or not. The default is `false`.',
      }),
    aqStrength: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Specify the intensity of the adaptive quantizer (AQ). Must be between 0 and 1, where 0 disables the quantizer and 1 maximizes the quantizer. A higher value equals a lower bitrate but smoother image. The default is 0.',
      }),
    bFrameCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The number of consecutive B-frames. Must be greater than or equal to zero. Must be less than `VideoStream.gop_frame_count` if set. The default is 0.',
      }),
    bPyramid: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Allow B-pyramid for reference frame selection. This may not be supported on all decoders. The default is `false`.',
      }),
    bitrateBps: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 800,000,000.',
      }),
    crfLevel: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21.',
      }),
    enableTwoPass: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Use two-pass encoding strategy to achieve better video quality. `VideoStream.rate_control_mode` must be `vbr`. The default is `false`.',
      }),
    frameRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculating frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.',
      }),
    gopDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`.',
      }),
    gopFrameCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Select the GOP size based on the specified frame count. Must be greater than zero.',
      }),
    heightPixels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.',
      }),
    pixelFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format',
      }),
    preset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enforces the specified codec preset. The default is `veryfast`. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.265). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message.',
      }),
    profile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enforces the specified codec profile. The following profiles are supported: * 8-bit profiles * `main` (default) * `main-intra` * `mainstillpicture` * 10-bit profiles * `main10` (default) * `main10-intra` * `main422-10` * `main422-10-intra` * `main444-10` * `main444-10-intra` * 12-bit profiles * `main12` (default) * `main12-intra` * `main422-12` * `main422-12-intra` * `main444-12` * `main444-12-intra` The available options are [FFmpeg-compatible](https://x265.readthedocs.io/). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message.',
      }),
    rateControlMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify the `rate_control_mode`. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate - `crf` - constant rate factor',
      }),
    tune: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enforces the specified codec tune. The available options are [FFmpeg-compatible](https://trac.ffmpeg.org/wiki/Encode/H.265). Note that certain values for this field may cause the transcoder to override other fields you set in the `H265CodecSettings` message.',
      }),
    vbvFullnessBits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Initial fullness of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to 90% of `VideoStream.vbv_size_bits`.',
      }),
    vbvSizeBits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Size of the Video Buffering Verifier (VBV) buffer in bits. Must be greater than zero. The default is equal to `VideoStream.bitrate_bps`.',
      }),
    widthPixels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.',
      }),
  })
  .openapi({ description: 'H265 codec settings.', required: [] })
  .openapi('H265CodecSettings')

const Vp9CodecSettingsSchema = z
  .object({
    bitrateBps: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The video bitrate in bits per second. The minimum value is 1,000. The maximum value is 480,000,000.',
      }),
    crfLevel: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Target CRF level. Must be between 10 and 36, where 10 is the highest quality and 36 is the most efficient compression. The default is 21. **Note:** This field is not supported.',
      }),
    frameRate: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Required. The target video frame rate in frames per second (FPS). Must be less than or equal to 120. Will default to the input frame rate if larger than the input frame rate. The API will generate an output FPS that is divisible by the input FPS, and smaller or equal to the target FPS. See [Calculating frame rate](https://cloud.google.com/transcoder/docs/concepts/frame-rate) for more information.',
      }),
    gopDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Select the GOP size based on the specified duration. The default is `3s`. Note that `gopDuration` must be less than or equal to [`segmentDuration`](#SegmentSettings), and [`segmentDuration`](#SegmentSettings) must be divisible by `gopDuration`.',
      }),
    gopFrameCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Select the GOP size based on the specified frame count. Must be greater than zero.',
      }),
    heightPixels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The height of the video in pixels. Must be an even integer. When not specified, the height is adjusted to match the specified width and input aspect ratio. If both are omitted, the input height is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.',
      }),
    pixelFormat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Pixel format to use. The default is `yuv420p`. Supported pixel formats: - `yuv420p` pixel format - `yuv422p` pixel format - `yuv444p` pixel format - `yuv420p10` 10-bit HDR pixel format - `yuv422p10` 10-bit HDR pixel format - `yuv444p10` 10-bit HDR pixel format - `yuv420p12` 12-bit HDR pixel format - `yuv422p12` 12-bit HDR pixel format - `yuv444p12` 12-bit HDR pixel format',
      }),
    profile: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Enforces the specified codec profile. The following profiles are supported: * `profile0` (default) * `profile1` * `profile2` * `profile3` The available options are [WebM-compatible](https://www.webmproject.org/vp9/profiles/). Note that certain values for this field may cause the transcoder to override other fields you set in the `Vp9CodecSettings` message.',
      }),
    rateControlMode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Specify the `rate_control_mode`. The default is `vbr`. Supported rate control modes: - `vbr` - variable bitrate',
      }),
    widthPixels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The width of the video in pixels. Must be an even integer. When not specified, the width is adjusted to match the specified height and input aspect ratio. If both are omitted, the input width is used. For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.',
      }),
  })
  .openapi({ description: 'VP9 codec settings.', required: [] })
  .openapi('Vp9CodecSettings')

const VideoStreamSchema = z
  .object({
    h264: H264CodecSettingsSchema.exactOptional().openapi({ description: 'H264 codec settings.' }),
    h265: H265CodecSettingsSchema.exactOptional().openapi({ description: 'H265 codec settings.' }),
    vp9: Vp9CodecSettingsSchema.exactOptional().openapi({ description: 'VP9 codec settings.' }),
  })
  .openapi({ description: 'Video stream resource.', required: [] })
  .openapi('VideoStream')

const ElementaryStreamSchema = z
  .object({
    audioStream: AudioStreamSchema.exactOptional().openapi({
      description: 'Encoding of an audio stream.',
    }),
    key: z
      .string()
      .exactOptional()
      .openapi({ description: 'A unique key for this elementary stream.' }),
    textStream: TextStreamSchema.exactOptional().openapi({
      description: 'Encoding of a text stream. For example, closed captions or subtitles.',
    }),
    videoStream: VideoStreamSchema.exactOptional().openapi({
      description: 'Encoding of a video stream.',
    }),
  })
  .openapi({
    description:
      'Encoding of an input file such as an audio, video, or text track. Elementary streams must be packaged before mapping and sharing between different output formats.',
    required: [],
  })
  .openapi('ElementaryStream')

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const ImageSchema = z
  .object({
    alpha: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'Target image opacity. Valid values are from `1.0` (solid, default) to `0.0` (transparent), exclusive. Set this to a value greater than `0.0`.',
      }),
    resolution: NormalizedCoordinateSchema.exactOptional().openapi({
      description:
        'Normalized image resolution, based on output video resolution. Valid values: `0.0`–`1.0`. To respect the original image aspect ratio, set either `x` or `y` to `0.0`. To use the original image resolution, set both `x` and `y` to `0.0`.',
    }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. URI of the image in Cloud Storage. For example, `gs://bucket/inputs/image.png`. Only PNG and JPEG images are supported.',
      }),
  })
  .openapi({ description: 'Overlaid image.', required: [] })
  .openapi('Image')

const PadSchema = z
  .object({
    bottomPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pixels to add to the bottom. The default is 0.' }),
    leftPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pixels to add to the left. The default is 0.' }),
    rightPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pixels to add to the right. The default is 0.' }),
    topPixels: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of pixels to add to the top. The default is 0.' }),
  })
  .openapi({
    description:
      'Pad filter configuration for the input video. The padded input video is scaled after padding with black to match the output resolution.',
    required: [],
  })
  .openapi('Pad')

const PreprocessingConfigSchema = z
  .object({
    audio: AudioSchema.exactOptional().openapi({
      description: 'Audio preprocessing configuration.',
    }),
    color: ColorSchema.exactOptional().openapi({
      description: 'Color preprocessing configuration.',
    }),
    crop: CropSchema.exactOptional().openapi({
      description: 'Specify the video cropping configuration.',
    }),
    deblock: DeblockSchema.exactOptional().openapi({
      description: 'Deblock preprocessing configuration.',
    }),
    deinterlace: DeinterlaceSchema.exactOptional().openapi({
      description: 'Specify the video deinterlace configuration.',
    }),
    denoise: DenoiseSchema.exactOptional().openapi({
      description: 'Denoise preprocessing configuration.',
    }),
    pad: PadSchema.exactOptional().openapi({
      description: 'Specify the video pad filter configuration.',
    }),
  })
  .openapi({ description: 'Preprocessing configurations.', required: [] })
  .openapi('PreprocessingConfig')

const InputSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique key for this input. Must be specified when using advanced mapping and edit lists.',
      }),
    preprocessingConfig: PreprocessingConfigSchema.exactOptional().openapi({
      description: 'Preprocessing configurations.',
    }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). If empty, the value is populated from `Job.input_uri`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).',
      }),
  })
  .openapi({ description: 'Input asset.', required: [] })
  .openapi('Input')

const ManifestSchema = z
  .object({
    fileName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the generated file. The default is `manifest` with the extension suffix corresponding to the `Manifest.type`.',
      }),
    muxStreams: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. List of user given `MuxStream.key`s that should appear in this manifest. When `Manifest.type` is `HLS`, a media manifest with name `MuxStream.key` and `.m3u8` extension is generated for each element of the `Manifest.mux_streams`.',
      }),
    type: z
      .enum(['MANIFEST_TYPE_UNSPECIFIED', 'HLS', 'DASH'])
      .exactOptional()
      .openapi({ description: 'Required. Type of the manifest, can be `HLS` or `DASH`.' }),
  })
  .openapi({ description: 'Manifest configuration.', required: [] })
  .openapi('Manifest')

const SegmentSettingsSchema = z
  .object({
    individualSegments: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Required. Create an individual segment file. The default is `false`.',
      }),
    segmentDuration: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Duration of the segments in seconds. The default is `6.0s`. Note that `segmentDuration` must be greater than or equal to [`gopDuration`](#videostream), and `segmentDuration` must be divisible by [`gopDuration`](#videostream).',
      }),
  })
  .openapi({ description: 'Segment settings for `ts`, `fmp4` and `vtt`.', required: [] })
  .openapi('SegmentSettings')

const MuxStreamSchema = z
  .object({
    container: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The container format. The default is `mp4` Supported container formats: - `ts` - `fmp4`- the corresponding file extension is `.m4s` - `mp4` - `vtt` See also: [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats)',
      }),
    elementaryStreams: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of `ElementaryStream.key`s multiplexed in this stream.' }),
    fileName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the generated file. The default is `MuxStream.key` with the extension suffix corresponding to the `MuxStream.container`. Individual segments also have an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `mux_stream0000000123.ts`.',
      }),
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A unique key for this multiplexed stream. HLS media manifests will be named `MuxStream.key` with the `.m3u8` extension suffix.',
      }),
    segmentSettings: SegmentSettingsSchema.exactOptional().openapi({
      description: 'Segment settings for `ts`, `fmp4` and `vtt`.',
    }),
  })
  .openapi({ description: 'Multiplexing settings for output stream.', required: [] })
  .openapi('MuxStream')

const OutputSchema = z
  .object({
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI for the output file(s). For example, `gs://my-bucket/outputs/`. If empty, the value is populated from `Job.output_uri`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).',
      }),
  })
  .openapi({ description: 'Location of output file(s) in a Cloud Storage bucket.', required: [] })
  .openapi('Output')

const OverlaySchema = z
  .object({
    animations: z
      .array(AnimationSchema)
      .exactOptional()
      .openapi({
        description:
          'List of Animations. The list should be chronological, without any time overlap.',
      }),
    image: ImageSchema.exactOptional().openapi({ description: 'Image overlay.' }),
  })
  .openapi({ description: 'Overlay configuration.', required: [] })
  .openapi('Overlay')

const PubsubDestinationSchema = z
  .object({
    topic: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the Pub/Sub topic to publish job completion notification to. For example: `projects/{project}/topics/{topic}`.',
      }),
  })
  .openapi({ description: 'A Pub/Sub destination.', required: [] })
  .openapi('PubsubDestination')

const SpriteSheetSchema = z
  .object({
    columnCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of sprites per row in a sprite sheet. The default is 0, which indicates no maximum limit.',
      }),
    endTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'End time in seconds, relative to the output file timeline. When `end_time_offset` is not specified, the sprites are generated until the end of the output file.',
      }),
    filePrefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. File name prefix for the generated sprite sheets. Each sprite sheet has an incremental 10-digit zero-padded suffix starting from 0 before the extension, such as `sprite_sheet0000000123.jpeg`.',
      }),
    format: z
      .string()
      .exactOptional()
      .openapi({ description: 'Format type. The default is `jpeg`. Supported formats: - `jpeg`' }),
    interval: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Starting from `0s`, create sprites at regular intervals. Specify the interval value in seconds.',
      }),
    quality: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The quality of the generated sprite sheet. Enter a value between 1 and 100, where 1 is the lowest quality and 100 is the highest quality. The default is 100. A high quality value corresponds to a low image data compression ratio.',
      }),
    rowCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of rows per sprite sheet. When the sprite sheet is full, a new sprite sheet is created. The default is 0, which indicates no maximum limit.',
      }),
    spriteHeightPixels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The height of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_height_pixels field or the SpriteSheet.sprite_width_pixels field, but not both (the API will automatically calculate the missing field). For portrait videos that contain horizontal ASR and rotation metadata, provide the height, in pixels, per the horizontal ASR. The API calculates the width per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.',
      }),
    spriteWidthPixels: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Required. The width of sprite in pixels. Must be an even integer. To preserve the source aspect ratio, set the SpriteSheet.sprite_width_pixels field or the SpriteSheet.sprite_height_pixels field, but not both (the API will automatically calculate the missing field). For portrait videos that contain horizontal ASR and rotation metadata, provide the width, in pixels, per the horizontal ASR. The API calculates the height per the horizontal ASR. The API detects any rotation metadata and swaps the requested height and width for the output.',
      }),
    startTimeOffset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Start time in seconds, relative to the output file timeline. Determines the first sprite to pick. The default is `0s`.',
      }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Total number of sprites. Create the specified number of sprites distributed evenly across the timeline of the output media. The default is 100.',
      }),
  })
  .openapi({ description: 'Sprite sheet configuration.', required: [] })
  .openapi('SpriteSheet')

const JobConfigSchema = z
  .object({
    adBreaks: z
      .array(AdBreakSchema)
      .exactOptional()
      .openapi({
        description:
          'List of ad breaks. Specifies where to insert ad break tags in the output manifests.',
      }),
    editList: z
      .array(EditAtomSchema)
      .exactOptional()
      .openapi({
        description:
          'List of `Edit atom`s. Defines the ultimate timeline of the resulting file or manifest.',
      }),
    elementaryStreams: z
      .array(ElementaryStreamSchema)
      .exactOptional()
      .openapi({ description: 'List of elementary streams.' }),
    inputs: z
      .array(InputSchema)
      .exactOptional()
      .openapi({ description: 'List of input assets stored in Cloud Storage.' }),
    manifests: z
      .array(ManifestSchema)
      .exactOptional()
      .openapi({ description: 'List of output manifests.' }),
    muxStreams: z
      .array(MuxStreamSchema)
      .exactOptional()
      .openapi({ description: 'List of multiplexing settings for output streams.' }),
    output: OutputSchema.exactOptional().openapi({ description: 'Output configuration.' }),
    overlays: z
      .array(OverlaySchema)
      .exactOptional()
      .openapi({ description: 'List of overlays on the output video, in descending Z-order.' }),
    pubsubDestination: PubsubDestinationSchema.exactOptional().openapi({
      description: 'Destination on Pub/Sub.',
    }),
    spriteSheets: z
      .array(SpriteSheetSchema)
      .exactOptional()
      .openapi({
        description:
          'List of output sprite sheets. Spritesheets require at least one VideoStream in the Jobconfig.',
      }),
  })
  .openapi({ description: 'Job configuration', required: [] })
  .openapi('JobConfig')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'The status code, which should be an enum value of google.rpc.Code.',
      }),
    details: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details. There is a common set of message types for APIs to use.',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const JobSchema = z
  .object({
    config: JobConfigSchema.exactOptional().openapi({
      description: 'The configuration for this job.',
    }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the job was created.', readOnly: true }),
    endTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the transcoding finished.', readOnly: true }),
    error: StatusSchema.exactOptional().openapi({
      description:
        'Output only. An error object that describes the reason for the failure. This property is always present when `state` is `FAILED`.',
      readOnly: true,
    }),
    inputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Specify the `input_uri` to populate empty `uri` fields in each element of `Job.config.inputs` or `JobTemplate.config.inputs` when using template. URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, `gs://bucket/inputs/file.mp4`). See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).',
      }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The labels associated with this job. You can use these to organize and group your jobs.',
      }),
    mode: z
      .enum(['PROCESSING_MODE_UNSPECIFIED', 'PROCESSING_MODE_INTERACTIVE', 'PROCESSING_MODE_BATCH'])
      .exactOptional()
      .openapi({
        description:
          'The processing mode of the job. The default is `PROCESSING_MODE_INTERACTIVE`.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the job. Format: `projects/{project_number}/locations/{location}/jobs/{job}`',
      }),
    outputUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Specify the `output_uri` to populate an empty `Job.config.output.uri` or `JobTemplate.config.output.uri` when using template. URI for the output file(s). For example, `gs://my-bucket/outputs/`. See [Supported input and output formats](https://cloud.google.com/transcoder/docs/concepts/supported-input-and-output-formats).',
      }),
    startTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the transcoding started.', readOnly: true }),
    state: z
      .enum(['PROCESSING_STATE_UNSPECIFIED', 'PENDING', 'RUNNING', 'SUCCEEDED', 'FAILED'])
      .exactOptional()
      .openapi({ description: 'Output only. The current state of the job.', readOnly: true }),
    templateId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Input only. Specify the `template_id` to use for populating `Job.config`. The default is `preset/web-hd`, which is the only supported preset. User defined JobTemplate: `{job_template_id}`',
      }),
    ttlAfterCompletionDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Job time to live value in days, which will be effective after job completion. Job should be deleted automatically after the given TTL. Enter a value between 1 and 90. The default is 30.',
      }),
  })
  .openapi({ description: 'Transcoding job resource.', required: [] })
  .openapi('Job')

const JobTemplateSchema = z
  .object({
    config: JobConfigSchema.exactOptional().openapi({
      description: 'The configuration for this template.',
    }),
    labels: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The labels associated with this job template. You can use these to organize and group your job templates.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name of the job template. Format: `projects/{project_number}/locations/{location}/jobTemplates/{job_template}`',
      }),
  })
  .openapi({ description: 'Transcoding job template resource.', required: [] })
  .openapi('JobTemplate')

const ListJobTemplatesResponseSchema = z
  .object({
    jobTemplates: z
      .array(JobTemplateSchema)
      .exactOptional()
      .openapi({ description: 'List of job templates in the specified region.' }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'The pagination token.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of regions that could not be reached.' }),
  })
  .openapi({
    description: 'Response message for `TranscoderService.ListJobTemplates`.',
    required: [],
  })
  .openapi('ListJobTemplatesResponse')

const ListJobsResponseSchema = z
  .object({
    jobs: z
      .array(JobSchema)
      .exactOptional()
      .openapi({ description: 'List of jobs in the specified region.' }),
    nextPageToken: z.string().exactOptional().openapi({ description: 'The pagination token.' }),
    unreachable: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of regions that could not be reached.' }),
  })
  .openapi({ description: 'Response message for `TranscoderService.ListJobs`.', required: [] })
  .openapi('ListJobsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Returns the job template data.',
  operationId: 'transcoder.projects.locations.jobTemplates.get',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const deleteV1NameRoute = createRoute({
  method: 'delete',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Deletes a job template.',
  operationId: 'transcoder.projects.locations.jobTemplates.delete',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            description:
              'If set to true, and the job template is not found, the request will succeed but no action will be taken on the server.',
            in: 'query',
            name: 'allowMissing',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentJobTemplatesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/jobTemplates',
  tags: ['projects'],
  description: 'Lists job templates in the specified region.',
  operationId: 'transcoder.projects.locations.jobTemplates.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The filter expression, following the syntax outlined in https://google.aip.dev/160.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of items to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The `next_page_token` value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobTemplatesResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentJobTemplatesRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/jobTemplates',
  tags: ['projects'],
  description: 'Creates a job template in the specified region.',
  operationId: 'transcoder.projects.locations.jobTemplates.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      jobTemplateId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              "Required. The ID to use for the job template, which will become the final component of the job template's resource name. This value should be 4-63 characters, and valid characters must match the regular expression `a-zA-Z*`.",
            in: 'query',
            name: 'jobTemplateId',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobTemplateSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobTemplateSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentJobsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/jobs',
  tags: ['projects'],
  description: 'Lists jobs in the specified region.',
  operationId: 'transcoder.projects.locations.jobs.list',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The filter expression, following the syntax outlined in https://google.aip.dev/160.',
            in: 'query',
            name: 'filter',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.',
            in: 'query',
            name: 'orderBy',
            schema: { type: 'string' },
            required: false,
          },
        }),
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of items to return.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The `next_page_token` value returned from a previous List request, if any.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description: 'Required. Format: `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentJobsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/jobs',
  tags: ['projects'],
  description: 'Creates a job in the specified region.',
  operationId: 'transcoder.projects.locations.jobs.create',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    params: z.object({
      parent: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: JobSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JobSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
