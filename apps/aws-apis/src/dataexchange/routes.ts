import { createRoute, z } from '@hono/zod-openapi'

const IdSchema = z.string().openapi('Id')

const ExportAssetToSignedUrlRequestDetailsSchema = z
  .object({
    AssetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the asset that is exported to a signed URL.',
        }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this export job.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the revision associated with this export request.',
        }),
    ),
  })
  .openapi({
    required: ['AssetId', 'DataSetId', 'RevisionId'],
    description: 'Details of the operation to be performed by the job.',
  })
  .openapi('ExportAssetToSignedUrlRequestDetails')

const StringSchema = z.string().openapi('String')

const AssetDestinationEntrySchema = z
  .object({
    AssetId: IdSchema.and(z.any().openapi({ description: 'The unique identifier for the asset.' })),
    Bucket: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The Amazon S3 bucket that is the destination for the asset.' }),
    ),
    Key: StringSchema.and(
      z.any().openapi({ description: 'The name of the object in Amazon S3 for the asset.' }),
    ).exactOptional(),
  })
  .openapi({ required: ['AssetId', 'Bucket'], description: 'The destination for the asset.' })
  .openapi('AssetDestinationEntry')

const ListOfAssetDestinationEntrySchema = z
  .array(AssetDestinationEntrySchema)
  .openapi('ListOfAssetDestinationEntry')

const ServerSideEncryptionTypesSchema = z
  .enum(['aws:kms', 'AES256'])
  .openapi('ServerSideEncryptionTypes')

const ExportServerSideEncryptionSchema = z
  .object({
    KmsKeyArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects. This parameter is required if you choose aws:kms as an encryption type.',
        }),
    ).exactOptional(),
    Type: ServerSideEncryptionTypesSchema.and(
      z
        .any()
        .openapi({
          description:
            'The type of server side encryption used for encrypting the objects in Amazon S3.',
        }),
    ),
  })
  .openapi({
    required: ['Type'],
    description:
      'Encryption configuration of the export job. Includes the encryption type in addition to the AWS KMS key. The KMS key is only necessary if you chose the KMS encryption type.',
  })
  .openapi('ExportServerSideEncryption')

const ExportAssetsToS3RequestDetailsSchema = z
  .object({
    AssetDestinations: ListOfAssetDestinationEntrySchema.and(
      z.any().openapi({ description: 'The destination for the asset.' }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this export job.',
        }),
    ),
    Encryption: ExportServerSideEncryptionSchema.and(
      z.any().openapi({ description: 'Encryption configuration for the export job.' }),
    ).exactOptional(),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the revision associated with this export request.',
        }),
    ),
  })
  .openapi({
    required: ['AssetDestinations', 'DataSetId', 'RevisionId'],
    description: 'Details of the operation to be performed by the job.',
  })
  .openapi('ExportAssetsToS3RequestDetails')

const RevisionDestinationEntrySchema = z
  .object({
    Bucket: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket that is the destination for the assets in the revision.',
        }),
    ),
    KeyPattern: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.',
        }),
    ).exactOptional(),
    RevisionId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the revision.' }),
    ),
  })
  .openapi({
    required: ['Bucket', 'RevisionId'],
    description: 'The destination where the assets in the revision will be exported.',
  })
  .openapi('RevisionDestinationEntry')

const ListOfRevisionDestinationEntrySchema = z
  .array(RevisionDestinationEntrySchema)
  .openapi('ListOfRevisionDestinationEntry')

const ExportRevisionsToS3RequestDetailsSchema = z
  .object({
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this export job.',
        }),
    ),
    Encryption: ExportServerSideEncryptionSchema.and(
      z.any().openapi({ description: 'Encryption configuration for the export job.' }),
    ).exactOptional(),
    RevisionDestinations: ListOfRevisionDestinationEntrySchema.and(
      z.any().openapi({ description: 'The destination for the revision.' }),
    ),
  })
  .openapi({
    required: ['DataSetId', 'RevisionDestinations'],
    description: 'Details of the operation to be performed by the job.',
  })
  .openapi('ExportRevisionsToS3RequestDetails')

const AssetNameSchema = z.string().openapi('AssetName')

const StringMin24Max24PatternAZaZ094AZaZ092AZaZ093Schema = z
  .string()
  .regex(/(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?/)
  .length(24)
  .openapi('StringMin24Max24PatternAZaZ094AZaZ092AZaZ093')

const ImportAssetFromSignedUrlRequestDetailsSchema = z
  .object({
    AssetName: AssetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name.',
        }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this import job.',
        }),
    ),
    Md5Hash: StringMin24Max24PatternAZaZ094AZaZ092AZaZ093Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the revision associated with this import request.',
        }),
    ),
  })
  .openapi({
    required: ['AssetName', 'DataSetId', 'Md5Hash', 'RevisionId'],
    description: 'Details of the operation to be performed by the job.',
  })
  .openapi('ImportAssetFromSignedUrlRequestDetails')

const AssetSourceEntrySchema = z
  .object({
    Bucket: StringSchema.and(
      z
        .any()
        .openapi({ description: "The Amazon S3 bucket that's part of the source of the asset." }),
    ),
    Key: StringSchema.and(
      z.any().openapi({ description: 'The name of the object in Amazon S3 for the asset.' }),
    ),
  })
  .openapi({ required: ['Bucket', 'Key'], description: 'The source of the assets.' })
  .openapi('AssetSourceEntry')

const ListOfAssetSourceEntrySchema = z
  .array(AssetSourceEntrySchema)
  .openapi('ListOfAssetSourceEntry')

const ImportAssetsFromS3RequestDetailsSchema = z
  .object({
    AssetSources: ListOfAssetSourceEntrySchema.and(
      z.any().openapi({ description: 'Is a list of Amazon S3 bucket and object key pairs.' }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this import job.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the revision associated with this import request.',
        }),
    ),
  })
  .openapi({
    required: ['AssetSources', 'DataSetId', 'RevisionId'],
    description: 'Details of the operation to be performed by the job.',
  })
  .openapi('ImportAssetsFromS3RequestDetails')

const RedshiftDataShareAssetSourceEntrySchema = z
  .object({
    DataShareArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the datashare asset.' }),
    ),
  })
  .openapi({
    required: ['DataShareArn'],
    description: 'The source of the Amazon Redshift datashare asset.',
  })
  .openapi('RedshiftDataShareAssetSourceEntry')

const ListOfRedshiftDataShareAssetSourceEntrySchema = z
  .array(RedshiftDataShareAssetSourceEntrySchema)
  .openapi('ListOfRedshiftDataShareAssetSourceEntry')

const ImportAssetsFromRedshiftDataSharesRequestDetailsSchema = z
  .object({
    AssetSources: ListOfRedshiftDataShareAssetSourceEntrySchema.and(
      z.any().openapi({ description: 'A list of Amazon Redshift datashare assets.' }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this import job.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the revision associated with this import job.',
        }),
    ),
  })
  .openapi({
    required: ['AssetSources', 'DataSetId', 'RevisionId'],
    description: 'Details from an import from Amazon Redshift datashare request.',
  })
  .openapi('ImportAssetsFromRedshiftDataSharesRequestDetails')

const ApiDescriptionSchema = z.string().openapi('ApiDescription')

const ProtocolTypeSchema = z.literal('REST').openapi('ProtocolType')

const ImportAssetFromApiGatewayApiRequestDetailsSchema = z
  .object({
    ApiDescription: ApiDescriptionSchema.and(
      z.any().openapi({ description: 'The API description. Markdown supported.' }),
    ).exactOptional(),
    ApiId: StringSchema.and(z.any().openapi({ description: 'The API Gateway API ID.' })),
    ApiKey: StringSchema.and(
      z.any().openapi({ description: 'The API Gateway API key.' }),
    ).exactOptional(),
    ApiName: StringSchema.and(z.any().openapi({ description: 'The API name.' })),
    ApiSpecificationMd5Hash: StringMin24Max24PatternAZaZ094AZaZ092AZaZ093Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Base64-encoded MD5 hash of the OpenAPI 3.0 JSON API specification file. It is used to ensure the integrity of the file.',
        }),
    ),
    DataSetId: IdSchema.and(z.any().openapi({ description: 'The data set ID.' })),
    ProtocolType: ProtocolTypeSchema.and(z.any().openapi({ description: 'The protocol type.' })),
    RevisionId: IdSchema.and(z.any().openapi({ description: 'The revision ID.' })),
    Stage: StringSchema.and(z.any().openapi({ description: 'The API stage.' })),
  })
  .openapi({
    required: [
      'ApiId',
      'ApiName',
      'ApiSpecificationMd5Hash',
      'DataSetId',
      'ProtocolType',
      'RevisionId',
      'Stage',
    ],
    description: 'The request details.',
  })
  .openapi('ImportAssetFromApiGatewayApiRequestDetails')

const ListOfStringSchema = z.array(StringSchema).openapi('ListOfString')

const KmsKeyArnSchema = z.string().min(1).max(2048).openapi('KmsKeyArn')

const KmsKeyToGrantSchema = z
  .object({
    KmsKeyArn: KmsKeyArnSchema.and(
      z
        .any()
        .openapi({
          description:
            'The AWS KMS CMK (Key Management System Customer Managed Key) used to encrypt S3 objects in the shared S3 Bucket. AWS Data exchange will create a KMS grant for each subscriber to allow them to access and decrypt their entitled data that is encrypted using this KMS key specified.',
        }),
    ),
  })
  .openapi({
    required: ['KmsKeyArn'],
    description:
      'The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the shared S3 objects.',
  })
  .openapi('KmsKeyToGrant')

const ListOfKmsKeysToGrantSchema = z
  .array(KmsKeyToGrantSchema)
  .min(1)
  .max(10)
  .openapi('ListOfKmsKeysToGrant')

const S3DataAccessAssetSourceEntrySchema = z
  .object({
    Bucket: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.',
        }),
    ),
    KeyPrefixes: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description: 'Organizes Amazon S3 asset key prefixes stored in an Amazon S3 bucket.',
        }),
    ).exactOptional(),
    Keys: ListOfStringSchema.and(
      z.any().openapi({ description: 'The keys used to create the Amazon S3 data access.' }),
    ).exactOptional(),
    KmsKeysToGrant: ListOfKmsKeysToGrantSchema.and(
      z
        .any()
        .openapi({
          description:
            'List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to encrypt S3 objects being shared in this S3 Data Access asset.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bucket'],
    description: 'Source details for an Amazon S3 data access asset.',
  })
  .openapi('S3DataAccessAssetSourceEntry')

const CreateS3DataAccessFromS3BucketRequestDetailsSchema = z
  .object({
    AssetSource: S3DataAccessAssetSourceEntrySchema.and(
      z.any().openapi({ description: 'Details about the S3 data access source asset.' }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the data set associated with the creation of this Amazon S3 data access.',
        }),
    ),
    RevisionId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for a revision.' }),
    ),
  })
  .openapi({
    required: ['AssetSource', 'DataSetId', 'RevisionId'],
    description: 'Details of the operation to create an Amazon S3 data access from an S3 bucket.',
  })
  .openapi('CreateS3DataAccessFromS3BucketRequestDetails')

const AwsAccountIdSchema = z
  .string()
  .regex(/.*\/^[\d]{12}$\/.*/)
  .length(12)
  .openapi('AwsAccountId')

const String2Schema = z.string().openapi('String2')

const ListOfLFTagValuesSchema = z.array(String2Schema).openapi('ListOfLFTagValues')

