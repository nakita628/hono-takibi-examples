import { createRoute, z } from '@hono/zod-openapi'

const Blobstore2InfoSchema = z
  .object({
    blobGeneration: z.string().exactOptional().openapi({ description: 'The blob generation id.' }),
    blobId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The blob id, e.g., /blobstore/prod/playground/scotty' }),
    downloadReadHandle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Read handle passed from Bigstore -> Scotty for a GCS download. This is a signed, serialized blobstore2.ReadHandle proto which must never be set outside of Bigstore, and is not applicable to non-GCS media downloads.',
      }),
    readToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The blob read token. Needed to read blobs that have not been replicated. Might not be available until the final call.',
      }),
    uploadMetadataContainer: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Metadata passed from Blobstore -> Scotty for a new GCS upload. This is a signed, serialized blobstore2.BlobMetadataContainer proto which must never be consumed outside of Bigstore, and is not applicable to non-GCS media uploads.',
      }),
  })
  .openapi({ description: 'Information to read/write to blobstore2.', required: [] })
  .openapi('Blobstore2Info')

const ObjectIdSchema = z
  .object({
    bucketName: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the bucket to which this object belongs.' }),
    generation: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Generation of the object. Generations are monotonically increasing across writes, allowing them to be be compared to determine which generation is newer. If this is omitted in a request, then you are requesting the live object. See http://go/bigstore-versions',
      }),
    objectName: z.string().exactOptional().openapi({ description: 'The name of the object.' }),
  })
  .openapi({
    description:
      'This is a copy of the tech.blob.ObjectId proto, which could not be used directly here due to transitive closure issues with JavaScript support; see http://b/8801763.',
    required: [],
  })
  .openapi('ObjectId')

const CompositeMediaSchema = z
  .object({
    blobRef: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.',
      }),
    blobstore2Info: Blobstore2InfoSchema.exactOptional().openapi({
      description:
        'Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.',
    }),
    cosmoBinaryReference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.",
      }),
    crc32cHash: z
      .uint32()
      .exactOptional()
      .openapi({ description: 'crc32.c hash for the payload.' }),
    inline: z
      .string()
      .exactOptional()
      .openapi({ description: 'Media data, set if reference_type is INLINE' }),
    length: z.string().exactOptional().openapi({ description: 'Size of the data, in bytes' }),
    md5Hash: z.string().exactOptional().openapi({ description: 'MD5 hash for the payload.' }),
    objectId: ObjectIdSchema.exactOptional().openapi({
      description: 'Reference to a TI Blob, set if reference_type is BIGSTORE_REF.',
    }),
    path: z
      .string()
      .exactOptional()
      .openapi({ description: 'Path to the data, set if reference_type is PATH' }),
    referenceType: z
      .enum(['PATH', 'BLOB_REF', 'INLINE', 'BIGSTORE_REF', 'COSMO_BINARY_REFERENCE'])
      .exactOptional()
      .openapi({ description: 'Describes what the field reference contains.' }),
    sha1Hash: z.string().exactOptional().openapi({ description: 'SHA-1 hash for the payload.' }),
  })
  .openapi({
    description:
      'A sequence of media data references representing composite data. Introduced to support Bigstore composite objects. For details, visit http://go/bigstore-composites.',
    required: [],
  })
  .openapi('CompositeMedia')

const ContentTypeInfoSchema = z
  .object({
    bestGuess: z
      .string()
      .exactOptional()
      .openapi({ description: "Scotty's best guess of what the content type of the file is." }),
    fromBytes: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content type of the file derived by looking at specific bytes (i.e. "magic bytes") of the actual file.',
      }),
    fromFileName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content type of the file derived from the file extension of the original file name used by the client.',
      }),
    fromHeader: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content type of the file as specified in the request headers, multipart headers, or RUPIO start request.',
      }),
    fromUrlPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The content type of the file derived from the file extension of the URL path. The URL path is assumed to represent a file name (which is typically only true for agents that are providing a REST API).',
      }),
  })
  .openapi({
    description:
      "Detailed Content-Type information from Scotty. The Content-Type of the media will typically be filled in by the header or Scotty's best_guess, but this extended information provides the backend with more information so that it can make a better decision if needed. This is only used on media upload requests from Scotty.",
    required: [],
  })
  .openapi('ContentTypeInfo')

const DiffChecksumsResponseSchema = z
  .object({
    checksumsLocation: CompositeMediaSchema.exactOptional().openapi({
      description:
        'Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding contents to the user. If object_location is filled, the server will calculate the checksums based on the content there and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol.',
    }),
    chunkSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The chunk size of checksums. Must be a multiple of 256KB.' }),
    objectLocation: CompositeMediaSchema.exactOptional().openapi({
      description:
        'If set, calculate the checksums based on the contents and return them to the caller.',
    }),
    objectSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total size of the server object.' }),
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The object version of the object the checksums are being returned for.',
      }),
  })
  .openapi({
    description:
      'Backend response for a Diff get checksums response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.',
    required: [],
  })
  .openapi('DiffChecksumsResponse')

const DiffDownloadResponseSchema = z
  .object({
    objectLocation: CompositeMediaSchema.exactOptional().openapi({
      description: 'The original object location.',
    }),
  })
  .openapi({
    description:
      'Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.',
    required: [],
  })
  .openapi('DiffDownloadResponse')

const DiffUploadRequestSchema = z
  .object({
    checksumsInfo: CompositeMediaSchema.exactOptional().openapi({
      description:
        'The location of the checksums for the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. For details on the format of the checksums, see http://go/scotty-diff-protocol.',
    }),
    objectInfo: CompositeMediaSchema.exactOptional().openapi({
      description:
        'The location of the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received.',
    }),
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object version of the object that is the base version the incoming diff script will be applied to. This field will always be filled in.',
      }),
  })
  .openapi({
    description:
      'A Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.',
    required: [],
  })
  .openapi('DiffUploadRequest')

const DiffUploadResponseSchema = z
  .object({
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload.',
      }),
    originalObject: CompositeMediaSchema.exactOptional().openapi({
      description:
        'The location of the original file for a diff upload request. Must be filled in if responding to an upload start notification.',
    }),
  })
  .openapi({
    description:
      'Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.',
    required: [],
  })
  .openapi('DiffUploadResponse')

const DiffVersionResponseSchema = z
  .object({
    objectSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The total size of the server object.' }),
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({ description: 'The version of the object stored at the server.' }),
  })
  .openapi({
    description:
      'Backend response for a Diff get version response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.',
    required: [],
  })
  .openapi('DiffVersionResponse')

const DownloadParametersSchema = z
  .object({
    allowGzipCompression: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client.",
      }),
    ignoreRange: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty.',
      }),
  })
  .openapi({ description: 'Parameters specific to media downloads.', required: [] })
  .openapi('DownloadParameters')

type MediaType = {
  algorithm?: string
  bigstoreObjectRef?: string
  blobRef?: string
  blobstore2Info?: z.infer<typeof Blobstore2InfoSchema>
  compositeMedia?: z.infer<typeof CompositeMediaSchema>[]
  contentType?: string
  contentTypeInfo?: z.infer<typeof ContentTypeInfoSchema>
  cosmoBinaryReference?: string
  crc32cHash?: number
  diffChecksumsResponse?: z.infer<typeof DiffChecksumsResponseSchema>
  diffDownloadResponse?: z.infer<typeof DiffDownloadResponseSchema>
  diffUploadRequest?: z.infer<typeof DiffUploadRequestSchema>
  diffUploadResponse?: z.infer<typeof DiffUploadResponseSchema>
  diffVersionResponse?: z.infer<typeof DiffVersionResponseSchema>
  downloadParameters?: z.infer<typeof DownloadParametersSchema>
  filename?: string
  hash?: string
  hashVerified?: boolean
  inline?: string
  isPotentialRetry?: boolean
  length?: string
  md5Hash?: string
  mediaId?: string
  objectId?: z.infer<typeof ObjectIdSchema>
  path?: string
  referenceType?:
    | 'PATH'
    | 'BLOB_REF'
    | 'INLINE'
    | 'GET_MEDIA'
    | 'COMPOSITE_MEDIA'
    | 'BIGSTORE_REF'
    | 'DIFF_VERSION_RESPONSE'
    | 'DIFF_CHECKSUMS_RESPONSE'
    | 'DIFF_DOWNLOAD_RESPONSE'
    | 'DIFF_UPLOAD_REQUEST'
    | 'DIFF_UPLOAD_RESPONSE'
    | 'COSMO_BINARY_REFERENCE'
    | 'ARBITRARY_BYTES'
  sha1Hash?: string
  sha256Hash?: string
  timestamp?: string
  token?: string
}

const ActivationOptionsSchema = z
  .object({
    activationUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'HTTPS URL that supports REST semantics. Would be used for requesting activation from partners for given valuable, triggered by the users.',
      }),
    allowReactivation: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag to allow users to make activation call from different device. This allows client to render the activation button enabled even if the activationStatus is ACTIVATED but the requested device is different than the current device.',
      }),
  })
  .openapi({ description: 'ActivationOptions for the class', required: [] })
  .openapi('ActivationOptions')

const ActivationStatusSchema = z
  .object({
    state: z
      .enum(['UNKNOWN_STATE', 'NOT_ACTIVATED', 'not_activated', 'ACTIVATED', 'activated'])
      .exactOptional(),
  })
  .openapi({
    description:
      'The activation status of the object. This field includes activation status if valuable supports activation.',
    required: [],
  })
  .openapi('ActivationStatus')

const DateTimeSchema = z
  .object({
    date: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "An ISO 8601 extended format date/time. Offset may or may not be required (refer to the parent field's documentation). Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the date/time is intended for a physical location in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Providing an offset makes this an absolute instant in time around the world. The date/time will be adjusted based on the user's time zone. For example, a time of `2018-06-19T18:30:00-04:00` will be 18:30:00 for a user in New York and 15:30:00 for a user in Los Angeles. Omitting the offset makes this a local date/time, representing several instants in time around the world. The date/time will always be in the user's current time zone. For example, a time of `2018-06-19T18:30:00` will be 18:30:00 for a user in New York and also 18:30:00 for a user in Los Angeles. This is useful when the same local date/time should apply to many physical locations across several time zones.",
      }),
  })
  .openapi({ required: [] })
  .openapi('DateTime')

const TimeIntervalSchema = z
  .object({
    end: DateTimeSchema.exactOptional().openapi({
      description:
        'End time of the interval. Offset is not required. If an offset is provided and `start` time is set, `start` must also include an offset.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#timeInterval"`.',
      }),
    start: DateTimeSchema.exactOptional().openapi({
      description:
        'Start time of the interval. Offset is not required. If an offset is provided and `end` time is set, `end` must also include an offset.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TimeInterval')

const TranslatedStringSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#translatedString"`.',
      }),
    language: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".',
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({ description: 'The UTF-8 encoded translated string.' }),
  })
  .openapi({ required: [] })
  .openapi('TranslatedString')

const LocalizedStringSchema = z
  .object({
    defaultValue: TranslatedStringSchema.exactOptional().openapi({
      description:
        'Contains the string to be displayed if no appropriate translation is available.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#localizedString"`.',
      }),
    translatedValues: z
      .array(TranslatedStringSchema)
      .exactOptional()
      .openapi({ description: 'Contains the translations for the string.' }),
  })
  .openapi({ required: [] })
  .openapi('LocalizedString')

const MessageSchema = z
  .object({
    body: z.string().exactOptional().openapi({ description: 'The message body.' }),
    displayInterval: TimeIntervalSchema.exactOptional().openapi({
      description:
        'The period of time that the message will be displayed to users. You can define both a `startTime` and `endTime` for each message. A message is displayed immediately after a Wallet Object is inserted unless a `startTime` is set. The message will appear in a list of messages indefinitely if `endTime` is not provided.',
    }),
    header: z.string().exactOptional().openapi({ description: 'The message header.' }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID associated with a message. This field is here to enable ease of management of messages. Notice ID values could possibly duplicate across multiple messages in the same class/instance, and care must be taken to select a reasonable ID for each message.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#walletObjectMessage"`.',
      }),
    localizedBody: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the message body.',
    }),
    localizedHeader: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the message header.',
    }),
    messageType: z
      .enum([
        'MESSAGE_TYPE_UNSPECIFIED',
        'TEXT',
        'text',
        'EXPIRATION_NOTIFICATION',
        'expirationNotification',
      ])
      .exactOptional()
      .openapi({
        description: 'The type of the message. Currently, this can only be set for offers.',
      }),
  })
  .openapi({ description: 'A message that will be displayed with a Valuable', required: [] })
  .openapi('Message')

const AddMessageRequestSchema = z
  .object({ message: MessageSchema.exactOptional() })
  .openapi({ description: 'Resource used when the AddMessage endpoints are called.', required: [] })
  .openapi('AddMessageRequest')

const AirportInfoSchema = z
  .object({
    airportIataCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Three character IATA airport code. This is a required field for `origin` and `destination`. Eg: "SFO"',
      }),
    airportNameOverride: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Optional field that overrides the airport city name defined by IATA. By default, Google takes the `airportIataCode` provided and maps it to the official airport city name defined by IATA. Official IATA airport city names can be found at IATA airport city names website. For example, for the airport IATA code "LTN", IATA website tells us that the corresponding airport city is "London". If this field is not populated, Google would display "London". However, populating this field with a custom name (eg: "London Luton") would override it.',
    }),
    gate: z
      .string()
      .exactOptional()
      .openapi({ description: 'A name of the gate. Eg: "B59" or "59"' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#airportInfo"`.',
      }),
    terminal: z
      .string()
      .exactOptional()
      .openapi({ description: 'Terminal name. Eg: "INTL" or "I"' }),
  })
  .openapi({ required: [] })
  .openapi('AirportInfo')

const ImageUriSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Additional information about the image, which is unused and retained only for backward compatibility.',
      }),
    localizedDescription: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the description, which are unused and retained only for backward compatibility.',
    }),
    uri: z
      .string()
      .exactOptional()
      .openapi({ description: 'The location of the image. URIs must have a scheme.' }),
  })
  .openapi({ required: [] })
  .openapi('ImageUri')

const ImageSchema = z
  .object({
    contentDescription: LocalizedStringSchema.exactOptional().openapi({
      description: 'Description of the image used for accessibility.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#image"`.',
      }),
    sourceUri: ImageUriSchema.exactOptional().openapi({ description: 'The URI for the image.' }),
  })
  .openapi({ description: 'Wrapping type for Google hosted images. Next ID: 7', required: [] })
  .openapi('Image')

const UriSchema = z
  .object({
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The URI's title appearing in the app as text. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens. Note that in some contexts this text is not used, such as when `description` is part of an image.",
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID associated with a uri. This field is here to enable ease of management of uris.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#uri"`.',
      }),
    localizedDescription: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the description. Recommended maximum is 20 characters to ensure full string is displayed on smaller screens.',
    }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location of a web page, image, or other resource. URIs in the `LinksModuleData` module can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address). URIs must have a scheme.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Uri')

const AppLinkDataAppLinkInfoAppTargetSchema = z
  .object({ targetUri: UriSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('AppLinkDataAppLinkInfoAppTarget')

const AppLinkDataAppLinkInfoSchema = z
  .object({
    appLogoImage: ImageSchema.exactOptional().openapi({
      description: 'Optional image to be displayed in the App Link Module',
    }),
    appTarget: AppLinkDataAppLinkInfoAppTargetSchema.exactOptional().openapi({
      description:
        'Url to follow when opening the App Link Module on clients. It will be used by partners to open their webpage or deeplink into their app.',
    }),
    description: LocalizedStringSchema.exactOptional().openapi({
      description: 'String to be displayed in the description of the App Link Module Required',
    }),
    title: LocalizedStringSchema.exactOptional().openapi({
      description: 'String to be displayed in the title of the App Link Module Required',
    }),
  })
  .openapi({ required: [] })
  .openapi('AppLinkDataAppLinkInfo')

const AppLinkDataSchema = z
  .object({
    androidAppLinkInfo: AppLinkDataAppLinkInfoSchema.exactOptional().openapi({
      description:
        'Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the android client.',
    }),
    iosAppLinkInfo: AppLinkDataAppLinkInfoSchema.exactOptional().openapi({
      description:
        'Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the ios client.',
    }),
    webAppLinkInfo: AppLinkDataAppLinkInfoSchema.exactOptional().openapi({
      description:
        'Optional information about the partner app link. If included, the app link link module will be rendered on the valuable details on the web client.',
    }),
  })
  .openapi({ required: [] })
  .openapi('AppLinkData')

const AuthenticationKeySchema = z
  .object({
    id: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Available only to Smart Tap enabled partners. Contact support for additional guidance.',
      }),
    publicKeyPem: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Available only to Smart Tap enabled partners. Contact support for additional guidance.',
      }),
  })
  .openapi({ required: [] })
  .openapi('AuthenticationKey')

const BarcodeSchema = z
  .object({
    alternateText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#barcode"`.',
      }),
    renderEncoding: z
      .enum(['RENDER_ENCODING_UNSPECIFIED', 'UTF_8'])
      .exactOptional()
      .openapi({
        description:
          'The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google.',
      }),
    showCodeText: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Optional text that will be shown when the barcode is hidden behind a click action. This happens in cases where a pass has Smart Tap enabled. If not specified, a default is chosen by Google.',
    }),
    type: z
      .enum([
        'BARCODE_TYPE_UNSPECIFIED',
        'AZTEC',
        'aztec',
        'CODE_39',
        'code39',
        'CODE_128',
        'code128',
        'CODABAR',
        'codabar',
        'DATA_MATRIX',
        'dataMatrix',
        'EAN_8',
        'ean8',
        'EAN_13',
        'ean13',
        'EAN13',
        'ITF_14',
        'itf14',
        'PDF_417',
        'pdf417',
        'PDF417',
        'QR_CODE',
        'qrCode',
        'qrcode',
        'UPC_A',
        'upcA',
        'TEXT_ONLY',
        'textOnly',
      ])
      .exactOptional()
      .openapi({ description: 'The type of barcode.' }),
    value: z.string().exactOptional().openapi({ description: 'The value encoded in the barcode.' }),
  })
  .openapi({ required: [] })
  .openapi('Barcode')

