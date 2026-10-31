import { createRoute, z } from '@hono/zod-openapi'

const CancelJobResponseSchema = z
  .object({})
  .openapi({
    description:
      'The response body contains a JSON object. If the job is successfully canceled, the value of <code>Success</code> is <code>true</code>.',
  })
  .openapi('CancelJobResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const IncompatibleVersionExceptionSchema = z.any().openapi('IncompatibleVersionException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ResourceInUseExceptionSchema = z.any().openapi('ResourceInUseException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const InternalServiceExceptionSchema = z.any().openapi('InternalServiceException')

const IdSchema = z
  .string()
  .regex(/^\d{13}-\w{6}$/)
  .openapi('Id')

const StringSchema = z.string().openapi('String')

const LongKeySchema = z.string().min(1).max(1024).openapi('LongKey')

const FrameRateSchema = z
  .string()
  .regex(/(^auto$)|(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)/)
  .openapi('FrameRate')

const ResolutionSchema = z
  .string()
  .regex(/(^auto$)|(^\d{1,5}x\d{1,5}$)/)
  .openapi('Resolution')

const AspectRatioSchema = z
  .string()
  .regex(/(^auto$)|(^1:1$)|(^4:3$)|(^3:2$)|(^16:9$)/)
  .openapi('AspectRatio')

const InterlacedSchema = z
  .string()
  .regex(/(^auto$)|(^true$)|(^false$)/)
  .openapi('Interlaced')

const JobContainerSchema = z
  .string()
  .regex(
    /(^auto$)|(^3gp$)|(^asf$)|(^avi$)|(^divx$)|(^flv$)|(^mkv$)|(^mov$)|(^mp4$)|(^mpeg$)|(^mpeg-ps$)|(^mpeg-ts$)|(^mxf$)|(^ogg$)|(^ts$)|(^vob$)|(^wav$)|(^webm$)|(^mp3$)|(^m4a$)|(^aac$)/,
  )
  .openapi('JobContainer')

const EncryptionModeSchema = z
  .string()
  .regex(/(^s3$)|(^s3-aws-kms$)|(^aes-cbc-pkcs7$)|(^aes-ctr$)|(^aes-gcm$)/)
  .openapi('EncryptionMode')

const Base64EncodedStringSchema = z
  .string()
  .regex(/^$|(^(?:[A-Za-z0-9\+\/]{4})*(?:[A-Za-z0-9\+\/]{2}==|[A-Za-z0-9\+\/]{3}=)?$)/)
  .openapi('Base64EncodedString')

const ZeroTo255StringSchema = z.string().min(0).max(255).openapi('ZeroTo255String')

const EncryptionSchema = z
  .object({
    Mode: EncryptionModeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The specific server-side encryption mode that you want Elastic Transcoder to use when decrypting your input files or encrypting your output files. Elastic Transcoder supports the following options:</p> <ul> <li> <p> <b>s3:</b> Amazon S3 creates and manages the keys used for encrypting your files.</p> </li> <li> <p> <b>s3-aws-kms:</b> Amazon S3 calls the Amazon Key Management Service, which creates and manages the keys that are used for encrypting your files. If you specify <code>s3-aws-kms</code> and you don't want to use the default key, you must add the AWS-KMS key that you want to use to your pipeline.</p> </li> <li> <p> <b>aes-cbc-pkcs7:</b> A padded cipher-block mode of operation originally used for HLS files.</p> </li> <li> <p> <b>aes-ctr:</b> AES Counter Mode.</p> </li> <li> <p> <b>aes-gcm:</b> AES Galois Counter Mode, a mode of operation that is an authenticated encryption format, meaning that a file, key, or initialization vector that has been tampered with fails the decryption process.</p> </li> </ul> <p>For all three AES options, you must provide the following settings, which must be base64-encoded:</p> <ul> <li> <p> <b>Key</b> </p> </li> <li> <p> <b>Key MD5</b> </p> </li> <li> <p> <b>Initialization Vector</b> </p> </li> </ul> <important> <p>For the AES modes, your private encryption keys and your unencrypted data are never stored by AWS; therefore, it is important that you safely manage your encryption keys. If you lose them, you won't be able to unencrypt your data.</p> </important>",
        }),
    ).exactOptional(),
    Key: Base64EncodedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The data encryption key that you want Elastic Transcoder to use to encrypt your output file, or that was used to encrypt your input file. The key must be base64-encoded and it must be one of the following bit lengths before being base64-encoded:</p> <p> <code>128</code>, <code>192</code>, or <code>256</code>. </p> <p>The key must also be encrypted by using the Amazon Key Management Service.</p>',
        }),
    ).exactOptional(),
    KeyMd5: Base64EncodedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MD5 digest of the key that you used to encrypt your input file, or that you want Elastic Transcoder to use to encrypt your output file. Elastic Transcoder uses the key digest as a checksum to make sure your key was not corrupted in transit. The key MD5 must be base64-encoded, and it must be exactly 16 bytes long before being base64-encoded.',
        }),
    ).exactOptional(),
    InitializationVector: ZeroTo255StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The series of random bits created by a random bit generator, unique for every encryption operation, that you used to encrypt your input files or that you want Elastic Transcoder to use to encrypt your output files. The initialization vector must be base64-encoded, and it must be exactly 16 bytes long before being base64-encoded.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The encryption settings, if any, that are used for decrypting your input files or encrypting your output files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file, otherwise you must specify the mode you want Elastic Transcoder to use to encrypt your output files.',
    required: [],
  })
  .openapi('Encryption')

const TimeSchema = z
  .string()
  .regex(
    /(^\d{1,5}(\.\d{0,3})?$)|(^([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)/,
  )
  .openapi('Time')

const TimeSpanSchema = z
  .object({
    StartTime: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "The place in the input file where you want a clip to start. The format can be either HH:mm:ss.SSS (maximum value: 23:59:59.999; SSS is thousandths of a second) or sssss.SSS (maximum value: 86399.999). If you don't specify a value, Elastic Transcoder starts at the beginning of the input file.",
        }),
    ).exactOptional(),
    Duration: TimeSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The duration of the clip. The format can be either HH:mm:ss.SSS (maximum value: 23:59:59.999; SSS is thousandths of a second) or sssss.SSS (maximum value: 86399.999). If you don't specify a value, Elastic Transcoder creates an output file from StartTime to the end of the file.</p> <p>If you specify a value longer than the duration of the input file, Elastic Transcoder transcodes the file and returns a warning message.</p>",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'Settings that determine when a clip begins and how long it lasts.',
    required: [],
  })
  .openapi('TimeSpan')

const CaptionMergePolicySchema = z
  .string()
  .regex(/(^MergeOverride$)|(^MergeRetain$)|(^Override$)/)
  .openapi('CaptionMergePolicy')

const KeySchema = z.string().min(1).max(255).openapi('Key')

const TimeOffsetSchema = z
  .string()
  .regex(
    /(^[+-]?\d{1,5}(\.\d{0,3})?$)|(^[+-]?([0-1]?[0-9]:|2[0-3]:)?([0-5]?[0-9]:)?[0-5]?[0-9](\.\d{0,3})?$)/,
  )
  .openapi('TimeOffset')

const NameSchema = z.string().min(1).max(40).openapi('Name')

const CaptionSourceSchema = z
  .object({
    Key: LongKeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the sidecar caption file that you want Elastic Transcoder to include in the output file.',
        }),
    ).exactOptional(),
    Language: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A string that specifies the language of the caption. If you specified multiple inputs with captions, the caption language must match in order to be included in the output. Specify this as one of:</p> <ul> <li> <p>2-character ISO 639-1 code</p> </li> <li> <p>3-character ISO 639-2 code</p> </li> </ul> <p>For more information on ISO language codes and language names, see the List of ISO 639-1 codes.</p>',
        }),
    ).exactOptional(),
    TimeOffset: TimeOffsetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For clip generation or captions that do not start at the same time as the associated video file, the <code>TimeOffset</code> tells Elastic Transcoder how much of the video to encode before including captions.</p> <p>Specify the TimeOffset in the form [+-]SS.sss or [+-]HH:mm:SS.ss.</p>',
        }),
    ).exactOptional(),
    Label: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The label of the caption shown in the player when choosing a language. We recommend that you put the caption language name here, in the language of the captions.',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings, if any, that Elastic Transcoder needs to decyrpt your caption sources, or that you want Elastic Transcoder to apply to your caption sources.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A source file for the input sidecar captions used during the transcoding process.',
    required: [],
  })
  .openapi('CaptionSource')

const CaptionSourcesSchema = z.array(CaptionSourceSchema).max(20).openapi('CaptionSources')

const InputCaptionsSchema = z
  .object({
    MergePolicy: CaptionMergePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A policy that determines how Elastic Transcoder handles the existence of multiple captions.</p> <ul> <li> <p> <b>MergeOverride:</b> Elastic Transcoder transcodes both embedded and sidecar captions into outputs. If captions for a language are embedded in the input file and also appear in a sidecar file, Elastic Transcoder uses the sidecar captions and ignores the embedded captions for that language.</p> </li> <li> <p> <b>MergeRetain:</b> Elastic Transcoder transcodes both embedded and sidecar captions into outputs. If captions for a language are embedded in the input file and also appear in a sidecar file, Elastic Transcoder uses the embedded captions and ignores the sidecar captions for that language. If <code>CaptionSources</code> is empty, Elastic Transcoder omits all sidecar captions from the output files.</p> </li> <li> <p> <b>Override:</b> Elastic Transcoder transcodes only the sidecar captions that you specify in <code>CaptionSources</code>.</p> </li> </ul> <p> <code>MergePolicy</code> cannot be null.</p>',
        }),
    ).exactOptional(),
    CaptionSources: CaptionSourcesSchema.and(
      z
        .any()
        .openapi({
          description:
            'Source files for the input sidecar captions used during the transcoding process. To omit all sidecar captions, leave <code>CaptionSources</code> blank.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The captions to be created, if any.', required: [] })
  .openapi('InputCaptions')

const NullableIntegerSchema = z.int().openapi('NullableInteger')

const FloatStringSchema = z
  .string()
  .regex(/^\d{1,5}(\.\d{0,5})?$/)
  .openapi('FloatString')

const NullableLongSchema = z.int().openapi('NullableLong')

const DetectedPropertiesSchema = z
  .object({
    Width: NullableIntegerSchema.and(
      z.any().openapi({ description: 'The detected width of the input file, in pixels.' }),
    ).exactOptional(),
    Height: NullableIntegerSchema.and(
      z.any().openapi({ description: 'The detected height of the input file, in pixels.' }),
    ).exactOptional(),
    FrameRate: FloatStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The detected frame rate of the input file, in frames per second.',
        }),
    ).exactOptional(),
    FileSize: NullableLongSchema.and(
      z.any().openapi({ description: 'The detected file size of the input file, in bytes.' }),
    ).exactOptional(),
    DurationMillis: NullableLongSchema.and(
      z.any().openapi({ description: 'The detected duration of the input file, in milliseconds.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The detected properties of the input file. Elastic Transcoder identifies these values from the input file.',
    required: [],
  })
  .openapi('DetectedProperties')

const JobInputSchema = z
  .object({
    Key: LongKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The name of the file to transcode. Elsewhere in the body of the JSON block is the the ID of the pipeline to use for processing the job. The <code>InputBucket</code> object in that pipeline tells Elastic Transcoder which Amazon S3 bucket to get the file from. </p> <p>If the file name includes a prefix, such as <code>cooking/lasagna.mpg</code>, include the prefix in the key. If the file isn't in the specified bucket, Elastic Transcoder returns an error.</p>",
        }),
    ).exactOptional(),
    FrameRate: FrameRateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The frame rate of the input file. If you want Elastic Transcoder to automatically detect the frame rate of the input file, specify <code>auto</code>. If you want to specify the frame rate for the input file, enter one of the following values: </p> <p> <code>10</code>, <code>15</code>, <code>23.97</code>, <code>24</code>, <code>25</code>, <code>29.97</code>, <code>30</code>, <code>60</code> </p> <p>If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection of the frame rate.</p>',
        }),
    ).exactOptional(),
    Resolution: ResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            'This value must be <code>auto</code>, which causes Elastic Transcoder to automatically detect the resolution of the input file.',
        }),
    ).exactOptional(),
    AspectRatio: AspectRatioSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The aspect ratio of the input file. If you want Elastic Transcoder to automatically detect the aspect ratio of the input file, specify <code>auto</code>. If you want to specify the aspect ratio for the output file, enter one of the following values: </p> <p> <code>1:1</code>, <code>4:3</code>, <code>3:2</code>, <code>16:9</code> </p> <p> If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection of the aspect ratio. </p>',
        }),
    ).exactOptional(),
    Interlaced: InterlacedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether the input file is interlaced. If you want Elastic Transcoder to automatically detect whether the input file is interlaced, specify <code>auto</code>. If you want to specify whether the input file is interlaced, enter one of the following values:</p> <p> <code>true</code>, <code>false</code> </p> <p>If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection of interlacing.</p>',
        }),
    ).exactOptional(),
    Container: JobContainerSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The container type for the input file. If you want Elastic Transcoder to automatically detect the container type of the input file, specify <code>auto</code>. If you want to specify the container type for the input file, enter one of the following values: </p> <p> <code>3gp</code>, <code>aac</code>, <code>asf</code>, <code>avi</code>, <code>divx</code>, <code>flv</code>, <code>m4a</code>, <code>mkv</code>, <code>mov</code>, <code>mp3</code>, <code>mp4</code>, <code>mpeg</code>, <code>mpeg-ps</code>, <code>mpeg-ts</code>, <code>mxf</code>, <code>ogg</code>, <code>vob</code>, <code>wav</code>, <code>webm</code> </p>',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings, if any, that are used for decrypting your input files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file.',
        }),
    ).exactOptional(),
    TimeSpan: TimeSpanSchema.and(
      z
        .any()
        .openapi({
          description:
            'Settings for clipping an input. Each input can have different clip settings.',
        }),
    ).exactOptional(),
    InputCaptions: InputCaptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can configure Elastic Transcoder to transcode captions, or subtitles, from one format to another. All captions must be in UTF-8. Elastic Transcoder supports two types of captions:</p> <ul> <li> <p> <b>Embedded:</b> Embedded captions are included in the same file as the audio and video. Elastic Transcoder supports only one embedded caption per language, to a maximum of 300 embedded captions per file.</p> <p>Valid input values include: <code>CEA-608 (EIA-608</code>, first non-empty channel only), <code>CEA-708 (EIA-708</code>, first non-empty channel only), and <code>mov-text</code> </p> <p>Valid outputs include: <code>mov-text</code> </p> <p>Elastic Transcoder supports a maximum of one embedded format per output.</p> </li> <li> <p> <b>Sidecar:</b> Sidecar captions are kept in a separate metadata file from the audio and video data. Sidecar captions require a player that is capable of understanding the relationship between the video file and the sidecar file. Elastic Transcoder supports only one sidecar caption per language, to a maximum of 20 sidecar captions per file.</p> <p>Valid input values include: <code>dfxp</code> (first div element only), <code>ebu-tt</code>, <code>scc</code>, <code>smpt</code>, <code>srt</code>, <code>ttml</code> (first div element only), and <code>webvtt</code> </p> <p>Valid outputs include: <code>dfxp</code> (first div element only), <code>scc</code>, <code>srt</code>, and <code>webvtt</code>.</p> </li> </ul> <p>If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p> <p>Elastic Transcoder does not support OCR (Optical Character Recognition), does not accept pictures as a valid input for captions, and is not available for audio-only transcoding. Elastic Transcoder does not preserve text formatting (for example, italics) during the transcoding process.</p> <p>To remove captions or leave the captions empty, set <code>Captions</code> to null. To pass through existing captions unchanged, set the <code>MergePolicy</code> to <code>MergeRetain</code>, and pass in a null <code>CaptionSources</code> array.</p> <p>For more information on embedded files, see the Subtitles Wikipedia page.</p> <p>For more information on sidecar files, see the Extensible Metadata Platform and Sidecar file Wikipedia pages.</p>',
        }),
    ).exactOptional(),
    DetectedProperties: DetectedPropertiesSchema.and(
      z.any().openapi({ description: 'The detected properties of the input file.' }),
    ).exactOptional(),
  })
  .openapi({ description: "Information about the file that you're transcoding.", required: [] })
  .openapi('JobInput')

const JobInputsSchema = z.array(JobInputSchema).max(200).openapi('JobInputs')

const ThumbnailPatternSchema = z
  .string()
  .regex(/(^$)|(^.*\{count\}.*$)/)
  .openapi('ThumbnailPattern')

const RotateSchema = z
  .string()
  .regex(/(^auto$)|(^0$)|(^90$)|(^180$)|(^270$)/)
  .openapi('Rotate')

const JobStatusSchema = z
  .string()
  .regex(/(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)/)
  .openapi('JobStatus')

const DescriptionSchema = z.string().min(0).max(255).openapi('Description')

const PresetWatermarkIdSchema = z.string().min(1).max(40).openapi('PresetWatermarkId')

const WatermarkKeySchema = z
  .string()
  .regex(/(^.{1,1020}.jpg$)|(^.{1,1019}.jpeg$)|(^.{1,1020}.png$)/)
  .min(1)
  .max(1024)
  .openapi('WatermarkKey')

const JobWatermarkSchema = z
  .object({
    PresetWatermarkId: PresetWatermarkIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ID of the watermark settings that Elastic Transcoder uses to add watermarks to the video during transcoding. The settings are in the preset specified by Preset for the current output. In that preset, the value of Watermarks Id tells Elastic Transcoder which settings to use.',
        }),
    ).exactOptional(),
    InputKey: WatermarkKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> The name of the .png or .jpg file that you want to use for the watermark. To determine which Amazon S3 bucket contains the specified file, Elastic Transcoder checks the pipeline specified by <code>Pipeline</code>; the <code>Input Bucket</code> object in that pipeline identifies the bucket.</p> <p> If the file name includes a prefix, for example, <b>logos/128x64.png</b>, include the prefix in the key. If the file isn't in the specified bucket, Elastic Transcoder returns an error. </p>",
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings, if any, that you want Elastic Transcoder to apply to your watermarks.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.',
    required: [],
  })
  .openapi('JobWatermark')

const JobWatermarksSchema = z.array(JobWatermarkSchema).openapi('JobWatermarks')

const MergePolicySchema = z
  .string()
  .regex(/(^Replace$)|(^Prepend$)|(^Append$)|(^Fallback$)/)
  .openapi('MergePolicy')

const DigitsOrAutoSchema = z
  .string()
  .regex(/(^auto$)|(^\d{2,4}$)/)
  .openapi('DigitsOrAuto')

const SizingPolicySchema = z
  .string()
  .regex(/(^Fit$)|(^Fill$)|(^Stretch$)|(^Keep$)|(^ShrinkToFit$)|(^ShrinkToFill$)/)
  .openapi('SizingPolicy')

const PaddingPolicySchema = z
  .string()
  .regex(/(^Pad$)|(^NoPad$)/)
  .openapi('PaddingPolicy')

const JpgOrPngSchema = z
  .string()
  .regex(/(^jpg$)|(^png$)/)
  .openapi('JpgOrPng')

const ArtworkSchema = z
  .object({
    InputKey: WatermarkKeySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The name of the file to be used as album art. To determine which Amazon S3 bucket contains the specified file, Elastic Transcoder checks the pipeline specified by <code>PipelineId</code>; the <code>InputBucket</code> object in that pipeline identifies the bucket.</p> <p>If the file name includes a prefix, for example, <code>cooking/pie.jpg</code>, include the prefix in the key. If the file isn't in the specified bucket, Elastic Transcoder returns an error.</p>",
        }),
    ).exactOptional(),
    MaxWidth: DigitsOrAutoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum width of the output album art in pixels. If you specify <code>auto</code>, Elastic Transcoder uses 600 as the default value. If you specify a numeric value, enter an even integer between 32 and 4096, inclusive.',
        }),
    ).exactOptional(),
    MaxHeight: DigitsOrAutoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum height of the output album art in pixels. If you specify <code>auto</code>, Elastic Transcoder uses 600 as the default value. If you specify a numeric value, enter an even integer between 32 and 3072, inclusive.',
        }),
    ).exactOptional(),
    SizingPolicy: SizingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify one of the following values to control scaling of the output album art:</p> <ul> <li> <p> <code>Fit:</code> Elastic Transcoder scales the output art so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> without exceeding the other value.</p> </li> <li> <p> <code>Fill:</code> Elastic Transcoder scales the output art so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> and matches or exceeds the other value. Elastic Transcoder centers the output art and then crops it in the dimension (if any) that exceeds the maximum value. </p> </li> <li> <p> <code>Stretch:</code> Elastic Transcoder stretches the output art to match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>. If the relative proportions of the input art and the output art are different, the output art will be distorted.</p> </li> <li> <p> <code>Keep:</code> Elastic Transcoder does not scale the output art. If either dimension of the input art exceeds the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>, Elastic Transcoder crops the output art.</p> </li> <li> <p> <code>ShrinkToFit:</code> Elastic Transcoder scales the output art down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either value. If you specify this option, Elastic Transcoder does not scale the art up.</p> </li> <li> <p> <code>ShrinkToFill</code> Elastic Transcoder scales the output art down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without dropping below either value. If you specify this option, Elastic Transcoder does not scale the art up.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PaddingPolicy: PaddingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add white bars to the top and bottom and/or left and right sides of the output album art to make the total size of the output art match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>.',
        }),
    ).exactOptional(),
    AlbumArtFormat: JpgOrPngSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of album art, if any. Valid formats are <code>.jpg</code> and <code>.png</code>.',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings, if any, that you want Elastic Transcoder to apply to your artwork.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20.</p> <p>To remove artwork or leave the artwork empty, you can either set <code>Artwork</code> to null, or set the <code>Merge Policy</code> to "Replace" and use an empty <code>Artwork</code> array.</p> <p>To pass through existing artwork unchanged, set the <code>Merge Policy</code> to "Prepend", "Append", or "Fallback", and use an empty <code>Artwork</code> array.</p>',
    required: [],
  })
  .openapi('Artwork')

const ArtworksSchema = z.array(ArtworkSchema).openapi('Artworks')

