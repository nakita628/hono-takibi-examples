import { createRoute, z } from '@hono/zod-openapi'

const LocationSchema = z
  .object({
    placeholder: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A human-readable label for the location.' }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Optional. The latitude of the location.' }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Optional. The longitude of the location.' }),
  })
  .openapi({ description: 'Location is a geographic location attached to a memo.', required: [] })
  .openapi('Location')

const MotionMediaSchema = z
  .object({
    family: z
      .enum(['MOTION_MEDIA_FAMILY_UNSPECIFIED', 'APPLE_LIVE_PHOTO', 'ANDROID_MOTION_PHOTO'])
      .exactOptional()
      .openapi({ description: 'The motion photo format.' }),
    role: z
      .enum(['MOTION_MEDIA_ROLE_UNSPECIFIED', 'STILL', 'VIDEO', 'CONTAINER'])
      .exactOptional()
      .openapi({ description: 'The part this attachment plays in the motion photo.' }),
    groupId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Groups the attachments that belong to one motion photo. Required for client-supplied Apple Live Photo metadata;\n for an Android motion photo it is the attachment's own ID.",
      }),
    presentationTimestampUs: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Presentation timestamp of the still frame within the video, in microseconds.',
      }),
    hasEmbeddedVideo: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the file embeds the motion video, as in an Android motion photo container.',
      }),
  })
  .openapi({ description: 'MotionMedia links the parts of a motion photo.', required: [] })
  .openapi('MotionMedia')

const MediaCaptureTimeSchema = z
  .object({
    localDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Local date and time without a time zone, formatted as YYYY-MM-DDTHH:mm:ss[.fraction].',
      }),
    utcOffset: z
      .string()
      .exactOptional()
      .openapi({ description: 'UTC offset formatted as Z or +/-HH:MM.' }),
  })
  .openapi({
    description: 'MediaCaptureTime is the local time at which media was captured.',
    required: [],
  })
  .openapi('MediaCaptureTime')

const MediaLocationSchema = z
  .object({
    latitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'WGS84 latitude in decimal degrees. Must be provided with longitude.',
      }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description: 'WGS84 longitude in decimal degrees. Must be provided with latitude.',
      }),
    altitudeMeters: z
      .float64()
      .exactOptional()
      .openapi({ description: 'Signed altitude in meters relative to sea level.' }),
  })
  .openapi({
    description: 'MediaLocation is the geographic location at which media was captured.',
    required: [],
  })
  .openapi('MediaLocation')

const PhotoMetadataSchema = z
  .object({
    captureTime: MediaCaptureTimeSchema.exactOptional().openapi({
      description: 'Capture time as recorded by the source media.',
    }),
    location: MediaLocationSchema.exactOptional().openapi({
      description: 'Geographic location recorded by the source media.',
    }),
    sourceExifOrientation: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'EXIF orientation value from 1 through 8 as recorded by the source file.\n This value is informational and must not be reapplied to the stored attachment;\n width and height already describe its display-oriented dimensions.',
      }),
    cameraMake: z.string().exactOptional().openapi({ description: 'The camera manufacturer.' }),
    cameraModel: z.string().exactOptional().openapi({ description: 'The camera model.' }),
    lensModel: z.string().exactOptional().openapi({ description: 'The lens model.' }),
    fNumber: z.float64().exactOptional().openapi({ description: 'The aperture f-number.' }),
    exposureTimeSeconds: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The exposure time in seconds.' }),
    iso: z.int32().exactOptional().openapi({ description: 'The ISO sensitivity.' }),
    focalLengthMm: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The focal length in millimeters.' }),
  })
  .openapi({
    description: 'PhotoMetadata is metadata recorded by the source of a photo.',
    required: [],
  })
  .openapi('PhotoMetadata')

const VideoMetadataSchema = z
  .object({
    durationSeconds: z
      .float64()
      .exactOptional()
      .openapi({ description: 'The duration of the video in seconds.' }),
  })
  .openapi({
    description: 'VideoMetadata is metadata recorded by the source of a video.',
    required: [],
  })
  .openapi('VideoMetadata')

const MediaMetadataSchema = z
  .object({
    width: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Display-oriented width in pixels. Must be provided with height.' }),
    height: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Display-oriented height in pixels. Must be provided with width.' }),
    photo: PhotoMetadataSchema.exactOptional().openapi({
      description: 'Photo metadata, for image attachments.',
    }),
    video: VideoMetadataSchema.exactOptional().openapi({
      description: 'Video metadata, for video attachments.',
    }),
  })
  .openapi({
    description:
      'MediaMetadata contains normalized metadata explicitly supplied by a client.\n The service validates and stores this data but does not extract it from the media file.',
    required: [],
  })
  .openapi('MediaMetadata')

const AttachmentSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the attachment.\n Format: attachments/{attachment}',
      }),
    creator: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Output only. The user who uploaded the attachment, which may differ from the creator of the linked memo.\n Format: users/{user}',
      }),
    filename: z.string().openapi({ description: 'Required. The filename of the attachment.' }),
    type: z
      .string()
      .openapi({
        description:
          'Required. The MIME type of the attachment. If empty on create, the service detects it from the filename and\n content.',
      }),
    content: z
      .string()
      .exactOptional()
      .openapi({ writeOnly: true, description: 'Input only. The content of the attachment.' }),
    externalLink: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The external link of the attachment. Set only for externally stored attachments; ignored on create.',
      }),
    motionMedia: MotionMediaSchema.exactOptional().openapi({
      description:
        'Optional. Motion photo metadata. Clients may only supply Apple Live Photo metadata; the service detects Android\n motion photos in JPEG content.',
    }),
    mediaMetadata: MediaMetadataSchema.exactOptional().openapi({
      description:
        'Optional. Normalized media metadata supplied by the client at creation time. Immutable after creation.',
    }),
    memo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The memo the attachment is linked to. On create, the caller must be able to manage the memo.\n Format: memos/{memo}',
      }),
    size: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. The size of the stored content in bytes.',
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The creation time.' }),
  })
  .openapi({
    required: ['filename', 'type'],
    description: 'Attachment is a file uploaded by a user, optionally linked to a memo.',
  })
  .openapi('Attachment')

const MemoRelationMemoRefSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Required. The resource name of the memo.\n Format: memos/{memo}' }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Output only. A plain-text snippet of the memo content. Empty in\n ListMemos responses.',
      }),
  })
  .openapi({ required: ['name'], description: 'MemoRef identifies a memo in a relation.' })
  .openapi('MemoRelationMemoRef')

const MemoRelationSchema = z
  .object({
    memo: MemoRelationMemoRefSchema.openapi({
      description: 'Required. The source memo of the relation.',
    }),
    relatedMemo: MemoRelationMemoRefSchema.openapi({
      description: 'Required. The target memo of the relation.',
    }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'REFERENCE'])
      .openapi({ description: 'Required. The type of the relation.' }),
  })
  .openapi({
    required: ['memo', 'relatedMemo', 'type'],
    description: 'MemoRelation is a directed link from one memo to another.',
  })
  .openapi('MemoRelation')

const ReactionSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Identifier. The resource name of the reaction.\n Format: memos/{memo}/reactions/{reaction}',
      }),
    creator: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. The resource name of the creator.\n Format: users/{user}',
      }),
    reactionType: z
      .string()
      .openapi({ description: 'Required. The reaction, such as an emoji ("👍", "❤️", "😄").' }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The creation time.' }),
  })
  .openapi({
    required: ['reactionType'],
    description: 'Reaction is a reaction a user leaves on a memo.',
  })
  .openapi('Reaction')

const MemoPropertySchema = z
  .object({
    title: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The text of the H1 heading when it is the first block of the content.',
      }),
    hasLink: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the content contains a link.' }),
    hasCode: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the content contains inline code or a code block.' }),
    hasTaskList: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the content contains a task list.' }),
    hasIncompleteTasks: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the content contains an unchecked task.' }),
    hasInlineImage: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the content contains a Markdown image.' }),
  })
  .openapi({
    description: 'Property holds properties computed from the memo content.',
    required: [],
  })
  .openapi('MemoProperty')

const MemoSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the memo, where memo is the\n user-defined UID.\n Format: memos/{memo}',
      }),
    creator: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. The resource name of the creator.\n Format: users/{user}',
      }),
    space: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The space in which the memo is placed. Every memo, including a\n comment, owns its placement independently.\n Format: spaces/{space}',
      }),
    content: z
      .string()
      .openapi({
        description:
          "Required. The content of the memo in Markdown. Must not exceed the\n instance's content length limit.",
      }),
    location: LocationSchema.exactOptional().openapi({
      description: 'Optional. The location of the memo.',
    }),
    visibility: z
      .enum(['VISIBILITY_UNSPECIFIED', 'PRIVATE', 'PROTECTED', 'PUBLIC', 'SPACE'])
      .openapi({
        description:
          'Required. The visibility of the memo. Defaults to PRIVATE on creation when\n unspecified. SPACE requires the memo to be placed in a space.',
      }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NORMAL', 'ARCHIVED'])
      .openapi({
        description:
          'Required. The state of the memo. New memos are always NORMAL; change it\n with UpdateMemo.',
      }),
    pinned: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether the memo is pinned. Ignored on creation; change it with\n UpdateMemo.',
      }),
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({
        description: 'Optional. The attachments of the memo. Setting it replaces the full set.',
      }),
    relations: z
      .array(MemoRelationSchema)
      .exactOptional()
      .openapi({ description: 'Optional. The relations of the memo in both directions.' }),
    reactions: z
      .array(ReactionSchema)
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The reactions to the memo.' }),
    parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Immutable. The memo this memo comments on. Set it on creation\n to create a comment; unset for a top-level memo. Its identity is returned\n even when the caller cannot read the parent, and grants no read access.\n Format: memos/{memo}',
      }),
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. The tags extracted from the content.',
      }),
    property: MemoPropertySchema.exactOptional().openapi({
      readOnly: true,
      description: 'Output only. The properties computed from the content.',
    }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. A plain-text snippet of the content.',
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Optional. The creation time. Defaults to the current time when unset on\n creation.',
      }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Optional. The last update time. Defaults to the current time when unset on\n creation.',
      }),
    commentCount: z
      .int32()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Output only. The number of comments directly on this memo that the caller\n can read.',
      }),
  })
  .openapi({
    required: ['content', 'visibility', 'state'],
    description: 'Memo is a Markdown note written by a user.',
  })
  .openapi('Memo')

type ListMemosResponseType = { memos?: z.infer<typeof MemoSchema>[]; nextPageToken?: string }

const AcceptSpaceInvitationRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Required. The resource name of the invitation.\n Format: spaces/{space}/invitations/{invitation}',
      }),
  })
  .openapi({
    required: ['name'],
    description: 'Request message for SpaceService.AcceptSpaceInvitation.',
  })
  .openapi('AcceptSpaceInvitationRequest')

const BatchDeleteAttachmentsRequestSchema = z
  .object({
    names: z
      .array(z.string())
      .openapi({
        description:
          'Required. The names of the attachments to delete, at most 100. Duplicate names are ignored.\n Format: attachments/{attachment}',
      }),
  })
  .openapi({
    required: ['names'],
    description: 'Request message for AttachmentService.BatchDeleteAttachments.',
  })
  .openapi('BatchDeleteAttachmentsRequest')

const BatchGetInstanceSettingsRequestSchema = z
  .object({
    names: z
      .array(z.string())
      .openapi({
        description:
          'Required. The resource names of the instance settings. At most 100.\n Format: instance/settings/{setting}',
      }),
  })
  .openapi({
    required: ['names'],
    description: 'Request message for InstanceService.BatchGetInstanceSettings.',
  })
  .openapi('BatchGetInstanceSettingsRequest')

const GeneralSettingCustomProfileSchema = z
  .object({
    title: z.string().exactOptional().openapi({ description: 'The instance title.' }),
    description: z.string().exactOptional().openapi({ description: 'The instance description.' }),
    logoUrl: z.string().exactOptional().openapi({ description: 'The URL of the instance logo.' }),
  })
  .openapi({ description: 'CustomProfile is the instance branding.', required: [] })
  .openapi('GeneralSettingCustomProfile')

const InstanceSettingGeneralSettingSchema = z
  .object({
    customProfile: GeneralSettingCustomProfileSchema.exactOptional().openapi({
      description: 'Branding shown in the web app.',
    }),
    disallowUserRegistration: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether user self-registration is disabled.' }),
    disallowPasswordAuth: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether password authentication is disabled.' }),
    disallowChangeUsername: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether users are prevented from changing their username.' }),
    disallowChangeNickname: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether users are prevented from changing their nickname.' }),
    weekStartDayOffset: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The first day of the week as an offset from Sunday.\n 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday.\n Default is Sunday.',
      }),
    additionalStyle: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom CSS injected into the web app.' }),
    additionalScript: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom JavaScript injected into the web app.' }),
  })
  .openapi({ description: 'GeneralSetting is the general instance configuration.', required: [] })
  .openapi('InstanceSettingGeneralSetting')

const StorageS3ConfigSchema = z
  .object({
    endpoint: z.string().exactOptional().openapi({ description: 'The S3 endpoint URL.' }),
    region: z.string().exactOptional().openapi({ description: 'The S3 region.' }),
    bucket: z.string().exactOptional().openapi({ description: 'The S3 bucket.' }),
    accessKeyId: z.string().exactOptional().openapi({ description: 'The S3 access key ID.' }),
    accessKeySecret: z
      .string()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'Input only. The S3 access key secret. Never returned; an empty value keeps the stored secret.',
      }),
    usePathStyle: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to use path-style addressing instead of virtual-hosted-style.',
      }),
    insecureSkipTlsVerify: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to skip TLS certificate verification when connecting to the S3 endpoint.\n Only enable this for trusted endpoints that use a self-signed certificate; it removes protection against\n man-in-the-middle attacks.',
      }),
  })
  .openapi({
    description:
      'S3Config is the configuration of an S3-compatible object store.\n Reference: https://developers.cloudflare.com/r2/examples/aws/aws-sdk-go/',
    required: [],
  })
  .openapi('StorageS3Config')

const InstanceSettingStorageSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The stable identifier referenced by attachments.' }),
    name: z.string().exactOptional().openapi({ description: 'The human-readable storage name.' }),
    type: z
      .enum(['STORAGE_TYPE_UNSPECIFIED', 'DATABASE', 'LOCAL', 'S3'])
      .exactOptional()
      .openapi({ description: 'The storage backend.' }),
    s3Config: StorageS3ConfigSchema.exactOptional().openapi({
      description: 'The configuration of an S3 storage.',
    }),
  })
  .openapi({ description: 'Storage is a configured attachment storage instance.', required: [] })
  .openapi('InstanceSettingStorage')

const StorageSettingS3ConfigSchema = z
  .object({
    endpoint: z.string().exactOptional().openapi({ description: 'The S3 endpoint URL.' }),
    region: z.string().exactOptional().openapi({ description: 'The S3 region.' }),
    bucket: z.string().exactOptional().openapi({ description: 'The S3 bucket.' }),
    accessKeyId: z.string().exactOptional().openapi({ description: 'The S3 access key ID.' }),
    accessKeySecret: z
      .string()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'Input only. The S3 access key secret. Never returned; an empty value keeps the stored secret.',
      }),
    usePathStyle: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Whether to use path-style addressing instead of virtual-hosted-style.',
      }),
    insecureSkipTlsVerify: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether to skip TLS certificate verification when connecting to the S3 endpoint.\n Only enable this for trusted endpoints that use a self-signed certificate; it removes protection against\n man-in-the-middle attacks.',
      }),
  })
  .openapi({
    description:
      'S3Config is the legacy S3 configuration, retained for compatibility with existing clients.\n Reference: https://developers.cloudflare.com/r2/examples/aws/aws-sdk-go/',
    required: [],
  })
  .openapi('StorageSettingS3Config')