const LFTagSchema = z
  .object({
    TagKey: String2Schema.and(z.any().openapi({ description: 'The key name for the LF-tag.' })),
    TagValues: ListOfLFTagValuesSchema.and(
      z.any().openapi({ description: 'A list of LF-tag values.' }),
    ),
  })
  .openapi({
    required: ['TagKey', 'TagValues'],
    description: 'A structure that allows an LF-admin to grant permissions on certain conditions.',
  })
  .openapi('LFTag')

const ListOfLFTagsSchema = z.array(LFTagSchema).openapi('ListOfLFTags')

const DatabaseLFTagPolicyPermissionSchema = z
  .literal('DESCRIBE')
  .openapi('DatabaseLFTagPolicyPermission')

const ListOfDatabaseLFTagPolicyPermissionsSchema = z
  .array(DatabaseLFTagPolicyPermissionSchema)
  .openapi('ListOfDatabaseLFTagPolicyPermissions')

const DatabaseLFTagPolicyAndPermissionsSchema = z
  .object({
    Expression: ListOfLFTagsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of LF-tag conditions that apply to database resources.' }),
    ),
    Permissions: ListOfDatabaseLFTagPolicyPermissionsSchema.and(
      z
        .any()
        .openapi({ description: 'The permissions granted to subscribers on database resources.' }),
    ),
  })
  .openapi({
    required: ['Expression', 'Permissions'],
    description: 'The LF-tag policy and permissions for database resources.',
  })
  .openapi('DatabaseLFTagPolicyAndPermissions')

const TableTagPolicyLFPermissionSchema = z
  .enum(['DESCRIBE', 'SELECT'])
  .openapi('TableTagPolicyLFPermission')

const ListOfTableTagPolicyLFPermissionsSchema = z
  .array(TableTagPolicyLFPermissionSchema)
  .openapi('ListOfTableTagPolicyLFPermissions')

const TableLFTagPolicyAndPermissionsSchema = z
  .object({
    Expression: ListOfLFTagsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of LF-tag conditions that apply to table resources.' }),
    ),
    Permissions: ListOfTableTagPolicyLFPermissionsSchema.and(
      z
        .any()
        .openapi({ description: 'The permissions granted to subscribers on table resources.' }),
    ),
  })
  .openapi({
    required: ['Expression', 'Permissions'],
    description: 'The LF-tag policy and permissions that apply to table resources.',
  })
  .openapi('TableLFTagPolicyAndPermissions')

const RoleArnSchema = z
  .string()
  .regex(/arn:aws:iam::(\d{12}):role\/.+/)
  .openapi('RoleArn')

const ImportAssetsFromLakeFormationTagPolicyRequestDetailsSchema = z
  .object({
    CatalogId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The identifier for the AWS Glue Data Catalog.' }),
    ),
    Database: DatabaseLFTagPolicyAndPermissionsSchema.and(
      z.any().openapi({ description: 'A structure for the database object.' }),
    ).exactOptional(),
    Table: TableLFTagPolicyAndPermissionsSchema.and(
      z.any().openapi({ description: 'A structure for the table object.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions of subscribers to AWS Lake Formation data permissions.",
        }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this import job.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the revision associated with this import job.',
        }),
    ),
  })
  .openapi({
    required: ['CatalogId', 'RoleArn', 'DataSetId', 'RevisionId'],
    description: 'Details about the assets imported from an AWS Lake Formation tag policy request.',
  })
  .openapi('ImportAssetsFromLakeFormationTagPolicyRequestDetails')

type RequestDetailsType = {
  ExportAssetToSignedUrl?: z.infer<typeof ExportAssetToSignedUrlRequestDetailsSchema> & {
    [key: string]: unknown
  }
  ExportAssetsToS3?: z.infer<typeof ExportAssetsToS3RequestDetailsSchema> & {
    [key: string]: unknown
  }
  ExportRevisionsToS3?: z.infer<typeof ExportRevisionsToS3RequestDetailsSchema> & {
    [key: string]: unknown
  }
  ImportAssetFromSignedUrl?: z.infer<typeof ImportAssetFromSignedUrlRequestDetailsSchema> & {
    [key: string]: unknown
  }
  ImportAssetsFromS3?: z.infer<typeof ImportAssetsFromS3RequestDetailsSchema> & {
    [key: string]: unknown
  }
  ImportAssetsFromRedshiftDataShares?: z.infer<
    typeof ImportAssetsFromRedshiftDataSharesRequestDetailsSchema
  > & { [key: string]: unknown }
  ImportAssetFromApiGatewayApi?: z.infer<
    typeof ImportAssetFromApiGatewayApiRequestDetailsSchema
  > & { [key: string]: unknown }
  CreateS3DataAccessFromS3Bucket?: z.infer<
    typeof CreateS3DataAccessFromS3BucketRequestDetailsSchema
  > & { [key: string]: unknown }
  ImportAssetsFromLakeFormationTagPolicy?: z.infer<
    typeof ImportAssetsFromLakeFormationTagPolicyRequestDetailsSchema
  > & { [key: string]: unknown }
}

const TimestampSchema = z.iso.datetime({ offset: true }).openapi('Timestamp')

const ExportAssetToSignedUrlResponseDetailsSchema = z
  .object({
    AssetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the asset associated with this export job.',
        }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this export job.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the revision associated with this export response.',
        }),
    ),
    SignedUrl: StringSchema.and(
      z.any().openapi({ description: 'The signed URL for the export request.' }),
    ).exactOptional(),
    SignedUrlExpiresAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the signed URL expires, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AssetId', 'DataSetId', 'RevisionId'],
    description: 'The details of the export to signed URL response.',
  })
  .openapi('ExportAssetToSignedUrlResponseDetails')

const ExportAssetsToS3ResponseDetailsSchema = z
  .object({
    AssetDestinations: ListOfAssetDestinationEntrySchema.and(
      z.any().openapi({ description: 'The destination in Amazon S3 where the asset is exported.' }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this export job.',
        }),
    ),
    Encryption: ExportServerSideEncryptionSchema.and(
      z.any().openapi({ description: 'Encryption configuration of the export job.' }),
    ).exactOptional(),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the revision associated with this export response.',
        }),
    ),
  })
  .openapi({
    required: ['AssetDestinations', 'DataSetId', 'RevisionId'],
    description: 'Details about the export to Amazon S3 response.',
  })
  .openapi('ExportAssetsToS3ResponseDetails')

const ExportRevisionsToS3ResponseDetailsSchema = z
  .object({
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this export job.',
        }),
    ),
    Encryption: ExportServerSideEncryptionSchema.and(
      z.any().openapi({ description: 'Encryption configuration of the export job.' }),
    ).exactOptional(),
    RevisionDestinations: ListOfRevisionDestinationEntrySchema.and(
      z
        .any()
        .openapi({ description: 'The destination in Amazon S3 where the revision is exported.' }),
    ),
    EventActionArn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the event action.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['DataSetId', 'RevisionDestinations'],
    description: 'Details about the export revisions to Amazon S3 response.',
  })
  .openapi('ExportRevisionsToS3ResponseDetails')

const ImportAssetFromSignedUrlResponseDetailsSchema = z
  .object({
    AssetName: AssetNameSchema.and(
      z.any().openapi({ description: 'The name for the asset associated with this import job.' }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this import job.',
        }),
    ),
    Md5Hash: StringMin24Max24PatternAZaZ094AZaZ092AZaZ093Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Base64-encoded Md5 hash for the asset, used to ensure the integrity of the file at that location.',
        }),
    ).exactOptional(),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the revision associated with this import response.',
        }),
    ),
    SignedUrl: StringSchema.and(
      z.any().openapi({ description: 'The signed URL.' }),
    ).exactOptional(),
    SignedUrlExpiresAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The time and date at which the signed URL expires, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['AssetName', 'DataSetId', 'RevisionId'],
    description:
      'The details in the response for an import request, including the signed URL and other information.',
  })
  .openapi('ImportAssetFromSignedUrlResponseDetails')

const ImportAssetsFromS3ResponseDetailsSchema = z
  .object({
    AssetSources: ListOfAssetSourceEntrySchema.and(
      z.any().openapi({ description: 'Is a list of Amazon S3 bucket and object key pairs.' }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this import job.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the revision associated with this import response.',
        }),
    ),
  })
  .openapi({
    required: ['AssetSources', 'DataSetId', 'RevisionId'],
    description: 'Details from an import from Amazon S3 response.',
  })
  .openapi('ImportAssetsFromS3ResponseDetails')

const ImportAssetsFromRedshiftDataSharesResponseDetailsSchema = z
  .object({
    AssetSources: ListOfRedshiftDataShareAssetSourceEntrySchema.and(
      z.any().openapi({ description: 'A list of Amazon Redshift datashare asset sources.' }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this import job.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the revision associated with this import job.',
        }),
    ),
  })
  .openapi({
    required: ['AssetSources', 'DataSetId', 'RevisionId'],
    description: 'Details from an import from Amazon Redshift datashare response.',
  })
  .openapi('ImportAssetsFromRedshiftDataSharesResponseDetails')

const ImportAssetFromApiGatewayApiResponseDetailsSchema = z
  .object({
    ApiDescription: ApiDescriptionSchema.and(
      z.any().openapi({ description: 'The API description.' }),
    ).exactOptional(),
    ApiId: StringSchema.and(z.any().openapi({ description: 'The API ID.' })),
    ApiKey: StringSchema.and(z.any().openapi({ description: 'The API key.' })).exactOptional(),
    ApiName: StringSchema.and(z.any().openapi({ description: 'The API name.' })),
    ApiSpecificationMd5Hash: StringMin24Max24PatternAZaZ094AZaZ092AZaZ093Schema.and(
      z
        .any()
        .openapi({
          description:
            'The Base64-encoded Md5 hash for the API asset, used to ensure the integrity of the API at that location.',
        }),
    ),
    ApiSpecificationUploadUrl: StringSchema.and(
      z.any().openapi({ description: 'The upload URL of the API specification.' }),
    ),
    ApiSpecificationUploadUrlExpiresAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the upload URL expires, in ISO 8601 format.',
        }),
    ),
    DataSetId: IdSchema.and(z.any().openapi({ description: 'The data set ID.' })),
    ProtocolType: ProtocolTypeSchema.and(z.any().openapi({ description: 'The protocol type.' })),
    RevisionId: IdSchema.and(z.any().openapi({ description: 'The revision ID.' })),
    Stage: StringSchema.and(z.any().openapi({ description: 'The API stage.' })),
  })
  .openapi({
    required: [
      'ApiId',
      'ApiName',
      'ApiSpecificationMd5Hash',
      'ApiSpecificationUploadUrl',
      'ApiSpecificationUploadUrlExpiresAt',
      'DataSetId',
      'ProtocolType',
      'RevisionId',
      'Stage',
    ],
    description: 'The response details.',
  })
  .openapi('ImportAssetFromApiGatewayApiResponseDetails')

const CreateS3DataAccessFromS3BucketResponseDetailsSchema = z
  .object({
    AssetSource: S3DataAccessAssetSourceEntrySchema.and(
      z.any().openapi({ description: 'Details about the asset source from an Amazon S3 bucket.' }),
    ),
    DataSetId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for this data set.' }),
    ),
    RevisionId: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the revision.' }),
    ),
  })
  .openapi({
    required: ['AssetSource', 'DataSetId', 'RevisionId'],
    description:
      'Details about the response of the operation to create an S3 data access from an S3 bucket.',
  })
  .openapi('CreateS3DataAccessFromS3BucketResponseDetails')