const JobAlbumArtSchema = z
  .object({
    MergePolicy: MergePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A policy that determines how Elastic Transcoder handles the existence of multiple album artwork files.</p> <ul> <li> <p> <code>Replace:</code> The specified album art replaces any existing album art.</p> </li> <li> <p> <code>Prepend:</code> The specified album art is placed in front of any existing album art.</p> </li> <li> <p> <code>Append:</code> The specified album art is placed after any existing album art.</p> </li> <li> <p> <code>Fallback:</code> If the original input file contains artwork, Elastic Transcoder uses that artwork for the output. If the original input does not contain artwork, Elastic Transcoder uses the specified album art file.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Artwork: ArtworksSchema.and(
      z
        .any()
        .openapi({
          description:
            'The file to be used as album art. There can be multiple artworks associated with an audio file, to a maximum of 20. Valid formats are <code>.jpg</code> and <code>.png</code> ',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The .jpg or .png file associated with an audio file.', required: [] })
  .openapi('JobAlbumArt')

const ClipSchema = z
  .object({
    TimeSpan: TimeSpanSchema.and(
      z
        .any()
        .openapi({
          description: 'Settings that determine when a clip begins and how long it lasts.',
        }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description:
      'Settings for one clip in a composition. All jobs in a playlist must have the same clip settings.',
    required: [],
  })
  .openapi('Clip')

const CompositionSchema = z.array(ClipSchema).openapi({ deprecated: true }).openapi('Composition')

const CaptionFormatFormatSchema = z
  .string()
  .regex(/(^mov-text$)|(^srt$)|(^scc$)|(^webvtt$)|(^dfxp$)|(^cea-708$)/)
  .openapi('CaptionFormatFormat')

const CaptionFormatPatternSchema = z
  .string()
  .regex(/(^$)|(^.*\{language\}.*$)/)
  .openapi('CaptionFormatPattern')

const CaptionFormatSchema = z
  .object({
    Format: CaptionFormatFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format you specify determines whether Elastic Transcoder generates an embedded or sidecar caption for this output.</p> <ul> <li> <p> <b>Valid Embedded Caption Formats:</b> </p> <ul> <li> <p> <b>for FLAC</b>: None</p> </li> <li> <p> <b>For MP3</b>: None</p> </li> <li> <p> <b>For MP4</b>: mov-text</p> </li> <li> <p> <b>For MPEG-TS</b>: None</p> </li> <li> <p> <b>For ogg</b>: None</p> </li> <li> <p> <b>For webm</b>: None</p> </li> </ul> </li> <li> <p> <b>Valid Sidecar Caption Formats:</b> Elastic Transcoder supports dfxp (first div element only), scc, srt, and webvtt. If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p> <ul> <li> <p> <b>For FMP4</b>: dfxp</p> </li> <li> <p> <b>Non-FMP4 outputs</b>: All sidecar types</p> </li> </ul> <p> <code>fmp4</code> captions have an extension of <code>.ismt</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Pattern: CaptionFormatPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The prefix for caption filenames, in the form <i>description</i>-<code>{language}</code>, where:</p> <ul> <li> <p> <i>description</i> is a description of the video.</p> </li> <li> <p> <code>{language}</code> is a literal value that Elastic Transcoder replaces with the two- or three-letter code for the language of the caption in the output file names.</p> </li> </ul> <p>If you don\'t include <code>{language}</code> in the file name pattern, Elastic Transcoder automatically appends "<code>{language}</code>" to the value that you specify for the description. In addition, Elastic Transcoder automatically appends the count to the end of the segment files.</p> <p>For example, suppose you\'re transcoding into srt format. When you enter "Sydney-{language}-sunrise", and the language of the captions is English (en), the name of the first caption file is be Sydney-en-sunrise00000.srt.</p>',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings, if any, that you want Elastic Transcoder to apply to your caption formats.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The file format of the output captions. If you leave this value blank, Elastic Transcoder returns an error.',
    required: [],
  })
  .openapi('CaptionFormat')

const CaptionFormatsSchema = z.array(CaptionFormatSchema).max(4).openapi('CaptionFormats')

const CaptionsSchema = z
  .object({
    MergePolicy: CaptionMergePolicySchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            '<p>A policy that determines how Elastic Transcoder handles the existence of multiple captions.</p> <ul> <li> <p> <b>MergeOverride:</b> Elastic Transcoder transcodes both embedded and sidecar captions into outputs. If captions for a language are embedded in the input file and also appear in a sidecar file, Elastic Transcoder uses the sidecar captions and ignores the embedded captions for that language.</p> </li> <li> <p> <b>MergeRetain:</b> Elastic Transcoder transcodes both embedded and sidecar captions into outputs. If captions for a language are embedded in the input file and also appear in a sidecar file, Elastic Transcoder uses the embedded captions and ignores the sidecar captions for that language. If <code>CaptionSources</code> is empty, Elastic Transcoder omits all sidecar captions from the output files.</p> </li> <li> <p> <b>Override:</b> Elastic Transcoder transcodes only the sidecar captions that you specify in <code>CaptionSources</code>.</p> </li> </ul> <p> <code>MergePolicy</code> cannot be null.</p>',
        }),
    ).exactOptional(),
    CaptionSources: CaptionSourcesSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'Source files for the input sidecar captions used during the transcoding process. To omit all sidecar captions, leave <code>CaptionSources</code> blank.',
        }),
    ).exactOptional(),
    CaptionFormats: CaptionFormatsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The array of file formats for the output captions. If you leave this value blank, Elastic Transcoder returns an error.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The captions to be created, if any.', required: [] })
  .openapi('Captions')

const JobOutputSchema = z
  .object({
    Id: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A sequential counter, starting with 1, that identifies an output among the outputs from the current job. In the Output syntax, this value is always 1.',
        }),
    ).exactOptional(),
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name to assign to the transcoded file. Elastic Transcoder saves the file in the Amazon S3 bucket specified by the <code>OutputBucket</code> object in the pipeline that is specified by the pipeline ID.',
        }),
    ).exactOptional(),
    ThumbnailPattern: ThumbnailPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want Elastic Transcoder to create thumbnails for your videos and, if so, how you want Elastic Transcoder to name the files.</p> <p>If you don\'t want Elastic Transcoder to create thumbnails, specify "".</p> <p>If you do want Elastic Transcoder to create thumbnails, specify the information that you want to include in the file name for each thumbnail. You can specify the following values in any sequence:</p> <ul> <li> <p> <b> <code>{count}</code> (Required)</b>: If you want to create thumbnails, you must include <code>{count}</code> in the <code>ThumbnailPattern</code> object. Wherever you specify <code>{count}</code>, Elastic Transcoder adds a five-digit sequence number (beginning with <b>00001</b>) to thumbnail file names. The number indicates where a given thumbnail appears in the sequence of thumbnails for a transcoded file. </p> <important> <p>If you specify a literal value and/or <code>{resolution}</code> but you omit <code>{count}</code>, Elastic Transcoder returns a validation error and does not create the job.</p> </important> </li> <li> <p> <b>Literal values (Optional)</b>: You can specify literal values anywhere in the <code>ThumbnailPattern</code> object. For example, you can include them as a file name prefix or as a delimiter between <code>{resolution}</code> and <code>{count}</code>. </p> </li> <li> <p> <b> <code>{resolution}</code> (Optional)</b>: If you want Elastic Transcoder to include the resolution in the file name, include <code>{resolution}</code> in the <code>ThumbnailPattern</code> object. </p> </li> </ul> <p>When creating thumbnails, Elastic Transcoder automatically saves the files in the format (.jpg or .png) that appears in the preset that you specified in the <code>PresetID</code> value of <code>CreateJobOutput</code>. Elastic Transcoder also appends the applicable file name extension.</p>',
        }),
    ).exactOptional(),
    ThumbnailEncryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings, if any, that you want Elastic Transcoder to apply to your thumbnail.',
        }),
    ).exactOptional(),
    Rotate: RotateSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The number of degrees clockwise by which you want Elastic Transcoder to rotate the output relative to the input. Enter one of the following values:</p> <p> <code>auto</code>, <code>0</code>, <code>90</code>, <code>180</code>, <code>270</code> </p> <p> The value <code>auto</code> generally works only if the file that you're transcoding contains rotation metadata.</p>",
        }),
    ).exactOptional(),
    PresetId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The value of the <code>Id</code> object for the preset that you want to use for this job. The preset determines the audio, video, and thumbnail settings that Elastic Transcoder uses for transcoding. To use a preset that you created, specify the preset ID that Elastic Transcoder returned in the response when you created the preset. You can also use the Elastic Transcoder system presets, which you can get with <code>ListPresets</code>.',
        }),
    ).exactOptional(),
    SegmentDuration: FloatStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>(Outputs in Fragmented MP4 or MPEG-TS format only.</p> </important> <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), <code>SegmentDuration</code> is the target maximum duration of each segment in seconds. For <code>HLSv3</code> format playlists, each media segment is stored in a separate <code>.ts</code> file. For <code>HLSv4</code>, <code>MPEG-DASH</code>, and <code>Smooth</code> playlists, all media segments for an output are stored in a single file. Each segment is approximately the length of the <code>SegmentDuration</code>, though individual segments might be shorter or longer.</p> <p>The range of valid values is 1 to 60 seconds. If the duration of the video is not evenly divisible by <code>SegmentDuration</code>, the duration of the last segment is the remainder of total length/SegmentDuration.</p> <p>Elastic Transcoder creates an output-specific playlist for each output <code>HLS</code> output that you specify in OutputKeys. To add an output to the master playlist for this job, include it in the <code>OutputKeys</code> of the associated playlist.</p>',
        }),
    ).exactOptional(),
    Status: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The status of one output in a job. If you specified only one output for the job, <code>Outputs:Status</code> is always the same as <code>Job:Status</code>. If you specified more than one output: </p> <ul> <li> <p> <code>Job:Status</code> and <code>Outputs:Status</code> for all of the outputs is Submitted until Elastic Transcoder starts to process the first output.</p> </li> <li> <p>When Elastic Transcoder starts to process the first output, <code>Outputs:Status</code> for that output and <code>Job:Status</code> both change to Progressing. For each output, the value of <code>Outputs:Status</code> remains Submitted until Elastic Transcoder starts to process the output.</p> </li> <li> <p>Job:Status remains Progressing until all of the outputs reach a terminal status, either Complete or Error.</p> </li> <li> <p>When all of the outputs reach a terminal status, <code>Job:Status</code> changes to Complete only if <code>Outputs:Status</code> for all of the outputs is <code>Complete</code>. If <code>Outputs:Status</code> for one or more outputs is <code>Error</code>, the terminal status for <code>Job:Status</code> is also <code>Error</code>.</p> </li> </ul> <p>The value of <code>Status</code> is one of the following: <code>Submitted</code>, <code>Progressing</code>, <code>Complete</code>, <code>Canceled</code>, or <code>Error</code>. </p>',
        }),
    ).exactOptional(),
    StatusDetail: DescriptionSchema.and(
      z.any().openapi({ description: 'Information that further explains <code>Status</code>.' }),
    ).exactOptional(),
    Duration: NullableLongSchema.and(
      z.any().openapi({ description: 'Duration of the output file, in seconds.' }),
    ).exactOptional(),
    Width: NullableIntegerSchema.and(
      z.any().openapi({ description: 'Specifies the width of the output file in pixels.' }),
    ).exactOptional(),
    Height: NullableIntegerSchema.and(
      z.any().openapi({ description: 'Height of the output file, in pixels.' }),
    ).exactOptional(),
    FrameRate: FloatStringSchema.and(
      z.any().openapi({ description: 'Frame rate of the output file, in frames per second.' }),
    ).exactOptional(),
    FileSize: NullableLongSchema.and(
      z.any().openapi({ description: 'File size of the output file, in bytes.' }),
    ).exactOptional(),
    DurationMillis: NullableLongSchema.and(
      z.any().openapi({ description: 'Duration of the output file, in milliseconds.' }),
    ).exactOptional(),
    Watermarks: JobWatermarksSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the watermarks that you want Elastic Transcoder to add to the video during transcoding. You can specify up to four watermarks for each output. Settings for each watermark must be defined in the preset that you specify in <code>Preset</code> for the current output.</p> <p>Watermarks are added to the output video in the sequence in which you list them in the job output—the first watermark in the list is added to the output video first, the second watermark in the list is added next, and so on. As a result, if the settings in a preset cause Elastic Transcoder to place all watermarks in the same location, the second watermark that you add covers the first one, the third one covers the second, and the fourth one covers the third.</p>',
        }),
    ).exactOptional(),
    AlbumArt: JobAlbumArtSchema.and(
      z
        .any()
        .openapi({ description: 'The album art to be associated with the output file, if any.' }),
    ).exactOptional(),
    Composition: CompositionSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'You can create an output file that contains an excerpt from the input file. This excerpt, called a clip, can come from the beginning, middle, or end of the file. The Composition object contains settings for the clips that make up an output file. For the current release, you can only specify settings for a single clip per output file. The Composition object cannot be null.',
        }),
    ).exactOptional(),
    Captions: CaptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can configure Elastic Transcoder to transcode captions, or subtitles, from one format to another. All captions must be in UTF-8. Elastic Transcoder supports two types of captions:</p> <ul> <li> <p> <b>Embedded:</b> Embedded captions are included in the same file as the audio and video. Elastic Transcoder supports only one embedded caption per language, to a maximum of 300 embedded captions per file.</p> <p>Valid input values include: <code>CEA-608 (EIA-608</code>, first non-empty channel only), <code>CEA-708 (EIA-708</code>, first non-empty channel only), and <code>mov-text</code> </p> <p>Valid outputs include: <code>mov-text</code> </p> <p>Elastic Transcoder supports a maximum of one embedded format per output.</p> </li> <li> <p> <b>Sidecar:</b> Sidecar captions are kept in a separate metadata file from the audio and video data. Sidecar captions require a player that is capable of understanding the relationship between the video file and the sidecar file. Elastic Transcoder supports only one sidecar caption per language, to a maximum of 20 sidecar captions per file.</p> <p>Valid input values include: <code>dfxp</code> (first div element only), <code>ebu-tt</code>, <code>scc</code>, <code>smpt</code>, <code>srt</code>, <code>ttml</code> (first div element only), and <code>webvtt</code> </p> <p>Valid outputs include: <code>dfxp</code> (first div element only), <code>scc</code>, <code>srt</code>, and <code>webvtt</code>.</p> </li> </ul> <p>If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p> <p>Elastic Transcoder does not support OCR (Optical Character Recognition), does not accept pictures as a valid input for captions, and is not available for audio-only transcoding. Elastic Transcoder does not preserve text formatting (for example, italics) during the transcoding process.</p> <p>To remove captions or leave the captions empty, set <code>Captions</code> to null. To pass through existing captions unchanged, set the <code>MergePolicy</code> to <code>MergeRetain</code>, and pass in a null <code>CaptionSources</code> array.</p> <p>For more information on embedded files, see the Subtitles Wikipedia page.</p> <p>For more information on sidecar files, see the Extensible Metadata Platform and Sidecar file Wikipedia pages.</p>',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings, if any, that you want Elastic Transcoder to apply to your output files. If you choose to use encryption, you must specify a mode to use. If you choose not to use encryption, Elastic Transcoder writes an unencrypted file to your Amazon S3 bucket.',
        }),
    ).exactOptional(),
    AppliedColorSpaceConversion: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'If Elastic Transcoder used a preset with a <code>ColorSpaceConversionMode</code> to transcode the output file, the <code>AppliedColorSpaceConversion</code> parameter shows the conversion used. If no <code>ColorSpaceConversionMode</code> was defined in the preset, this parameter is not be included in the job response.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<important> <p>Outputs recommended instead.</p> </important> <p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the <code>Output</code> object lists information about the first output. This duplicates the information that is listed for the first output in the <code>Outputs</code> object.</p>',
    required: [],
  })
  .openapi('JobOutput')

const JobOutputsSchema = z.array(JobOutputSchema).openapi('JobOutputs')

const FilenameSchema = z.string().min(1).max(255).openapi('Filename')

const PlaylistFormatSchema = z
  .string()
  .regex(/(^HLSv3$)|(^HLSv4$)|(^Smooth$)|(^MPEG-DASH$)/)
  .openapi('PlaylistFormat')

const OutputKeysSchema = z.array(KeySchema).max(30).openapi('OutputKeys')

const HlsContentProtectionMethodSchema = z
  .string()
  .regex(/(^aes-128$)/)
  .openapi('HlsContentProtectionMethod')

const ZeroTo512StringSchema = z.string().min(0).max(512).openapi('ZeroTo512String')

const KeyStoragePolicySchema = z
  .string()
  .regex(/(^NoStore$)|(^WithVariantPlaylists$)/)
  .openapi('KeyStoragePolicy')

const HlsContentProtectionSchema = z
  .object({
    Method: HlsContentProtectionMethodSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The content protection method for your output. The only valid value is: <code>aes-128</code>.</p> <p>This value is written into the method attribute of the <code>EXT-X-KEY</code> metadata tag in the output playlist.</p>',
        }),
    ).exactOptional(),
    Key: Base64EncodedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you want Elastic Transcoder to generate a key for you, leave this field blank.</p> <p>If you choose to supply your own key, you must encrypt the key by using AWS KMS. The key must be base64-encoded, and it must be one of the following bit lengths before being base64-encoded:</p> <p> <code>128</code>, <code>192</code>, or <code>256</code>. </p>',
        }),
    ).exactOptional(),
    KeyMd5: Base64EncodedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If Elastic Transcoder is generating your key for you, you must leave this field blank.</p> <p>The MD5 digest of the key that you want Elastic Transcoder to use to encrypt your output file, and that you want Elastic Transcoder to use as a checksum to make sure your key was not corrupted in transit. The key MD5 must be base64-encoded, and it must be exactly 16 bytes before being base64- encoded.</p>',
        }),
    ).exactOptional(),
    InitializationVector: ZeroTo255StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If Elastic Transcoder is generating your key for you, you must leave this field blank.</p> <p>The series of random bits created by a random bit generator, unique for every encryption operation, that you want Elastic Transcoder to use to encrypt your output files. The initialization vector must be base64-encoded, and it must be exactly 16 bytes before being base64-encoded.</p>',
        }),
    ).exactOptional(),
    LicenseAcquisitionUrl: ZeroTo512StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the license key required to decrypt your HLS playlist. The URL must be an absolute path, and is referenced in the URI attribute of the EXT-X-KEY metadata tag in the playlist file.',
        }),
    ).exactOptional(),
    KeyStoragePolicy: KeyStoragePolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Specify whether you want Elastic Transcoder to write your HLS license key to an Amazon S3 bucket. If you choose <code>WithVariantPlaylists</code>, <code>LicenseAcquisitionUrl</code> must be left blank and Elastic Transcoder writes your data key into the same bucket as the associated playlist.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The HLS content protection settings, if any, that you want Elastic Transcoder to apply to your output files.',
    required: [],
  })
  .openapi('HlsContentProtection')

const PlayReadyDrmFormatStringSchema = z
  .string()
  .regex(/(^microsoft$)|(^discretix-3.0$)/)
  .openapi('PlayReadyDrmFormatString')

const NonEmptyBase64EncodedStringSchema = z
  .string()
  .regex(/(^(?:[A-Za-z0-9\+\/]{4})*(?:[A-Za-z0-9\+\/]{2}==|[A-Za-z0-9\+\/]{3}=)?$)/)
  .openapi('NonEmptyBase64EncodedString')

const KeyIdGuidSchema = z
  .string()
  .regex(
    /(^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$)|(^[0-9A-Fa-f]{32}$)/,
  )
  .openapi('KeyIdGuid')

const OneTo512StringSchema = z.string().min(1).max(512).openapi('OneTo512String')

const PlayReadyDrmSchema = z
  .object({
    Format: PlayReadyDrmFormatStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of DRM, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.',
        }),
    ).exactOptional(),
    Key: NonEmptyBase64EncodedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The DRM key for your file, provided by your DRM license provider. The key must be base64-encoded, and it must be one of the following bit lengths before being base64-encoded:</p> <p> <code>128</code>, <code>192</code>, or <code>256</code>. </p> <p>The key must also be encrypted by using AWS KMS.</p>',
        }),
    ).exactOptional(),
    KeyMd5: NonEmptyBase64EncodedStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The MD5 digest of the key used for DRM on your file, and that you want Elastic Transcoder to use as a checksum to make sure your key was not corrupted in transit. The key MD5 must be base64-encoded, and it must be exactly 16 bytes before being base64-encoded.',
        }),
    ).exactOptional(),
    KeyId: KeyIdGuidSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The ID for your DRM key, so that your DRM license provider knows which key to provide.</p> <p>The key ID must be provided in big endian, and Elastic Transcoder converts it to little endian before inserting it into the PlayReady DRM headers. If you are unsure whether your license server provides your key ID in big or little endian, check with your DRM provider.</p>',
        }),
    ).exactOptional(),
    InitializationVector: ZeroTo255StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The series of random bits created by a random bit generator, unique for every encryption operation, that you want Elastic Transcoder to use to encrypt your files. The initialization vector must be base64-encoded, and it must be exactly 8 bytes long before being base64-encoded. If no initialization vector is provided, Elastic Transcoder generates one for you.',
        }),
    ).exactOptional(),
    LicenseAcquisitionUrl: OneTo512StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The location of the license key required to play DRM content. The URL must be an absolute path, and is referenced by the PlayReady header. The PlayReady header is referenced in the protection header of the client manifest for Smooth Streaming outputs, and in the EXT-X-DXDRM and EXT-XDXDRMINFO metadata tags for HLS playlist outputs. An example URL looks like this: <code>https://www.example.com/exampleKey/</code> ',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The PlayReady DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.</p> <p>PlayReady DRM encrypts your media files using <code>aes-ctr</code> encryption.</p> <p>If you use DRM for an <code>HLSv3</code> playlist, your outputs must have a master playlist.</p>',
    required: [],
  })
  .openapi('PlayReadyDrm')