const InstanceSettingStorageSettingSchema = z
  .object({
    storages: z
      .array(InstanceSettingStorageSchema)
      .exactOptional()
      .openapi({
        description:
          'Configured storage instances, including inactive instances still referenced by attachments.',
      }),
    defaultStorageId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the storage used for new attachments.' }),
    filepathTemplate: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The template of attachment file paths.\n Default is assets/{timestamp}_{uuid}_{filename}.',
      }),
    storageType: z
      .enum(['STORAGE_TYPE_UNSPECIFIED', 'DATABASE', 'LOCAL', 'S3'])
      .exactOptional()
      .openapi({ description: 'Legacy compatibility field. New clients use default_storage_id.' }),
    s3Config: StorageSettingS3ConfigSchema.exactOptional().openapi({
      description: 'Legacy compatibility field. New clients use storages.',
    }),
  })
  .openapi({ description: 'StorageSetting is the attachment storage configuration.', required: [] })
  .openapi('InstanceSettingStorageSetting')

const ColorSchema = z
  .object({
    red: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of red in the color as a value in the interval [0, 1].',
      }),
    green: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of green in the color as a value in the interval [0, 1].',
      }),
    blue: z
      .float32()
      .exactOptional()
      .openapi({
        description: 'The amount of blue in the color as a value in the interval [0, 1].',
      }),
    alpha: z
      .float32()
      .exactOptional()
      .openapi({
        description:
          'The fraction of this color that should be applied to the pixel. That is,\n the final pixel color is defined by the equation:\n\n   `pixel color = alpha * (this color) + (1.0 - alpha) * (background color)`\n\n This means that a value of 1.0 corresponds to a solid color, whereas\n a value of 0.0 corresponds to a completely transparent color. This\n uses a wrapper message rather than a simple float scalar so that it is\n possible to distinguish between a default value and the value being unset.\n If omitted, this color object is rendered as a solid color\n (as if the alpha value had been explicitly given a value of 1.0).',
      }),
  })
  .openapi({
    description:
      "Represents a color in the RGBA color space. This representation is designed\n for simplicity of conversion to/from color representations in various\n languages over compactness. For example, the fields of this representation\n can be trivially provided to the constructor of `java.awt.Color` in Java; it\n can also be trivially provided to UIColor's `+colorWithRed:green:blue:alpha`\n method in iOS; and, with just a little work, it can be easily formatted into\n a CSS `rgba()` string in JavaScript.\n\n This reference page doesn't carry information about the absolute color\n space\n that should be used to interpret the RGB value (e.g. sRGB, Adobe RGB,\n DCI-P3, BT.2020, etc.). By default, applications should assume the sRGB color\n space.\n\n When color equality needs to be decided, implementations, unless\n documented otherwise, treat two colors as equal if all their red,\n green, blue, and alpha values each differ by at most 1e-5.\n\n Example (Java):\n\n      import com.google.type.Color;\n\n      // ...\n      public static java.awt.Color fromProto(Color protocolor) {\n        float alpha = protocolor.hasAlpha()\n            ? protocolor.getAlpha().getValue()\n            : 1.0;\n\n        return new java.awt.Color(\n            protocolor.getRed(),\n            protocolor.getGreen(),\n            protocolor.getBlue(),\n            alpha);\n      }\n\n      public static Color toProto(java.awt.Color color) {\n        float red = (float) color.getRed();\n        float green = (float) color.getGreen();\n        float blue = (float) color.getBlue();\n        float denominator = 255.0;\n        Color.Builder resultBuilder =\n            Color\n                .newBuilder()\n                .setRed(red / denominator)\n                .setGreen(green / denominator)\n                .setBlue(blue / denominator);\n        int alpha = color.getAlpha();\n        if (alpha != 255) {\n          result.setAlpha(\n              FloatValue\n                  .newBuilder()\n                  .setValue(((float) alpha) / denominator)\n                  .build());\n        }\n        return resultBuilder.build();\n      }\n      // ...\n\n Example (iOS / Obj-C):\n\n      // ...\n      static UIColor* fromProto(Color* protocolor) {\n         float red = [protocolor red];\n         float green = [protocolor green];\n         float blue = [protocolor blue];\n         FloatValue* alpha_wrapper = [protocolor alpha];\n         float alpha = 1.0;\n         if (alpha_wrapper != nil) {\n           alpha = [alpha_wrapper value];\n         }\n         return [UIColor colorWithRed:red green:green blue:blue alpha:alpha];\n      }\n\n      static Color* toProto(UIColor* color) {\n          CGFloat red, green, blue, alpha;\n          if (![color getRed:&red green:&green blue:&blue alpha:&alpha]) {\n            return nil;\n          }\n          Color* result = [[Color alloc] init];\n          [result setRed:red];\n          [result setGreen:green];\n          [result setBlue:blue];\n          if (alpha <= 0.9999) {\n            [result setAlpha:floatWrapperWithValue(alpha)];\n          }\n          [result autorelease];\n          return result;\n     }\n     // ...\n\n  Example (JavaScript):\n\n     // ...\n\n     var protoToCssColor = function(rgb_color) {\n        var redFrac = rgb_color.red || 0.0;\n        var greenFrac = rgb_color.green || 0.0;\n        var blueFrac = rgb_color.blue || 0.0;\n        var red = Math.floor(redFrac * 255);\n        var green = Math.floor(greenFrac * 255);\n        var blue = Math.floor(blueFrac * 255);\n\n        if (!('alpha' in rgb_color)) {\n           return rgbToCssColor(red, green, blue);\n        }\n\n        var alphaFrac = rgb_color.alpha.value || 0.0;\n        var rgbParams = [red, green, blue].join(',');\n        return ['rgba(', rgbParams, ',', alphaFrac, ')'].join('');\n     };\n\n     var rgbToCssColor = function(red, green, blue) {\n       var rgbNumber = new Number((red << 16) | (green << 8) | blue);\n       var hexString = rgbNumber.toString(16);\n       var missingZeros = 6 - hexString.length;\n       var resultBuilder = ['#'];\n       for (var i = 0; i < missingZeros; i++) {\n          resultBuilder.push('0');\n       }\n       resultBuilder.push(hexString);\n       return resultBuilder.join('');\n     };\n\n     // ...",
    required: [],
  })
  .openapi('Color')

const InstanceSettingTagMetadataSchema = z
  .object({
    backgroundColor: ColorSchema.exactOptional().openapi({
      description:
        'The background color of the tag label. When unset, the default tag color is used.',
    }),
    blurContent: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether memos with this tag have their content blurred.' }),
  })
  .openapi({ description: 'TagMetadata is the display metadata for a tag.', required: [] })
  .openapi('InstanceSettingTagMetadata')

const InstanceSettingTagsSettingSchema = z
  .object({
    tags: z
      .record(z.string(), InstanceSettingTagMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Map of tag name pattern to tag metadata.\n Each key is treated as an anchored regular expression (^pattern$), so a single entry like "project/.*" matches\n all tags under that prefix. Exact tag names are also valid.',
      }),
  })
  .openapi({
    description:
      'TagsSetting is the instance-wide tag metadata configuration.\n Active tag metadata is stored in per-user tag settings. This message remains for backward compatibility with\n existing clients and migrations.',
    required: [],
  })
  .openapi('InstanceSettingTagsSetting')

const NotificationSettingEmailSettingSchema = z
  .object({
    enabled: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether email notifications are enabled.' }),
    smtpHost: z.string().exactOptional().openapi({ description: 'The SMTP server host.' }),
    smtpPort: z.int32().exactOptional().openapi({ description: 'The SMTP server port.' }),
    smtpUsername: z.string().exactOptional().openapi({ description: 'The SMTP username.' }),
    smtpPassword: z
      .string()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'Input only. The SMTP password. Never returned. An empty value keeps the stored password, unless the host,\n port, username or encryption settings change.',
      }),
    useTls: z.boolean().exactOptional().openapi({ description: 'Whether to use STARTTLS.' }),
    useSsl: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to use implicit SSL/TLS.' }),
    fromEmail: z.string().exactOptional().openapi({ description: 'The sender email address.' }),
    fromName: z.string().exactOptional().openapi({ description: 'The sender display name.' }),
    replyTo: z.string().exactOptional().openapi({ description: 'The Reply-To email address.' }),
  })
  .openapi({
    description: 'EmailSetting is the SMTP configuration for notification emails.',
    required: [],
  })
  .openapi('NotificationSettingEmailSetting')

const InstanceSettingNotificationSettingSchema = z
  .object({
    email: NotificationSettingEmailSettingSchema.exactOptional().openapi({
      description: 'The email delivery configuration.',
    }),
  })
  .openapi({
    description: 'NotificationSetting is the notification transport configuration.',
    required: [],
  })
  .openapi('InstanceSettingNotificationSetting')

const InstanceSettingAIProviderConfigSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The provider ID. Generated when empty on update.' }),
    title: z.string().exactOptional().openapi({ description: 'The provider display title.' }),
    type: z
      .enum(['AI_PROVIDER_TYPE_UNSPECIFIED', 'OPENAI', 'GEMINI'])
      .exactOptional()
      .openapi({ description: 'The provider implementation type.' }),
    endpoint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The provider API endpoint. Defaults to the provider's public endpoint when empty.",
      }),
    apiKey: z
      .string()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'Input only. The provider API key. Never returned; an empty value keeps the stored key.',
      }),
    apiKeySet: z
      .boolean()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. Whether an API key is stored for this provider.',
      }),
    apiKeyHint: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. A masked hint of the stored API key.',
      }),
  })
  .openapi({
    description: 'AIProviderConfig is one callable AI provider connection.',
    required: [],
  })
  .openapi('InstanceSettingAIProviderConfig')

const InstanceSettingTranscriptionConfigSchema = z
  .object({
    providerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the provider used for transcription; must reference an entry in AISetting.providers.\n Empty means transcription is disabled.',
      }),
    model: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The provider-specific model identifier. Hidden from non-admins.\n Empty falls back to the engine default (whisper-1 for OPENAI providers, gemini-2.5-flash for GEMINI providers).',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The default ISO 639-1 language hint sent to the provider. Hidden from non-admins.\n Empty lets the provider auto-detect.',
      }),
    prompt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A default spelling and vocabulary hint passed to the provider. Hidden from non-admins.',
      }),
  })
  .openapi({
    description: 'TranscriptionConfig is the speech-to-text feature configuration.',
    required: [],
  })
  .openapi('InstanceSettingTranscriptionConfig')

const InstanceSettingAISettingSchema = z
  .object({
    providers: z
      .array(InstanceSettingAIProviderConfigSchema)
      .exactOptional()
      .openapi({ description: 'The AI provider configurations available instance-wide.' }),
    transcription: InstanceSettingTranscriptionConfigSchema.exactOptional().openapi({
      description:
        'The speech-to-text feature configuration.\n When unset or transcription.provider_id is empty, transcription is disabled. An update that omits it keeps the\n stored configuration.',
    }),
  })
  .openapi({ description: 'AISetting is the AI provider configuration.', required: [] })
  .openapi('InstanceSettingAISetting')

const InstanceSettingAccessSettingSchema = z
  .object({
    accessMode: z
      .enum([
        'INSTANCE_ACCESS_MODE_UNSPECIFIED',
        'INSTANCE_ACCESS_MODE_PRIVATE',
        'INSTANCE_ACCESS_MODE_PUBLIC',
      ])
      .exactOptional()
      .openapi({
        description:
          'Whether unauthenticated users may access instance content. Must be PRIVATE or PUBLIC on update.',
      }),
  })
  .openapi({ description: 'AccessSetting is the instance access policy.', required: [] })
  .openapi('InstanceSettingAccessSetting')

const UsageLimitsSettingUsageLimitSchema = z
  .object({
    users: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The users the entry applies to. Not repeated within an entry.\n Format: users/{user}',
      }),
    allUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the entry applies to every user. Exactly one entry has it, and\n it is the last entry. An entry has users or all_users, never both.',
      }),
    memoCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of memos the user may have created, comments and archived\n memos included.',
      }),
    memoContentBytes: z
      .string()
      .exactOptional()
      .openapi({ description: "The UTF-8 size in bytes of one memo's content." }),
    storageBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total size in bytes of the user's uploads. External links do not\n count.",
      }),
    uploadBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size in bytes of one uploaded file.' }),
  })
  .openapi({
    description:
      'UsageLimit is one entry: who it applies to and the limit for each\n metric. An unset limit is unlimited, as is 0.',
    required: [],
  })
  .openapi('UsageLimitsSettingUsageLimit')

const InstanceSettingUsageLimitsSettingSchema = z
  .object({
    limits: z
      .array(UsageLimitsSettingUsageLimitSchema)
      .exactOptional()
      .openapi({
        description:
          'The entries, in the order they are checked. At most 100, naming at most\n 1,000 users in all.',
      }),
  })
  .openapi({
    description:
      "UsageLimitsSetting is an ordered list of limit sets. The first entry that\n names a user is that user's limit set, whole. The last entry has all_users\n set and is the default. The setting is read and replaced whole. Admins\n are limited like everyone else.",
    required: [],
  })
  .openapi('InstanceSettingUsageLimitsSetting')

const InstanceSettingSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the instance setting. {setting} is a Key value, such as GENERAL.\n Format: instance/settings/{setting}',
      }),
    generalSetting: InstanceSettingGeneralSettingSchema.exactOptional().openapi({
      description: 'The value of the GENERAL setting.',
    }),
    storageSetting: InstanceSettingStorageSettingSchema.exactOptional().openapi({
      description: 'The value of the STORAGE setting.',
    }),
    tagsSetting: InstanceSettingTagsSettingSchema.exactOptional().openapi({
      description: 'The value of the TAGS setting.',
    }),
    notificationSetting: InstanceSettingNotificationSettingSchema.exactOptional().openapi({
      description: 'The value of the NOTIFICATION setting.',
    }),
    aiSetting: InstanceSettingAISettingSchema.exactOptional().openapi({
      description: 'The value of the AI setting.',
    }),
    accessSetting: InstanceSettingAccessSettingSchema.exactOptional().openapi({
      description: 'The value of the ACCESS setting.',
    }),
    usageLimitsSetting: InstanceSettingUsageLimitsSettingSchema.exactOptional().openapi({
      description: 'The value of the USAGE_LIMITS setting.',
    }),
  })
  .openapi({
    description: 'InstanceSetting is one group of instance-wide settings, selected by its key.',
    required: [],
  })
  .openapi('InstanceSetting')

const BatchGetInstanceSettingsResponseSchema = z
  .object({
    instanceSettings: z
      .array(InstanceSettingSchema)
      .exactOptional()
      .openapi({ description: 'The instance settings, in the same order as the requested names.' }),
  })
  .openapi({
    description: 'Response message for InstanceService.BatchGetInstanceSettings.',
    required: [],
  })
  .openapi('BatchGetInstanceSettingsResponse')

const BatchGetLinkMetadataRequestSchema = z
  .object({
    urls: z.array(z.string()).openapi({ description: 'Required. The link URLs. At most 10.' }),
  })
  .openapi({
    required: ['urls'],
    description: 'Request message for MemoService.BatchGetLinkMetadata.',
  })
  .openapi('BatchGetLinkMetadataRequest')

const LinkMetadataSchema = z
  .object({
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The link URL as given in the request.' }),
    title: z.string().exactOptional().openapi({ description: 'The page title.' }),
    description: z.string().exactOptional().openapi({ description: 'The page description.' }),
    image: z.string().exactOptional().openapi({ description: 'The preview image URL.' }),
  })
  .openapi({ description: 'LinkMetadata is the preview metadata of a web link.', required: [] })
  .openapi('LinkMetadata')