const FieldReferenceSchema = z
  .object({
    dateFormat: z
      .enum([
        'DATE_FORMAT_UNSPECIFIED',
        'DATE_TIME',
        'dateTime',
        'DATE_ONLY',
        'dateOnly',
        'TIME_ONLY',
        'timeOnly',
        'DATE_TIME_YEAR',
        'dateTimeYear',
        'DATE_YEAR',
        'dateYear',
        'YEAR_MONTH',
        'YEAR_MONTH_DAY',
      ])
      .exactOptional()
      .openapi({
        description:
          'Only valid if the `fieldPath` references a date field. Chooses how the date field will be formatted and displayed in the UI.',
      }),
    fieldPath: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Path to the field being referenced, prefixed with "object" or "class" and separated with dots. For example, it may be the string "object.purchaseDetails.purchasePrice".',
      }),
  })
  .openapi({ description: 'Reference definition to use with field overrides.', required: [] })
  .openapi('FieldReference')

const FieldSelectorSchema = z
  .object({
    fields: z
      .array(FieldReferenceSchema)
      .exactOptional()
      .openapi({
        description:
          'If more than one reference is supplied, then the first one that references a non-empty field will be displayed.',
      }),
  })
  .openapi({ description: 'Custom field selector to use with field overrides.', required: [] })
  .openapi('FieldSelector')

const BarcodeSectionDetailSchema = z
  .object({
    fieldSelector: FieldSelectorSchema.exactOptional().openapi({
      description: 'A reference to an existing text-based or image field to display.',
    }),
  })
  .openapi({ required: [] })
  .openapi('BarcodeSectionDetail')

const BoardingAndSeatingInfoSchema = z
  .object({
    boardingDoor: z
      .enum(['BOARDING_DOOR_UNSPECIFIED', 'FRONT', 'front', 'BACK', 'back'])
      .exactOptional()
      .openapi({
        description:
          'Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the `seatClass`. In those cases `boardingDoor` should not be set.',
      }),
    boardingGroup: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of boarding group (or zone) this passenger shall board with. eg: "B" The label for this value will be determined by the `boardingPolicy` field in the `flightClass` referenced by this object.',
      }),
    boardingPosition: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of boarding position. eg: "76"' }),
    boardingPrivilegeImage: ImageSchema.exactOptional().openapi({
      description:
        'A small image shown above the boarding barcode. Airlines can use it to communicate any special boarding privileges. In the event the security program logo is also set, this image might be rendered alongside the logo for that security program.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingInfo"`.',
      }),
    seatAssignment: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The passenger\'s seat assignment. To be used when there is no specific identifier to use in `seatNumber`. eg: "assigned at gate"',
    }),
    seatClass: z
      .string()
      .exactOptional()
      .openapi({ description: 'The value of the seat class. eg: "Economy" or "Economy Plus"' }),
    seatNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value of passenger seat. If there is no specific identifier, use `seatAssignment` instead. eg: "25A"',
      }),
    sequenceNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The sequence number on the boarding pass. This usually matches the sequence in which the passengers checked in. Airline might use the number for manual boarding and bag tags. eg: "49"',
      }),
  })
  .openapi({ required: [] })
  .openapi('BoardingAndSeatingInfo')

const BoardingAndSeatingPolicySchema = z
  .object({
    boardingPolicy: z
      .enum([
        'BOARDING_POLICY_UNSPECIFIED',
        'ZONE_BASED',
        'zoneBased',
        'GROUP_BASED',
        'groupBased',
        'BOARDING_POLICY_OTHER',
        'boardingPolicyOther',
      ])
      .exactOptional()
      .openapi({
        description:
          'Indicates the policy the airline uses for boarding. If unset, Google will default to `zoneBased`.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#boardingAndSeatingPolicy"`.',
      }),
    seatClassPolicy: z
      .enum([
        'SEAT_CLASS_POLICY_UNSPECIFIED',
        'CABIN_BASED',
        'cabinBased',
        'CLASS_BASED',
        'classBased',
        'TIER_BASED',
        'tierBased',
        'SEAT_CLASS_POLICY_OTHER',
        'seatClassPolicyOther',
      ])
      .exactOptional()
      .openapi({
        description:
          'Seating policy which dictates how we display the seat class. If unset, Google will default to `cabinBased`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BoardingAndSeatingPolicy')

const CallbackOptionsSchema = z
  .object({
    updateRequestUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. Deprecated.',
      }),
    url: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CallbackOptions')

const CardBarcodeSectionDetailsSchema = z
  .object({
    firstBottomDetail: BarcodeSectionDetailSchema.exactOptional().openapi({
      description: 'Optional information to display below the barcode.',
    }),
    firstTopDetail: BarcodeSectionDetailSchema.exactOptional().openapi({
      description:
        'Optional information to display above the barcode. If `secondTopDetail` is defined, this will be displayed to the start side of this detail section.',
    }),
    secondTopDetail: BarcodeSectionDetailSchema.exactOptional().openapi({
      description:
        'Optional second piece of information to display above the barcode. If `firstTopDetail` is defined, this will be displayed to the end side of this detail section.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CardBarcodeSectionDetails')

const TemplateItemSchema = z
  .object({
    firstValue: FieldSelectorSchema.exactOptional().openapi({
      description:
        'A reference to a field to display. If both `firstValue` and `secondValue` are populated, they will both appear as one item with a slash between them. For example, values A and B would be shown as "A / B".',
    }),
    predefinedItem: z
      .enum([
        'PREDEFINED_ITEM_UNSPECIFIED',
        'FREQUENT_FLYER_PROGRAM_NAME_AND_NUMBER',
        'frequentFlyerProgramNameAndNumber',
        'FLIGHT_NUMBER_AND_OPERATING_FLIGHT_NUMBER',
        'flightNumberAndOperatingFlightNumber',
      ])
      .exactOptional()
      .openapi({
        description:
          'A predefined item to display. Only one of `firstValue` or `predefinedItem` may be set.',
      }),
    secondValue: FieldSelectorSchema.exactOptional().openapi({
      description:
        'A reference to a field to display. This may only be populated if the `firstValue` field is populated.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TemplateItem')

const CardRowOneItemSchema = z
  .object({
    item: TemplateItemSchema.exactOptional().openapi({
      description: 'The item to be displayed in the row. This item will be automatically centered.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CardRowOneItem')

const CardRowThreeItemsSchema = z
  .object({
    endItem: TemplateItemSchema.exactOptional().openapi({
      description:
        'The item to be displayed at the end of the row. This item will be aligned to the right.',
    }),
    middleItem: TemplateItemSchema.exactOptional().openapi({
      description:
        'The item to be displayed in the middle of the row. This item will be centered between the start and end items.',
    }),
    startItem: TemplateItemSchema.exactOptional().openapi({
      description:
        'The item to be displayed at the start of the row. This item will be aligned to the left.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CardRowThreeItems')

const CardRowTwoItemsSchema = z
  .object({
    endItem: TemplateItemSchema.exactOptional().openapi({
      description:
        'The item to be displayed at the end of the row. This item will be aligned to the right.',
    }),
    startItem: TemplateItemSchema.exactOptional().openapi({
      description:
        'The item to be displayed at the start of the row. This item will be aligned to the left.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CardRowTwoItems')

const CardRowTemplateInfoSchema = z
  .object({
    oneItem: CardRowOneItemSchema.exactOptional().openapi({
      description:
        'Template for a row containing one item. Exactly one of "one_item", "two_items", "three_items" must be set.',
    }),
    threeItems: CardRowThreeItemsSchema.exactOptional().openapi({
      description:
        'Template for a row containing three items. Exactly one of "one_item", "two_items", "three_items" must be set.',
    }),
    twoItems: CardRowTwoItemsSchema.exactOptional().openapi({
      description:
        'Template for a row containing two items. Exactly one of "one_item", "two_items", "three_items" must be set.',
    }),
  })
  .openapi({ required: [] })
  .openapi('CardRowTemplateInfo')

const CardTemplateOverrideSchema = z
  .object({
    cardRowTemplateInfos: z
      .array(CardRowTemplateInfoSchema)
      .exactOptional()
      .openapi({
        description:
          'Template information for rows in the card view. At most three rows are allowed to be specified.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CardTemplateOverride')

const DetailsItemInfoSchema = z
  .object({
    item: TemplateItemSchema.exactOptional().openapi({
      description: 'The item to be displayed in the details list.',
    }),
  })
  .openapi({ required: [] })
  .openapi('DetailsItemInfo')

const DetailsTemplateOverrideSchema = z
  .object({
    detailsItemInfos: z
      .array(DetailsItemInfoSchema)
      .exactOptional()
      .openapi({ description: 'Information for the "nth" item displayed in the details list.' }),
  })
  .openapi({ required: [] })
  .openapi('DetailsTemplateOverride')

const FirstRowOptionSchema = z
  .object({
    fieldOption: FieldSelectorSchema.exactOptional().openapi({
      description: 'A reference to the field to be displayed in the first row.',
    }),
    transitOption: z
      .enum([
        'TRANSIT_OPTION_UNSPECIFIED',
        'ORIGIN_AND_DESTINATION_NAMES',
        'originAndDestinationNames',
        'ORIGIN_AND_DESTINATION_CODES',
        'originAndDestinationCodes',
        'ORIGIN_NAME',
        'originName',
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FirstRowOption')

const ListTemplateOverrideSchema = z
  .object({
    firstRowOption: FirstRowOptionSchema.exactOptional().openapi({
      description:
        'Specifies from a predefined set of options or from a reference to the field what will be displayed in the first row.',
    }),
    secondRowOption: FieldSelectorSchema.exactOptional().openapi({
      description:
        'A reference to the field to be displayed in the second row. This option is only displayed if there are not multiple user objects in a group. If there is a group, the second row will always display a field shared by all objects.',
    }),
    thirdRowOption: FieldSelectorSchema.exactOptional().openapi({
      description:
        'A reference to the field to be displayed in the third row. This option is only displayed if there are not multiple user objects in a group. If there is a group, the third row will always display the number of objects in the group. Eg: "3 passes"',
    }),
  })
  .openapi({ required: [] })
  .openapi('ListTemplateOverride')

const ClassTemplateInfoSchema = z
  .object({
    cardBarcodeSectionDetails: CardBarcodeSectionDetailsSchema.exactOptional().openapi({
      description: 'Specifies extra information to be displayed above and below the barcode.',
    }),
    cardTemplateOverride: CardTemplateOverrideSchema.exactOptional().openapi({
      description: 'Override for the card view.',
    }),
    detailsTemplateOverride: DetailsTemplateOverrideSchema.exactOptional().openapi({
      description: 'Override for the details view (beneath the card view).',
    }),
    listTemplateOverride: ListTemplateOverrideSchema.exactOptional().openapi({
      description: 'Override for the passes list view.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ClassTemplateInfo')

const DeviceContextSchema = z
  .object({
    deviceToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "If set, redemption information will only be returned to the given device upon activation of the object. This should not be used as a stable identifier to trace a user's device. It can change across different passes for the same device or even across different activations for the same device. When setting this, callers must also set has_linked_device on the object being activated.",
      }),
  })
  .openapi({ description: 'Device context associated with the object.', required: [] })
  .openapi('DeviceContext')

const DiscoverableProgramMerchantSigninInfoSchema = z
  .object({
    signinWebsite: UriSchema.exactOptional().openapi({
      description: "The URL to direct the user to for the merchant's signin site.",
    }),
  })
  .openapi({
    description: 'Information about the merchant hosted signin flow for a program.',
    required: [],
  })
  .openapi('DiscoverableProgramMerchantSigninInfo')

const DiscoverableProgramMerchantSignupInfoSchema = z
  .object({
    signupSharedDatas: z
      .array(
        z.enum([
          'SHARED_DATA_TYPE_UNSPECIFIED',
          'FIRST_NAME',
          'LAST_NAME',
          'STREET_ADDRESS',
          'ADDRESS_LINE_1',
          'ADDRESS_LINE_2',
          'ADDRESS_LINE_3',
          'CITY',
          'STATE',
          'ZIPCODE',
          'COUNTRY',
          'EMAIL',
          'PHONE',
        ]),
      )
      .exactOptional()
      .openapi({
        description:
          " User data that is sent in a POST request to the signup website URL. This information is encoded and then shared so that the merchant's website can prefill fields used to enroll the user for the discoverable program.",
      }),
    signupWebsite: UriSchema.exactOptional().openapi({
      description: "The URL to direct the user to for the merchant's signup site.",
    }),
  })
  .openapi({
    description: 'Information about the merchant hosted signup flow for a program.',
    required: [],
  })
  .openapi('DiscoverableProgramMerchantSignupInfo')

const DiscoverableProgramSchema = z
  .object({
    merchantSigninInfo: DiscoverableProgramMerchantSigninInfoSchema.exactOptional().openapi({
      description:
        'Information about the ability to signin and add a valuable for this program through a merchant site. Used when MERCHANT_HOSTED_SIGNIN is enabled.',
    }),
    merchantSignupInfo: DiscoverableProgramMerchantSignupInfoSchema.exactOptional().openapi({
      description:
        'Information about the ability to signup and add a valuable for this program through a merchant site. Used when MERCHANT_HOSTED_SIGNUP is enabled.',
    }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'TRUSTED_TESTERS',
        'trustedTesters',
        'LIVE',
        'live',
        'DISABLED',
        'disabled',
      ])
      .exactOptional()
      .openapi({ description: 'Visibility state of the discoverable program.' }),
  })
  .openapi({
    description:
      'Information about how a class may be discovered and instantiated from within the Android Pay app. This is done by searching for a loyalty or gift card program and scanning or manually entering.',
    required: [],
  })
  .openapi('DiscoverableProgram')

const EventDateTimeSchema = z
  .object({
    customDoorsOpenLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the doors open value (`doorsOpen`) on the card detail view. This should only be used if the default "Doors Open" label or one of the `doorsOpenLabel` options is not sufficient. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used.',
    }),
    doorsOpen: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date/time when the doors open at the venue. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.',
      }),
    doorsOpenLabel: z
      .enum(['DOORS_OPEN_LABEL_UNSPECIFIED', 'DOORS_OPEN', 'doorsOpen', 'GATES_OPEN', 'gatesOpen'])
      .exactOptional()
      .openapi({
        description:
          'The label to use for the doors open value (`doorsOpen`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `doorsOpenLabel` and `customDoorsOpenLabel` may not be set. If neither is set, the label will default to "Doors Open", localized. If the doors open field is unset, this label will not be used.',
      }),
    end: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date/time when the event ends. If the event spans multiple days, it should be the end date/time on the last day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventDateTime"`.',
      }),
    start: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date/time when the event starts. If the event spans multiple days, it should be the start date/time on the first day. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the venue. For example, if the event occurs at the 20th hour of June 5th, 2018 at the venue, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the venue is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EventDateTime')

const EventReservationInfoSchema = z
  .object({
    confirmationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The confirmation code of the event reservation. This may also take the form of an "order number", "confirmation number", "reservation number", or other equivalent.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventReservationInfo"`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('EventReservationInfo')

const EventSeatSchema = z
  .object({
    gate: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The gate the ticket holder should enter to get to their seat, such as "A" or "West". This field is localizable so you may translate words or use different alphabets for the characters in an identifier.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventSeat"`.',
      }),
    row: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The row of the seat, such as "1", E", "BB", or "A5". This field is localizable so you may translate words or use different alphabets for the characters in an identifier.',
    }),
    seat: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The seat number, such as "1", "2", "3", or any other seat identifier. This field is localizable so you may translate words or use different alphabets for the characters in an identifier.',
    }),
    section: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The section of the seat, such as "121". This field is localizable so you may translate words or use different alphabets for the characters in an identifier.',
    }),
  })
  .openapi({ required: [] })
  .openapi('EventSeat')

const ImageModuleDataSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID associated with an image module. This field is here to enable ease of management of image modules.',
      }),
    mainImage: ImageSchema.exactOptional().openapi({ description: 'A 100% width image.' }),
  })
  .openapi({ required: [] })
  .openapi('ImageModuleData')

const LabelValueSchema = z
  .object({
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The label for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.',
      }),
    localizedLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the label. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.',
    }),
    localizedValue: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the value. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.',
    }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value for a specific row and column. Recommended maximum is 15 characters for a two-column layout and 30 characters for a one-column layout.',
      }),
  })
  .openapi({
    description:
      'A pair of text strings to be displayed in the details view. Note we no longer display LabelValue/LabelValueRow as a table, instead a list of items.',
    required: [],
  })
  .openapi('LabelValue')

const LabelValueRowSchema = z
  .object({
    columns: z
      .array(LabelValueSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of labels and values. These will be displayed in a singular column, one after the other, not in multiple columns, despite the field name.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LabelValueRow')

const InfoModuleDataSchema = z
  .object({
    labelValueRows: z
      .array(LabelValueRowSchema)
      .exactOptional()
      .openapi({
        description:
          'A list of collections of labels and values. These will be displayed one after the other in a singular column.',
      }),
    showLastUpdateTime: z.boolean().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('InfoModuleData')

const LinksModuleDataSchema = z
  .object({
    uris: z.array(UriSchema).exactOptional().openapi({ description: 'The list of URIs.' }),
  })
  .openapi({ required: [] })
  .openapi('LinksModuleData')

const LatLongPointSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#latLongPoint"`.',
      }),
    latitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The latitude specified as any value in the range of -90.0 through +90.0, both inclusive. Values outside these bounds will be rejected.',
      }),
    longitude: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The longitude specified in the range -180.0 through +180.0, both inclusive. Values outside these bounds will be rejected.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LatLongPoint')

const ReviewSchema = z
  .object({ comments: z.string().exactOptional() })
  .openapi({ required: [] })
  .openapi('Review')

const SecurityAnimationSchema = z
  .object({
    animationType: z
      .enum(['ANIMATION_UNSPECIFIED', 'FOIL_SHIMMER', 'foilShimmer'])
      .exactOptional()
      .openapi({ description: 'Type of animation.' }),
  })
  .openapi({ required: [] })
  .openapi('SecurityAnimation')

const TextModuleDataSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The body of the Text Module, which is defined as an uninterrupted string. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens.',
      }),
    header: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The header of the Text Module. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID associated with a text module. This field is here to enable ease of management of text modules.',
      }),
    localizedBody: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the body. Recommended maximum length is 500 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedHeader: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the header. Recommended maximum length is 35 characters to ensure full string is displayed on smaller screens.',
    }),
  })
  .openapi({
    description:
      'Data for Text module. All fields are optional. Header will be displayed if available, different types of bodies will be concatenated if they are defined.',
    required: [],
  })
  .openapi('TextModuleData')