const PlaylistSchema = z
  .object({
    Name: FilenameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name that you want Elastic Transcoder to assign to the master playlist, for example, nyc-vacation.m3u8. If the name includes a <code>/</code> character, the section of the name before the last <code>/</code> must be identical for all <code>Name</code> objects. If you create more than one master playlist, the values of all <code>Name</code> objects must be unique.</p> <note> <p>Elastic Transcoder automatically appends the relevant file extension to the file name (<code>.m3u8</code> for <code>HLSv3</code> and <code>HLSv4</code> playlists, and <code>.ism</code> and <code>.ismc</code> for <code>Smooth</code> playlists). If you include a file extension in <code>Name</code>, the file name will have two extensions.</p> </note>',
        }),
    ).exactOptional(),
    Format: PlaylistFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of the output playlist. Valid formats include <code>HLSv3</code>, <code>HLSv4</code>, and <code>Smooth</code>.',
        }),
    ).exactOptional(),
    OutputKeys: OutputKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For each output in this job that you want to include in a master playlist, the value of the Outputs:Key object.</p> <ul> <li> <p>If your output is not <code>HLS</code> or does not have a segment duration set, the name of the output file is a concatenation of <code>OutputKeyPrefix</code> and <code>Outputs:Key</code>:</p> <p>OutputKeyPrefix<code>Outputs:Key</code> </p> </li> <li> <p>If your output is <code>HLSv3</code> and has a segment duration set, or is not included in a playlist, Elastic Transcoder creates an output playlist file with a file extension of <code>.m3u8</code>, and a series of <code>.ts</code> files that include a five-digit sequential counter beginning with 00000:</p> <p>OutputKeyPrefix<code>Outputs:Key</code>.m3u8</p> <p>OutputKeyPrefix<code>Outputs:Key</code>00000.ts</p> </li> <li> <p>If your output is <code>HLSv4</code>, has a segment duration set, and is included in an <code>HLSv4</code> playlist, Elastic Transcoder creates an output playlist file with a file extension of <code>_v4.m3u8</code>. If the output is video, Elastic Transcoder also creates an output file with an extension of <code>_iframe.m3u8</code>:</p> <p>OutputKeyPrefix<code>Outputs:Key</code>_v4.m3u8</p> <p>OutputKeyPrefix<code>Outputs:Key</code>_iframe.m3u8</p> <p>OutputKeyPrefix<code>Outputs:Key</code>.ts</p> </li> </ul> <p>Elastic Transcoder automatically appends the relevant file extension to the file name. If you include a file extension in Output Key, the file name will have two extensions.</p> <p>If you include more than one output in a playlist, any segment duration settings, clip settings, or caption settings must be the same for all outputs in the playlist. For <code>Smooth</code> playlists, the <code>Audio:Profile</code>, <code>Video:Profile</code>, and <code>Video:FrameRate</code> to <code>Video:KeyframesMaxDist</code> ratio must be the same for all outputs.</p>',
        }),
    ).exactOptional(),
    HlsContentProtection: HlsContentProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HLS content protection settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.',
        }),
    ).exactOptional(),
    PlayReadyDrm: PlayReadyDrmSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.',
        }),
    ).exactOptional(),
    Status: JobStatusSchema.and(
      z
        .any()
        .openapi({ description: 'The status of the job with which the playlist is associated.' }),
    ).exactOptional(),
    StatusDetail: DescriptionSchema.and(
      z.any().openapi({ description: 'Information that further explains the status.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      ' Use Only for Fragmented MP4 or MPEG-TS Outputs. If you specify a preset for which the value of Container is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create. We recommend that you create only one master playlist per output format. The maximum number of master playlists in a job is 30. ',
    required: [],
  })
  .openapi('Playlist')

const PlaylistsSchema = z.array(PlaylistSchema).openapi('Playlists')

const UserMetadataSchema = z.record(z.string(), StringSchema).openapi('UserMetadata')

const TimingSchema = z
  .object({
    SubmitTimeMillis: NullableLongSchema.and(
      z
        .any()
        .openapi({
          description:
            'The time the job was submitted to Elastic Transcoder, in epoch milliseconds.',
        }),
    ).exactOptional(),
    StartTimeMillis: NullableLongSchema.and(
      z
        .any()
        .openapi({ description: 'The time the job began transcoding, in epoch milliseconds.' }),
    ).exactOptional(),
    FinishTimeMillis: NullableLongSchema.and(
      z
        .any()
        .openapi({ description: 'The time the job finished transcoding, in epoch milliseconds.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about the timing of a job.', required: [] })
  .openapi('Timing')

const JobSchema = z
  .object({
    Id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier that Elastic Transcoder assigned to the job. You use this value to get settings for the job or to delete the job.',
        }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the job.' }),
    ).exactOptional(),
    PipelineId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files. ',
        }),
    ).exactOptional(),
    Input: JobInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the request or response body that provides information about the file that is being transcoded.',
        }),
    ).exactOptional(),
    Inputs: JobInputsSchema.and(
      z
        .any()
        .openapi({
          description:
            "Information about the files that you're transcoding. If you specified multiple files for this job, Elastic Transcoder stitches the files together to make one output.",
        }),
    ).exactOptional(),
    Output: JobOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specified one output for a job, information about that output. If you specified multiple outputs for a job, the Output object lists information about the first output. This duplicates the information that is listed for the first output in the Outputs object.</p> <important> <p>Outputs recommended instead.</p> </important> <p>A section of the request or response body that provides information about the transcoded (target) file. </p>',
        }),
    ).exactOptional(),
    Outputs: JobOutputsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the output files. We recommend that you use the <code>Outputs</code> syntax for all jobs, even when you want Elastic Transcoder to transcode a file into only one format. Do not use both the <code>Outputs</code> and <code>Output</code> syntaxes in the same request. You can create a maximum of 30 outputs per job. </p> <p>If you specify more than one output for a job, Elastic Transcoder creates the files for each output in the order in which you specify them in the job.</p>',
        }),
    ).exactOptional(),
    OutputKeyPrefix: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists. We recommend that you add a / or some other delimiter to the end of the <code>OutputKeyPrefix</code>.',
        }),
    ).exactOptional(),
    Playlists: PlaylistsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>Outputs in Fragmented MP4 or MPEG-TS format only.</p> </important> <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), <code>Playlists</code> contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>',
        }),
    ).exactOptional(),
    Status: JobStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The status of the job: <code>Submitted</code>, <code>Progressing</code>, <code>Complete</code>, <code>Canceled</code>, or <code>Error</code>. ',
        }),
    ).exactOptional(),
    UserMetadata: UserMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them.</p> <p>Metadata <code>keys</code> and <code>values</code> must use characters from the following list:</p> <ul> <li> <p> <code>0-9</code> </p> </li> <li> <p> <code>A-Z</code> and <code>a-z</code> </p> </li> <li> <p> <code>Space</code> </p> </li> <li> <p>The following symbols: <code>_.:/=+-%@</code> </p> </li> </ul>',
        }),
    ).exactOptional(),
    Timing: TimingSchema.and(
      z.any().openapi({ description: 'Details about the timing of a job.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A section of the response body that provides information about the job that is created.',
    required: [],
  })
  .openapi('Job')

const CreateJobResponseSchema = z
  .object({
    Job: JobSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the job that is created.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The CreateJobResponse structure.', required: [] })
  .openapi('CreateJobResponse')

const CreateJobOutputSchema = z
  .object({
    Key: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            ' The name to assign to the transcoded file. Elastic Transcoder saves the file in the Amazon S3 bucket specified by the <code>OutputBucket</code> object in the pipeline that is specified by the pipeline ID. If a file with the specified name already exists in the output bucket, the job fails. ',
        }),
    ).exactOptional(),
    ThumbnailPattern: ThumbnailPatternSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Whether you want Elastic Transcoder to create thumbnails for your videos and, if so, how you want Elastic Transcoder to name the files.</p> <p>If you don\'t want Elastic Transcoder to create thumbnails, specify "".</p> <p>If you do want Elastic Transcoder to create thumbnails, specify the information that you want to include in the file name for each thumbnail. You can specify the following values in any sequence:</p> <ul> <li> <p> <b> <code>{count}</code> (Required)</b>: If you want to create thumbnails, you must include <code>{count}</code> in the <code>ThumbnailPattern</code> object. Wherever you specify <code>{count}</code>, Elastic Transcoder adds a five-digit sequence number (beginning with <b>00001</b>) to thumbnail file names. The number indicates where a given thumbnail appears in the sequence of thumbnails for a transcoded file. </p> <important> <p>If you specify a literal value and/or <code>{resolution}</code> but you omit <code>{count}</code>, Elastic Transcoder returns a validation error and does not create the job.</p> </important> </li> <li> <p> <b>Literal values (Optional)</b>: You can specify literal values anywhere in the <code>ThumbnailPattern</code> object. For example, you can include them as a file name prefix or as a delimiter between <code>{resolution}</code> and <code>{count}</code>. </p> </li> <li> <p> <b> <code>{resolution}</code> (Optional)</b>: If you want Elastic Transcoder to include the resolution in the file name, include <code>{resolution}</code> in the <code>ThumbnailPattern</code> object. </p> </li> </ul> <p>When creating thumbnails, Elastic Transcoder automatically saves the files in the format (.jpg or .png) that appears in the preset that you specified in the <code>PresetID</code> value of <code>CreateJobOutput</code>. Elastic Transcoder also appends the applicable file name extension.</p>',
        }),
    ).exactOptional(),
    ThumbnailEncryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption settings, if any, that you want Elastic Transcoder to apply to your thumbnail.',
        }),
    ).exactOptional(),
    Rotate: RotateSchema.and(
      z
        .any()
        .openapi({
          description:
            " The number of degrees clockwise by which you want Elastic Transcoder to rotate the output relative to the input. Enter one of the following values: <code>auto</code>, <code>0</code>, <code>90</code>, <code>180</code>, <code>270</code>. The value <code>auto</code> generally works only if the file that you're transcoding contains rotation metadata. ",
        }),
    ).exactOptional(),
    PresetId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The <code>Id</code> of the preset to use for this job. The preset determines the audio, video, and thumbnail settings that Elastic Transcoder uses for transcoding. ',
        }),
    ).exactOptional(),
    SegmentDuration: FloatStringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>(Outputs in Fragmented MP4 or MPEG-TS format only.</p> </important> <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), <code>SegmentDuration</code> is the target maximum duration of each segment in seconds. For <code>HLSv3</code> format playlists, each media segment is stored in a separate <code>.ts</code> file. For <code>HLSv4</code> and <code>Smooth</code> playlists, all media segments for an output are stored in a single file. Each segment is approximately the length of the <code>SegmentDuration</code>, though individual segments might be shorter or longer.</p> <p>The range of valid values is 1 to 60 seconds. If the duration of the video is not evenly divisible by <code>SegmentDuration</code>, the duration of the last segment is the remainder of total length/SegmentDuration.</p> <p>Elastic Transcoder creates an output-specific playlist for each output <code>HLS</code> output that you specify in OutputKeys. To add an output to the master playlist for this job, include it in the <code>OutputKeys</code> of the associated playlist.</p>',
        }),
    ).exactOptional(),
    Watermarks: JobWatermarksSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the watermarks that you want Elastic Transcoder to add to the video during transcoding. You can specify up to four watermarks for each output. Settings for each watermark must be defined in the preset for the current output.',
        }),
    ).exactOptional(),
    AlbumArt: JobAlbumArtSchema.and(
      z
        .any()
        .openapi({
          description:
            'Information about the album art that you want Elastic Transcoder to add to the file during transcoding. You can specify up to twenty album artworks for each output. Settings for each artwork must be defined in the job for the current output.',
        }),
    ).exactOptional(),
    Composition: CompositionSchema.and(
      z
        .any()
        .openapi({
          deprecated: true,
          description:
            'You can create an output file that contains an excerpt from the input file. This excerpt, called a clip, can come from the beginning, middle, or end of the file. The Composition object contains settings for the clips that make up an output file. For the current release, you can only specify settings for a single clip per output file. The Composition object cannot be null.',
        }),
    ).exactOptional(),
    Captions: CaptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can configure Elastic Transcoder to transcode captions, or subtitles, from one format to another. All captions must be in UTF-8. Elastic Transcoder supports two types of captions:</p> <ul> <li> <p> <b>Embedded:</b> Embedded captions are included in the same file as the audio and video. Elastic Transcoder supports only one embedded caption per language, to a maximum of 300 embedded captions per file.</p> <p>Valid input values include: <code>CEA-608 (EIA-608</code>, first non-empty channel only), <code>CEA-708 (EIA-708</code>, first non-empty channel only), and <code>mov-text</code> </p> <p>Valid outputs include: <code>mov-text</code> </p> <p>Elastic Transcoder supports a maximum of one embedded format per output.</p> </li> <li> <p> <b>Sidecar:</b> Sidecar captions are kept in a separate metadata file from the audio and video data. Sidecar captions require a player that is capable of understanding the relationship between the video file and the sidecar file. Elastic Transcoder supports only one sidecar caption per language, to a maximum of 20 sidecar captions per file.</p> <p>Valid input values include: <code>dfxp</code> (first div element only), <code>ebu-tt</code>, <code>scc</code>, <code>smpt</code>, <code>srt</code>, <code>ttml</code> (first div element only), and <code>webvtt</code> </p> <p>Valid outputs include: <code>dfxp</code> (first div element only), <code>scc</code>, <code>srt</code>, and <code>webvtt</code>.</p> </li> </ul> <p>If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p> <p>Elastic Transcoder does not support OCR (Optical Character Recognition), does not accept pictures as a valid input for captions, and is not available for audio-only transcoding. Elastic Transcoder does not preserve text formatting (for example, italics) during the transcoding process.</p> <p>To remove captions or leave the captions empty, set <code>Captions</code> to null. To pass through existing captions unchanged, set the <code>MergePolicy</code> to <code>MergeRetain</code>, and pass in a null <code>CaptionSources</code> array.</p> <p>For more information on embedded files, see the Subtitles Wikipedia page.</p> <p>For more information on sidecar files, see the Extensible Metadata Platform and Sidecar file Wikipedia pages.</p>',
        }),
    ).exactOptional(),
    Encryption: EncryptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'You can specify encryption settings for any output files that you want to use for a transcoding job. This includes the output file and any watermarks, thumbnails, album art, or captions that you want to use. You must specify encryption settings for each file individually.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>CreateJobOutput</code> structure.', required: [] })
  .openapi('CreateJobOutput')

const CreateJobPlaylistSchema = z
  .object({
    Name: FilenameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name that you want Elastic Transcoder to assign to the master playlist, for example, nyc-vacation.m3u8. If the name includes a <code>/</code> character, the section of the name before the last <code>/</code> must be identical for all <code>Name</code> objects. If you create more than one master playlist, the values of all <code>Name</code> objects must be unique.</p> <note> <p> Elastic Transcoder automatically appends the relevant file extension to the file name (<code>.m3u8</code> for <code>HLSv3</code> and <code>HLSv4</code> playlists, and <code>.ism</code> and <code>.ismc</code> for <code>Smooth</code> playlists). If you include a file extension in <code>Name</code>, the file name will have two extensions.</p> </note>',
        }),
    ).exactOptional(),
    Format: PlaylistFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'The format of the output playlist. Valid formats include <code>HLSv3</code>, <code>HLSv4</code>, and <code>Smooth</code>.',
        }),
    ).exactOptional(),
    OutputKeys: OutputKeysSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>For each output in this job that you want to include in a master playlist, the value of the <code>Outputs:Key</code> object. </p> <ul> <li> <p>If your output is not <code>HLS</code> or does not have a segment duration set, the name of the output file is a concatenation of <code>OutputKeyPrefix</code> and <code>Outputs:Key</code>:</p> <p>OutputKeyPrefix<code>Outputs:Key</code> </p> </li> <li> <p>If your output is <code>HLSv3</code> and has a segment duration set, or is not included in a playlist, Elastic Transcoder creates an output playlist file with a file extension of <code>.m3u8</code>, and a series of <code>.ts</code> files that include a five-digit sequential counter beginning with 00000:</p> <p>OutputKeyPrefix<code>Outputs:Key</code>.m3u8</p> <p>OutputKeyPrefix<code>Outputs:Key</code>00000.ts</p> </li> <li> <p>If your output is <code>HLSv4</code>, has a segment duration set, and is included in an <code>HLSv4</code> playlist, Elastic Transcoder creates an output playlist file with a file extension of <code>_v4.m3u8</code>. If the output is video, Elastic Transcoder also creates an output file with an extension of <code>_iframe.m3u8</code>:</p> <p>OutputKeyPrefix<code>Outputs:Key</code>_v4.m3u8</p> <p>OutputKeyPrefix<code>Outputs:Key</code>_iframe.m3u8</p> <p>OutputKeyPrefix<code>Outputs:Key</code>.ts</p> </li> </ul> <p>Elastic Transcoder automatically appends the relevant file extension to the file name. If you include a file extension in Output Key, the file name will have two extensions.</p> <p>If you include more than one output in a playlist, any segment duration settings, clip settings, or caption settings must be the same for all outputs in the playlist. For <code>Smooth</code> playlists, the <code>Audio:Profile</code>, <code>Video:Profile</code>, and <code>Video:FrameRate</code> to <code>Video:KeyframesMaxDist</code> ratio must be the same for all outputs.</p>',
        }),
    ).exactOptional(),
    HlsContentProtection: HlsContentProtectionSchema.and(
      z
        .any()
        .openapi({
          description:
            'The HLS content protection settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.',
        }),
    ).exactOptional(),
    PlayReadyDrm: PlayReadyDrmSchema.and(
      z
        .any()
        .openapi({
          description:
            'The DRM settings, if any, that you want Elastic Transcoder to apply to the output files associated with this playlist.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Information about the master playlist.', required: [] })
  .openapi('CreateJobPlaylist')

const LimitExceededExceptionSchema = z.any().openapi('LimitExceededException')

const PipelineStatusSchema = z
  .string()
  .regex(/(^Active$)|(^Paused$)/)
  .openapi('PipelineStatus')

const BucketNameSchema = z
  .string()
  .regex(/^(\w|\.|-){1,255}$/)
  .openapi('BucketName')

const RoleSchema = z
  .string()
  .regex(/^arn:aws:iam::\w{12}:role\/.+$/)
  .openapi('Role')

const KeyArnSchema = z.string().min(0).max(255).openapi('KeyArn')

const SnsTopicSchema = z
  .string()
  .regex(/(^$)|(^arn:aws:sns:.*:\w{12}:.+$)/)
  .openapi('SnsTopic')

const NotificationsSchema = z
  .object({
    Progressing: SnsTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process the job.',
        }),
    ).exactOptional(),
    Completed: SnsTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing the job.',
        }),
    ).exactOptional(),
    Warning: SnsTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition.',
        }),
    ).exactOptional(),
    Error: SnsTopicSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>',
    required: [],
  })
  .openapi('Notifications')

const StorageClassSchema = z
  .string()
  .regex(/(^ReducedRedundancy$)|(^Standard$)/)
  .openapi('StorageClass')

const GranteeTypeSchema = z
  .string()
  .regex(/(^Canonical$)|(^Email$)|(^Group$)/)
  .openapi('GranteeType')

const GranteeSchema = z.string().min(1).max(255).openapi('Grantee')

const AccessControlSchema = z
  .string()
  .regex(/(^FullControl$)|(^Read$)|(^ReadAcp$)|(^WriteAcp$)/)
  .openapi('AccessControl')

const AccessControlsSchema = z.array(AccessControlSchema).max(30).openapi('AccessControls')

const PermissionSchema = z
  .object({
    GranteeType: GranteeTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The type of value that appears in the Grantee object:</p> <ul> <li> <p> <code>Canonical</code>: Either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution.</p> <important> <p>A canonical user ID is not the same as an AWS account number.</p> </important> </li> <li> <p> <code>Email</code>: The registered email address of an AWS account.</p> </li> <li> <p> <code>Group</code>: One of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    Grantee: GranteeSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS user or group that you want to have access to transcoded files and playlists. To identify the user or group, you can specify the canonical user ID for an AWS account, an origin access identity for a CloudFront distribution, the registered email address of an AWS account, or a predefined Amazon S3 group.',
        }),
    ).exactOptional(),
    Access: AccessControlsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The permission that you want to give to the AWS user that is listed in Grantee. Valid values include: </p> <ul> <li> <p> <code>READ</code>: The grantee can read the thumbnails and metadata for thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has READ, READ_ACP, and WRITE_ACP permissions for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>Permission</code> structure.', required: [] })
  .openapi('Permission')

const PermissionsSchema = z.array(PermissionSchema).max(30).openapi('Permissions')

const PipelineOutputConfigSchema = z
  .object({
    Bucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files.</p> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit OutputBucket and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead. </p>',
        }),
    ).exactOptional(),
    StorageClass: StorageClassSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket. ',
        }),
    ).exactOptional(),
    Permissions: PermissionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Optional. The <code>Permissions</code> object specifies which users and/or predefined Amazon S3 groups you want to have access to transcoded files and playlists, and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> <p>If you include <code>Permissions</code>, Elastic Transcoder grants only the permissions that you specify. It does not grant full permissions to the owner of the role specified by <code>Role</code>. If you want that user to have full control, you must explicitly grant full control to the user.</p> <p> If you omit <code>Permissions</code>, Elastic Transcoder grants full control over the transcoded files and playlists to the owner of the role specified by <code>Role</code>, and grants no other permissions to any other user or group.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>PipelineOutputConfig</code> structure.', required: [] })
  .openapi('PipelineOutputConfig')

const PipelineSchema = z
  .object({
    Id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The identifier for the pipeline. You use this value to identify the pipeline in which you want to perform a variety of operations, such as creating a job or a preset.',
        }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the pipeline.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>',
        }),
    ).exactOptional(),
    Status: PipelineStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The current status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>',
        }),
    ).exactOptional(),
    InputBucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket from which Elastic Transcoder gets media files for transcoding and the graphics files, if any, that you want to use for watermarks.',
        }),
    ).exactOptional(),
    OutputBucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files, thumbnails, and playlists. Either you specify this value, or you specify both <code>ContentConfig</code> and <code>ThumbnailConfig</code>.',
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM Amazon Resource Name (ARN) for the role that Elastic Transcoder uses to transcode jobs for this pipeline.',
        }),
    ).exactOptional(),
    AwsKmsKeyArn: KeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>",
        }),
    ).exactOptional(),
    Notifications: NotificationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> <ul> <li> <p> <b>Progressing</b> (optional): The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process the job.</p> </li> <li> <p> <b>Complete</b> (optional): The Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing the job.</p> </li> <li> <p> <b>Warning</b> (optional): The Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition.</p> </li> <li> <p> <b>Error</b> (optional): The Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ContentConfig: PipelineOutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists. Either you specify both <code>ContentConfig</code> and <code>ThumbnailConfig</code>, or you specify <code>OutputBucket</code>.</p> <ul> <li> <p> <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists.</p> </li> <li> <p> <b>Permissions</b>: A list of the users and/or predefined Amazon S3 groups you want to have access to transcoded files and playlists, and the type of access that you want them to have. </p> <ul> <li> <p>GranteeType: The type of value that appears in the <code>Grantee</code> object: </p> <ul> <li> <p> <code>Canonical</code>: Either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution.</p> </li> <li> <p> <code>Email</code>: The registered email address of an AWS account.</p> </li> <li> <p> <code>Group</code>: One of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul> </li> <li> <p> <code>Grantee</code>: The AWS user or group that you want to have access to transcoded files and playlists.</p> </li> <li> <p> <code>Access</code>: The permission that you want to give to the AWS user that is listed in <code>Grantee</code>. Valid values include:</p> <ul> <li> <p> <code>READ</code>: The grantee can read the objects and metadata for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has <code>READ</code>, <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> </ul> </li> </ul> </li> <li> <p> <b>StorageClass</b>: The Amazon S3 storage class, Standard or ReducedRedundancy, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket. </p> </li> </ul>',
        }),
    ).exactOptional(),
    ThumbnailConfig: PipelineOutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Information about the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. Either you specify both <code>ContentConfig</code> and <code>ThumbnailConfig</code>, or you specify <code>OutputBucket</code>.</p> <ul> <li> <p> <code>Bucket</code>: The Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files. </p> </li> <li> <p> <code>Permissions</code>: A list of the users and/or predefined Amazon S3 groups you want to have access to thumbnail files, and the type of access that you want them to have. </p> <ul> <li> <p>GranteeType: The type of value that appears in the Grantee object:</p> <ul> <li> <p> <code>Canonical</code>: Either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution.</p> <important> <p>A canonical user ID is not the same as an AWS account number.</p> </important> </li> <li> <p> <code>Email</code>: The registered email address of an AWS account.</p> </li> <li> <p> <code>Group</code>: One of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul> </li> <li> <p> <code>Grantee</code>: The AWS user or group that you want to have access to thumbnail files.</p> </li> <li> <p>Access: The permission that you want to give to the AWS user that is listed in Grantee. Valid values include: </p> <ul> <li> <p> <code>READ</code>: The grantee can read the thumbnails and metadata for thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has READ, READ_ACP, and WRITE_ACP permissions for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> </ul> </li> </ul> </li> <li> <p> <code>StorageClass</code>: The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the thumbnails that it stores in your Amazon S3 bucket.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The pipeline (queue) that is used to manage jobs.', required: [] })
  .openapi('Pipeline')

const WarningSchema = z
  .object({
    Code: StringSchema.and(
      z.any().openapi({ description: 'The code of the cross-regional warning.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The message explaining what resources are in a different region from the pipeline.</p> <note> <p>AWS KMS keys must be in the same region as the pipeline.</p> </note>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>',
    required: [],
  })
  .openapi('Warning')

const WarningsSchema = z.array(WarningSchema).openapi('Warnings')

const CreatePipelineResponseSchema = z
  .object({
    Pipeline: PipelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the pipeline that is created.',
        }),
    ).exactOptional(),
    Warnings: WarningsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When you create a pipeline, Elastic Transcoder returns the values that you specified in the request.',
    required: [],
  })
  .openapi('CreatePipelineResponse')

const PresetContainerSchema = z
  .string()
  .regex(
    /(^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)|(^wav$)|(^mp2$)/,
  )
  .openapi('PresetContainer')

const AudioCodecSchema = z
  .string()
  .regex(/(^AAC$)|(^vorbis$)|(^mp3$)|(^mp2$)|(^pcm$)|(^flac$)/)
  .openapi('AudioCodec')

const AudioSampleRateSchema = z
  .string()
  .regex(/(^auto$)|(^22050$)|(^32000$)|(^44100$)|(^48000$)|(^96000$)|(^192000$)/)
  .openapi('AudioSampleRate')

const AudioBitRateSchema = z
  .string()
  .regex(/^\d{1,3}$/)
  .openapi('AudioBitRate')

const AudioChannelsSchema = z
  .string()
  .regex(/(^auto$)|(^0$)|(^1$)|(^2$)/)
  .openapi('AudioChannels')

const AudioPackingModeSchema = z
  .string()
  .regex(/(^SingleTrack$)|(^OneChannelPerTrack$)|(^OneChannelPerTrackWithMosTo8Tracks$)/)
  .openapi('AudioPackingMode')

const AudioCodecProfileSchema = z
  .string()
  .regex(/(^auto$)|(^AAC-LC$)|(^HE-AAC$)|(^HE-AACv2$)/)
  .openapi('AudioCodecProfile')

const AudioBitDepthSchema = z
  .string()
  .regex(/(^8$)|(^16$)|(^24$)|(^32$)/)
  .openapi('AudioBitDepth')

const AudioBitOrderSchema = z
  .string()
  .regex(/(^LittleEndian$)/)
  .openapi('AudioBitOrder')

const AudioSignedSchema = z
  .string()
  .regex(/(^Unsigned$)|(^Signed$)/)
  .openapi('AudioSigned')

const AudioCodecOptionsSchema = z
  .object({
    Profile: AudioCodecProfileSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can only choose an audio profile when you specify AAC for the value of Audio:Codec.</p> <p>Specify the AAC profile for the output file. Elastic Transcoder supports the following profiles:</p> <ul> <li> <p> <code>auto</code>: If you specify <code>auto</code>, Elastic Transcoder selects the profile based on the bit rate selected for the output file.</p> </li> <li> <p> <code>AAC-LC</code>: The most common AAC profile. Use for bit rates larger than 64 kbps.</p> </li> <li> <p> <code>HE-AAC</code>: Not supported on some older players and devices. Use for bit rates between 40 and 80 kbps.</p> </li> <li> <p> <code>HE-AACv2</code>: Not supported on some players and devices. Use for bit rates less than 48 kbps.</p> </li> </ul> <p>All outputs in a <code>Smooth</code> playlist must have the same value for <code>Profile</code>.</p> <note> <p>If you created any presets before AAC profiles were added, Elastic Transcoder automatically updated your presets to use AAC-LC. You can change the value as required.</p> </note>',
        }),
    ).exactOptional(),
    BitDepth: AudioBitDepthSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can only choose an audio bit depth when you specify <code>flac</code> or <code>pcm</code> for the value of Audio:Codec.</p> <p>The bit depth of a sample is how many bits of information are included in the audio samples. The higher the bit depth, the better the audio, but the larger the file.</p> <p>Valid values are <code>16</code> and <code>24</code>.</p> <p>The most common bit depth is <code>24</code>.</p>',
        }),
    ).exactOptional(),
    BitOrder: AudioBitOrderSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can only choose an audio bit order when you specify <code>pcm</code> for the value of Audio:Codec.</p> <p>The order the bits of a PCM sample are stored in.</p> <p>The supported value is <code>LittleEndian</code>.</p>',
        }),
    ).exactOptional(),
    Signed: AudioSignedSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>You can only choose whether an audio sample is signed when you specify <code>pcm</code> for the value of Audio:Codec.</p> <p>Whether audio samples are represented with negative and positive numbers (signed) or only positive numbers (unsigned).</p> <p>The supported value is <code>Signed</code>.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Options associated with your audio codec.', required: [] })
  .openapi('AudioCodecOptions')