const BatchGetLinkMetadataResponseSchema = z
  .object({
    linkMetadata: z
      .array(LinkMetadataSchema)
      .exactOptional()
      .openapi({ description: 'The link metadata, in the same order as the requested URLs.' }),
  })
  .openapi({ description: 'Response message for MemoService.BatchGetLinkMetadata.', required: [] })
  .openapi('BatchGetLinkMetadataResponse')

const BatchGetUsersRequestSchema = z
  .object({
    names: z
      .array(z.string())
      .openapi({
        description:
          'Required. The resource names of the users to get. Empty and duplicate\n entries are ignored. At most 100 non-empty names are allowed.\n Format: users/{user}',
      }),
  })
  .openapi({ required: ['names'], description: 'Request message for UserService.BatchGetUsers.' })
  .openapi('BatchGetUsersRequest')

const UserSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the user. {user} is the username.\n Format: users/{user}',
      }),
    username: z
      .string()
      .openapi({ description: 'Required. The unique username, used to sign in.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The display name of the user.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The email address of the user. Stored trimmed and lowercased;\n empty means no address. An address belongs to at most one user on the\n instance, so writes that would reuse one fail with ALREADY_EXISTS.\n Returned only to the user and to admins.',
      }),
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The avatar URL of the user. An avatar set as a data URI (PNG,\n JPEG, GIF or WebP, at most 2 MiB) is returned as a file server URL.',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The description of the user.' }),
    password: z
      .string()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description: 'Input only. The password of the user. Never returned.',
      }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'ADMIN', 'USER'])
      .openapi({ description: 'Required. The role of the user. Only admins can change it.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'NORMAL', 'ARCHIVED'])
      .openapi({ description: 'Required. The state of the user. Only admins can change it.' }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The creation timestamp.' }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The last update timestamp.' }),
  })
  .openapi({
    required: ['username', 'role', 'state'],
    description: 'User is an account on the instance.',
  })
  .openapi('User')

const BatchGetUsersResponseSchema = z
  .object({
    users: z
      .array(UserSchema)
      .exactOptional()
      .openapi({ description: 'The active users that match the requested names.' }),
  })
  .openapi({ description: 'Response message for UserService.BatchGetUsers.', required: [] })
  .openapi('BatchGetUsersResponse')

const ConfigurationStatusManagedResourceSchema = z
  .object({
    resource: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The resource name.\n Format: identity-providers/{idp}, instance/settings/{setting}, or users/{user}',
      }),
    source: z
      .string()
      .exactOptional()
      .openapi({ description: 'The configuration file that declares the resource.' }),
    managedFields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The field paths, in JSON names, the configuration manages; "*" means the whole resource.',
      }),
    ignoredFields: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'The managed field paths the configuration does not write after creation, so the API accepts edits to them.',
      }),
  })
  .openapi({
    description: 'ManagedResource is one resource the configuration manages.',
    required: [],
  })
  .openapi('ConfigurationStatusManagedResource')

const ConfigurationStatusSchema = z
  .object({
    serial: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The state record serial; zero before any apply has changed something.',
      }),
    configDigest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies the applied configuration, with sensitive values masked before hashing.',
      }),
    appliedBy: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The apply path ("cli" or "startup") and the host of the last apply.',
      }),
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Memos version of the last apply.' }),
    managedResources: z
      .array(ConfigurationStatusManagedResourceSchema)
      .exactOptional()
      .openapi({ description: 'The resources the configuration manages.' }),
    applyTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the last apply that changed something ran.' }),
  })
  .openapi({
    description: 'ConfigurationStatus is what declarative configuration manages on the instance.',
    required: [],
  })
  .openapi('ConfigurationStatus')

const CreateLinkedIdentityRequestSchema = z
  .object({
    parent: z
      .string()
      .openapi({
        description:
          'Required. The user who owns the linked identity. Must be the caller.\n Format: users/{user}',
      }),
    identityProvider: z
      .string()
      .openapi({
        description: 'Required. The identity provider to link.\n Format: identity-providers/{idp}',
      }),
    code: z
      .string()
      .openapi({ description: 'Required. The authorization code from the identity provider.' }),
    redirectUri: z
      .string()
      .openapi({ description: 'Required. The redirect URI used in the OAuth flow.' }),
    codeVerifier: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The PKCE code verifier used in the OAuth flow.' }),
  })
  .openapi({
    required: ['parent', 'identityProvider', 'code', 'redirectUri'],
    description: 'Request message for UserService.CreateLinkedIdentity.',
  })
  .openapi('CreateLinkedIdentityRequest')

const CreatePersonalAccessTokenRequestSchema = z
  .object({
    parent: z
      .string()
      .openapi({
        description:
          'Required. The user who owns the token. Must be the caller.\n Format: users/{user}',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The description of the token.' }),
    expiresInDays: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional. The lifetime of the token in days. 0 means the token never\n expires.',
      }),
  })
  .openapi({
    required: ['parent'],
    description: 'Request message for UserService.CreatePersonalAccessToken.',
  })
  .openapi('CreatePersonalAccessTokenRequest')

const PersonalAccessTokenSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the personal access token.\n Format: users/{user}/personalAccessTokens/{personal_access_token}',
      }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The description of the token.' }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The creation time.' }),
    expireTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'Optional. The expiration time. Unset means the token never expires.',
      }),
    lastUseTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The time the token was last used.' }),
  })
  .openapi({
    description:
      'PersonalAccessToken is a long-lived token for API and script access.\n PATs are distinct from short-lived JWT access tokens used for session\n authentication.',
    required: [],
  })
  .openapi('PersonalAccessToken')

const CreatePersonalAccessTokenResponseSchema = z
  .object({
    personalAccessToken: PersonalAccessTokenSchema.exactOptional().openapi({
      description: 'The personal access token metadata.',
    }),
    token: z
      .string()
      .exactOptional()
      .openapi({ description: 'The token value. This is the only time it is returned.' }),
  })
  .openapi({
    description: 'Response message for UserService.CreatePersonalAccessToken.',
    required: [],
  })
  .openapi('CreatePersonalAccessTokenResponse')

const DeclineSpaceInvitationRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Required. The resource name of the invitation.\n Format: spaces/{space}/invitations/{invitation}',
      }),
  })
  .openapi({
    required: ['name'],
    description: 'Request message for SpaceService.DeclineSpaceInvitation.',
  })
  .openapi('DeclineSpaceInvitationRequest')

const FieldMappingSchema = z
  .object({
    identifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The claim that uniquely identifies the user. Sign-in fails when it is missing or empty.',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The claim used as the display name. Falls back to the identifier when unset.',
      }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The claim used as the email address.' }),
    avatarUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The claim used as the avatar URL.' }),
  })
  .openapi({
    description:
      'FieldMapping maps user info claims of an OAuth2 identity provider to user fields.\n Each field holds the name of a claim.',
    required: [],
  })
  .openapi('FieldMapping')

const GetCurrentUserResponseSchema = z
  .object({ user: UserSchema.exactOptional().openapi({ description: 'The authenticated user.' }) })
  .openapi({ description: 'Response message for AuthService.GetCurrentUser.', required: [] })
  .openapi('GetCurrentUserResponse')

const GetUserWebhookSigningSecretResponseSchema = z
  .object({
    signingSecret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The signing secret, in the Standard Webhooks "whsec_<base64>" form.',
      }),
  })
  .openapi({
    description: 'Response message for UserService.GetUserWebhookSigningSecret.',
    required: [],
  })
  .openapi('GetUserWebhookSigningSecretResponse')

const GoogleProtobufAnySchema = z
  .looseObject({
    '@type': z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the serialized message.' }),
  })
  .openapi({
    description:
      'Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.',
    required: [],
  })
  .openapi('GoogleProtobufAny')

const OAuth2ConfigSchema = z
  .object({
    clientId: z.string().exactOptional().openapi({ description: 'The OAuth2 client ID.' }),
    clientSecret: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The OAuth2 client secret. Write-only: it is never returned in responses.',
      }),
    authUrl: z.string().exactOptional().openapi({ description: 'The authorization endpoint URL.' }),
    tokenUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token endpoint URL, used to exchange the authorization code for an access token.',
      }),
    userInfoUrl: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The user info endpoint URL, used to fetch the claims of the signed-in user.',
      }),
    scopes: z.array(z.string()).exactOptional().openapi({ description: 'The scopes to request.' }),
    fieldMapping: FieldMappingSchema.exactOptional().openapi({
      description: 'How user info claims map to user fields.',
    }),
  })
  .openapi({
    description: 'OAuth2Config is the configuration of an OAuth2 identity provider.',
    required: [],
  })
  .openapi('OAuth2Config')

const IdentityProviderConfigSchema = z
  .object({
    oauth2Config: OAuth2ConfigSchema.exactOptional().openapi({
      description: 'The configuration of an OAuth2 identity provider.',
    }),
  })
  .openapi({
    description:
      'IdentityProviderConfig is the type-specific configuration of an identity provider.',
    required: [],
  })
  .openapi('IdentityProviderConfig')

const IdentityProviderSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the identity provider.\n Format: identity-providers/{idp}',
      }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'OAUTH2'])
      .openapi({ description: 'Required. The type of the identity provider.' }),
    title: z
      .string()
      .openapi({ description: 'Required. The display title of the identity provider.' }),
    identifierFilter: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. A regular expression the user identifier must match to sign in. Empty allows every identifier.',
      }),
    config: IdentityProviderConfigSchema.openapi({
      description: 'Required. The type-specific configuration of the identity provider.',
    }),
  })
  .openapi({
    required: ['type', 'title', 'config'],
    description: 'IdentityProvider is an external identity provider users can sign in with.',
  })
  .openapi('IdentityProvider')

const ImportMemosIssueSchema = z
  .object({
    memoUid: z
      .string()
      .exactOptional()
      .openapi({ description: 'The archive memo UID the issue concerns, if any.' }),
    message: z.string().exactOptional().openapi({ description: 'A description of the issue.' }),
  })
  .openapi({
    description:
      'ImportMemosIssue is one warning or failure of an import, tied to the memo\n UID from the archive when there is one.',
    required: [],
  })
  .openapi('ImportMemosIssue')

const ImportMemosPlanSchema = z
  .object({
    exportTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the archive was written.' }),
    exporter: z
      .string()
      .exactOptional()
      .openapi({ description: 'Username of the user who exported the archive.' }),
    generator: z
      .string()
      .exactOptional()
      .openapi({ description: 'The software that wrote the archive.' }),
    memoCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of memo records in the archive.' }),
    attachmentCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of attachment files in the archive.' }),
    new: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Memos whose UID nobody on the instance holds.' }),
    existing: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Memos the user already holds; the conflict policy applies to them.',
      }),
    renamed: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Memos whose UID another account holds; they are imported under fresh UIDs.',
      }),
    warnings: z
      .array(ImportMemosIssueSchema)
      .exactOptional()
      .openapi({ description: 'Deviations the archive reader corrected while validating.' }),
  })
  .openapi({
    description: 'ImportMemosPlan describes what importing a staged archive would do.',
    required: [],
  })
  .openapi('ImportMemosPlan')

const ImportMemosReportSchema = z
  .object({
    created: z.int32().exactOptional().openapi({ description: 'Number of memos created.' }),
    updated: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of existing memos replaced under the REPLACE policy.' }),
    skipped: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of existing memos left untouched under the SKIP policy.' }),
    failed: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of memos that could not be imported.' }),
    warnings: z
      .array(ImportMemosIssueSchema)
      .exactOptional()
      .openapi({ description: 'Deviations the importer corrected or tolerated.' }),
    failures: z
      .array(ImportMemosIssueSchema)
      .exactOptional()
      .openapi({ description: 'One entry per failed memo, with the reason.' }),
  })
  .openapi({ description: 'ImportMemosReport is the outcome of an import.', required: [] })
  .openapi('ImportMemosReport')

const ImportMemosSpecSchema = z
  .object({
    totalSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. Total size of the archive in bytes.' }),
  })
  .openapi({ description: 'ImportMemosSpec describes a new memo import upload.', required: [] })
  .openapi('ImportMemosSpec')

const ImportMemosRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({
        description:
          'Required. The user who receives the memos. Must be the caller.\n Format: users/{user}',
      }),
    spec: ImportMemosSpecSchema.exactOptional().openapi({
      description: 'Starts a new upload. The same call may also carry data and finish_write.',
    }),
    uploadId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continues the upload identified by a previous response.' }),
    writeOffset: z
      .string()
      .openapi({
        description:
          'Required. Zero-based byte offset at which data is written. Must equal the\n committed size, except when retrying the most recently accepted chunk\n with identical bytes and offset, which is accepted without writing again.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Archive bytes, at most max_chunk_size long. With no data and\n finish_write false, the call reports progress without writing, and\n write_offset is ignored.',
      }),
    finishWrite: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Finish the upload after writing data. The committed size must\n then equal total_size. The archive is validated and, unless\n validate_only is set, imported. Any later call for an imported upload\n returns the same report.',
      }),
    conflictPolicy: z
      .enum(['CONFLICT_POLICY_UNSPECIFIED', 'SKIP', 'REPLACE', 'DUPLICATE'])
      .exactOptional()
      .openapi({
        description: 'Optional. Read on the finishing call that imports. Unspecified means SKIP.',
      }),
    validateOnly: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. On a finishing call, validate the archive and return the plan\n without importing. The upload stays staged so a later finishing call can\n import it.',
      }),
  })
  .openapi({
    required: ['name', 'writeOffset'],
    description: 'Request message for UserService.ImportMemos.',
  })
  .openapi('ImportMemosRequest')

const ImportMemosResponseSchema = z
  .object({
    uploadId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Opaque ID for subsequent calls. This is not a resource name.' }),
    committedSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of archive bytes committed so far.' }),
    maxChunkSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of data bytes accepted in one call.' }),
    plan: ImportMemosPlanSchema.exactOptional().openapi({
      description: 'What the import would do. Set by a finishing call with validate_only.',
    }),
    report: ImportMemosReportSchema.exactOptional().openapi({
      description: 'What the import did. Set by a finishing call that imported.',
    }),
  })
  .openapi({ description: 'Response message for UserService.ImportMemos.', required: [] })
  .openapi('ImportMemosResponse')

const InstanceProfileChallengeSchema = z
  .object({
    provider: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The challenge provider, which selects the widget the web app renders.',
      }),
    siteKey: z
      .string()
      .exactOptional()
      .openapi({ description: "The provider's public site key for the widget." }),
  })
  .openapi({
    description: 'Challenge describes a proof-of-humanity challenge widget.',
    required: [],
  })
  .openapi('InstanceProfileChallenge')

const InstanceProfileSchema = z
  .object({
    version: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the running server.' }),
    commit: z
      .string()
      .exactOptional()
      .openapi({ description: 'The build commit of the running server.' }),
    demo: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the instance runs in demo mode.' }),
    instanceUrl: z
      .string()
      .exactOptional()
      .openapi({ description: 'The configured URL of the instance.' }),
    accessMode: z
      .enum([
        'INSTANCE_ACCESS_MODE_UNSPECIFIED',
        'INSTANCE_ACCESS_MODE_PRIVATE',
        'INSTANCE_ACCESS_MODE_PUBLIC',
      ])
      .exactOptional()
      .openapi({ description: 'Whether unauthenticated users may access instance content.' }),
    needsSetup: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the instance has no users yet and requires initial setup (creating the first admin account).\n Unlike a null admin, this stays false once any user exists, so an instance that has lost its admins is not\n mistaken for a fresh install.',
      }),
    admin: UserSchema.exactOptional().openapi({
      description:
        "The first administrator of the instance, for display purposes.\n Only set for signed-in callers; anonymous requests never receive it, so the admin's login identifier is not\n disclosed before authentication. May also be null on an instance that has lost all admins; use needs_setup to\n determine whether initial setup is required.",
    }),
    challenge: InstanceProfileChallengeSchema.exactOptional().openapi({
      description:
        'The proof-of-humanity challenge required on signup and password sign-in.\n Absent when none is configured, which is the case on every self-hosted instance.',
    }),
  })
  .openapi({
    description: 'InstanceProfile is the basic information about the instance.',
    required: [],
  })
  .openapi('InstanceProfile')

