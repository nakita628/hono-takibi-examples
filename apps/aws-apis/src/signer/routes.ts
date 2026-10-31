import { createRoute, z } from '@hono/zod-openapi'

const BucketNameSchema = z.string().openapi('BucketName')

const KeySchema = z.string().openapi('Key')

const VersionSchema = z.string().openapi('Version')

const S3SourceSchema = z
  .object({
    bucketName: BucketNameSchema.and(z.any().openapi({ description: 'Name of the S3 bucket.' })),
    key: KeySchema.and(
      z
        .any()
        .openapi({
          description: 'Key name of the bucket object that contains your unsigned code.',
        }),
    ),
    version: VersionSchema.and(
      z
        .any()
        .openapi({
          description: 'Version of your source image in your version enabled S3 bucket.',
        }),
    ),
  })
  .openapi({
    required: ['bucketName', 'key', 'version'],
    description: 'Information about the S3 bucket where you saved your unsigned code.',
  })
  .openapi('S3Source')

type SourceType = { s3?: z.infer<typeof S3SourceSchema> & { [key: string]: unknown } }

const S3SignedObjectSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: 'Name of the S3 bucket.' }),
    ).exactOptional(),
    key: KeySchema.and(
      z
        .any()
        .openapi({
          description: 'Key name that uniquely identifies a signed code image in your bucket.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description: 'The S3 bucket name and key where code signing saved your signed code image.',
    required: [],
  })
  .openapi('S3SignedObject')

type SignedObjectType = { s3?: z.infer<typeof S3SignedObjectSchema> & { [key: string]: unknown } }

const PrefixSchema = z.string().openapi('Prefix')

const S3DestinationSchema = z
  .object({
    bucketName: BucketNameSchema.and(
      z.any().openapi({ description: 'Name of the S3 bucket.' }),
    ).exactOptional(),
    prefix: PrefixSchema.and(
      z
        .any()
        .openapi({
          description:
            'An Amazon S3 prefix that you can use to limit responses to those that begin with the specified prefix.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'The name and prefix of the S3 bucket where code signing saves your signed objects.',
    required: [],
  })
  .openapi('S3Destination')

type DestinationType = { s3?: z.infer<typeof S3DestinationSchema> & { [key: string]: unknown } }

const StringSchema = z.string().openapi('String')

const AddProfilePermissionResponseSchema = z
  .object({
    revisionId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the current profile revision.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AddProfilePermissionResponse')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const ServiceLimitExceededExceptionSchema = z.any().openapi('ServiceLimitExceededException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const TooManyRequestsExceptionSchema = z.any().openapi('TooManyRequestsException')

const InternalServiceErrorExceptionSchema = z.any().openapi('InternalServiceErrorException')

const JobIdSchema = z.string().openapi('JobId')

const SourceSchema: z.ZodType<SourceType> = z
  .lazy(() =>
    z
      .object({
        s3: S3SourceSchema.and(
          z.any().openapi({ description: 'The <code>S3Source</code> object.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.',
        required: [],
      }),
  )
  .openapi('Source')

const CertificateArnSchema = z.string().openapi('CertificateArn')

const SigningMaterialSchema = z
  .object({
    certificateArn: CertificateArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the certificates that is used to sign your code.',
        }),
    ),
  })
  .openapi({
    required: ['certificateArn'],
    description: 'The ACM certificate that is used to sign your code.',
  })
  .openapi('SigningMaterial')

const PlatformIdSchema = z.string().openapi('PlatformId')

const DisplayNameSchema = z.string().openapi('DisplayName')

const ProfileNameSchema = z
  .string()
  .regex(/^[a-zA-Z0-9_]{2,}/)
  .min(2)
  .max(64)
  .openapi('ProfileName')

const ProfileVersionSchema = z
  .string()
  .regex(/^[a-zA-Z0-9]{10}$/)
  .length(10)
  .openapi('ProfileVersion')

const EncryptionAlgorithmSchema = z.enum(['RSA', 'ECDSA']).openapi('EncryptionAlgorithm')

const HashAlgorithmSchema = z.enum(['SHA1', 'SHA256']).openapi('HashAlgorithm')

const SigningConfigurationOverridesSchema = z
  .object({
    encryptionAlgorithm: EncryptionAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            'A specified override of the default encryption algorithm that is used in a code signing job.',
        }),
    ).exactOptional(),
    hashAlgorithm: HashAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description:
            'A specified override of the default hash algorithm that is used in a code signing job.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'A signing configuration that overrides the default encryption or hash algorithm of a signing job.',
    required: [],
  })
  .openapi('SigningConfigurationOverrides')

const ImageFormatSchema = z.enum(['JSON', 'JSONEmbedded', 'JSONDetached']).openapi('ImageFormat')

const SigningPlatformOverridesSchema = z
  .object({
    signingConfiguration: SigningConfigurationOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A signing configuration that overrides the default encryption or hash algorithm of a signing job.',
        }),
    ).exactOptional(),
    signingImageFormat: ImageFormatSchema.and(
      z
        .any()
        .openapi({
          description:
            'A signed image is a JSON object. When overriding the default signing platform configuration, a customer can select either of two signing formats, <code>JSONEmbedded</code> or <code>JSONDetached</code>. (A third format value, <code>JSON</code>, is reserved for future use.) With <code>JSONEmbedded</code>, the signing image has the payload embedded in it. With <code>JSONDetached</code>, the payload is not be embedded in the signing image.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Any overrides that are applied to the signing configuration of a code signing platform.',
    required: [],
  })
  .openapi('SigningPlatformOverrides')

const SigningParameterValueSchema = z.string().openapi('SigningParameterValue')

const SigningParametersSchema = z
  .record(z.string(), SigningParameterValueSchema)
  .openapi('SigningParameters')

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const RequestedBySchema = z.string().openapi('RequestedBy')

const SigningStatusSchema = z.enum(['InProgress', 'Failed', 'Succeeded']).openapi('SigningStatus')

const StatusReasonSchema = z.string().openapi('StatusReason')

const SigningJobRevocationRecordSchema = z
  .object({
    reason: StringSchema.and(
      z.any().openapi({ description: 'A caller-supplied reason for revocation.' }),
    ).exactOptional(),
    revokedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time of revocation.' }),
    ).exactOptional(),
    revokedBy: StringSchema.and(
      z.any().openapi({ description: 'The identity of the revoker.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Revocation information for a signing job.', required: [] })
  .openapi('SigningJobRevocationRecord')

const SignedObjectSchema: z.ZodType<SignedObjectType> = z
  .lazy(() =>
    z
      .object({
        s3: S3SignedObjectSchema.and(
          z.any().openapi({ description: 'The <code>S3SignedObject</code>.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Points to an <code>S3SignedObject</code> object that contains information about your signed code image.',
        required: [],
      }),
  )
  .openapi('SignedObject')

const AccountIdSchema = z
  .string()
  .regex(/^[0-9]{12}$/)
  .length(12)
  .openapi('AccountId')

const DescribeSigningJobResponseSchema = z
  .object({
    jobId: JobIdSchema.and(
      z.any().openapi({ description: 'The ID of the signing job on output.' }),
    ).exactOptional(),
    source: SourceSchema.and(
      z
        .any()
        .openapi({
          description: 'The object that contains the name of your S3 bucket or your raw code.',
        }),
    ).exactOptional(),
    signingMaterial: SigningMaterialSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon Resource Name (ARN) of your code signing certificate.',
        }),
    ).exactOptional(),
    platformId: PlatformIdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The microcontroller platform to which your signed code image will be distributed.',
        }),
    ).exactOptional(),
    platformDisplayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A human-readable name for the signing platform associated with the signing job.',
        }),
    ).exactOptional(),
    profileName: ProfileNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the profile that initiated the signing operation.' }),
    ).exactOptional(),
    profileVersion: ProfileVersionSchema.and(
      z
        .any()
        .openapi({
          description: 'The version of the signing profile used to initiate the signing job.',
        }),
    ).exactOptional(),
    overrides: SigningPlatformOverridesSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of any overrides that were applied to the signing operation.',
        }),
    ).exactOptional(),
    signingParameters: SigningParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of user-assigned key-value pairs used during signing. These values contain any information that you specified for use in your signing job. ',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'Date and time that the signing job was created.' }),
    ).exactOptional(),
    completedAt: TimestampSchema.and(
      z.any().openapi({ description: 'Date and time that the signing job was completed.' }),
    ).exactOptional(),
    signatureExpiresAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'Thr expiration timestamp for the signature generated by the signing job.',
        }),
    ).exactOptional(),
    requestedBy: RequestedBySchema.and(
      z.any().openapi({ description: 'The IAM principal that requested the signing job.' }),
    ).exactOptional(),
    status: SigningStatusSchema.and(
      z.any().openapi({ description: 'Status of the signing job.' }),
    ).exactOptional(),
    statusReason: StatusReasonSchema.and(
      z.any().openapi({ description: 'String value that contains the status reason.' }),
    ).exactOptional(),
    revocationRecord: SigningJobRevocationRecordSchema.and(
      z
        .any()
        .openapi({
          description:
            'A revocation record if the signature generated by the signing job has been revoked. Contains a timestamp and the ID of the IAM entity that revoked the signature.',
        }),
    ).exactOptional(),
    signedObject: SignedObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            'Name of the S3 bucket where the signed code image is saved by code signing.',
        }),
    ).exactOptional(),
    jobOwner: AccountIdSchema.and(
      z.any().openapi({ description: 'The AWS account ID of the job owner.' }),
    ).exactOptional(),
    jobInvoker: AccountIdSchema.and(
      z.any().openapi({ description: 'The IAM entity that initiated the signing job.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('DescribeSigningJobResponse')

const CategorySchema = z.literal('AWSIoT').openapi('Category')

const EncryptionAlgorithmsSchema = z
  .array(EncryptionAlgorithmSchema)
  .openapi('EncryptionAlgorithms')

const EncryptionAlgorithmOptionsSchema = z
  .object({
    allowedValues: EncryptionAlgorithmsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The set of accepted encryption algorithms that are allowed in a code signing job.',
        }),
    ),
    defaultValue: EncryptionAlgorithmSchema.and(
      z
        .any()
        .openapi({
          description: 'The default encryption algorithm that is used by a code signing job.',
        }),
    ),
  })
  .openapi({
    required: ['allowedValues', 'defaultValue'],
    description: 'The encryption algorithm options that are available to a code signing job.',
  })
  .openapi('EncryptionAlgorithmOptions')