const AudioParametersSchema = z
  .object({
    Codec: AudioCodecSchema.and(
      z
        .any()
        .openapi({
          description:
            'The audio codec for the output file. Valid values include <code>aac</code>, <code>flac</code>, <code>mp2</code>, <code>mp3</code>, <code>pcm</code>, and <code>vorbis</code>.',
        }),
    ).exactOptional(),
    SampleRate: AudioSampleRateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The sample rate of the audio stream in the output file, in Hertz. Valid values include:</p> <p> <code>auto</code>, <code>22050</code>, <code>32000</code>, <code>44100</code>, <code>48000</code>, <code>96000</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder automatically detects the sample rate.</p>',
        }),
    ).exactOptional(),
    BitRate: AudioBitRateSchema.and(
      z
        .any()
        .openapi({
          description:
            'The bit rate of the audio stream in the output file, in kilobits/second. Enter an integer between 64 and 320, inclusive.',
        }),
    ).exactOptional(),
    Channels: AudioChannelsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The number of audio channels in the output file. The following values are valid:</p> <p> <code>auto</code>, <code>0</code>, <code>1</code>, <code>2</code> </p> <p>One channel carries the information played by a single speaker. For example, a stereo track with two channels sends one channel to the left speaker, and the other channel to the right speaker. The output channels are organized into tracks. If you want Elastic Transcoder to automatically detect the number of audio channels in the input file and use that value for the output file, select <code>auto</code>.</p> <p>The output of a specific channel value and inputs are as follows:</p> <ul> <li> <p> <code>auto</code> <b> channel specified, with any input:</b> Pass through up to eight input channels.</p> </li> <li> <p> <code>0</code> <b> channels specified, with any input:</b> Audio omitted from the output.</p> </li> <li> <p> <code>1</code> <b> channel specified, with at least one input channel:</b> Mono sound.</p> </li> <li> <p> <code>2</code> <b> channels specified, with any input:</b> Two identical mono channels or stereo. For more information about tracks, see <code>Audio:AudioPackingMode.</code> </p> </li> </ul> <p> For more information about how Elastic Transcoder organizes channels and tracks, see <code>Audio:AudioPackingMode</code>.</p>',
        }),
    ).exactOptional(),
    AudioPackingMode: AudioPackingModeSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The method of organizing audio channels and tracks. Use <code>Audio:Channels</code> to specify the number of channels in your output, and <code>Audio:AudioPackingMode</code> to specify the number of tracks and their relation to the channels. If you do not specify an <code>Audio:AudioPackingMode</code>, Elastic Transcoder uses <code>SingleTrack</code>.</p> <p>The following values are valid:</p> <p> <code>SingleTrack</code>, <code>OneChannelPerTrack</code>, and <code>OneChannelPerTrackWithMosTo8Tracks</code> </p> <p>When you specify <code>SingleTrack</code>, Elastic Transcoder creates a single track for your output. The track can have up to eight channels. Use <code>SingleTrack</code> for all non-<code>mxf</code> containers.</p> <p>The outputs of <code>SingleTrack</code> for a specific channel value and inputs are as follows:</p> <ul> <li> <p> <code>0</code> <b> channels with any input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1, 2, or auto </code> <b>channels with no audio input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1 </code> <b>channel with any input with audio:</b> One track with one channel, downmixed if necessary</p> </li> <li> <p> <code>2 </code> <b>channels with one track with one channel:</b> One track with two identical channels</p> </li> <li> <p> <code>2 or auto </code> <b>channels with two tracks with one channel each:</b> One track with two channels</p> </li> <li> <p> <code>2 or auto </code> <b>channels with one track with two channels:</b> One track with two channels</p> </li> <li> <p> <code>2 </code> <b>channels with one track with multiple channels:</b> One track with two channels</p> </li> <li> <p> <code>auto </code> <b>channels with one track with one channel:</b> One track with one channel</p> </li> <li> <p> <code>auto </code> <b>channels with one track with multiple channels:</b> One track with multiple channels</p> </li> </ul> <p>When you specify <code>OneChannelPerTrack</code>, Elastic Transcoder creates a new track for every channel in your output. Your output can have up to eight single-channel tracks.</p> <p>The outputs of <code>OneChannelPerTrack</code> for a specific channel value and inputs are as follows:</p> <ul> <li> <p> <code>0 </code> <b>channels with any input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1, 2, or auto </code> <b>channels with no audio input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1 </code> <b>channel with any input with audio:</b> One track with one channel, downmixed if necessary</p> </li> <li> <p> <code>2 </code> <b>channels with one track with one channel:</b> Two tracks with one identical channel each</p> </li> <li> <p> <code>2 or auto </code> <b>channels with two tracks with one channel each:</b> Two tracks with one channel each</p> </li> <li> <p> <code>2 or auto </code> <b>channels with one track with two channels:</b> Two tracks with one channel each</p> </li> <li> <p> <code>2 </code> <b>channels with one track with multiple channels:</b> Two tracks with one channel each</p> </li> <li> <p> <code>auto </code> <b>channels with one track with one channel:</b> One track with one channel</p> </li> <li> <p> <code>auto </code> <b>channels with one track with multiple channels:</b> Up to eight tracks with one channel each</p> </li> </ul> <p>When you specify <code>OneChannelPerTrackWithMosTo8Tracks</code>, Elastic Transcoder creates eight single-channel tracks for your output. All tracks that do not contain audio data from an input channel are MOS, or Mit Out Sound, tracks.</p> <p>The outputs of <code>OneChannelPerTrackWithMosTo8Tracks</code> for a specific channel value and inputs are as follows:</p> <ul> <li> <p> <code>0 </code> <b>channels with any input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1, 2, or auto </code> <b>channels with no audio input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1 </code> <b>channel with any input with audio:</b> One track with one channel, downmixed if necessary, plus six MOS tracks</p> </li> <li> <p> <code>2 </code> <b>channels with one track with one channel:</b> Two tracks with one identical channel each, plus six MOS tracks</p> </li> <li> <p> <code>2 or auto </code> <b>channels with two tracks with one channel each:</b> Two tracks with one channel each, plus six MOS tracks</p> </li> <li> <p> <code>2 or auto </code> <b>channels with one track with two channels:</b> Two tracks with one channel each, plus six MOS tracks</p> </li> <li> <p> <code>2 </code> <b>channels with one track with multiple channels:</b> Two tracks with one channel each, plus six MOS tracks</p> </li> <li> <p> <code>auto </code> <b>channels with one track with one channel:</b> One track with one channel, plus seven MOS tracks</p> </li> <li> <p> <code>auto </code> <b>channels with one track with multiple channels:</b> Up to eight tracks with one channel each, plus MOS tracks until there are eight tracks in all</p> </li> </ul>',
        }),
    ).exactOptional(),
    CodecOptions: AudioCodecOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specified <code>AAC</code> for <code>Audio:Codec</code>, this is the <code>AAC</code> compression profile to use. Valid values include:</p> <p> <code>auto</code>, <code>AAC-LC</code>, <code>HE-AAC</code>, <code>HE-AACv2</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder chooses a profile based on the bit rate of the output file.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Parameters required for transcoding audio.', required: [] })
  .openapi('AudioParameters')

const VideoCodecSchema = z
  .string()
  .regex(/(^H\.264$)|(^vp8$)|(^vp9$)|(^mpeg2$)|(^gif$)/)
  .openapi('VideoCodec')

const CodecOptionSchema = z.string().min(1).max(255).openapi('CodecOption')

const CodecOptionsSchema = z
  .record(z.string(), CodecOptionSchema)
  .refine((val) => Object.keys(val).length <= 30)
  .openapi('CodecOptions')

const KeyframesMaxDistSchema = z
  .string()
  .regex(/^\d{1,6}$/)
  .openapi('KeyframesMaxDist')

const FixedGOPSchema = z
  .string()
  .regex(/(^true$)|(^false$)/)
  .openapi('FixedGOP')

const VideoBitRateSchema = z
  .string()
  .regex(/(^\d{2,5}$)|(^auto$)/)
  .openapi('VideoBitRate')

const MaxFrameRateSchema = z
  .string()
  .regex(/(^10$)|(^15$)|(^23.97$)|(^24$)|(^25$)|(^29.97$)|(^30$)|(^50$)|(^60$)/)
  .openapi('MaxFrameRate')

const PixelsOrPercentSchema = z
  .string()
  .regex(/(^\d{1,3}(\.\d{0,5})?%$)|(^\d{1,4}?px$)/)
  .openapi('PixelsOrPercent')

const WatermarkSizingPolicySchema = z
  .string()
  .regex(/(^Fit$)|(^Stretch$)|(^ShrinkToFit$)/)
  .openapi('WatermarkSizingPolicy')

const HorizontalAlignSchema = z
  .string()
  .regex(/(^Left$)|(^Right$)|(^Center$)/)
  .openapi('HorizontalAlign')

const VerticalAlignSchema = z
  .string()
  .regex(/(^Top$)|(^Bottom$)|(^Center$)/)
  .openapi('VerticalAlign')

const OpacitySchema = z
  .string()
  .regex(/^\d{1,3}(\.\d{0,20})?$/)
  .openapi('Opacity')

const TargetSchema = z
  .string()
  .regex(/(^Content$)|(^Frame$)/)
  .openapi('Target')

const PresetWatermarkSchema = z
  .object({
    Id: PresetWatermarkIdSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A unique identifier for the settings for one watermark. The value of <code>Id</code> can be up to 40 characters long. ',
        }),
    ).exactOptional(),
    MaxWidth: PixelsOrPercentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum width of the watermark in one of the following formats: </p> <ul> <li> <p>number of pixels (px): The minimum value is 16 pixels, and the maximum value is the value of <code>MaxWidth</code>.</p> </li> <li> <p>integer percentage (%): The range of valid values is 0 to 100. Use the value of <code>Target</code> to specify whether you want Elastic Transcoder to include the black bars that are added by Elastic Transcoder, if any, in the calculation.</p> <p>If you specify the value in pixels, it must be less than or equal to the value of <code>MaxWidth</code>.</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxHeight: PixelsOrPercentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The maximum height of the watermark in one of the following formats: </p> <ul> <li> <p>number of pixels (px): The minimum value is 16 pixels, and the maximum value is the value of <code>MaxHeight</code>.</p> </li> <li> <p>integer percentage (%): The range of valid values is 0 to 100. Use the value of <code>Target</code> to specify whether you want Elastic Transcoder to include the black bars that are added by Elastic Transcoder, if any, in the calculation.</p> </li> </ul> <p>If you specify the value in pixels, it must be less than or equal to the value of <code>MaxHeight</code>.</p>',
        }),
    ).exactOptional(),
    SizingPolicy: WatermarkSizingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that controls scaling of the watermark: </p> <ul> <li> <p> <b>Fit</b>: Elastic Transcoder scales the watermark so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> without exceeding the other value.</p> </li> <li> <p> <b>Stretch</b>: Elastic Transcoder stretches the watermark to match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>. If the relative proportions of the watermark and the values of <code>MaxWidth</code> and <code>MaxHeight</code> are different, the watermark will be distorted.</p> </li> <li> <p> <b>ShrinkToFit</b>: Elastic Transcoder scales the watermark down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either value. If you specify this option, Elastic Transcoder does not scale the watermark up.</p> </li> </ul>',
        }),
    ).exactOptional(),
    HorizontalAlign: HorizontalAlignSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The horizontal position of the watermark unless you specify a non-zero value for <code>HorizontalOffset</code>: </p> <ul> <li> <p> <b>Left</b>: The left edge of the watermark is aligned with the left border of the video.</p> </li> <li> <p> <b>Right</b>: The right edge of the watermark is aligned with the right border of the video.</p> </li> <li> <p> <b>Center</b>: The watermark is centered between the left and right borders.</p> </li> </ul>',
        }),
    ).exactOptional(),
    HorizontalOffset: PixelsOrPercentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The amount by which you want the horizontal position of the watermark to be offset from the position specified by HorizontalAlign: </p> <ul> <li> <p>number of pixels (px): The minimum value is 0 pixels, and the maximum value is the value of MaxWidth.</p> </li> <li> <p>integer percentage (%): The range of valid values is 0 to 100.</p> </li> </ul> <p>For example, if you specify Left for <code>HorizontalAlign</code> and 5px for <code>HorizontalOffset</code>, the left side of the watermark appears 5 pixels from the left border of the output video.</p> <p> <code>HorizontalOffset</code> is only valid when the value of <code>HorizontalAlign</code> is <code>Left</code> or <code>Right</code>. If you specify an offset that causes the watermark to extend beyond the left or right border and Elastic Transcoder has not added black bars, the watermark is cropped. If Elastic Transcoder has added black bars, the watermark extends into the black bars. If the watermark extends beyond the black bars, it is cropped.</p> <p>Use the value of <code>Target</code> to specify whether you want to include the black bars that are added by Elastic Transcoder, if any, in the offset calculation.</p>',
        }),
    ).exactOptional(),
    VerticalAlign: VerticalAlignSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The vertical position of the watermark unless you specify a non-zero value for <code>VerticalOffset</code>: </p> <ul> <li> <p> <b>Top</b>: The top edge of the watermark is aligned with the top border of the video.</p> </li> <li> <p> <b>Bottom</b>: The bottom edge of the watermark is aligned with the bottom border of the video.</p> </li> <li> <p> <b>Center</b>: The watermark is centered between the top and bottom borders.</p> </li> </ul>',
        }),
    ).exactOptional(),
    VerticalOffset: PixelsOrPercentSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p> <code>VerticalOffset</code> </p> <p>The amount by which you want the vertical position of the watermark to be offset from the position specified by VerticalAlign:</p> <ul> <li> <p>number of pixels (px): The minimum value is 0 pixels, and the maximum value is the value of <code>MaxHeight</code>.</p> </li> <li> <p>integer percentage (%): The range of valid values is 0 to 100.</p> </li> </ul> <p>For example, if you specify <code>Top</code> for <code>VerticalAlign</code> and <code>5px</code> for <code>VerticalOffset</code>, the top of the watermark appears 5 pixels from the top border of the output video.</p> <p> <code>VerticalOffset</code> is only valid when the value of VerticalAlign is Top or Bottom.</p> <p>If you specify an offset that causes the watermark to extend beyond the top or bottom border and Elastic Transcoder has not added black bars, the watermark is cropped. If Elastic Transcoder has added black bars, the watermark extends into the black bars. If the watermark extends beyond the black bars, it is cropped.</p> <p>Use the value of <code>Target</code> to specify whether you want Elastic Transcoder to include the black bars that are added by Elastic Transcoder, if any, in the offset calculation.</p>',
        }),
    ).exactOptional(),
    Opacity: OpacitySchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>A percentage that indicates how much you want a watermark to obscure the video in the location where it appears. Valid values are 0 (the watermark is invisible) to 100 (the watermark completely obscures the video in the specified location). The datatype of <code>Opacity</code> is float.</p> <p>Elastic Transcoder supports transparent .png graphics. If you use a transparent .png, the transparent portion of the video appears as if you had specified a value of 0 for <code>Opacity</code>. The .jpg file format doesn't support transparency.</p>",
        }),
    ).exactOptional(),
    Target: TargetSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>A value that determines how Elastic Transcoder interprets values that you specified for <code>HorizontalOffset</code>, <code>VerticalOffset</code>, <code>MaxWidth</code>, and <code>MaxHeight</code>:</p> <ul> <li> <p> <b>Content</b>: <code>HorizontalOffset</code> and <code>VerticalOffset</code> values are calculated based on the borders of the video excluding black bars added by Elastic Transcoder, if any. In addition, <code>MaxWidth</code> and <code>MaxHeight</code>, if specified as a percentage, are calculated based on the borders of the video excluding black bars added by Elastic Transcoder, if any.</p> </li> <li> <p> <b>Frame</b>: <code>HorizontalOffset</code> and <code>VerticalOffset</code> values are calculated based on the borders of the video including black bars added by Elastic Transcoder, if any. In addition, <code>MaxWidth</code> and <code>MaxHeight</code>, if specified as a percentage, are calculated based on the borders of the video including black bars added by Elastic Transcoder, if any.</p> </li> </ul>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      '<p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>',
    required: [],
  })
  .openapi('PresetWatermark')

const PresetWatermarksSchema = z.array(PresetWatermarkSchema).openapi('PresetWatermarks')

const VideoParametersSchema = z
  .object({
    Codec: VideoCodecSchema.and(
      z
        .any()
        .openapi({
          description:
            'The video codec for the output file. Valid values include <code>gif</code>, <code>H.264</code>, <code>mpeg2</code>, <code>vp8</code>, and <code>vp9</code>. You can only specify <code>vp8</code> and <code>vp9</code> when the container type is <code>webm</code>, <code>gif</code> when the container type is <code>gif</code>, and <code>mpeg2</code> when the container type is <code>mpg</code>.',
        }),
    ).exactOptional(),
    CodecOptions: CodecOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p> <b>Profile (H.264/VP8/VP9 Only)</b> </p> <p>The H.264 profile that you want to use for the output file. Elastic Transcoder supports the following profiles:</p> <ul> <li> <p> <code>baseline</code>: The profile most commonly used for videoconferencing and for mobile applications.</p> </li> <li> <p> <code>main</code>: The profile used for standard-definition digital TV broadcasts.</p> </li> <li> <p> <code>high</code>: The profile used for high-definition digital TV broadcasts and for Blu-ray discs.</p> </li> </ul> <p> <b>Level (H.264 Only)</b> </p> <p>The H.264 level that you want to use for the output file. Elastic Transcoder supports the following levels:</p> <p> <code>1</code>, <code>1b</code>, <code>1.1</code>, <code>1.2</code>, <code>1.3</code>, <code>2</code>, <code>2.1</code>, <code>2.2</code>, <code>3</code>, <code>3.1</code>, <code>3.2</code>, <code>4</code>, <code>4.1</code> </p> <p> <b>MaxReferenceFrames (H.264 Only)</b> </p> <p>Applicable only when the value of Video:Codec is H.264. The maximum number of previously decoded frames to use as a reference for decoding future frames. Valid values are integers 0 through 16, but we recommend that you not use a value greater than the following:</p> <p> <code>Min(Floor(Maximum decoded picture buffer in macroblocks * 256 / (Width in pixels * Height in pixels)), 16)</code> </p> <p>where <i>Width in pixels</i> and <i>Height in pixels</i> represent either MaxWidth and MaxHeight, or Resolution. <i>Maximum decoded picture buffer in macroblocks</i> depends on the value of the <code>Level</code> object. See the list below. (A macroblock is a block of pixels measuring 16x16.) </p> <ul> <li> <p>1 - 396</p> </li> <li> <p>1b - 396</p> </li> <li> <p>1.1 - 900</p> </li> <li> <p>1.2 - 2376</p> </li> <li> <p>1.3 - 2376</p> </li> <li> <p>2 - 2376</p> </li> <li> <p>2.1 - 4752</p> </li> <li> <p>2.2 - 8100</p> </li> <li> <p>3 - 8100</p> </li> <li> <p>3.1 - 18000</p> </li> <li> <p>3.2 - 20480</p> </li> <li> <p>4 - 32768</p> </li> <li> <p>4.1 - 32768</p> </li> </ul> <p> <b>MaxBitRate (Optional, H.264/MPEG2/VP8/VP9 only)</b> </p> <p>The maximum number of bits per second in a video buffer; the size of the buffer is specified by <code>BufferSize</code>. Specify a value between 16 and 62,500. You can reduce the bandwidth required to stream a video by reducing the maximum bit rate, but this also reduces the quality of the video.</p> <p> <b>BufferSize (Optional, H.264/MPEG2/VP8/VP9 only)</b> </p> <p>The maximum number of bits in any x seconds of the output video. This window is commonly 10 seconds, the standard segment duration when you're using FMP4 or MPEG-TS for the container type of the output video. Specify an integer greater than 0. If you specify <code>MaxBitRate</code> and omit <code>BufferSize</code>, Elastic Transcoder sets <code>BufferSize</code> to 10 times the value of <code>MaxBitRate</code>.</p> <p> <b>InterlacedMode (Optional, H.264/MPEG2 Only)</b> </p> <p>The interlace mode for the output video.</p> <p>Interlaced video is used to double the perceived frame rate for a video by interlacing two fields (one field on every other line, the other field on the other lines) so that the human eye registers multiple pictures per frame. Interlacing reduces the bandwidth required for transmitting a video, but can result in blurred images and flickering.</p> <p>Valid values include <code>Progressive</code> (no interlacing, top to bottom), <code>TopFirst</code> (top field first), <code>BottomFirst</code> (bottom field first), and <code>Auto</code>.</p> <p>If <code>InterlaceMode</code> is not specified, Elastic Transcoder uses <code>Progressive</code> for the output. If <code>Auto</code> is specified, Elastic Transcoder interlaces the output.</p> <p> <b>ColorSpaceConversionMode (Optional, H.264/MPEG2 Only)</b> </p> <p>The color space conversion Elastic Transcoder applies to the output video. Color spaces are the algorithms used by the computer to store information about how to render color. <code>Bt.601</code> is the standard for standard definition video, while <code>Bt.709</code> is the standard for high definition video.</p> <p>Valid values include <code>None</code>, <code>Bt709toBt601</code>, <code>Bt601toBt709</code>, and <code>Auto</code>.</p> <p>If you chose <code>Auto</code> for <code>ColorSpaceConversionMode</code> and your output is interlaced, your frame rate is one of <code>23.97</code>, <code>24</code>, <code>25</code>, <code>29.97</code>, <code>50</code>, or <code>60</code>, your <code>SegmentDuration</code> is null, and you are using one of the resolution changes from the list below, Elastic Transcoder applies the following color space conversions:</p> <ul> <li> <p> <i>Standard to HD, 720x480 to 1920x1080</i> - Elastic Transcoder applies <code>Bt601ToBt709</code> </p> </li> <li> <p> <i>Standard to HD, 720x576 to 1920x1080</i> - Elastic Transcoder applies <code>Bt601ToBt709</code> </p> </li> <li> <p> <i>HD to Standard, 1920x1080 to 720x480</i> - Elastic Transcoder applies <code>Bt709ToBt601</code> </p> </li> <li> <p> <i>HD to Standard, 1920x1080 to 720x576</i> - Elastic Transcoder applies <code>Bt709ToBt601</code> </p> </li> </ul> <note> <p>Elastic Transcoder may change the behavior of the <code>ColorspaceConversionMode</code> <code>Auto</code> mode in the future. All outputs in a playlist must use the same <code>ColorSpaceConversionMode</code>.</p> </note> <p>If you do not specify a <code>ColorSpaceConversionMode</code>, Elastic Transcoder does not change the color space of a file. If you are unsure what <code>ColorSpaceConversionMode</code> was applied to your output file, you can check the <code>AppliedColorSpaceConversion</code> parameter included in your job response. If your job does not have an <code>AppliedColorSpaceConversion</code> in its response, no <code>ColorSpaceConversionMode</code> was applied.</p> <p> <b>ChromaSubsampling</b> </p> <p>The sampling pattern for the chroma (color) channels of the output video. Valid values include <code>yuv420p</code> and <code>yuv422p</code>.</p> <p> <code>yuv420p</code> samples the chroma information of every other horizontal and every other vertical line, <code>yuv422p</code> samples the color information of every horizontal line and every other vertical line.</p> <p> <b>LoopCount (Gif Only)</b> </p> <p>The number of times you want the output gif to loop. Valid values include <code>Infinite</code> and integers between <code>0</code> and <code>100</code>, inclusive.</p>",
        }),
    ).exactOptional(),
    KeyframesMaxDist: KeyframesMaxDistSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applicable only when the value of Video:Codec is one of <code>H.264</code>, <code>MPEG2</code>, or <code>VP8</code>.</p> <p>The maximum number of frames between key frames. Key frames are fully encoded frames; the frames between key frames are encoded based, in part, on the content of the key frames. The value is an integer formatted as a string; valid values are between 1 (every frame is a key frame) and 100000, inclusive. A higher value results in higher compression but may also discernibly decrease video quality.</p> <p>For <code>Smooth</code> outputs, the <code>FrameRate</code> must have a constant ratio to the <code>KeyframesMaxDist</code>. This allows <code>Smooth</code> playlists to switch between different quality levels while the file is being played.</p> <p>For example, an input file can have a <code>FrameRate</code> of 30 with a <code>KeyframesMaxDist</code> of 90. The output file then needs to have a ratio of 1:3. Valid outputs would have <code>FrameRate</code> of 30, 25, and 10, and <code>KeyframesMaxDist</code> of 90, 75, and 30, respectively.</p> <p>Alternately, this can be achieved by setting <code>FrameRate</code> to auto and having the same values for <code>MaxFrameRate</code> and <code>KeyframesMaxDist</code>.</p>',
        }),
    ).exactOptional(),
    FixedGOP: FixedGOPSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Applicable only when the value of Video:Codec is one of <code>H.264</code>, <code>MPEG2</code>, or <code>VP8</code>.</p> <p>Whether to use a fixed value for <code>FixedGOP</code>. Valid values are <code>true</code> and <code>false</code>:</p> <ul> <li> <p> <code>true</code>: Elastic Transcoder uses the value of <code>KeyframesMaxDist</code> for the distance between key frames (the number of frames in a group of pictures, or GOP).</p> </li> <li> <p> <code>false</code>: The distance between key frames can vary.</p> </li> </ul> <important> <p> <code>FixedGOP</code> must be set to <code>true</code> for <code>fmp4</code> containers.</p> </important>',
        }),
    ).exactOptional(),
    BitRate: VideoBitRateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The bit rate of the video stream in the output file, in kilobits/second. Valid values depend on the values of <code>Level</code> and <code>Profile</code>. If you specify <code>auto</code>, Elastic Transcoder uses the detected bit rate of the input source. If you specify a value other than <code>auto</code>, we recommend that you specify a value less than or equal to the maximum H.264-compliant value listed for your level and profile:</p> <p> <i>Level - Maximum video bit rate in kilobits/second (baseline and main Profile) : maximum video bit rate in kilobits/second (high Profile)</i> </p> <ul> <li> <p>1 - 64 : 80</p> </li> <li> <p>1b - 128 : 160</p> </li> <li> <p>1.1 - 192 : 240</p> </li> <li> <p>1.2 - 384 : 480</p> </li> <li> <p>1.3 - 768 : 960</p> </li> <li> <p>2 - 2000 : 2500</p> </li> <li> <p>3 - 10000 : 12500</p> </li> <li> <p>3.1 - 14000 : 17500</p> </li> <li> <p>3.2 - 20000 : 25000</p> </li> <li> <p>4 - 20000 : 25000</p> </li> <li> <p>4.1 - 50000 : 62500</p> </li> </ul>',
        }),
    ).exactOptional(),
    FrameRate: FrameRateSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The frames per second for the video stream in the output file. Valid values include:</p> <p> <code>auto</code>, <code>10</code>, <code>15</code>, <code>23.97</code>, <code>24</code>, <code>25</code>, <code>29.97</code>, <code>30</code>, <code>60</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder uses the detected frame rate of the input source. If you specify a frame rate, we recommend that you perform the following calculation:</p> <p> <code>Frame rate = maximum recommended decoding speed in luma samples/second / (width in pixels * height in pixels)</code> </p> <p>where:</p> <ul> <li> <p> <i>width in pixels</i> and <i>height in pixels</i> represent the Resolution of the output video.</p> </li> <li> <p> <i>maximum recommended decoding speed in Luma samples/second</i> is less than or equal to the maximum value listed in the following table, based on the value that you specified for Level.</p> </li> </ul> <p>The maximum recommended decoding speed in Luma samples/second for each level is described in the following list (<i>Level - Decoding speed</i>):</p> <ul> <li> <p>1 - 380160</p> </li> <li> <p>1b - 380160</p> </li> <li> <p>1.1 - 76800</p> </li> <li> <p>1.2 - 1536000</p> </li> <li> <p>1.3 - 3041280</p> </li> <li> <p>2 - 3041280</p> </li> <li> <p>2.1 - 5068800</p> </li> <li> <p>2.2 - 5184000</p> </li> <li> <p>3 - 10368000</p> </li> <li> <p>3.1 - 27648000</p> </li> <li> <p>3.2 - 55296000</p> </li> <li> <p>4 - 62914560</p> </li> <li> <p>4.1 - 62914560</p> </li> </ul>',
        }),
    ).exactOptional(),
    MaxFrameRate: MaxFrameRateSchema.and(
      z
        .any()
        .openapi({
          description:
            'If you specify <code>auto</code> for <code>FrameRate</code>, Elastic Transcoder uses the frame rate of the input video for the frame rate of the output video. Specify the maximum frame rate that you want Elastic Transcoder to use when the frame rate of the input video is greater than the desired maximum frame rate of the output video. Valid values include: <code>10</code>, <code>15</code>, <code>23.97</code>, <code>24</code>, <code>25</code>, <code>29.97</code>, <code>30</code>, <code>60</code>.',
        }),
    ).exactOptional(),
    Resolution: ResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>To better control resolution and aspect ratio of output videos, we recommend that you use the values <code>MaxWidth</code>, <code>MaxHeight</code>, <code>SizingPolicy</code>, <code>PaddingPolicy</code>, and <code>DisplayAspectRatio</code> instead of <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do not use them together.</p> </important> <p>The width and height of the video in the output file, in pixels. Valid values are <code>auto</code> and <i>width</i> x <i>height</i>:</p> <ul> <li> <p> <code>auto</code>: Elastic Transcoder attempts to preserve the width and height of the input file, subject to the following rules.</p> </li> <li> <p> <code> <i>width</i> x <i>height</i> </code>: The width and height of the output video in pixels.</p> </li> </ul> <p>Note the following about specifying the width and height:</p> <ul> <li> <p>The width must be an even integer between 128 and 4096, inclusive.</p> </li> <li> <p>The height must be an even integer between 96 and 3072, inclusive.</p> </li> <li> <p>If you specify a resolution that is less than the resolution of the input file, Elastic Transcoder rescales the output file to the lower resolution.</p> </li> <li> <p>If you specify a resolution that is greater than the resolution of the input file, Elastic Transcoder rescales the output to the higher resolution.</p> </li> <li> <p>We recommend that you specify a resolution for which the product of width and height is less than or equal to the applicable value in the following list (<i>List - Max width x height value</i>):</p> <ul> <li> <p>1 - 25344</p> </li> <li> <p>1b - 25344</p> </li> <li> <p>1.1 - 101376</p> </li> <li> <p>1.2 - 101376</p> </li> <li> <p>1.3 - 101376</p> </li> <li> <p>2 - 101376</p> </li> <li> <p>2.1 - 202752</p> </li> <li> <p>2.2 - 404720</p> </li> <li> <p>3 - 404720</p> </li> <li> <p>3.1 - 921600</p> </li> <li> <p>3.2 - 1310720</p> </li> <li> <p>4 - 2097152</p> </li> <li> <p>4.1 - 2097152</p> </li> </ul> </li> </ul>',
        }),
    ).exactOptional(),
    AspectRatio: AspectRatioSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>To better control resolution and aspect ratio of output videos, we recommend that you use the values <code>MaxWidth</code>, <code>MaxHeight</code>, <code>SizingPolicy</code>, <code>PaddingPolicy</code>, and <code>DisplayAspectRatio</code> instead of <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do not use them together.</p> </important> <p>The display aspect ratio of the video in the output file. Valid values include:</p> <p> <code>auto</code>, <code>1:1</code>, <code>4:3</code>, <code>3:2</code>, <code>16:9</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder tries to preserve the aspect ratio of the input file.</p> <p>If you specify an aspect ratio for the output file that differs from aspect ratio of the input file, Elastic Transcoder adds pillarboxing (black bars on the sides) or letterboxing (black bars on the top and bottom) to maintain the aspect ratio of the active region of the video.</p>',
        }),
    ).exactOptional(),
    MaxWidth: DigitsOrAutoSchema.and(
      z
        .any()
        .openapi({
          description:
            ' The maximum width of the output video in pixels. If you specify <code>auto</code>, Elastic Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 128 and 4096. ',
        }),
    ).exactOptional(),
    MaxHeight: DigitsOrAutoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum height of the output video in pixels. If you specify <code>auto</code>, Elastic Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 96 and 3072.',
        }),
    ).exactOptional(),
    DisplayAspectRatio: AspectRatioSchema.and(
      z
        .any()
        .openapi({
          description: 'The value that Elastic Transcoder adds to the metadata in the output file.',
        }),
    ).exactOptional(),
    SizingPolicy: SizingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify one of the following values to control scaling of the output video:</p> <ul> <li> <p> <code>Fit</code>: Elastic Transcoder scales the output video so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> without exceeding the other value.</p> </li> <li> <p> <code>Fill</code>: Elastic Transcoder scales the output video so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> and matches or exceeds the other value. Elastic Transcoder centers the output video and then crops it in the dimension (if any) that exceeds the maximum value.</p> </li> <li> <p> <code>Stretch</code>: Elastic Transcoder stretches the output video to match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>. If the relative proportions of the input video and the output video are different, the output video will be distorted.</p> </li> <li> <p> <code>Keep</code>: Elastic Transcoder does not scale the output video. If either dimension of the input video exceeds the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>, Elastic Transcoder crops the output video.</p> </li> <li> <p> <code>ShrinkToFit</code>: Elastic Transcoder scales the output video down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either value. If you specify this option, Elastic Transcoder does not scale the video up.</p> </li> <li> <p> <code>ShrinkToFill</code>: Elastic Transcoder scales the output video down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without dropping below either value. If you specify this option, Elastic Transcoder does not scale the video up.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PaddingPolicy: PaddingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add black bars to the top and bottom and/or left and right sides of the output video to make the total size of the output video match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>.',
        }),
    ).exactOptional(),
    Watermarks: PresetWatermarksSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>VideoParameters</code> structure.', required: [] })
  .openapi('VideoParameters')