const ImportAssetsFromLakeFormationTagPolicyResponseDetailsSchema = z
  .object({
    CatalogId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The identifier for the AWS Glue Data Catalog.' }),
    ),
    Database: DatabaseLFTagPolicyAndPermissionsSchema.and(
      z.any().openapi({ description: 'A structure for the database object.' }),
    ).exactOptional(),
    Table: TableLFTagPolicyAndPermissionsSchema.and(
      z.any().openapi({ description: 'A structure for the table object.' }),
    ).exactOptional(),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.",
        }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this import job.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the revision associated with this import job.',
        }),
    ),
  })
  .openapi({
    required: ['CatalogId', 'RoleArn', 'DataSetId', 'RevisionId'],
    description: 'Details from an import AWS Lake Formation tag policy job response.',
  })
  .openapi('ImportAssetsFromLakeFormationTagPolicyResponseDetails')

type ResponseDetailsType = {
  ExportAssetToSignedUrl?: z.infer<typeof ExportAssetToSignedUrlResponseDetailsSchema> & {
    [key: string]: unknown
  }
  ExportAssetsToS3?: z.infer<typeof ExportAssetsToS3ResponseDetailsSchema> & {
    [key: string]: unknown
  }
  ExportRevisionsToS3?: z.infer<typeof ExportRevisionsToS3ResponseDetailsSchema> & {
    [key: string]: unknown
  }
  ImportAssetFromSignedUrl?: z.infer<typeof ImportAssetFromSignedUrlResponseDetailsSchema> & {
    [key: string]: unknown
  }
  ImportAssetsFromS3?: z.infer<typeof ImportAssetsFromS3ResponseDetailsSchema> & {
    [key: string]: unknown
  }
  ImportAssetsFromRedshiftDataShares?: z.infer<
    typeof ImportAssetsFromRedshiftDataSharesResponseDetailsSchema
  > & { [key: string]: unknown }
  ImportAssetFromApiGatewayApi?: z.infer<
    typeof ImportAssetFromApiGatewayApiResponseDetailsSchema
  > & { [key: string]: unknown }
  CreateS3DataAccessFromS3Bucket?: z.infer<
    typeof CreateS3DataAccessFromS3BucketResponseDetailsSchema
  > & { [key: string]: unknown }
  ImportAssetsFromLakeFormationTagPolicy?: z.infer<
    typeof ImportAssetsFromLakeFormationTagPolicyResponseDetailsSchema
  > & { [key: string]: unknown }
}

const ImportAssetFromSignedUrlJobErrorDetailsSchema = z
  .object({
    AssetName: AssetNameSchema.and(
      z.any().openapi({ description: 'Details about the job error.' }),
    ),
  })
  .openapi({ required: ['AssetName'], description: 'Details about the job error.' })
  .openapi('ImportAssetFromSignedUrlJobErrorDetails')

type DetailsType = {
  ImportAssetFromSignedUrlJobErrorDetails?: z.infer<
    typeof ImportAssetFromSignedUrlJobErrorDetailsSchema
  > & { [key: string]: unknown }
  ImportAssetsFromS3JobErrorDetails?: z.infer<typeof ListOfAssetSourceEntrySchema> & {
    [key: string]: unknown
  }
}

const ResourceNotFoundExceptionSchema = z.any().openapi('ResourceNotFoundException')

const ThrottlingExceptionSchema = z.any().openapi('ThrottlingException')

const ConflictExceptionSchema = z.any().openapi('ConflictException')

const ValidationExceptionSchema = z.any().openapi('ValidationException')

const InternalServerExceptionSchema = z.any().openapi('InternalServerException')

const ArnSchema = z.string().openapi('Arn')

const AssetTypeSchema = z
  .enum([
    'S3_SNAPSHOT',
    'REDSHIFT_DATA_SHARE',
    'API_GATEWAY_API',
    'S3_DATA_ACCESS',
    'LAKE_FORMATION_DATA_PERMISSION',
  ])
  .openapi('AssetType')

const DescriptionSchema = z.string().openapi('Description')

const NameSchema = z.string().openapi('Name')

const OriginSchema = z.enum(['OWNED', 'ENTITLED']).openapi('Origin')

const OriginDetailsSchema = z
  .object({
    ProductId: StringSchema.and(
      z.any().openapi({ description: 'The product ID of the origin of the data set.' }),
    ),
  })
  .openapi({ required: ['ProductId'], description: 'Details about the origin of the data set.' })
  .openapi('OriginDetails')

const MapOfStringSchema = z.record(z.string(), StringSchema).openapi('MapOfString')

const CreateDataSetResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the data set.' }),
    ).exactOptional(),
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: 'The type of asset that is added to a data set.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the data set was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the data set.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the data set.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the data set.' }),
    ).exactOptional(),
    Origin: OriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).',
        }),
    ).exactOptional(),
    OriginDetails: OriginDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.',
        }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z.any().openapi({ description: 'The tags for the data set.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the data set was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateDataSetResponse')

const ServiceLimitExceededExceptionSchema = z.any().openapi('ServiceLimitExceededException')

const AccessDeniedExceptionSchema = z.any().openapi('AccessDeniedException')

const AutoExportRevisionDestinationEntrySchema = z
  .object({
    Bucket: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 bucket that is the destination for the event action.',
        }),
    ),
    KeyPattern: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A string representing the pattern for generated names of the individual assets in the revision. For more information about key patterns, see <a href="https://docs.aws.amazon.com/data-exchange/latest/userguide/jobs.html#revision-export-keypatterns">Key patterns when exporting revisions</a>.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Bucket'],
    description:
      'A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.',
  })
  .openapi('AutoExportRevisionDestinationEntry')

const AutoExportRevisionToS3RequestDetailsSchema = z
  .object({
    Encryption: ExportServerSideEncryptionSchema.and(
      z.any().openapi({ description: 'Encryption configuration for the auto export job.' }),
    ).exactOptional(),
    RevisionDestination: AutoExportRevisionDestinationEntrySchema.and(
      z
        .any()
        .openapi({
          description:
            'A revision destination is the Amazon S3 bucket folder destination to where the export will be sent.',
        }),
    ),
  })
  .openapi({
    required: ['RevisionDestination'],
    description: 'Details of the operation to be performed by the job.',
  })
  .openapi('AutoExportRevisionToS3RequestDetails')