const HashAlgorithmsSchema = z.array(HashAlgorithmSchema).openapi('HashAlgorithms')

const HashAlgorithmOptionsSchema = z
  .object({
    allowedValues: HashAlgorithmsSchema.and(
      z
        .any()
        .openapi({
          description: 'The set of accepted hash algorithms allowed in a code signing job.',
        }),
    ),
    defaultValue: HashAlgorithmSchema.and(
      z
        .any()
        .openapi({ description: 'The default hash algorithm that is used in a code signing job.' }),
    ),
  })
  .openapi({
    required: ['allowedValues', 'defaultValue'],
    description: 'The hash algorithms that are available to a code signing job.',
  })
  .openapi('HashAlgorithmOptions')

const SigningConfigurationSchema = z
  .object({
    encryptionAlgorithmOptions: EncryptionAlgorithmOptionsSchema.and(
      z
        .any()
        .openapi({
          description:
            'The encryption algorithm options that are available for a code signing job.',
        }),
    ),
    hashAlgorithmOptions: HashAlgorithmOptionsSchema.and(
      z
        .any()
        .openapi({
          description: 'The hash algorithm options that are available for a code signing job.',
        }),
    ),
  })
  .openapi({
    required: ['encryptionAlgorithmOptions', 'hashAlgorithmOptions'],
    description: 'The configuration of a code signing operation.',
  })
  .openapi('SigningConfiguration')

const ImageFormatsSchema = z.array(ImageFormatSchema).openapi('ImageFormats')

const SigningImageFormatSchema = z
  .object({
    supportedFormats: ImageFormatsSchema.and(
      z.any().openapi({ description: 'The supported formats of a code signing image.' }),
    ),
    defaultFormat: ImageFormatSchema.and(
      z.any().openapi({ description: 'The default format of a code signing image.' }),
    ),
  })
  .openapi({
    required: ['supportedFormats', 'defaultFormat'],
    description: 'The image format of a code signing platform or profile.',
  })
  .openapi('SigningImageFormat')

const MaxSizeInMBSchema = z.int().openapi('MaxSizeInMB')

const BoolSchema = z.boolean().openapi('Bool')