const DigitsSchema = z
  .string()
  .regex(/^\d{1,5}$/)
  .openapi('Digits')

const ThumbnailResolutionSchema = z
  .string()
  .regex(/^\d{1,5}x\d{1,5}$/)
  .openapi('ThumbnailResolution')

const ThumbnailsSchema = z
  .object({
    Format: JpgOrPngSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The format of thumbnails, if any. Valid values are <code>jpg</code> and <code>png</code>. </p> <p>You specify whether you want Elastic Transcoder to create thumbnails when you create a job.</p>',
        }),
    ).exactOptional(),
    Interval: DigitsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The approximate number of seconds between thumbnails. Specify an integer value.',
        }),
    ).exactOptional(),
    Resolution: ThumbnailResolutionSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>To better control resolution and aspect ratio of thumbnails, we recommend that you use the values <code>MaxWidth</code>, <code>MaxHeight</code>, <code>SizingPolicy</code>, and <code>PaddingPolicy</code> instead of <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do not use them together.</p> </important> <p>The width and height of thumbnail files in pixels. Specify a value in the format <code> <i>width</i> </code> x <code> <i>height</i> </code> where both values are even integers. The values cannot exceed the width and height that you specified in the <code>Video:Resolution</code> object.</p>',
        }),
    ).exactOptional(),
    AspectRatio: AspectRatioSchema.and(
      z
        .any()
        .openapi({
          description:
            '<important> <p>To better control resolution and aspect ratio of thumbnails, we recommend that you use the values <code>MaxWidth</code>, <code>MaxHeight</code>, <code>SizingPolicy</code>, and <code>PaddingPolicy</code> instead of <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do not use them together.</p> </important> <p>The aspect ratio of thumbnails. Valid values include:</p> <p> <code>auto</code>, <code>1:1</code>, <code>4:3</code>, <code>3:2</code>, <code>16:9</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder tries to preserve the aspect ratio of the video in the output file.</p>',
        }),
    ).exactOptional(),
    MaxWidth: DigitsOrAutoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum width of thumbnails in pixels. If you specify auto, Elastic Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 32 and 4096.',
        }),
    ).exactOptional(),
    MaxHeight: DigitsOrAutoSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum height of thumbnails in pixels. If you specify auto, Elastic Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 32 and 3072.',
        }),
    ).exactOptional(),
    SizingPolicy: SizingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Specify one of the following values to control scaling of thumbnails:</p> <ul> <li> <p> <code>Fit</code>: Elastic Transcoder scales thumbnails so they match the value that you specified in thumbnail MaxWidth or MaxHeight settings without exceeding the other value. </p> </li> <li> <p> <code>Fill</code>: Elastic Transcoder scales thumbnails so they match the value that you specified in thumbnail <code>MaxWidth</code> or <code>MaxHeight</code> settings and matches or exceeds the other value. Elastic Transcoder centers the image in thumbnails and then crops in the dimension (if any) that exceeds the maximum value.</p> </li> <li> <p> <code>Stretch</code>: Elastic Transcoder stretches thumbnails to match the values that you specified for thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> settings. If the relative proportions of the input video and thumbnails are different, the thumbnails will be distorted.</p> </li> <li> <p> <code>Keep</code>: Elastic Transcoder does not scale thumbnails. If either dimension of the input video exceeds the values that you specified for thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> settings, Elastic Transcoder crops the thumbnails.</p> </li> <li> <p> <code>ShrinkToFit</code>: Elastic Transcoder scales thumbnails down so that their dimensions match the values that you specified for at least one of thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either value. If you specify this option, Elastic Transcoder does not scale thumbnails up.</p> </li> <li> <p> <code>ShrinkToFill</code>: Elastic Transcoder scales thumbnails down so that their dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without dropping below either value. If you specify this option, Elastic Transcoder does not scale thumbnails up.</p> </li> </ul>',
        }),
    ).exactOptional(),
    PaddingPolicy: PaddingPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add black bars to the top and bottom and/or left and right sides of thumbnails to make the total size of the thumbnails match the values that you specified for thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> settings.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'Thumbnails for videos.', required: [] })
  .openapi('Thumbnails')

const PresetTypeSchema = z
  .string()
  .regex(/(^System$)|(^Custom$)/)
  .openapi('PresetType')

const PresetSchema = z
  .object({
    Id: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'Identifier for the new preset. You use this value to get settings for the preset or to delete it.',
        }),
    ).exactOptional(),
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the preset.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the preset.' }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the preset.' }),
    ).exactOptional(),
    Container: PresetContainerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.',
        }),
    ).exactOptional(),
    Audio: AudioParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the audio preset values.',
        }),
    ).exactOptional(),
    Video: VideoParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the video preset values.',
        }),
    ).exactOptional(),
    Thumbnails: ThumbnailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the thumbnail preset values, if any.',
        }),
    ).exactOptional(),
    Type: PresetTypeSchema.and(
      z
        .any()
        .openapi({
          description:
            'Whether the preset is a default preset provided by Elastic Transcoder (<code>System</code>) or a preset that you have defined (<code>Custom</code>).',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      "Presets are templates that contain most of the settings for transcoding media files from one format to another. Elastic Transcoder includes some default presets for common formats, for example, several iPod and iPhone versions. You can also create your own presets for formats that aren't included among the default presets. You specify which preset you want to use when you create a job.",
    required: [],
  })
  .openapi('Preset')

const CreatePresetResponseSchema = z
  .object({
    Preset: PresetSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the preset that is created.',
        }),
    ).exactOptional(),
    Warning: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            "If the preset settings don't comply with the standards for the video codec but Elastic Transcoder created the preset, this message explains the reason the preset settings don't meet the standard. Elastic Transcoder created the preset because the settings might produce acceptable output.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>CreatePresetResponse</code> structure.', required: [] })
  .openapi('CreatePresetResponse')

const DeletePipelineResponseSchema = z
  .object({})
  .openapi({ description: 'The <code>DeletePipelineResponse</code> structure.' })
  .openapi('DeletePipelineResponse')

const DeletePresetResponseSchema = z
  .object({})
  .openapi({ description: 'The <code>DeletePresetResponse</code> structure.' })
  .openapi('DeletePresetResponse')

const JobsSchema = z.array(JobSchema).openapi('Jobs')

const ListJobsByPipelineResponseSchema = z
  .object({
    Jobs: JobsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>Job</code> objects that are in the specified pipeline.',
        }),
    ).exactOptional(),
    NextPageToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            " A value that you use to access the second and subsequent pages of results, if any. When the jobs in the specified pipeline fit on one page or when you've reached the last page of results, the value of <code>NextPageToken</code> is <code>null</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>ListJobsByPipelineResponse</code> structure.', required: [] })
  .openapi('ListJobsByPipelineResponse')

const ListJobsByStatusResponseSchema = z
  .object({
    Jobs: JobsSchema.and(
      z
        .any()
        .openapi({
          description: 'An array of <code>Job</code> objects that have the specified status.',
        }),
    ).exactOptional(),
    NextPageToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            " A value that you use to access the second and subsequent pages of results, if any. When the jobs in the specified pipeline fit on one page or when you've reached the last page of results, the value of <code>NextPageToken</code> is <code>null</code>. ",
        }),
    ).exactOptional(),
  })
  .openapi({ description: ' The <code>ListJobsByStatusResponse</code> structure. ', required: [] })
  .openapi('ListJobsByStatusResponse')

const PipelinesSchema = z.array(PipelineSchema).openapi('Pipelines')

const ListPipelinesResponseSchema = z
  .object({
    Pipelines: PipelinesSchema.and(
      z.any().openapi({ description: 'An array of <code>Pipeline</code> objects.' }),
    ).exactOptional(),
    NextPageToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that you use to access the second and subsequent pages of results, if any. When the pipelines fit on one page or when you've reached the last page of results, the value of <code>NextPageToken</code> is <code>null</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'A list of the pipelines associated with the current AWS account.',
    required: [],
  })
  .openapi('ListPipelinesResponse')

const PresetsSchema = z.array(PresetSchema).openapi('Presets')

const ListPresetsResponseSchema = z
  .object({
    Presets: PresetsSchema.and(
      z.any().openapi({ description: 'An array of <code>Preset</code> objects.' }),
    ).exactOptional(),
    NextPageToken: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            "A value that you use to access the second and subsequent pages of results, if any. When the presets fit on one page or when you've reached the last page of results, the value of <code>NextPageToken</code> is <code>null</code>.",
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>ListPresetsResponse</code> structure.', required: [] })
  .openapi('ListPresetsResponse')

const ReadJobResponseSchema = z
  .object({
    Job: JobSchema.and(
      z
        .any()
        .openapi({
          description: 'A section of the response body that provides information about the job.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>ReadJobResponse</code> structure.', required: [] })
  .openapi('ReadJobResponse')

const ReadPipelineResponseSchema = z
  .object({
    Pipeline: PipelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the pipeline.',
        }),
    ).exactOptional(),
    Warnings: WarningsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>ReadPipelineResponse</code> structure.', required: [] })
  .openapi('ReadPipelineResponse')

const ReadPresetResponseSchema = z
  .object({
    Preset: PresetSchema.and(
      z
        .any()
        .openapi({
          description: 'A section of the response body that provides information about the preset.',
        }),
    ).exactOptional(),
  })
  .openapi({ description: 'The <code>ReadPresetResponse</code> structure.', required: [] })
  .openapi('ReadPresetResponse')

const SuccessSchema = z
  .string()
  .regex(/(^true$)|(^false$)/)
  .openapi('Success')

const ExceptionMessagesSchema = z.array(StringSchema).openapi('ExceptionMessages')

const TestRoleResponseSchema = z
  .object({
    Success: SuccessSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the operation is successful, this value is <code>true</code>; otherwise, the value is <code>false</code>.',
        }),
    ).exactOptional(),
    Messages: ExceptionMessagesSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the <code>Success</code> element contains <code>false</code>, this value is an array of one or more error messages that were generated during the test process.',
        }),
    ).exactOptional(),
  })
  .openapi({
    deprecated: true,
    description: 'The <code>TestRoleResponse</code> structure.',
    required: [],
  })
  .openapi('TestRoleResponse')

const UpdatePipelineResponseSchema = z
  .object({
    Pipeline: PipelineSchema.and(
      z
        .any()
        .openapi({
          description: 'The pipeline updated by this <code>UpdatePipelineResponse</code> call.',
        }),
    ).exactOptional(),
    Warnings: WarningsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>Elastic Transcoder returns a warning if the resources used by your pipeline are not in the same region as the pipeline.</p> <p>Using resources in the same region, such as your Amazon S3 buckets, Amazon SNS notification topics, and AWS KMS key, reduces processing time and prevents cross-regional charges.</p>',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When you update a pipeline, Elastic Transcoder returns the values that you specified in the request.',
    required: [],
  })
  .openapi('UpdatePipelineResponse')

const UpdatePipelineNotificationsResponseSchema = z
  .object({
    Pipeline: PipelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the pipeline associated with this notification.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The <code>UpdatePipelineNotificationsResponse</code> structure.',
    required: [],
  })
  .openapi('UpdatePipelineNotificationsResponse')

const UpdatePipelineStatusResponseSchema = z
  .object({
    Pipeline: PipelineSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the response body that provides information about the pipeline.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'When you update status for a pipeline, Elastic Transcoder returns the values that you specified in the request.',
    required: [],
  })
  .openapi('UpdatePipelineStatusResponse')

const AscendingSchema = z
  .string()
  .regex(/(^true$)|(^false$)/)
  .openapi('Ascending')

const CancelJobRequestSchema = z
  .object({})
  .openapi({
    title: 'CancelJobRequest',
    description: 'The <code>CancelJobRequest</code> structure.',
  })
  .openapi('CancelJobRequest')

const CreateJobOutputsSchema = z.array(CreateJobOutputSchema).max(30).openapi('CreateJobOutputs')

const CreateJobPlaylistsSchema = z
  .array(CreateJobPlaylistSchema)
  .max(30)
  .openapi('CreateJobPlaylists')

const CreateJobRequestSchema = z
  .object({
    PipelineId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.',
        }),
    ),
    Input: JobInputSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the request body that provides information about the file that is being transcoded.',
        }),
    ).exactOptional(),
    Inputs: JobInputsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the request body that provides information about the files that are being transcoded.',
        }),
    ).exactOptional(),
    Output: CreateJobOutputSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A section of the request body that provides information about the transcoded (target) file. We strongly recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax. ',
        }),
    ).exactOptional(),
    Outputs: CreateJobOutputsSchema.and(
      z
        .any()
        .openapi({
          description:
            ' A section of the request body that provides information about the transcoded (target) files. We recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax. ',
        }),
    ).exactOptional(),
    OutputKeyPrefix: KeySchema.and(
      z
        .any()
        .openapi({
          description:
            'The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.',
        }),
    ).exactOptional(),
    Playlists: CreateJobPlaylistsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>',
        }),
    ).exactOptional(),
    UserMetadata: UserMetadataSchema.and(
      z
        .any()
        .openapi({
          description:
            'User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['PipelineId'],
    title: 'CreateJobRequest',
    description: 'The <code>CreateJobRequest</code> structure.',
  })
  .openapi('CreateJobRequest')

const CreatePipelineRequestSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters.</p>',
        }),
    ),
    InputBucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket in which you saved the media files that you want to transcode.',
        }),
    ),
    OutputBucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. (Use this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)</p> <p>Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files. </p> <important> <p>When Elastic Transcoder saves files in <code>OutputBucket</code>, it grants full control over the files only to the AWS account that owns the role that is specified by <code>Role</code>.</p> </important> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit <code>OutputBucket</code> and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead.</p>',
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to create the pipeline.',
        }),
    ),
    AwsKmsKeyArn: KeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>",
        }),
    ).exactOptional(),
    Notifications: NotificationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> <ul> <li> <p> <b>Progressing</b>: The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process a job in this pipeline. This is the ARN that Amazon SNS returned when you created the topic. For more information, see Create a Topic in the Amazon Simple Notification Service Developer Guide.</p> </li> <li> <p> <b>Complete</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing a job in this pipeline. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Warning</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition while processing a job in this pipeline. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Error</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition while processing a job in this pipeline. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ContentConfig: PipelineOutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional <code>ContentConfig</code> object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists: which bucket to use, which users you want to have access to the files, the type of access you want users to have, and the storage class that you want to assign to the files.</p> <p>If you specify values for <code>ContentConfig</code>, you must also specify values for <code>ThumbnailConfig</code>.</p> <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>, omit the <code>OutputBucket</code> object.</p> <ul> <li> <p> <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists.</p> </li> <li> <p> <b>Permissions</b> (Optional): The Permissions object specifies which users you want to have access to transcoded files and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> </li> <li> <p> <b>Grantee Type</b>: Specify the type of value that appears in the <code>Grantee</code> object: </p> <ul> <li> <p> <b>Canonical</b>: The value in the <code>Grantee</code> object is either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution. For more information about canonical user IDs, see Access Control List (ACL) Overview in the Amazon Simple Storage Service Developer Guide. For more information about using CloudFront origin access identities to require that users use CloudFront URLs instead of Amazon S3 URLs, see Using an Origin Access Identity to Restrict Access to Your Amazon S3 Content.</p> <important> <p>A canonical user ID is not the same as an AWS account number.</p> </important> </li> <li> <p> <b>Email</b>: The value in the <code>Grantee</code> object is the registered email address of an AWS account.</p> </li> <li> <p> <b>Group</b>: The value in the <code>Grantee</code> object is one of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul> </li> <li> <p> <b>Grantee</b>: The AWS user or group that you want to have access to transcoded files and playlists. To identify the user or group, you can specify the canonical user ID for an AWS account, an origin access identity for a CloudFront distribution, the registered email address of an AWS account, or a predefined Amazon S3 group </p> </li> <li> <p> <b>Access</b>: The permission that you want to give to the AWS user that you specified in <code>Grantee</code>. Permissions are granted on the files that Elastic Transcoder adds to the bucket, including playlists and video files. Valid values include: </p> <ul> <li> <p> <code>READ</code>: The grantee can read the objects and metadata for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has <code>READ</code>, <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> </ul> </li> <li> <p> <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ThumbnailConfig: PipelineOutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>ThumbnailConfig</code> object specifies several values, including the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files, which users you want to have access to the files, the type of access you want users to have, and the storage class that you want to assign to the files.</p> <p>If you specify values for <code>ContentConfig</code>, you must also specify values for <code>ThumbnailConfig</code> even if you don't want to create thumbnails.</p> <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>, omit the <code>OutputBucket</code> object.</p> <ul> <li> <p> <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files.</p> </li> <li> <p> <b>Permissions</b> (Optional): The <code>Permissions</code> object specifies which users and/or predefined Amazon S3 groups you want to have access to thumbnail files, and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> </li> <li> <p> <b>GranteeType</b>: Specify the type of value that appears in the Grantee object: </p> <ul> <li> <p> <b>Canonical</b>: The value in the <code>Grantee</code> object is either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution.</p> <important> <p>A canonical user ID is not the same as an AWS account number.</p> </important> </li> <li> <p> <b>Email</b>: The value in the <code>Grantee</code> object is the registered email address of an AWS account. </p> </li> <li> <p> <b>Group</b>: The value in the <code>Grantee</code> object is one of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul> </li> <li> <p> <b>Grantee</b>: The AWS user or group that you want to have access to thumbnail files. To identify the user or group, you can specify the canonical user ID for an AWS account, an origin access identity for a CloudFront distribution, the registered email address of an AWS account, or a predefined Amazon S3 group. </p> </li> <li> <p> <b>Access</b>: The permission that you want to give to the AWS user that you specified in <code>Grantee</code>. Permissions are granted on the thumbnail files that Elastic Transcoder adds to the bucket. Valid values include: </p> <ul> <li> <p> <code>READ</code>: The grantee can read the thumbnails and metadata for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has <code>READ</code>, <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> </ul> </li> <li> <p> <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the thumbnails that it stores in your Amazon S3 bucket.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'InputBucket', 'Role'],
    title: 'CreatePipelineRequest',
    description: 'The <code>CreatePipelineRequest</code> structure.',
  })
  .openapi('CreatePipelineRequest')

const CreatePresetRequestSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'A description of the preset.' }),
    ).exactOptional(),
    Container: PresetContainerSchema.and(
      z
        .any()
        .openapi({
          description:
            'The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.',
        }),
    ),
    Video: VideoParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'A section of the request body that specifies the video parameters.',
        }),
    ).exactOptional(),
    Audio: AudioParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'A section of the request body that specifies the audio parameters.',
        }),
    ).exactOptional(),
    Thumbnails: ThumbnailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'A section of the request body that specifies the thumbnail parameters, if any.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Name', 'Container'],
    title: 'CreatePresetRequest',
    description: 'The <code>CreatePresetRequest</code> structure.',
  })
  .openapi('CreatePresetRequest')