const ActionSchema = z
  .object({
    ExportRevisionToS3: AutoExportRevisionToS3RequestDetailsSchema.and(
      z.any().openapi({ description: 'Details for the export revision to Amazon S3 action.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'What occurs after a certain event.', required: [] })
  .openapi('Action')

const RevisionPublishedSchema = z
  .object({
    DataSetId: IdSchema.and(
      z.any().openapi({ description: 'The data set ID of the published revision.' }),
    ),
  })
  .openapi({ required: ['DataSetId'], description: 'Information about the published revision.' })
  .openapi('RevisionPublished')

const EventSchema = z
  .object({
    RevisionPublished: RevisionPublishedSchema.and(
      z.any().openapi({ description: 'What occurs to start the revision publish action.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'What occurs to start an action.', required: [] })
  .openapi('Event')

const CreateEventActionResponseSchema = z
  .object({
    Action: ActionSchema.and(
      z.any().openapi({ description: 'What occurs after a certain event.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the event action.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the event action was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    Event: EventSchema.and(
      z.any().openapi({ description: 'What occurs to start an action.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the event action.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the event action was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateEventActionResponse')

const ResponseDetailsSchema: z.ZodType<ResponseDetailsType> = z
  .lazy(() =>
    z
      .object({
        ExportAssetToSignedUrl: ExportAssetToSignedUrlResponseDetailsSchema.and(
          z.any().openapi({ description: 'Details for the export to signed URL response.' }),
        ).exactOptional(),
        ExportAssetsToS3: ExportAssetsToS3ResponseDetailsSchema.and(
          z.any().openapi({ description: 'Details for the export to Amazon S3 response.' }),
        ).exactOptional(),
        ExportRevisionsToS3: ExportRevisionsToS3ResponseDetailsSchema.and(
          z
            .any()
            .openapi({ description: 'Details for the export revisions to Amazon S3 response.' }),
        ).exactOptional(),
        ImportAssetFromSignedUrl: ImportAssetFromSignedUrlResponseDetailsSchema.and(
          z.any().openapi({ description: 'Details for the import from signed URL response.' }),
        ).exactOptional(),
        ImportAssetsFromS3: ImportAssetsFromS3ResponseDetailsSchema.and(
          z.any().openapi({ description: 'Details for the import from Amazon S3 response.' }),
        ).exactOptional(),
        ImportAssetsFromRedshiftDataShares:
          ImportAssetsFromRedshiftDataSharesResponseDetailsSchema.and(
            z
              .any()
              .openapi({
                description: 'Details from an import from Amazon Redshift datashare response.',
              }),
          ).exactOptional(),
        ImportAssetFromApiGatewayApi: ImportAssetFromApiGatewayApiResponseDetailsSchema.and(
          z.any().openapi({ description: 'The response details.' }),
        ).exactOptional(),
        CreateS3DataAccessFromS3Bucket: CreateS3DataAccessFromS3BucketResponseDetailsSchema.and(
          z
            .any()
            .openapi({
              description: 'Response details from the CreateS3DataAccessFromS3Bucket job.',
            }),
        ).exactOptional(),
        ImportAssetsFromLakeFormationTagPolicy:
          ImportAssetsFromLakeFormationTagPolicyResponseDetailsSchema.and(
            z
              .any()
              .openapi({
                description:
                  'Response details from the ImportAssetsFromLakeFormationTagPolicy job.',
              }),
          ).exactOptional(),
      })
      .openapi({ description: 'Details for the response.', required: [] }),
  )
  .openapi('ResponseDetails')

const CodeSchema = z
  .enum([
    'ACCESS_DENIED_EXCEPTION',
    'INTERNAL_SERVER_EXCEPTION',
    'MALWARE_DETECTED',
    'RESOURCE_NOT_FOUND_EXCEPTION',
    'SERVICE_QUOTA_EXCEEDED_EXCEPTION',
    'VALIDATION_EXCEPTION',
    'MALWARE_SCAN_ENCRYPTED_FILE',
  ])
  .openapi('Code')

const DetailsSchema: z.ZodType<DetailsType> = z
  .lazy(() =>
    z
      .object({
        ImportAssetFromSignedUrlJobErrorDetails: ImportAssetFromSignedUrlJobErrorDetailsSchema.and(
          z.any().openapi({ description: 'Information about the job error.' }),
        ).exactOptional(),
        ImportAssetsFromS3JobErrorDetails: ListOfAssetSourceEntrySchema.and(
          z.any().openapi({ description: 'Details about the job error.' }),
        ).exactOptional(),
      })
      .openapi({ description: 'Information about the job error.', required: [] }),
  )
  .openapi('Details')

const JobErrorLimitNameSchema = z
  .enum([
    'Assets per revision',
    'Asset size in GB',
    'Amazon Redshift datashare assets per revision',
    'AWS Lake Formation data permission assets per revision',
    'Amazon S3 data access assets per revision',
  ])
  .openapi('JobErrorLimitName')

const DoubleSchema = z.float64().openapi('Double')

const JobErrorResourceTypesSchema = z
  .enum(['REVISION', 'ASSET', 'DATA_SET'])
  .openapi('JobErrorResourceTypes')

const JobErrorSchema = z
  .object({
    Code: CodeSchema.and(z.any().openapi({ description: 'The code for the job error.' })),
    Details: DetailsSchema.and(
      z.any().openapi({ description: 'The details about the job error.' }),
    ).exactOptional(),
    LimitName: JobErrorLimitNameSchema.and(
      z.any().openapi({ description: 'The name of the limit that was reached.' }),
    ).exactOptional(),
    LimitValue: DoubleSchema.and(
      z.any().openapi({ description: 'The value of the exceeded limit.' }),
    ).exactOptional(),
    Message: StringSchema.and(
      z.any().openapi({ description: 'The message related to the job error.' }),
    ),
    ResourceId: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The unique identifier for the resource related to the error.' }),
    ).exactOptional(),
    ResourceType: JobErrorResourceTypesSchema.and(
      z.any().openapi({ description: 'The type of resource related to the error.' }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Code', 'Message'],
    description: 'An error that occurred with the job request.',
  })
  .openapi('JobError')

const ListOfJobErrorSchema = z.array(JobErrorSchema).openapi('ListOfJobError')

const StateSchema = z
  .enum(['WAITING', 'IN_PROGRESS', 'ERROR', 'COMPLETED', 'CANCELLED', 'TIMED_OUT'])
  .openapi('State')

const TypeSchema = z
  .enum([
    'IMPORT_ASSETS_FROM_S3',
    'IMPORT_ASSET_FROM_SIGNED_URL',
    'EXPORT_ASSETS_TO_S3',
    'EXPORT_ASSET_TO_SIGNED_URL',
    'EXPORT_REVISIONS_TO_S3',
    'IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES',
    'IMPORT_ASSET_FROM_API_GATEWAY_API',
    'CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET',
    'IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY',
  ])
  .openapi('Type')

const CreateJobResponseSchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN for the job.' })).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the job was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    Details: ResponseDetailsSchema.and(
      z.any().openapi({ description: 'Details about the job.' }),
    ).exactOptional(),
    Errors: ListOfJobErrorSchema.and(
      z.any().openapi({ description: 'The errors associated with jobs.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the job.' }),
    ).exactOptional(),
    State: StateSchema.and(
      z.any().openapi({ description: 'The state of the job.' }),
    ).exactOptional(),
    Type: TypeSchema.and(z.any().openapi({ description: 'The job type.' })).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the job was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateJobResponse')

const StringMin0Max16384Schema = z.string().min(0).max(16384).openapi('StringMin0Max16384')

const BooleanSchema = z.boolean().openapi('Boolean')

const StringMin10Max512Schema = z.string().min(10).max(512).openapi('StringMin10Max512')

const CreateRevisionResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the revision.' }),
    ).exactOptional(),
    Comment: StringMin0Max16384Schema.and(
      z.any().openapi({ description: 'An optional comment about the revision.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the data set associated with the data set revision.',
        }),
    ).exactOptional(),
    Finalized: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.",
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the revision.' }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z.any().openapi({ description: 'The tags for the revision.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
    RevocationComment: StringMin10Max512Schema.and(
      z
        .any()
        .openapi({
          description:
            'A required comment to inform subscribers of the reason their access to the revision was revoked.',
        }),
    ).exactOptional(),
    Revoked: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: "A status indicating that subscribers' access to the revision was revoked.",
        }),
    ).exactOptional(),
    RevokedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was revoked, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('CreateRevisionResponse')

const DoubleMin0Schema = z.float64().openapi('DoubleMin0')

const S3SnapshotAssetSchema = z
  .object({
    Size: DoubleMin0Schema.and(
      z.any().openapi({ description: 'The size of the Amazon S3 object that is the object.' }),
    ),
  })
  .openapi({ required: ['Size'], description: 'The Amazon S3 object that is the asset.' })
  .openapi('S3SnapshotAsset')

const RedshiftDataShareAssetSchema = z
  .object({
    Arn: StringSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) of the datashare asset.' }),
    ),
  })
  .openapi({ required: ['Arn'], description: 'The Amazon Redshift datashare asset.' })
  .openapi('RedshiftDataShareAsset')

const ApiGatewayApiAssetSchema = z
  .object({
    ApiDescription: ApiDescriptionSchema.and(
      z.any().openapi({ description: 'The API description of the API asset.' }),
    ).exactOptional(),
    ApiEndpoint: StringSchema.and(
      z.any().openapi({ description: 'The API endpoint of the API asset.' }),
    ).exactOptional(),
    ApiId: StringSchema.and(
      z.any().openapi({ description: 'The unique identifier of the API asset.' }),
    ).exactOptional(),
    ApiKey: StringSchema.and(
      z.any().openapi({ description: 'The API key of the API asset.' }),
    ).exactOptional(),
    ApiName: StringSchema.and(
      z.any().openapi({ description: 'The API name of the API asset.' }),
    ).exactOptional(),
    ApiSpecificationDownloadUrl: StringSchema.and(
      z
        .any()
        .openapi({ description: 'The download URL of the API specification of the API asset.' }),
    ).exactOptional(),
    ApiSpecificationDownloadUrlExpiresAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the upload URL expires, in ISO 8601 format.',
        }),
    ).exactOptional(),
    ProtocolType: ProtocolTypeSchema.and(
      z.any().openapi({ description: 'The protocol type of the API asset.' }),
    ).exactOptional(),
    Stage: StringSchema.and(
      z.any().openapi({ description: 'The stage of the API asset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'The API Gateway API that is the asset.', required: [] })
  .openapi('ApiGatewayApiAsset')

const S3DataAccessAssetSchema = z
  .object({
    Bucket: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The Amazon S3 bucket hosting data to be shared in the S3 data access.',
        }),
    ),
    KeyPrefixes: ListOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The Amazon S3 bucket used for hosting shared data in the Amazon S3 data access.',
        }),
    ).exactOptional(),
    Keys: ListOfStringSchema.and(
      z.any().openapi({ description: 'S3 keys made available using this asset.' }),
    ).exactOptional(),
    S3AccessPointAlias: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The automatically-generated bucket-style alias for your Amazon S3 Access Point. Customers can access their entitled data using the S3 Access Point alias.',
        }),
    ).exactOptional(),
    S3AccessPointArn: StringSchema.and(
      z
        .any()
        .openapi({
          description:
            'The ARN for your Amazon S3 Access Point. Customers can also access their entitled data using the S3 Access Point ARN.',
        }),
    ).exactOptional(),
    KmsKeysToGrant: ListOfKmsKeysToGrantSchema.and(
      z
        .any()
        .openapi({
          description:
            ' List of AWS KMS CMKs (Key Management System Customer Managed Keys) and ARNs used to encrypt S3 objects being shared in this S3 Data Access asset. Providers must include all AWS KMS keys used to encrypt these shared S3 objects.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['Bucket'], description: 'The Amazon S3 data access that is the asset.' })
  .openapi('S3DataAccessAsset')

const LFResourceTypeSchema = z.enum(['TABLE', 'DATABASE']).openapi('LFResourceType')

const DatabaseLFTagPolicySchema = z
  .object({
    Expression: ListOfLFTagsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of LF-tag conditions that apply to database resources.' }),
    ),
  })
  .openapi({ required: ['Expression'], description: 'The LF-tag policy for database resources.' })
  .openapi('DatabaseLFTagPolicy')

const TableLFTagPolicySchema = z
  .object({
    Expression: ListOfLFTagsSchema.and(
      z
        .any()
        .openapi({ description: 'A list of LF-tag conditions that apply to table resources.' }),
    ),
  })
  .openapi({ required: ['Expression'], description: 'The LF-tag policy for a table resource.' })
  .openapi('TableLFTagPolicy')

const LFResourceDetailsSchema = z
  .object({
    Database: DatabaseLFTagPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the database resource included in the AWS Lake Formation data permission.',
        }),
    ).exactOptional(),
    Table: TableLFTagPolicySchema.and(
      z
        .any()
        .openapi({
          description:
            'Details about the table resource included in the AWS Lake Formation data permission.',
        }),
    ).exactOptional(),
  })
  .openapi({
    description:
      'Details about the AWS Lake Formation resource (Table or Database) included in the AWS Lake Formation data permission.',
    required: [],
  })
  .openapi('LFResourceDetails')

const LFTagPolicyDetailsSchema = z
  .object({
    CatalogId: AwsAccountIdSchema.and(
      z.any().openapi({ description: 'The identifier for the AWS Glue Data Catalog.' }),
    ),
    ResourceType: LFResourceTypeSchema.and(
      z.any().openapi({ description: 'The resource type for which the LF-tag policy applies.' }),
    ),
    ResourceDetails: LFResourceDetailsSchema.and(
      z
        .any()
        .openapi({
          description: 'Details for the Lake Formation Resources included in the LF-tag policy.',
        }),
    ),
  })
  .openapi({
    required: ['CatalogId', 'ResourceType', 'ResourceDetails'],
    description: 'Details about the LF-tag policy.',
  })
  .openapi('LFTagPolicyDetails')

const LakeFormationDataPermissionDetailsSchema = z
  .object({
    LFTagPolicy: LFTagPolicyDetailsSchema.and(
      z.any().openapi({ description: 'Details about the LF-tag policy.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about the AWS Lake Formation data permission.', required: [] })
  .openapi('LakeFormationDataPermissionDetails')

const LakeFormationDataPermissionTypeSchema = z
  .literal('LFTagPolicy')
  .openapi('LakeFormationDataPermissionType')

const LFPermissionSchema = z.enum(['DESCRIBE', 'SELECT']).openapi('LFPermission')

const ListOfLFPermissionsSchema = z.array(LFPermissionSchema).openapi('ListOfLFPermissions')

const LakeFormationDataPermissionAssetSchema = z
  .object({
    LakeFormationDataPermissionDetails: LakeFormationDataPermissionDetailsSchema.and(
      z.any().openapi({ description: 'Details about the AWS Lake Formation data permission.' }),
    ),
    LakeFormationDataPermissionType: LakeFormationDataPermissionTypeSchema.and(
      z.any().openapi({ description: 'The data permission type.' }),
    ),
    Permissions: ListOfLFPermissionsSchema.and(
      z
        .any()
        .openapi({ description: 'The permissions granted to the subscribers on the resource.' }),
    ),
    RoleArn: RoleArnSchema.and(
      z
        .any()
        .openapi({
          description:
            "The IAM role's ARN that allows AWS Data Exchange to assume the role and grant and revoke permissions to AWS Lake Formation data permissions.",
        }),
    ).exactOptional(),
  })
  .openapi({
    required: [
      'LakeFormationDataPermissionDetails',
      'LakeFormationDataPermissionType',
      'Permissions',
    ],
    description: 'The AWS Lake Formation data permission asset.',
  })
  .openapi('LakeFormationDataPermissionAsset')

const AssetDetailsSchema = z
  .object({
    S3SnapshotAsset: S3SnapshotAssetSchema.and(
      z.any().openapi({ description: 'The Amazon S3 object that is the asset.' }),
    ).exactOptional(),
    RedshiftDataShareAsset: RedshiftDataShareAssetSchema.and(
      z.any().openapi({ description: 'The Amazon Redshift datashare that is the asset.' }),
    ).exactOptional(),
    ApiGatewayApiAsset: ApiGatewayApiAssetSchema.and(
      z.any().openapi({ description: 'Information about the API Gateway API asset.' }),
    ).exactOptional(),
    S3DataAccessAsset: S3DataAccessAssetSchema.and(
      z.any().openapi({ description: 'The Amazon S3 data access that is the asset.' }),
    ).exactOptional(),
    LakeFormationDataPermissionAsset: LakeFormationDataPermissionAssetSchema.and(
      z.any().openapi({ description: 'The AWS Lake Formation data permission that is the asset.' }),
    ).exactOptional(),
  })
  .openapi({ description: 'Details about the asset.', required: [] })
  .openapi('AssetDetails')

const GetAssetResponseSchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN for the asset.' })).exactOptional(),
    AssetDetails: AssetDetailsSchema.and(
      z.any().openapi({ description: 'Details about the asset.' }),
    ).exactOptional(),
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: 'The type of asset that is added to a data set.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the asset was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this asset.',
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the asset.' }),
    ).exactOptional(),
    Name: AssetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in the LF-tag policy" are used as the asset name.',
        }),
    ).exactOptional(),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the revision associated with this asset.',
        }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the asset was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetAssetResponse')

const GetDataSetResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the data set.' }),
    ).exactOptional(),
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: 'The type of asset that is added to a data set.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the data set was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the data set.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the data set.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the data set.' }),
    ).exactOptional(),
    Origin: OriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).',
        }),
    ).exactOptional(),
    OriginDetails: OriginDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.',
        }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z.any().openapi({ description: 'The tags for the data set.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the data set was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetDataSetResponse')

const GetEventActionResponseSchema = z
  .object({
    Action: ActionSchema.and(
      z.any().openapi({ description: 'What occurs after a certain event.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the event action.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the event action was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    Event: EventSchema.and(
      z.any().openapi({ description: 'What occurs to start an action.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the event action.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the event action was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetEventActionResponse')

const GetJobResponseSchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN for the job.' })).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the job was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    Details: ResponseDetailsSchema.and(
      z.any().openapi({ description: 'Details about the job.' }),
    ).exactOptional(),
    Errors: ListOfJobErrorSchema.and(
      z.any().openapi({ description: 'The errors associated with jobs.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the job.' }),
    ).exactOptional(),
    State: StateSchema.and(
      z.any().openapi({ description: 'The state of the job.' }),
    ).exactOptional(),
    Type: TypeSchema.and(z.any().openapi({ description: 'The job type.' })).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the job was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetJobResponse')

const GetRevisionResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the revision.' }),
    ).exactOptional(),
    Comment: StringMin0Max16384Schema.and(
      z.any().openapi({ description: 'An optional comment about the revision.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the data set associated with the data set revision.',
        }),
    ).exactOptional(),
    Finalized: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.",
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the revision.' }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.',
        }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z.any().openapi({ description: 'The tags for the revision.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
    RevocationComment: StringMin10Max512Schema.and(
      z
        .any()
        .openapi({
          description:
            'A required comment to inform subscribers of the reason their access to the revision was revoked.',
        }),
    ).exactOptional(),
    Revoked: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: "A status indicating that subscribers' access to the revision was revoked.",
        }),
    ).exactOptional(),
    RevokedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was revoked, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('GetRevisionResponse')

const NextTokenSchema = z.string().openapi('NextToken')

const RevisionEntrySchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN for the revision.' })),
    Comment: StringMin0Max16384Schema.and(
      z.any().openapi({ description: 'An optional comment about the revision.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was created, in ISO 8601 format.',
        }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the data set associated with the data set revision.',
        }),
    ),
    Finalized: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.",
        }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The unique identifier for the revision.' })),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was last updated, in ISO 8601 format.',
        }),
    ),
    RevocationComment: StringMin10Max512Schema.and(
      z
        .any()
        .openapi({
          description:
            'A required comment to inform subscribers of the reason their access to the revision was revoked.',
        }),
    ).exactOptional(),
    Revoked: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: "A status indicating that subscribers' access to the revision was revoked.",
        }),
    ).exactOptional(),
    RevokedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was revoked, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({
    required: ['Arn', 'CreatedAt', 'DataSetId', 'Id', 'UpdatedAt'],
    description: 'A revision is a container for one or more assets.',
  })
  .openapi('RevisionEntry')