const InstanceStatsDatabaseStatsSchema = z
  .object({
    driver: z
      .string()
      .exactOptional()
      .openapi({ description: 'The database driver: "sqlite", "mysql" or "postgres".' }),
    sizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The database size in bytes. -1 if unavailable.' }),
  })
  .openapi({ description: 'DatabaseStats is the database size statistics.', required: [] })
  .openapi('InstanceStatsDatabaseStats')

const InstanceStatsSchema = z
  .object({
    database: InstanceStatsDatabaseStatsSchema.exactOptional().openapi({
      description: 'The database size statistics.',
    }),
    localStorageBytes: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The recursive size of the data directory in bytes. -1 if unavailable.',
      }),
    generatedTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'The time the snapshot was generated on the server.' }),
  })
  .openapi({
    description: "InstanceStats is a snapshot of the instance's resource usage.",
    required: [],
  })
  .openapi('InstanceStats')

const LinkedIdentitySchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the linked identity. {linked_identity} is\n the ID of the identity provider.\n Format: users/{user}/linkedIdentities/{linked_identity}',
      }),
    identityProvider: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Output only. The resource name of the identity provider.\n Format: identity-providers/{idp}',
      }),
    externalUid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The external user identifier from the identity provider: the subject that\n signs in as this user. Set by signing in through the provider, or declared\n in a configuration file for a declared user.',
      }),
  })
  .openapi({
    description: 'LinkedIdentity is an SSO identity linked to a user account.',
    required: [],
  })
  .openapi('LinkedIdentity')

const ListAttachmentsResponseSchema = z
  .object({
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'The attachments.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for AttachmentService.ListAttachments.', required: [] })
  .openapi('ListAttachmentsResponse')

const ListIdentityProvidersResponseSchema = z
  .object({
    identityProviders: z
      .array(IdentityProviderSchema)
      .exactOptional()
      .openapi({ description: 'The identity providers.' }),
  })
  .openapi({
    description: 'Response message for IdentityProviderService.ListIdentityProviders.',
    required: [],
  })
  .openapi('ListIdentityProvidersResponse')

const ListLinkedIdentitiesResponseSchema = z
  .object({
    linkedIdentities: z
      .array(LinkedIdentitySchema)
      .exactOptional()
      .openapi({ description: 'The linked identities.' }),
  })
  .openapi({ description: 'Response message for UserService.ListLinkedIdentities.', required: [] })
  .openapi('ListLinkedIdentitiesResponse')

const ListMemoAttachmentsResponseSchema = z
  .object({
    attachments: z
      .array(AttachmentSchema)
      .exactOptional()
      .openapi({ description: 'The attachments.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for MemoService.ListMemoAttachments.', required: [] })
  .openapi('ListMemoAttachmentsResponse')

const ListMemoReactionsResponseSchema = z
  .object({
    reactions: z.array(ReactionSchema).exactOptional().openapi({ description: 'The reactions.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for MemoService.ListMemoReactions.', required: [] })
  .openapi('ListMemoReactionsResponse')

const ListMemoRelationsResponseSchema = z
  .object({
    relations: z
      .array(MemoRelationSchema)
      .exactOptional()
      .openapi({ description: 'The relations.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for MemoService.ListMemoRelations.', required: [] })
  .openapi('ListMemoRelationsResponse')

const MemoShareSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the share. The {share} segment is the\n opaque token used in the share URL.\n Format: memos/{memo}/shares/{share}',
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The creation time.' }),
    expireTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'Optional. The time after which the share link stops working. Must be in\n the future when set. If unset, the link never expires.',
      }),
  })
  .openapi({
    description:
      'MemoShare is an access grant that permits read-only access to a memo via an\n opaque bearer token.',
    required: [],
  })
  .openapi('MemoShare')

const ListMemoSharesResponseSchema = z
  .object({
    memoShares: z
      .array(MemoShareSchema)
      .exactOptional()
      .openapi({ description: 'The share links.' }),
  })
  .openapi({ description: 'Response message for MemoService.ListMemoShares.', required: [] })
  .openapi('ListMemoSharesResponse')

const MemoViewIconSchema = z
  .object({
    emoji: z.string().exactOptional().openapi({ description: 'A Unicode emoji sequence.' }),
    lucide: z
      .string()
      .exactOptional()
      .openapi({ description: 'A canonical Lucide icon name, such as "leaf".' }),
  })
  .openapi({ required: [] })
  .openapi('MemoViewIcon')

const MemoViewSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the memo view.\n Format: users/{user}/views/{view}',
      }),
    title: z.string().openapi({ description: 'Required. The title of the memo view.' }),
    filter: z
      .string()
      .openapi({
        description:
          'Required. The CEL filter expression for the memo view, using the same\n grammar as the ListMemos `filter` argument. Reuse it by passing this value\n to ListMemos.',
      }),
    icon: MemoViewIconSchema.exactOptional().openapi({
      description:
        'Optional. Display icon. Omit when updating with the "icon" mask to reset to\n the default view icon.',
    }),
  })
  .openapi({
    required: ['title', 'filter'],
    description: "MemoView is a user's saved memo filter.",
  })
  .openapi('MemoView')

const ListMemoViewsResponseSchema = z
  .object({
    memoViews: z.array(MemoViewSchema).exactOptional().openapi({ description: 'The memo views.' }),
  })
  .openapi({ description: 'Response message for UserService.ListMemoViews.', required: [] })
  .openapi('ListMemoViewsResponse')

const ListMemosResponseSchema: z.ZodType<ListMemosResponseType> = z
  .object({
    memos: z.array(MemoSchema).exactOptional().openapi({ description: 'The memos.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for MemoService.ListMemos.', required: [] })
  .openapi('ListMemosResponse')

const ListPersonalAccessTokensResponseSchema = z
  .object({
    personalAccessTokens: z
      .array(PersonalAccessTokenSchema)
      .exactOptional()
      .openapi({ description: 'The personal access tokens, without their token values.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({
    description: 'Response message for UserService.ListPersonalAccessTokens.',
    required: [],
  })
  .openapi('ListPersonalAccessTokensResponse')

const SpaceIconSchema = z
  .object({
    emoji: z.string().exactOptional().openapi({ description: 'A Unicode emoji sequence.' }),
    lucide: z
      .string()
      .exactOptional()
      .openapi({ description: 'A canonical Lucide icon name, such as "leaf".' }),
  })
  .openapi({ description: 'Icon is the display icon of a space.', required: [] })
  .openapi('SpaceIcon')

const SpaceSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Identifier. The resource name of the space.\n Format: spaces/{space}',
      }),
    title: z.string().openapi({ description: 'Required. The human-readable title.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. A description of the space.' }),
    icon: SpaceIconSchema.exactOptional().openapi({
      description:
        'Optional. The display icon. Omit it when updating with the "icon" mask to\n reset to the default space mark.',
    }),
    currentUserRole: z
      .enum(['ROLE_UNSPECIFIED', 'ADMIN', 'USER'])
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          "Output only. The authenticated user's membership role in this space.\n ROLE_UNSPECIFIED when this space is exposed as metadata only.",
      }),
    memberCount: z
      .int32()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Output only. The number of accepted members in this space. Pending\n invitations are excluded. Zero when this space is exposed as metadata only.',
      }),
  })
  .openapi({
    required: ['title'],
    description: 'Space is a collaboration boundary for placed memos.',
  })
  .openapi('Space')

const SpaceInvitationSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Identifier. The resource name of the invitation. The invitation segment\n is the invitee's username.\n Format: spaces/{space}/invitations/{invitation}",
      }),
    invitee: z
      .string()
      .openapi({ description: 'Required. The invited user.\n Format: users/{user}' }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'ADMIN', 'USER'])
      .openapi({
        description: 'Required. The role the user receives after accepting the invitation.',
      }),
    space: SpaceSchema.exactOptional().openapi({
      readOnly: true,
      description:
        'Output only. The space the user is invited to, as metadata only. This lets\n an invitee understand the invitation without membership-based GetSpace\n access.',
    }),
  })
  .openapi({
    required: ['invitee', 'role'],
    description: 'SpaceInvitation is a pending invitation for an existing user to join a space.',
  })
  .openapi('SpaceInvitation')

const ListSpaceInvitationsResponseSchema = z
  .object({
    spaceInvitations: z
      .array(SpaceInvitationSchema)
      .exactOptional()
      .openapi({ description: 'The pending invitations for the space.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for SpaceService.ListSpaceInvitations.', required: [] })
  .openapi('ListSpaceInvitationsResponse')

const SpaceMemberSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Identifier. The resource name of the membership. The member segment is\n the member's username.\n Format: spaces/{space}/members/{member}",
      }),
    user: z.string().openapi({ description: 'Required. The member user.\n Format: users/{user}' }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'ADMIN', 'USER'])
      .openapi({ description: "Required. The member's role within this space." }),
  })
  .openapi({
    required: ['user', 'role'],
    description: "SpaceMember is a user's membership and governance role in a space.",
  })
  .openapi('SpaceMember')

const ListSpaceMembersResponseSchema = z
  .object({
    spaceMembers: z
      .array(SpaceMemberSchema)
      .exactOptional()
      .openapi({ description: 'The members of the space.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for SpaceService.ListSpaceMembers.', required: [] })
  .openapi('ListSpaceMembersResponse')

const ListSpacesResponseSchema = z
  .object({
    spaces: z
      .array(SpaceSchema)
      .exactOptional()
      .openapi({ description: 'The spaces of which the caller is a member.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for SpaceService.ListSpaces.', required: [] })
  .openapi('ListSpacesResponse')

const UserNotificationMemoCommentPayloadSchema = z
  .object({
    memo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The comment memo.\n Format: memos/{memo}' }),
    relatedMemo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The memo that was commented on.\n Format: memos/{memo}' }),
    memoSnippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Preview text of the comment memo.' }),
    relatedMemoSnippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Preview text of the related memo.' }),
  })
  .openapi({
    description: 'MemoCommentPayload holds the details of a MEMO_COMMENT notification.',
    required: [],
  })
  .openapi('UserNotificationMemoCommentPayload')

const UserNotificationMemoMentionPayloadSchema = z
  .object({
    memo: z
      .string()
      .exactOptional()
      .openapi({ description: 'The memo that contains the mention.\n Format: memos/{memo}' }),
    relatedMemo: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The related parent memo when the mention was created in a comment.\n Format: memos/{memo}',
      }),
    memoSnippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Preview text of the memo that contains the mention.' }),
    relatedMemoSnippet: z
      .string()
      .exactOptional()
      .openapi({ description: 'Preview text of the related parent memo.' }),
  })
  .openapi({
    description: 'MemoMentionPayload holds the details of a MEMO_MENTION notification.',
    required: [],
  })
  .openapi('UserNotificationMemoMentionPayload')

const UserNotificationSpaceInvitationPayloadSchema = z
  .object({
    spaceInvitation: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The invitation.\n Format: spaces/{space}/invitations/{invitation}',
      }),
    space: SpaceSchema.exactOptional().openapi({
      description: 'The read-only Space summary carried by the invitation.',
    }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'ADMIN', 'USER'])
      .exactOptional()
      .openapi({ description: 'The role the invitation offers.' }),
    state: z
      .enum(['STATE_UNSPECIFIED', 'PENDING', 'ACCEPTED'])
      .exactOptional()
      .openapi({ description: 'The current state of the invitation for the receiver.' }),
  })
  .openapi({
    description: 'SpaceInvitationPayload holds the details of a SPACE_INVITATION\n notification.',
    required: [],
  })
  .openapi('UserNotificationSpaceInvitationPayload')

const UserNotificationSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          'Identifier. The resource name of the notification.\n Format: users/{user}/notifications/{notification}',
      }),
    sender: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. The user who caused the notification.\n Format: users/{user}',
      }),
    senderUser: UserSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Output only. The sender user details.',
    }),
    type: z
      .enum(['TYPE_UNSPECIFIED', 'MEMO_COMMENT', 'MEMO_MENTION', 'SPACE_INVITATION'])
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The type of the notification.' }),
    memoComment: UserNotificationMemoCommentPayloadSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Output only. Details of a MEMO_COMMENT notification.',
    }),
    memoMention: UserNotificationMemoMentionPayloadSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Output only. Details of a MEMO_MENTION notification.',
    }),
    spaceInvitation: UserNotificationSpaceInvitationPayloadSchema.exactOptional().openapi({
      readOnly: true,
      description: 'Output only. Details of a SPACE_INVITATION notification.',
    }),
    status: z
      .enum(['STATUS_UNSPECIFIED', 'UNREAD', 'ARCHIVED'])
      .exactOptional()
      .openapi({ description: 'Optional. The status of the notification.' }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ readOnly: true, description: 'Output only. The creation timestamp.' }),
  })
  .openapi({ description: 'UserNotification is a notification delivered to a user.', required: [] })
  .openapi('UserNotification')

const ListUserNotificationsResponseSchema = z
  .object({
    notifications: z
      .array(UserNotificationSchema)
      .exactOptional()
      .openapi({ description: 'The notifications.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for UserService.ListUserNotifications.', required: [] })
  .openapi('ListUserNotificationsResponse')

const UserSettingGeneralSettingSchema = z
  .object({
    locale: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The preferred locale of the user.' }),
    memoVisibility: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The default visibility of new memos: PRIVATE, PROTECTED or\n PUBLIC.',
      }),
    theme: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The preferred theme of the user. This references a CSS file in\n the web/public/themes/ directory. If not set, the default theme is used.',
      }),
    saveMediaMetadata: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether the official client should save metadata from future\n media uploads.',
      }),
  })
  .openapi({ description: 'GeneralSetting holds general user preferences.', required: [] })
  .openapi('UserSettingGeneralSetting')

const UserWebhookSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the webhook.\n Format: users/{user}/webhooks/{webhook}',
      }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'A human-readable name for the webhook.' }),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'The URL the webhook request is sent to. Required on create.' }),
    signingSecret: z
      .string()
      .exactOptional()
      .openapi({
        writeOnly: true,
        description:
          'Input only. The secret used to HMAC-SHA256 sign the webhook request body.\n Never returned; use GetUserWebhookSigningSecret to read it.',
      }),
    signingSecretSet: z
      .boolean()
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. Whether a signing secret is configured for this webhook.',
      }),
    createTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. The creation timestamp. Currently never set.',
      }),
    updateTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        readOnly: true,
        description: 'Output only. The last update timestamp. Currently never set.',
      }),
  })
  .openapi({ description: 'UserWebhook is a webhook owned by a user.', required: [] })
  .openapi('UserWebhook')

const UserSettingWebhooksSettingSchema = z
  .object({
    webhooks: z
      .array(UserWebhookSchema)
      .exactOptional()
      .openapi({ description: "The user's webhooks." }),
  })
  .openapi({ description: "WebhooksSetting holds a user's webhooks.", required: [] })
  .openapi('UserSettingWebhooksSetting')

const UserSettingTagMetadataSchema = z
  .object({
    backgroundColor: ColorSchema.exactOptional().openapi({
      description:
        'Optional. The background color of the tag label. When unset, the default\n tag color is used.',
    }),
    blurContent: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Optional. Whether memos with this tag have their content blurred.',
      }),
  })
  .openapi({
    description: 'TagMetadata holds user-specific display rules for a tag.',
    required: [],
  })
  .openapi('UserSettingTagMetadata')

const UserSettingTagsSettingSchema = z
  .object({
    tags: z
      .record(z.string(), UserSettingTagMetadataSchema)
      .exactOptional()
      .openapi({
        description:
          'Optional. Map of tag name pattern to tag metadata. Each key is treated as\n an anchored regular expression (^pattern$).',
      }),
  })
  .openapi({ description: 'TagsSetting holds user-specific tag metadata.', required: [] })
  .openapi('UserSettingTagsSetting')