const GetSigningPlatformResponseSchema = z
  .object({
    platformId: PlatformIdSchema.and(
      z.any().openapi({ description: 'The ID of the target signing platform.' }),
    ).exactOptional(),
    displayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The display name of the target signing platform.' }),
    ).exactOptional(),
    partner: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of partner entities that use the target signing platform.',
        }),
    ).exactOptional(),
    target: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The validation template that is used by the target signing platform.',
        }),
    ).exactOptional(),
    category: CategorySchema.and(
      z.any().openapi({ description: 'The category type of the target signing platform.' }),
    ).exactOptional(),
    signingConfiguration: SigningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description: 'A list of configurations applied to the target platform at signing.',
        }),
    ).exactOptional(),
    signingImageFormat: SigningImageFormatSchema.and(
      z.any().openapi({ description: "The format of the target platform's signing image." }),
    ).exactOptional(),
    maxSizeInMB: MaxSizeInMBSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size (in MB) of the payload that can be signed by the target platform.',
        }),
    ).exactOptional(),
    revocationSupported: BoolSchema.and(
      z
        .any()
        .openapi({
          description:
            'A flag indicating whether signatures generated for the signing platform can be revoked.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSigningPlatformResponse')

const ArnSchema = z.string().min(20).max(2048).openapi('Arn')

const SigningProfileRevocationRecordSchema = z
  .object({
    revocationEffectiveFrom: TimestampSchema.and(
      z.any().openapi({ description: 'The time when revocation becomes effective.' }),
    ).exactOptional(),
    revokedAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the signing profile was revoked.' }),
    ).exactOptional(),
    revokedBy: StringSchema.and(
      z.any().openapi({ description: 'The identity of the revoker.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Revocation information for a signing profile.', required: [] })
  .openapi('SigningProfileRevocationRecord')

const IntegerSchema = z.int().openapi('Integer')

const ValidityTypeSchema = z.enum(['DAYS', 'MONTHS', 'YEARS']).openapi('ValidityType')

const SignatureValidityPeriodSchema = z
  .object({
    value: IntegerSchema.and(
      z
        .any()
        .openapi({ description: 'The numerical value of the time unit for signature validity.' }),
    ).exactOptional(),
    type: ValidityTypeSchema.and(
      z.any().openapi({ description: 'The time unit for signature validity.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The validity period for a signing job.', required: [] })
  .openapi('SignatureValidityPeriod')

const SigningProfileStatusSchema = z
  .enum(['Active', 'Canceled', 'Revoked'])
  .openapi('SigningProfileStatus')

const String2Schema = z.string().openapi('String2')

const TagValueSchema = z.string().max(256).openapi('TagValue')

const TagMapSchema = z
  .record(z.string(), TagValueSchema)
  .refine((val) => Object.keys(val).length >= 1)
  .refine((val) => Object.keys(val).length <= 200)
  .openapi('TagMap')

const GetSigningProfileResponseSchema = z
  .object({
    profileName: ProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the target signing profile.' }),
    ).exactOptional(),
    profileVersion: ProfileVersionSchema.and(
      z.any().openapi({ description: 'The current version of the signing profile.' }),
    ).exactOptional(),
    profileVersionArn: ArnSchema.and(
      z.any().openapi({ description: 'The signing profile ARN, including the profile version.' }),
    ).exactOptional(),
    revocationRecord: SigningProfileRevocationRecordSchema.exactOptional(),
    signingMaterial: SigningMaterialSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN of the certificate that the target profile uses for signing operations.',
        }),
    ).exactOptional(),
    platformId: PlatformIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of the platform that is used by the target signing profile.',
        }),
    ).exactOptional(),
    platformDisplayName: DisplayNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'A human-readable name for the signing platform associated with the signing profile.',
        }),
    ).exactOptional(),
    signatureValidityPeriod: SignatureValidityPeriodSchema.exactOptional(),
    overrides: SigningPlatformOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of overrides applied by the target signing profile for signing operations.',
        }),
    ).exactOptional(),
    signingParameters: SigningParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'A map of key-value pairs for signing operations that is attached to the target signing profile.',
        }),
    ).exactOptional(),
    status: SigningProfileStatusSchema.and(
      z.any().openapi({ description: 'The status of the target signing profile.' }),
    ).exactOptional(),
    statusReason: StringSchema.and(
      z.any().openapi({ description: 'Reason for the status of the target signing profile.' }),
    ).exactOptional(),
    arn: String2Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the signing profile.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the signing profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetSigningProfileResponse')

const PolicySizeBytesSchema = z.int().openapi('PolicySizeBytes')