const ListOfRevisionEntrySchema = z.array(RevisionEntrySchema).openapi('ListOfRevisionEntry')

const ListDataSetRevisionsResponseSchema = z
  .object({
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token value retrieved from a previous call to access the next page of results.',
        }),
    ).exactOptional(),
    Revisions: ListOfRevisionEntrySchema.and(
      z.any().openapi({ description: 'The asset objects listed by the request.' }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataSetRevisionsResponse')

const DataSetEntrySchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN for the data set.' })),
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: 'The type of asset that is added to a data set.' }),
    ),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the data set was created, in ISO 8601 format.',
        }),
    ),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the data set.' }),
    ),
    Id: IdSchema.and(z.any().openapi({ description: 'The unique identifier for the data set.' })),
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the data set.' })),
    Origin: OriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).',
        }),
    ),
    OriginDetails: OriginDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.',
        }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the data set was last updated, in ISO 8601 format.',
        }),
    ),
  })
  .openapi({
    required: ['Arn', 'AssetType', 'CreatedAt', 'Description', 'Id', 'Name', 'Origin', 'UpdatedAt'],
    description: 'A data set is an AWS resource with one or more revisions.',
  })
  .openapi('DataSetEntry')

const ListOfDataSetEntrySchema = z.array(DataSetEntrySchema).openapi('ListOfDataSetEntry')

const ListDataSetsResponseSchema = z
  .object({
    DataSets: ListOfDataSetEntrySchema.and(
      z.any().openapi({ description: 'The data set objects listed by the request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token value retrieved from a previous call to access the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListDataSetsResponse')

const EventActionEntrySchema = z
  .object({
    Action: ActionSchema.and(
      z.any().openapi({ description: 'What occurs after a certain event.' }),
    ),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The Amazon Resource Name (ARN) for the event action.' }),
    ),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the event action was created, in ISO 8601 format.',
        }),
    ),
    Event: EventSchema.and(z.any().openapi({ description: 'What occurs to start an action.' })),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the event action.' }),
    ),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the event action was last updated, in ISO 8601 format.',
        }),
    ),
  })
  .openapi({
    required: ['Action', 'Arn', 'CreatedAt', 'Event', 'Id', 'UpdatedAt'],
    description:
      'An event action is an object that defines the relationship between a specific event and an automated action that will be taken on behalf of the customer.',
  })
  .openapi('EventActionEntry')

const ListOfEventActionEntrySchema = z
  .array(EventActionEntrySchema)
  .openapi('ListOfEventActionEntry')

const ListEventActionsResponseSchema = z
  .object({
    EventActions: ListOfEventActionEntrySchema.and(
      z.any().openapi({ description: 'The event action objects listed by the request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token value retrieved from a previous call to access the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListEventActionsResponse')

const JobEntrySchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN for the job.' })),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the job was created, in ISO 8601 format.',
        }),
    ),
    Details: ResponseDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'Details of the operation to be performed by the job, such as export destination details or import source details.',
        }),
    ),
    Errors: ListOfJobErrorSchema.and(
      z.any().openapi({ description: 'Errors for jobs.' }),
    ).exactOptional(),
    Id: IdSchema.and(z.any().openapi({ description: 'The unique identifier for the job.' })),
    State: StateSchema.and(z.any().openapi({ description: 'The state of the job.' })),
    Type: TypeSchema.and(z.any().openapi({ description: 'The job type.' })),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the job was last updated, in ISO 8601 format.',
        }),
    ),
  })
  .openapi({
    required: ['Arn', 'CreatedAt', 'Details', 'Id', 'State', 'Type', 'UpdatedAt'],
    description:
      'AWS Data Exchange Jobs are asynchronous import or export operations used to create or copy assets. A data set owner can both import and export as they see fit. Someone with an entitlement to a data set can only export. Jobs are deleted 90 days after they are created.',
  })
  .openapi('JobEntry')

const ListOfJobEntrySchema = z.array(JobEntrySchema).openapi('ListOfJobEntry')

const ListJobsResponseSchema = z
  .object({
    Jobs: ListOfJobEntrySchema.and(
      z.any().openapi({ description: 'The jobs listed by the request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token value retrieved from a previous call to access the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListJobsResponse')

const AssetEntrySchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN for the asset.' })),
    AssetDetails: AssetDetailsSchema.and(
      z.any().openapi({ description: 'Details about the asset.' }),
    ),
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: 'The type of asset that is added to a data set.' }),
    ),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the asset was created, in ISO 8601 format.',
        }),
    ),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this asset.',
        }),
    ),
    Id: IdSchema.and(z.any().openapi({ description: 'The unique identifier for the asset.' })),
    Name: AssetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in LF-tag policy" or "Table(s) included in LF-tag policy" are used as the asset name.',
        }),
    ),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the revision associated with this asset.',
        }),
    ),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the asset was last updated, in ISO 8601 format.',
        }),
    ),
  })
  .openapi({
    required: [
      'Arn',
      'AssetDetails',
      'AssetType',
      'CreatedAt',
      'DataSetId',
      'Id',
      'Name',
      'RevisionId',
      'UpdatedAt',
    ],
    description:
      'An asset in AWS Data Exchange is a piece of data (Amazon S3 object) or a means of fulfilling data (Amazon Redshift datashare or Amazon API Gateway API, AWS Lake Formation data permission, or Amazon S3 data access). The asset can be a structured data file, an image file, or some other data file that can be stored as an Amazon S3 object, an Amazon API Gateway API, or an Amazon Redshift datashare, an AWS Lake Formation data permission, or an Amazon S3 data access. When you create an import job for your files, API Gateway APIs, Amazon Redshift datashares, AWS Lake Formation data permission, or Amazon S3 data access, you create an asset in AWS Data Exchange.',
  })
  .openapi('AssetEntry')

const ListOfAssetEntrySchema = z.array(AssetEntrySchema).openapi('ListOfAssetEntry')

const ListRevisionAssetsResponseSchema = z
  .object({
    Assets: ListOfAssetEntrySchema.and(
      z.any().openapi({ description: 'The asset objects listed by the request.' }),
    ).exactOptional(),
    NextToken: NextTokenSchema.and(
      z
        .any()
        .openapi({
          description:
            'The token value retrieved from a previous call to access the next page of results.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListRevisionAssetsResponse')

const ListTagsForResourceResponseSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'A label that consists of a customer-defined key and an optional value.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ListTagsForResourceResponse')

const RevokeRevisionResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the revision.' }),
    ).exactOptional(),
    Comment: StringMin0Max16384Schema.and(
      z.any().openapi({ description: 'An optional comment about the revision.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the data set associated with the data set revision.',
        }),
    ).exactOptional(),
    Finalized: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.",
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the revision.' }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
    RevocationComment: StringMin10Max512Schema.and(
      z
        .any()
        .openapi({
          description:
            'A required comment to inform subscribers of the reason their access to the revision was revoked.',
        }),
    ).exactOptional(),
    Revoked: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: "A status indicating that subscribers' access to the revision was revoked.",
        }),
    ).exactOptional(),
    RevokedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was revoked, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RevokeRevisionResponse')