const UserSettingEditorSettingSchema = z
  .object({
    sourceMode: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Whether the official client\'s memo editor uses source mode,\n which shows and edits memos as Markdown text instead of formatted text.\n The official client calls this "Markdown mode".',
      }),
  })
  .openapi({ description: "EditorSetting holds the user's memo editor preferences.", required: [] })
  .openapi('UserSettingEditorSetting')

const UserSettingSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the user setting. {setting} is the\n setting key, such as GENERAL.\n Format: users/{user}/settings/{setting}',
      }),
    generalSetting: UserSettingGeneralSettingSchema.exactOptional().openapi({
      description: 'The value of the GENERAL setting.',
    }),
    webhooksSetting: UserSettingWebhooksSettingSchema.exactOptional().openapi({
      description: 'The value of the WEBHOOKS setting.',
    }),
    tagsSetting: UserSettingTagsSettingSchema.exactOptional().openapi({
      description: 'The value of the TAGS setting.',
    }),
    editorSetting: UserSettingEditorSettingSchema.exactOptional().openapi({
      description: 'The value of the EDITOR setting.',
    }),
  })
  .openapi({
    description: "UserSetting is one group of a user's preferences, identified by its key.",
    required: [],
  })
  .openapi('UserSetting')

const ListUserSettingsResponseSchema = z
  .object({
    userSettings: z
      .array(UserSettingSchema)
      .exactOptional()
      .openapi({ description: 'The user settings.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for UserService.ListUserSettings.', required: [] })
  .openapi('ListUserSettingsResponse')

const ListUserSpaceInvitationsResponseSchema = z
  .object({
    spaceInvitations: z
      .array(SpaceInvitationSchema)
      .exactOptional()
      .openapi({ description: 'The pending invitations received by the user.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({
    description: 'Response message for SpaceService.ListUserSpaceInvitations.',
    required: [],
  })
  .openapi('ListUserSpaceInvitationsResponse')

const UserStatsMemoTypeStatsSchema = z
  .object({
    linkCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of memos that contain a link.' }),
    codeCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of memos that contain code.' }),
    todoCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of memos that contain a task list.' }),
    undoCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of memos that contain incomplete tasks.' }),
  })
  .openapi({
    description: 'MemoTypeStats counts memos by the kind of content they contain.',
    required: [],
  })
  .openapi('UserStatsMemoTypeStats')

const UserStatsSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the user statistics singleton.\n Format: users/{user}/stats',
      }),
    totalMemoCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The number of counted memos.' }),
    memoTypeStats: UserStatsMemoTypeStatsSchema.exactOptional().openapi({
      description: 'The number of counted memos by content type.',
    }),
    tagCounts: z
      .record(z.string(), z.int32())
      .exactOptional()
      .openapi({ description: 'The number of counted memos per tag.' }),
    pinnedMemos: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The pinned memos among the counted memos.\n Format: memos/{memo}' }),
    memoCreatedTimestamps: z
      .array(z.iso.datetime({ offset: true }))
      .exactOptional()
      .openapi({ description: 'The creation timestamps of the counted memos, one per memo.' }),
    memoUpdatedTimestamps: z
      .array(z.iso.datetime({ offset: true }))
      .exactOptional()
      .openapi({
        description:
          "The latest update timestamps of the counted memos (one per memo, mirrors\n memo_created_timestamps). Used by the activity heatmap when the client's\n view is set to update_time basis.",
      }),
    attachmentStorageBytes: z
      .string()
      .exactOptional()
      .openapi({
        readOnly: true,
        description:
          "Output only. Total persisted attachment size in bytes, including unlinked\n uploads and attachments in all spaces. Excludes temporary uploads and\n derived files. Returned only by GetUserStats for the authenticated user's\n own stats, independently of the request's memo filter.",
      }),
  })
  .openapi({
    description:
      "UserStats is a summary of a user's memos. Comments are counted unless the\n filter excludes them with `parent == null`.",
    required: [],
  })
  .openapi('UserStats')

const ListUserStatsResponseSchema = z
  .object({
    userStats: z
      .array(UserStatsSchema)
      .exactOptional()
      .openapi({ description: 'The statistics, one entry per user.' }),
  })
  .openapi({ description: 'Response message for UserService.ListUserStats.', required: [] })
  .openapi('ListUserStatsResponse')

const ListUserWebhooksResponseSchema = z
  .object({
    webhooks: z.array(UserWebhookSchema).exactOptional().openapi({ description: 'The webhooks.' }),
  })
  .openapi({ description: 'Response message for UserService.ListUserWebhooks.', required: [] })
  .openapi('ListUserWebhooksResponse')

const ListUsersResponseSchema = z
  .object({
    users: z.array(UserSchema).exactOptional().openapi({ description: 'The users.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A token to retrieve the next page. Empty when there are no more pages.',
      }),
  })
  .openapi({ description: 'Response message for UserService.ListUsers.', required: [] })
  .openapi('ListUsersResponse')

const RefreshTokenRequestSchema = z
  .looseObject({})
  .openapi({
    description:
      'Request message for AuthService.RefreshToken.\n It has no fields: the refresh token is read from the HttpOnly cookie.',
  })
  .openapi('RefreshTokenRequest')

const RefreshTokenResponseSchema = z
  .object({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The new short-lived access token.' }),
    accessTokenExpireTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'When the new access token expires.' }),
  })
  .openapi({ description: 'Response message for AuthService.RefreshToken.', required: [] })
  .openapi('RefreshTokenResponse')

const ReorderMemoViewsRequestSchema = z
  .object({
    parent: z
      .string()
      .openapi({
        description: 'Required. The user whose memo views are reordered.\n Format: users/{user}',
      }),
    names: z
      .array(z.string())
      .openapi({
        description:
          "Required. The resource names of all the user's memo views, in the new\n order. The service rejects a list that omits a memo view, repeats one, or\n names one the user does not have.\n Format: users/{user}/views/{view}",
      }),
  })
  .openapi({
    required: ['parent', 'names'],
    description: 'Request message for UserService.ReorderMemoViews.',
  })
  .openapi('ReorderMemoViewsRequest')

const ReorderMemoViewsResponseSchema = z
  .object({
    memoViews: z
      .array(MemoViewSchema)
      .exactOptional()
      .openapi({ description: 'The memo views in their new order.' }),
  })
  .openapi({ description: 'Response message for UserService.ReorderMemoViews.', required: [] })
  .openapi('ReorderMemoViewsResponse')

const SetMemoAttachmentsRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Required. The resource name of the memo.\n Format: memos/{memo}' }),
    attachments: z
      .array(AttachmentSchema)
      .openapi({ description: 'Required. The complete set of attachments for the memo.' }),
  })
  .openapi({
    required: ['name', 'attachments'],
    description: 'Request message for MemoService.SetMemoAttachments.',
  })
  .openapi('SetMemoAttachmentsRequest')

const SetMemoRelationsRequestSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Required. The resource name of the memo.\n Format: memos/{memo}' }),
    relations: z
      .array(MemoRelationSchema)
      .openapi({ description: 'Required. The complete set of relations for the memo.' }),
  })
  .openapi({
    required: ['name', 'relations'],
    description: 'Request message for MemoService.SetMemoRelations.',
  })
  .openapi('SetMemoRelationsRequest')

const SignInRequestPasswordCredentialsSchema = z
  .object({
    username: z.string().openapi({ description: 'Required. The username to sign in with.' }),
    password: z.string().openapi({ description: 'Required. The password to sign in with.' }),
  })
  .openapi({
    required: ['username', 'password'],
    description:
      'PasswordCredentials are a username and password.\n Regular users cannot use them when the instance disallows password sign-in.',
  })
  .openapi('SignInRequestPasswordCredentials')

const SignInRequestSsoCredentialsSchema = z
  .object({
    identityProvider: z
      .string()
      .openapi({
        description:
          'Required. The resource name of the identity provider.\n Format: identity-providers/{idp}',
      }),
    code: z
      .string()
      .openapi({
        description: 'Required. The authorization code returned by the identity provider.',
      }),
    redirectUri: z
      .string()
      .openapi({ description: 'Required. The redirect URI used in the authorization request.' }),
    codeVerifier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The PKCE code verifier (RFC 7636). Set it when the authorization request used a code challenge.',
      }),
  })
  .openapi({
    required: ['identityProvider', 'code', 'redirectUri'],
    description:
      'SsoCredentials are the result of an OAuth2 authorization code flow with an identity provider.\n A first sign-in creates a local user unless the instance disallows user registration.',
  })
  .openapi('SignInRequestSsoCredentials')

const SignInRequestSchema = z
  .object({
    passwordCredentials: SignInRequestPasswordCredentialsSchema.exactOptional().openapi({
      description: 'Username and password credentials.',
    }),
    ssoCredentials: SignInRequestSsoCredentialsSchema.exactOptional().openapi({
      description: 'SSO credentials from an OAuth2 authorization code flow.',
    }),
  })
  .openapi({ description: 'Request message for AuthService.SignIn.', required: [] })
  .openapi('SignInRequest')

const SignInResponseSchema = z
  .object({
    user: UserSchema.exactOptional().openapi({ description: 'The signed-in user.' }),
    accessToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The short-lived access token for API requests.\n Keep it in memory only, not in localStorage.',
      }),
    accessTokenExpireTime: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description: 'When the access token expires.\n Call RefreshToken before this time.',
      }),
  })
  .openapi({ description: 'Response message for AuthService.SignIn.', required: [] })
  .openapi('SignInResponse')

const StatusSchema = z
  .object({
    code: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].',
      }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.',
      }),
    details: z
      .array(GoogleProtobufAnySchema)
      .exactOptional()
      .openapi({
        description:
          'A list of messages that carry the error details.  There is a common set of message types for APIs to use.',
      }),
  })
  .openapi({
    description:
      'The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).',
    required: [],
  })
  .openapi('Status')

const TestInstanceEmailSettingRequestSchema = z
  .object({
    email: NotificationSettingEmailSettingSchema.exactOptional().openapi({
      description:
        'Optional. The SMTP settings to test. If omitted, the stored notification email setting is used. An empty\n password reuses the stored password when the connection settings are unchanged.',
    }),
    recipientEmail: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Optional. The recipient email address. If omitted, the current user's email address is used.",
      }),
  })
  .openapi({
    description: 'Request message for InstanceService.TestInstanceEmailSetting.',
    required: [],
  })
  .openapi('TestInstanceEmailSettingRequest')

const TranscriptionAudioSchema = z
  .object({
    content: z
      .string()
      .exactOptional()
      .openapi({ writeOnly: true, description: 'Input only. Inline audio bytes, at most 25 MiB.' }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URI of the audio content. Reserved for future use; the service rejects requests that set it.',
      }),
    filename: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional. The uploaded filename, at most 255 characters.' }),
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The MIME type of the audio. If empty, the service detects it from the content.',
      }),
  })
  .openapi({
    description: 'TranscriptionAudio is the audio input for a transcription.',
    required: [],
  })
  .openapi('TranscriptionAudio')

const TranscribeRequestSchema = z
  .object({
    audio: TranscriptionAudioSchema.openapi({ description: 'Required. The audio to transcribe.' }),
  })
  .openapi({ required: ['audio'], description: 'Request message for AIService.Transcribe.' })
  .openapi('TranscribeRequest')

const TranscribeResponseSchema = z
  .object({ text: z.string().exactOptional().openapi({ description: 'The transcribed text.' }) })
  .openapi({ description: 'Response message for AIService.Transcribe.', required: [] })
  .openapi('TranscribeResponse')

const UploadAttachmentSpecSchema = z
  .object({
    attachment: AttachmentSchema.openapi({
      description:
        'Required. Metadata for the attachment to create. content must be empty; file bytes are sent in data.',
    }),
    attachmentId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The ID to use for the attachment. If empty, a unique ID is generated.\n Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$',
      }),
    totalSize: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. Total size of the file in bytes before media processing. Zero represents an empty file.',
      }),
    replaceAttachment: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. The name of an existing attachment whose content the finished upload replaces, instead of creating one.\n The attachment keeps its name, memo and creation time; its filename, type, size and media metadata come from this\n upload, and its cached thumbnail is dropped. attachment_id and attachment.memo must be empty. Only the uploader of\n the attachment or an admin may replace it. An external link or part of a motion photo cannot be replaced.\n Format: attachments/{attachment}',
      }),
  })
  .openapi({
    required: ['attachment'],
    description:
      'UploadAttachmentSpec describes the attachment that a new upload creates, or whose content it replaces.',
  })
  .openapi('UploadAttachmentSpec')

const UploadAttachmentRequestSchema = z
  .object({
    spec: UploadAttachmentSpecSchema.exactOptional().openapi({
      description: 'Starts a new upload. The same call may also carry data and finish_write.',
    }),
    uploadId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Continues the upload identified by a previous response.' }),
    writeOffset: z
      .string()
      .openapi({
        description:
          'Required. Zero-based byte offset at which data is written. Must equal the committed size, except when retrying\n the most recently accepted chunk with identical bytes and offset, which is accepted without writing again.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional. File bytes, at most max_chunk_size long. With no data and finish_write false, the call reports\n progress without writing, and write_offset is ignored.',
      }),
    finishWrite: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Optional. Finalize the upload after writing data. The committed size must then equal total_size. Any later call\n for the same upload_id returns the created attachment.',
      }),
  })
  .openapi({
    required: ['writeOffset'],
    description: 'Request message for AttachmentService.UploadAttachment.',
  })
  .openapi('UploadAttachmentRequest')

const UploadAttachmentResponseSchema = z
  .object({
    uploadId: z
      .string()
      .exactOptional()
      .openapi({ description: 'Opaque ID for subsequent calls. This is not a resource name.' }),
    committedSize: z
      .string()
      .exactOptional()
      .openapi({ description: 'Number of file bytes committed so far.' }),
    maxChunkSize: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Maximum number of data bytes accepted in one call.' }),
    attachment: AttachmentSchema.exactOptional().openapi({
      description: 'The created attachment. Set once the upload has been finalized.',
    }),
  })
  .openapi({
    description: 'Response message for AttachmentService.UploadAttachment.',
    required: [],
  })
  .openapi('UploadAttachmentResponse')

const UpsertMemoReactionRequestSchema = z
  .object({
    parent: z
      .string()
      .openapi({ description: 'Required. The resource name of the memo.\n Format: memos/{memo}' }),
    reaction: ReactionSchema.openapi({
      description: 'Required. The reaction to upsert. Only reaction_type is used.',
    }),
  })
  .openapi({
    required: ['parent', 'reaction'],
    description: 'Request message for MemoService.UpsertMemoReaction.',
  })
  .openapi('UpsertMemoReactionRequest')

const UserUsageLimitsSchema = z
  .object({
    memoCount: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of memos the user may have created.' }),
    memoContentBytes: z
      .string()
      .exactOptional()
      .openapi({ description: "The UTF-8 size in bytes of one memo's content." }),
    storageBytes: z
      .string()
      .exactOptional()
      .openapi({ description: "The total size in bytes of the user's uploads." }),
    uploadBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The size in bytes of one uploaded file.' }),
  })
  .openapi({
    description: 'Limits is the limit for each metric. An unset limit is unlimited, as is 0.',
    required: [],
  })
  .openapi('UserUsageLimits')