const PermissionSchema = z
  .object({
    action: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'An AWS Signer action permitted as part of cross-account permissions.',
        }),
    ).exactOptional(),
    principal: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS principal that has been granted a cross-account permission.',
        }),
    ).exactOptional(),
    statementId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'A unique identifier for a cross-account permission statement.' }),
    ).exactOptional(),
    profileVersion: ProfileVersionSchema.and(
      z.any().openapi({ description: 'The signing profile version that a permission applies to.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'A cross-account permission for a signing profile.', required: [] })
  .openapi('Permission')

const PermissionsSchema = z.array(PermissionSchema).openapi('Permissions')

const ListProfilePermissionsResponseSchema = z
  .object({
    revisionId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The identifier for the current revision of profile permissions.',
        }),
    ).exactOptional(),
    policySizeBytes: PolicySizeBytesSchema.and(
      z
        .any()
        .openapi({
          description: 'Total size of the policy associated with the Signing Profile in bytes.',
        }),
    ).exactOptional(),
    permissions: PermissionsSchema.and(
      z.any().openapi({ description: 'List of permissions associated with the Signing Profile.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z.any().openapi({ description: 'String for specifying the next set of paginated results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListProfilePermissionsResponse')

const SigningJobSchema = z
  .object({
    jobId: JobIdSchema.and(
      z.any().openapi({ description: 'The ID of the signing job.' }),
    ).exactOptional(),
    source: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>Source</code> that contains information about a signing job's code image source.",
        }),
    ).exactOptional(),
    signedObject: SignedObjectSchema.and(
      z
        .any()
        .openapi({
          description:
            "A <code>SignedObject</code> structure that contains information about a signing job's signed code image.",
        }),
    ).exactOptional(),
    signingMaterial: SigningMaterialSchema.and(
      z
        .any()
        .openapi({
          description:
            'A <code>SigningMaterial</code> object that contains the Amazon Resource Name (ARN) of the certificate used for the signing job.',
        }),
    ).exactOptional(),
    createdAt: TimestampSchema.and(
      z.any().openapi({ description: 'The date and time that the signing job was created.' }),
    ).exactOptional(),
    status: SigningStatusSchema.and(
      z.any().openapi({ description: 'The status of the signing job.' }),
    ).exactOptional(),
    isRevoked: BoolSchema.and(
      z.any().openapi({ description: 'Indicates whether the signing job is revoked.' }),
    ).exactOptional(),
    profileName: ProfileNameSchema.and(
      z
        .any()
        .openapi({ description: 'The name of the signing profile that created a signing job.' }),
    ).exactOptional(),
    profileVersion: ProfileVersionSchema.and(
      z
        .any()
        .openapi({ description: 'The version of the signing profile that created a signing job.' }),
    ).exactOptional(),
    platformId: PlatformIdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a signing platform.' }),
    ).exactOptional(),
    platformDisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name of a signing platform.' }),
    ).exactOptional(),
    signatureExpiresAt: TimestampSchema.and(
      z.any().openapi({ description: 'The time when the signature of a signing job expires.' }),
    ).exactOptional(),
    jobOwner: AccountIdSchema.and(
      z.any().openapi({ description: 'The AWS account ID of the job owner.' }),
    ).exactOptional(),
    jobInvoker: AccountIdSchema.and(
      z.any().openapi({ description: 'The AWS account ID of the job invoker.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Contains information about a signing job.', required: [] })
  .openapi('SigningJob')

const SigningJobsSchema = z.array(SigningJobSchema).openapi('SigningJobs')

const NextTokenSchema = z.string().openapi('NextToken')

const ListSigningJobsResponseSchema = z
  .object({
    jobs: SigningJobsSchema.and(
      z.any().openapi({ description: 'A list of your signing jobs.' }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z.any().openapi({ description: 'String for specifying the next set of paginated results.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSigningJobsResponse')

const SigningPlatformSchema = z
  .object({
    platformId: StringSchema.and(
      z.any().openapi({ description: 'The ID of a code signing; platform.' }),
    ).exactOptional(),
    displayName: StringSchema.and(
      z.any().openapi({ description: 'The display name of a code signing platform.' }),
    ).exactOptional(),
    partner: StringSchema.and(
      z.any().openapi({ description: 'Any partner entities linked to a code signing platform.' }),
    ).exactOptional(),
    target: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The types of targets that can be signed by a code signing platform.',
        }),
    ).exactOptional(),
    category: CategorySchema.and(
      z.any().openapi({ description: 'The category of a code signing platform.' }),
    ).exactOptional(),
    signingConfiguration: SigningConfigurationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The configuration of a code signing platform. This includes the designated hash algorithm and encryption algorithm of a signing platform.',
        }),
    ).exactOptional(),
    signingImageFormat: SigningImageFormatSchema.exactOptional(),
    maxSizeInMB: MaxSizeInMBSchema.and(
      z
        .any()
        .openapi({
          description:
            'The maximum size (in MB) of code that can be signed by a code signing platform.',
        }),
    ).exactOptional(),
    revocationSupported: BoolSchema.and(
      z
        .any()
        .openapi({ description: 'Indicates whether revocation is supported for the platform.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the signing configurations and parameters that are used to perform a code signing job.',
    required: [],
  })
  .openapi('SigningPlatform')

const SigningPlatformsSchema = z.array(SigningPlatformSchema).openapi('SigningPlatforms')

const ListSigningPlatformsResponseSchema = z
  .object({
    platforms: SigningPlatformsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of all platforms that match the request parameters.' }),
    ).exactOptional(),
    nextToken: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'Value for specifying the next set of paginated results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSigningPlatformsResponse')

const SigningProfileSchema = z
  .object({
    profileName: ProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the signing profile.' }),
    ).exactOptional(),
    profileVersion: ProfileVersionSchema.and(
      z.any().openapi({ description: 'The version of a signing profile.' }),
    ).exactOptional(),
    profileVersionArn: ArnSchema.and(
      z
        .any()
        .openapi({ description: 'The ARN of a signing profile, including the profile version.' }),
    ).exactOptional(),
    signingMaterial: SigningMaterialSchema.and(
      z
        .any()
        .openapi({
          description: 'The ACM certificate that is available for use by a signing profile.',
        }),
    ).exactOptional(),
    signatureValidityPeriod: SignatureValidityPeriodSchema.and(
      z
        .any()
        .openapi({
          description: 'The validity period for a signing job created using this signing profile.',
        }),
    ).exactOptional(),
    platformId: PlatformIdSchema.and(
      z
        .any()
        .openapi({
          description: 'The ID of a platform that is available for use by a signing profile.',
        }),
    ).exactOptional(),
    platformDisplayName: DisplayNameSchema.and(
      z.any().openapi({ description: 'The name of the signing platform.' }),
    ).exactOptional(),
    signingParameters: SigningParametersSchema.and(
      z
        .any()
        .openapi({
          description: 'The parameters that are available for use by a code signing user.',
        }),
    ).exactOptional(),
    status: SigningProfileStatusSchema.and(
      z.any().openapi({ description: 'The status of a code signing profile.' }),
    ).exactOptional(),
    arn: String2Schema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the signing profile.' }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the signing profile.' }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Contains information about the ACM certificates and code signing configuration parameters that can be used by a given code signing user.',
    required: [],
  })
  .openapi('SigningProfile')

const SigningProfilesSchema = z.array(SigningProfileSchema).openapi('SigningProfiles')

const ListSigningProfilesResponseSchema = z
  .object({
    profiles: SigningProfilesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A list of profiles that are available in the AWS account. This includes profiles with the status of <code>CANCELED</code> if the <code>includeCanceled</code> parameter is set to <code>true</code>.',
        }),
    ).exactOptional(),
    nextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description: 'Value for specifying the next set of paginated results to return.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListSigningProfilesResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    tags: TagMapSchema.and(
      z.any().openapi({ description: 'A list of tags associated with the signing profile.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const BadRequestExceptionSchema = z.any().openapi('BadRequestException')

const NotFoundExceptionSchema = z.any().openapi('NotFoundException')

const PutSigningProfileResponseSchema = z
  .object({
    arn: String2Schema.and(
      z
        .any()
        .openapi({ description: 'The Amazon Resource Name (ARN) of the signing profile created.' }),
    ).exactOptional(),
    profileVersion: ProfileVersionSchema.and(
      z.any().openapi({ description: 'The version of the signing profile being created.' }),
    ).exactOptional(),
    profileVersionArn: ArnSchema.and(
      z.any().openapi({ description: 'The signing profile ARN, including the profile version.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('PutSigningProfileResponse')

const RemoveProfilePermissionResponseSchema = z
  .object({
    revisionId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'An identifier for the current revision of the profile permissions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RemoveProfilePermissionResponse')

const StartSigningJobResponseSchema = z
  .object({
    jobId: JobIdSchema.and(
      z.any().openapi({ description: 'The ID of your signing job.' }),
    ).exactOptional(),
    jobOwner: AccountIdSchema.and(
      z.any().openapi({ description: 'The AWS account ID of the signing job owner.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('StartSigningJobResponse')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const TagResourceResponseSchema = z.object({}).openapi('TagResourceResponse')

const UntagResourceResponseSchema = z.object({}).openapi('UntagResourceResponse')

const TagKeySchema = z
  .string()
  .regex(/^(?!aws:)[a-zA-Z+-=._:\/]+$/)
  .min(1)
  .max(128)
  .openapi('TagKey')

const AddProfilePermissionRequestSchema = z
  .object({
    profileVersion: ProfileVersionSchema.and(
      z.any().openapi({ description: 'The version of the signing profile.' }),
    ).exactOptional(),
    action: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The AWS Signer action permitted as part of cross-account permissions.',
        }),
    ),
    principal: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS principal receiving cross-account permissions. This may be an IAM role or another AWS account ID.',
        }),
    ),
    revisionId: StringSchema.and(
      z.any().openapi({ description: 'A unique identifier for the current profile revision.' }),
    ).exactOptional(),
    statementId: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'A unique identifier for the cross-account permission statement.',
        }),
    ),
  })
  .openapi({
    required: ['action', 'principal', 'statementId'],
    title: 'AddProfilePermissionRequest',
  })
  .openapi('AddProfilePermissionRequest')

const CancelSigningProfileRequestSchema = z
  .object({})
  .openapi({ title: 'CancelSigningProfileRequest' })
  .openapi('CancelSigningProfileRequest')

const ClientRequestTokenSchema = z.string().openapi('ClientRequestToken')

const DescribeSigningJobRequestSchema = z
  .object({})
  .openapi({ title: 'DescribeSigningJobRequest' })
  .openapi('DescribeSigningJobRequest')

const DestinationSchema: z.ZodType<DestinationType> = z
  .lazy(() =>
    z
      .object({
        s3: S3DestinationSchema.and(
          z.any().openapi({ description: 'The <code>S3Destination</code> object.' }),
        ).exactOptional(),
      })
      .openapi({
        description:
          'Points to an <code>S3Destination</code> object that contains information about your S3 bucket.',
        required: [],
      }),
  )
  .openapi('Destination')

const GetSigningPlatformRequestSchema = z
  .object({})
  .openapi({ title: 'GetSigningPlatformRequest' })
  .openapi('GetSigningPlatformRequest')

const GetSigningProfileRequestSchema = z
  .object({})
  .openapi({ title: 'GetSigningProfileRequest' })
  .openapi('GetSigningProfileRequest')

const ListProfilePermissionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListProfilePermissionsRequest' })
  .openapi('ListProfilePermissionsRequest')

const MaxResultsSchema = z.int().min(1).max(25).openapi('MaxResults')

const ListSigningJobsRequestSchema = z
  .object({})
  .openapi({ title: 'ListSigningJobsRequest' })
  .openapi('ListSigningJobsRequest')

const ListSigningPlatformsRequestSchema = z
  .object({})
  .openapi({ title: 'ListSigningPlatformsRequest' })
  .openapi('ListSigningPlatformsRequest')

const StatusesSchema = z.array(SigningProfileStatusSchema).openapi('Statuses')

const ListSigningProfilesRequestSchema = z
  .object({})
  .openapi({ title: 'ListSigningProfilesRequest' })
  .openapi('ListSigningProfilesRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const PutSigningProfileRequestSchema = z
  .object({
    signingMaterial: SigningMaterialSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS Certificate Manager certificate that will be used to sign code with the new signing profile.',
        }),
    ).exactOptional(),
    signatureValidityPeriod: SignatureValidityPeriodSchema.and(
      z
        .any()
        .openapi({
          description:
            'The default validity period override for any signature generated using this signing profile. If unspecified, the default is 135 months.',
        }),
    ).exactOptional(),
    platformId: PlatformIdSchema.and(
      z.any().openapi({ description: 'The ID of the signing platform to be created.' }),
    ),
    overrides: SigningPlatformOverridesSchema.and(
      z
        .any()
        .openapi({
          description:
            'A subfield of <code>platform</code>. This specifies any different configuration options that you want to apply to the chosen platform (such as a different <code>hash-algorithm</code> or <code>signing-algorithm</code>).',
        }),
    ).exactOptional(),
    signingParameters: SigningParametersSchema.and(
      z
        .any()
        .openapi({
          description:
            'Map of key-value pairs for signing. These can include any information that you want to use during signing.',
        }),
    ).exactOptional(),
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({
          description: 'Tags to be associated with the signing profile that is being created.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['platformId'], title: 'PutSigningProfileRequest' })
  .openapi('PutSigningProfileRequest')

const RemoveProfilePermissionRequestSchema = z
  .object({})
  .openapi({ title: 'RemoveProfilePermissionRequest' })
  .openapi('RemoveProfilePermissionRequest')

const RevocationReasonStringSchema = z.string().min(1).max(500).openapi('RevocationReasonString')

const RevokeSignatureRequestSchema = z
  .object({
    jobOwner: AccountIdSchema.and(
      z.any().openapi({ description: 'AWS account ID of the job owner.' }),
    ).exactOptional(),
    reason: RevocationReasonStringSchema.and(
      z.any().openapi({ description: 'The reason for revoking the signing job.' }),
    ),
  })
  .openapi({ required: ['reason'], title: 'RevokeSignatureRequest' })
  .openapi('RevokeSignatureRequest')

const RevokeSigningProfileRequestSchema = z
  .object({
    profileVersion: ProfileVersionSchema.and(
      z.any().openapi({ description: 'The version of the signing profile to be revoked.' }),
    ),
    reason: RevocationReasonStringSchema.and(
      z.any().openapi({ description: 'The reason for revoking a signing profile.' }),
    ),
    effectiveTime: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'A timestamp for when revocation of a Signing Profile should become effective. Signatures generated using the signing profile after this timestamp are not trusted.',
        }),
    ),
  })
  .openapi({
    required: ['profileVersion', 'reason', 'effectiveTime'],
    title: 'RevokeSigningProfileRequest',
  })
  .openapi('RevokeSigningProfileRequest')

const SigningParameterKeySchema = z.string().openapi('SigningParameterKey')

const StartSigningJobRequestSchema = z
  .object({
    source: SourceSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket that contains the object to sign or a BLOB that contains your raw code.',
        }),
    ),
    destination: DestinationSchema.and(
      z
        .any()
        .openapi({
          description:
            'The S3 bucket in which to save your signed object. The destination contains the name of your bucket and an optional prefix.',
        }),
    ),
    profileName: ProfileNameSchema.and(
      z.any().openapi({ description: 'The name of the signing profile.' }),
    ),
    clientRequestToken: ClientRequestTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'String that identifies the signing request. All calls after the first that use this token return the same response as the first call.',
        }),
    ),
    profileOwner: AccountIdSchema.and(
      z.any().openapi({ description: 'The AWS account ID of the signing profile owner.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['source', 'destination', 'profileName', 'clientRequestToken'],
    title: 'StartSigningJobRequest',
  })
  .openapi('StartSigningJobRequest')

const TagKeyListSchema = z.array(TagKeySchema).min(1).max(200).openapi('TagKeyList')

const TagResourceRequestSchema = z
  .object({
    tags: TagMapSchema.and(
      z
        .any()
        .openapi({ description: 'One or more tags to be associated with the signing profile.' }),
    ),
  })
  .openapi({ required: ['tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

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

export const getSigningProfilesProfileNamePermissionsRoute = createRoute({
  method: 'get',
  path: '/signing-profiles/{profileName}/permissions',
  description: 'Lists the cross-account permissions associated with a signing profile.',
  operationId: 'ListProfilePermissions',
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
      profileName: z
        .string()
        .regex(/^[a-zA-Z0-9_]{2,}/)
        .min(2)
        .max(64)
        .openapi({
          param: {
            name: 'profileName',
            in: 'path',
            required: true,
            description: 'Name of the signing profile containing the cross-account permissions.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_]{2,}', minLength: 2, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      nextToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'nextToken',
            in: 'query',
            required: false,
            description: 'String for specifying the next set of paginated results.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListProfilePermissionsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postSigningProfilesProfileNamePermissionsRoute = createRoute({
  method: 'post',
  path: '/signing-profiles/{profileName}/permissions',
  description: 'Adds cross-account permissions to a signing profile.',
  operationId: 'AddProfilePermission',
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
      profileName: z
        .string()
        .regex(/^[a-zA-Z0-9_]{2,}/)
        .min(2)
        .max(64)
        .openapi({
          param: {
            name: 'profileName',
            in: 'path',
            required: true,
            description: 'The human-readable name of the signing profile.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_]{2,}', minLength: 2, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              profileVersion: z
                .string()
                .regex(/^[a-zA-Z0-9]{10}$/)
                .length(10)
                .exactOptional()
                .openapi({ description: 'The version of the signing profile.' }),
              action: z
                .string()
                .openapi({
                  description:
                    'The AWS Signer action permitted as part of cross-account permissions.',
                }),
              principal: z
                .string()
                .openapi({
                  description:
                    'The AWS principal receiving cross-account permissions. This may be an IAM role or another AWS account ID.',
                }),
              revisionId: z
                .string()
                .exactOptional()
                .openapi({ description: 'A unique identifier for the current profile revision.' }),
              statementId: z
                .string()
                .openapi({
                  description: 'A unique identifier for the cross-account permission statement.',
                }),
            })
            .openapi({ required: ['action', 'principal', 'statementId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: AddProfilePermissionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ServiceLimitExceededException',
      content: { 'application/json': { schema: ServiceLimitExceededExceptionSchema } },
    },
    484: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    485: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    486: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getSigningProfilesProfileNameRoute = createRoute({
  method: 'get',
  path: '/signing-profiles/{profileName}',
  description: 'Returns information on a specific signing profile.',
  operationId: 'GetSigningProfile',
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
      profileName: z
        .string()
        .regex(/^[a-zA-Z0-9_]{2,}/)
        .min(2)
        .max(64)
        .openapi({
          param: {
            name: 'profileName',
            in: 'path',
            required: true,
            description: 'The name of the target signing profile.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_]{2,}', minLength: 2, maxLength: 64 },
          },
        }),
    }),
    query: z.object({
      profileOwner: z
        .string()
        .regex(/^[0-9]{12}$/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'profileOwner',
            in: 'query',
            required: false,
            description: 'The AWS account ID of the profile owner.',
            schema: { type: 'string', pattern: '^[0-9]{12}$', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSigningProfileResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const putSigningProfilesProfileNameRoute = createRoute({
  method: 'put',
  path: '/signing-profiles/{profileName}',
  description:
    'Creates a signing profile. A signing profile is a code signing template that can be used to carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a> ',
  operationId: 'PutSigningProfile',
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
      profileName: z
        .string()
        .regex(/^[a-zA-Z0-9_]{2,}/)
        .min(2)
        .max(64)
        .openapi({
          param: {
            name: 'profileName',
            in: 'path',
            required: true,
            description: 'The name of the signing profile to be created.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_]{2,}', minLength: 2, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              signingMaterial: z
                .object({
                  certificateArn: CertificateArnSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'The Amazon Resource Name (ARN) of the certificates that is used to sign your code.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description: 'The ACM certificate that is used to sign your code.',
                  required: [],
                }),
              signatureValidityPeriod: z
                .object({
                  value: IntegerSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'The numerical value of the time unit for signature validity.',
                      }),
                  ).exactOptional(),
                  type: ValidityTypeSchema.and(
                    z.any().openapi({ description: 'The time unit for signature validity.' }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'The validity period for a signing job.', required: [] }),
              platformId: z
                .string()
                .openapi({ description: 'The ID of the signing platform to be created.' }),
              overrides: z
                .object({
                  signingConfiguration: SigningConfigurationOverridesSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A signing configuration that overrides the default encryption or hash algorithm of a signing job.',
                      }),
                  ).exactOptional(),
                  signingImageFormat: ImageFormatSchema.and(
                    z
                      .any()
                      .openapi({
                        description:
                          'A signed image is a JSON object. When overriding the default signing platform configuration, a customer can select either of two signing formats, <code>JSONEmbedded</code> or <code>JSONDetached</code>. (A third format value, <code>JSON</code>, is reserved for future use.) With <code>JSONEmbedded</code>, the signing image has the payload embedded in it. With <code>JSONDetached</code>, the payload is not be embedded in the signing image.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({
                  description:
                    'Any overrides that are applied to the signing configuration of a code signing platform.',
                  required: [],
                }),
              signingParameters: z
                .record(z.string(), SigningParameterValueSchema)
                .exactOptional()
                .openapi({
                  description:
                    'Map of key-value pairs for signing. These can include any information that you want to use during signing.',
                }),
              tags: z
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .exactOptional()
                .openapi({
                  description:
                    'Tags to be associated with the signing profile that is being created.',
                }),
            })
            .openapi({ required: ['platformId'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: PutSigningProfileResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const deleteSigningProfilesProfileNameRoute = createRoute({
  method: 'delete',
  path: '/signing-profiles/{profileName}',
  description:
    'Changes the state of an <code>ACTIVE</code> signing profile to <code>CANCELED</code>. A canceled profile is still viewable with the <code>ListSigningProfiles</code> operation, but it cannot perform new signing jobs, and is deleted two years after cancelation.',
  operationId: 'CancelSigningProfile',
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
      profileName: z
        .string()
        .regex(/^[a-zA-Z0-9_]{2,}/)
        .min(2)
        .max(64)
        .openapi({
          param: {
            name: 'profileName',
            in: 'path',
            required: true,
            description: 'The name of the signing profile to be canceled.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_]{2,}', minLength: 2, maxLength: 64 },
          },
        }),
    }),
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getSigningJobsJobIdRoute = createRoute({
  method: 'get',
  path: '/signing-jobs/{jobId}',
  description:
    'Returns information about a specific code signing job. You specify the job by using the <code>jobId</code> value that is returned by the <a>StartSigningJob</a> operation. ',
  operationId: 'DescribeSigningJob',
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
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'The ID of the signing job on input.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: DescribeSigningJobResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getSigningPlatformsPlatformIdRoute = createRoute({
  method: 'get',
  path: '/signing-platforms/{platformId}',
  description: 'Returns information on a specific signing platform.',
  operationId: 'GetSigningPlatform',
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
      platformId: z
        .string()
        .openapi({
          param: {
            name: 'platformId',
            in: 'path',
            required: true,
            description: 'The ID of the target signing platform.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetSigningPlatformResponseSchema } },
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
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getSigningJobsRoute = createRoute({
  method: 'get',
  path: '/signing-jobs',
  description:
    'Lists all your signing jobs. You can use the <code>maxResults</code> parameter to limit the number of signing jobs that are returned in the response. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned. ',
  operationId: 'ListSigningJobs',
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
      status: z
        .enum(['InProgress', 'Failed', 'Succeeded'])
        .exactOptional()
        .openapi({
          param: {
            name: 'status',
            in: 'query',
            required: false,
            description: 'A status value with which to filter your results.',
            schema: { type: 'string', enum: ['InProgress', 'Failed', 'Succeeded'] },
          },
        }),
      platformId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'platformId',
            in: 'query',
            required: false,
            description:
              'The ID of microcontroller platform that you specified for the distribution of your code image.',
            schema: { type: 'string' },
          },
        }),
      requestedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'requestedBy',
            in: 'query',
            required: false,
            description: 'The IAM principal that requested the signing job.',
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
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description:
              'Specifies the maximum number of items to return in the response. Use this parameter when paginating results. If additional items exist beyond the number you specify, the <code>nextToken</code> element is set in the response. Use the <code>nextToken</code> value in a subsequent request to retrieve additional items. ',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
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
              'String for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.',
            schema: { type: 'string' },
          },
        }),
      isRevoked: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'isRevoked',
            in: 'query',
            required: false,
            description: 'Filters results to return only signing jobs with revoked signatures.',
            schema: { type: 'boolean' },
          },
        }),
      signatureExpiresBefore: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'signatureExpiresBefore',
            in: 'query',
            required: false,
            description:
              'Filters results to return only signing jobs with signatures expiring before a specified timestamp.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      signatureExpiresAfter: z.iso
        .datetime({ offset: true })
        .exactOptional()
        .openapi({
          param: {
            name: 'signatureExpiresAfter',
            in: 'query',
            required: false,
            description:
              'Filters results to return only signing jobs with signatures expiring after a specified timestamp.',
            schema: { type: 'string', format: 'date-time' },
          },
        }),
      jobInvoker: z
        .string()
        .regex(/^[0-9]{12}$/)
        .length(12)
        .exactOptional()
        .openapi({
          param: {
            name: 'jobInvoker',
            in: 'query',
            required: false,
            description:
              'Filters results to return only signing jobs initiated by a specified IAM entity.',
            schema: { type: 'string', pattern: '^[0-9]{12}$', minLength: 12, maxLength: 12 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSigningJobsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const postSigningJobsRoute = createRoute({
  method: 'post',
  path: '/signing-jobs',
  description:
    '<p>Initiates a signing job to be performed on the code provided. Signing jobs are viewable by the <code>ListSigningJobs</code> operation for two years after they are performed. Note the following requirements: </p> <ul> <li> <p> You must create an Amazon S3 source bucket. For more information, see <a href="http://docs.aws.amazon.com/AmazonS3/latest/gsg/CreatingABucket.html">Create a Bucket</a> in the <i>Amazon S3 Getting Started Guide</i>. </p> </li> <li> <p>Your S3 source bucket must be version enabled.</p> </li> <li> <p>You must create an S3 destination bucket. Code signing uses your S3 destination bucket to write your signed code.</p> </li> <li> <p>You specify the name of the source and destination buckets when calling the <code>StartSigningJob</code> operation.</p> </li> <li> <p>You must also specify a request token that identifies your request to code signing.</p> </li> </ul> <p>You can call the <a>DescribeSigningJob</a> and the <a>ListSigningJobs</a> actions after you call <code>StartSigningJob</code>.</p> <p>For a Java example that shows how to use this action, see <a href="http://docs.aws.amazon.com/acm/latest/userguide/">http://docs.aws.amazon.com/acm/latest/userguide/</a> </p>',
  operationId: 'StartSigningJob',
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
              source: z
                .object({
                  s3: S3SourceSchema.and(
                    z.any().openapi({ description: 'The <code>S3Source</code> object.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'An <code>S3Source</code> object that contains information about the S3 bucket where you saved your unsigned code.',
                  required: [],
                }),
              destination: z
                .object({
                  s3: S3DestinationSchema.and(
                    z.any().openapi({ description: 'The <code>S3Destination</code> object.' }),
                  ).exactOptional(),
                })
                .openapi({
                  description:
                    'Points to an <code>S3Destination</code> object that contains information about your S3 bucket.',
                  required: [],
                }),
              profileName: z
                .string()
                .regex(/^[a-zA-Z0-9_]{2,}/)
                .min(2)
                .max(64)
                .openapi({ description: 'The name of the signing profile.' }),
              clientRequestToken: z
                .string()
                .openapi({
                  description:
                    'String that identifies the signing request. All calls after the first that use this token return the same response as the first call.',
                }),
              profileOwner: z
                .string()
                .regex(/^[0-9]{12}$/)
                .length(12)
                .exactOptional()
                .openapi({ description: 'The AWS account ID of the signing profile owner.' }),
            })
            .openapi({ required: ['source', 'destination', 'profileName', 'clientRequestToken'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: StartSigningJobResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getSigningPlatformsRoute = createRoute({
  method: 'get',
  path: '/signing-platforms',
  description:
    'Lists all signing platforms available in code signing that match the request parameters. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.',
  operationId: 'ListSigningPlatforms',
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
      category: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'category',
            in: 'query',
            required: false,
            description: 'The category type of a signing platform.',
            schema: { type: 'string' },
          },
        }),
      partner: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'partner',
            in: 'query',
            required: false,
            description: 'Any partner entities connected to a signing platform.',
            schema: { type: 'string' },
          },
        }),
      target: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'target',
            in: 'query',
            required: false,
            description: 'The validation template that is used by the target signing platform.',
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
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results to be returned by this operation.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
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
              'Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSigningPlatformsResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    483: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getSigningProfilesRoute = createRoute({
  method: 'get',
  path: '/signing-profiles',
  description:
    'Lists all available signing profiles in your AWS account. Returns only profiles with an <code>ACTIVE</code> status unless the <code>includeCanceled</code> request field is set to <code>true</code>. If additional jobs remain to be listed, code signing returns a <code>nextToken</code> value. Use this value in subsequent calls to <code>ListSigningJobs</code> to fetch the remaining values. You can continue calling <code>ListSigningJobs</code> with your <code>maxResults</code> parameter and with new values that code signing returns in the <code>nextToken</code> parameter until all of your signing jobs have been returned.',
  operationId: 'ListSigningProfiles',
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
      includeCanceled: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'includeCanceled',
            in: 'query',
            required: false,
            description:
              'Designates whether to include profiles with the status of <code>CANCELED</code>.',
            schema: { type: 'boolean' },
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
          z.int().min(1).max(25),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of profiles to be returned.',
            schema: { type: 'integer', minimum: 1, maximum: 25 },
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
              'Value for specifying the next set of paginated results to return. After you receive a response with truncated results, use this parameter in a subsequent request. Set it to the value of <code>nextToken</code> from the response that you just received.',
            schema: { type: 'string' },
          },
        }),
      platformId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'platformId',
            in: 'query',
            required: false,
            description:
              'Filters results to return only signing jobs initiated for a specified signing platform.',
            schema: { type: 'string' },
          },
        }),
      statuses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(SigningProfileStatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statuses',
            in: 'query',
            required: false,
            description:
              'Filters results to return only signing jobs with statuses in the specified list.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/SigningProfileStatus' } },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: ListSigningProfilesResponseSchema } },
    },
    480: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    481: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    482: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{resourceArn}',
  description: 'Returns a list of the tags associated with a signing profile resource.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) for the signing profile.',
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{resourceArn}',
  description:
    'Adds one or more tags to a signing profile. Tags are labels that you can use to identify and organize your AWS resources. Each tag consists of a key and an optional value. To specify the signing profile, use its Amazon Resource Name (ARN). To specify the tag, use a key-value pair.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) for the signing profile.',
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
                .record(z.string(), TagValueSchema)
                .refine((val) => Object.keys(val).length >= 1)
                .refine((val) => Object.keys(val).length <= 200)
                .openapi({
                  description: 'One or more tags to be associated with the signing profile.',
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})

export const deleteSigningProfilesProfileNamePermissionsStatementIdRevisionIdRoute = createRoute({
  method: 'delete',
  path: '/signing-profiles/{profileName}/permissions/{statementId}#revisionId',
  description: 'Removes cross-account permissions from a signing profile.',
  operationId: 'RemoveProfilePermission',
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
      profileName: z
        .string()
        .regex(/^[a-zA-Z0-9_]{2,}/)
        .min(2)
        .max(64)
        .openapi({
          param: {
            name: 'profileName',
            in: 'path',
            required: true,
            description:
              'A human-readable name for the signing profile with permissions to be removed.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_]{2,}', minLength: 2, maxLength: 64 },
          },
        }),
      statementId: z
        .string()
        .openapi({
          param: {
            name: 'statementId',
            in: 'path',
            required: true,
            description: 'A unique identifier for the cross-account permissions statement.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      revisionId: z
        .string()
        .openapi({
          param: {
            name: 'revisionId',
            in: 'query',
            required: true,
            description:
              'An identifier for the current revision of the signing profile permissions.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RemoveProfilePermissionResponseSchema } },
    },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    482: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    483: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    484: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    485: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const putSigningJobsJobIdRevokeRoute = createRoute({
  method: 'put',
  path: '/signing-jobs/{jobId}/revoke',
  description:
    'Changes the state of a signing job to REVOKED. This indicates that the signature is no longer valid.',
  operationId: 'RevokeSignature',
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
      jobId: z
        .string()
        .openapi({
          param: {
            name: 'jobId',
            in: 'path',
            required: true,
            description: 'ID of the signing job to be revoked.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              jobOwner: z
                .string()
                .regex(/^[0-9]{12}$/)
                .length(12)
                .exactOptional()
                .openapi({ description: 'AWS account ID of the job owner.' }),
              reason: z
                .string()
                .min(1)
                .max(500)
                .openapi({ description: 'The reason for revoking the signing job.' }),
            })
            .openapi({ required: ['reason'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const putSigningProfilesProfileNameRevokeRoute = createRoute({
  method: 'put',
  path: '/signing-profiles/{profileName}/revoke',
  description:
    'Changes the state of a signing profile to REVOKED. This indicates that signatures generated using the signing profile after an effective start date are no longer valid.',
  operationId: 'RevokeSigningProfile',
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
      profileName: z
        .string()
        .regex(/^[a-zA-Z0-9_]{2,}/)
        .min(2)
        .max(64)
        .openapi({
          param: {
            name: 'profileName',
            in: 'path',
            required: true,
            description: 'The name of the signing profile to be revoked.',
            schema: { type: 'string', pattern: '^[a-zA-Z0-9_]{2,}', minLength: 2, maxLength: 64 },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              profileVersion: z
                .string()
                .regex(/^[a-zA-Z0-9]{10}$/)
                .length(10)
                .openapi({ description: 'The version of the signing profile to be revoked.' }),
              reason: z
                .string()
                .min(1)
                .max(500)
                .openapi({ description: 'The reason for revoking a signing profile.' }),
              effectiveTime: z.iso
                .datetime({ offset: true })
                .openapi({
                  description:
                    'A timestamp for when revocation of a Signing Profile should become effective. Signatures generated using the signing profile after this timestamp are not trusted.',
                }),
            })
            .openapi({ required: ['profileVersion', 'reason', 'effectiveTime'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Success' },
    480: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    481: {
      description: 'AccessDeniedException',
      content: { 'application/json': { schema: AccessDeniedExceptionSchema } },
    },
    482: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
    484: {
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
  },
})

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{resourceArn}#tagKeys',
  description:
    'Removes one or more tags from a signing profile. To remove the tags, specify a list of tag keys.',
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
        .openapi({
          param: {
            name: 'resourceArn',
            in: 'path',
            required: true,
            description: 'The Amazon Resource Name (ARN) for the signing profile.',
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      tagKeys: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(TagKeySchema).min(1).max(200),
        )
        .openapi({
          param: {
            name: 'tagKeys',
            in: 'query',
            required: true,
            description: 'A list of tag keys to be removed from the signing profile.',
            schema: {
              type: 'array',
              items: { $ref: '#/components/schemas/TagKey' },
              minItems: 1,
              maxItems: 200,
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
      description: 'InternalServiceErrorException',
      content: { 'application/json': { schema: InternalServiceErrorExceptionSchema } },
    },
    481: {
      description: 'BadRequestException',
      content: { 'application/json': { schema: BadRequestExceptionSchema } },
    },
    482: {
      description: 'NotFoundException',
      content: { 'application/json': { schema: NotFoundExceptionSchema } },
    },
    483: {
      description: 'TooManyRequestsException',
      content: { 'application/json': { schema: TooManyRequestsExceptionSchema } },
    },
  },
})