const SendApiAssetResponseSchema = z
  .object({
    Body: StringSchema.and(
      z
        .any()
        .openapi({
          description: 'The response body from the underlying API tracked by the API asset.',
        }),
    ).exactOptional(),
    ResponseHeaders: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description: 'The response headers from the underlying API tracked by the API asset.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SendApiAssetResponse')

const StartJobResponseSchema = z.object({}).openapi('StartJobResponse')

const UpdateAssetResponseSchema = z
  .object({
    Arn: ArnSchema.and(z.any().openapi({ description: 'The ARN for the asset.' })).exactOptional(),
    AssetDetails: AssetDetailsSchema.and(
      z.any().openapi({ description: 'Details about the asset.' }),
    ).exactOptional(),
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: 'The type of asset that is added to a data set.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the asset was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the data set associated with this asset.',
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the asset.' }),
    ).exactOptional(),
    Name: AssetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy"- or "Table(s) included in LF-tag policy" are used as the asset name.',
        }),
    ).exactOptional(),
    RevisionId: IdSchema.and(
      z
        .any()
        .openapi({
          description: 'The unique identifier for the revision associated with this asset.',
        }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The asset ID of the owned asset corresponding to the entitled asset being viewed. This parameter is returned when an asset owner is viewing the entitled copy of its owned asset.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the asset was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateAssetResponse')

const UpdateDataSetResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the data set.' }),
    ).exactOptional(),
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: 'The type of asset that is added to a data set.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the data set was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the data set.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the data set.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the data set.' }),
    ).exactOptional(),
    Origin: OriginSchema.and(
      z
        .any()
        .openapi({
          description:
            'A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).',
        }),
    ).exactOptional(),
    OriginDetails: OriginDetailsSchema.and(
      z
        .any()
        .openapi({
          description:
            'If the origin of this data set is ENTITLED, includes the details for the product on AWS Marketplace.',
        }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The data set ID of the owned data set corresponding to the entitled data set being viewed. This parameter is returned when a data set owner is viewing the entitled copy of its owned data set.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the data set was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateDataSetResponse')

const UpdateEventActionResponseSchema = z
  .object({
    Action: ActionSchema.and(
      z.any().openapi({ description: 'What occurs after a certain event.' }),
    ).exactOptional(),
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the event action.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the event action was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    Event: EventSchema.and(
      z.any().openapi({ description: 'What occurs to start an action.' }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the event action.' }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description:
            'The date and time that the event action was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateEventActionResponse')

const UpdateRevisionResponseSchema = z
  .object({
    Arn: ArnSchema.and(
      z.any().openapi({ description: 'The ARN for the revision.' }),
    ).exactOptional(),
    Comment: StringMin0Max16384Schema.and(
      z.any().openapi({ description: 'An optional comment about the revision.' }),
    ).exactOptional(),
    CreatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was created, in ISO 8601 format.',
        }),
    ).exactOptional(),
    DataSetId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The unique identifier for the data set associated with the data set revision.',
        }),
    ).exactOptional(),
    Finalized: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "To publish a revision to a data set in a product, the revision must first be finalized. Finalizing a revision tells AWS Data Exchange that changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products. Finalized revisions can be published through the AWS Data Exchange console or the AWS Marketplace Catalog API, using the StartChangeSet AWS Marketplace Catalog API action. When using the API, revisions are uniquely identified by their ARN.",
        }),
    ).exactOptional(),
    Id: IdSchema.and(
      z.any().openapi({ description: 'The unique identifier for the revision.' }),
    ).exactOptional(),
    SourceId: IdSchema.and(
      z
        .any()
        .openapi({
          description:
            'The revision ID of the owned revision corresponding to the entitled revision being viewed. This parameter is returned when a revision owner is viewing the entitled copy of its owned revision.',
        }),
    ).exactOptional(),
    UpdatedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was last updated, in ISO 8601 format.',
        }),
    ).exactOptional(),
    RevocationComment: StringMin10Max512Schema.and(
      z
        .any()
        .openapi({
          description:
            'A required comment to inform subscribers of the reason their access to the revision was revoked.',
        }),
    ).exactOptional(),
    Revoked: BooleanSchema.and(
      z
        .any()
        .openapi({
          description: "A status indicating that subscribers' access to the revision was revoked.",
        }),
    ).exactOptional(),
    RevokedAt: TimestampSchema.and(
      z
        .any()
        .openapi({
          description: 'The date and time that the revision was revoked, in ISO 8601 format.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('UpdateRevisionResponse')

const CancelJobRequestSchema = z
  .object({})
  .openapi({ title: 'CancelJobRequest' })
  .openapi('CancelJobRequest')

const CreateDataSetRequestSchema = z
  .object({
    AssetType: AssetTypeSchema.and(
      z.any().openapi({ description: 'The type of asset that is added to a data set.' }),
    ),
    Description: DescriptionSchema.and(
      z
        .any()
        .openapi({
          description:
            'A description for the data set. This value can be up to 16,348 characters long.',
        }),
    ),
    Name: NameSchema.and(z.any().openapi({ description: 'The name of the data set.' })),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.',
        }),
    ).exactOptional(),
  })
  .openapi({ required: ['AssetType', 'Description', 'Name'], title: 'CreateDataSetRequest' })
  .openapi('CreateDataSetRequest')

const CreateEventActionRequestSchema = z
  .object({
    Action: ActionSchema.and(
      z.any().openapi({ description: 'What occurs after a certain event.' }),
    ),
    Event: EventSchema.and(z.any().openapi({ description: 'What occurs to start an action.' })),
  })
  .openapi({ required: ['Action', 'Event'], title: 'CreateEventActionRequest' })
  .openapi('CreateEventActionRequest')

const RequestDetailsSchema: z.ZodType<RequestDetailsType> = z
  .lazy(() =>
    z
      .object({
        ExportAssetToSignedUrl: ExportAssetToSignedUrlRequestDetailsSchema.and(
          z.any().openapi({ description: 'Details about the export to signed URL request.' }),
        ).exactOptional(),
        ExportAssetsToS3: ExportAssetsToS3RequestDetailsSchema.and(
          z.any().openapi({ description: 'Details about the export to Amazon S3 request.' }),
        ).exactOptional(),
        ExportRevisionsToS3: ExportRevisionsToS3RequestDetailsSchema.and(
          z.any().openapi({ description: 'Details about the export to Amazon S3 request.' }),
        ).exactOptional(),
        ImportAssetFromSignedUrl: ImportAssetFromSignedUrlRequestDetailsSchema.and(
          z.any().openapi({ description: 'Details about the import from Amazon S3 request.' }),
        ).exactOptional(),
        ImportAssetsFromS3: ImportAssetsFromS3RequestDetailsSchema.and(
          z
            .any()
            .openapi({
              description: 'Details about the import asset from API Gateway API request.',
            }),
        ).exactOptional(),
        ImportAssetsFromRedshiftDataShares:
          ImportAssetsFromRedshiftDataSharesRequestDetailsSchema.and(
            z
              .any()
              .openapi({
                description: 'Details from an import from Amazon Redshift datashare request.',
              }),
          ).exactOptional(),
        ImportAssetFromApiGatewayApi: ImportAssetFromApiGatewayApiRequestDetailsSchema.and(
          z.any().openapi({ description: 'Details about the import from signed URL request.' }),
        ).exactOptional(),
        CreateS3DataAccessFromS3Bucket: CreateS3DataAccessFromS3BucketRequestDetailsSchema.and(
          z
            .any()
            .openapi({
              description:
                'Details of the request to create S3 data access from the Amazon S3 bucket.',
            }),
        ).exactOptional(),
        ImportAssetsFromLakeFormationTagPolicy:
          ImportAssetsFromLakeFormationTagPolicyRequestDetailsSchema.and(
            z
              .any()
              .openapi({
                description: 'Request details for the ImportAssetsFromLakeFormationTagPolicy job.',
              }),
          ).exactOptional(),
      })
      .openapi({ description: 'The details for the request.', required: [] }),
  )
  .openapi('RequestDetails')

const CreateJobRequestSchema = z
  .object({
    Details: RequestDetailsSchema.and(
      z.any().openapi({ description: 'The details for the CreateJob request.' }),
    ),
    Type: TypeSchema.and(z.any().openapi({ description: 'The type of job to be created.' })),
  })
  .openapi({ required: ['Details', 'Type'], title: 'CreateJobRequest' })
  .openapi('CreateJobRequest')

