import { createRoute, z } from '@hono/zod-openapi'

const GdataBlobstore2InfoSchema = z
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
  .openapi('GdataBlobstore2Info')

const GdataObjectIdSchema = z
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
  .openapi('GdataObjectId')

const GdataCompositeMediaSchema = z
  .object({
    blobRef: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Blobstore v1 reference, set if reference_type is BLOBSTORE_REF This should be the byte representation of a blobstore.BlobRef. Since Blobstore is deprecating v1, use blobstore2_info instead. For now, any v2 blob will also be represented in this field as v1 BlobRef.',
      }),
    blobstore2Info: GdataBlobstore2InfoSchema.exactOptional().openapi({
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
    objectId: GdataObjectIdSchema.exactOptional().openapi({
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
  .openapi('GdataCompositeMedia')

const GdataContentTypeInfoSchema = z
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
  .openapi('GdataContentTypeInfo')

const GdataDiffChecksumsResponseSchema = z
  .object({
    checksumsLocation: GdataCompositeMediaSchema.exactOptional().openapi({
      description:
        'Exactly one of these fields must be populated. If checksums_location is filled, the server will return the corresponding contents to the user. If object_location is filled, the server will calculate the checksums based on the content there and return that to the user. For details on the format of the checksums, see http://go/scotty-diff-protocol.',
    }),
    chunkSizeBytes: z
      .string()
      .exactOptional()
      .openapi({ description: 'The chunk size of checksums. Must be a multiple of 256KB.' }),
    objectLocation: GdataCompositeMediaSchema.exactOptional().openapi({
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
  .openapi('GdataDiffChecksumsResponse')

const GdataDiffDownloadResponseSchema = z
  .object({
    objectLocation: GdataCompositeMediaSchema.exactOptional().openapi({
      description: 'The original object location.',
    }),
  })
  .openapi({
    description:
      'Backend response for a Diff download response. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.',
    required: [],
  })
  .openapi('GdataDiffDownloadResponse')

const GdataDiffUploadRequestSchema = z
  .object({
    checksumsInfo: GdataCompositeMediaSchema.exactOptional().openapi({
      description:
        'The location of the checksums for the new object. Agents must clone the object located here, as the upload server will delete the contents once a response is received. For details on the format of the checksums, see http://go/scotty-diff-protocol.',
    }),
    objectInfo: GdataCompositeMediaSchema.exactOptional().openapi({
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
  .openapi('GdataDiffUploadRequest')

const GdataDiffUploadResponseSchema = z
  .object({
    objectVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The object version of the object at the server. Must be included in the end notification response. The version in the end notification response must correspond to the new version of the object that is now stored at the server, after the upload.',
      }),
    originalObject: GdataCompositeMediaSchema.exactOptional().openapi({
      description:
        'The location of the original file for a diff upload request. Must be filled in if responding to an upload start notification.',
    }),
  })
  .openapi({
    description:
      'Backend response for a Diff upload request. For details on the Scotty Diff protocol, visit http://go/scotty-diff-protocol.',
    required: [],
  })
  .openapi('GdataDiffUploadResponse')

const GdataDiffVersionResponseSchema = z
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
  .openapi('GdataDiffVersionResponse')

const GdataDownloadParametersSchema = z
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
  .openapi('GdataDownloadParameters')

const GdataMediaSchema = z
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
    blobstore2Info: GdataBlobstore2InfoSchema.exactOptional().openapi({
      description:
        'Blobstore v2 info, set if reference_type is BLOBSTORE_REF and it refers to a v2 blob.',
    }),
    compositeMedia: z
      .array(GdataCompositeMediaSchema)
      .exactOptional()
      .openapi({
        description:
          'A composite media composed of one or more media objects, set if reference_type is COMPOSITE_MEDIA. The media length field must be set to the sum of the lengths of all composite media objects. Note: All composite media must have length specified.',
      }),
    contentType: z.string().exactOptional().openapi({ description: 'MIME type of the data' }),
    contentTypeInfo: GdataContentTypeInfoSchema.exactOptional().openapi({
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
    diffChecksumsResponse: GdataDiffChecksumsResponseSchema.exactOptional().openapi({
      description: 'Set if reference_type is DIFF_CHECKSUMS_RESPONSE.',
    }),
    diffDownloadResponse: GdataDiffDownloadResponseSchema.exactOptional().openapi({
      description: 'Set if reference_type is DIFF_DOWNLOAD_RESPONSE.',
    }),
    diffUploadRequest: GdataDiffUploadRequestSchema.exactOptional().openapi({
      description: 'Set if reference_type is DIFF_UPLOAD_REQUEST.',
    }),
    diffUploadResponse: GdataDiffUploadResponseSchema.exactOptional().openapi({
      description: 'Set if reference_type is DIFF_UPLOAD_RESPONSE.',
    }),
    diffVersionResponse: GdataDiffVersionResponseSchema.exactOptional().openapi({
      description: 'Set if reference_type is DIFF_VERSION_RESPONSE.',
    }),
    downloadParameters: GdataDownloadParametersSchema.exactOptional().openapi({
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
    objectId: GdataObjectIdSchema.exactOptional().openapi({
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
  })
  .openapi('GdataMedia')

const GoogleFirebaseAppdistroV1TestCertificateSchema = z
  .object({
    hashMd5: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Hex string of MD5 hash of the test certificate used to resign the AAB',
      }),
    hashSha1: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Hex string of SHA1 hash of the test certificate used to resign the AAB',
      }),
    hashSha256: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Hex string of SHA256 hash of the test certificate used to resign the AAB',
      }),
  })
  .openapi({ description: 'App bundle test certificate', required: [] })
  .openapi('GoogleFirebaseAppdistroV1TestCertificate')

const GoogleFirebaseAppdistroV1AabInfoSchema = z
  .object({
    integrationState: z
      .enum([
        'AAB_INTEGRATION_STATE_UNSPECIFIED',
        'INTEGRATED',
        'PLAY_ACCOUNT_NOT_LINKED',
        'NO_APP_WITH_GIVEN_BUNDLE_ID_IN_PLAY_ACCOUNT',
        'APP_NOT_PUBLISHED',
        'AAB_STATE_UNAVAILABLE',
        'PLAY_IAS_TERMS_NOT_ACCEPTED',
      ])
      .exactOptional()
      .openapi({ description: 'App bundle integration state. Only valid for android apps.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the `AabInfo` resource. Format: `projects/{project_number}/apps/{app}/aabInfo`',
      }),
    testCertificate: GoogleFirebaseAppdistroV1TestCertificateSchema.exactOptional().openapi({
      description:
        'App bundle test certificate generated for the app. Set after the first app bundle is uploaded for this app.',
    }),
  })
  .openapi({
    description: 'Android App Bundle (AAB) information for a Firebase app.',
    required: [],
  })
  .openapi('GoogleFirebaseAppdistroV1AabInfo')

const GoogleFirebaseAppdistroV1BatchAddTestersRequestSchema = z
  .object({
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The email addresses of the tester resources to create. A maximum of 999 and a minimum of 1 tester can be created in a batch.',
      }),
  })
  .openapi({ description: 'The Request message for batch adding testers', required: [] })
  .openapi('GoogleFirebaseAppdistroV1BatchAddTestersRequest')

const GoogleFirebaseAppdistroV1TesterSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the tester associated with the Google account used to accept the tester invitation.',
      }),
    groups: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The resource names of the groups this tester belongs to.' }),
    lastActivityTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The time the tester was last active. This is the most recent time the tester installed one of the apps. If they've never installed one or if the release no longer exists, this is the time the tester was added to the project.",
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`',
      }),
  })
  .openapi({
    description: 'A person that can be invited to test apps in a Firebase project.',
    required: [],
  })
  .openapi('GoogleFirebaseAppdistroV1Tester')

const GoogleFirebaseAppdistroV1BatchAddTestersResponseSchema = z
  .object({
    testers: z
      .array(GoogleFirebaseAppdistroV1TesterSchema)
      .exactOptional()
      .openapi({ description: 'The testers which are created and/or already exist' }),
  })
  .openapi({ description: 'The Response message for `BatchAddTesters`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1BatchAddTestersResponse')

const GoogleFirebaseAppdistroV1BatchDeleteReleasesRequestSchema = z
  .object({
    names: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The names of the release resources to delete. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}` A maximum of 100 releases can be deleted per request.',
      }),
  })
  .openapi({ description: 'The request message for `BatchDeleteReleases`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1BatchDeleteReleasesRequest')

const GoogleFirebaseAppdistroV1BatchJoinGroupRequestSchema = z
  .object({
    createMissingTesters: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether to create tester resources based on `emails` if they don't exist yet.",
      }),
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The emails of the testers to be added to the group. A maximum of 999 and a minimum of 1 tester can be created in a batch.',
      }),
  })
  .openapi({ description: 'The request message for `BatchJoinGroup`', required: [] })
  .openapi('GoogleFirebaseAppdistroV1BatchJoinGroupRequest')