const EventVenueSchema = z
  .object({
    address: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The address of the venue, such as "24 Willie Mays Plaza\\nSan Francisco, CA 94107". Address lines are separated by line feed (`\\n`) characters. This is required.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventVenue"`.',
      }),
    name: LocalizedStringSchema.exactOptional().openapi({
      description: 'The name of the venue, such as "AT&T Park". This is required.',
    }),
  })
  .openapi({ required: [] })
  .openapi('EventVenue')

const EventTicketClassSchema = z
  .object({
    allowMultipleUsersPerObject: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.',
      }),
    callbackOptions: CallbackOptionsSchema.exactOptional().openapi({
      description:
        'Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.',
    }),
    classTemplateInfo: ClassTemplateInfoSchema.exactOptional().openapi({
      description:
        'Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.',
    }),
    confirmationCodeLabel: z
      .enum([
        'CONFIRMATION_CODE_LABEL_UNSPECIFIED',
        'CONFIRMATION_CODE',
        'confirmationCode',
        'CONFIRMATION_NUMBER',
        'confirmationNumber',
        'ORDER_NUMBER',
        'orderNumber',
        'RESERVATION_NUMBER',
        'reservationNumber',
      ])
      .exactOptional()
      .openapi({
        description:
          'The label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used.',
      }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
      }),
    customConfirmationCodeLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the confirmation code value (`eventTicketObject.reservationInfo.confirmationCode`) on the card detail view. This should only be used if the default "Confirmation Code" label or one of the `confirmationCodeLabel` options is not sufficient. Both `confirmationCodeLabel` and `customConfirmationCodeLabel` may not be set. If neither is set, the label will default to "Confirmation Code", localized. If the confirmation code field is unset, this label will not be used.',
    }),
    customGateLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. This should only be used if the default "Gate" label or one of the `gateLabel` options is not sufficient. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used.',
    }),
    customRowLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. This should only be used if the default "Row" label or one of the `rowLabel` options is not sufficient. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used.',
    }),
    customSeatLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. This should only be used if the default "Seat" label or one of the `seatLabel` options is not sufficient. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used.',
    }),
    customSectionLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. This should only be used if the default "Section" label or one of the `sectionLabel` options is not sufficient. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used.',
    }),
    dateTime: EventDateTimeSchema.exactOptional().openapi({
      description: 'The date & time information of the event.',
    }),
    enableSmartTap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    eventId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the `classId` (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable).',
      }),
    eventName: LocalizedStringSchema.exactOptional().openapi({
      description: 'Required. The name of the event, such as "LA Dodgers at SF Giants".',
    }),
    finePrint: LocalizedStringSchema.exactOptional().openapi({
      description: 'The fine print, terms, or conditions of the ticket.',
    }),
    gateLabel: z
      .enum(['GATE_LABEL_UNSPECIFIED', 'GATE', 'gate', 'DOOR', 'door', 'ENTRANCE', 'entrance'])
      .exactOptional()
      .openapi({
        description:
          'The label to use for the gate value (`eventTicketObject.seatInfo.gate`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `gateLabel` and `customGateLabel` may not be set. If neither is set, the label will default to "Gate", localized. If the gate field is unset, this label will not be used.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    homepageUri: UriSchema.exactOptional().openapi({
      description:
        "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    issuerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketClass"`.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the object, both will be displayed.',
    }),
    localizedIssuerName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    logo: ImageSchema.exactOptional().openapi({
      description:
        'The logo image of the ticket. This image is displayed in the card detail view of the app.',
    }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    multipleDevicesAndHoldersAllowedStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'MULTIPLE_HOLDERS',
        'multipleHolders',
        'ONE_USER_ALL_DEVICES',
        'oneUserAllDevices',
        'ONE_USER_ONE_DEVICE',
        'oneUserOneDevice',
      ])
      .exactOptional()
      .openapi({
        description:
          'Identifies whether multiple users and devices will save the same object referencing this class.',
      }),
    redemptionIssuers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    review: ReviewSchema.exactOptional().openapi({
      description:
        'The review comments set by the platform when a class is marked `approved` or `rejected`.',
    }),
    reviewStatus: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'UNDER_REVIEW',
        'underReview',
        'APPROVED',
        'approved',
        'REJECTED',
        'rejected',
        'DRAFT',
        'draft',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.',
      }),
    rowLabel: z
      .enum(['ROW_LABEL_UNSPECIFIED', 'ROW', 'row'])
      .exactOptional()
      .openapi({
        description:
          'The label to use for the row value (`eventTicketObject.seatInfo.row`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `rowLabel` and `customRowLabel` may not be set. If neither is set, the label will default to "Row", localized. If the row field is unset, this label will not be used.',
      }),
    seatLabel: z
      .enum(['SEAT_LABEL_UNSPECIFIED', 'SEAT', 'seat'])
      .exactOptional()
      .openapi({
        description:
          'The label to use for the seat value (`eventTicketObject.seatInfo.seat`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `seatLabel` and `customSeatLabel` may not be set. If neither is set, the label will default to "Seat", localized. If the seat field is unset, this label will not be used.',
      }),
    sectionLabel: z
      .enum(['SECTION_LABEL_UNSPECIFIED', 'SECTION', 'section', 'THEATER', 'theater'])
      .exactOptional()
      .openapi({
        description:
          'The label to use for the section value (`eventTicketObject.seatInfo.section`) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both `sectionLabel` and `customSectionLabel` may not be set. If neither is set, the label will default to "Section", localized. If the section field is unset, this label will not be used.',
      }),
    securityAnimation: SecurityAnimationSchema.exactOptional().openapi({
      description:
        'Optional information about the security animation. If this is set a security animation will be rendered on pass details.',
    }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    venue: EventVenueSchema.exactOptional().openapi({ description: 'Event venue details.' }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
    viewUnlockRequirement: z
      .enum([
        'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
        'UNLOCK_NOT_REQUIRED',
        'UNLOCK_REQUIRED_TO_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'View Unlock Requirement options for the event ticket.' }),
    wordMark: ImageSchema.exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('EventTicketClass')

const EventTicketClassAddMessageResponseSchema = z
  .object({
    resource: EventTicketClassSchema.exactOptional().openapi({
      description: 'The updated EventTicketClass resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('EventTicketClassAddMessageResponse')

const PaginationSchema = z
  .object({
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#pagination"`.',
      }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'Page token to send to fetch the next page.' }),
    resultsPerPage: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Number of results returned in this page.' }),
  })
  .openapi({ required: [] })
  .openapi('Pagination')

const EventTicketClassListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(EventTicketClassSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('EventTicketClassListResponse')

const MoneySchema = z
  .object({
    currencyCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The currency code, such as "USD" or "EUR."' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#money"`.',
      }),
    micros: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unit of money amount in micros. For example, $1 USD would be represented as 1000000 micros.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Money')

const GroupingInfoSchema = z
  .object({
    groupingId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Optional grouping ID for grouping the passes with the same ID visually together. Grouping with different types of passes is allowed.',
      }),
    sortIndex: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Optional index for sorting the passes when they are grouped with other passes. Passes with lower sort index are shown before passes with higher sort index. If unspecified, the value is assumed to be INT_MAX. For two passes with the same sort index, the sorting behavior is undefined.',
      }),
  })
  .openapi({ required: [] })
  .openapi('GroupingInfo')

const PassConstraintsSchema = z
  .object({
    screenshotEligibility: z
      .enum(['SCREENSHOT_ELIGIBILITY_UNSPECIFIED', 'ELIGIBLE', 'INELIGIBLE'])
      .exactOptional()
      .openapi({ description: 'The screenshot eligibility for the pass.' }),
  })
  .openapi({
    description: 'Container for any constraints that may be placed on passes.',
    required: [],
  })
  .openapi('PassConstraints')

const RotatingBarcodeTotpDetailsTotpParametersSchema = z
  .object({
    key: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The secret key used for the TOTP value generation, encoded as a Base16 string.',
      }),
    valueLength: z
      .int32()
      .exactOptional()
      .openapi({ description: 'The length of the TOTP value in decimal digits.' }),
  })
  .openapi({
    description:
      'Configuration for the key and value length. See https://www.rfc-editor.org/rfc/rfc4226#section-5.3',
    required: [],
  })
  .openapi('RotatingBarcodeTotpDetailsTotpParameters')

const RotatingBarcodeTotpDetailsSchema = z
  .object({
    algorithm: z
      .enum(['TOTP_ALGORITHM_UNSPECIFIED', 'TOTP_SHA1'])
      .exactOptional()
      .openapi({ description: 'The TOTP algorithm used to generate the OTP.' }),
    parameters: z
      .array(RotatingBarcodeTotpDetailsTotpParametersSchema)
      .exactOptional()
      .openapi({
        description:
          'The TOTP parameters for each of the {totp_value_*} substitutions. The TotpParameters at index n is used for the {totp_value_n} substitution.',
      }),
    periodMillis: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The time interval used for the TOTP value generation, in milliseconds.',
      }),
  })
  .openapi({
    description:
      'Configuration for the time-based OTP substitutions. See https://tools.ietf.org/html/rfc6238',
    required: [],
  })
  .openapi('RotatingBarcodeTotpDetails')

const RotatingBarcodeSchema = z
  .object({
    alternateText: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An optional text that will override the default text that shows under the barcode. This field is intended for a human readable equivalent of the barcode value, used when the barcode cannot be scanned.',
      }),
    renderEncoding: z
      .enum(['RENDER_ENCODING_UNSPECIFIED', 'UTF_8'])
      .exactOptional()
      .openapi({
        description:
          'The render encoding for the barcode. When specified, barcode is rendered in the given encoding. Otherwise best known encoding is chosen by Google.',
      }),
    showCodeText: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Optional text that will be shown when the barcode is hidden behind a click action. This happens in cases where a pass has Smart Tap enabled. If not specified, a default is chosen by Google.',
    }),
    totpDetails: RotatingBarcodeTotpDetailsSchema.exactOptional().openapi({
      description: 'Details used to evaluate the {totp_value_n} substitutions.',
    }),
    type: z
      .enum([
        'BARCODE_TYPE_UNSPECIFIED',
        'AZTEC',
        'aztec',
        'CODE_39',
        'code39',
        'CODE_128',
        'code128',
        'CODABAR',
        'codabar',
        'DATA_MATRIX',
        'dataMatrix',
        'EAN_8',
        'ean8',
        'EAN_13',
        'ean13',
        'EAN13',
        'ITF_14',
        'itf14',
        'PDF_417',
        'pdf417',
        'PDF417',
        'QR_CODE',
        'qrCode',
        'qrcode',
        'UPC_A',
        'upcA',
        'TEXT_ONLY',
        'textOnly',
      ])
      .exactOptional()
      .openapi({ description: 'The type of this barcode.' }),
    valuePattern: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String encoded barcode value. This string supports the following substitutions: * {totp_value_n}: Replaced with the TOTP value (see TotpDetails.parameters). * {totp_timestamp_millis}: Replaced with the timestamp (millis since epoch) at which the barcode was generated. * {totp_timestamp_seconds}: Replaced with the timestamp (seconds since epoch) at which the barcode was generated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('RotatingBarcode')

const EventTicketObjectSchema = z
  .object({
    appLinkData: AppLinkDataSchema.exactOptional().openapi({
      description: 'Optional information about the partner app link.',
    }),
    barcode: BarcodeSchema.exactOptional().openapi({ description: 'The barcode type and value.' }),
    classId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.',
      }),
    classReference: EventTicketClassSchema.exactOptional().openapi({
      description:
        'A copy of the inherited fields of the parent class. These fields are retrieved during a GET.',
    }),
    disableExpirationNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.',
      }),
    faceValue: MoneySchema.exactOptional().openapi({
      description:
        'The face value of the ticket, matching what would be printed on a physical version of the ticket.',
    }),
    groupingInfo: GroupingInfoSchema.exactOptional().openapi({
      description: 'Information that controls how passes are grouped together.',
    }),
    hasLinkedDevice: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.',
      }),
    hasUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object has users. This field is set by the platform.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#eventTicketObject"`.',
      }),
    linkedOfferIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of offer objects linked to this event ticket. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the class, both will be displayed.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    passConstraints: PassConstraintsSchema.exactOptional().openapi({
      description: 'Pass constraints for the object.',
    }),
    reservationInfo: EventReservationInfoSchema.exactOptional().openapi({
      description:
        'Reservation details for this ticket. This is expected to be shared amongst all tickets that were purchased in the same order.',
    }),
    rotatingBarcode: RotatingBarcodeSchema.exactOptional().openapi({
      description: 'The rotating barcode type and value.',
    }),
    seatInfo: EventSeatSchema.exactOptional().openapi({
      description: 'Seating details for this ticket.',
    }),
    smartTapRedemptionValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACTIVE',
        'active',
        'COMPLETED',
        'completed',
        'EXPIRED',
        'expired',
        'INACTIVE',
        'inactive',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.',
      }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    ticketHolderName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the ticket holder, if the ticket is assigned to a person. E.g. "John Doe" or "Jane Doe".',
      }),
    ticketNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The number of the ticket. This can be a unique identifier across all tickets in an issuer's system, all tickets for the event (e.g. XYZ1234512345), or all tickets in the order (1, 2, 3, etc.).",
      }),
    ticketType: LocalizedStringSchema.exactOptional().openapi({
      description: 'The type of the ticket, such as "Adult" or "Child", or "VIP" or "Standard".',
    }),
    validTimeInterval: TimeIntervalSchema.exactOptional().openapi({
      description:
        "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
    }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
  })
  .openapi({ required: [] })
  .openapi('EventTicketObject')

const EventTicketObjectAddMessageResponseSchema = z
  .object({
    resource: EventTicketObjectSchema.exactOptional().openapi({
      description: 'The updated EventTicketObject resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('EventTicketObjectAddMessageResponse')

const EventTicketObjectListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(EventTicketObjectSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('EventTicketObjectListResponse')

const ExpiryNotificationSchema = z
  .object({
    enableNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object needs to have expiry notification enabled.',
      }),
  })
  .openapi({
    description:
      'Indicates that the issuer would like GooglePay to send expiry notifications 2 days prior to the card expiration.',
    required: [],
  })
  .openapi('ExpiryNotification')

const FlightCarrierSchema = z
  .object({
    airlineAllianceLogo: ImageSchema.exactOptional().openapi({
      description:
        'A logo for the airline alliance, displayed above the QR code that the passenger scans to board.',
    }),
    airlineLogo: ImageSchema.exactOptional().openapi({
      description:
        'A logo for the airline described by carrierIataCode and localizedAirlineName. This logo will be rendered at the top of the detailed card view.',
    }),
    airlineName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A localized name of the airline specified by carrierIataCode. If unset, `issuer_name` or `localized_issuer_name` from `FlightClass` will be used for display purposes. eg: "Swiss Air" for "LX"',
    }),
    carrierIataCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Two character IATA airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIcaoCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "LX" for Swiss Air',
      }),
    carrierIcaoCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Three character ICAO airline code of the marketing carrier (as opposed to operating carrier). Exactly one of this or `carrierIataCode` needs to be provided for `carrier` and `operatingCarrier`. eg: "EZY" for Easy Jet',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightCarrier"`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FlightCarrier')

const FlightHeaderSchema = z
  .object({
    carrier: FlightCarrierSchema.exactOptional().openapi({
      description:
        'Information about airline carrier. This is a required property of `flightHeader`.',
    }),
    flightNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The flight number without IATA carrier code. This field should contain only digits. This is a required property of `flightHeader`. eg: "123"',
      }),
    flightNumberDisplayOverride: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Override value to use for flight number. The default value used for display purposes is carrier + flight_number. If a different value needs to be shown to passengers, use this field to override the default behavior. eg: "XX1234 / YY576"',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightHeader"`.',
      }),
    operatingCarrier: FlightCarrierSchema.exactOptional().openapi({
      description: 'Information about operating airline carrier.',
    }),
    operatingFlightNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The flight number used by the operating carrier without IATA carrier code. This field should contain only digits. eg: "234"',
      }),
  })
  .openapi({ required: [] })
  .openapi('FlightHeader')