const UserUsageSchema = z
  .object({
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifier. The resource name of the user usage singleton.\n Format: users/{user}/usage',
      }),
    memoCount: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of memos the user created, including comments, archived\n memos, and memos in Spaces.',
      }),
    storageBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The total size in bytes of the user's uploads, including uploads not\n attached to a memo. External links do not count.",
      }),
    limits: UserUsageLimitsSchema.exactOptional().openapi({
      description:
        'The limit set in effect: the first USAGE_LIMITS entry that names the\n user, or the default. An unset limit is unlimited.',
    }),
    limitIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The position of the entry in effect in the USAGE_LIMITS setting, starting\n at 0. The default is the last entry.',
      }),
  })
  .openapi({
    description: "UserUsage is a user's usage and the limit set in effect for the user.",
    required: [],
  })
  .openapi('UserUsage')

export const postApiAiTranscribeRoute = createRoute({
  method: 'post',
  path: '/api/ai:transcribe',
  tags: ['AIService'],
  description:
    "Transcribe transcribes an audio file with the instance's configured\n transcription provider. The caller must be signed in, and requests are rate limited per user.",
  operationId: 'AIService_Transcribe',
  request: {
    body: { content: { 'application/json': { schema: TranscribeRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TranscribeResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiAttachmentsRoute = createRoute({
  method: 'get',
  path: '/api/attachments',
  tags: ['AttachmentService'],
  description:
    "ListAttachments lists attachments linked to memos the caller can read, plus the caller's unlinked uploads.",
  operationId: 'AttachmentService_ListAttachments',
  request: {
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of attachments to return. The service may return fewer.\n If unspecified, at most 50 attachments are returned. Values above 1000 are coerced to 1000.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Optional. A CEL filter over the results.\n Example: `mime_type == "image/png"` or `filename.contains("test")`.\n Supported operators: ==, !=, <, <=, >, >=, : (contains), in.\n Supported fields: creator, filename, mime_type, create_time, memo_id, space.\n `creator` is the linked memo\'s creator, or the uploader for an unlinked attachment. It supports equality with a\n User resource name.\n `space` is the linked memo\'s Space resource name, or null when the attachment is unlinked or its memo has no\n space. It supports only a non-negated `==` comparison with a Space resource name or null.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            description:
              'Optional. The order to sort results by, such as "create_time desc" or "filename asc". The service does not apply\n it yet.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListAttachmentsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiAttachmentsRoute = createRoute({
  method: 'post',
  path: '/api/attachments',
  tags: ['AttachmentService'],
  description: 'CreateAttachment creates an attachment from inline content.',
  operationId: 'AttachmentService_CreateAttachment',
  request: {
    query: z.object({
      attachmentId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'attachmentId',
            in: 'query',
            description:
              'Optional. The ID to use for the attachment. If empty, a unique ID is generated.\n Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AttachmentSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AttachmentSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiAttachmentsAttachmentRoute = createRoute({
  method: 'get',
  path: '/api/attachments/{attachment}',
  tags: ['AttachmentService'],
  description:
    'GetAttachment gets an attachment by name. An unlinked attachment is visible only to its uploader and admins;\n a linked attachment follows the read access of its memo.',
  operationId: 'AttachmentService_GetAttachment',
  request: {
    params: z.object({
      attachment: z
        .string()
        .openapi({
          param: {
            name: 'attachment',
            in: 'path',
            description: 'The attachment id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AttachmentSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiAttachmentsAttachmentRoute = createRoute({
  method: 'delete',
  path: '/api/attachments/{attachment}',
  tags: ['AttachmentService'],
  description: 'DeleteAttachment deletes an attachment uploaded by the caller.',
  operationId: 'AttachmentService_DeleteAttachment',
  request: {
    params: z.object({
      attachment: z
        .string()
        .openapi({
          param: {
            name: 'attachment',
            in: 'path',
            description: 'The attachment id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiAttachmentsAttachmentRoute = createRoute({
  method: 'patch',
  path: '/api/attachments/{attachment}',
  tags: ['AttachmentService'],
  description:
    'UpdateAttachment updates an attachment. Only `filename` can be updated. The caller must be the uploader or an\n admin.',
  operationId: 'AttachmentService_UpdateAttachment',
  request: {
    params: z.object({
      attachment: z
        .string()
        .openapi({
          param: {
            name: 'attachment',
            in: 'path',
            description: 'The attachment id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description: 'Required. The fields to update. Only `filename` is supported.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AttachmentSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: AttachmentSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiAttachmentsBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/api/attachments:batchDelete',
  tags: ['AttachmentService'],
  description:
    'BatchDeleteAttachments deletes up to 100 attachments in one atomic request. The caller must be the uploader of\n each attachment or an admin.',
  operationId: 'AttachmentService_BatchDeleteAttachments',
  request: {
    body: {
      content: { 'application/json': { schema: BatchDeleteAttachmentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiAttachmentsUploadRoute = createRoute({
  method: 'post',
  path: '/api/attachments:upload',
  tags: ['AttachmentService'],
  description:
    'UploadAttachment uploads a file in bounded chunks. The first call carries the spec and returns an upload_id;\n later calls carry that upload_id. Uploads are bound to the authenticated user, expire after 30 minutes of\n inactivity, and do not survive a server restart.',
  operationId: 'AttachmentService_UploadAttachment',
  request: {
    body: {
      content: { 'application/json': { schema: UploadAttachmentRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: UploadAttachmentResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiAuthMeRoute = createRoute({
  method: 'get',
  path: '/api/auth/me',
  tags: ['AuthService'],
  description:
    "GetCurrentUser returns the authenticated user, similar to OIDC's /userinfo endpoint.\n When the caller is not signed in or the account is no longer active, clears the refresh token cookie and returns\n UNAUTHENTICATED.",
  operationId: 'AuthService_GetCurrentUser',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetCurrentUserResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiAuthRefreshRoute = createRoute({
  method: 'post',
  path: '/api/auth/refresh',
  tags: ['AuthService'],
  description:
    'RefreshToken exchanges the refresh token for a new access token.\n The refresh token is read from the HttpOnly cookie and rotated: the old token is revoked and a new one with a\n fresh 30-day expiry is set in the cookie.\n Public, so it can be called after the access token has expired.',
  operationId: 'AuthService_RefreshToken',
  request: {
    body: {
      content: { 'application/json': { schema: RefreshTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: RefreshTokenResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiAuthSigninRoute = createRoute({
  method: 'post',
  path: '/api/auth/signin',
  tags: ['AuthService'],
  description:
    'SignIn authenticates a user with password or SSO credentials.\n On success, returns a short-lived access token and sets a refresh token in an HttpOnly cookie.\n Public. Attempts are rate limited. Archived users cannot sign in.',
  operationId: 'AuthService_SignIn',
  request: {
    body: { content: { 'application/json': { schema: SignInRequestSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SignInResponseSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiAuthSignoutRoute = createRoute({
  method: 'post',
  path: '/api/auth/signout',
  tags: ['AuthService'],
  description:
    'SignOut ends the current session.\n Revokes the refresh token from the cookie and clears the cookie.',
  operationId: 'AuthService_SignOut',
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiIdentityProvidersRoute = createRoute({
  method: 'get',
  path: '/api/identity-providers',
  tags: ['IdentityProviderService'],
  description:
    'ListIdentityProviders lists identity providers.\n Public, so the sign-in page can show SSO options. Client secrets are never returned.',
  operationId: 'IdentityProviderService_ListIdentityProviders',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListIdentityProvidersResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiIdentityProvidersRoute = createRoute({
  method: 'post',
  path: '/api/identity-providers',
  tags: ['IdentityProviderService'],
  description:
    'CreateIdentityProvider creates an identity provider.\n Requires the admin role. Fails with FAILED_PRECONDITION when the ID belongs to a provider configured by the\n deployment.',
  operationId: 'IdentityProviderService_CreateIdentityProvider',
  request: {
    query: z.object({
      identityProviderId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'identityProviderId',
            in: 'query',
            description:
              'Optional. The ID to use for the identity provider, which becomes the final component of the resource name.\n If empty, the server generates one.\n Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityProviderSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IdentityProviderSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiIdentityProvidersIdentityProviderRoute = createRoute({
  method: 'get',
  path: '/api/identity-providers/{identity-provider}',
  tags: ['IdentityProviderService'],
  description:
    'GetIdentityProvider gets an identity provider.\n The client secret is never returned.',
  operationId: 'IdentityProviderService_GetIdentityProvider',
  request: {
    params: z.object({
      'identity-provider': z
        .string()
        .openapi({
          param: {
            name: 'identity-provider',
            in: 'path',
            description: 'The identity-provider id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IdentityProviderSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiIdentityProvidersIdentityProviderRoute = createRoute({
  method: 'delete',
  path: '/api/identity-providers/{identity-provider}',
  tags: ['IdentityProviderService'],
  description:
    'DeleteIdentityProvider deletes an identity provider.\n Requires the admin role. Providers configured by the deployment cannot be deleted. Fails with\n FAILED_PRECONDITION when password sign-in is disabled for regular users and no other effective provider remains.',
  operationId: 'IdentityProviderService_DeleteIdentityProvider',
  request: {
    params: z.object({
      'identity-provider': z
        .string()
        .openapi({
          param: {
            name: 'identity-provider',
            in: 'path',
            description: 'The identity-provider id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiIdentityProvidersIdentityProviderRoute = createRoute({
  method: 'patch',
  path: '/api/identity-providers/{identity-provider}',
  tags: ['IdentityProviderService'],
  description:
    'UpdateIdentityProvider updates an identity provider.\n Requires the admin role. Providers configured by the deployment cannot be updated.',
  operationId: 'IdentityProviderService_UpdateIdentityProvider',
  request: {
    params: z.object({
      'identity-provider': z
        .string()
        .openapi({
          param: {
            name: 'identity-provider',
            in: 'path',
            description: 'The identity-provider id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'Required. The fields to update. Supported paths: title, identifier_filter, config; other paths are ignored.\n An empty OAuth2 client secret in config keeps the stored secret.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IdentityProviderSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: IdentityProviderSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiInstanceConfigurationRoute = createRoute({
  method: 'get',
  path: '/api/instance/configuration',
  tags: ['InstanceService'],
  description:
    'GetConfigurationStatus gets what declarative configuration manages: the managed resources and the last apply.\n Admin only. It carries resource names and field paths, never a configured value.',
  operationId: 'InstanceService_GetConfigurationStatus',
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ConfigurationStatusSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiInstanceProfileRoute = createRoute({
  method: 'get',
  path: '/api/instance/profile',
  tags: ['InstanceService'],
  description:
    'GetInstanceProfile gets the instance profile. Available without authentication, including on a private instance.',
  operationId: 'InstanceService_GetInstanceProfile',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: InstanceProfileSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiInstanceSettingsNotificationTestEmailRoute = createRoute({
  method: 'post',
  path: '/api/instance/settings/notification:testEmail',
  tags: ['InstanceService'],
  description:
    'TestInstanceEmailSetting sends a test email with the provided or stored SMTP settings. Admin only.',
  operationId: 'InstanceService_TestInstanceEmailSetting',
  request: {
    body: {
      content: { 'application/json': { schema: TestInstanceEmailSettingRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiInstanceSettingsBatchGetRoute = createRoute({
  method: 'post',
  path: '/api/instance/settings:batchGet',
  tags: ['InstanceService'],
  description:
    'BatchGetInstanceSettings gets up to 100 instance settings in request order, with the same access rules as\n GetInstanceSetting. The call fails if any setting cannot be returned.',
  operationId: 'InstanceService_BatchGetInstanceSettings',
  request: {
    body: {
      content: { 'application/json': { schema: BatchGetInstanceSettingsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BatchGetInstanceSettingsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiInstanceStatsRoute = createRoute({
  method: 'get',
  path: '/api/instance/stats',
  tags: ['InstanceService'],
  description:
    'GetInstanceStats gets resource usage statistics for the instance. Admin only. Results are cached for 60 seconds.',
  operationId: 'InstanceService_GetInstanceStats',
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: InstanceStatsSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiInstanceInstanceStarRoute = createRoute({
  method: 'get',
  path: '/api/instance/{instance}/*',
  tags: ['InstanceService'],
  description:
    'GetInstanceSetting gets an instance setting. Available without authentication, except STORAGE and NOTIFICATION,\n which are admin only, and AI, which requires a signed-in user and hides transcription defaults from non-admins.',
  operationId: 'InstanceService_GetInstanceSetting',
  request: {
    params: z.object({
      instance: z
        .string()
        .openapi({
          param: {
            name: 'instance',
            in: 'path',
            description: 'The instance id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: InstanceSettingSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiInstanceInstanceStarRoute = createRoute({
  method: 'patch',
  path: '/api/instance/{instance}/*',
  tags: ['InstanceService'],
  description:
    'UpdateInstanceSetting replaces an instance setting. Admin only. Fields declarative configuration manages cannot be\n changed. Empty write-only credentials keep the stored values.',
  operationId: 'InstanceService_UpdateInstanceSetting',
  request: {
    params: z.object({
      instance: z
        .string()
        .openapi({
          param: {
            name: 'instance',
            in: 'path',
            description: 'The instance id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'Optional. The list of fields to update. Currently ignored; the whole setting is replaced.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: InstanceSettingSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: InstanceSettingSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiMemosRoute = createRoute({
  method: 'get',
  path: '/api/memos',
  tags: ['MemoService'],
  description:
    'ListMemos lists the memos the caller can read, comments included. Narrow\n to top-level memos with the filter `parent == null`. Anonymous callers can\n list only when the instance allows public access.',
  operationId: 'MemoService_ListMemos',
  request: {
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of memos to return. The service may return\n fewer. Defaults to 50; values above 1000 are coerced to 1000.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the\n next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Optional. A CEL expression to filter memos. Combine terms with && and ||.\n Available fields:\n   name (string resource name; match several with\n     `name in ["memos/abc", "memos/def"]`),\n   content (string), creator (string, e.g. "users/1"),\n   created_ts / updated_ts (timestamp), pinned (bool),\n   visibility (string: PRIVATE | PROTECTED | PUBLIC | SPACE),\n   space (string resource name, or null when the memo has no space;\n     supports == and comparisons against null, e.g. space != null),\n   parent (string resource name of the memo this one comments on, or null\n     for a top-level memo; supports == and comparisons against null),\n   tags (list<string>; match with `"work" in tags`, not `tag == "work"`),\n   has_task_list / has_link / has_code / has_incomplete_tasks (bool),\n   has_location (bool; true when the memo has a location attached),\n   has_attachments (bool; true when a file is attached to the memo),\n   has_image (bool; true when the content contains a Markdown image or an\n     image file is attached).\n Note: the time fields here are created_ts / updated_ts, which differ from\n the create_time / update_time names used by order_by.\n Examples:\n   pinned == true && visibility == "PUBLIC"\n   space == "spaces/team" or space == null\n   parent == null (top-level memos only)\n   parent == "memos/abc" (the comments on one memo)\n   tags.exists(t, t == "urgent")\n   content.contains("roadmap") && created_ts > now - duration("168h")',
            schema: { type: 'string' },
            required: false,
          },
        }),
      orderBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'orderBy',
            in: 'query',
            description:
              'Optional. The order to sort results by, as a comma-separated list of\n fields following AIP-132. Defaults to "create_time desc".\n Supported fields: pinned, create_time, update_time, name.\n Example: "pinned desc, create_time desc" or "update_time asc".\n Note: order_by uses create_time / update_time, while the filter\n expression uses created_ts / updated_ts for the same timestamps.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'showDeleted',
            in: 'query',
            description:
              'Optional. Whether to include deleted memos. Currently ignored by the\n server.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      state: z
        .enum(['STATE_UNSPECIFIED', 'NORMAL', 'ARCHIVED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description:
              "Optional. The state of the memos to list. Defaults to NORMAL. Set to\n ARCHIVED to list the caller's own archived memos.",
            schema: {
              enum: ['STATE_UNSPECIFIED', 'NORMAL', 'ARCHIVED'],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMemosResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiMemosRoute = createRoute({
  method: 'post',
  path: '/api/memos',
  tags: ['MemoService'],
  description:
    'CreateMemo creates a memo owned by the authenticated user. The request body\n is a Memo; set its Markdown content and visibility (defaults to PRIVATE).\n Set memo.parent to create a comment on that memo, which must be readable by\n the caller and not archived. Requires authentication.',
  operationId: 'MemoService_CreateMemo',
  request: {
    query: z.object({
      memoId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'memoId',
            in: 'query',
            description:
              'Optional. The ID to use for the memo, which becomes the final segment of\n its resource name. If empty, a unique ID is generated.\n Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemoSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemoSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiMemosDashLinkMetadataRoute = createRoute({
  method: 'get',
  path: '/api/memos/-/linkMetadata',
  tags: ['MemoService'],
  description: 'GetLinkMetadata fetches the title, description, and image of a link.',
  operationId: 'MemoService_GetLinkMetadata',
  request: {
    query: z.object({
      url: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'url',
            in: 'query',
            description: 'Required. The link URL.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: LinkMetadataSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiMemosDashLinkMetadataBatchGetRoute = createRoute({
  method: 'post',
  path: '/api/memos/-/linkMetadata:batchGet',
  tags: ['MemoService'],
  description: 'BatchGetLinkMetadata fetches the metadata of up to 10 links.',
  operationId: 'MemoService_BatchGetLinkMetadata',
  request: {
    body: {
      content: { 'application/json': { schema: BatchGetLinkMetadataRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BatchGetLinkMetadataResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiMemosMemoRoute = createRoute({
  method: 'get',
  path: '/api/memos/{memo}',
  tags: ['MemoService'],
  description: 'GetMemo gets a memo. Requires read access to the memo.',
  operationId: 'MemoService_GetMemo',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemoSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiMemosMemoRoute = createRoute({
  method: 'delete',
  path: '/api/memos/{memo}',
  tags: ['MemoService'],
  description:
    'DeleteMemo deletes the named memo and its comment subtree, including nested\n replies and their owned resources. It removes incident relations for all\n deleted memos. Requires the memo creator or an instance administrator.',
  operationId: 'MemoService_DeleteMemo',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description:
              'Optional. Currently ignored by the server; deletion always includes the\n comment subtree.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiMemosMemoRoute = createRoute({
  method: 'patch',
  path: '/api/memos/{memo}',
  tags: ['MemoService'],
  description:
    'UpdateMemo updates the memo fields listed in update_mask. Requires the memo\n creator or an instance administrator.',
  operationId: 'MemoService_UpdateMemo',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'Required. The fields to update. Supported paths: content, visibility,\n space, pinned, state, create_time, update_time, location, attachments,\n relations.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemoSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemoSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiMemosMemoAttachmentsRoute = createRoute({
  method: 'get',
  path: '/api/memos/{memo}/attachments',
  tags: ['MemoService'],
  description:
    'ListMemoAttachments lists the attachments of a memo. Requires read access\n to the memo.',
  operationId: 'MemoService_ListMemoAttachments',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of attachments to return. The service may\n return fewer. Currently ignored; all attachments are returned.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the\n next page. Currently ignored.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMemoAttachmentsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiMemosMemoAttachmentsRoute = createRoute({
  method: 'patch',
  path: '/api/memos/{memo}/attachments',
  tags: ['MemoService'],
  description:
    'SetMemoAttachments replaces the full set of attachments on a memo with the\n provided list (not an append). Pass the complete desired set; an empty list\n clears all attachments. Idempotent. Requires the memo creator or an\n instance administrator.',
  operationId: 'MemoService_SetMemoAttachments',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetMemoAttachmentsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiMemosMemoReactionsRoute = createRoute({
  method: 'get',
  path: '/api/memos/{memo}/reactions',
  tags: ['MemoService'],
  description:
    'ListMemoReactions lists the reactions on a memo. Requires read access to\n the memo.',
  operationId: 'MemoService_ListMemoReactions',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of reactions to return. The service may\n return fewer. Currently ignored; all reactions are returned.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the\n next page. Currently ignored.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMemoReactionsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiMemosMemoReactionsRoute = createRoute({
  method: 'post',
  path: '/api/memos/{memo}/reactions',
  tags: ['MemoService'],
  description:
    "UpsertMemoReaction adds or updates the authenticated user's reaction on a\n memo. Requires read access to the memo.",
  operationId: 'MemoService_UpsertMemoReaction',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: UpsertMemoReactionRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: ReactionSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiMemosMemoReactionsReactionRoute = createRoute({
  method: 'delete',
  path: '/api/memos/{memo}/reactions/{reaction}',
  tags: ['MemoService'],
  description:
    'DeleteMemoReaction deletes a reaction. Requires the reaction creator or an\n instance administrator.',
  operationId: 'MemoService_DeleteMemoReaction',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      reaction: z
        .string()
        .openapi({
          param: {
            name: 'reaction',
            in: 'path',
            description: 'The reaction id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiMemosMemoRelationsRoute = createRoute({
  method: 'get',
  path: '/api/memos/{memo}/relations',
  tags: ['MemoService'],
  description:
    'ListMemoRelations lists the relations of a memo in both directions.\n Requires read access to the memo.',
  operationId: 'MemoService_ListMemoRelations',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of relations to return. The service may\n return fewer. Defaults to 50; values above 1000 are coerced to 1000.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the\n next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMemoRelationsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiMemosMemoRelationsRoute = createRoute({
  method: 'patch',
  path: '/api/memos/{memo}/relations',
  tags: ['MemoService'],
  description:
    'SetMemoRelations replaces the full set of relations on a memo with the\n provided list. An empty list clears them. Requires the memo creator or an\n instance administrator.',
  operationId: 'MemoService_SetMemoRelations',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: SetMemoRelationsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiMemosMemoSharesRoute = createRoute({
  method: 'get',
  path: '/api/memos/{memo}/shares',
  tags: ['MemoService'],
  description:
    'ListMemoShares lists all share links for a memo. Requires the memo creator\n or an instance administrator.',
  operationId: 'MemoService_ListMemoShares',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMemoSharesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiMemosMemoSharesRoute = createRoute({
  method: 'post',
  path: '/api/memos/{memo}/shares',
  tags: ['MemoService'],
  description:
    'CreateMemoShare creates a share link for a memo. Requires the memo creator\n or an instance administrator. Only active memos without SPACE visibility\n can be shared.',
  operationId: 'MemoService_CreateMemoShare',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemoShareSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemoShareSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiMemosMemoSharesShareRoute = createRoute({
  method: 'delete',
  path: '/api/memos/{memo}/shares/{share}',
  tags: ['MemoService'],
  description:
    'DeleteMemoShare revokes a share link. Requires the memo creator or an\n instance administrator.',
  operationId: 'MemoService_DeleteMemoShare',
  request: {
    params: z.object({
      memo: z
        .string()
        .openapi({
          param: {
            name: 'memo',
            in: 'path',
            description: 'The memo id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      share: z
        .string()
        .openapi({
          param: {
            name: 'share',
            in: 'path',
            description: 'The share id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiSharesShareTokenMemoRoute = createRoute({
  method: 'get',
  path: '/api/shares/{shareToken}/memo',
  tags: ['MemoService'],
  description:
    'GetSharedMemo resolves a share token to its memo. No authentication is\n required. Returns NOT_FOUND if the token is invalid or expired.',
  operationId: 'MemoService_GetSharedMemo',
  request: {
    params: z.object({
      shareToken: z
        .string()
        .openapi({
          param: {
            name: 'shareToken',
            in: 'path',
            description: 'Required. The opaque bearer token from the share URL.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemoSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiSpacesRoute = createRoute({
  method: 'get',
  path: '/api/spaces',
  tags: ['SpaceService'],
  description: 'ListSpaces lists the spaces of which the authenticated caller is a member.',
  operationId: 'SpaceService_ListSpaces',
  request: {
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of spaces to return. The service may return fewer.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSpacesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiSpacesRoute = createRoute({
  method: 'post',
  path: '/api/spaces',
  tags: ['SpaceService'],
  description:
    'CreateSpace creates a space and makes the authenticated caller its first\n administrator.',
  operationId: 'SpaceService_CreateSpace',
  request: {
    query: z.object({
      spaceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'spaceId',
            in: 'query',
            description:
              'Optional. The ID to use for the space, which becomes the final segment of\n its resource name. If empty, a UUID v4 is generated. Must match\n ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SpaceSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SpaceSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiSpacesSpaceRoute = createRoute({
  method: 'get',
  path: '/api/spaces/{space}',
  tags: ['SpaceService'],
  description:
    'GetSpace gets a space of which the authenticated caller is a member.\n Spaces the caller is not a member of are reported as not found.',
  operationId: 'SpaceService_GetSpace',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SpaceSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiSpacesSpaceRoute = createRoute({
  method: 'delete',
  path: '/api/spaces/{space}',
  tags: ['SpaceService'],
  description:
    'DeleteSpace permanently deletes a space and every memo currently placed\n in it. It never follows memo relations to other memos. Only a space\n administrator can delete a space.',
  operationId: 'SpaceService_DeleteSpace',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiSpacesSpaceRoute = createRoute({
  method: 'patch',
  path: '/api/spaces/{space}',
  tags: ['SpaceService'],
  description:
    'UpdateSpace updates space metadata. Only a space administrator can update\n a space.',
  operationId: 'SpaceService_UpdateSpace',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'Required. The fields to update. Supported paths: title, description, icon.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SpaceSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SpaceSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiSpacesSpaceInvitationsRoute = createRoute({
  method: 'get',
  path: '/api/spaces/{space}/invitations',
  tags: ['SpaceService'],
  description:
    'ListSpaceInvitations lists the pending invitations for a space. Only a\n space administrator can list them.',
  operationId: 'SpaceService_ListSpaceInvitations',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of invitations to return. The service may return fewer.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSpaceInvitationsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiSpacesSpaceInvitationsRoute = createRoute({
  method: 'post',
  path: '/api/spaces/{space}/invitations',
  tags: ['SpaceService'],
  description:
    'CreateSpaceInvitation invites an existing active user to a space. Only a\n space administrator can invite. The invitee gets no space access until\n they accept.',
  operationId: 'SpaceService_CreateSpaceInvitation',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SpaceInvitationSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SpaceInvitationSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiSpacesSpaceInvitationsInvitationRoute = createRoute({
  method: 'get',
  path: '/api/spaces/{space}/invitations/{invitation}',
  tags: ['SpaceService'],
  description:
    'GetSpaceInvitation gets one pending invitation. Only the invitee or a\n space administrator can get it.',
  operationId: 'SpaceService_GetSpaceInvitation',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      invitation: z
        .string()
        .openapi({
          param: {
            name: 'invitation',
            in: 'path',
            description: 'The invitation id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SpaceInvitationSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiSpacesSpaceInvitationsInvitationRoute = createRoute({
  method: 'delete',
  path: '/api/spaces/{space}/invitations/{invitation}',
  tags: ['SpaceService'],
  description:
    'DeleteSpaceInvitation revokes a pending invitation. Only a space\n administrator can revoke it.',
  operationId: 'SpaceService_DeleteSpaceInvitation',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      invitation: z
        .string()
        .openapi({
          param: {
            name: 'invitation',
            in: 'path',
            description: 'The invitation id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiSpacesSpaceInvitationsInvitationAcceptRoute = createRoute({
  method: 'post',
  path: '/api/spaces/{space}/invitations/{invitation}:accept',
  tags: ['SpaceService'],
  description:
    'AcceptSpaceInvitation accepts a pending invitation and creates a\n membership with the invited role. Only the invitee can accept it.',
  operationId: 'SpaceService_AcceptSpaceInvitation',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      invitation: z
        .string()
        .openapi({
          param: {
            name: 'invitation',
            in: 'path',
            description: 'The invitation id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: AcceptSpaceInvitationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SpaceMemberSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiSpacesSpaceInvitationsInvitationDeclineRoute = createRoute({
  method: 'post',
  path: '/api/spaces/{space}/invitations/{invitation}:decline',
  tags: ['SpaceService'],
  description:
    'DeclineSpaceInvitation declines a pending invitation without creating a\n membership. Only the invitee can decline it.',
  operationId: 'SpaceService_DeclineSpaceInvitation',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      invitation: z
        .string()
        .openapi({
          param: {
            name: 'invitation',
            in: 'path',
            description: 'The invitation id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DeclineSpaceInvitationRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiSpacesSpaceMembersRoute = createRoute({
  method: 'get',
  path: '/api/spaces/{space}/members',
  tags: ['SpaceService'],
  description:
    'ListSpaceMembers lists the members of a space. The caller must be a member\n of the space.',
  operationId: 'SpaceService_ListSpaceMembers',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of members to return. The service may return fewer.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListSpaceMembersResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiSpacesSpaceMembersMemberRoute = createRoute({
  method: 'get',
  path: '/api/spaces/{space}/members/{member}',
  tags: ['SpaceService'],
  description:
    'GetSpaceMember gets one membership in a space. The caller must be a member\n of the space.',
  operationId: 'SpaceService_GetSpaceMember',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      member: z
        .string()
        .openapi({
          param: {
            name: 'member',
            in: 'path',
            description: 'The member id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SpaceMemberSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiSpacesSpaceMembersMemberRoute = createRoute({
  method: 'delete',
  path: '/api/spaces/{space}/members/{member}',
  tags: ['SpaceService'],
  description:
    'DeleteSpaceMember removes a member. A space administrator can remove any\n member, and a member may delete their own membership to leave the space.\n A space must keep at least one administrator.',
  operationId: 'SpaceService_DeleteSpaceMember',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      member: z
        .string()
        .openapi({
          param: {
            name: 'member',
            in: 'path',
            description: 'The member id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiSpacesSpaceMembersMemberRoute = createRoute({
  method: 'patch',
  path: '/api/spaces/{space}/members/{member}',
  tags: ['SpaceService'],
  description:
    "UpdateSpaceMember changes a member's space role. Only a space administrator\n can change roles, and a space must keep at least one administrator.",
  operationId: 'SpaceService_UpdateSpaceMember',
  request: {
    params: z.object({
      space: z
        .string()
        .openapi({
          param: {
            name: 'space',
            in: 'path',
            description: 'The space id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      member: z
        .string()
        .openapi({
          param: {
            name: 'member',
            in: 'path',
            description: 'The member id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'Required. The fields to update. Must include role. The user path is also\n accepted, but the user must match the existing member and is never changed.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SpaceMemberSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SpaceMemberSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersRoute = createRoute({
  method: 'get',
  path: '/api/users',
  tags: ['UserService'],
  description: 'ListUsers lists users in every state. Only admins may call it.',
  operationId: 'UserService_ListUsers',
  request: {
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of users to return. The service may return\n fewer. If unspecified, at most 50 users are returned. The maximum value is\n 1000; values above 1000 are coerced to 1000.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the\n next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              "Optional. A CEL filter on the users. Only `username == '<username>'` is\n supported.\n Example: \"username == 'steven'\"",
            schema: { type: 'string' },
            required: false,
          },
        }),
      showDeleted: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'showDeleted',
            in: 'query',
            description: 'Optional. Currently ignored; the list includes users in every state.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListUsersResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiUsersRoute = createRoute({
  method: 'post',
  path: '/api/users',
  tags: ['UserService'],
  description:
    'CreateUser creates a user. The first user of an instance becomes an admin.\n Otherwise, unless an admin calls it, the instance must allow user\n registration and password sign-up, and the new user gets the USER role.',
  operationId: 'UserService_CreateUser',
  request: {
    query: z.object({
      userId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'userId',
            in: 'query',
            description:
              'Optional. The resource ID to use for this user. If set, it must equal\n user.username and follow the username format.\n Format: ^[a-zA-Z0-9]([a-zA-Z0-9-]{0,34}[a-zA-Z0-9])?$',
            schema: { type: 'string' },
            required: false,
          },
        }),
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'validateOnly',
            in: 'query',
            description: 'Optional. If set, validate the request but do not create the user.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
      requestId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'requestId',
            in: 'query',
            description: 'Optional. An idempotency token. Currently ignored.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}',
  tags: ['UserService'],
  description: 'GetUser gets a user by resource name.',
  operationId: 'UserService_GetUser',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      readMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'readMask',
            in: 'query',
            description: 'Optional. Currently ignored; all fields are returned.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiUsersUserRoute = createRoute({
  method: 'delete',
  path: '/api/users/{user}',
  tags: ['UserService'],
  description:
    'DeleteUser deletes a user. Users may delete themselves; admins may delete\n anyone. A user who belongs to any space cannot be deleted.',
  operationId: 'UserService_DeleteUser',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      force: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description:
              'Optional. Currently ignored; deleting a user who belongs to any space\n fails with FAILED_PRECONDITION.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiUsersUserRoute = createRoute({
  method: 'patch',
  path: '/api/users/{user}',
  tags: ['UserService'],
  description:
    "UpdateUser updates a user. Users may update themselves; admins may update\n anyone. Changing the password ends the user's other sessions.",
  operationId: 'UserService_UpdateUser',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'Required. The fields to update. Supported paths: username, display_name,\n email, avatar_url, description, password, role, state. role and state\n require an admin.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
      allowMissing: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'allowMissing',
            in: 'query',
            description:
              'Optional. Currently ignored; updating a missing user fails with NOT_FOUND.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserLinkedIdentitiesRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/linkedIdentities',
  tags: ['UserService'],
  description:
    'ListLinkedIdentities lists the SSO identities linked to a user. The user\n and admins may call it.',
  operationId: 'UserService_ListLinkedIdentities',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListLinkedIdentitiesResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiUsersUserLinkedIdentitiesRoute = createRoute({
  method: 'post',
  path: '/api/users/{user}/linkedIdentities',
  tags: ['UserService'],
  description:
    'CreateLinkedIdentity completes an OAuth flow and links the resulting SSO\n identity to the authenticated user, who must be the parent.',
  operationId: 'UserService_CreateLinkedIdentity',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreateLinkedIdentityRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: LinkedIdentitySchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserLinkedIdentitiesLinkedIdentityRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/linkedIdentities/{linkedIdentity}',
  tags: ['UserService'],
  description:
    'GetLinkedIdentity gets an SSO identity linked to a user. The user and\n admins may call it.',
  operationId: 'UserService_GetLinkedIdentity',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      linkedIdentity: z
        .string()
        .openapi({
          param: {
            name: 'linkedIdentity',
            in: 'path',
            description: 'The linkedIdentity id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: LinkedIdentitySchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiUsersUserLinkedIdentitiesLinkedIdentityRoute = createRoute({
  method: 'delete',
  path: '/api/users/{user}/linkedIdentities/{linkedIdentity}',
  tags: ['UserService'],
  description:
    'DeleteLinkedIdentity unlinks an SSO identity from a user. The user and\n admins may call it.',
  operationId: 'UserService_DeleteLinkedIdentity',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      linkedIdentity: z
        .string()
        .openapi({
          param: {
            name: 'linkedIdentity',
            in: 'path',
            description: 'The linkedIdentity id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserNotificationsRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/notifications',
  tags: ['UserService'],
  description:
    "ListUserNotifications lists a user's notifications. Only the user may call\n it. Notifications whose memos or space invitation the user can no longer\n read are left out.",
  operationId: 'UserService_ListUserNotifications',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of notifications to return. The service may\n return fewer. Currently ignored; all notifications are returned in one\n page.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the\n next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description: 'Optional. A filter on the notifications. Currently ignored.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListUserNotificationsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiUsersUserNotificationsNotificationRoute = createRoute({
  method: 'delete',
  path: '/api/users/{user}/notifications/{notification}',
  tags: ['UserService'],
  description:
    'DeleteUserNotification permanently deletes a notification. Only the\n receiver may call it.',
  operationId: 'UserService_DeleteUserNotification',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      notification: z
        .string()
        .openapi({
          param: {
            name: 'notification',
            in: 'path',
            description: 'The notification id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiUsersUserNotificationsNotificationRoute = createRoute({
  method: 'patch',
  path: '/api/users/{user}/notifications/{notification}',
  tags: ['UserService'],
  description:
    "UpdateUserNotification updates a notification's status. Only the receiver\n may call it.",
  operationId: 'UserService_UpdateUserNotification',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      notification: z
        .string()
        .openapi({
          param: {
            name: 'notification',
            in: 'path',
            description: 'The notification id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description: 'Required. The fields to update. Only status is supported.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserNotificationSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserNotificationSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserPersonalAccessTokensRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/personalAccessTokens',
  tags: ['UserService'],
  description:
    "ListPersonalAccessTokens lists a user's personal access tokens (PATs),\n without their token values. PATs are long-lived tokens for API and script\n access, distinct from short-lived JWT access tokens. The user and admins\n may call it.",
  operationId: 'UserService_ListPersonalAccessTokens',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of tokens to return. The service may return\n fewer. Currently ignored; all tokens are returned in one page.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the\n next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListPersonalAccessTokensResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiUsersUserPersonalAccessTokensRoute = createRoute({
  method: 'post',
  path: '/api/users/{user}/personalAccessTokens',
  tags: ['UserService'],
  description:
    'CreatePersonalAccessToken creates a personal access token for a user.\n Only the user may call it. The token value is returned only once, in the\n response.',
  operationId: 'UserService_CreatePersonalAccessToken',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: CreatePersonalAccessTokenRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: CreatePersonalAccessTokenResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiUsersUserPersonalAccessTokensPersonalAccessTokenRoute = createRoute({
  method: 'delete',
  path: '/api/users/{user}/personalAccessTokens/{personalAccessToken}',
  tags: ['UserService'],
  description:
    'DeletePersonalAccessToken deletes a personal access token, which stops\n working immediately. Only the owner may call it.',
  operationId: 'UserService_DeletePersonalAccessToken',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      personalAccessToken: z
        .string()
        .openapi({
          param: {
            name: 'personalAccessToken',
            in: 'path',
            description: 'The personalAccessToken id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserSettingsRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/settings',
  tags: ['UserService'],
  description:
    'ListUserSettings lists the settings of a user. Only the user may call it.\n The GENERAL setting is always included, with defaults when it was never\n saved.',
  operationId: 'UserService_ListUserSettings',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of settings to return. The service may return\n fewer. Currently ignored; all settings are returned in one page.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the\n next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListUserSettingsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserSettingsSettingRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/settings/{setting}',
  tags: ['UserService'],
  description: 'GetUserSetting gets a user setting. Only the user may call it.',
  operationId: 'UserService_GetUserSetting',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      setting: z
        .string()
        .openapi({
          param: {
            name: 'setting',
            in: 'path',
            description: 'The setting id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSettingSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiUsersUserSettingsSettingRoute = createRoute({
  method: 'patch',
  path: '/api/users/{user}/settings/{setting}',
  tags: ['UserService'],
  description:
    'UpdateUserSetting updates a user setting. Only the user may call it, and\n only the GENERAL and TAGS settings can be updated.',
  operationId: 'UserService_UpdateUserSetting',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      setting: z
        .string()
        .openapi({
          param: {
            name: 'setting',
            in: 'path',
            description: 'The setting id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'Required. The fields to update, relative to the setting value. GENERAL\n supports locale, memo_visibility, theme and save_media_metadata; TAGS\n supports tags.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserSettingSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserSettingSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserSpaceInvitationsRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/spaceInvitations',
  tags: ['SpaceService'],
  description:
    "ListUserSpaceInvitations lists the authenticated user's pending space\n invitations. A user cannot list another user's invitations.",
  operationId: 'SpaceService_ListUserSpaceInvitations',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'pageSize',
            in: 'query',
            description:
              'Optional. The maximum number of invitations to return. The service may return fewer.',
            schema: { type: 'integer', format: 'int32' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'pageToken',
            in: 'query',
            description:
              'Optional. A page token from a previous call. Provide it to retrieve the next page.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListUserSpaceInvitationsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserStatsRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/stats',
  tags: ['UserService'],
  description:
    'ListUserStats returns memo statistics for every user who created at least\n one matching memo the caller can read. Use the parent users/- for all\n users, or users/{user} for one user.',
  operationId: 'UserService_ListUserStats',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Optional. A CEL expression selecting the memos to count. Uses the same\n filter syntax as ListMemos.',
            schema: { type: 'string' },
            required: false,
          },
        }),
      state: z
        .enum(['STATE_UNSPECIFIED', 'NORMAL', 'ARCHIVED'])
        .exactOptional()
        .openapi({
          param: {
            name: 'state',
            in: 'query',
            description:
              "Optional. The state of the memos to count. Defaults to NORMAL. ARCHIVED\n counts only the caller's own memos.",
            schema: {
              enum: ['STATE_UNSPECIFIED', 'NORMAL', 'ARCHIVED'],
              type: 'string',
              format: 'enum',
            },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListUserStatsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserUsageRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/usage',
  tags: ['UserService'],
  description:
    "GetUserUsage returns a user's usage and the usage limits in effect for the\n user. Only the user or an admin may call it.",
  operationId: 'UserService_GetUserUsage',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserUsageSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserViewsRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/views',
  tags: ['UserService'],
  description:
    "ListMemoViews lists a user's memo views. Each view is a named, reusable\n CEL filter (see MemoView.filter); pass its filter string directly to the\n ListMemos `filter` argument. Only the user may call it.",
  operationId: 'UserService_ListMemoViews',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListMemoViewsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiUsersUserViewsRoute = createRoute({
  method: 'post',
  path: '/api/users/{user}/views',
  tags: ['UserService'],
  description: 'CreateMemoView creates a memo view for a user. Only the user may call it.',
  operationId: 'UserService_CreateMemoView',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      validateOnly: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'validateOnly',
            in: 'query',
            description: 'Optional. If set, validate the request but do not create the memo view.',
            schema: { type: 'boolean' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemoViewSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemoViewSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserViewsViewRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/views/{view}',
  tags: ['UserService'],
  description: 'GetMemoView gets a memo view. Only the owner may call it.',
  operationId: 'UserService_GetMemoView',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      view: z
        .string()
        .openapi({
          param: {
            name: 'view',
            in: 'path',
            description: 'The view id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemoViewSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiUsersUserViewsViewRoute = createRoute({
  method: 'delete',
  path: '/api/users/{user}/views/{view}',
  tags: ['UserService'],
  description: 'DeleteMemoView deletes a memo view. Only the owner may call it.',
  operationId: 'UserService_DeleteMemoView',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      view: z
        .string()
        .openapi({
          param: {
            name: 'view',
            in: 'path',
            description: 'The view id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiUsersUserViewsViewRoute = createRoute({
  method: 'patch',
  path: '/api/users/{user}/views/{view}',
  tags: ['UserService'],
  description: 'UpdateMemoView updates a memo view. Only the owner may call it.',
  operationId: 'UserService_UpdateMemoView',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      view: z
        .string()
        .openapi({
          param: {
            name: 'view',
            in: 'path',
            description: 'The view id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'Optional. The fields to update. Supported paths: title, filter, icon. The\n service rejects an empty mask.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: MemoViewSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: MemoViewSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiUsersUserViewsReorderRoute = createRoute({
  method: 'post',
  path: '/api/users/{user}/views:reorder',
  tags: ['UserService'],
  description:
    "ReorderMemoViews sets the order of a user's memo views, which is the order\n ListMemoViews returns them in. Only the user may call it.",
  operationId: 'UserService_ReorderMemoViews',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ReorderMemoViewsRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ReorderMemoViewsResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserWebhooksRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/webhooks',
  tags: ['UserService'],
  description: "ListUserWebhooks lists a user's webhooks. Only the user may call it.",
  operationId: 'UserService_ListUserWebhooks',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ListUserWebhooksResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiUsersUserWebhooksRoute = createRoute({
  method: 'post',
  path: '/api/users/{user}/webhooks',
  tags: ['UserService'],
  description:
    'CreateUserWebhook creates a webhook for a user. Only the user may call it.\n The service generates a signing secret when none is given.',
  operationId: 'UserService_CreateUserWebhook',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserWebhookSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserWebhookSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const deleteApiUsersUserWebhooksWebhookRoute = createRoute({
  method: 'delete',
  path: '/api/users/{user}/webhooks/{webhook}',
  tags: ['UserService'],
  description: 'DeleteUserWebhook deletes a webhook. Only the owner may call it.',
  operationId: 'UserService_DeleteUserWebhook',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webhook: z
        .string()
        .openapi({
          param: {
            name: 'webhook',
            in: 'path',
            description: 'The webhook id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: {} },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const patchApiUsersUserWebhooksWebhookRoute = createRoute({
  method: 'patch',
  path: '/api/users/{user}/webhooks/{webhook}',
  tags: ['UserService'],
  description: 'UpdateUserWebhook updates a webhook. Only the owner may call it.',
  operationId: 'UserService_UpdateUserWebhook',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webhook: z
        .string()
        .openapi({
          param: {
            name: 'webhook',
            in: 'path',
            description: 'The webhook id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'updateMask',
            in: 'query',
            description:
              'The fields to update. Supported paths: url, display_name, signing_secret.\n When unset, all of them are updated, skipping an empty url or\n signing_secret.',
            schema: { type: 'string', format: 'field-mask' },
            required: false,
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UserWebhookSchema } }, required: true },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserWebhookSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserWebhooksWebhookGetSigningSecretRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}/webhooks/{webhook}:getSigningSecret',
  tags: ['UserService'],
  description:
    'GetUserWebhookSigningSecret returns the signing secret of a webhook. Only\n the owner may call it. The secret is returned only through this call; it\n is never included in List, Create or Update responses.',
  operationId: 'UserService_GetUserWebhookSigningSecret',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
      webhook: z
        .string()
        .openapi({
          param: {
            name: 'webhook',
            in: 'path',
            description: 'The webhook id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: GetUserWebhookSigningSecretResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const getApiUsersUserGetStatsRoute = createRoute({
  method: 'get',
  path: '/api/users/{user}:getStats',
  tags: ['UserService'],
  description:
    "GetUserStats returns memo statistics for one user, counting the user's\n memos that the caller can read.",
  operationId: 'UserService_GetUserStats',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            description:
              'Optional. A CEL expression selecting the readable memos to count.\n Supports the same fields as ListMemos, including `space` and `parent`.',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: UserStatsSchema } } },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiUsersUserImportMemosRoute = createRoute({
  method: 'post',
  path: '/api/users/{user}:importMemos',
  tags: ['UserService'],
  description:
    "ImportMemos uploads a Memos export file in bounded chunks and imports it\n into the user's memos. The first call carries the spec and returns an\n upload_id; later calls carry that upload_id. A finishing call with\n validate_only returns the plan and keeps the archive staged; a finishing\n call without it imports and returns the report. Uploads are bound to the\n authenticated user, expire after 30 minutes of inactivity, and do not\n survive a server restart.",
  operationId: 'UserService_ImportMemos',
  request: {
    params: z.object({
      user: z
        .string()
        .openapi({
          param: {
            name: 'user',
            in: 'path',
            description: 'The user id.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ImportMemosRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: ImportMemosResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})

export const postApiUsersBatchGetRoute = createRoute({
  method: 'post',
  path: '/api/users:batchGet',
  tags: ['UserService'],
  description:
    'BatchGetUsers gets active users by username. Usernames that match no\n active user are omitted from the response.',
  operationId: 'UserService_BatchGetUsers',
  request: {
    body: {
      content: { 'application/json': { schema: BatchGetUsersRequestSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: BatchGetUsersResponseSchema } },
    },
    default: {
      description: 'Default error response',
      content: { 'application/json': { schema: StatusSchema } },
    },
  },
})