const DeletePipelineRequestSchema = z
  .object({})
  .openapi({
    title: 'DeletePipelineRequest',
    description: 'The <code>DeletePipelineRequest</code> structure.',
  })
  .openapi('DeletePipelineRequest')

const DeletePresetRequestSchema = z
  .object({})
  .openapi({
    title: 'DeletePresetRequest',
    description: 'The <code>DeletePresetRequest</code> structure.',
  })
  .openapi('DeletePresetRequest')

const ListJobsByPipelineRequestSchema = z
  .object({})
  .openapi({
    title: 'ListJobsByPipelineRequest',
    description: 'The <code>ListJobsByPipelineRequest</code> structure.',
  })
  .openapi('ListJobsByPipelineRequest')

const ListJobsByStatusRequestSchema = z
  .object({})
  .openapi({
    title: 'ListJobsByStatusRequest',
    description: 'The <code>ListJobsByStatusRequest</code> structure.',
  })
  .openapi('ListJobsByStatusRequest')

const ListPipelinesRequestSchema = z
  .object({})
  .openapi({
    title: 'ListPipelinesRequest',
    description: 'The <code>ListPipelineRequest</code> structure.',
  })
  .openapi('ListPipelinesRequest')

const ListPresetsRequestSchema = z
  .object({})
  .openapi({
    title: 'ListPresetsRequest',
    description: 'The <code>ListPresetsRequest</code> structure.',
  })
  .openapi('ListPresetsRequest')

const ReadJobRequestSchema = z
  .object({})
  .openapi({ title: 'ReadJobRequest', description: 'The <code>ReadJobRequest</code> structure.' })
  .openapi('ReadJobRequest')

const ReadPipelineRequestSchema = z
  .object({})
  .openapi({
    title: 'ReadPipelineRequest',
    description: 'The <code>ReadPipelineRequest</code> structure.',
  })
  .openapi('ReadPipelineRequest')

const ReadPresetRequestSchema = z
  .object({})
  .openapi({
    title: 'ReadPresetRequest',
    description: 'The <code>ReadPresetRequest</code> structure.',
  })
  .openapi('ReadPresetRequest')

const SnsTopicsSchema = z.array(SnsTopicSchema).max(30).openapi('SnsTopics')

const TestRoleRequestSchema = z
  .object({
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.',
        }),
    ),
    InputBucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.',
        }),
    ),
    OutputBucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.',
        }),
    ),
    Topics: SnsTopicsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.',
        }),
    ),
  })
  .openapi({
    required: ['Role', 'InputBucket', 'OutputBucket', 'Topics'],
    deprecated: true,
    title: 'TestRoleRequest',
    description: ' The <code>TestRoleRequest</code> structure. ',
  })
  .openapi('TestRoleRequest')

const UpdatePipelineNotificationsRequestSchema = z
  .object({
    Notifications: NotificationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> <ul> <li> <p> <b>Progressing</b>: The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process jobs that are added to this pipeline. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Complete</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing a job. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Warning</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Error</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Notifications'],
    title: 'UpdatePipelineNotificationsRequest',
    description: 'The <code>UpdatePipelineNotificationsRequest</code> structure.',
  })
  .openapi('UpdatePipelineNotificationsRequest')

const UpdatePipelineRequestSchema = z
  .object({
    Name: NameSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>',
        }),
    ).exactOptional(),
    InputBucket: BucketNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.',
        }),
    ).exactOptional(),
    Role: RoleSchema.and(
      z
        .any()
        .openapi({
          description:
            'The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.',
        }),
    ).exactOptional(),
    AwsKmsKeyArn: KeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>",
        }),
    ).exactOptional(),
    Notifications: NotificationsSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important> <ul> <li> <p> <b>Progressing</b>: The topic ARN for the Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process jobs that are added to this pipeline. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Complete</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing a job. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Warning</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> <li> <p> <b>Error</b>: The topic ARN for the Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition. This is the ARN that Amazon SNS returned when you created the topic.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ContentConfig: PipelineOutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The optional <code>ContentConfig</code> object specifies information about the Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists: which bucket to use, which users you want to have access to the files, the type of access you want users to have, and the storage class that you want to assign to the files.</p> <p>If you specify values for <code>ContentConfig</code>, you must also specify values for <code>ThumbnailConfig</code>.</p> <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>, omit the <code>OutputBucket</code> object.</p> <ul> <li> <p> <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save transcoded files and playlists.</p> </li> <li> <p> <b>Permissions</b> (Optional): The Permissions object specifies which users you want to have access to transcoded files and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> </li> <li> <p> <b>Grantee Type</b>: Specify the type of value that appears in the <code>Grantee</code> object:</p> <ul> <li> <p> <b>Canonical</b>: The value in the <code>Grantee</code> object is either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution. For more information about canonical user IDs, see Access Control List (ACL) Overview in the Amazon Simple Storage Service Developer Guide. For more information about using CloudFront origin access identities to require that users use CloudFront URLs instead of Amazon S3 URLs, see Using an Origin Access Identity to Restrict Access to Your Amazon S3 Content.</p> <important> <p>A canonical user ID is not the same as an AWS account number.</p> </important> </li> <li> <p> <b>Email</b>: The value in the <code>Grantee</code> object is the registered email address of an AWS account.</p> </li> <li> <p> <b>Group</b>: The value in the <code>Grantee</code> object is one of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul> </li> <li> <p> <b>Grantee</b>: The AWS user or group that you want to have access to transcoded files and playlists. To identify the user or group, you can specify the canonical user ID for an AWS account, an origin access identity for a CloudFront distribution, the registered email address of an AWS account, or a predefined Amazon S3 group </p> </li> <li> <p> <b>Access</b>: The permission that you want to give to the AWS user that you specified in <code>Grantee</code>. Permissions are granted on the files that Elastic Transcoder adds to the bucket, including playlists and video files. Valid values include: </p> <ul> <li> <p> <code>READ</code>: The grantee can read the objects and metadata for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for objects that Elastic Transcoder adds to the Amazon S3 bucket. </p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has <code>READ</code>, <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> </ul> </li> <li> <p> <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket.</p> </li> </ul>',
        }),
    ).exactOptional(),
    ThumbnailConfig: PipelineOutputConfigSchema.and(
      z
        .any()
        .openapi({
          description:
            "<p>The <code>ThumbnailConfig</code> object specifies several values, including the Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files, which users you want to have access to the files, the type of access you want users to have, and the storage class that you want to assign to the files.</p> <p>If you specify values for <code>ContentConfig</code>, you must also specify values for <code>ThumbnailConfig</code> even if you don't want to create thumbnails.</p> <p>If you specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code>, omit the <code>OutputBucket</code> object.</p> <ul> <li> <p> <b>Bucket</b>: The Amazon S3 bucket in which you want Elastic Transcoder to save thumbnail files.</p> </li> <li> <p> <b>Permissions</b> (Optional): The <code>Permissions</code> object specifies which users and/or predefined Amazon S3 groups you want to have access to thumbnail files, and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> </li> <li> <p> <b>GranteeType</b>: Specify the type of value that appears in the Grantee object:</p> <ul> <li> <p> <b>Canonical</b>: The value in the <code>Grantee</code> object is either the canonical user ID for an AWS account or an origin access identity for an Amazon CloudFront distribution.</p> <important> <p>A canonical user ID is not the same as an AWS account number.</p> </important> </li> <li> <p> <b>Email</b>: The value in the <code>Grantee</code> object is the registered email address of an AWS account.</p> </li> <li> <p> <b>Group</b>: The value in the <code>Grantee</code> object is one of the following predefined Amazon S3 groups: <code>AllUsers</code>, <code>AuthenticatedUsers</code>, or <code>LogDelivery</code>.</p> </li> </ul> </li> <li> <p> <b>Grantee</b>: The AWS user or group that you want to have access to thumbnail files. To identify the user or group, you can specify the canonical user ID for an AWS account, an origin access identity for a CloudFront distribution, the registered email address of an AWS account, or a predefined Amazon S3 group. </p> </li> <li> <p> <b>Access</b>: The permission that you want to give to the AWS user that you specified in <code>Grantee</code>. Permissions are granted on the thumbnail files that Elastic Transcoder adds to the bucket. Valid values include: </p> <ul> <li> <p> <code>READ</code>: The grantee can read the thumbnails and metadata for objects that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>READ_ACP</code>: The grantee can read the object ACL for thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>WRITE_ACP</code>: The grantee can write the ACL for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket.</p> </li> <li> <p> <code>FULL_CONTROL</code>: The grantee has <code>READ</code>, <code>READ_ACP</code>, and <code>WRITE_ACP</code> permissions for the thumbnails that Elastic Transcoder adds to the Amazon S3 bucket. </p> </li> </ul> </li> <li> <p> <b>StorageClass</b>: The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the thumbnails that it stores in your Amazon S3 bucket.</p> </li> </ul>",
        }),
    ).exactOptional(),
  })
  .openapi({
    title: 'UpdatePipelineRequest',
    description: 'The <code>UpdatePipelineRequest</code> structure.',
    required: [],
  })
  .openapi('UpdatePipelineRequest')

const UpdatePipelineStatusRequestSchema = z
  .object({
    Status: PipelineStatusSchema.and(
      z
        .any()
        .openapi({
          description:
            '<p>The desired status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>',
        }),
    ),
  })
  .openapi({
    required: ['Status'],
    title: 'UpdatePipelineStatusRequest',
    description: 'The <code>UpdatePipelineStatusRequest</code> structure.',
  })
  .openapi('UpdatePipelineStatusRequest')

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