const FlightClassSchema = z
  .object({
    allowMultipleUsersPerObject: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.',
      }),
    boardingAndSeatingPolicy: BoardingAndSeatingPolicySchema.exactOptional().openapi({
      description:
        'Policies for boarding and seating. These will inform which labels will be shown to users.',
    }),
    callbackOptions: CallbackOptionsSchema.exactOptional().openapi({
      description:
        'Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.',
    }),
    classTemplateInfo: ClassTemplateInfoSchema.exactOptional().openapi({
      description:
        'Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.',
    }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
      }),
    destination: AirportInfoSchema.exactOptional().openapi({
      description: 'Required. Destination airport.',
    }),
    enableSmartTap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    flightHeader: FlightHeaderSchema.exactOptional().openapi({
      description: 'Required. Information about the flight carrier and number.',
    }),
    flightStatus: z
      .enum([
        'FLIGHT_STATUS_UNSPECIFIED',
        'SCHEDULED',
        'scheduled',
        'ACTIVE',
        'active',
        'LANDED',
        'landed',
        'CANCELLED',
        'cancelled',
        'REDIRECTED',
        'redirected',
        'DIVERTED',
        'diverted',
      ])
      .exactOptional()
      .openapi({
        description:
          'Status of this flight. If unset, Google will compute status based on data from other sources, such as FlightStats, etc. Note: Google-computed status will not be returned in API responses.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    homepageUri: UriSchema.exactOptional().openapi({
      description:
        "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    issuerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightClass"`.',
      }),
    languageOverride: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this field is present, boarding passes served to a user\'s device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the object, both will be displayed.',
    }),
    localBoardingDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The boarding time as it would be printed on the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.',
      }),
    localEstimatedOrActualArrivalDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The estimated time the aircraft plans to reach the destination gate (not the runway) or the actual time it reached the gate. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already arrived at the gate. Google will use it to inform the user that the flight has arrived at the gate. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.',
      }),
    localEstimatedOrActualDepartureDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The estimated time the aircraft plans to pull from the gate or the actual time the aircraft already pulled from the gate. Note: This is not the runway time. This field should be set if at least one of the below is true: - It differs from the scheduled time. Google will use it to calculate the delay. - The aircraft already pulled from the gate. Google will use it to inform the user when the flight actually departed. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport. If this is not set, Google will set it based on data from other sources.',
      }),
    localGateClosingDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The gate closing time as it would be printed on the boarding pass. Do not set this field if you do not want to print it in the boarding pass. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.',
      }),
    localScheduledArrivalDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The scheduled time the aircraft plans to reach the destination gate (not the runway). Note: This field should not change too close to the flight time. For updates to departure times (delays, etc), please set `localEstimatedOrActualArrivalDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on arrival airport. If this is not set, Google will set it based on data from other sources.',
      }),
    localScheduledDepartureDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The scheduled date and time when the aircraft is expected to depart the gate (not the runway) Note: This field should not change too close to the departure time. For updates to departure times (delays, etc), please set `localEstimatedOrActualDepartureDateTime`. This is an ISO 8601 extended format date/time without an offset. Time may be specified up to millisecond precision. eg: `2027-03-05T06:30:00` This should be the local date/time at the airport (not a UTC time). Google will reject the request if UTC offset is provided. Time zones will be calculated by Google based on departure airport.',
      }),
    localizedIssuerName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    multipleDevicesAndHoldersAllowedStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'MULTIPLE_HOLDERS',
        'multipleHolders',
        'ONE_USER_ALL_DEVICES',
        'oneUserAllDevices',
        'ONE_USER_ONE_DEVICE',
        'oneUserOneDevice',
      ])
      .exactOptional()
      .openapi({
        description:
          'Identifies whether multiple users and devices will save the same object referencing this class.',
      }),
    origin: AirportInfoSchema.exactOptional().openapi({ description: 'Required. Origin airport.' }),
    redemptionIssuers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    review: ReviewSchema.exactOptional().openapi({
      description:
        'The review comments set by the platform when a class is marked `approved` or `rejected`.',
    }),
    reviewStatus: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'UNDER_REVIEW',
        'underReview',
        'APPROVED',
        'approved',
        'REJECTED',
        'rejected',
        'DRAFT',
        'draft',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.',
      }),
    securityAnimation: SecurityAnimationSchema.exactOptional().openapi({
      description:
        'Optional information about the security animation. If this is set a security animation will be rendered on pass details.',
    }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
    viewUnlockRequirement: z
      .enum([
        'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
        'UNLOCK_NOT_REQUIRED',
        'UNLOCK_REQUIRED_TO_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'View Unlock Requirement options for the boarding pass.' }),
    wordMark: ImageSchema.exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('FlightClass')

const FlightClassAddMessageResponseSchema = z
  .object({
    resource: FlightClassSchema.exactOptional().openapi({
      description: 'The updated FlightClass resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('FlightClassAddMessageResponse')

const FlightClassListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(FlightClassSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('FlightClassListResponse')

const FrequentFlyerInfoSchema = z
  .object({
    frequentFlyerNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Frequent flyer number. Required for each nested object of kind `walletobjects#frequentFlyerInfo`.',
      }),
    frequentFlyerProgramName: LocalizedStringSchema.exactOptional().openapi({
      description: 'Frequent flyer program name. eg: "Lufthansa Miles & More"',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#frequentFlyerInfo"`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('FrequentFlyerInfo')

const ReservationInfoSchema = z
  .object({
    confirmationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Confirmation code needed to check into this flight. This is the number that the passenger would enter into a kiosk at the airport to look up the flight and print a boarding pass.',
      }),
    eticketNumber: z.string().exactOptional().openapi({ description: 'E-ticket number.' }),
    frequentFlyerInfo: FrequentFlyerInfoSchema.exactOptional().openapi({
      description: 'Frequent flyer membership information.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#reservationInfo"`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('ReservationInfo')

const FlightObjectSchema = z
  .object({
    appLinkData: AppLinkDataSchema.exactOptional().openapi({
      description: 'Optional information about the partner app link.',
    }),
    barcode: BarcodeSchema.exactOptional().openapi({ description: 'The barcode type and value.' }),
    boardingAndSeatingInfo: BoardingAndSeatingInfoSchema.exactOptional().openapi({
      description: 'Passenger specific information about boarding and seating.',
    }),
    classId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.',
      }),
    classReference: FlightClassSchema.exactOptional().openapi({
      description:
        'A copy of the inherited fields of the parent class. These fields are retrieved during a GET.',
    }),
    disableExpirationNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for Flights.',
      }),
    groupingInfo: GroupingInfoSchema.exactOptional().openapi({
      description: 'Information that controls how passes are grouped together.',
    }),
    hasLinkedDevice: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.',
      }),
    hasUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object has users. This field is set by the platform.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#flightObject"`.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the class, both will be displayed.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    passConstraints: PassConstraintsSchema.exactOptional().openapi({
      description: 'Pass constraints for the object.',
    }),
    passengerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. Passenger name as it would appear on the boarding pass. eg: "Dave M Gahan" or "Gahan/Dave" or "GAHAN/DAVEM"',
      }),
    reservationInfo: ReservationInfoSchema.exactOptional().openapi({
      description: 'Required. Information about flight reservation.',
    }),
    rotatingBarcode: RotatingBarcodeSchema.exactOptional().openapi({
      description: 'The rotating barcode type and value.',
    }),
    securityProgramLogo: ImageSchema.exactOptional().openapi({
      description: 'An image for the security program that applies to the passenger.',
    }),
    smartTapRedemptionValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACTIVE',
        'active',
        'COMPLETED',
        'completed',
        'EXPIRED',
        'expired',
        'INACTIVE',
        'inactive',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.',
      }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    validTimeInterval: TimeIntervalSchema.exactOptional().openapi({
      description:
        "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
    }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
  })
  .openapi({ required: [] })
  .openapi('FlightObject')

const FlightObjectAddMessageResponseSchema = z
  .object({
    resource: FlightObjectSchema.exactOptional().openapi({
      description: 'The updated FlightObject resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('FlightObjectAddMessageResponse')

const FlightObjectListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(FlightObjectSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('FlightObjectListResponse')

const GenericClassSchema = z
  .object({
    callbackOptions: CallbackOptionsSchema.exactOptional().openapi({
      description:
        'Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.',
    }),
    classTemplateInfo: ClassTemplateInfoSchema.exactOptional().openapi({
      description:
        'Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.',
    }),
    enableSmartTap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Available only to Smart Tap enabled partners. Contact support for additional guidance.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique identifier for the class. This ID must be unique across all from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.',
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. If `imageModulesData` is also defined on the object, both will be displayed. Only one of the image from class and one from object level will be rendered when both set.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If `linksModuleData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.',
    }),
    multipleDevicesAndHoldersAllowedStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'MULTIPLE_HOLDERS',
        'multipleHolders',
        'ONE_USER_ALL_DEVICES',
        'oneUserAllDevices',
        'ONE_USER_ONE_DEVICE',
        'oneUserOneDevice',
      ])
      .exactOptional()
      .openapi({
        description:
          'Identifies whether multiple users and devices will save the same object referencing this class.',
      }),
    redemptionIssuers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    securityAnimation: SecurityAnimationSchema.exactOptional().openapi({
      description:
        'Optional information about the security animation. If this is set a security animation will be rendered on pass details.',
    }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If `textModulesData` is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.',
      }),
    viewUnlockRequirement: z
      .enum([
        'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
        'UNLOCK_NOT_REQUIRED',
        'UNLOCK_REQUIRED_TO_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'View Unlock Requirement options for the generic pass.' }),
  })
  .openapi({ description: 'Generic Class', required: [] })
  .openapi('GenericClass')

const GenericClassListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(GenericClassSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({
    description:
      'List response which contains the list of all generic classes for a given issuer ID.',
    required: [],
  })
  .openapi('GenericClassListResponse')

const UpcomingNotificationSchema = z
  .object({
    enableNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object needs to have upcoming notification enabled.',
      }),
  })
  .openapi({
    description:
      'Indicates that the issuer would like GooglePay send an upcoming card validity notification 1 day before card becomes valid/usable.',
    required: [],
  })
  .openapi('UpcomingNotification')

const NotificationsSchema = z
  .object({
    expiryNotification: ExpiryNotificationSchema.exactOptional().openapi({
      description: 'A notification would be triggered at a specific time before the card expires.',
    }),
    upcomingNotification: UpcomingNotificationSchema.exactOptional().openapi({
      description:
        'A notification would be triggered at a specific time before the card becomes usable.',
    }),
  })
  .openapi({
    description:
      'Indicates if the object needs to have notification enabled. We support only one of ExpiryNotification/UpcomingNotification. `expiryNotification` takes precedence over `upcomingNotification`. In other words if `expiryNotification` is set, we ignore the `upcomingNotification` field.',
    required: [],
  })
  .openapi('Notifications')

const GenericObjectSchema = z
  .object({
    appLinkData: AppLinkDataSchema.exactOptional().openapi({
      description:
        'Information about the partner app link. The maximum number of these fields displayed is 10.',
    }),
    barcode: BarcodeSchema.exactOptional().openapi({
      description:
        'The barcode type and value. If pass does not have a barcode, we can allow the issuer to set Barcode.alternate_text and display just that.',
    }),
    cardTitle: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Required. The header of the pass. This is usually the Business name such as "XXX Gym", "AAA Insurance". This field is required and appears in the header row at the very top of the pass.',
    }),
    classId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you.',
      }),
    genericType: z
      .literal('GENERIC_TYPE_UNSPECIFIED')
      .exactOptional()
      .openapi({ description: 'Specify which `GenericType` the card belongs to. Deprecated.' }),
    groupingInfo: GroupingInfoSchema.exactOptional().openapi({
      description: 'Information that controls how passes are grouped together.',
    }),
    hasUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object has users. This field is set by the platform.',
      }),
    header: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Required. The title of the pass, such as "50% off coupon" or "Library card" or "Voucher". This field is required and appears in the title row of the pass detail view.',
    }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Banner image displayed on the front of the card if present. The image will be displayed at 100% width.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.',
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. Only one of the image from class and one from object level will be rendered when both set.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If `linksModuleData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.',
    }),
    logo: ImageSchema.exactOptional().openapi({
      description:
        'The logo image of the pass. This image is displayed in the card detail view in upper left, and also on the list/thumbnail view. If the logo is not present, the first letter of `cardTitle` would be shown as logo.',
    }),
    notifications: NotificationsSchema.exactOptional().openapi({
      description: 'The notification settings that are enabled for this object.',
    }),
    passConstraints: PassConstraintsSchema.exactOptional().openapi({
      description: 'Pass constraints for the object.',
    }),
    rotatingBarcode: RotatingBarcodeSchema.exactOptional().openapi({
      description: 'The rotating barcode settings/details.',
    }),
    smartTapRedemptionValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACTIVE',
        'active',
        'COMPLETED',
        'completed',
        'EXPIRED',
        'expired',
        'INACTIVE',
        'inactive',
      ])
      .exactOptional()
      .openapi({
        description:
          'The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section. If this is not provided, the object would be considered `ACTIVE`.',
      }),
    subheader: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The title label of the pass, such as location where this pass can be used. Appears right above the title in the title row in the pass detail view.',
    }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If `textModulesData` is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object.',
      }),
    validTimeInterval: TimeIntervalSchema.exactOptional().openapi({
      description:
        "The time period this object will be considered valid or usable. When the time period is passed, the object will be considered expired, which will affect the rendering on user's devices.",
    }),
  })
  .openapi({ description: 'Generic Object Next ID: 119', required: [] })
  .openapi('GenericObject')

const GenericObjectListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(GenericObjectSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({
    description:
      'List response which contains the list of all generic objects for a given issuer ID.',
    required: [],
  })
  .openapi('GenericObjectListResponse')

const GiftCardClassSchema = z
  .object({
    allowBarcodeRedemption: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Determines whether the merchant supports gift card redemption using barcode. If true, app displays a barcode for the gift card on the Gift card details screen. If false, a barcode is not displayed.',
      }),
    allowMultipleUsersPerObject: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.',
      }),
    callbackOptions: CallbackOptionsSchema.exactOptional().openapi({
      description:
        'Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.',
    }),
    cardNumberLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label to display for the card number, such as "Card Number".' }),
    classTemplateInfo: ClassTemplateInfoSchema.exactOptional().openapi({
      description:
        'Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.',
    }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
      }),
    enableSmartTap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    eventNumberLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label to display for event number, such as "Target Event #".' }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    homepageUri: UriSchema.exactOptional().openapi({
      description:
        "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    issuerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardClass"`.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the object, both will be displayed.',
    }),
    localizedCardNumberLabel: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the card_number_label.',
    }),
    localizedEventNumberLabel: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the event_number_label.',
    }),
    localizedIssuerName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedMerchantName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the merchant_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedPinLabel: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the pin_label.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    merchantName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Merchant name, such as "Adam\'s Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    multipleDevicesAndHoldersAllowedStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'MULTIPLE_HOLDERS',
        'multipleHolders',
        'ONE_USER_ALL_DEVICES',
        'oneUserAllDevices',
        'ONE_USER_ONE_DEVICE',
        'oneUserOneDevice',
      ])
      .exactOptional()
      .openapi({
        description:
          'Identifies whether multiple users and devices will save the same object referencing this class.',
      }),
    pinLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The label to display for the PIN, such as "4-digit PIN".' }),
    programLogo: ImageSchema.exactOptional().openapi({
      description:
        'The logo of the gift card program or company. This logo is displayed in both the details and list views of the app.',
    }),
    redemptionIssuers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    review: ReviewSchema.exactOptional().openapi({
      description:
        'The review comments set by the platform when a class is marked `approved` or `rejected`.',
    }),
    reviewStatus: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'UNDER_REVIEW',
        'underReview',
        'APPROVED',
        'approved',
        'REJECTED',
        'rejected',
        'DRAFT',
        'draft',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.',
      }),
    securityAnimation: SecurityAnimationSchema.exactOptional().openapi({
      description:
        'Optional information about the security animation. If this is set a security animation will be rendered on pass details.',
    }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
    viewUnlockRequirement: z
      .enum([
        'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
        'UNLOCK_NOT_REQUIRED',
        'UNLOCK_REQUIRED_TO_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'View Unlock Requirement options for the gift card.' }),
    wordMark: ImageSchema.exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('GiftCardClass')

const GiftCardClassAddMessageResponseSchema = z
  .object({
    resource: GiftCardClassSchema.exactOptional().openapi({
      description: 'The updated GiftCardClass resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GiftCardClassAddMessageResponse')

const GiftCardClassListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(GiftCardClassSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('GiftCardClassListResponse')

const GiftCardObjectSchema = z
  .object({
    appLinkData: AppLinkDataSchema.exactOptional().openapi({
      description: 'Optional information about the partner app link.',
    }),
    balance: MoneySchema.exactOptional().openapi({ description: "The card's monetary balance." }),
    balanceUpdateTime: DateTimeSchema.exactOptional().openapi({
      description:
        'The date and time when the balance was last updated. Offset is required. If balance is updated and this property is not provided, system will default to the current time.',
    }),
    barcode: BarcodeSchema.exactOptional().openapi({ description: 'The barcode type and value.' }),
    cardNumber: z.string().exactOptional().openapi({ description: "Required. The card's number." }),
    classId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.',
      }),
    classReference: GiftCardClassSchema.exactOptional().openapi({
      description:
        'A copy of the inherited fields of the parent class. These fields are retrieved during a GET.',
    }),
    disableExpirationNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.',
      }),
    eventNumber: z
      .string()
      .exactOptional()
      .openapi({
        description: "The card's event number, an optional field used by some gift cards.",
      }),
    groupingInfo: GroupingInfoSchema.exactOptional().openapi({
      description: 'Information that controls how passes are grouped together.',
    }),
    hasLinkedDevice: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.',
      }),
    hasUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object has users. This field is set by the platform.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#giftCardObject"`.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the class, both will be displayed.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    passConstraints: PassConstraintsSchema.exactOptional().openapi({
      description: 'Pass constraints for the object.',
    }),
    pin: z.string().exactOptional().openapi({ description: "The card's PIN." }),
    rotatingBarcode: RotatingBarcodeSchema.exactOptional().openapi({
      description: 'The rotating barcode type and value.',
    }),
    smartTapRedemptionValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACTIVE',
        'active',
        'COMPLETED',
        'completed',
        'EXPIRED',
        'expired',
        'INACTIVE',
        'inactive',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.',
      }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    validTimeInterval: TimeIntervalSchema.exactOptional().openapi({
      description:
        "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
    }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
  })
  .openapi({ required: [] })
  .openapi('GiftCardObject')