const GoogleFirebaseAppdistroV1BatchLeaveGroupRequestSchema = z
  .object({
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The email addresses of the testers to be removed from the group. A maximum of 999 and a minimum of 1 testers can be removed in a batch.',
      }),
  })
  .openapi({ description: 'Request message for `BatchLeaveGroup`', required: [] })
  .openapi('GoogleFirebaseAppdistroV1BatchLeaveGroupRequest')

const GoogleFirebaseAppdistroV1BatchRemoveTestersRequestSchema = z
  .object({
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'Required. The email addresses of the tester resources to removed. A maximum of 999 and a minimum of 1 testers can be deleted in a batch.',
      }),
  })
  .openapi({ description: 'The request message for `BatchRemoveTesters`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1BatchRemoveTestersRequest')

const GoogleFirebaseAppdistroV1BatchRemoveTestersResponseSchema = z
  .object({
    emails: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of deleted tester emails' }),
  })
  .openapi({ description: 'The response message for `BatchRemoveTesters`', required: [] })
  .openapi('GoogleFirebaseAppdistroV1BatchRemoveTestersResponse')

const GoogleFirebaseAppdistroV1DistributeReleaseRequestSchema = z
  .object({
    groupAliases: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of group aliases (IDs) to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request.',
      }),
    testerEmails: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'A list of tester email addresses to be given access to this release. A combined maximum of 999 `testerEmails` and `groupAliases` can be specified in a single request.',
      }),
  })
  .openapi({ description: 'The request message for `DistributeRelease`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1DistributeReleaseRequest')

const GoogleFirebaseAppdistroV1DistributeReleaseResponseSchema = z
  .object({})
  .openapi({ description: 'The response message for `DistributeRelease`.' })
  .openapi('GoogleFirebaseAppdistroV1DistributeReleaseResponse')

const GoogleFirebaseAppdistroV1FeedbackReportSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The time when the feedback report was created.',
        readOnly: true,
      }),
    firebaseConsoleUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A link to the Firebase console displaying the feedback report.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the feedback report resource. Format: `projects/{project_number}/apps/{app}/releases/{release}/feedbackReports/{feedback_report}`',
      }),
    screenshotUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A signed link (which expires in one hour) that lets you directly download the screenshot.',
        readOnly: true,
      }),
    tester: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The resource name of the tester who submitted the feedback report.',
        readOnly: true,
      }),
    text: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The text of the feedback report.', readOnly: true }),
  })
  .openapi({ description: 'A feedback report submitted by a tester for a release.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1FeedbackReport')

const GoogleFirebaseAppdistroV1GroupSchema = z
  .object({
    displayName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Required. The display name of the group.' }),
    inviteLinkCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of invite links for this group.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`',
      }),
    releaseCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of releases this group is permitted to access.',
        readOnly: true,
      }),
    testerCount: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Output only. The number of testers who are members of this group.',
        readOnly: true,
      }),
  })
  .openapi({
    description:
      'A group which can contain testers. A group can be invited to test apps in a Firebase project.',
    required: [],
  })
  .openapi('GoogleFirebaseAppdistroV1Group')

const GoogleFirebaseAppdistroV1ListFeedbackReportsResponseSchema = z
  .object({
    feedbackReports: z
      .array(GoogleFirebaseAppdistroV1FeedbackReportSchema)
      .exactOptional()
      .openapi({ description: 'The feedback reports' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'The response message for `ListFeedbackReports`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1ListFeedbackReportsResponse')

const GoogleFirebaseAppdistroV1ListGroupsResponseSchema = z
  .object({
    groups: z
      .array(GoogleFirebaseAppdistroV1GroupSchema)
      .exactOptional()
      .openapi({ description: 'The groups listed.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
  })
  .openapi({ description: 'The response message for `ListGroups`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1ListGroupsResponse')

const GoogleFirebaseAppdistroV1ReleaseNotesSchema = z
  .object({
    text: z.string().exactOptional().openapi({ description: 'The text of the release notes.' }),
  })
  .openapi({ description: 'Notes that belong to a release.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1ReleaseNotes')

const GoogleFirebaseAppdistroV1ReleaseSchema = z
  .object({
    binaryDownloadUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A signed link (which expires in one hour) to directly download the app binary (IPA/APK/AAB) file.',
        readOnly: true,
      }),
    buildVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Build version of the release. For an Android release, the build version is the `versionCode`. For an iOS release, the build version is the `CFBundleVersion`.',
        readOnly: true,
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time the release was created.', readOnly: true }),
    displayVersion: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. Display version of the release. For an Android release, the display version is the `versionName`. For an iOS release, the display version is the `CFBundleShortVersionString`.',
        readOnly: true,
      }),
    firebaseConsoleUri: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. A link to the Firebase console displaying a single release.',
        readOnly: true,
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The name of the release resource. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`',
      }),
    releaseNotes: GoogleFirebaseAppdistroV1ReleaseNotesSchema.exactOptional().openapi({
      description: 'Notes of the release.',
    }),
    testingUri: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. A link to the release in the tester web clip or Android app that lets testers (which were granted access to the app) view release notes and install the app onto their devices.',
        readOnly: true,
      }),
  })
  .openapi({ description: 'A release of a Firebase app.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1Release')

const GoogleFirebaseAppdistroV1ListReleasesResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    releases: z
      .array(GoogleFirebaseAppdistroV1ReleaseSchema)
      .exactOptional()
      .openapi({ description: 'The releases' }),
  })
  .openapi({ description: 'The response message for `ListReleases`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1ListReleasesResponse')

const GoogleFirebaseAppdistroV1ListTestersResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A short-lived token, which can be sent as `pageToken` to retrieve the next page. If this field is omitted, there are no subsequent pages.',
      }),
    testers: z
      .array(GoogleFirebaseAppdistroV1TesterSchema)
      .exactOptional()
      .openapi({ description: 'The testers listed.' }),
  })
  .openapi({ description: 'The response message for `ListTesters`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1ListTestersResponse')

const GoogleFirebaseAppdistroV1UploadReleaseMetadataSchema = z
  .object({})
  .openapi({ description: 'Operation metadata for `UploadRelease`.' })
  .openapi('GoogleFirebaseAppdistroV1UploadReleaseMetadata')

const GoogleFirebaseAppdistroV1UploadReleaseRequestSchema = z
  .object({ blob: GdataMediaSchema.exactOptional().openapi({ description: 'Binary to upload' }) })
  .openapi({ description: 'Request message for `UploadRelease`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1UploadReleaseRequest')

const GoogleFirebaseAppdistroV1UploadReleaseResponseSchema = z
  .object({
    release: GoogleFirebaseAppdistroV1ReleaseSchema.exactOptional().openapi({
      description: 'Release associated with the uploaded binary.',
    }),
    result: z
      .enum([
        'UPLOAD_RELEASE_RESULT_UNSPECIFIED',
        'RELEASE_CREATED',
        'RELEASE_UPDATED',
        'RELEASE_UNMODIFIED',
      ])
      .exactOptional()
      .openapi({ description: 'Result of upload release.' }),
  })
  .openapi({ description: 'Response message for `UploadRelease`.', required: [] })
  .openapi('GoogleFirebaseAppdistroV1UploadReleaseResponse')

const GoogleLongrunningCancelOperationRequestSchema = z
  .object({})
  .openapi({ description: 'The request message for Operations.CancelOperation.' })
  .openapi('GoogleLongrunningCancelOperationRequest')

const GoogleRpcStatusSchema = z
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
  .openapi('GoogleRpcStatus')

const GoogleLongrunningOperationSchema = z
  .object({
    done: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.',
      }),
    error: GoogleRpcStatusSchema.exactOptional().openapi({
      description: 'The error result of the operation in case of failure or cancellation.',
    }),
    metadata: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id}`.',
      }),
    response: z
      .record(
        z.string(),
        z
          .any()
          .openapi({
            description: 'Properties of the object. Contains field @type with type URL.',
          }),
      )
      .exactOptional()
      .openapi({
        description:
          'The normal response of the operation in case of success. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.',
      }),
  })
  .openapi({
    description:
      'This resource represents a long-running operation that is the result of a network API call.',
    required: [],
  })
  .openapi('GoogleLongrunningOperation')

const GoogleLongrunningListOperationsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({ description: 'The standard List next-page token.' }),
    operations: z
      .array(GoogleLongrunningOperationSchema)
      .exactOptional()
      .openapi({
        description: 'A list of operations that matches the specified filter in the request.',
      }),
  })
  .openapi({ description: 'The response message for Operations.ListOperations.', required: [] })
  .openapi('GoogleLongrunningListOperationsResponse')

const GoogleLongrunningWaitOperationRequestSchema = z
  .object({
    timeout: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The maximum duration to wait before timing out. If left blank, the wait will be at most the time permitted by the underlying HTTP/RPC protocol. If RPC context deadline is also specified, the shorter one will be used.',
      }),
  })
  .openapi({ description: 'The request message for Operations.WaitOperation.', required: [] })
  .openapi('GoogleLongrunningWaitOperationRequest')

const GoogleProtobufEmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('GoogleProtobufEmpty')

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

export const postV1AppReleasesUploadRoute = createRoute({
  method: 'post',
  path: '/v1/{app}/releases:upload',
  tags: ['media'],
  description:
    'Uploads a binary. Uploading a binary can result in a new release being created, an update to an existing release, or a no-op if a release with the same binary already exists.',
  operationId: 'firebaseappdistribution.media.upload',
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
      app: z
        .string()
        .openapi({
          param: {
            description:
              'The name of the app resource. Format: `projects/{project_number}/apps/{app_id}`',
            in: 'path',
            name: 'app',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/octet-stream': { schema: GoogleFirebaseAppdistroV1UploadReleaseRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1GroupBatchJoinRoute = createRoute({
  method: 'post',
  path: '/v1/{group}:batchJoin',
  tags: ['projects'],
  description:
    'Batch adds members to a group. The testers will gain access to all releases that the groups have access to.',
  operationId: 'firebaseappdistribution.projects.groups.batchJoin',
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
      group: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the group resource to which testers are added. Format: `projects/{project_number}/groups/{group_alias}`',
            in: 'path',
            name: 'group',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1BatchJoinGroupRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1GroupBatchLeaveRoute = createRoute({
  method: 'post',
  path: '/v1/{group}:batchLeave',
  tags: ['projects'],
  description:
    'Batch removed members from a group. The testers will lose access to all releases that the groups have access to.',
  operationId: 'firebaseappdistribution.projects.groups.batchLeave',
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
      group: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the group resource from which testers are removed. Format: `projects/{project_number}/groups/{group_alias}`',
            in: 'path',
            name: 'group',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1BatchLeaveGroupRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['projects'],
  description: 'Get a group.',
  operationId: 'firebaseappdistribution.projects.groups.get',
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
              'Required. The name of the group resource to retrieve. Format: `projects/{project_number}/groups/{group_alias}`',
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
      content: { 'application/json': { schema: GoogleFirebaseAppdistroV1GroupSchema } },
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
  description: 'Delete a group.',
  operationId: 'firebaseappdistribution.projects.groups.delete',
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
              'Required. The name of the group resource. Format: `projects/{project_number}/groups/{group_alias}`',
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
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const patchV1NameRoute = createRoute({
  method: 'patch',
  path: '/v1/{name}',
  tags: ['projects'],
  description:
    'Update a tester. If the testers joins a group they gain access to all releases that the group has access to.',
  operationId: 'firebaseappdistribution.projects.testers.patch',
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
      updateMask: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'The list of fields to update.',
            in: 'query',
            name: 'updateMask',
            schema: { type: 'string' },
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
              'The name of the tester resource. Format: `projects/{project_number}/testers/{email_address}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleFirebaseAppdistroV1TesterSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppdistroV1TesterSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1NameOperationsRoute = createRoute({
  method: 'get',
  path: '/v1/{name}/operations',
  tags: ['projects'],
  description:
    "Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.",
  operationId: 'firebaseappdistribution.projects.apps.releases.operations.list',
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
            description: 'The standard list filter.',
            in: 'query',
            name: 'filter',
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
            description: 'The standard list page size.',
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
            description: 'The standard list page token.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description: "The name of the operation's parent resource.",
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
      content: { 'application/json': { schema: GoogleLongrunningListOperationsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameCancelRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:cancel',
  tags: ['projects'],
  description:
    "Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.",
  operationId: 'firebaseappdistribution.projects.apps.releases.operations.cancel',
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
            description: 'The name of the operation resource to be cancelled.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleLongrunningCancelOperationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameDistributeRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:distribute',
  tags: ['projects'],
  description:
    "Distributes a release to testers. This call does the following: 1. Creates testers for the specified emails, if none exist. 2. Adds the testers and groups to the release. 3. Sends new testers an invitation email. 4. Sends existing testers a new release email. The request will fail with a `INVALID_ARGUMENT` if it contains a group that doesn't exist.",
  operationId: 'firebaseappdistribution.projects.apps.releases.distribute',
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
              'Required. The name of the release resource to distribute. Format: `projects/{project_number}/apps/{app_id}/releases/{release_id}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1DistributeReleaseRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1DistributeReleaseResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1NameWaitRoute = createRoute({
  method: 'post',
  path: '/v1/{name}:wait',
  tags: ['projects'],
  description:
    'Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.',
  operationId: 'firebaseappdistribution.projects.apps.releases.operations.wait',
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
            description: 'The name of the operation resource to wait on.',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: GoogleLongrunningWaitOperationRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleLongrunningOperationSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentFeedbackReportsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/feedbackReports',
  tags: ['projects'],
  description: 'Lists feedback reports. By default, sorts by `createTime` in descending order.',
  operationId: 'firebaseappdistribution.projects.apps.releases.feedbackReports.list',
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
              'The expression to filter feedback reports listed in the response. To learn more about filtering, refer to [Google\'s AIP-160 standard](http://aip.dev/160). Supported fields: - `tester` - `createTime` supports `<`, `<=`, `>` and `>=`, and expects an RFC-3339 formatted string Example: - `createTime <= "2023-03-10T00:00:00+04:00"` - `tester = "projects/-/testers/*@example.com"`',
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
              'The fields used to order releases. Supported fields: - `createTime` - `tester` To specify descending order for a field, append a "desc" suffix, for example, `createTime desc`. If this parameter is not set, releases are ordered by `createTime` in descending order.',
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
            description:
              'The maximum number of feedback reports to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 feedback reports are returned. Values above 100 are coerced to 100.',
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
              'A page token, received from a previous `ListFeedbackReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFeedbackReports` must match the call that provided the page token.',
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
              'Required. The name of the release resource, which is the parent of the feedback report resources. Format: `projects/{project_number}/apps/{app}/releases/{release}`',
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
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1ListFeedbackReportsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentGroupsRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/groups',
  tags: ['projects'],
  description: 'List groups.',
  operationId: 'firebaseappdistribution.projects.groups.list',
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
            description:
              'Optional. The maximum number of groups to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 25 groups are returned. Values above 1000 are coerced to 1000.',
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
              'Optional. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.',
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
              'Required. The name of the project resource, which is the parent of the group resources. Format: `projects/{project_number}`',
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
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1ListGroupsResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentGroupsRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/groups',
  tags: ['projects'],
  description: 'Create a group.',
  operationId: 'firebaseappdistribution.projects.groups.create',
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
      groupId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Optional. The "alias" to use for the group, which will become the final component of the group\'s resource name. This value must be unique per project. The field is named `groupId` to comply with AIP guidance for user-specified IDs. This value should be 4-63 characters, and valid characters are `/a-z-/`. If not set, it will be generated based on the display name.',
            in: 'query',
            name: 'groupId',
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
              'Required. The name of the project resource, which is the parent of the group resource. Format: `projects/{project_number}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: GoogleFirebaseAppdistroV1GroupSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleFirebaseAppdistroV1GroupSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentReleasesRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/releases',
  tags: ['projects'],
  description: 'Lists releases. By default, sorts by `createTime` in descending order.',
  operationId: 'firebaseappdistribution.projects.apps.releases.list',
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
              'The expression to filter releases listed in the response. To learn more about filtering, refer to [Google\'s AIP-160 standard](http://aip.dev/160). Supported fields: - `releaseNotes.text` supports `=` (can contain a wildcard character (`*`) at the beginning or end of the string) - `createTime` supports `<`, `<=`, `>` and `>=`, and expects an RFC-3339 formatted string Examples: - `createTime <= "2021-09-08T00:00:00+04:00"` - `releaseNotes.text="fixes" AND createTime >= "2021-09-08T00:00:00.0Z"` - `releaseNotes.text="*v1.0.0-rc*"`',
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
              'The fields used to order releases. Supported fields: - `createTime` To specify descending order for a field, append a "desc" suffix, for example, `createTime desc`. If this parameter is not set, releases are ordered by `createTime` in descending order.',
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
            description:
              'The maximum number of releases to return. The service may return fewer than this value. The valid range is [1-100]; If unspecified (0), at most 25 releases are returned. Values above 100 are coerced to 100.',
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
              'A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleases` must match the call that provided the page token.',
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
              'Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}`',
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
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1ListReleasesResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ParentReleasesBatchDeleteRoute = createRoute({
  method: 'post',
  path: '/v1/{parent}/releases:batchDelete',
  tags: ['projects'],
  description: 'Deletes releases. A maximum of 100 releases can be deleted per request.',
  operationId: 'firebaseappdistribution.projects.apps.releases.batchDelete',
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
              'Required. The name of the app resource, which is the parent of the release resources. Format: `projects/{project_number}/apps/{app_id}`',
            in: 'path',
            name: 'parent',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1BatchDeleteReleasesRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: GoogleProtobufEmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1ParentTestersRoute = createRoute({
  method: 'get',
  path: '/v1/{parent}/testers',
  tags: ['projects'],
  description: 'Lists testers and their resource ids.',
  operationId: 'firebaseappdistribution.projects.testers.list',
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
              'Optional. The expression to filter testers listed in the response. To learn more about filtering, refer to [Google\'s AIP-160 standard](http://aip.dev/160). Supported fields: - `name` - `displayName` - `groups` Example: - `name = "projects/-/testers/*@example.com"` - `displayName = "Joe Sixpack"` - `groups = "projects/*/groups/qa-team"`',
            in: 'query',
            name: 'filter',
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
            description:
              'Optional. The maximum number of testers to return. The service may return fewer than this value. The valid range is [1-1000]; If unspecified (0), at most 10 testers are returned. Values above 1000 are coerced to 1000.',
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
              'Optional. A page token, received from a previous `ListTesters` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTesters` must match the call that provided the page token.',
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
              'Required. The name of the project resource, which is the parent of the tester resources. Format: `projects/{project_number}`',
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
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1ListTestersResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectTestersBatchAddRoute = createRoute({
  method: 'post',
  path: '/v1/{project}/testers:batchAdd',
  tags: ['projects'],
  description:
    "Batch adds testers. This call adds testers for the specified emails if they don't already exist. Returns all testers specified in the request, including newly created and previously existing testers. This action is idempotent.",
  operationId: 'firebaseappdistribution.projects.testers.batchAdd',
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
      project: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project resource. Format: `projects/{project_number}`',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1BatchAddTestersRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1BatchAddTestersResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const postV1ProjectTestersBatchRemoveRoute = createRoute({
  method: 'post',
  path: '/v1/{project}/testers:batchRemove',
  tags: ['projects'],
  description:
    'Batch removes testers. If found, this call deletes testers for the specified emails. Returns all deleted testers.',
  operationId: 'firebaseappdistribution.projects.testers.batchRemove',
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
      project: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the project resource. Format: `projects/{project_number}`',
            in: 'path',
            name: 'project',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1BatchRemoveTestersRequestSchema },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: {
        'application/json': { schema: GoogleFirebaseAppdistroV1BatchRemoveTestersResponseSchema },
      },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