export const get20120925JobsIdRoute = createRoute({
  method: 'get',
  path: '/2012-09-25/jobs/{Id}',
  description: 'The ReadJob operation returns detailed information about a job.',
  operationId: 'ReadJob',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the job for which you want to get detailed information.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReadJobResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const delete20120925JobsIdRoute = createRoute({
  method: 'delete',
  path: '/2012-09-25/jobs/{Id}',
  description:
    "<p>The CancelJob operation cancels an unfinished job.</p> <note> <p>You can only cancel a job that has a status of <code>Submitted</code>. To prevent a pipeline from starting to process a job while you're getting the job identifier, use <a>UpdatePipelineStatus</a> to temporarily pause the pipeline.</p> </note>",
  operationId: 'CancelJob',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              '<p>The identifier of the job that you want to cancel.</p> <p>To get a list of the jobs (including their <code>jobId</code>) that have a status of <code>Submitted</code>, use the <a>ListJobsByStatus</a> API action.</p>',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: CancelJobResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const post20120925JobsRoute = createRoute({
  method: 'post',
  path: '/2012-09-25/jobs',
  description:
    '<p>When you create a job, Elastic Transcoder returns JSON data that includes the values that you specified plus information about the job that is created.</p> <p>If you have specified more than one output for your jobs (for example, one output for the Kindle Fire and another output for the Apple iPhone 4s), you currently must use the Elastic Transcoder API to list the jobs (as opposed to the AWS Console).</p>',
  operationId: 'CreateJob',
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
              PipelineId: z
                .string()
                .regex(/^\d{13}-\w{6}$/)
                .openapi({
                  description:
                    'The <code>Id</code> of the pipeline that you want Elastic Transcoder to use for transcoding. The pipeline determines several settings, including the Amazon S3 bucket from which Elastic Transcoder gets the files to transcode and the bucket into which Elastic Transcoder puts the transcoded files.',
                }),
              Input: z
                .object({
                  Key: LongKeySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p> The name of the file to transcode. Elsewhere in the body of the JSON block is the the ID of the pipeline to use for processing the job. The <code>InputBucket</code> object in that pipeline tells Elastic Transcoder which Amazon S3 bucket to get the file from. </p> <p>If the file name includes a prefix, such as <code>cooking/lasagna.mpg</code>, include the prefix in the key. If the file isn't in the specified bucket, Elastic Transcoder returns an error.</p>",
                      }),
                  ).exactOptional(),
                  FrameRate: FrameRateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The frame rate of the input file. If you want Elastic Transcoder to automatically detect the frame rate of the input file, specify <code>auto</code>. If you want to specify the frame rate for the input file, enter one of the following values: </p> <p> <code>10</code>, <code>15</code>, <code>23.97</code>, <code>24</code>, <code>25</code>, <code>29.97</code>, <code>30</code>, <code>60</code> </p> <p>If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection of the frame rate.</p>',
                      }),
                  ).exactOptional(),
                  Resolution: ResolutionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'This value must be <code>auto</code>, which causes Elastic Transcoder to automatically detect the resolution of the input file.',
                      }),
                  ).exactOptional(),
                  AspectRatio: AspectRatioSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> The aspect ratio of the input file. If you want Elastic Transcoder to automatically detect the aspect ratio of the input file, specify <code>auto</code>. If you want to specify the aspect ratio for the output file, enter one of the following values: </p> <p> <code>1:1</code>, <code>4:3</code>, <code>3:2</code>, <code>16:9</code> </p> <p> If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection of the aspect ratio. </p>',
                      }),
                  ).exactOptional(),
                  Interlaced: InterlacedSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Whether the input file is interlaced. If you want Elastic Transcoder to automatically detect whether the input file is interlaced, specify <code>auto</code>. If you want to specify whether the input file is interlaced, enter one of the following values:</p> <p> <code>true</code>, <code>false</code> </p> <p>If you specify a value other than <code>auto</code>, Elastic Transcoder disables automatic detection of interlacing.</p>',
                      }),
                  ).exactOptional(),
                  Container: JobContainerSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The container type for the input file. If you want Elastic Transcoder to automatically detect the container type of the input file, specify <code>auto</code>. If you want to specify the container type for the input file, enter one of the following values: </p> <p> <code>3gp</code>, <code>aac</code>, <code>asf</code>, <code>avi</code>, <code>divx</code>, <code>flv</code>, <code>m4a</code>, <code>mkv</code>, <code>mov</code>, <code>mp3</code>, <code>mp4</code>, <code>mpeg</code>, <code>mpeg-ps</code>, <code>mpeg-ts</code>, <code>mxf</code>, <code>ogg</code>, <code>vob</code>, <code>wav</code>, <code>webm</code> </p>',
                      }),
                  ).exactOptional(),
                  Encryption: EncryptionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The encryption settings, if any, that are used for decrypting your input files. If your input file is encrypted, you must specify the mode that Elastic Transcoder uses to decrypt your file.',
                      }),
                  ).exactOptional(),
                  TimeSpan: TimeSpanSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Settings for clipping an input. Each input can have different clip settings.',
                      }),
                  ).exactOptional(),
                  InputCaptions: InputCaptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>You can configure Elastic Transcoder to transcode captions, or subtitles, from one format to another. All captions must be in UTF-8. Elastic Transcoder supports two types of captions:</p> <ul> <li> <p> <b>Embedded:</b> Embedded captions are included in the same file as the audio and video. Elastic Transcoder supports only one embedded caption per language, to a maximum of 300 embedded captions per file.</p> <p>Valid input values include: <code>CEA-608 (EIA-608</code>, first non-empty channel only), <code>CEA-708 (EIA-708</code>, first non-empty channel only), and <code>mov-text</code> </p> <p>Valid outputs include: <code>mov-text</code> </p> <p>Elastic Transcoder supports a maximum of one embedded format per output.</p> </li> <li> <p> <b>Sidecar:</b> Sidecar captions are kept in a separate metadata file from the audio and video data. Sidecar captions require a player that is capable of understanding the relationship between the video file and the sidecar file. Elastic Transcoder supports only one sidecar caption per language, to a maximum of 20 sidecar captions per file.</p> <p>Valid input values include: <code>dfxp</code> (first div element only), <code>ebu-tt</code>, <code>scc</code>, <code>smpt</code>, <code>srt</code>, <code>ttml</code> (first div element only), and <code>webvtt</code> </p> <p>Valid outputs include: <code>dfxp</code> (first div element only), <code>scc</code>, <code>srt</code>, and <code>webvtt</code>.</p> </li> </ul> <p>If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p> <p>Elastic Transcoder does not support OCR (Optical Character Recognition), does not accept pictures as a valid input for captions, and is not available for audio-only transcoding. Elastic Transcoder does not preserve text formatting (for example, italics) during the transcoding process.</p> <p>To remove captions or leave the captions empty, set <code>Captions</code> to null. To pass through existing captions unchanged, set the <code>MergePolicy</code> to <code>MergeRetain</code>, and pass in a null <code>CaptionSources</code> array.</p> <p>For more information on embedded files, see the Subtitles Wikipedia page.</p> <p>For more information on sidecar files, see the Extensible Metadata Platform and Sidecar file Wikipedia pages.</p>',
                      }),
                  ).exactOptional(),
                  DetectedProperties: DetectedPropertiesSchema.and(
                    z.any().openapi({ description: 'The detected properties of the input file.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: "Information about the file that you're transcoding.",
                  required: [],
                }),
              Inputs: z
                .array(JobInputSchema)
                .max(200)
                .exactOptional()
                .openapi({
                  description:
                    'A section of the request body that provides information about the files that are being transcoded.',
                }),
              Output: z
                .object({
                  Key: KeySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The name to assign to the transcoded file. Elastic Transcoder saves the file in the Amazon S3 bucket specified by the <code>OutputBucket</code> object in the pipeline that is specified by the pipeline ID. If a file with the specified name already exists in the output bucket, the job fails. ',
                      }),
                  ).exactOptional(),
                  ThumbnailPattern: ThumbnailPatternSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Whether you want Elastic Transcoder to create thumbnails for your videos and, if so, how you want Elastic Transcoder to name the files.</p> <p>If you don\'t want Elastic Transcoder to create thumbnails, specify "".</p> <p>If you do want Elastic Transcoder to create thumbnails, specify the information that you want to include in the file name for each thumbnail. You can specify the following values in any sequence:</p> <ul> <li> <p> <b> <code>{count}</code> (Required)</b>: If you want to create thumbnails, you must include <code>{count}</code> in the <code>ThumbnailPattern</code> object. Wherever you specify <code>{count}</code>, Elastic Transcoder adds a five-digit sequence number (beginning with <b>00001</b>) to thumbnail file names. The number indicates where a given thumbnail appears in the sequence of thumbnails for a transcoded file. </p> <important> <p>If you specify a literal value and/or <code>{resolution}</code> but you omit <code>{count}</code>, Elastic Transcoder returns a validation error and does not create the job.</p> </important> </li> <li> <p> <b>Literal values (Optional)</b>: You can specify literal values anywhere in the <code>ThumbnailPattern</code> object. For example, you can include them as a file name prefix or as a delimiter between <code>{resolution}</code> and <code>{count}</code>. </p> </li> <li> <p> <b> <code>{resolution}</code> (Optional)</b>: If you want Elastic Transcoder to include the resolution in the file name, include <code>{resolution}</code> in the <code>ThumbnailPattern</code> object. </p> </li> </ul> <p>When creating thumbnails, Elastic Transcoder automatically saves the files in the format (.jpg or .png) that appears in the preset that you specified in the <code>PresetID</code> value of <code>CreateJobOutput</code>. Elastic Transcoder also appends the applicable file name extension.</p>',
                      }),
                  ).exactOptional(),
                  ThumbnailEncryption: EncryptionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The encryption settings, if any, that you want Elastic Transcoder to apply to your thumbnail.',
                      }),
                  ).exactOptional(),
                  Rotate: RotateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          " The number of degrees clockwise by which you want Elastic Transcoder to rotate the output relative to the input. Enter one of the following values: <code>auto</code>, <code>0</code>, <code>90</code>, <code>180</code>, <code>270</code>. The value <code>auto</code> generally works only if the file that you're transcoding contains rotation metadata. ",
                      }),
                  ).exactOptional(),
                  PresetId: IdSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The <code>Id</code> of the preset to use for this job. The preset determines the audio, video, and thumbnail settings that Elastic Transcoder uses for transcoding. ',
                      }),
                  ).exactOptional(),
                  SegmentDuration: FloatStringSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<important> <p>(Outputs in Fragmented MP4 or MPEG-TS format only.</p> </important> <p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is <code>fmp4</code> (Fragmented MP4) or <code>ts</code> (MPEG-TS), <code>SegmentDuration</code> is the target maximum duration of each segment in seconds. For <code>HLSv3</code> format playlists, each media segment is stored in a separate <code>.ts</code> file. For <code>HLSv4</code> and <code>Smooth</code> playlists, all media segments for an output are stored in a single file. Each segment is approximately the length of the <code>SegmentDuration</code>, though individual segments might be shorter or longer.</p> <p>The range of valid values is 1 to 60 seconds. If the duration of the video is not evenly divisible by <code>SegmentDuration</code>, the duration of the last segment is the remainder of total length/SegmentDuration.</p> <p>Elastic Transcoder creates an output-specific playlist for each output <code>HLS</code> output that you specify in OutputKeys. To add an output to the master playlist for this job, include it in the <code>OutputKeys</code> of the associated playlist.</p>',
                      }),
                  ).exactOptional(),
                  Watermarks: JobWatermarksSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about the watermarks that you want Elastic Transcoder to add to the video during transcoding. You can specify up to four watermarks for each output. Settings for each watermark must be defined in the preset for the current output.',
                      }),
                  ).exactOptional(),
                  AlbumArt: JobAlbumArtSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'Information about the album art that you want Elastic Transcoder to add to the file during transcoding. You can specify up to twenty album artworks for each output. Settings for each artwork must be defined in the job for the current output.',
                      }),
                  ).exactOptional(),
                  Composition: CompositionSchema.and(
                    z
                      .any()
                      .openapi({
                        deprecated: true,
                        description:
                          'You can create an output file that contains an excerpt from the input file. This excerpt, called a clip, can come from the beginning, middle, or end of the file. The Composition object contains settings for the clips that make up an output file. For the current release, you can only specify settings for a single clip per output file. The Composition object cannot be null.',
                      }),
                  ).exactOptional(),
                  Captions: CaptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>You can configure Elastic Transcoder to transcode captions, or subtitles, from one format to another. All captions must be in UTF-8. Elastic Transcoder supports two types of captions:</p> <ul> <li> <p> <b>Embedded:</b> Embedded captions are included in the same file as the audio and video. Elastic Transcoder supports only one embedded caption per language, to a maximum of 300 embedded captions per file.</p> <p>Valid input values include: <code>CEA-608 (EIA-608</code>, first non-empty channel only), <code>CEA-708 (EIA-708</code>, first non-empty channel only), and <code>mov-text</code> </p> <p>Valid outputs include: <code>mov-text</code> </p> <p>Elastic Transcoder supports a maximum of one embedded format per output.</p> </li> <li> <p> <b>Sidecar:</b> Sidecar captions are kept in a separate metadata file from the audio and video data. Sidecar captions require a player that is capable of understanding the relationship between the video file and the sidecar file. Elastic Transcoder supports only one sidecar caption per language, to a maximum of 20 sidecar captions per file.</p> <p>Valid input values include: <code>dfxp</code> (first div element only), <code>ebu-tt</code>, <code>scc</code>, <code>smpt</code>, <code>srt</code>, <code>ttml</code> (first div element only), and <code>webvtt</code> </p> <p>Valid outputs include: <code>dfxp</code> (first div element only), <code>scc</code>, <code>srt</code>, and <code>webvtt</code>.</p> </li> </ul> <p>If you want ttml or smpte-tt compatible captions, specify dfxp as your output format.</p> <p>Elastic Transcoder does not support OCR (Optical Character Recognition), does not accept pictures as a valid input for captions, and is not available for audio-only transcoding. Elastic Transcoder does not preserve text formatting (for example, italics) during the transcoding process.</p> <p>To remove captions or leave the captions empty, set <code>Captions</code> to null. To pass through existing captions unchanged, set the <code>MergePolicy</code> to <code>MergeRetain</code>, and pass in a null <code>CaptionSources</code> array.</p> <p>For more information on embedded files, see the Subtitles Wikipedia page.</p> <p>For more information on sidecar files, see the Extensible Metadata Platform and Sidecar file Wikipedia pages.</p>',
                      }),
                  ).exactOptional(),
                  Encryption: EncryptionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'You can specify encryption settings for any output files that you want to use for a transcoding job. This includes the output file and any watermarks, thumbnails, album art, or captions that you want to use. You must specify encryption settings for each file individually.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The <code>CreateJobOutput</code> structure.',
                  required: [],
                }),
              Outputs: z
                .array(CreateJobOutputSchema)
                .max(30)
                .exactOptional()
                .openapi({
                  description:
                    ' A section of the request body that provides information about the transcoded (target) files. We recommend that you use the <code>Outputs</code> syntax instead of the <code>Output</code> syntax. ',
                }),
              OutputKeyPrefix: z
                .string()
                .min(1)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    'The value, if any, that you want Elastic Transcoder to prepend to the names of all files that this job creates, including output files, thumbnails, and playlists.',
                }),
              Playlists: z
                .array(CreateJobPlaylistSchema)
                .max(30)
                .exactOptional()
                .openapi({
                  description:
                    '<p>If you specify a preset in <code>PresetId</code> for which the value of <code>Container</code> is fmp4 (Fragmented MP4) or ts (MPEG-TS), Playlists contains information about the master playlists that you want Elastic Transcoder to create.</p> <p>The maximum number of master playlists in a job is 30.</p>',
                }),
              UserMetadata: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'User-defined metadata that you want to associate with an Elastic Transcoder job. You specify metadata in <code>key/value</code> pairs, and you can add up to 10 <code>key/value</code> pairs per job. Elastic Transcoder does not guarantee that <code>key/value</code> pairs are returned in the same order in which you specify them.',
                }),
            })
            .openapi({ required: ['PipelineId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateJobResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const get20120925PipelinesRoute = createRoute({
  method: 'get',
  path: '/2012-09-25/pipelines',
  description:
    'The ListPipelines operation gets a list of the pipelines associated with the current AWS account.',
  operationId: 'ListPipelines',
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
      Ascending: z
        .string()
        .regex(/(^true$)|(^false$)/)
        .exactOptional()
        .openapi({
          param: {
            name: 'Ascending',
            in: 'query',
            required: false,
            description:
              'To list pipelines in chronological order by the date and time that they were created, enter <code>true</code>. To list pipelines in reverse chronological order, enter <code>false</code>.',
            schema: { type: 'string', pattern: '(^true$)|(^false$)' },
          },
        }),
      PageToken: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            required: false,
            description:
              'When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. ',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPipelinesResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const post20120925PipelinesRoute = createRoute({
  method: 'post',
  path: '/2012-09-25/pipelines',
  description: 'The CreatePipeline operation creates a pipeline with settings that you specify.',
  operationId: 'CreatePipeline',
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
              Name: z
                .string()
                .min(1)
                .max(40)
                .openapi({
                  description:
                    '<p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters.</p>',
                }),
              InputBucket: z
                .string()
                .regex(/^(\w|\.|-){1,255}$/)
                .openapi({
                  description:
                    'The Amazon S3 bucket in which you saved the media files that you want to transcode.',
                }),
              OutputBucket: z
                .string()
                .regex(/^(\w|\.|-){1,255}$/)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. (Use this, or use ContentConfig:Bucket plus ThumbnailConfig:Bucket.)</p> <p>Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files. </p> <important> <p>When Elastic Transcoder saves files in <code>OutputBucket</code>, it grants full control over the files only to the AWS account that owns the role that is specified by <code>Role</code>.</p> </important> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit <code>OutputBucket</code> and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead.</p>',
                }),
              Role: z
                .string()
                .regex(/^arn:aws:iam::\w{12}:role\/.+$/)
                .openapi({
                  description:
                    'The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to create the pipeline.',
                }),
              AwsKmsKeyArn: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>",
                }),
              Notifications: z
                .object({
                  Progressing: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process the job.',
                      }),
                  ).exactOptional(),
                  Completed: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing the job.',
                      }),
                  ).exactOptional(),
                  Warning: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition.',
                      }),
                  ).exactOptional(),
                  Error: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>',
                  required: [],
                }),
              ContentConfig: z
                .object({
                  Bucket: BucketNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files.</p> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit OutputBucket and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead. </p>',
                      }),
                  ).exactOptional(),
                  StorageClass: StorageClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket. ',
                      }),
                  ).exactOptional(),
                  Permissions: PermissionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Optional. The <code>Permissions</code> object specifies which users and/or predefined Amazon S3 groups you want to have access to transcoded files and playlists, and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> <p>If you include <code>Permissions</code>, Elastic Transcoder grants only the permissions that you specify. It does not grant full permissions to the owner of the role specified by <code>Role</code>. If you want that user to have full control, you must explicitly grant full control to the user.</p> <p> If you omit <code>Permissions</code>, Elastic Transcoder grants full control over the transcoded files and playlists to the owner of the role specified by <code>Role</code>, and grants no other permissions to any other user or group.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The <code>PipelineOutputConfig</code> structure.',
                  required: [],
                }),
              ThumbnailConfig: z
                .object({
                  Bucket: BucketNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files.</p> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit OutputBucket and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead. </p>',
                      }),
                  ).exactOptional(),
                  StorageClass: StorageClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket. ',
                      }),
                  ).exactOptional(),
                  Permissions: PermissionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Optional. The <code>Permissions</code> object specifies which users and/or predefined Amazon S3 groups you want to have access to transcoded files and playlists, and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> <p>If you include <code>Permissions</code>, Elastic Transcoder grants only the permissions that you specify. It does not grant full permissions to the owner of the role specified by <code>Role</code>. If you want that user to have full control, you must explicitly grant full control to the user.</p> <p> If you omit <code>Permissions</code>, Elastic Transcoder grants full control over the transcoded files and playlists to the owner of the role specified by <code>Role</code>, and grants no other permissions to any other user or group.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The <code>PipelineOutputConfig</code> structure.',
                  required: [],
                }),
            })
            .openapi({ required: ['Name', 'InputBucket', 'Role'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePipelineResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    484: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    485: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const get20120925PresetsRoute = createRoute({
  method: 'get',
  path: '/2012-09-25/presets',
  description:
    "The ListPresets operation gets a list of the default presets included with Elastic Transcoder and the presets that you've added in an AWS region.",
  operationId: 'ListPresets',
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
      Ascending: z
        .string()
        .regex(/(^true$)|(^false$)/)
        .exactOptional()
        .openapi({
          param: {
            name: 'Ascending',
            in: 'query',
            required: false,
            description:
              'To list presets in chronological order by the date and time that they were created, enter <code>true</code>. To list presets in reverse chronological order, enter <code>false</code>.',
            schema: { type: 'string', pattern: '(^true$)|(^false$)' },
          },
        }),
      PageToken: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            required: false,
            description:
              'When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. ',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListPresetsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const post20120925PresetsRoute = createRoute({
  method: 'post',
  path: '/2012-09-25/presets',
  description:
    "<p>The CreatePreset operation creates a preset with settings that you specify.</p> <important> <p>Elastic Transcoder checks the CreatePreset settings to ensure that they meet Elastic Transcoder requirements and to determine whether they comply with H.264 standards. If your settings are not valid for Elastic Transcoder, Elastic Transcoder returns an HTTP 400 response (<code>ValidationException</code>) and does not create the preset. If the settings are valid for Elastic Transcoder but aren't strictly compliant with the H.264 standard, Elastic Transcoder creates the preset and returns a warning message in the response. This helps you determine whether your settings comply with the H.264 standard while giving you greater flexibility with respect to the video that Elastic Transcoder produces.</p> </important> <p>Elastic Transcoder uses the H.264 video-compression format. For more information, see the International Telecommunication Union publication <i>Recommendation ITU-T H.264: Advanced video coding for generic audiovisual services</i>.</p>",
  operationId: 'CreatePreset',
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
              Name: z
                .string()
                .min(1)
                .max(40)
                .openapi({
                  description:
                    'The name of the preset. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.',
                }),
              Description: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({ description: 'A description of the preset.' }),
              Container: z
                .string()
                .regex(
                  /(^mp4$)|(^ts$)|(^webm$)|(^mp3$)|(^flac$)|(^oga$)|(^ogg$)|(^fmp4$)|(^mpg$)|(^flv$)|(^gif$)|(^mxf$)|(^wav$)|(^mp2$)/,
                )
                .openapi({
                  description:
                    'The container type for the output file. Valid values include <code>flac</code>, <code>flv</code>, <code>fmp4</code>, <code>gif</code>, <code>mp3</code>, <code>mp4</code>, <code>mpg</code>, <code>mxf</code>, <code>oga</code>, <code>ogg</code>, <code>ts</code>, and <code>webm</code>.',
                }),
              Video: z
                .object({
                  Codec: VideoCodecSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The video codec for the output file. Valid values include <code>gif</code>, <code>H.264</code>, <code>mpeg2</code>, <code>vp8</code>, and <code>vp9</code>. You can only specify <code>vp8</code> and <code>vp9</code> when the container type is <code>webm</code>, <code>gif</code> when the container type is <code>gif</code>, and <code>mpeg2</code> when the container type is <code>mpg</code>.',
                      }),
                  ).exactOptional(),
                  CodecOptions: CodecOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          "<p> <b>Profile (H.264/VP8/VP9 Only)</b> </p> <p>The H.264 profile that you want to use for the output file. Elastic Transcoder supports the following profiles:</p> <ul> <li> <p> <code>baseline</code>: The profile most commonly used for videoconferencing and for mobile applications.</p> </li> <li> <p> <code>main</code>: The profile used for standard-definition digital TV broadcasts.</p> </li> <li> <p> <code>high</code>: The profile used for high-definition digital TV broadcasts and for Blu-ray discs.</p> </li> </ul> <p> <b>Level (H.264 Only)</b> </p> <p>The H.264 level that you want to use for the output file. Elastic Transcoder supports the following levels:</p> <p> <code>1</code>, <code>1b</code>, <code>1.1</code>, <code>1.2</code>, <code>1.3</code>, <code>2</code>, <code>2.1</code>, <code>2.2</code>, <code>3</code>, <code>3.1</code>, <code>3.2</code>, <code>4</code>, <code>4.1</code> </p> <p> <b>MaxReferenceFrames (H.264 Only)</b> </p> <p>Applicable only when the value of Video:Codec is H.264. The maximum number of previously decoded frames to use as a reference for decoding future frames. Valid values are integers 0 through 16, but we recommend that you not use a value greater than the following:</p> <p> <code>Min(Floor(Maximum decoded picture buffer in macroblocks * 256 / (Width in pixels * Height in pixels)), 16)</code> </p> <p>where <i>Width in pixels</i> and <i>Height in pixels</i> represent either MaxWidth and MaxHeight, or Resolution. <i>Maximum decoded picture buffer in macroblocks</i> depends on the value of the <code>Level</code> object. See the list below. (A macroblock is a block of pixels measuring 16x16.) </p> <ul> <li> <p>1 - 396</p> </li> <li> <p>1b - 396</p> </li> <li> <p>1.1 - 900</p> </li> <li> <p>1.2 - 2376</p> </li> <li> <p>1.3 - 2376</p> </li> <li> <p>2 - 2376</p> </li> <li> <p>2.1 - 4752</p> </li> <li> <p>2.2 - 8100</p> </li> <li> <p>3 - 8100</p> </li> <li> <p>3.1 - 18000</p> </li> <li> <p>3.2 - 20480</p> </li> <li> <p>4 - 32768</p> </li> <li> <p>4.1 - 32768</p> </li> </ul> <p> <b>MaxBitRate (Optional, H.264/MPEG2/VP8/VP9 only)</b> </p> <p>The maximum number of bits per second in a video buffer; the size of the buffer is specified by <code>BufferSize</code>. Specify a value between 16 and 62,500. You can reduce the bandwidth required to stream a video by reducing the maximum bit rate, but this also reduces the quality of the video.</p> <p> <b>BufferSize (Optional, H.264/MPEG2/VP8/VP9 only)</b> </p> <p>The maximum number of bits in any x seconds of the output video. This window is commonly 10 seconds, the standard segment duration when you're using FMP4 or MPEG-TS for the container type of the output video. Specify an integer greater than 0. If you specify <code>MaxBitRate</code> and omit <code>BufferSize</code>, Elastic Transcoder sets <code>BufferSize</code> to 10 times the value of <code>MaxBitRate</code>.</p> <p> <b>InterlacedMode (Optional, H.264/MPEG2 Only)</b> </p> <p>The interlace mode for the output video.</p> <p>Interlaced video is used to double the perceived frame rate for a video by interlacing two fields (one field on every other line, the other field on the other lines) so that the human eye registers multiple pictures per frame. Interlacing reduces the bandwidth required for transmitting a video, but can result in blurred images and flickering.</p> <p>Valid values include <code>Progressive</code> (no interlacing, top to bottom), <code>TopFirst</code> (top field first), <code>BottomFirst</code> (bottom field first), and <code>Auto</code>.</p> <p>If <code>InterlaceMode</code> is not specified, Elastic Transcoder uses <code>Progressive</code> for the output. If <code>Auto</code> is specified, Elastic Transcoder interlaces the output.</p> <p> <b>ColorSpaceConversionMode (Optional, H.264/MPEG2 Only)</b> </p> <p>The color space conversion Elastic Transcoder applies to the output video. Color spaces are the algorithms used by the computer to store information about how to render color. <code>Bt.601</code> is the standard for standard definition video, while <code>Bt.709</code> is the standard for high definition video.</p> <p>Valid values include <code>None</code>, <code>Bt709toBt601</code>, <code>Bt601toBt709</code>, and <code>Auto</code>.</p> <p>If you chose <code>Auto</code> for <code>ColorSpaceConversionMode</code> and your output is interlaced, your frame rate is one of <code>23.97</code>, <code>24</code>, <code>25</code>, <code>29.97</code>, <code>50</code>, or <code>60</code>, your <code>SegmentDuration</code> is null, and you are using one of the resolution changes from the list below, Elastic Transcoder applies the following color space conversions:</p> <ul> <li> <p> <i>Standard to HD, 720x480 to 1920x1080</i> - Elastic Transcoder applies <code>Bt601ToBt709</code> </p> </li> <li> <p> <i>Standard to HD, 720x576 to 1920x1080</i> - Elastic Transcoder applies <code>Bt601ToBt709</code> </p> </li> <li> <p> <i>HD to Standard, 1920x1080 to 720x480</i> - Elastic Transcoder applies <code>Bt709ToBt601</code> </p> </li> <li> <p> <i>HD to Standard, 1920x1080 to 720x576</i> - Elastic Transcoder applies <code>Bt709ToBt601</code> </p> </li> </ul> <note> <p>Elastic Transcoder may change the behavior of the <code>ColorspaceConversionMode</code> <code>Auto</code> mode in the future. All outputs in a playlist must use the same <code>ColorSpaceConversionMode</code>.</p> </note> <p>If you do not specify a <code>ColorSpaceConversionMode</code>, Elastic Transcoder does not change the color space of a file. If you are unsure what <code>ColorSpaceConversionMode</code> was applied to your output file, you can check the <code>AppliedColorSpaceConversion</code> parameter included in your job response. If your job does not have an <code>AppliedColorSpaceConversion</code> in its response, no <code>ColorSpaceConversionMode</code> was applied.</p> <p> <b>ChromaSubsampling</b> </p> <p>The sampling pattern for the chroma (color) channels of the output video. Valid values include <code>yuv420p</code> and <code>yuv422p</code>.</p> <p> <code>yuv420p</code> samples the chroma information of every other horizontal and every other vertical line, <code>yuv422p</code> samples the color information of every horizontal line and every other vertical line.</p> <p> <b>LoopCount (Gif Only)</b> </p> <p>The number of times you want the output gif to loop. Valid values include <code>Infinite</code> and integers between <code>0</code> and <code>100</code>, inclusive.</p>",
                      }),
                  ).exactOptional(),
                  KeyframesMaxDist: KeyframesMaxDistSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Applicable only when the value of Video:Codec is one of <code>H.264</code>, <code>MPEG2</code>, or <code>VP8</code>.</p> <p>The maximum number of frames between key frames. Key frames are fully encoded frames; the frames between key frames are encoded based, in part, on the content of the key frames. The value is an integer formatted as a string; valid values are between 1 (every frame is a key frame) and 100000, inclusive. A higher value results in higher compression but may also discernibly decrease video quality.</p> <p>For <code>Smooth</code> outputs, the <code>FrameRate</code> must have a constant ratio to the <code>KeyframesMaxDist</code>. This allows <code>Smooth</code> playlists to switch between different quality levels while the file is being played.</p> <p>For example, an input file can have a <code>FrameRate</code> of 30 with a <code>KeyframesMaxDist</code> of 90. The output file then needs to have a ratio of 1:3. Valid outputs would have <code>FrameRate</code> of 30, 25, and 10, and <code>KeyframesMaxDist</code> of 90, 75, and 30, respectively.</p> <p>Alternately, this can be achieved by setting <code>FrameRate</code> to auto and having the same values for <code>MaxFrameRate</code> and <code>KeyframesMaxDist</code>.</p>',
                      }),
                  ).exactOptional(),
                  FixedGOP: FixedGOPSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Applicable only when the value of Video:Codec is one of <code>H.264</code>, <code>MPEG2</code>, or <code>VP8</code>.</p> <p>Whether to use a fixed value for <code>FixedGOP</code>. Valid values are <code>true</code> and <code>false</code>:</p> <ul> <li> <p> <code>true</code>: Elastic Transcoder uses the value of <code>KeyframesMaxDist</code> for the distance between key frames (the number of frames in a group of pictures, or GOP).</p> </li> <li> <p> <code>false</code>: The distance between key frames can vary.</p> </li> </ul> <important> <p> <code>FixedGOP</code> must be set to <code>true</code> for <code>fmp4</code> containers.</p> </important>',
                      }),
                  ).exactOptional(),
                  BitRate: VideoBitRateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The bit rate of the video stream in the output file, in kilobits/second. Valid values depend on the values of <code>Level</code> and <code>Profile</code>. If you specify <code>auto</code>, Elastic Transcoder uses the detected bit rate of the input source. If you specify a value other than <code>auto</code>, we recommend that you specify a value less than or equal to the maximum H.264-compliant value listed for your level and profile:</p> <p> <i>Level - Maximum video bit rate in kilobits/second (baseline and main Profile) : maximum video bit rate in kilobits/second (high Profile)</i> </p> <ul> <li> <p>1 - 64 : 80</p> </li> <li> <p>1b - 128 : 160</p> </li> <li> <p>1.1 - 192 : 240</p> </li> <li> <p>1.2 - 384 : 480</p> </li> <li> <p>1.3 - 768 : 960</p> </li> <li> <p>2 - 2000 : 2500</p> </li> <li> <p>3 - 10000 : 12500</p> </li> <li> <p>3.1 - 14000 : 17500</p> </li> <li> <p>3.2 - 20000 : 25000</p> </li> <li> <p>4 - 20000 : 25000</p> </li> <li> <p>4.1 - 50000 : 62500</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  FrameRate: FrameRateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The frames per second for the video stream in the output file. Valid values include:</p> <p> <code>auto</code>, <code>10</code>, <code>15</code>, <code>23.97</code>, <code>24</code>, <code>25</code>, <code>29.97</code>, <code>30</code>, <code>60</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder uses the detected frame rate of the input source. If you specify a frame rate, we recommend that you perform the following calculation:</p> <p> <code>Frame rate = maximum recommended decoding speed in luma samples/second / (width in pixels * height in pixels)</code> </p> <p>where:</p> <ul> <li> <p> <i>width in pixels</i> and <i>height in pixels</i> represent the Resolution of the output video.</p> </li> <li> <p> <i>maximum recommended decoding speed in Luma samples/second</i> is less than or equal to the maximum value listed in the following table, based on the value that you specified for Level.</p> </li> </ul> <p>The maximum recommended decoding speed in Luma samples/second for each level is described in the following list (<i>Level - Decoding speed</i>):</p> <ul> <li> <p>1 - 380160</p> </li> <li> <p>1b - 380160</p> </li> <li> <p>1.1 - 76800</p> </li> <li> <p>1.2 - 1536000</p> </li> <li> <p>1.3 - 3041280</p> </li> <li> <p>2 - 3041280</p> </li> <li> <p>2.1 - 5068800</p> </li> <li> <p>2.2 - 5184000</p> </li> <li> <p>3 - 10368000</p> </li> <li> <p>3.1 - 27648000</p> </li> <li> <p>3.2 - 55296000</p> </li> <li> <p>4 - 62914560</p> </li> <li> <p>4.1 - 62914560</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  MaxFrameRate: MaxFrameRateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'If you specify <code>auto</code> for <code>FrameRate</code>, Elastic Transcoder uses the frame rate of the input video for the frame rate of the output video. Specify the maximum frame rate that you want Elastic Transcoder to use when the frame rate of the input video is greater than the desired maximum frame rate of the output video. Valid values include: <code>10</code>, <code>15</code>, <code>23.97</code>, <code>24</code>, <code>25</code>, <code>29.97</code>, <code>30</code>, <code>60</code>.',
                      }),
                  ).exactOptional(),
                  Resolution: ResolutionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<important> <p>To better control resolution and aspect ratio of output videos, we recommend that you use the values <code>MaxWidth</code>, <code>MaxHeight</code>, <code>SizingPolicy</code>, <code>PaddingPolicy</code>, and <code>DisplayAspectRatio</code> instead of <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do not use them together.</p> </important> <p>The width and height of the video in the output file, in pixels. Valid values are <code>auto</code> and <i>width</i> x <i>height</i>:</p> <ul> <li> <p> <code>auto</code>: Elastic Transcoder attempts to preserve the width and height of the input file, subject to the following rules.</p> </li> <li> <p> <code> <i>width</i> x <i>height</i> </code>: The width and height of the output video in pixels.</p> </li> </ul> <p>Note the following about specifying the width and height:</p> <ul> <li> <p>The width must be an even integer between 128 and 4096, inclusive.</p> </li> <li> <p>The height must be an even integer between 96 and 3072, inclusive.</p> </li> <li> <p>If you specify a resolution that is less than the resolution of the input file, Elastic Transcoder rescales the output file to the lower resolution.</p> </li> <li> <p>If you specify a resolution that is greater than the resolution of the input file, Elastic Transcoder rescales the output to the higher resolution.</p> </li> <li> <p>We recommend that you specify a resolution for which the product of width and height is less than or equal to the applicable value in the following list (<i>List - Max width x height value</i>):</p> <ul> <li> <p>1 - 25344</p> </li> <li> <p>1b - 25344</p> </li> <li> <p>1.1 - 101376</p> </li> <li> <p>1.2 - 101376</p> </li> <li> <p>1.3 - 101376</p> </li> <li> <p>2 - 101376</p> </li> <li> <p>2.1 - 202752</p> </li> <li> <p>2.2 - 404720</p> </li> <li> <p>3 - 404720</p> </li> <li> <p>3.1 - 921600</p> </li> <li> <p>3.2 - 1310720</p> </li> <li> <p>4 - 2097152</p> </li> <li> <p>4.1 - 2097152</p> </li> </ul> </li> </ul>',
                      }),
                  ).exactOptional(),
                  AspectRatio: AspectRatioSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<important> <p>To better control resolution and aspect ratio of output videos, we recommend that you use the values <code>MaxWidth</code>, <code>MaxHeight</code>, <code>SizingPolicy</code>, <code>PaddingPolicy</code>, and <code>DisplayAspectRatio</code> instead of <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do not use them together.</p> </important> <p>The display aspect ratio of the video in the output file. Valid values include:</p> <p> <code>auto</code>, <code>1:1</code>, <code>4:3</code>, <code>3:2</code>, <code>16:9</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder tries to preserve the aspect ratio of the input file.</p> <p>If you specify an aspect ratio for the output file that differs from aspect ratio of the input file, Elastic Transcoder adds pillarboxing (black bars on the sides) or letterboxing (black bars on the top and bottom) to maintain the aspect ratio of the active region of the video.</p>',
                      }),
                  ).exactOptional(),
                  MaxWidth: DigitsOrAutoSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The maximum width of the output video in pixels. If you specify <code>auto</code>, Elastic Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 128 and 4096. ',
                      }),
                  ).exactOptional(),
                  MaxHeight: DigitsOrAutoSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum height of the output video in pixels. If you specify <code>auto</code>, Elastic Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 96 and 3072.',
                      }),
                  ).exactOptional(),
                  DisplayAspectRatio: AspectRatioSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The value that Elastic Transcoder adds to the metadata in the output file.',
                      }),
                  ).exactOptional(),
                  SizingPolicy: SizingPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specify one of the following values to control scaling of the output video:</p> <ul> <li> <p> <code>Fit</code>: Elastic Transcoder scales the output video so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> without exceeding the other value.</p> </li> <li> <p> <code>Fill</code>: Elastic Transcoder scales the output video so it matches the value that you specified in either <code>MaxWidth</code> or <code>MaxHeight</code> and matches or exceeds the other value. Elastic Transcoder centers the output video and then crops it in the dimension (if any) that exceeds the maximum value.</p> </li> <li> <p> <code>Stretch</code>: Elastic Transcoder stretches the output video to match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>. If the relative proportions of the input video and the output video are different, the output video will be distorted.</p> </li> <li> <p> <code>Keep</code>: Elastic Transcoder does not scale the output video. If either dimension of the input video exceeds the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>, Elastic Transcoder crops the output video.</p> </li> <li> <p> <code>ShrinkToFit</code>: Elastic Transcoder scales the output video down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either value. If you specify this option, Elastic Transcoder does not scale the video up.</p> </li> <li> <p> <code>ShrinkToFill</code>: Elastic Transcoder scales the output video down so that its dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without dropping below either value. If you specify this option, Elastic Transcoder does not scale the video up.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  PaddingPolicy: PaddingPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add black bars to the top and bottom and/or left and right sides of the output video to make the total size of the output video match the values that you specified for <code>MaxWidth</code> and <code>MaxHeight</code>.',
                      }),
                  ).exactOptional(),
                  Watermarks: PresetWatermarksSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Settings for the size, location, and opacity of graphics that you want Elastic Transcoder to overlay over videos that are transcoded using this preset. You can specify settings for up to four watermarks. Watermarks appear in the specified size and location, and with the specified opacity for the duration of the transcoded video.</p> <p>Watermarks can be in .png or .jpg format. If you want to display a watermark that is not rectangular, use the .png format, which supports transparency.</p> <p>When you create a job that uses this preset, you specify the .png or .jpg graphics that you want Elastic Transcoder to include in the transcoded videos. You can specify fewer graphics in the job than you specify watermark settings in the preset, which allows you to use the same preset for up to four watermarks that have different dimensions.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The <code>VideoParameters</code> structure.',
                  required: [],
                }),
              Audio: z
                .object({
                  Codec: AudioCodecSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The audio codec for the output file. Valid values include <code>aac</code>, <code>flac</code>, <code>mp2</code>, <code>mp3</code>, <code>pcm</code>, and <code>vorbis</code>.',
                      }),
                  ).exactOptional(),
                  SampleRate: AudioSampleRateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The sample rate of the audio stream in the output file, in Hertz. Valid values include:</p> <p> <code>auto</code>, <code>22050</code>, <code>32000</code>, <code>44100</code>, <code>48000</code>, <code>96000</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder automatically detects the sample rate.</p>',
                      }),
                  ).exactOptional(),
                  BitRate: AudioBitRateSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The bit rate of the audio stream in the output file, in kilobits/second. Enter an integer between 64 and 320, inclusive.',
                      }),
                  ).exactOptional(),
                  Channels: AudioChannelsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The number of audio channels in the output file. The following values are valid:</p> <p> <code>auto</code>, <code>0</code>, <code>1</code>, <code>2</code> </p> <p>One channel carries the information played by a single speaker. For example, a stereo track with two channels sends one channel to the left speaker, and the other channel to the right speaker. The output channels are organized into tracks. If you want Elastic Transcoder to automatically detect the number of audio channels in the input file and use that value for the output file, select <code>auto</code>.</p> <p>The output of a specific channel value and inputs are as follows:</p> <ul> <li> <p> <code>auto</code> <b> channel specified, with any input:</b> Pass through up to eight input channels.</p> </li> <li> <p> <code>0</code> <b> channels specified, with any input:</b> Audio omitted from the output.</p> </li> <li> <p> <code>1</code> <b> channel specified, with at least one input channel:</b> Mono sound.</p> </li> <li> <p> <code>2</code> <b> channels specified, with any input:</b> Two identical mono channels or stereo. For more information about tracks, see <code>Audio:AudioPackingMode.</code> </p> </li> </ul> <p> For more information about how Elastic Transcoder organizes channels and tracks, see <code>Audio:AudioPackingMode</code>.</p>',
                      }),
                  ).exactOptional(),
                  AudioPackingMode: AudioPackingModeSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The method of organizing audio channels and tracks. Use <code>Audio:Channels</code> to specify the number of channels in your output, and <code>Audio:AudioPackingMode</code> to specify the number of tracks and their relation to the channels. If you do not specify an <code>Audio:AudioPackingMode</code>, Elastic Transcoder uses <code>SingleTrack</code>.</p> <p>The following values are valid:</p> <p> <code>SingleTrack</code>, <code>OneChannelPerTrack</code>, and <code>OneChannelPerTrackWithMosTo8Tracks</code> </p> <p>When you specify <code>SingleTrack</code>, Elastic Transcoder creates a single track for your output. The track can have up to eight channels. Use <code>SingleTrack</code> for all non-<code>mxf</code> containers.</p> <p>The outputs of <code>SingleTrack</code> for a specific channel value and inputs are as follows:</p> <ul> <li> <p> <code>0</code> <b> channels with any input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1, 2, or auto </code> <b>channels with no audio input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1 </code> <b>channel with any input with audio:</b> One track with one channel, downmixed if necessary</p> </li> <li> <p> <code>2 </code> <b>channels with one track with one channel:</b> One track with two identical channels</p> </li> <li> <p> <code>2 or auto </code> <b>channels with two tracks with one channel each:</b> One track with two channels</p> </li> <li> <p> <code>2 or auto </code> <b>channels with one track with two channels:</b> One track with two channels</p> </li> <li> <p> <code>2 </code> <b>channels with one track with multiple channels:</b> One track with two channels</p> </li> <li> <p> <code>auto </code> <b>channels with one track with one channel:</b> One track with one channel</p> </li> <li> <p> <code>auto </code> <b>channels with one track with multiple channels:</b> One track with multiple channels</p> </li> </ul> <p>When you specify <code>OneChannelPerTrack</code>, Elastic Transcoder creates a new track for every channel in your output. Your output can have up to eight single-channel tracks.</p> <p>The outputs of <code>OneChannelPerTrack</code> for a specific channel value and inputs are as follows:</p> <ul> <li> <p> <code>0 </code> <b>channels with any input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1, 2, or auto </code> <b>channels with no audio input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1 </code> <b>channel with any input with audio:</b> One track with one channel, downmixed if necessary</p> </li> <li> <p> <code>2 </code> <b>channels with one track with one channel:</b> Two tracks with one identical channel each</p> </li> <li> <p> <code>2 or auto </code> <b>channels with two tracks with one channel each:</b> Two tracks with one channel each</p> </li> <li> <p> <code>2 or auto </code> <b>channels with one track with two channels:</b> Two tracks with one channel each</p> </li> <li> <p> <code>2 </code> <b>channels with one track with multiple channels:</b> Two tracks with one channel each</p> </li> <li> <p> <code>auto </code> <b>channels with one track with one channel:</b> One track with one channel</p> </li> <li> <p> <code>auto </code> <b>channels with one track with multiple channels:</b> Up to eight tracks with one channel each</p> </li> </ul> <p>When you specify <code>OneChannelPerTrackWithMosTo8Tracks</code>, Elastic Transcoder creates eight single-channel tracks for your output. All tracks that do not contain audio data from an input channel are MOS, or Mit Out Sound, tracks.</p> <p>The outputs of <code>OneChannelPerTrackWithMosTo8Tracks</code> for a specific channel value and inputs are as follows:</p> <ul> <li> <p> <code>0 </code> <b>channels with any input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1, 2, or auto </code> <b>channels with no audio input:</b> Audio omitted from the output</p> </li> <li> <p> <code>1 </code> <b>channel with any input with audio:</b> One track with one channel, downmixed if necessary, plus six MOS tracks</p> </li> <li> <p> <code>2 </code> <b>channels with one track with one channel:</b> Two tracks with one identical channel each, plus six MOS tracks</p> </li> <li> <p> <code>2 or auto </code> <b>channels with two tracks with one channel each:</b> Two tracks with one channel each, plus six MOS tracks</p> </li> <li> <p> <code>2 or auto </code> <b>channels with one track with two channels:</b> Two tracks with one channel each, plus six MOS tracks</p> </li> <li> <p> <code>2 </code> <b>channels with one track with multiple channels:</b> Two tracks with one channel each, plus six MOS tracks</p> </li> <li> <p> <code>auto </code> <b>channels with one track with one channel:</b> One track with one channel, plus seven MOS tracks</p> </li> <li> <p> <code>auto </code> <b>channels with one track with multiple channels:</b> Up to eight tracks with one channel each, plus MOS tracks until there are eight tracks in all</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  CodecOptions: AudioCodecOptionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>If you specified <code>AAC</code> for <code>Audio:Codec</code>, this is the <code>AAC</code> compression profile to use. Valid values include:</p> <p> <code>auto</code>, <code>AAC-LC</code>, <code>HE-AAC</code>, <code>HE-AACv2</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder chooses a profile based on the bit rate of the output file.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'Parameters required for transcoding audio.',
                  required: [],
                }),
              Thumbnails: z
                .object({
                  Format: JpgOrPngSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>The format of thumbnails, if any. Valid values are <code>jpg</code> and <code>png</code>. </p> <p>You specify whether you want Elastic Transcoder to create thumbnails when you create a job.</p>',
                      }),
                  ).exactOptional(),
                  Interval: DigitsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The approximate number of seconds between thumbnails. Specify an integer value.',
                      }),
                  ).exactOptional(),
                  Resolution: ThumbnailResolutionSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<important> <p>To better control resolution and aspect ratio of thumbnails, we recommend that you use the values <code>MaxWidth</code>, <code>MaxHeight</code>, <code>SizingPolicy</code>, and <code>PaddingPolicy</code> instead of <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do not use them together.</p> </important> <p>The width and height of thumbnail files in pixels. Specify a value in the format <code> <i>width</i> </code> x <code> <i>height</i> </code> where both values are even integers. The values cannot exceed the width and height that you specified in the <code>Video:Resolution</code> object.</p>',
                      }),
                  ).exactOptional(),
                  AspectRatio: AspectRatioSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<important> <p>To better control resolution and aspect ratio of thumbnails, we recommend that you use the values <code>MaxWidth</code>, <code>MaxHeight</code>, <code>SizingPolicy</code>, and <code>PaddingPolicy</code> instead of <code>Resolution</code> and <code>AspectRatio</code>. The two groups of settings are mutually exclusive. Do not use them together.</p> </important> <p>The aspect ratio of thumbnails. Valid values include:</p> <p> <code>auto</code>, <code>1:1</code>, <code>4:3</code>, <code>3:2</code>, <code>16:9</code> </p> <p>If you specify <code>auto</code>, Elastic Transcoder tries to preserve the aspect ratio of the video in the output file.</p>',
                      }),
                  ).exactOptional(),
                  MaxWidth: DigitsOrAutoSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum width of thumbnails in pixels. If you specify auto, Elastic Transcoder uses 1920 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 32 and 4096.',
                      }),
                  ).exactOptional(),
                  MaxHeight: DigitsOrAutoSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The maximum height of thumbnails in pixels. If you specify auto, Elastic Transcoder uses 1080 (Full HD) as the default value. If you specify a numeric value, enter an even integer between 32 and 3072.',
                      }),
                  ).exactOptional(),
                  SizingPolicy: SizingPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Specify one of the following values to control scaling of thumbnails:</p> <ul> <li> <p> <code>Fit</code>: Elastic Transcoder scales thumbnails so they match the value that you specified in thumbnail MaxWidth or MaxHeight settings without exceeding the other value. </p> </li> <li> <p> <code>Fill</code>: Elastic Transcoder scales thumbnails so they match the value that you specified in thumbnail <code>MaxWidth</code> or <code>MaxHeight</code> settings and matches or exceeds the other value. Elastic Transcoder centers the image in thumbnails and then crops in the dimension (if any) that exceeds the maximum value.</p> </li> <li> <p> <code>Stretch</code>: Elastic Transcoder stretches thumbnails to match the values that you specified for thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> settings. If the relative proportions of the input video and thumbnails are different, the thumbnails will be distorted.</p> </li> <li> <p> <code>Keep</code>: Elastic Transcoder does not scale thumbnails. If either dimension of the input video exceeds the values that you specified for thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> settings, Elastic Transcoder crops the thumbnails.</p> </li> <li> <p> <code>ShrinkToFit</code>: Elastic Transcoder scales thumbnails down so that their dimensions match the values that you specified for at least one of thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> without exceeding either value. If you specify this option, Elastic Transcoder does not scale thumbnails up.</p> </li> <li> <p> <code>ShrinkToFill</code>: Elastic Transcoder scales thumbnails down so that their dimensions match the values that you specified for at least one of <code>MaxWidth</code> and <code>MaxHeight</code> without dropping below either value. If you specify this option, Elastic Transcoder does not scale thumbnails up.</p> </li> </ul>',
                      }),
                  ).exactOptional(),
                  PaddingPolicy: PaddingPolicySchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'When you set <code>PaddingPolicy</code> to <code>Pad</code>, Elastic Transcoder may add black bars to the top and bottom and/or left and right sides of thumbnails to make the total size of the thumbnails match the values that you specified for thumbnail <code>MaxWidth</code> and <code>MaxHeight</code> settings.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'Thumbnails for videos.', required: [] }),
            })
            .openapi({ required: ['Name', 'Container'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreatePresetResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'LimitExceededException',
      content: { 'application/json': { schema: LimitExceededExceptionSchema } },
    },
    484: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const get20120925PipelinesIdRoute = createRoute({
  method: 'get',
  path: '/2012-09-25/pipelines/{Id}',
  description: 'The ReadPipeline operation gets detailed information about a pipeline.',
  operationId: 'ReadPipeline',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the pipeline to read.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReadPipelineResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const put20120925PipelinesIdRoute = createRoute({
  method: 'put',
  path: '/2012-09-25/pipelines/{Id}',
  description:
    '<p> Use the <code>UpdatePipeline</code> operation to update settings for a pipeline.</p> <important> <p>When you change pipeline settings, your changes take effect immediately. Jobs that you have already submitted and that Elastic Transcoder has not started to process are affected in addition to jobs that you submit after you change settings. </p> </important>',
  operationId: 'UpdatePipeline',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The ID of the pipeline that you want to update.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Name: z
                .string()
                .min(1)
                .max(40)
                .exactOptional()
                .openapi({
                  description:
                    '<p>The name of the pipeline. We recommend that the name be unique within the AWS account, but uniqueness is not enforced.</p> <p>Constraints: Maximum 40 characters</p>',
                }),
              InputBucket: z
                .string()
                .regex(/^(\w|\.|-){1,255}$/)
                .exactOptional()
                .openapi({
                  description:
                    'The Amazon S3 bucket in which you saved the media files that you want to transcode and the graphics that you want to use as watermarks.',
                }),
              Role: z
                .string()
                .regex(/^arn:aws:iam::\w{12}:role\/.+$/)
                .exactOptional()
                .openapi({
                  description:
                    'The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to use to transcode jobs for this pipeline.',
                }),
              AwsKmsKeyArn: z
                .string()
                .min(0)
                .max(255)
                .exactOptional()
                .openapi({
                  description:
                    "<p>The AWS Key Management Service (AWS KMS) key that you want to use with this pipeline.</p> <p>If you use either <code>s3</code> or <code>s3-aws-kms</code> as your <code>Encryption:Mode</code>, you don't need to provide a key with your job because a default key, known as an AWS-KMS key, is created for you automatically. You need to provide an AWS-KMS key only if you want to use a non-default AWS-KMS key, or if you are using an <code>Encryption:Mode</code> of <code>aes-cbc-pkcs7</code>, <code>aes-ctr</code>, or <code>aes-gcm</code>.</p>",
                }),
              Notifications: z
                .object({
                  Progressing: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process the job.',
                      }),
                  ).exactOptional(),
                  Completed: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing the job.',
                      }),
                  ).exactOptional(),
                  Warning: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition.',
                      }),
                  ).exactOptional(),
                  Error: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    '<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>',
                  required: [],
                }),
              ContentConfig: z
                .object({
                  Bucket: BucketNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files.</p> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit OutputBucket and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead. </p>',
                      }),
                  ).exactOptional(),
                  StorageClass: StorageClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket. ',
                      }),
                  ).exactOptional(),
                  Permissions: PermissionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Optional. The <code>Permissions</code> object specifies which users and/or predefined Amazon S3 groups you want to have access to transcoded files and playlists, and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> <p>If you include <code>Permissions</code>, Elastic Transcoder grants only the permissions that you specify. It does not grant full permissions to the owner of the role specified by <code>Role</code>. If you want that user to have full control, you must explicitly grant full control to the user.</p> <p> If you omit <code>Permissions</code>, Elastic Transcoder grants full control over the transcoded files and playlists to the owner of the role specified by <code>Role</code>, and grants no other permissions to any other user or group.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The <code>PipelineOutputConfig</code> structure.',
                  required: [],
                }),
              ThumbnailConfig: z
                .object({
                  Bucket: BucketNameSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p> The Amazon S3 bucket in which you want Elastic Transcoder to save the transcoded files. Specify this value when all of the following are true:</p> <ul> <li> <p>You want to save transcoded files, thumbnails (if any), and playlists (if any) together in one bucket.</p> </li> <li> <p>You do not want to specify the users or groups who have access to the transcoded files, thumbnails, and playlists.</p> </li> <li> <p>You do not want to specify the permissions that Elastic Transcoder grants to the files.</p> </li> <li> <p>You want to associate the transcoded files and thumbnails with the Amazon S3 Standard storage class.</p> </li> </ul> <p>If you want to save transcoded files and playlists in one bucket and thumbnails in another bucket, specify which users can access the transcoded files or the permissions the users have, or change the Amazon S3 storage class, omit OutputBucket and specify values for <code>ContentConfig</code> and <code>ThumbnailConfig</code> instead. </p>',
                      }),
                  ).exactOptional(),
                  StorageClass: StorageClassSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          ' The Amazon S3 storage class, <code>Standard</code> or <code>ReducedRedundancy</code>, that you want Elastic Transcoder to assign to the video files and playlists that it stores in your Amazon S3 bucket. ',
                      }),
                  ).exactOptional(),
                  Permissions: PermissionsSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          '<p>Optional. The <code>Permissions</code> object specifies which users and/or predefined Amazon S3 groups you want to have access to transcoded files and playlists, and the type of access you want them to have. You can grant permissions to a maximum of 30 users and/or predefined Amazon S3 groups.</p> <p>If you include <code>Permissions</code>, Elastic Transcoder grants only the permissions that you specify. It does not grant full permissions to the owner of the role specified by <code>Role</code>. If you want that user to have full control, you must explicitly grant full control to the user.</p> <p> If you omit <code>Permissions</code>, Elastic Transcoder grants full control over the transcoded files and playlists to the owner of the role specified by <code>Role</code>, and grants no other permissions to any other user or group.</p>',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The <code>PipelineOutputConfig</code> structure.',
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
      content: { 'application/json': { schema: UpdatePipelineResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ResourceInUseException',
      content: { 'application/json': { schema: ResourceInUseExceptionSchema } },
    },
    484: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    485: {
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const delete20120925PipelinesIdRoute = createRoute({
  method: 'delete',
  path: '/2012-09-25/pipelines/{Id}',
  description:
    "<p>The DeletePipeline operation removes a pipeline.</p> <p> You can only delete a pipeline that has never been used or that is not currently in use (doesn't contain any active jobs). If the pipeline is currently in use, <code>DeletePipeline</code> returns an error. </p>",
  operationId: 'DeletePipeline',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the pipeline that you want to delete.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePipelineResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const get20120925PresetsIdRoute = createRoute({
  method: 'get',
  path: '/2012-09-25/presets/{Id}',
  description: 'The ReadPreset operation gets detailed information about a preset.',
  operationId: 'ReadPreset',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the preset for which you want to get detailed information.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ReadPresetResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const delete20120925PresetsIdRoute = createRoute({
  method: 'delete',
  path: '/2012-09-25/presets/{Id}',
  description:
    "<p>The DeletePreset operation removes a preset that you've added in an AWS region.</p> <note> <p>You can't delete the default presets that are included with Elastic Transcoder.</p> </note>",
  operationId: 'DeletePreset',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the preset for which you want to get detailed information.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: DeletePresetResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const get20120925JobsByPipelinePipelineIdRoute = createRoute({
  method: 'get',
  path: '/2012-09-25/jobsByPipeline/{PipelineId}',
  description:
    '<p>The ListJobsByPipeline operation gets a list of the jobs currently in a pipeline.</p> <p>Elastic Transcoder returns all of the jobs currently in the specified pipeline. The response body contains one element for each job that satisfies the search criteria.</p>',
  operationId: 'ListJobsByPipeline',
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
      PipelineId: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'PipelineId',
            in: 'path',
            required: true,
            description: 'The ID of the pipeline for which you want to get job information.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
    query: z.object({
      Ascending: z
        .string()
        .regex(/(^true$)|(^false$)/)
        .exactOptional()
        .openapi({
          param: {
            name: 'Ascending',
            in: 'query',
            required: false,
            description:
              ' To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>. ',
            schema: { type: 'string', pattern: '(^true$)|(^false$)' },
          },
        }),
      PageToken: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            required: false,
            description:
              ' When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. ',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobsByPipelineResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const get20120925JobsByStatusStatusRoute = createRoute({
  method: 'get',
  path: '/2012-09-25/jobsByStatus/{Status}',
  description:
    'The ListJobsByStatus operation gets a list of jobs that have a specified status. The response body contains one element for each job that satisfies the search criteria.',
  operationId: 'ListJobsByStatus',
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
      Status: z
        .string()
        .regex(/(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)/)
        .openapi({
          param: {
            name: 'Status',
            in: 'path',
            required: true,
            description:
              'To get information about all of the jobs associated with the current AWS account that have a given status, specify the following status: <code>Submitted</code>, <code>Progressing</code>, <code>Complete</code>, <code>Canceled</code>, or <code>Error</code>.',
            schema: {
              type: 'string',
              pattern: '(^Submitted$)|(^Progressing$)|(^Complete$)|(^Canceled$)|(^Error$)',
            },
          },
        }),
    }),
    query: z.object({
      Ascending: z
        .string()
        .regex(/(^true$)|(^false$)/)
        .exactOptional()
        .openapi({
          param: {
            name: 'Ascending',
            in: 'query',
            required: false,
            description:
              ' To list jobs in chronological order by the date and time that they were submitted, enter <code>true</code>. To list jobs in reverse chronological order, enter <code>false</code>. ',
            schema: { type: 'string', pattern: '(^true$)|(^false$)' },
          },
        }),
      PageToken: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .exactOptional()
        .openapi({
          param: {
            name: 'PageToken',
            in: 'query',
            required: false,
            description:
              ' When Elastic Transcoder returns more than one page of results, use <code>pageToken</code> in subsequent <code>GET</code> requests to get each successive page of results. ',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListJobsByStatusResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const post20120925RoleTestsRoute = createRoute({
  method: 'post',
  path: '/2012-09-25/roleTests',
  description:
    '<p>The TestRole operation tests the IAM role used to create the pipeline.</p> <p>The <code>TestRole</code> action lets you determine whether the IAM role you are using has sufficient permissions to let Elastic Transcoder perform tasks associated with the transcoding process. The action attempts to assume the specified IAM role, checks read access to the input and output buckets, and tries to send a test notification to Amazon SNS topics that you specify.</p>',
  operationId: 'TestRole',
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
              Role: z
                .string()
                .regex(/^arn:aws:iam::\w{12}:role\/.+$/)
                .openapi({
                  description:
                    'The IAM Amazon Resource Name (ARN) for the role that you want Elastic Transcoder to test.',
                }),
              InputBucket: z
                .string()
                .regex(/^(\w|\.|-){1,255}$/)
                .openapi({
                  description:
                    'The Amazon S3 bucket that contains media files to be transcoded. The action attempts to read from this bucket.',
                }),
              OutputBucket: z
                .string()
                .regex(/^(\w|\.|-){1,255}$/)
                .openapi({
                  description:
                    'The Amazon S3 bucket that Elastic Transcoder writes transcoded media files to. The action attempts to read from this bucket.',
                }),
              Topics: z
                .array(SnsTopicSchema)
                .max(30)
                .openapi({
                  description:
                    'The ARNs of one or more Amazon Simple Notification Service (Amazon SNS) topics that you want the action to send a test notification to.',
                }),
            })
            .openapi({ required: ['Role', 'InputBucket', 'OutputBucket', 'Topics'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: TestRoleResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
  deprecated: true,
})

export const post20120925PipelinesIdNotificationsRoute = createRoute({
  method: 'post',
  path: '/2012-09-25/pipelines/{Id}/notifications',
  description:
    '<p>With the UpdatePipelineNotifications operation, you can update Amazon Simple Notification Service (Amazon SNS) notifications for a pipeline.</p> <p>When you update notifications for a pipeline, Elastic Transcoder returns the values that you specified in the request.</p>',
  operationId: 'UpdatePipelineNotifications',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description:
              'The identifier of the pipeline for which you want to change notification settings.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Notifications: z
                .object({
                  Progressing: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process the job.',
                      }),
                  ).exactOptional(),
                  Completed: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing the job.',
                      }),
                  ).exactOptional(),
                  Warning: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition.',
                      }),
                  ).exactOptional(),
                  Error: SnsTopicSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition.',
                      }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    '<p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>',
                  required: [],
                }),
            })
            .openapi({ required: ['Notifications'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePipelineNotificationsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})

export const post20120925PipelinesIdStatusRoute = createRoute({
  method: 'post',
  path: '/2012-09-25/pipelines/{Id}/status',
  description:
    "<p>The UpdatePipelineStatus operation pauses or reactivates a pipeline, so that the pipeline stops or restarts the processing of jobs.</p> <p>Changing the pipeline status is useful if you want to cancel one or more jobs. You can't cancel jobs after Elastic Transcoder has started processing them; if you pause the pipeline to which you submitted the jobs, you have more time to get the job IDs for the jobs that you want to cancel, and to send a <a>CancelJob</a> request. </p>",
  operationId: 'UpdatePipelineStatus',
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
      Id: z
        .string()
        .regex(/^\d{13}-\w{6}$/)
        .openapi({
          param: {
            name: 'Id',
            in: 'path',
            required: true,
            description: 'The identifier of the pipeline to update.',
            schema: { type: 'string', pattern: '^\\d{13}-\\w{6}$' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Status: z
                .string()
                .regex(/(^Active$)|(^Paused$)/)
                .openapi({
                  description:
                    '<p>The desired status of the pipeline:</p> <ul> <li> <p> <code>Active</code>: The pipeline is processing jobs.</p> </li> <li> <p> <code>Paused</code>: The pipeline is not currently processing jobs.</p> </li> </ul>',
                }),
            })
            .openapi({ required: ['Status'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: UpdatePipelineStatusResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'IncompatibleVersionException',
      content: { 'application/json': { schema: IncompatibleVersionExceptionSchema } },
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
      description: 'InternalServiceException',
      content: { 'application/json': { schema: InternalServiceExceptionSchema } },
    },
  },
})