const GiftCardObjectAddMessageResponseSchema = z
  .object({
    resource: GiftCardObjectSchema.exactOptional().openapi({
      description: 'The updated GiftCardObject resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('GiftCardObjectAddMessageResponse')

const GiftCardObjectListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(GiftCardObjectSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('GiftCardObjectListResponse')

const IssuerContactInfoSchema = z
  .object({
    alertsEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Email addresses which will receive alerts.' }),
    email: z
      .string()
      .exactOptional()
      .openapi({ description: 'The primary contact email address.' }),
    name: z.string().exactOptional().openapi({ description: 'The primary contact name.' }),
    phone: z.string().exactOptional().openapi({ description: 'The primary contact phone number.' }),
  })
  .openapi({ required: [] })
  .openapi('IssuerContactInfo')

const SmartTapMerchantDataSchema = z
  .object({
    authenticationKeys: z
      .array(AuthenticationKeySchema)
      .exactOptional()
      .openapi({
        description:
          'Available only to Smart Tap enabled partners. Contact support for additional guidance.',
      }),
    smartTapMerchantId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Available only to Smart Tap enabled partners. Contact support for additional guidance.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SmartTapMerchantData')

const IssuerSchema = z
  .object({
    contactInfo: IssuerContactInfoSchema.exactOptional().openapi({
      description: 'Issuer contact information.',
    }),
    homepageUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "URL for the issuer's home page." }),
    issuerId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for an issuer account. This is automatically generated when the issuer is inserted.',
      }),
    name: z.string().exactOptional().openapi({ description: 'The account name of the issuer.' }),
    smartTapMerchantData: SmartTapMerchantDataSchema.exactOptional().openapi({
      description:
        'Available only to Smart Tap enabled partners. Contact support for additional guidance.',
    }),
  })
  .openapi({ required: [] })
  .openapi('Issuer')

const IssuerListResponseSchema = z
  .object({
    resources: z
      .array(IssuerSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('IssuerListResponse')

const SignUpInfoSchema = z
  .object({
    classId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the class the user can sign up for.' }),
  })
  .openapi({ required: [] })
  .openapi('SignUpInfo')

const IssuerToUserInfoSchema = z
  .object({
    action: z.enum(['ACTION_UNSPECIFIED', 'S2AP', 's2ap', 'SIGN_UP', 'signUp']).exactOptional(),
    signUpInfo: SignUpInfoSchema.exactOptional(),
    url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Currently not used, consider deprecating.' }),
    value: z.string().exactOptional().openapi({ description: 'JSON web token for action S2AP.' }),
  })
  .openapi({ required: [] })
  .openapi('IssuerToUserInfo')

const LoyaltyClassSchema = z
  .object({
    accountIdLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account ID label, such as "Member ID." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.',
      }),
    accountNameLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The account name label, such as "Member Name." Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.',
      }),
    allowMultipleUsersPerObject: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.',
      }),
    callbackOptions: CallbackOptionsSchema.exactOptional().openapi({
      description:
        'Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.',
    }),
    classTemplateInfo: ClassTemplateInfoSchema.exactOptional().openapi({
      description:
        'Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.',
    }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
      }),
    discoverableProgram: DiscoverableProgramSchema.exactOptional().openapi({
      description:
        'Information about how the class may be discovered and instantiated from within the Google Pay app.',
    }),
    enableSmartTap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether this class supports Smart Tap. The `redemptionIssuers` and one of object level `smartTapRedemptionLevel`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    homepageUri: UriSchema.exactOptional().openapi({
      description:
        "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    issuerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyClass"`.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the object, both will be displayed.',
    }),
    localizedAccountIdLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the account_id_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedAccountNameLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the account_name_label. Recommended maximum length is 15 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedIssuerName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedProgramName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the program_name. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedRewardsTier: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the rewards_tier. Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedRewardsTierLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the rewards_tier_label. Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedSecondaryRewardsTier: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the secondary_rewards_tier.',
    }),
    localizedSecondaryRewardsTierLabel: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the secondary_rewards_tier_label.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    multipleDevicesAndHoldersAllowedStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'MULTIPLE_HOLDERS',
        'multipleHolders',
        'ONE_USER_ALL_DEVICES',
        'oneUserAllDevices',
        'ONE_USER_ONE_DEVICE',
        'oneUserOneDevice',
      ])
      .exactOptional()
      .openapi({
        description:
          'Identifies whether multiple users and devices will save the same object referencing this class.',
      }),
    programLogo: ImageSchema.exactOptional().openapi({
      description:
        'Required. The logo of the loyalty program or company. This logo is displayed in both the details and list views of the app.',
    }),
    programName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The program name, such as "Adam\'s Apparel". The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens.',
      }),
    redemptionIssuers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and one of object level `smartTapRedemptionValue`, barcode.value`, or `accountId` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    review: ReviewSchema.exactOptional().openapi({
      description:
        'The review comments set by the platform when a class is marked `approved` or `rejected`.',
    }),
    reviewStatus: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'UNDER_REVIEW',
        'underReview',
        'APPROVED',
        'approved',
        'REJECTED',
        'rejected',
        'DRAFT',
        'draft',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.',
      }),
    rewardsTier: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The rewards tier, such as "Gold" or "Platinum." Recommended maximum length is 7 characters to ensure full string is displayed on smaller screens.',
      }),
    rewardsTierLabel: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The rewards tier label, such as "Rewards Tier." Recommended maximum length is 9 characters to ensure full string is displayed on smaller screens.',
      }),
    secondaryRewardsTier: z
      .string()
      .exactOptional()
      .openapi({ description: 'The secondary rewards tier, such as "Gold" or "Platinum."' }),
    secondaryRewardsTierLabel: z
      .string()
      .exactOptional()
      .openapi({ description: 'The secondary rewards tier label, such as "Rewards Tier."' }),
    securityAnimation: SecurityAnimationSchema.exactOptional().openapi({
      description:
        'Optional information about the security animation. If this is set a security animation will be rendered on pass details.',
    }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
    viewUnlockRequirement: z
      .enum([
        'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
        'UNLOCK_NOT_REQUIRED',
        'UNLOCK_REQUIRED_TO_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'View Unlock Requirement options for the loyalty card.' }),
    wordMark: ImageSchema.exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyClass')

const LoyaltyPointsBalanceSchema = z
  .object({
    double: z
      .float64()
      .exactOptional()
      .openapi({
        description:
          'The double form of a balance. Only one of these subtypes (string, int, double, money) should be populated.',
      }),
    int: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The integer form of a balance. Only one of these subtypes (string, int, double, money) should be populated.',
      }),
    money: MoneySchema.exactOptional().openapi({
      description:
        'The money form of a balance. Only one of these subtypes (string, int, double, money) should be populated.',
    }),
    string: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The string form of a balance. Only one of these subtypes (string, int, double, money) should be populated.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyPointsBalance')

const LoyaltyPointsSchema = z
  .object({
    balance: LoyaltyPointsBalanceSchema.exactOptional().openapi({
      description:
        'The account holder\'s loyalty point balance, such as "500" or "$10.00". Recommended maximum length is 7 characters. This is a required field of `loyaltyPoints` and `secondaryLoyaltyPoints`.',
    }),
    label: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The loyalty points label, such as "Points". Recommended maximum length is 9 characters.',
      }),
    localizedLabel: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the label. Recommended maximum length is 9 characters.',
    }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyPoints')

const LoyaltyObjectSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The loyalty account identifier. Recommended maximum length is 20 characters.',
      }),
    accountName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The loyalty account holder name, such as "John Smith." Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
      }),
    appLinkData: AppLinkDataSchema.exactOptional().openapi({
      description: 'Optional information about the partner app link.',
    }),
    barcode: BarcodeSchema.exactOptional().openapi({ description: 'The barcode type and value.' }),
    classId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.',
      }),
    classReference: LoyaltyClassSchema.exactOptional().openapi({
      description:
        'A copy of the inherited fields of the parent class. These fields are retrieved during a GET.',
    }),
    disableExpirationNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.',
      }),
    groupingInfo: GroupingInfoSchema.exactOptional().openapi({
      description: 'Information that controls how passes are grouped together.',
    }),
    hasLinkedDevice: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.',
      }),
    hasUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object has users. This field is set by the platform.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#loyaltyObject"`.',
      }),
    linkedOfferIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of offer objects linked to this loyalty card. The offer objects must already exist. Offer object IDs should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the class, both will be displayed.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    loyaltyPoints: LoyaltyPointsSchema.exactOptional().openapi({
      description: 'The loyalty reward points label, balance, and type.',
    }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    passConstraints: PassConstraintsSchema.exactOptional().openapi({
      description: 'Pass constraints for the object.',
    }),
    rotatingBarcode: RotatingBarcodeSchema.exactOptional().openapi({
      description: 'The rotating barcode type and value.',
    }),
    secondaryLoyaltyPoints: LoyaltyPointsSchema.exactOptional().openapi({
      description:
        'The secondary loyalty reward points label, balance, and type. Shown in addition to the primary loyalty points.',
    }),
    smartTapRedemptionValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. If this value is not set but the class level fields `enableSmartTap` and `redemptionIssuers` are set up correctly, the `barcode.value` or the `accountId` fields are used as fallback if present.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACTIVE',
        'active',
        'COMPLETED',
        'completed',
        'EXPIRED',
        'expired',
        'INACTIVE',
        'inactive',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.',
      }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    validTimeInterval: TimeIntervalSchema.exactOptional().openapi({
      description:
        "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
    }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyObject')

const OfferClassSchema = z
  .object({
    allowMultipleUsersPerObject: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.',
      }),
    callbackOptions: CallbackOptionsSchema.exactOptional().openapi({
      description:
        'Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.',
    }),
    classTemplateInfo: ClassTemplateInfoSchema.exactOptional().openapi({
      description:
        'Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.',
    }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
      }),
    details: z.string().exactOptional().openapi({ description: 'The details of the offer.' }),
    enableSmartTap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    finePrint: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The fine print or terms of the offer, such as "20% off any t-shirt at Adam\'s Apparel."',
      }),
    helpUri: UriSchema.exactOptional().openapi({
      description: 'The help link for the offer, such as `http://myownpersonaldomain.com/help`',
    }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    homepageUri: UriSchema.exactOptional().openapi({
      description:
        "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    issuerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerClass"`.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the object, both will be displayed.',
    }),
    localizedDetails: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the details.',
    }),
    localizedFinePrint: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the fine_print.',
    }),
    localizedIssuerName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedProvider: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the provider. Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens.',
    }),
    localizedShortTitle: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the short title. Recommended maximum length is 20 characters.',
    }),
    localizedTitle: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the title. Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    multipleDevicesAndHoldersAllowedStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'MULTIPLE_HOLDERS',
        'multipleHolders',
        'ONE_USER_ALL_DEVICES',
        'oneUserAllDevices',
        'ONE_USER_ONE_DEVICE',
        'oneUserOneDevice',
      ])
      .exactOptional()
      .openapi({
        description:
          'Identifies whether multiple users and devices will save the same object referencing this class.',
      }),
    provider: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The offer provider (either the aggregator name or merchant name). Recommended maximum length is 12 characters to ensure full string is displayed on smaller screens.',
      }),
    redemptionChannel: z
      .enum([
        'REDEMPTION_CHANNEL_UNSPECIFIED',
        'INSTORE',
        'instore',
        'ONLINE',
        'online',
        'BOTH',
        'both',
        'TEMPORARY_PRICE_REDUCTION',
        'temporaryPriceReduction',
      ])
      .exactOptional()
      .openapi({ description: 'Required. The redemption channels applicable to this offer.' }),
    redemptionIssuers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    review: ReviewSchema.exactOptional().openapi({
      description:
        'The review comments set by the platform when a class is marked `approved` or `rejected`.',
    }),
    reviewStatus: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'UNDER_REVIEW',
        'underReview',
        'APPROVED',
        'approved',
        'REJECTED',
        'rejected',
        'DRAFT',
        'draft',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The status of the class. This field can be set to `draft` or The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.',
      }),
    securityAnimation: SecurityAnimationSchema.exactOptional().openapi({
      description:
        'Optional information about the security animation. If this is set a security animation will be rendered on pass details.',
    }),
    shortTitle: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A shortened version of the title of the offer, such as "20% off," shown to users as a quick reference to the offer contents. Recommended maximum length is 20 characters.',
      }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    title: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The title of the offer, such as "20% off any t-shirt." Recommended maximum length is 60 characters to ensure full string is displayed on smaller screens.',
      }),
    titleImage: ImageSchema.exactOptional().openapi({
      description:
        'The title image of the offer. This image is displayed in both the details and list views of the app.',
    }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
    viewUnlockRequirement: z
      .enum([
        'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
        'UNLOCK_NOT_REQUIRED',
        'UNLOCK_REQUIRED_TO_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'View Unlock Requirement options for the offer.' }),
    wordMark: ImageSchema.exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('OfferClass')

const OfferObjectSchema = z
  .object({
    appLinkData: AppLinkDataSchema.exactOptional().openapi({
      description: 'Optional information about the partner app link.',
    }),
    barcode: BarcodeSchema.exactOptional().openapi({ description: 'The barcode type and value.' }),
    classId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.',
      }),
    classReference: OfferClassSchema.exactOptional().openapi({
      description:
        'A copy of the inherited fields of the parent class. These fields are retrieved during a GET.',
    }),
    disableExpirationNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.',
      }),
    groupingInfo: GroupingInfoSchema.exactOptional().openapi({
      description: 'Information that controls how passes are grouped together.',
    }),
    hasLinkedDevice: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.',
      }),
    hasUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object has users. This field is set by the platform.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.',
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#offerObject"`.',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the class, both will be displayed.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    passConstraints: PassConstraintsSchema.exactOptional().openapi({
      description: 'Pass constraints for the object.',
    }),
    rotatingBarcode: RotatingBarcodeSchema.exactOptional().openapi({
      description: 'The rotating barcode type and value.',
    }),
    smartTapRedemptionValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACTIVE',
        'active',
        'COMPLETED',
        'completed',
        'EXPIRED',
        'expired',
        'INACTIVE',
        'inactive',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.',
      }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    validTimeInterval: TimeIntervalSchema.exactOptional().openapi({
      description:
        "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
    }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
  })
  .openapi({ required: [] })
  .openapi('OfferObject')

const TransitClassSchema = z
  .object({
    activationOptions: ActivationOptionsSchema.exactOptional().openapi({
      description: 'Activation options for an activatable ticket.',
    }),
    allowMultipleUsersPerObject: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Deprecated. Use `multipleDevicesAndHoldersAllowedStatus` instead.',
      }),
    callbackOptions: CallbackOptionsSchema.exactOptional().openapi({
      description:
        'Callback options to be used to call the issuer back for every save/delete of an object for this class by the end-user. All objects of this class are eligible for the callback.',
    }),
    classTemplateInfo: ClassTemplateInfoSchema.exactOptional().openapi({
      description:
        'Template information about how the class should be displayed. If unset, Google will fallback to a default set of fields to display.',
    }),
    countryCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Country code used to display the card's country (when the user is not in that country), as well as to display localized content when content is not available in the user's locale.",
      }),
    customCarriageLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the carriage value (`transitObject.ticketLeg.carriage`).',
    }),
    customCoachLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the coach value (`transitObject.ticketLeg.ticketSeat.coach`).',
    }),
    customConcessionCategoryLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the transit concession category value (`transitObject.concessionCategory`).',
    }),
    customConfirmationCodeLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the confirmation code value (`transitObject.purchaseDetails.confirmationCode`).',
    }),
    customDiscountMessageLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the transit discount message value (`transitObject.purchaseDetails.ticketCost.discountMessage`).',
    }),
    customFareClassLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the fare class value (`transitObject.ticketLeg.ticketSeat.fareClass`).',
    }),
    customFareNameLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the transit fare name value (`transitObject.ticketLeg.fareName`).',
    }),
    customOtherRestrictionsLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the other restrictions value (`transitObject.ticketRestrictions.otherRestrictions`).',
    }),
    customPlatformLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the boarding platform value (`transitObject.ticketLeg.platform`).',
    }),
    customPurchaseFaceValueLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the purchase face value (`transitObject.purchaseDetails.ticketCost.faceValue`).',
    }),
    customPurchasePriceLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the purchase price value (`transitObject.purchaseDetails.ticketCost.purchasePrice`).',
    }),
    customPurchaseReceiptNumberLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the purchase receipt number value (`transitObject.purchaseDetails.purchaseReceiptNumber`).',
    }),
    customRouteRestrictionsDetailsLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the route restrictions details value (`transitObject.ticketRestrictions.routeRestrictionsDetails`).',
    }),
    customRouteRestrictionsLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the route restrictions value (`transitObject.ticketRestrictions.routeRestrictions`).',
    }),
    customSeatLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the seat location value (`transitObject.ticketLeg.ticketSeat.seat`).',
    }),
    customTicketNumberLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the ticket number value (`transitObject.ticketNumber`).',
    }),
    customTimeRestrictionsLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the time restrictions details value (`transitObject.ticketRestrictions.timeRestrictions`).',
    }),
    customTransitTerminusNameLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the transit terminus name value (`transitObject.ticketLeg.transitTerminusName`).',
    }),
    customZoneLabel: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom label to use for the boarding zone value (`transitObject.ticketLeg.zone`).',
    }),
    enableSingleLegItinerary: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Controls the display of the single-leg itinerary for this class. By default, an itinerary will only display for multi-leg trips.',
      }),
    enableSmartTap: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Identifies whether this class supports Smart Tap. The `redemptionIssuers` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, nothing will be displayed. The image will display at 100% width.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    homepageUri: UriSchema.exactOptional().openapi({
      description:
        "The URI of your application's home page. Populating the URI in this field results in the exact same behavior as populating an URI in linksModuleData (when an object is rendered, a link to the homepage is shown in what would usually be thought of as the linksModuleData section of the object).",
    }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    issuerName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
      }),
    languageOverride: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If this field is present, transit tickets served to a user\'s device will always be in this language. Represents the BCP 47 language tag. Example values are "en-US", "en-GB", "de", or "de-AT".',
      }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the object, both will be displayed.',
    }),
    localizedIssuerName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Translated strings for the issuer_name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    logo: ImageSchema.exactOptional().openapi({
      description:
        'Required. The logo image of the ticket. This image is displayed in the card detail view of the app.',
    }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    multipleDevicesAndHoldersAllowedStatus: z
      .enum([
        'STATUS_UNSPECIFIED',
        'MULTIPLE_HOLDERS',
        'multipleHolders',
        'ONE_USER_ALL_DEVICES',
        'oneUserAllDevices',
        'ONE_USER_ONE_DEVICE',
        'oneUserOneDevice',
      ])
      .exactOptional()
      .openapi({
        description:
          'Identifies whether multiple users and devices will save the same object referencing this class.',
      }),
    redemptionIssuers: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The `enableSmartTap` and object level `smartTapRedemptionLevel` fields must also be set up correctly in order for a pass to support Smart Tap.',
      }),
    review: ReviewSchema.exactOptional().openapi({
      description:
        'The review comments set by the platform when a class is marked `approved` or `rejected`.',
    }),
    reviewStatus: z
      .enum([
        'REVIEW_STATUS_UNSPECIFIED',
        'UNDER_REVIEW',
        'underReview',
        'APPROVED',
        'approved',
        'REJECTED',
        'rejected',
        'DRAFT',
        'draft',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The status of the class. This field can be set to `draft` or `underReview` using the insert, patch, or update API calls. Once the review state is changed from `draft` it may not be changed back to `draft`. You should keep this field to `draft` when the class is under development. A `draft` class cannot be used to create any object. You should set this field to `underReview` when you believe the class is ready for use. The platform will automatically set this field to `approved` and it can be immediately used to create or migrate objects. When updating an already `approved` class you should keep setting this field to `underReview`.',
      }),
    securityAnimation: SecurityAnimationSchema.exactOptional().openapi({
      description:
        'Optional information about the security animation. If this is set a security animation will be rendered on pass details.',
    }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    transitOperatorName: LocalizedStringSchema.exactOptional().openapi({
      description: 'The name of the transit operator.',
    }),
    transitType: z
      .enum([
        'TRANSIT_TYPE_UNSPECIFIED',
        'BUS',
        'bus',
        'RAIL',
        'rail',
        'TRAM',
        'tram',
        'FERRY',
        'ferry',
        'OTHER',
        'other',
      ])
      .exactOptional()
      .openapi({
        description: 'Required. The type of transit this class represents, such as "bus".',
      }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
    viewUnlockRequirement: z
      .enum([
        'VIEW_UNLOCK_REQUIREMENT_UNSPECIFIED',
        'UNLOCK_NOT_REQUIRED',
        'UNLOCK_REQUIRED_TO_VIEW',
      ])
      .exactOptional()
      .openapi({ description: 'View Unlock Requirement options for the transit ticket.' }),
    watermark: ImageSchema.exactOptional().openapi({
      description: "Watermark image to display on the user's device.",
    }),
    wordMark: ImageSchema.exactOptional().openapi({ description: 'Deprecated.' }),
  })
  .openapi({ required: [] })
  .openapi('TransitClass')