const CreateRevisionRequestSchema = z
  .object({
    Comment: StringMin0Max16384Schema.and(
      z.any().openapi({ description: 'An optional comment about the revision.' }),
    ).exactOptional(),
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          description:
            'A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'CreateRevisionRequest', required: [] })
  .openapi('CreateRevisionRequest')

const DeleteAssetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteAssetRequest' })
  .openapi('DeleteAssetRequest')

const DeleteDataSetRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteDataSetRequest' })
  .openapi('DeleteDataSetRequest')

const DeleteEventActionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteEventActionRequest' })
  .openapi('DeleteEventActionRequest')

const DeleteRevisionRequestSchema = z
  .object({})
  .openapi({ title: 'DeleteRevisionRequest' })
  .openapi('DeleteRevisionRequest')

const GetAssetRequestSchema = z
  .object({})
  .openapi({ title: 'GetAssetRequest' })
  .openapi('GetAssetRequest')

const GetDataSetRequestSchema = z
  .object({})
  .openapi({ title: 'GetDataSetRequest' })
  .openapi('GetDataSetRequest')

const GetEventActionRequestSchema = z
  .object({})
  .openapi({ title: 'GetEventActionRequest' })
  .openapi('GetEventActionRequest')

const GetJobRequestSchema = z
  .object({})
  .openapi({ title: 'GetJobRequest' })
  .openapi('GetJobRequest')

const GetRevisionRequestSchema = z
  .object({})
  .openapi({ title: 'GetRevisionRequest' })
  .openapi('GetRevisionRequest')

const MaxResultsSchema = z.int().min(1).max(200).openapi('MaxResults')

const ListDataSetRevisionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDataSetRevisionsRequest' })
  .openapi('ListDataSetRevisionsRequest')

const ListDataSetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListDataSetsRequest' })
  .openapi('ListDataSetsRequest')

const ListEventActionsRequestSchema = z
  .object({})
  .openapi({ title: 'ListEventActionsRequest' })
  .openapi('ListEventActionsRequest')

const ListJobsRequestSchema = z
  .object({})
  .openapi({ title: 'ListJobsRequest' })
  .openapi('ListJobsRequest')

const ListRevisionAssetsRequestSchema = z
  .object({})
  .openapi({ title: 'ListRevisionAssetsRequest' })
  .openapi('ListRevisionAssetsRequest')

const ListTagsForResourceRequestSchema = z
  .object({})
  .openapi({ title: 'ListTagsForResourceRequest' })
  .openapi('ListTagsForResourceRequest')

const RevokeRevisionRequestSchema = z
  .object({
    RevocationComment: StringMin10Max512Schema.and(
      z
        .any()
        .openapi({
          description:
            'A required comment to inform subscribers of the reason their access to the revision was revoked.',
        }),
    ),
  })
  .openapi({ required: ['RevocationComment'], title: 'RevokeRevisionRequest' })
  .openapi('RevokeRevisionRequest')

const SendApiAssetRequestSchema = z
  .object({
    Body: StringSchema.and(z.any().openapi({ description: 'The request body.' })).exactOptional(),
    RequestHeaders: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'x-amzn-dataexchange-header-' },
          description:
            'Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.',
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'SendApiAssetRequest', required: [] })
  .openapi('SendApiAssetRequest')

const StartJobRequestSchema = z
  .object({})
  .openapi({ title: 'StartJobRequest' })
  .openapi('StartJobRequest')

const TagResourceRequestSchema = z
  .object({
    Tags: MapOfStringSchema.and(
      z
        .any()
        .openapi({
          xml: { name: 'tags' },
          description: 'A label that consists of a customer-defined key and an optional value.',
        }),
    ),
  })
  .openapi({ required: ['Tags'], title: 'TagResourceRequest' })
  .openapi('TagResourceRequest')

const UntagResourceRequestSchema = z
  .object({})
  .openapi({ title: 'UntagResourceRequest' })
  .openapi('UntagResourceRequest')

const UpdateAssetRequestSchema = z
  .object({
    Name: AssetNameSchema.and(
      z
        .any()
        .openapi({
          description:
            'The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in LF-tag policy" are used as the name.',
        }),
    ),
  })
  .openapi({ required: ['Name'], title: 'UpdateAssetRequest' })
  .openapi('UpdateAssetRequest')

const UpdateDataSetRequestSchema = z
  .object({
    Description: DescriptionSchema.and(
      z.any().openapi({ description: 'The description for the data set.' }),
    ).exactOptional(),
    Name: NameSchema.and(
      z.any().openapi({ description: 'The name of the data set.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateDataSetRequest', required: [] })
  .openapi('UpdateDataSetRequest')

const UpdateEventActionRequestSchema = z
  .object({
    Action: ActionSchema.and(
      z.any().openapi({ description: 'What occurs after a certain event.' }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateEventActionRequest', required: [] })
  .openapi('UpdateEventActionRequest')

const UpdateRevisionRequestSchema = z
  .object({
    Comment: StringMin0Max16384Schema.and(
      z.any().openapi({ description: 'An optional comment about the revision.' }),
    ).exactOptional(),
    Finalized: BooleanSchema.and(
      z
        .any()
        .openapi({
          description:
            "Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.",
        }),
    ).exactOptional(),
  })
  .openapi({ title: 'UpdateRevisionRequest', required: [] })
  .openapi('UpdateRevisionRequest')

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

export const getV1JobsJobIdRoute = createRoute({
  method: 'get',
  path: '/v1/jobs/{JobId}',
  description: 'This operation returns information about a job.',
  operationId: 'GetJob',
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
      JobId: z
        .string()
        .openapi({
          param: {
            name: 'JobId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteV1JobsJobIdRoute = createRoute({
  method: 'delete',
  path: '/v1/jobs/{JobId}',
  description:
    'This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.',
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
      JobId: z
        .string()
        .openapi({
          param: {
            name: 'JobId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ConflictException',
      content: { 'application/json': { schema: ConflictExceptionSchema } },
    },
    483: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    484: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchV1JobsJobIdRoute = createRoute({
  method: 'patch',
  path: '/v1/jobs/{JobId}',
  description: 'This operation starts a job.',
  operationId: 'StartJob',
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
      JobId: z
        .string()
        .openapi({
          param: {
            name: 'JobId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a job.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Success',
      content: { 'application/json': { schema: StartJobResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1DataSetsRoute = createRoute({
  method: 'get',
  path: '/v1/data-sets',
  description:
    'This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.',
  operationId: 'ListDataSets',
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
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results returned by a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 200 },
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
              'The token value retrieved from a previous call to access the next page of results.',
            schema: { type: 'string' },
          },
        }),
      origin: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'origin',
            in: 'query',
            required: false,
            description:
              'A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).',
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
      content: { 'application/json': { schema: ListDataSetsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postV1DataSetsRoute = createRoute({
  method: 'post',
  path: '/v1/data-sets',
  description: 'This operation creates a data set.',
  operationId: 'CreateDataSet',
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
              AssetType: z
                .enum([
                  'S3_SNAPSHOT',
                  'REDSHIFT_DATA_SHARE',
                  'API_GATEWAY_API',
                  'S3_DATA_ACCESS',
                  'LAKE_FORMATION_DATA_PERMISSION',
                ])
                .openapi({ description: 'The type of asset that is added to a data set.' }),
              Description: z
                .string()
                .openapi({
                  description:
                    'A description for the data set. This value can be up to 16,348 characters long.',
                }),
              Name: z.string().openapi({ description: 'The name of the data set.' }),
              Tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A data set tag is an optional label that you can assign to a data set when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.',
                }),
            })
            .openapi({ required: ['AssetType', 'Description', 'Name'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateDataSetResponseSchema } },
    },
    480: {
      description: 'ServiceLimitExceededException',
      content: { 'application/json': { schema: ServiceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1EventActionsRoute = createRoute({
  method: 'get',
  path: '/v1/event-actions',
  description: 'This operation lists your event actions.',
  operationId: 'ListEventActions',
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
      eventSourceId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'eventSourceId',
            in: 'query',
            required: false,
            description: 'The unique identifier for the event source.',
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
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results returned by a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 200 },
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
              'The token value retrieved from a previous call to access the next page of results.',
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
      content: { 'application/json': { schema: ListEventActionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postV1EventActionsRoute = createRoute({
  method: 'post',
  path: '/v1/event-actions',
  description: 'This operation creates an event action.',
  operationId: 'CreateEventAction',
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
              Action: z
                .object({
                  ExportRevisionToS3: AutoExportRevisionToS3RequestDetailsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Details for the export revision to Amazon S3 action.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'What occurs after a certain event.', required: [] }),
              Event: z
                .object({
                  RevisionPublished: RevisionPublishedSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'What occurs to start the revision publish action.',
                      }),
                  ).exactOptional(),
                })
                .openapi({ description: 'What occurs to start an action.', required: [] }),
            })
            .openapi({ required: ['Action', 'Event'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Success',
      content: { 'application/json': { schema: CreateEventActionResponseSchema } },
    },
    480: {
      description: 'ServiceLimitExceededException',
      content: { 'application/json': { schema: ServiceLimitExceededExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1JobsRoute = createRoute({
  method: 'get',
  path: '/v1/jobs',
  description: 'This operation lists your jobs sorted by CreatedAt in descending order.',
  operationId: 'ListJobs',
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
      dataSetId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'dataSetId',
            in: 'query',
            required: false,
            description: 'The unique identifier for a data set.',
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
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results returned by a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 200 },
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
              'The token value retrieved from a previous call to access the next page of results.',
            schema: { type: 'string' },
          },
        }),
      revisionId: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'revisionId',
            in: 'query',
            required: false,
            description: 'The unique identifier for a revision.',
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
      content: { 'application/json': { schema: ListJobsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postV1JobsRoute = createRoute({
  method: 'post',
  path: '/v1/jobs',
  description: 'This operation creates a job.',
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
              Details: z
                .object({
                  ExportAssetToSignedUrl: ExportAssetToSignedUrlRequestDetailsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Details about the export to signed URL request.' }),
                  ).exactOptional(),
                  ExportAssetsToS3: ExportAssetsToS3RequestDetailsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Details about the export to Amazon S3 request.' }),
                  ).exactOptional(),
                  ExportRevisionsToS3: ExportRevisionsToS3RequestDetailsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Details about the export to Amazon S3 request.' }),
                  ).exactOptional(),
                  ImportAssetFromSignedUrl: ImportAssetFromSignedUrlRequestDetailsSchema.and(
                    z
                      .any()
                      .openapi({ description: 'Details about the import from Amazon S3 request.' }),
                  ).exactOptional(),
                  ImportAssetsFromS3: ImportAssetsFromS3RequestDetailsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Details about the import asset from API Gateway API request.',
                      }),
                  ).exactOptional(),
                  ImportAssetsFromRedshiftDataShares:
                    ImportAssetsFromRedshiftDataSharesRequestDetailsSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Details from an import from Amazon Redshift datashare request.',
                        }),
                    ).exactOptional(),
                  ImportAssetFromApiGatewayApi:
                    ImportAssetFromApiGatewayApiRequestDetailsSchema.and(
                      z
                        .any()
                        .openapi({
                          description: 'Details about the import from signed URL request.',
                        }),
                    ).exactOptional(),
                  CreateS3DataAccessFromS3Bucket:
                    CreateS3DataAccessFromS3BucketRequestDetailsSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Details of the request to create S3 data access from the Amazon S3 bucket.',
                        }),
                    ).exactOptional(),
                  ImportAssetsFromLakeFormationTagPolicy:
                    ImportAssetsFromLakeFormationTagPolicyRequestDetailsSchema.and(
                      z
                        .any()
                        .openapi({
                          description:
                            'Request details for the ImportAssetsFromLakeFormationTagPolicy job.',
                        }),
                    ).exactOptional(),
                })
                .openapi({ description: 'The details for the request.', required: [] }),
              Type: z
                .enum([
                  'IMPORT_ASSETS_FROM_S3',
                  'IMPORT_ASSET_FROM_SIGNED_URL',
                  'EXPORT_ASSETS_TO_S3',
                  'EXPORT_ASSET_TO_SIGNED_URL',
                  'EXPORT_REVISIONS_TO_S3',
                  'IMPORT_ASSETS_FROM_REDSHIFT_DATA_SHARES',
                  'IMPORT_ASSET_FROM_API_GATEWAY_API',
                  'CREATE_S3_DATA_ACCESS_FROM_S3_BUCKET',
                  'IMPORT_ASSETS_FROM_LAKE_FORMATION_TAG_POLICY',
                ])
                .openapi({ description: 'The type of job to be created.' }),
            })
            .openapi({ required: ['Details', 'Type'] }),
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
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1DataSetsDataSetIdRevisionsRoute = createRoute({
  method: 'get',
  path: '/v1/data-sets/{DataSetId}/revisions',
  description:
    "This operation lists a data set's revisions sorted by CreatedAt in descending order.",
  operationId: 'ListDataSetRevisions',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
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
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results returned by a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 200 },
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
              'The token value retrieved from a previous call to access the next page of results.',
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
      content: { 'application/json': { schema: ListDataSetRevisionsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postV1DataSetsDataSetIdRevisionsRoute = createRoute({
  method: 'post',
  path: '/v1/data-sets/{DataSetId}/revisions',
  description: 'This operation creates a revision for a data set.',
  operationId: 'CreateRevision',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Comment: z
                .string()
                .min(0)
                .max(16384)
                .exactOptional()
                .openapi({ description: 'An optional comment about the revision.' }),
              Tags: z
                .record(z.string(), StringSchema)
                .exactOptional()
                .openapi({
                  description:
                    'A revision tag is an optional label that you can assign to a revision when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to these data sets and revisions.',
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
      content: { 'application/json': { schema: CreateRevisionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute = createRoute({
  method: 'get',
  path: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}',
  description: 'This operation returns information about an asset.',
  operationId: 'GetAsset',
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
      AssetId: z
        .string()
        .openapi({
          param: {
            name: 'AssetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for an asset.',
            schema: { type: 'string' },
          },
        }),
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
      RevisionId: z
        .string()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a revision.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetAssetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute = createRoute({
  method: 'delete',
  path: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}',
  description: 'This operation deletes an asset.',
  operationId: 'DeleteAsset',
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
      AssetId: z
        .string()
        .openapi({
          param: {
            name: 'AssetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for an asset.',
            schema: { type: 'string' },
          },
        }),
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
      RevisionId: z
        .string()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a revision.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchV1DataSetsDataSetIdRevisionsRevisionIdAssetsAssetIdRoute = createRoute({
  method: 'patch',
  path: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets/{AssetId}',
  description: 'This operation updates an asset.',
  operationId: 'UpdateAsset',
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
      AssetId: z
        .string()
        .openapi({
          param: {
            name: 'AssetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for an asset.',
            schema: { type: 'string' },
          },
        }),
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
      RevisionId: z
        .string()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a revision.',
            schema: { type: 'string' },
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
                .openapi({
                  description:
                    'The name of the asset. When importing from Amazon S3, the Amazon S3 object key is used as the asset name. When exporting to Amazon S3, the asset name is used as default target Amazon S3 object key. When importing from Amazon API Gateway API, the API name is used as the asset name. When importing from Amazon Redshift, the datashare name is used as the asset name. When importing from AWS Lake Formation, the static values of "Database(s) included in the LF-tag policy" or "Table(s) included in LF-tag policy" are used as the name.',
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
      content: { 'application/json': { schema: UpdateAssetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1DataSetsDataSetIdRoute = createRoute({
  method: 'get',
  path: '/v1/data-sets/{DataSetId}',
  description: 'This operation returns information about a data set.',
  operationId: 'GetDataSet',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetDataSetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteV1DataSetsDataSetIdRoute = createRoute({
  method: 'delete',
  path: '/v1/data-sets/{DataSetId}',
  description: 'This operation deletes a data set.',
  operationId: 'DeleteDataSet',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchV1DataSetsDataSetIdRoute = createRoute({
  method: 'patch',
  path: '/v1/data-sets/{DataSetId}',
  description: 'This operation updates a data set.',
  operationId: 'UpdateDataSet',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Description: z
                .string()
                .exactOptional()
                .openapi({ description: 'The description for the data set.' }),
              Name: z
                .string()
                .exactOptional()
                .openapi({ description: 'The name of the data set.' }),
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
      content: { 'application/json': { schema: UpdateDataSetResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1EventActionsEventActionIdRoute = createRoute({
  method: 'get',
  path: '/v1/event-actions/{EventActionId}',
  description: 'This operation retrieves information about an event action.',
  operationId: 'GetEventAction',
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
      EventActionId: z
        .string()
        .openapi({
          param: {
            name: 'EventActionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the event action.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetEventActionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteV1EventActionsEventActionIdRoute = createRoute({
  method: 'delete',
  path: '/v1/event-actions/{EventActionId}',
  description: 'This operation deletes the event action.',
  operationId: 'DeleteEventAction',
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
      EventActionId: z
        .string()
        .openapi({
          param: {
            name: 'EventActionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the event action.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchV1EventActionsEventActionIdRoute = createRoute({
  method: 'patch',
  path: '/v1/event-actions/{EventActionId}',
  description: 'This operation updates the event action.',
  operationId: 'UpdateEventAction',
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
      EventActionId: z
        .string()
        .openapi({
          param: {
            name: 'EventActionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for the event action.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Action: z
                .object({
                  ExportRevisionToS3: AutoExportRevisionToS3RequestDetailsSchema.and(
                    z
                      .any()
                      .openapi({
                        description: 'Details for the export revision to Amazon S3 action.',
                      }),
                  ).exactOptional(),
                })
                .exactOptional()
                .openapi({ description: 'What occurs after a certain event.', required: [] }),
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
      content: { 'application/json': { schema: UpdateEventActionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1DataSetsDataSetIdRevisionsRevisionIdRoute = createRoute({
  method: 'get',
  path: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}',
  description: 'This operation returns information about a revision.',
  operationId: 'GetRevision',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
      RevisionId: z
        .string()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a revision.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: GetRevisionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const deleteV1DataSetsDataSetIdRevisionsRevisionIdRoute = createRoute({
  method: 'delete',
  path: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}',
  description: 'This operation deletes a revision.',
  operationId: 'DeleteRevision',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
      RevisionId: z
        .string()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a revision.',
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'Success' },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const patchV1DataSetsDataSetIdRevisionsRevisionIdRoute = createRoute({
  method: 'patch',
  path: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}',
  description: 'This operation updates a revision.',
  operationId: 'UpdateRevision',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
      RevisionId: z
        .string()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a revision.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              Comment: z
                .string()
                .min(0)
                .max(16384)
                .exactOptional()
                .openapi({ description: 'An optional comment about the revision.' }),
              Finalized: z
                .boolean()
                .exactOptional()
                .openapi({
                  description:
                    "Finalizing a revision tells AWS Data Exchange that your changes to the assets in the revision are complete. After it's in this read-only state, you can publish the revision to your products.",
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
      content: { 'application/json': { schema: UpdateRevisionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getV1DataSetsDataSetIdRevisionsRevisionIdAssetsRoute = createRoute({
  method: 'get',
  path: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/assets',
  description:
    "This operation lists a revision's assets sorted alphabetically in descending order.",
  operationId: 'ListRevisionAssets',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
      RevisionId: z
        .string()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a revision.',
            schema: { type: 'string' },
          },
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
          z.int().min(1).max(200),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'maxResults',
            in: 'query',
            required: false,
            description: 'The maximum number of results returned by a single call.',
            schema: { type: 'integer', minimum: 1, maximum: 200 },
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
              'The token value retrieved from a previous call to access the next page of results.',
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
      content: { 'application/json': { schema: ListRevisionAssetsResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
    },
    482: {
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    483: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const getTagsResourceArnRoute = createRoute({
  method: 'get',
  path: '/tags/{ResourceArn}',
  description: 'This operation lists the tags on the resource.',
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
            description: 'An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.',
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
  },
})

export const postTagsResourceArnRoute = createRoute({
  method: 'post',
  path: '/tags/{ResourceArn}',
  description: 'This operation tags a resource.',
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
            description: 'An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.',
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
                    'A label that consists of a customer-defined key and an optional value.',
                }),
            })
            .openapi({ required: ['tags'] }),
        },
      },
      required: true,
    },
  },
  responses: { 204: { description: 'Success' } },
})

export const postV1DataSetsDataSetIdRevisionsRevisionIdRevokeRoute = createRoute({
  method: 'post',
  path: '/v1/data-sets/{DataSetId}/revisions/{RevisionId}/revoke',
  description: "This operation revokes subscribers' access to a revision.",
  operationId: 'RevokeRevision',
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
      DataSetId: z
        .string()
        .openapi({
          param: {
            name: 'DataSetId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a data set.',
            schema: { type: 'string' },
          },
        }),
      RevisionId: z
        .string()
        .openapi({
          param: {
            name: 'RevisionId',
            in: 'path',
            required: true,
            description: 'The unique identifier for a revision.',
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              RevocationComment: z
                .string()
                .min(10)
                .max(512)
                .openapi({
                  description:
                    'A required comment to inform subscribers of the reason their access to the revision was revoked.',
                }),
            })
            .openapi({ required: ['RevocationComment'] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Success',
      content: { 'application/json': { schema: RevokeRevisionResponseSchema } },
    },
    480: {
      description: 'ResourceNotFoundException',
      content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
    },
    481: {
      description: 'ThrottlingException',
      content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
      description: 'ValidationException',
      content: { 'application/json': { schema: ValidationExceptionSchema } },
    },
    485: {
      description: 'InternalServerException',
      content: { 'application/json': { schema: InternalServerExceptionSchema } },
    },
  },
})

export const postV1XAmznDataexchangeAssetIdXAmznDataexchangeDataSetIdXAmznDataexchangeRevisionIdRoute =
  createRoute({
    method: 'post',
    path: '/v1#x-amzn-dataexchange-asset-id&x-amzn-dataexchange-data-set-id&x-amzn-dataexchange-revision-id',
    description:
      'This operation invokes an API Gateway API asset. The request is proxied to the provider’s API Gateway API.',
    operationId: 'SendApiAsset',
    request: {
      headers: z.object({
        'X-Amz-Content-Sha256': XAmzContentSha256ParamsSchema,
        'X-Amz-Date': XAmzDateParamsSchema,
        'X-Amz-Algorithm': XAmzAlgorithmParamsSchema,
        'X-Amz-Credential': XAmzCredentialParamsSchema,
        'X-Amz-Security-Token': XAmzSecurityTokenParamsSchema,
        'X-Amz-Signature': XAmzSignatureParamsSchema,
        'X-Amz-SignedHeaders': XAmzSignedHeadersParamsSchema,
        'x-amzn-dataexchange-asset-id': z
          .string()
          .openapi({
            param: {
              name: 'x-amzn-dataexchange-asset-id',
              in: 'header',
              required: true,
              description: 'Asset ID value for the API request.',
              schema: { type: 'string' },
            },
          }),
        'x-amzn-dataexchange-data-set-id': z
          .string()
          .openapi({
            param: {
              name: 'x-amzn-dataexchange-data-set-id',
              in: 'header',
              required: true,
              description: 'Data set ID value for the API request.',
              schema: { type: 'string' },
            },
          }),
        'x-amzn-dataexchange-http-method': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amzn-dataexchange-http-method',
              in: 'header',
              required: false,
              description:
                'HTTP method value for the API request. Alternatively, you can use the appropriate verb in your request.',
              schema: { type: 'string' },
            },
          }),
        'x-amzn-dataexchange-path': z
          .string()
          .exactOptional()
          .openapi({
            param: {
              name: 'x-amzn-dataexchange-path',
              in: 'header',
              required: false,
              description:
                'URI path value for the API request. Alternatively, you can set the URI path directly by invoking /v1/{pathValue}.',
              schema: { type: 'string' },
            },
          }),
        'x-amzn-dataexchange-revision-id': z
          .string()
          .openapi({
            param: {
              name: 'x-amzn-dataexchange-revision-id',
              in: 'header',
              required: true,
              description: 'Revision ID value for the API request.',
              schema: { type: 'string' },
            },
          }),
      }),
      query: z
        .looseObject({})
        .transform((val) => {
          const rest: [string, unknown][] = []
          const groups = new Map<string, Record<string, unknown>>()
          const group = (name: string) => {
            const found = groups.get(name)
            if (found !== undefined) return found
            const made: Record<string, unknown> = Object.create(null)
            groups.set(name, made)
            return made
          }
          const open: string[] = ['QueryStringParameters']
          const taken: string[] = []
          for (const [key, item] of Object.entries(val)) {
            if (!taken.includes(key)) {
              for (const owner of open) {
                group(owner)[key] = item
              }
            }
            rest.push([key, item])
          }
          return Object.fromEntries([...rest, ...groups])
        })
        .pipe(
          z.object({
            QueryStringParameters: z
              .record(z.string(), StringSchema)
              .exactOptional()
              .openapi({
                param: {
                  name: 'QueryStringParameters',
                  in: 'query',
                  required: false,
                  description:
                    'Attach query string parameters to the end of the URI (for example, /v1/examplePath?exampleParam=exampleValue).',
                  schema: {
                    type: 'object',
                    additionalProperties: { $ref: '#/components/schemas/__string' },
                  },
                },
              }),
          }),
        ),
      body: {
        content: {
          'application/json': {
            schema: z
              .object({
                Body: z.string().exactOptional().openapi({ description: 'The request body.' }),
                'x-amzn-dataexchange-header-': z
                  .record(z.string(), StringSchema)
                  .exactOptional()
                  .openapi({
                    description:
                      'Any header value prefixed with x-amzn-dataexchange-header- will have that stripped before sending the Asset API request. Use this when you want to override a header that AWS Data Exchange uses. Alternatively, you can use the header without a prefix to the HTTP request.',
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
        content: { 'application/json': { schema: SendApiAssetResponseSchema } },
      },
      480: {
        description: 'ResourceNotFoundException',
        content: { 'application/json': { schema: ResourceNotFoundExceptionSchema } },
      },
      481: {
        description: 'ThrottlingException',
        content: { 'application/json': { schema: ThrottlingExceptionSchema } },
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
        description: 'InternalServerException',
        content: { 'application/json': { schema: InternalServerExceptionSchema } },
      },
    },
  })

export const deleteTagsResourceArnTagKeysRoute = createRoute({
  method: 'delete',
  path: '/tags/{ResourceArn}#tagKeys',
  description: 'This operation removes one or more tags from a resource.',
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
            description: 'An Amazon Resource Name (ARN) that uniquely identifies an AWS resource.',
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
            description: 'The key tags.',
            schema: { type: 'array', items: { $ref: '#/components/schemas/__string' } },
          },
        }),
    }),
  },
  responses: { 204: { description: 'Success' } },
})