const TicketCostSchema = z
  .object({
    discountMessage: LocalizedStringSchema.exactOptional().openapi({
      description: 'A message describing any kind of discount that was applied.',
    }),
    faceValue: MoneySchema.exactOptional().openapi({
      description: 'The face value of the ticket.',
    }),
    purchasePrice: MoneySchema.exactOptional().openapi({
      description: 'The actual purchase price of the ticket, after tax and/or discounts.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TicketCost')

const PurchaseDetailsSchema = z
  .object({
    accountId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the account used to purchase the ticket.' }),
    confirmationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The confirmation code for the purchase. This may be the same for multiple different tickets and is used to group tickets together.',
      }),
    purchaseDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The purchase date/time of the ticket. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. Without offset information, some rich features may not be available.',
      }),
    purchaseReceiptNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Receipt number/identifier for tracking the ticket purchase via the body that sold the ticket.',
      }),
    ticketCost: TicketCostSchema.exactOptional().openapi({
      description: 'The cost of the ticket.',
    }),
  })
  .openapi({ required: [] })
  .openapi('PurchaseDetails')

const TicketSeatSchema = z
  .object({
    coach: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of the train car or coach in which the ticketed seat is located. Eg. "10"',
      }),
    customFareClass: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custome fare class to be used if no `fareClass` applies. Both `fareClass` and `customFareClass` may not be set.',
    }),
    fareClass: z
      .enum([
        'FARE_CLASS_UNSPECIFIED',
        'ECONOMY',
        'economy',
        'FIRST',
        'first',
        'BUSINESS',
        'business',
      ])
      .exactOptional()
      .openapi({ description: 'The fare class of the ticketed seat.' }),
    seat: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The identifier of where the ticketed seat is located. Eg. "42". If there is no specific identifier, use `seatAssigment` instead.',
      }),
    seatAssignment: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The passenger\'s seat assignment. Eg. "no specific seat". To be used when there is no specific identifier to use in `seat`.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TicketSeat')

const TicketLegSchema = z
  .object({
    arrivalDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date/time of arrival. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the destination station. For example, if the event occurs at the 20th hour of June 5th, 2018 at the destination station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the destination station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.',
      }),
    carriage: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The train or ship name/number that the passsenger needs to board.',
      }),
    departureDateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The date/time of departure. This is required if there is no validity time interval set on the transit object. This is an ISO 8601 extended format date/time, with or without an offset. Time may be specified up to nanosecond precision. Offsets may be specified with seconds precision (even though offset seconds is not part of ISO 8601). For example: `1985-04-12T23:20:50.52Z` would be 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC. `1985-04-12T19:20:50.52-04:00` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985, 4 hours before UTC (same instant in time as the above example). If the event were in New York, this would be the equivalent of Eastern Daylight Time (EDT). Remember that offset varies in regions that observe Daylight Saving Time (or Summer Time), depending on the time of the year. `1985-04-12T19:20:50.52` would be 20 minutes and 50.52 seconds after the 19th hour of April 12th, 1985 with no offset information. The portion of the date/time without the offset is considered the "local date/time". This should be the local date/time at the origin station. For example, if the departure occurs at the 20th hour of June 5th, 2018 at the origin station, the local date/time portion should be `2018-06-05T20:00:00`. If the local date/time at the origin station is 4 hours before UTC, an offset of `-04:00` may be appended. Without offset information, some rich features may not be available.',
      }),
    destinationName: LocalizedStringSchema.exactOptional().openapi({
      description: 'The destination name.',
    }),
    destinationStationCode: z
      .string()
      .exactOptional()
      .openapi({ description: 'The destination station code.' }),
    fareName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Short description/name of the fare for this leg of travel. Eg "Anytime Single Use".',
    }),
    originName: LocalizedStringSchema.exactOptional().openapi({
      description:
        'The name of the origin station. This is required if `desinationName` is present or if `originStationCode` is not present.',
    }),
    originStationCode: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The origin station code. This is required if `destinationStationCode` is present or if `originName` is not present.',
      }),
    platform: z
      .string()
      .exactOptional()
      .openapi({ description: 'The platform or gate where the passenger can board the carriage.' }),
    ticketSeat: TicketSeatSchema.exactOptional().openapi({
      description:
        'The reserved seat for the passenger(s). If more than one seat is to be specified then use the `ticketSeats` field instead. Both `ticketSeat` and `ticketSeats` may not be set.',
    }),
    ticketSeats: z
      .array(TicketSeatSchema)
      .exactOptional()
      .openapi({
        description:
          'The reserved seat for the passenger(s). If only one seat is to be specified then use the `ticketSeat` field instead. Both `ticketSeat` and `ticketSeats` may not be set.',
      }),
    transitOperatorName: LocalizedStringSchema.exactOptional().openapi({
      description: 'The name of the transit operator that is operating this leg of a trip.',
    }),
    transitTerminusName: LocalizedStringSchema.exactOptional().openapi({
      description: 'Terminus station or destination of the train/bus/etc.',
    }),
    zone: z
      .string()
      .exactOptional()
      .openapi({ description: 'The zone of boarding within the platform.' }),
  })
  .openapi({ required: [] })
  .openapi('TicketLeg')

const TicketRestrictionsSchema = z
  .object({
    otherRestrictions: LocalizedStringSchema.exactOptional().openapi({
      description: 'Extra restrictions that don\'t fall under the "route" or "time" categories.',
    }),
    routeRestrictions: LocalizedStringSchema.exactOptional().openapi({
      description:
        'Restrictions about routes that may be taken. For example, this may be the string "Reserved CrossCountry trains only".',
    }),
    routeRestrictionsDetails: LocalizedStringSchema.exactOptional().openapi({
      description: 'More details about the above `routeRestrictions`.',
    }),
    timeRestrictions: LocalizedStringSchema.exactOptional().openapi({
      description: 'Restrictions about times this ticket may be used.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TicketRestrictions')

const TransitObjectSchema = z
  .object({
    activationStatus: ActivationStatusSchema.exactOptional().openapi({
      description:
        'The activation status for the object. Required if the class has `activationOptions` set.',
    }),
    appLinkData: AppLinkDataSchema.exactOptional().openapi({
      description: 'Optional information about the partner app link.',
    }),
    barcode: BarcodeSchema.exactOptional().openapi({ description: 'The barcode type and value.' }),
    classId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you.',
      }),
    classReference: TransitClassSchema.exactOptional().openapi({
      description:
        'A copy of the inherited fields of the parent class. These fields are retrieved during a GET.',
    }),
    concessionCategory: z
      .enum([
        'CONCESSION_CATEGORY_UNSPECIFIED',
        'ADULT',
        'adult',
        'CHILD',
        'child',
        'SENIOR',
        'senior',
      ])
      .exactOptional()
      .openapi({ description: 'The concession category for the ticket.' }),
    customConcessionCategory: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom concession category to use when `concessionCategory` does not provide the right option. Both `concessionCategory` and `customConcessionCategory` may not be set.',
    }),
    customTicketStatus: LocalizedStringSchema.exactOptional().openapi({
      description:
        'A custom status to use for the ticket status value when `ticketStatus` does not provide the right option. Both `ticketStatus` and `customTicketStatus` may not be set.',
    }),
    deviceContext: DeviceContextSchema.exactOptional().openapi({
      description: 'Device context associated with the object.',
    }),
    disableExpirationNotification: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the `messages` field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers.',
      }),
    groupingInfo: GroupingInfoSchema.exactOptional().openapi({
      description: 'Information that controls how passes are grouped together.',
    }),
    hasLinkedDevice: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information.',
      }),
    hasUsers: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates if the object has users. This field is set by the platform.',
      }),
    heroImage: ImageSchema.exactOptional().openapi({
      description:
        'Optional banner image displayed on the front of the card. If none is present, hero image of the class, if present, will be displayed. If hero image of the class is also not present, nothing will be displayed.',
    }),
    hexBackgroundColor: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as `#ffcc00`. You can also use the shorthand version of the RGB triplet which is #rgb, such as `#fc0`.',
      }),
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
      }),
    imageModulesData: z
      .array(ImageModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level.',
      }),
    infoModuleData: InfoModuleDataSchema.exactOptional().openapi({
      description: 'Deprecated. Use textModulesData instead.',
    }),
    linksModuleData: LinksModuleDataSchema.exactOptional().openapi({
      description:
        'Links module data. If links module data is also defined on the class, both will be displayed.',
    }),
    locations: z
      .array(LatLongPointSchema)
      .exactOptional()
      .openapi({
        description: 'Note: This field is currently not supported to trigger geo notifications.',
      }),
    messages: z
      .array(MessageSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10.',
      }),
    passConstraints: PassConstraintsSchema.exactOptional().openapi({
      description: 'Pass constraints for the object.',
    }),
    passengerNames: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name(s) of the passengers the ticket is assigned to. The above `passengerType` field is meant to give Google context on this field.',
      }),
    passengerType: z
      .enum([
        'PASSENGER_TYPE_UNSPECIFIED',
        'SINGLE_PASSENGER',
        'singlePassenger',
        'MULTIPLE_PASSENGERS',
        'multiplePassengers',
      ])
      .exactOptional()
      .openapi({ description: 'The number of passengers.' }),
    purchaseDetails: PurchaseDetailsSchema.exactOptional().openapi({
      description: 'Purchase details for this ticket.',
    }),
    rotatingBarcode: RotatingBarcodeSchema.exactOptional().openapi({
      description: 'The rotating barcode type and value.',
    }),
    smartTapRedemptionValue: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields `enableSmartTap` and `redemptionIssuers` must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported.',
      }),
    state: z
      .enum([
        'STATE_UNSPECIFIED',
        'ACTIVE',
        'active',
        'COMPLETED',
        'completed',
        'EXPIRED',
        'expired',
        'INACTIVE',
        'inactive',
      ])
      .exactOptional()
      .openapi({
        description:
          'Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an `inactive` object is moved to the "Expired passes" section.',
      }),
    textModulesData: z
      .array(TextModuleDataSchema)
      .exactOptional()
      .openapi({
        description:
          'Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class.',
      }),
    ticketLeg: TicketLegSchema.exactOptional().openapi({
      description:
        'A single ticket leg contains departure and arrival information along with boarding and seating information. If more than one leg is to be specified then use the `ticketLegs` field instead. Both `ticketLeg` and `ticketLegs` may not be set.',
    }),
    ticketLegs: z
      .array(TicketLegSchema)
      .exactOptional()
      .openapi({
        description:
          'Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the `ticketLeg` field instead. Both `ticketLeg` and `ticketLegs` may not be set.',
      }),
    ticketNumber: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The number of the ticket. This is a unique identifier for the ticket in the transit operator's system.",
      }),
    ticketRestrictions: TicketRestrictionsSchema.exactOptional().openapi({
      description:
        'Information about what kind of restrictions there are on using this ticket. For example, which days of the week it must be used, or which routes are allowed to be taken.',
    }),
    ticketStatus: z
      .enum([
        'TICKET_STATUS_UNSPECIFIED',
        'USED',
        'used',
        'REFUNDED',
        'refunded',
        'EXCHANGED',
        'exchanged',
      ])
      .exactOptional()
      .openapi({
        description:
          'The status of the ticket. For states which affect display, use the `state` field instead.',
      }),
    tripId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'This id is used to group tickets together if the user has saved multiple tickets for the same trip.',
      }),
    tripType: z
      .enum(['TRIP_TYPE_UNSPECIFIED', 'ROUND_TRIP', 'roundTrip', 'ONE_WAY', 'oneWay'])
      .exactOptional()
      .openapi({
        description:
          'Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination.',
      }),
    validTimeInterval: TimeIntervalSchema.exactOptional().openapi({
      description:
        "The time period this object will be `active` and object can be used. An object's state will be changed to `expired` when this time period has passed.",
    }),
    version: z.string().exactOptional().openapi({ description: 'Deprecated' }),
  })
  .openapi({ required: [] })
  .openapi('TransitObject')

const ResourcesSchema = z
  .object({
    eventTicketClasses: z.array(EventTicketClassSchema).exactOptional(),
    eventTicketObjects: z.array(EventTicketObjectSchema).exactOptional(),
    flightClasses: z.array(FlightClassSchema).exactOptional(),
    flightObjects: z.array(FlightObjectSchema).exactOptional(),
    giftCardClasses: z.array(GiftCardClassSchema).exactOptional(),
    giftCardObjects: z.array(GiftCardObjectSchema).exactOptional(),
    loyaltyClasses: z.array(LoyaltyClassSchema).exactOptional(),
    loyaltyObjects: z.array(LoyaltyObjectSchema).exactOptional(),
    offerClasses: z.array(OfferClassSchema).exactOptional(),
    offerObjects: z.array(OfferObjectSchema).exactOptional(),
    transitClasses: z.array(TransitClassSchema).exactOptional(),
    transitObjects: z.array(TransitObjectSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Resources')

const JwtInsertResponseSchema = z
  .object({
    resources: ResourcesSchema.exactOptional().openapi({
      description:
        'Data that corresponds to the ids of the provided classes and objects in the JWT. resources will only include the non-empty arrays (i.e. if the JWT only includes eventTicketObjects, then that is the only field that will be present in resources).',
    }),
    saveUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A URI that, when opened, will allow the end user to save the object(s) identified in the JWT to their Google account.',
      }),
  })
  .openapi({ required: [] })
  .openapi('JwtInsertResponse')

const JwtResourceSchema = z
  .object({
    jwt: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A string representing a JWT of the format described at https://developers.google.com/pay/passes/reference/s2w-reference#google-pay-api-for-passes-jwt',
      }),
  })
  .openapi({ required: [] })
  .openapi('JwtResource')

const LoyaltyClassAddMessageResponseSchema = z
  .object({
    resource: LoyaltyClassSchema.exactOptional().openapi({
      description: 'The updated LoyaltyClass resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyClassAddMessageResponse')

const LoyaltyClassListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(LoyaltyClassSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyClassListResponse')

const LoyaltyObjectAddMessageResponseSchema = z
  .object({
    resource: LoyaltyObjectSchema.exactOptional().openapi({
      description: 'The updated LoyaltyObject resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyObjectAddMessageResponse')

const LoyaltyObjectListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(LoyaltyObjectSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('LoyaltyObjectListResponse')

const MediaSchema: z.ZodType<MediaType> = z
  .lazy(() =>
    z
      .object({
        algorithm: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Deprecated, use one of explicit hash type fields instead. Algorithm used for calculating the hash. As of 2011/01/21, "MD5" is the only possible value for this field. New values may be added at any time.',
          }),
        bigstoreObjectRef: z
          .string()
          .exactOptional()
          .openapi({ description: 'Use object_id instead.' }),
        blobRef: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.',
          }),
        blobstore2Info: Blobstore2InfoSchema.exactOptional().openapi({
          description:
            'Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.',
        }),
        compositeMedia: z
          .array(CompositeMediaSchema)
          .exactOptional()
          .openapi({
            description:
              'A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified.',
          }),
        contentType: z.string().exactOptional().openapi({ description: 'MIME type of the data' }),
        contentTypeInfo: ContentTypeInfoSchema.exactOptional().openapi({
          description: 'Extended content type information provided for Scotty uploads.',
        }),
        cosmoBinaryReference: z
          .string()
          .exactOptional()
          .openapi({
            description:
              "A binary data reference for a media download. Serves as a technology-agnostic binary reference in some Google infrastructure. This value is a serialized storage_cosmo.BinaryReference proto. Storing it as bytes is a hack to get around the fact that the cosmo proto (as well as others it includes) doesn't support JavaScript. This prevents us from including the actual type of this field.",
          }),
        crc32cHash: z
          .uint32()
          .exactOptional()
          .openapi({
            description:
              'For Scotty Uploads: Scotty-provided hashes for uploads For Scotty Downloads: (WARNING: DO NOT USE WITHOUT PERMISSION FROM THE SCOTTY TEAM.) A Hash provided by the agent to be used to verify the data being downloaded. Currently only supported for inline payloads. Further, only crc32c_hash is currently supported.',
          }),
        diffChecksumsResponse: DiffChecksumsResponseSchema.exactOptional().openapi({
          description: 'Set if reference_type is DIFF_CHECKSUMS_RESPONSE.',
        }),
        diffDownloadResponse: DiffDownloadResponseSchema.exactOptional().openapi({
          description: 'Set if reference_type is DIFF_DOWNLOAD_RESPONSE.',
        }),
        diffUploadRequest: DiffUploadRequestSchema.exactOptional().openapi({
          description: 'Set if reference_type is DIFF_UPLOAD_REQUEST.',
        }),
        diffUploadResponse: DiffUploadResponseSchema.exactOptional().openapi({
          description: 'Set if reference_type is DIFF_UPLOAD_RESPONSE.',
        }),
        diffVersionResponse: DiffVersionResponseSchema.exactOptional().openapi({
          description: 'Set if reference_type is DIFF_VERSION_RESPONSE.',
        }),
        downloadParameters: DownloadParametersSchema.exactOptional().openapi({
          description: 'Parameters for a media download.',
        }),
        filename: z.string().exactOptional().openapi({ description: 'Original file name' }),
        hash: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Deprecated, use one of explicit hash type fields instead. These two hash related fields will only be populated on Scotty based media uploads and will contain the content of the hash group in the NotificationRequest: http://cs/#google3/uploader/service/proto/upload_listener.proto&q=class:Hash Hex encoded hash value of the uploaded media.',
          }),
        hashVerified: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              "For Scotty uploads only. If a user sends a hash code and the backend has requested that Scotty verify the upload against the client hash, Scotty will perform the check on behalf of the backend and will reject it if the hashes don't match. This is set to true if Scotty performed this verification.",
          }),
        inline: z
          .string()
          .exactOptional()
          .openapi({ description: 'Media data, set if reference_type is INLINE' }),
        isPotentialRetry: z
          .boolean()
          .exactOptional()
          .openapi({
            description:
              '|is_potential_retry| is set false only when Scotty is certain that it has not sent the request before. When a client resumes an upload, this field must be set true in agent calls, because Scotty cannot be certain that it has never sent the request before due to potential failure in the session state persistence.',
          }),
        length: z.string().exactOptional().openapi({ description: 'Size of the data, in bytes' }),
        md5Hash: z
          .string()
          .exactOptional()
          .openapi({ description: 'Scotty-provided MD5 hash for an upload.' }),
        mediaId: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Media id to forward to the operation GetMedia. Can be set if reference_type is GET_MEDIA.',
          }),
        objectId: ObjectIdSchema.exactOptional().openapi({
          description: 'Reference to a TI Blob, set if reference_type is BIGSTORE_REF.',
        }),
        path: z
          .string()
          .exactOptional()
          .openapi({ description: 'Path to the data, set if reference_type is PATH' }),
        referenceType: z
          .enum([
            'PATH',
            'BLOB_REF',
            'INLINE',
            'GET_MEDIA',
            'COMPOSITE_MEDIA',
            'BIGSTORE_REF',
            'DIFF_VERSION_RESPONSE',
            'DIFF_CHECKSUMS_RESPONSE',
            'DIFF_DOWNLOAD_RESPONSE',
            'DIFF_UPLOAD_REQUEST',
            'DIFF_UPLOAD_RESPONSE',
            'COSMO_BINARY_REFERENCE',
            'ARBITRARY_BYTES',
          ])
          .exactOptional()
          .openapi({ description: 'Describes what the field reference contains.' }),
        sha1Hash: z
          .string()
          .exactOptional()
          .openapi({ description: 'Scotty-provided SHA1 hash for an upload.' }),
        sha256Hash: z
          .string()
          .exactOptional()
          .openapi({ description: 'Scotty-provided SHA256 hash for an upload.' }),
        timestamp: z
          .string()
          .exactOptional()
          .openapi({
            description:
              'Time at which the media data was last updated, in milliseconds since UNIX epoch',
          }),
        token: z
          .string()
          .exactOptional()
          .openapi({ description: 'A unique fingerprint/version id for the media data' }),
      })
      .openapi({
        description: 'A reference to data stored on the filesystem, on GFS or in blobstore.',
        required: [],
      }),
  )
  .openapi('Media')

const MediaRequestInfoSchema = z
  .object({
    currentBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The number of current bytes uploaded or downloaded.' }),
    customData: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Data to be copied to backend requests. Custom data is returned to Scotty in the agent_state field, which Scotty will then provide in subsequent upload notifications.',
      }),
    diffObjectVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Set if the http request info is diff encoded. The value of this field is the version number of the base revision. This is corresponding to Apiary's mediaDiffObjectVersion (//depot/google3/java/com/google/api/server/media/variable/DiffObjectVersionVariable.java). See go/esf-scotty-diff-upload for more information.",
      }),
    finalStatus: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'The existence of the final_status field indicates that this is the last call to the agent for this request_id. http://google3/uploader/agent/scotty_agent.proto?l=737&rcl=347601929',
      }),
    notificationType: z
      .enum(['START', 'PROGRESS', 'END', 'RESPONSE_SENT', 'ERROR'])
      .exactOptional()
      .openapi({ description: 'The type of notification received from Scotty.' }),
    requestId: z.string().exactOptional().openapi({ description: 'The Scotty request ID.' }),
    totalBytes: z.string().exactOptional().openapi({ description: 'The total size of the file.' }),
    totalBytesIsEstimated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the total bytes field contains an estimated data.' }),
  })
  .openapi({
    description: 'Extra information added to operations that support Scotty media requests.',
    required: [],
  })
  .openapi('MediaRequestInfo')

const ModifyLinkedOfferObjectsSchema = z
  .object({
    addLinkedOfferObjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The linked offer object ids to add to the object.' }),
    removeLinkedOfferObjectIds: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The linked offer object ids to remove from the object.' }),
  })
  .openapi({ required: [] })
  .openapi('ModifyLinkedOfferObjects')

const ModifyLinkedOfferObjectsRequestSchema = z
  .object({
    linkedOfferObjectIds: ModifyLinkedOfferObjectsSchema.exactOptional().openapi({
      description: 'The linked offer object ids to add or remove from the object.',
    }),
  })
  .openapi({ required: [] })
  .openapi('ModifyLinkedOfferObjectsRequest')

const OfferClassAddMessageResponseSchema = z
  .object({
    resource: OfferClassSchema.exactOptional().openapi({
      description: 'The updated OfferClass resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OfferClassAddMessageResponse')

const OfferClassListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(OfferClassSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('OfferClassListResponse')

const OfferObjectAddMessageResponseSchema = z
  .object({
    resource: OfferObjectSchema.exactOptional().openapi({
      description: 'The updated OfferObject resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('OfferObjectAddMessageResponse')

const OfferObjectListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(OfferObjectSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('OfferObjectListResponse')

const PermissionSchema = z
  .object({
    emailAddress: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The email address of the user, group, or service account to which this permission refers to.',
      }),
    role: z
      .enum(['ROLE_UNSPECIFIED', 'OWNER', 'owner', 'READER', 'reader', 'WRITER', 'writer'])
      .exactOptional()
      .openapi({ description: 'The role granted by this permission.' }),
  })
  .openapi({ required: [] })
  .openapi('Permission')

const PermissionsSchema = z
  .object({
    issuerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'ID of the issuer the list of permissions refer to.' }),
    permissions: z
      .array(PermissionSchema)
      .exactOptional()
      .openapi({ description: 'The complete list of permissions for the issuer account.' }),
  })
  .openapi({ required: [] })
  .openapi('Permissions')

const PrivateTextSchema = z
  .object({
    body: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the body.',
    }),
    header: LocalizedStringSchema.exactOptional().openapi({
      description: 'Translated strings for the header.',
    }),
  })
  .openapi({
    description:
      'Private data for TextModule. This data will be rendered as a TextModule for a pass.',
    required: [],
  })
  .openapi('PrivateText')

const PrivateUriSchema = z
  .object({
    description: LocalizedStringSchema.exactOptional().openapi({
      description:
        "The URI's title appearing in the app as text and its translated strings. Recommended maximum is 20 characters to ensure the full string is displayed on smaller screens.",
    }),
    uri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The location of a web page, image, or other resource. URIs in the `LinksModuleData` can have different prefixes indicating the type of URI (a link to a web page, a link to a map, a telephone number, or an email address).',
      }),
  })
  .openapi({
    description:
      'Private data for LinkModule. This data will be rendered as the LinkModule for a pass.',
    required: [],
  })
  .openapi('PrivateUri')

const SmartTapSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The unique identifier for a smart tap. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is the Smart Tap id. The Smart Tap id is a Base64 encoded string which represents the id which was generated by the Google Pay app.',
      }),
    infos: z
      .array(IssuerToUserInfoSchema)
      .exactOptional()
      .openapi({ description: 'Communication from merchant to user.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Identifies what kind of resource this is. Value: the fixed string `"walletobjects#smartTap"`.',
      }),
    merchantId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Smart Tap merchant ID of who engaged in the Smart Tap interaction.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SmartTap')

const TransitClassAddMessageResponseSchema = z
  .object({
    resource: TransitClassSchema.exactOptional().openapi({
      description: 'The updated TransitClass resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TransitClassAddMessageResponse')

const TransitClassListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(TransitClassSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('TransitClassListResponse')

const TransitObjectAddMessageResponseSchema = z
  .object({
    resource: TransitObjectSchema.exactOptional().openapi({
      description: 'The updated TransitObject resource.',
    }),
  })
  .openapi({ required: [] })
  .openapi('TransitObjectAddMessageResponse')

const TransitObjectListResponseSchema = z
  .object({
    pagination: PaginationSchema.exactOptional().openapi({
      description: 'Pagination of the response.',
    }),
    resources: z
      .array(TransitObjectSchema)
      .exactOptional()
      .openapi({ description: 'Resources corresponding to the list request.' }),
  })
  .openapi({ required: [] })
  .openapi('TransitObjectListResponse')

const UploadPrivateDataRequestSchema = z
  .object({
    issuerId: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the issuer sending the data.' }),
    text: PrivateTextSchema.exactOptional().openapi({
      description: 'Private text data of the user.',
    }),
    uri: PrivateUriSchema.exactOptional().openapi({ description: 'Private URIs of the user.' }),
  })
  .openapi({
    description: 'Request for sending user private Text or URI by the Issuer.',
    required: [],
  })
  .openapi('UploadPrivateDataRequest')

const UploadPrivateDataResponseSchema = z
  .object({
    privateContentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A 64-bit content id for the private data that was uploaded by the Issuer.',
      }),
  })
  .openapi({ description: 'Response for uploading user private data (text or URIs)', required: [] })
  .openapi('UploadPrivateDataResponse')

const UploadPrivateImageRequestSchema = z
  .object({
    blob: MediaSchema.exactOptional().openapi({
      description: 'A reference to the image payload that was uploaded by Scotty.',
    }),
    mediaRequestInfo: MediaRequestInfoSchema.exactOptional().openapi({
      description: 'Extra information about the uploaded media.',
    }),
  })
  .openapi({
    description: "Request to upload user's private images by Issuers to be used in passes.",
    required: [],
  })
  .openapi('UploadPrivateImageRequest')

const UploadPrivateImageResponseSchema = z
  .object({
    privateContentId: z
      .string()
      .exactOptional()
      .openapi({
        description: 'A 64-bit content id for the image that was uploaded by the Issuer.',
      }),
  })
  .openapi({ description: 'Response for uploading the private image', required: [] })
  .openapi('UploadPrivateImageResponse')

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
        'https://www.googleapis.com/auth/wallet_object.issuer':
          'Private Service: https://www.googleapis.com/auth/wallet_object.issuer',
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
        'https://www.googleapis.com/auth/wallet_object.issuer':
          'Private Service: https://www.googleapis.com/auth/wallet_object.issuer',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getWalletobjectsV1EventTicketClassRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/eventTicketClass',
  tags: ['eventticketclass'],
  description: 'Returns a list of all event ticket classes for a given issuer ID.',
  operationId: 'walletobjects.eventticketclass.list',
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
      issuerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the issuer authorized to list classes.',
            in: 'query',
            name: 'issuerId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketClassListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1EventTicketClassRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/eventTicketClass',
  tags: ['eventticketclass'],
  description: 'Inserts an event ticket class with the given ID and properties.',
  operationId: 'walletobjects.eventticketclass.insert',
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
    body: { content: { 'application/json': { schema: EventTicketClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1EventTicketClassResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/eventTicketClass/{resourceId}',
  tags: ['eventticketclass'],
  description: 'Returns the event ticket class with the given class ID.',
  operationId: 'walletobjects.eventticketclass.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1EventTicketClassResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/eventTicketClass/{resourceId}',
  tags: ['eventticketclass'],
  description: 'Updates the event ticket class referenced by the given class ID.',
  operationId: 'walletobjects.eventticketclass.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventTicketClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1EventTicketClassResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/eventTicketClass/{resourceId}',
  tags: ['eventticketclass'],
  description:
    'Updates the event ticket class referenced by the given class ID. This method supports patch semantics.',
  operationId: 'walletobjects.eventticketclass.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventTicketClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1EventTicketClassResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/eventTicketClass/{resourceId}/addMessage',
  tags: ['eventticketclass'],
  description: 'Adds a message to the event ticket class referenced by the given class ID.',
  operationId: 'walletobjects.eventticketclass.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketClassAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1EventTicketObjectRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/eventTicketObject',
  tags: ['eventticketobject'],
  description: 'Returns a list of all event ticket objects for a given issuer ID.',
  operationId: 'walletobjects.eventticketobject.list',
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
      classId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the class whose objects will be listed.',
            in: 'query',
            name: 'classId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketObjectListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1EventTicketObjectRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/eventTicketObject',
  tags: ['eventticketobject'],
  description: 'Inserts an event ticket object with the given ID and properties.',
  operationId: 'walletobjects.eventticketobject.insert',
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
    body: { content: { 'application/json': { schema: EventTicketObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1EventTicketObjectResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/eventTicketObject/{resourceId}',
  tags: ['eventticketobject'],
  description: 'Returns the event ticket object with the given object ID.',
  operationId: 'walletobjects.eventticketobject.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1EventTicketObjectResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/eventTicketObject/{resourceId}',
  tags: ['eventticketobject'],
  description: 'Updates the event ticket object referenced by the given object ID.',
  operationId: 'walletobjects.eventticketobject.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventTicketObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1EventTicketObjectResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/eventTicketObject/{resourceId}',
  tags: ['eventticketobject'],
  description:
    'Updates the event ticket object referenced by the given object ID. This method supports patch semantics.',
  operationId: 'walletobjects.eventticketobject.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: EventTicketObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1EventTicketObjectResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/eventTicketObject/{resourceId}/addMessage',
  tags: ['eventticketobject'],
  description: 'Adds a message to the event ticket object referenced by the given object ID.',
  operationId: 'walletobjects.eventticketobject.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EventTicketObjectAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1EventTicketObjectResourceIdModifyLinkedOfferObjectsRoute =
  createRoute({
    method: 'post',
    path: '/walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects',
    tags: ['eventticketobject'],
    description: 'Modifies linked offer objects for the event ticket object with the given ID.',
    operationId: 'walletobjects.eventticketobject.modifylinkedofferobjects',
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
        resourceId: z
          .string()
          .openapi({
            param: {
              description:
                "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
              in: 'path',
              name: 'resourceId',
              required: true,
              schema: { type: 'string' },
            },
          }),
      }),
      body: { content: { 'application/json': { schema: ModifyLinkedOfferObjectsRequestSchema } } },
    },
    responses: {
      200: {
        description: 'Successful response',
        content: { 'application/json': { schema: EventTicketObjectSchema } },
      },
    },
    security: [
      {
        Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
        Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      },
    ],
  })

export const getWalletobjectsV1FlightClassRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/flightClass',
  tags: ['flightclass'],
  description: 'Returns a list of all flight classes for a given issuer ID.',
  operationId: 'walletobjects.flightclass.list',
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
      issuerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the issuer authorized to list classes.',
            in: 'query',
            name: 'issuerId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightClassListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1FlightClassRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/flightClass',
  tags: ['flightclass'],
  description: 'Inserts an flight class with the given ID and properties.',
  operationId: 'walletobjects.flightclass.insert',
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
    body: { content: { 'application/json': { schema: FlightClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1FlightClassResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/flightClass/{resourceId}',
  tags: ['flightclass'],
  description: 'Returns the flight class with the given class ID.',
  operationId: 'walletobjects.flightclass.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1FlightClassResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/flightClass/{resourceId}',
  tags: ['flightclass'],
  description: 'Updates the flight class referenced by the given class ID.',
  operationId: 'walletobjects.flightclass.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FlightClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1FlightClassResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/flightClass/{resourceId}',
  tags: ['flightclass'],
  description:
    'Updates the flight class referenced by the given class ID. This method supports patch semantics.',
  operationId: 'walletobjects.flightclass.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FlightClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1FlightClassResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/flightClass/{resourceId}/addMessage',
  tags: ['flightclass'],
  description: 'Adds a message to the flight class referenced by the given class ID.',
  operationId: 'walletobjects.flightclass.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightClassAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1FlightObjectRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/flightObject',
  tags: ['flightobject'],
  description: 'Returns a list of all flight objects for a given issuer ID.',
  operationId: 'walletobjects.flightobject.list',
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
      classId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the class whose objects will be listed.',
            in: 'query',
            name: 'classId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightObjectListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1FlightObjectRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/flightObject',
  tags: ['flightobject'],
  description: 'Inserts an flight object with the given ID and properties.',
  operationId: 'walletobjects.flightobject.insert',
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
    body: { content: { 'application/json': { schema: FlightObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1FlightObjectResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/flightObject/{resourceId}',
  tags: ['flightobject'],
  description: 'Returns the flight object with the given object ID.',
  operationId: 'walletobjects.flightobject.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1FlightObjectResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/flightObject/{resourceId}',
  tags: ['flightobject'],
  description: 'Updates the flight object referenced by the given object ID.',
  operationId: 'walletobjects.flightobject.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FlightObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1FlightObjectResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/flightObject/{resourceId}',
  tags: ['flightobject'],
  description:
    'Updates the flight object referenced by the given object ID. This method supports patch semantics.',
  operationId: 'walletobjects.flightobject.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FlightObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1FlightObjectResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/flightObject/{resourceId}/addMessage',
  tags: ['flightobject'],
  description: 'Adds a message to the flight object referenced by the given object ID.',
  operationId: 'walletobjects.flightobject.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: FlightObjectAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1GenericClassRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/genericClass',
  tags: ['genericclass'],
  description: 'Returns a list of all generic classes for a given issuer ID.',
  operationId: 'walletobjects.genericclass.list',
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
      issuerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the issuer authorized to list classes.',
            in: 'query',
            name: 'issuerId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericClassListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1GenericClassRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/genericClass',
  tags: ['genericclass'],
  description: 'Inserts a generic class with the given ID and properties.',
  operationId: 'walletobjects.genericclass.insert',
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
    body: { content: { 'application/json': { schema: GenericClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1GenericClassResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/genericClass/{resourceId}',
  tags: ['genericclass'],
  description: 'Returns the generic class with the given class ID.',
  operationId: 'walletobjects.genericclass.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1GenericClassResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/genericClass/{resourceId}',
  tags: ['genericclass'],
  description: 'Updates the Generic class referenced by the given class ID.',
  operationId: 'walletobjects.genericclass.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenericClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1GenericClassResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/genericClass/{resourceId}',
  tags: ['genericclass'],
  description:
    'Updates the generic class referenced by the given class ID. This method supports patch semantics.',
  operationId: 'walletobjects.genericclass.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for a class. This ID must be unique across all classes from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenericClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1GenericObjectRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/genericObject',
  tags: ['genericobject'],
  description: 'Returns a list of all generic objects for a given issuer ID.',
  operationId: 'walletobjects.genericobject.list',
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
      classId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the class whose objects will be listed.',
            in: 'query',
            name: 'classId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericObjectListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1GenericObjectRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/genericObject',
  tags: ['genericobject'],
  description: 'Inserts a generic object with the given ID and properties.',
  operationId: 'walletobjects.genericobject.insert',
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
    body: { content: { 'application/json': { schema: GenericObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1GenericObjectResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/genericObject/{resourceId}',
  tags: ['genericobject'],
  description: 'Returns the generic object with the given object ID.',
  operationId: 'walletobjects.genericobject.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1GenericObjectResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/genericObject/{resourceId}',
  tags: ['genericobject'],
  description: 'Updates the generic object referenced by the given object ID.',
  operationId: 'walletobjects.genericobject.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenericObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1GenericObjectResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/genericObject/{resourceId}',
  tags: ['genericobject'],
  description:
    'Updates the generic object referenced by the given object ID. This method supports patch semantics.',
  operationId: 'walletobjects.genericobject.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format `issuerID.identifier` where `issuerID` is issued by Google and `identifier` is chosen by you. The unique identifier can only include alphanumeric characters, `.`, `_`, or `-`.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GenericObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GenericObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1GiftCardClassRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/giftCardClass',
  tags: ['giftcardclass'],
  description: 'Returns a list of all gift card classes for a given issuer ID.',
  operationId: 'walletobjects.giftcardclass.list',
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
      issuerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the issuer authorized to list classes.',
            in: 'query',
            name: 'issuerId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardClassListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1GiftCardClassRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/giftCardClass',
  tags: ['giftcardclass'],
  description: 'Inserts an gift card class with the given ID and properties.',
  operationId: 'walletobjects.giftcardclass.insert',
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
    body: { content: { 'application/json': { schema: GiftCardClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1GiftCardClassResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/giftCardClass/{resourceId}',
  tags: ['giftcardclass'],
  description: 'Returns the gift card class with the given class ID.',
  operationId: 'walletobjects.giftcardclass.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1GiftCardClassResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/giftCardClass/{resourceId}',
  tags: ['giftcardclass'],
  description: 'Updates the gift card class referenced by the given class ID.',
  operationId: 'walletobjects.giftcardclass.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GiftCardClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1GiftCardClassResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/giftCardClass/{resourceId}',
  tags: ['giftcardclass'],
  description:
    'Updates the gift card class referenced by the given class ID. This method supports patch semantics.',
  operationId: 'walletobjects.giftcardclass.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GiftCardClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1GiftCardClassResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/giftCardClass/{resourceId}/addMessage',
  tags: ['giftcardclass'],
  description: 'Adds a message to the gift card class referenced by the given class ID.',
  operationId: 'walletobjects.giftcardclass.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardClassAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1GiftCardObjectRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/giftCardObject',
  tags: ['giftcardobject'],
  description: 'Returns a list of all gift card objects for a given issuer ID.',
  operationId: 'walletobjects.giftcardobject.list',
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
      classId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the class whose objects will be listed.',
            in: 'query',
            name: 'classId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardObjectListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1GiftCardObjectRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/giftCardObject',
  tags: ['giftcardobject'],
  description: 'Inserts an gift card object with the given ID and properties.',
  operationId: 'walletobjects.giftcardobject.insert',
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
    body: { content: { 'application/json': { schema: GiftCardObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1GiftCardObjectResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/giftCardObject/{resourceId}',
  tags: ['giftcardobject'],
  description: 'Returns the gift card object with the given object ID.',
  operationId: 'walletobjects.giftcardobject.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1GiftCardObjectResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/giftCardObject/{resourceId}',
  tags: ['giftcardobject'],
  description: 'Updates the gift card object referenced by the given object ID.',
  operationId: 'walletobjects.giftcardobject.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GiftCardObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1GiftCardObjectResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/giftCardObject/{resourceId}',
  tags: ['giftcardobject'],
  description:
    'Updates the gift card object referenced by the given object ID. This method supports patch semantics.',
  operationId: 'walletobjects.giftcardobject.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GiftCardObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1GiftCardObjectResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/giftCardObject/{resourceId}/addMessage',
  tags: ['giftcardobject'],
  description: 'Adds a message to the gift card object referenced by the given object ID.',
  operationId: 'walletobjects.giftcardobject.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GiftCardObjectAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1IssuerRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/issuer',
  tags: ['issuer'],
  description: 'Returns a list of all issuers shared to the caller.',
  operationId: 'walletobjects.issuer.list',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: IssuerListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1IssuerRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/issuer',
  tags: ['issuer'],
  description: 'Inserts an issuer with the given ID and properties.',
  operationId: 'walletobjects.issuer.insert',
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
    body: { content: { 'application/json': { schema: IssuerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: IssuerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1IssuerResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/issuer/{resourceId}',
  tags: ['issuer'],
  description: 'Returns the issuer with the given issuer ID.',
  operationId: 'walletobjects.issuer.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for an issuer.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: IssuerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1IssuerResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/issuer/{resourceId}',
  tags: ['issuer'],
  description: 'Updates the issuer referenced by the given issuer ID.',
  operationId: 'walletobjects.issuer.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for an issuer.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IssuerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: IssuerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1IssuerResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/issuer/{resourceId}',
  tags: ['issuer'],
  description:
    'Updates the issuer referenced by the given issuer ID. This method supports patch semantics.',
  operationId: 'walletobjects.issuer.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description: 'The unique identifier for an issuer.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: IssuerSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: IssuerSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1JwtRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/jwt',
  tags: ['jwt'],
  description: 'Inserts the resources in the JWT.',
  operationId: 'walletobjects.jwt.insert',
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
    body: { content: { 'application/json': { schema: JwtResourceSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: JwtInsertResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1LoyaltyClassRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/loyaltyClass',
  tags: ['loyaltyclass'],
  description: 'Returns a list of all loyalty classes for a given issuer ID.',
  operationId: 'walletobjects.loyaltyclass.list',
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
      issuerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the issuer authorized to list classes.',
            in: 'query',
            name: 'issuerId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyClassListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1LoyaltyClassRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/loyaltyClass',
  tags: ['loyaltyclass'],
  description: 'Inserts an loyalty class with the given ID and properties.',
  operationId: 'walletobjects.loyaltyclass.insert',
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
    body: { content: { 'application/json': { schema: LoyaltyClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1LoyaltyClassResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/loyaltyClass/{resourceId}',
  tags: ['loyaltyclass'],
  description: 'Returns the loyalty class with the given class ID.',
  operationId: 'walletobjects.loyaltyclass.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1LoyaltyClassResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/loyaltyClass/{resourceId}',
  tags: ['loyaltyclass'],
  description: 'Updates the loyalty class referenced by the given class ID.',
  operationId: 'walletobjects.loyaltyclass.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LoyaltyClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1LoyaltyClassResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/loyaltyClass/{resourceId}',
  tags: ['loyaltyclass'],
  description:
    'Updates the loyalty class referenced by the given class ID. This method supports patch semantics.',
  operationId: 'walletobjects.loyaltyclass.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LoyaltyClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1LoyaltyClassResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/loyaltyClass/{resourceId}/addMessage',
  tags: ['loyaltyclass'],
  description: 'Adds a message to the loyalty class referenced by the given class ID.',
  operationId: 'walletobjects.loyaltyclass.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyClassAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1LoyaltyObjectRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/loyaltyObject',
  tags: ['loyaltyobject'],
  description: 'Returns a list of all loyalty objects for a given issuer ID.',
  operationId: 'walletobjects.loyaltyobject.list',
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
      classId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the class whose objects will be listed.',
            in: 'query',
            name: 'classId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyObjectListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1LoyaltyObjectRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/loyaltyObject',
  tags: ['loyaltyobject'],
  description: 'Inserts an loyalty object with the given ID and properties.',
  operationId: 'walletobjects.loyaltyobject.insert',
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
    body: { content: { 'application/json': { schema: LoyaltyObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1LoyaltyObjectResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/loyaltyObject/{resourceId}',
  tags: ['loyaltyobject'],
  description: 'Returns the loyalty object with the given object ID.',
  operationId: 'walletobjects.loyaltyobject.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1LoyaltyObjectResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/loyaltyObject/{resourceId}',
  tags: ['loyaltyobject'],
  description: 'Updates the loyalty object referenced by the given object ID.',
  operationId: 'walletobjects.loyaltyobject.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LoyaltyObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1LoyaltyObjectResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/loyaltyObject/{resourceId}',
  tags: ['loyaltyobject'],
  description:
    'Updates the loyalty object referenced by the given object ID. This method supports patch semantics.',
  operationId: 'walletobjects.loyaltyobject.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LoyaltyObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1LoyaltyObjectResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/loyaltyObject/{resourceId}/addMessage',
  tags: ['loyaltyobject'],
  description: 'Adds a message to the loyalty object referenced by the given object ID.',
  operationId: 'walletobjects.loyaltyobject.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyObjectAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1LoyaltyObjectResourceIdModifyLinkedOfferObjectsRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects',
  tags: ['loyaltyobject'],
  description: 'Modifies linked offer objects for the loyalty object with the given ID.',
  operationId: 'walletobjects.loyaltyobject.modifylinkedofferobjects',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ModifyLinkedOfferObjectsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LoyaltyObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1OfferClassRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/offerClass',
  tags: ['offerclass'],
  description: 'Returns a list of all offer classes for a given issuer ID.',
  operationId: 'walletobjects.offerclass.list',
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
      issuerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the issuer authorized to list classes.',
            in: 'query',
            name: 'issuerId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferClassListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1OfferClassRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/offerClass',
  tags: ['offerclass'],
  description: 'Inserts an offer class with the given ID and properties.',
  operationId: 'walletobjects.offerclass.insert',
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
    body: { content: { 'application/json': { schema: OfferClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1OfferClassResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/offerClass/{resourceId}',
  tags: ['offerclass'],
  description: 'Returns the offer class with the given class ID.',
  operationId: 'walletobjects.offerclass.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1OfferClassResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/offerClass/{resourceId}',
  tags: ['offerclass'],
  description: 'Updates the offer class referenced by the given class ID.',
  operationId: 'walletobjects.offerclass.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OfferClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1OfferClassResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/offerClass/{resourceId}',
  tags: ['offerclass'],
  description:
    'Updates the offer class referenced by the given class ID. This method supports patch semantics.',
  operationId: 'walletobjects.offerclass.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OfferClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1OfferClassResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/offerClass/{resourceId}/addMessage',
  tags: ['offerclass'],
  description: 'Adds a message to the offer class referenced by the given class ID.',
  operationId: 'walletobjects.offerclass.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferClassAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1OfferObjectRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/offerObject',
  tags: ['offerobject'],
  description: 'Returns a list of all offer objects for a given issuer ID.',
  operationId: 'walletobjects.offerobject.list',
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
      classId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the class whose objects will be listed.',
            in: 'query',
            name: 'classId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferObjectListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1OfferObjectRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/offerObject',
  tags: ['offerobject'],
  description: 'Inserts an offer object with the given ID and properties.',
  operationId: 'walletobjects.offerobject.insert',
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
    body: { content: { 'application/json': { schema: OfferObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1OfferObjectResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/offerObject/{resourceId}',
  tags: ['offerobject'],
  description: 'Returns the offer object with the given object ID.',
  operationId: 'walletobjects.offerobject.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1OfferObjectResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/offerObject/{resourceId}',
  tags: ['offerobject'],
  description: 'Updates the offer object referenced by the given object ID.',
  operationId: 'walletobjects.offerobject.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OfferObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1OfferObjectResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/offerObject/{resourceId}',
  tags: ['offerobject'],
  description:
    'Updates the offer object referenced by the given object ID. This method supports patch semantics.',
  operationId: 'walletobjects.offerobject.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: OfferObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1OfferObjectResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/offerObject/{resourceId}/addMessage',
  tags: ['offerobject'],
  description: 'Adds a message to the offer object referenced by the given object ID.',
  operationId: 'walletobjects.offerobject.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: OfferObjectAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1PermissionsResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/permissions/{resourceId}',
  tags: ['permissions'],
  description: 'Returns the permissions for the given issuer id.',
  operationId: 'walletobjects.permissions.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for an issuer. This ID must be unique across all issuers.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PermissionsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1PermissionsResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/permissions/{resourceId}',
  tags: ['permissions'],
  description: 'Updates the permissions for the given issuer.',
  operationId: 'walletobjects.permissions.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              'The unique identifier for an issuer. This ID must be unique across all issuers.',
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PermissionsSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: PermissionsSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1PrivateContentUploadPrivateDataRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/privateContent/uploadPrivateData',
  tags: ['walletobjects'],
  description: 'Upload private data (text or URI) and returns an Id to be used in its place.',
  operationId: 'walletobjects.walletobjects.v1.privateContent.uploadPrivateData',
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
    body: { content: { 'application/json': { schema: UploadPrivateDataRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UploadPrivateDataResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1PrivateContentIssuerIdUploadPrivateImageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/privateContent/{issuerId}/uploadPrivateImage',
  tags: ['media'],
  description: 'Uploads a private image and returns an Id to be used in its place.',
  operationId: 'walletobjects.media.upload',
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
      issuerId: z
        .string()
        .openapi({
          param: {
            description: 'The ID of the issuer sending the image.',
            in: 'path',
            name: 'issuerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/octet-stream': { schema: UploadPrivateImageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: UploadPrivateImageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1SmartTapRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/smartTap',
  tags: ['smarttap'],
  description: 'Inserts the smart tap.',
  operationId: 'walletobjects.smarttap.insert',
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
    body: { content: { 'application/json': { schema: SmartTapSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SmartTapSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1TransitClassRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/transitClass',
  tags: ['transitclass'],
  description: 'Returns a list of all transit classes for a given issuer ID.',
  operationId: 'walletobjects.transitclass.list',
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
      issuerId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the issuer authorized to list classes.',
            in: 'query',
            name: 'issuerId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` classes are available in a list. For example, if you have a list of 200 classes and you call list with `maxResults` set to 20, list will return the first 20 classes and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 classes.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitClassListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1TransitClassRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/transitClass',
  tags: ['transitclass'],
  description: 'Inserts a transit class with the given ID and properties.',
  operationId: 'walletobjects.transitclass.insert',
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
    body: { content: { 'application/json': { schema: TransitClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1TransitClassResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/transitClass/{resourceId}',
  tags: ['transitclass'],
  description: 'Returns the transit class with the given class ID.',
  operationId: 'walletobjects.transitclass.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1TransitClassResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/transitClass/{resourceId}',
  tags: ['transitclass'],
  description: 'Updates the transit class referenced by the given class ID.',
  operationId: 'walletobjects.transitclass.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransitClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1TransitClassResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/transitClass/{resourceId}',
  tags: ['transitclass'],
  description:
    'Updates the transit class referenced by the given class ID. This method supports patch semantics.',
  operationId: 'walletobjects.transitclass.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransitClassSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitClassSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1TransitClassResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/transitClass/{resourceId}/addMessage',
  tags: ['transitclass'],
  description: 'Adds a message to the transit class referenced by the given class ID.',
  operationId: 'walletobjects.transitclass.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitClassAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1TransitObjectRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/transitObject',
  tags: ['transitobject'],
  description: 'Returns a list of all transit objects for a given issuer ID.',
  operationId: 'walletobjects.transitobject.list',
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
      classId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The ID of the class whose objects will be listed.',
            in: 'query',
            name: 'classId',
            schema: { type: 'string' },
            required: false,
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
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "Identifies the max number of results returned by a list. All results are returned if `maxResults` isn't defined.",
            in: 'query',
            name: 'maxResults',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      token: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Used to get the next set of results if `maxResults` is specified, but more than `maxResults` objects are available in a list. For example, if you have a list of 200 objects and you call list with `maxResults` set to 20, list will return the first 20 objects and a token. Call list again with `maxResults` set to 20 and the token to get the next 20 objects.',
            in: 'query',
            name: 'token',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitObjectListResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1TransitObjectRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/transitObject',
  tags: ['transitobject'],
  description: 'Inserts an transit object with the given ID and properties.',
  operationId: 'walletobjects.transitobject.insert',
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
    body: { content: { 'application/json': { schema: TransitObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const getWalletobjectsV1TransitObjectResourceIdRoute = createRoute({
  method: 'get',
  path: '/walletobjects/v1/transitObject/{resourceId}',
  tags: ['transitobject'],
  description: 'Returns the transit object with the given object ID.',
  operationId: 'walletobjects.transitobject.get',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const putWalletobjectsV1TransitObjectResourceIdRoute = createRoute({
  method: 'put',
  path: '/walletobjects/v1/transitObject/{resourceId}',
  tags: ['transitobject'],
  description: 'Updates the transit object referenced by the given object ID.',
  operationId: 'walletobjects.transitobject.update',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransitObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const patchWalletobjectsV1TransitObjectResourceIdRoute = createRoute({
  method: 'patch',
  path: '/walletobjects/v1/transitObject/{resourceId}',
  tags: ['transitobject'],
  description:
    'Updates the transit object referenced by the given object ID. This method supports patch semantics.',
  operationId: 'walletobjects.transitobject.patch',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TransitObjectSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitObjectSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})

export const postWalletobjectsV1TransitObjectResourceIdAddMessageRoute = createRoute({
  method: 'post',
  path: '/walletobjects/v1/transitObject/{resourceId}/addMessage',
  tags: ['transitobject'],
  description: 'Adds a message to the transit object referenced by the given object ID.',
  operationId: 'walletobjects.transitobject.addmessage',
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
      resourceId: z
        .string()
        .openapi({
          param: {
            description:
              "The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, '.', '_', or '-'.",
            in: 'path',
            name: 'resourceId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: AddMessageRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: TransitObjectAddMessageResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/wallet_object.issuer'],
      Oauth2c: ['https://www.googleapis.com/auth/wallet_object.issuer'],
    },
  ],
})
