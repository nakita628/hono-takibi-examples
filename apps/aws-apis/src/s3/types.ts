type AbortMultipartUploadOutput = { [x: string]: unknown }
type CompleteMultipartUploadOutput = {
  Location?: {} | undefined
  Bucket?: {} | undefined
  Key?: {} | undefined
  ETag?: {} | undefined
  ChecksumCRC32?: {} | undefined
  ChecksumCRC32C?: {} | undefined
  ChecksumSHA1?: {} | undefined
  ChecksumSHA256?: {} | undefined
}
type ListPartsOutput = {
  Bucket?: {} | undefined
  Key?: {} | undefined
  UploadId?: {} | undefined
  PartNumberMarker?: {} | undefined
  NextPartNumberMarker?: {} | undefined
  MaxParts?: {} | undefined
  IsTruncated?: {} | undefined
  Parts?: {} | undefined
  Initiator?: { ID?: {} | undefined; DisplayName?: {} | undefined } | undefined
  Owner?: { DisplayName?: {} | undefined; ID?: {} | undefined } | undefined
  StorageClass?: {} | undefined
  ChecksumAlgorithm?: {} | undefined
}
type MetadataValue = string
type CopyObjectOutput = {
  CopyObjectResult?:
    | {
        ETag?: {} | undefined
        LastModified?: {} | undefined
        ChecksumCRC32?: {} | undefined
        ChecksumCRC32C?: {} | undefined
        ChecksumSHA1?: {} | undefined
        ChecksumSHA256?: {} | undefined
      }
    | undefined
}
type CreateBucketOutput = { [x: string]: unknown }
type OptionalObjectAttributes = 'RestoreStatus'
type ListObjectsOutput = {
  IsTruncated?: {} | undefined
  Marker?: {} | undefined
  NextMarker?: {} | undefined
  Contents?: {} | undefined
  Name?: {} | undefined
  Prefix?: {} | undefined
  Delimiter?: {} | undefined
  MaxKeys?: {} | undefined
  CommonPrefixes?: {} | undefined
  EncodingType?: {} | undefined
}
type CreateMultipartUploadOutput = {
  Bucket?: {} | undefined
  Key?: {} | undefined
  UploadId?: {} | undefined
}
type GetBucketAnalyticsConfigurationOutput = {
  AnalyticsConfiguration?:
    | {
        Id: {}
        Filter?:
          | {
              Prefix?: {} | undefined
              Tag?: { Key: {}; Value: {} } | undefined
              And?: { Prefix?: {} | undefined; Tags?: {} | undefined } | undefined
            }
          | undefined
        StorageClassAnalysis: {
          DataExport?:
            | {
                OutputSchemaVersion: {}
                Destination: {
                  S3BucketDestination: {
                    Format: {}
                    BucketAccountId?: {} | undefined
                    Bucket: {}
                    Prefix?: {} | undefined
                  }
                }
              }
            | undefined
        }
      }
    | undefined
}
type GetBucketCorsOutput = { CORSRules?: {} | undefined }
type ServerSideEncryptionConfiguration = { Rules: {} }
type GetBucketEncryptionOutput = {
  ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined
}
type Tag = { Key: {}; Value: {} }
type GetBucketIntelligentTieringConfigurationOutput = {
  IntelligentTieringConfiguration?:
    | {
        Id: {}
        Filter?:
          | {
              Prefix?: {} | undefined
              Tag?: Tag | undefined
              And?: { Prefix?: {} | undefined; Tags?: {} | undefined } | undefined
            }
          | undefined
        Status: {}
        Tierings: {}
      }
    | undefined
}
type GetBucketInventoryConfigurationOutput = {
  InventoryConfiguration?:
    | {
        Destination: {
          S3BucketDestination: {
            AccountId?: {} | undefined
            Bucket: {}
            Format: {}
            Prefix?: {} | undefined
            Encryption?: { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined } | undefined
          }
        }
        IsEnabled: {}
        Filter?: { Prefix: {} } | undefined
        Id: {}
        IncludedObjectVersions: {}
        OptionalFields?: {} | undefined
        Schedule: { Frequency: {} }
      }
    | undefined
}
type GetBucketLifecycleConfigurationOutput = { Rules?: {} | undefined }
type GetBucketMetricsConfigurationOutput = {
  MetricsConfiguration?:
    | {
        Id: {}
        Filter?:
          | {
              Prefix?: {} | undefined
              Tag?: { Key: {}; Value: {} } | undefined
              AccessPointArn?: {} | undefined
              And?:
                | {
                    Prefix?: {} | undefined
                    Tags?: {} | undefined
                    AccessPointArn?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
}
type GetBucketOwnershipControlsOutput = { OwnershipControls?: { Rules: {} } | undefined }
type GetBucketPolicyOutput = { Policy?: {} | undefined }
type ReplicationConfiguration = { Role: {}; Rules: {} }
type GetBucketReplicationOutput = {
  ReplicationConfiguration?: ReplicationConfiguration | undefined
}
type GetBucketTaggingOutput = { TagSet: {} }
type GetBucketWebsiteOutput = {
  RedirectAllRequestsTo?: { HostName: {}; Protocol?: {} | undefined } | undefined
  IndexDocument?: { Suffix: {} } | undefined
  ErrorDocument?: { Key: {} } | undefined
  RoutingRules?: {} | undefined
}
type DeleteObjectOutput = { [x: string]: unknown }
type GetObjectOutput = { Body?: {} | undefined; Metadata?: {} | undefined }
type HeadObjectOutput = { Metadata?: {} | undefined }
type PutObjectOutput = { [x: string]: unknown }
type DeleteObjectTaggingOutput = { [x: string]: unknown }
type GetObjectTaggingOutput = { TagSet: {} }
type PutObjectTaggingOutput = { [x: string]: unknown }
type DeleteObjectsOutput = { Deleted?: {} | undefined; Errors?: {} | undefined }
type GetPublicAccessBlockOutput = {
  PublicAccessBlockConfiguration?:
    | {
        BlockPublicAcls?: {} | undefined
        IgnorePublicAcls?: {} | undefined
        BlockPublicPolicy?: {} | undefined
        RestrictPublicBuckets?: {} | undefined
      }
    | undefined
}
type GetBucketAccelerateConfigurationOutput = { Status?: {} | undefined }
type GetBucketAclOutput = {
  Owner?: { DisplayName?: {} | undefined; ID?: {} | undefined } | undefined
  Grants?: {} | undefined
}
type GetBucketLifecycleOutput = { Rules?: {} | undefined }
type GetBucketLocationOutput = { LocationConstraint?: {} | undefined }
type LoggingEnabled = { TargetBucket: {}; TargetGrants?: {} | undefined; TargetPrefix: {} }
type GetBucketLoggingOutput = { LoggingEnabled?: LoggingEnabled | undefined }
type NotificationConfiguration = {
  TopicConfigurations?: {} | undefined
  QueueConfigurations?: {} | undefined
  LambdaFunctionConfigurations?: {} | undefined
  EventBridgeConfiguration?: {} | undefined
}
type NotificationId = string
type NotificationConfigurationDeprecated = {
  TopicConfiguration?:
    | {
        Id?: NotificationId | undefined
        Events?: {} | undefined
        Event?: {} | undefined
        Topic?: {} | undefined
      }
    | undefined
  QueueConfiguration?:
    | {
        Id?: NotificationId | undefined
        Event?: {} | undefined
        Events?: {} | undefined
        Queue?: {} | undefined
      }
    | undefined
  CloudFunctionConfiguration?:
    | {
        Id?: NotificationId | undefined
        Event?: {} | undefined
        Events?: {} | undefined
        CloudFunction?: {} | undefined
        InvocationRole?: {} | undefined
      }
    | undefined
}
type GetBucketPolicyStatusOutput = { PolicyStatus?: { IsPublic?: {} | undefined } | undefined }
type GetBucketRequestPaymentOutput = { Payer?: {} | undefined }
type GetBucketVersioningOutput = { Status?: {} | undefined; MFADelete?: {} | undefined }
type GetObjectAclOutput = {
  Owner?: { DisplayName?: {} | undefined; ID?: {} | undefined } | undefined
  Grants?: {} | undefined
}
type PutObjectAclOutput = { [x: string]: unknown }
type ObjectAttributes = 'ETag' | 'Checksum' | 'ObjectParts' | 'StorageClass' | 'ObjectSize'
type GetObjectAttributesOutput = {
  ETag?: {} | undefined
  Checksum?:
    | {
        ChecksumCRC32?: {} | undefined
        ChecksumCRC32C?: {} | undefined
        ChecksumSHA1?: {} | undefined
        ChecksumSHA256?: {} | undefined
      }
    | undefined
  ObjectParts?:
    | {
        TotalPartsCount?: {} | undefined
        PartNumberMarker?: {} | undefined
        NextPartNumberMarker?: {} | undefined
        MaxParts?: {} | undefined
        IsTruncated?: {} | undefined
        Parts?: {} | undefined
      }
    | undefined
  StorageClass?: {} | undefined
  ObjectSize?: {} | undefined
}
type GetObjectLegalHoldOutput = { LegalHold?: { Status?: {} | undefined } | undefined }
type PutObjectLegalHoldOutput = { [x: string]: unknown }
type GetObjectLockConfigurationOutput = {
  ObjectLockConfiguration?:
    | {
        ObjectLockEnabled?: {} | undefined
        Rule?:
          | {
              DefaultRetention?:
                | { Mode?: {} | undefined; Days?: {} | undefined; Years?: {} | undefined }
                | undefined
            }
          | undefined
      }
    | undefined
}
type PutObjectLockConfigurationOutput = { [x: string]: unknown }
type GetObjectRetentionOutput = {
  Retention?: { Mode?: {} | undefined; RetainUntilDate?: {} | undefined } | undefined
}
type PutObjectRetentionOutput = { [x: string]: unknown }
type GetObjectTorrentOutput = { Body?: {} | undefined }
type ListBucketAnalyticsConfigurationsOutput = {
  IsTruncated?: {} | undefined
  ContinuationToken?: {} | undefined
  NextContinuationToken?: {} | undefined
  AnalyticsConfigurationList?: {} | undefined
}
type ListBucketIntelligentTieringConfigurationsOutput = {
  IsTruncated?: {} | undefined
  ContinuationToken?: {} | undefined
  NextContinuationToken?: {} | undefined
  IntelligentTieringConfigurationList?: {} | undefined
}
type ListBucketInventoryConfigurationsOutput = {
  ContinuationToken?: {} | undefined
  InventoryConfigurationList?: {} | undefined
  IsTruncated?: {} | undefined
  NextContinuationToken?: {} | undefined
}
type ListBucketMetricsConfigurationsOutput = {
  IsTruncated?: {} | undefined
  ContinuationToken?: {} | undefined
  NextContinuationToken?: {} | undefined
  MetricsConfigurationList?: {} | undefined
}
type ListBucketsOutput = {
  Buckets?: {} | undefined
  Owner?: { DisplayName?: {} | undefined; ID?: {} | undefined } | undefined
}
type ListMultipartUploadsOutput = {
  Bucket?: {} | undefined
  KeyMarker?: {} | undefined
  UploadIdMarker?: {} | undefined
  NextKeyMarker?: {} | undefined
  Prefix?: {} | undefined
  Delimiter?: {} | undefined
  NextUploadIdMarker?: {} | undefined
  MaxUploads?: {} | undefined
  IsTruncated?: {} | undefined
  Uploads?: {} | undefined
  CommonPrefixes?: {} | undefined
  EncodingType?: {} | undefined
}
type ListObjectVersionsOutput = {
  IsTruncated?: {} | undefined
  KeyMarker?: {} | undefined
  VersionIdMarker?: {} | undefined
  NextKeyMarker?: {} | undefined
  NextVersionIdMarker?: {} | undefined
  Versions?: {} | undefined
  DeleteMarkers?: {} | undefined
  Name?: {} | undefined
  Prefix?: {} | undefined
  Delimiter?: {} | undefined
  MaxKeys?: {} | undefined
  CommonPrefixes?: {} | undefined
  EncodingType?: {} | undefined
}
type ListObjectsV2Output = {
  IsTruncated?: {} | undefined
  Contents?: {} | undefined
  Name?: {} | undefined
  Prefix?: {} | undefined
  Delimiter?: {} | undefined
  MaxKeys?: {} | undefined
  CommonPrefixes?: {} | undefined
  EncodingType?: {} | undefined
  KeyCount?: {} | undefined
  ContinuationToken?: {} | undefined
  NextContinuationToken?: {} | undefined
  StartAfter?: {} | undefined
}
type Encryption = { EncryptionType: {}; KMSKeyId?: {} | undefined; KMSContext?: {} | undefined }
type RestoreObjectOutput = { [x: string]: unknown }
type SelectObjectContentOutput = {
  Payload?:
    | {
        Records?: { Payload?: {} | undefined } | undefined
        Stats?:
          | {
              Details?:
                | {
                    BytesScanned?: {} | undefined
                    BytesProcessed?: {} | undefined
                    BytesReturned?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Progress?:
          | {
              Details?:
                | {
                    BytesScanned?: {} | undefined
                    BytesProcessed?: {} | undefined
                    BytesReturned?: {} | undefined
                  }
                | undefined
            }
          | undefined
        Cont?: {} | undefined
        End?: {} | undefined
      }
    | undefined
}
type UploadPartOutput = { [x: string]: unknown }
type UploadPartCopyOutput = {
  CopyPartResult?:
    | {
        ETag?: {} | undefined
        LastModified?: {} | undefined
        ChecksumCRC32?: {} | undefined
        ChecksumCRC32C?: {} | undefined
        ChecksumSHA1?: {} | undefined
        ChecksumSHA256?: {} | undefined
      }
    | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:Bucket/:Key#uploadId': {
      $delete: {
        input: { param: { Bucket: string; Key: string } } & { query: { uploadId: string } } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: AbortMultipartUploadOutput
        outputFormat: 'text'
        status: 204
      }
      $post: {
        input: { param: { Bucket: string; Key: string } } & { query: { uploadId: string } } & {
          header: {
            'x-amz-checksum-crc32'?: string | undefined
            'x-amz-checksum-crc32c'?: string | undefined
            'x-amz-checksum-sha1'?: string | undefined
            'x-amz-checksum-sha256'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { CompleteMultipartUpload?: { Parts?: {} | undefined } | undefined } }
        output: CompleteMultipartUploadOutput
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { Bucket: string; Key: string } } & {
          query: {
            'max-parts'?: number | undefined
            'part-number-marker'?: number | undefined
            uploadId: string
            MaxParts?: string | undefined
            PartNumberMarker?: string | undefined
          }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: ListPartsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#x-amz-copy-source': {
      $put: {
        input: { param: { Bucket: string; Key: string } } & {
          header: {
            'x-amz-acl'?:
              | 'private'
              | 'public-read'
              | 'public-read-write'
              | 'authenticated-read'
              | 'aws-exec-read'
              | 'bucket-owner-read'
              | 'bucket-owner-full-control'
              | undefined
            'Cache-Control'?: string | undefined
            'x-amz-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'Content-Disposition'?: string | undefined
            'Content-Encoding'?: string | undefined
            'Content-Language'?: string | undefined
            'Content-Type'?: string | undefined
            'x-amz-copy-source': string
            'x-amz-copy-source-if-match'?: string | undefined
            'x-amz-copy-source-if-modified-since'?: string | undefined
            'x-amz-copy-source-if-none-match'?: string | undefined
            'x-amz-copy-source-if-unmodified-since'?: string | undefined
            Expires?: string | undefined
            'x-amz-grant-full-control'?: string | undefined
            'x-amz-grant-read'?: string | undefined
            'x-amz-grant-read-acp'?: string | undefined
            'x-amz-grant-write-acp'?: string | undefined
            'x-amz-metadata-directive'?: 'COPY' | 'REPLACE' | undefined
            'x-amz-tagging-directive'?: 'COPY' | 'REPLACE' | undefined
            'x-amz-server-side-encryption'?: 'AES256' | 'aws:kms' | 'aws:kms:dsse' | undefined
            'x-amz-storage-class'?:
              | 'STANDARD'
              | 'REDUCED_REDUNDANCY'
              | 'STANDARD_IA'
              | 'ONEZONE_IA'
              | 'INTELLIGENT_TIERING'
              | 'GLACIER'
              | 'DEEP_ARCHIVE'
              | 'OUTPOSTS'
              | 'GLACIER_IR'
              | 'SNOW'
              | undefined
            'x-amz-website-redirect-location'?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-server-side-encryption-aws-kms-key-id'?: string | undefined
            'x-amz-server-side-encryption-context'?: string | undefined
            'x-amz-server-side-encryption-bucket-key-enabled'?: boolean | undefined
            'x-amz-copy-source-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-copy-source-server-side-encryption-customer-key'?: string | undefined
            'x-amz-copy-source-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-tagging'?: string | undefined
            'x-amz-object-lock-mode'?: 'GOVERNANCE' | 'COMPLIANCE' | undefined
            'x-amz-object-lock-retain-until-date'?: string | undefined
            'x-amz-object-lock-legal-hold'?: 'ON' | 'OFF' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-source-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { 'x-amz-meta-'?: { [x: string]: MetadataValue } | undefined } }
        output: CopyObjectOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket': {
      $put: {
        input: { param: { Bucket: string } } & {
          header: {
            'x-amz-acl'?:
              | 'private'
              | 'public-read'
              | 'public-read-write'
              | 'authenticated-read'
              | undefined
            'x-amz-grant-full-control'?: string | undefined
            'x-amz-grant-read'?: string | undefined
            'x-amz-grant-read-acp'?: string | undefined
            'x-amz-grant-write'?: string | undefined
            'x-amz-grant-write-acp'?: string | undefined
            'x-amz-bucket-object-lock-enabled'?: boolean | undefined
            'x-amz-object-ownership'?:
              | 'BucketOwnerPreferred'
              | 'ObjectWriter'
              | 'BucketOwnerEnforced'
              | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: { CreateBucketConfiguration?: { LocationConstraint?: {} | undefined } | undefined }
        }
        output: CreateBucketOutput
        outputFormat: 'text'
        status: 200
      }
      $delete: {
        input: { param: { Bucket: string } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $head: {
        input: { param: { Bucket: string } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { Bucket: string } } & {
          query: {
            delimiter?: string | undefined
            'encoding-type'?: 'url' | undefined
            marker?: string | undefined
            'max-keys'?: number | undefined
            prefix?: string | undefined
            MaxKeys?: string | undefined
            Marker?: string | undefined
          }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-optional-object-attributes'?: OptionalObjectAttributes[] | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: ListObjectsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#uploads': {
      $post: {
        input: { param: { Bucket: string; Key: string } } & { query: { uploads: true } } & {
          header: {
            'x-amz-acl'?:
              | 'private'
              | 'public-read'
              | 'public-read-write'
              | 'authenticated-read'
              | 'aws-exec-read'
              | 'bucket-owner-read'
              | 'bucket-owner-full-control'
              | undefined
            'Cache-Control'?: string | undefined
            'Content-Disposition'?: string | undefined
            'Content-Encoding'?: string | undefined
            'Content-Language'?: string | undefined
            'Content-Type'?: string | undefined
            Expires?: string | undefined
            'x-amz-grant-full-control'?: string | undefined
            'x-amz-grant-read'?: string | undefined
            'x-amz-grant-read-acp'?: string | undefined
            'x-amz-grant-write-acp'?: string | undefined
            'x-amz-server-side-encryption'?: 'AES256' | 'aws:kms' | 'aws:kms:dsse' | undefined
            'x-amz-storage-class'?:
              | 'STANDARD'
              | 'REDUCED_REDUNDANCY'
              | 'STANDARD_IA'
              | 'ONEZONE_IA'
              | 'INTELLIGENT_TIERING'
              | 'GLACIER'
              | 'DEEP_ARCHIVE'
              | 'OUTPOSTS'
              | 'GLACIER_IR'
              | 'SNOW'
              | undefined
            'x-amz-website-redirect-location'?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-server-side-encryption-aws-kms-key-id'?: string | undefined
            'x-amz-server-side-encryption-context'?: string | undefined
            'x-amz-server-side-encryption-bucket-key-enabled'?: boolean | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-tagging'?: string | undefined
            'x-amz-object-lock-mode'?: 'GOVERNANCE' | 'COMPLIANCE' | undefined
            'x-amz-object-lock-retain-until-date'?: string | undefined
            'x-amz-object-lock-legal-hold'?: 'ON' | 'OFF' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { 'x-amz-meta-'?: { [x: string]: MetadataValue } | undefined } }
        output: CreateMultipartUploadOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#analytics&id': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { id: string; analytics: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { id: string; analytics: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketAnalyticsConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { id: string; analytics: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            AnalyticsConfiguration: {
              Id?: {} | undefined
              Filter?:
                | {
                    Prefix?: {} | undefined
                    Tag?: { Key: {}; Value: {} } | undefined
                    And?: { Prefix?: {} | undefined; Tags?: {} | undefined } | undefined
                  }
                | undefined
              StorageClassAnalysis?:
                | {
                    DataExport?:
                      | {
                          OutputSchemaVersion: {}
                          Destination: {
                            S3BucketDestination: {
                              Format: {}
                              BucketAccountId?: {} | undefined
                              Bucket: {}
                              Prefix?: {} | undefined
                            }
                          }
                        }
                      | undefined
                  }
                | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#cors': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { cors: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { cors: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketCorsOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { cors: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { CORSConfiguration: { CORSRules?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#encryption': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { encryption: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { encryption: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketEncryptionOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { encryption: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { ServerSideEncryptionConfiguration: { Rules?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#intelligent-tiering&id': {
      $delete: {
        input: { param: { Bucket: string } } & {
          query: { id: string; 'intelligent-tiering': true }
        } & { header: { 'x-amz-security-token'?: string | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & {
          query: { id: string; 'intelligent-tiering': true }
        } & { header: { 'x-amz-security-token'?: string | undefined } }
        output: GetBucketIntelligentTieringConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & {
          query: { id: string; 'intelligent-tiering': true }
        } & { header: { 'x-amz-security-token'?: string | undefined } } & {
          json: {
            IntelligentTieringConfiguration: {
              Id?: {} | undefined
              Filter?:
                | {
                    Prefix?: {} | undefined
                    Tag?: Tag | undefined
                    And?: { Prefix?: {} | undefined; Tags?: {} | undefined } | undefined
                  }
                | undefined
              Status?: {} | undefined
              Tierings?: {} | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#inventory&id': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { id: string; inventory: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { id: string; inventory: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketInventoryConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { id: string; inventory: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            InventoryConfiguration: {
              Destination?:
                | {
                    S3BucketDestination: {
                      AccountId?: {} | undefined
                      Bucket: {}
                      Format: {}
                      Prefix?: {} | undefined
                      Encryption?:
                        | { SSES3?: {} | undefined; SSEKMS?: { KeyId: {} } | undefined }
                        | undefined
                    }
                  }
                | undefined
              IsEnabled?: {} | undefined
              Filter?: { Prefix: {} } | undefined
              Id?: {} | undefined
              IncludedObjectVersions?: {} | undefined
              OptionalFields?: {} | undefined
              Schedule?: { Frequency: {} } | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#lifecycle': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { lifecycle: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { lifecycle: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketLifecycleConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { lifecycle: true } } & {
          header: {
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { LifecycleConfiguration?: { Rules?: {} | undefined } | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#metrics&id': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { id: string; metrics: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { id: string; metrics: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketMetricsConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { id: string; metrics: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            MetricsConfiguration: {
              Id?: {} | undefined
              Filter?:
                | {
                    Prefix?: {} | undefined
                    Tag?: { Key: {}; Value: {} } | undefined
                    AccessPointArn?: {} | undefined
                    And?:
                      | {
                          Prefix?: {} | undefined
                          Tags?: {} | undefined
                          AccessPointArn?: {} | undefined
                        }
                      | undefined
                  }
                | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#ownershipControls': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { ownershipControls: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { ownershipControls: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketOwnershipControlsOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { ownershipControls: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { OwnershipControls: { Rules?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#policy': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { policy: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { policy: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketPolicyOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { policy: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-confirm-remove-self-bucket-access'?: boolean | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { Policy: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#replication': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { replication: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { replication: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketReplicationOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { replication: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-bucket-object-lock-token'?: string | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: { ReplicationConfiguration: { Role?: {} | undefined; Rules?: {} | undefined } }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#tagging': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { tagging: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { tagging: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketTaggingOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { tagging: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { Tagging: { TagSet?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#website': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { website: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { website: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketWebsiteOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { website: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            WebsiteConfiguration: {
              ErrorDocument?: { Key: {} } | undefined
              IndexDocument?: { Suffix: {} } | undefined
              RedirectAllRequestsTo?: { HostName: {}; Protocol?: {} | undefined } | undefined
              RoutingRules?: {} | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key': {
      $delete: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined }
        } & {
          header: {
            'x-amz-mfa'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-bypass-governance-retention'?: boolean | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: DeleteObjectOutput
        outputFormat: 'text'
        status: 204
      }
      $get: {
        input: { param: { Bucket: string; Key: string } } & {
          query: {
            'response-cache-control'?: string | undefined
            'response-content-disposition'?: string | undefined
            'response-content-encoding'?: string | undefined
            'response-content-language'?: string | undefined
            'response-content-type'?: string | undefined
            'response-expires'?: string | undefined
            versionId?: string | undefined
            partNumber?: number | undefined
          }
        } & {
          header: {
            'If-Match'?: string | undefined
            'If-Modified-Since'?: string | undefined
            'If-None-Match'?: string | undefined
            'If-Unmodified-Since'?: string | undefined
            Range?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-checksum-mode'?: 'ENABLED' | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetObjectOutput
        outputFormat: 'text'
        status: 200
      }
      $head: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; partNumber?: number | undefined }
        } & {
          header: {
            'If-Match'?: string | undefined
            'If-Modified-Since'?: string | undefined
            'If-None-Match'?: string | undefined
            'If-Unmodified-Since'?: string | undefined
            Range?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-checksum-mode'?: 'ENABLED' | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: HeadObjectOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string; Key: string } } & {
          header: {
            'x-amz-acl'?:
              | 'private'
              | 'public-read'
              | 'public-read-write'
              | 'authenticated-read'
              | 'aws-exec-read'
              | 'bucket-owner-read'
              | 'bucket-owner-full-control'
              | undefined
            'Cache-Control'?: string | undefined
            'Content-Disposition'?: string | undefined
            'Content-Encoding'?: string | undefined
            'Content-Language'?: string | undefined
            'Content-Length'?: number | undefined
            'Content-MD5'?: string | undefined
            'Content-Type'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-checksum-crc32'?: string | undefined
            'x-amz-checksum-crc32c'?: string | undefined
            'x-amz-checksum-sha1'?: string | undefined
            'x-amz-checksum-sha256'?: string | undefined
            Expires?: string | undefined
            'x-amz-grant-full-control'?: string | undefined
            'x-amz-grant-read'?: string | undefined
            'x-amz-grant-read-acp'?: string | undefined
            'x-amz-grant-write-acp'?: string | undefined
            'x-amz-server-side-encryption'?: 'AES256' | 'aws:kms' | 'aws:kms:dsse' | undefined
            'x-amz-storage-class'?:
              | 'STANDARD'
              | 'REDUCED_REDUNDANCY'
              | 'STANDARD_IA'
              | 'ONEZONE_IA'
              | 'INTELLIGENT_TIERING'
              | 'GLACIER'
              | 'DEEP_ARCHIVE'
              | 'OUTPOSTS'
              | 'GLACIER_IR'
              | 'SNOW'
              | undefined
            'x-amz-website-redirect-location'?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-server-side-encryption-aws-kms-key-id'?: string | undefined
            'x-amz-server-side-encryption-context'?: string | undefined
            'x-amz-server-side-encryption-bucket-key-enabled'?: boolean | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-tagging'?: string | undefined
            'x-amz-object-lock-mode'?: 'GOVERNANCE' | 'COMPLIANCE' | undefined
            'x-amz-object-lock-retain-until-date'?: string | undefined
            'x-amz-object-lock-legal-hold'?: 'ON' | 'OFF' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            Body?: string | undefined
            'x-amz-meta-'?: { [x: string]: MetadataValue } | undefined
          }
        }
        output: PutObjectOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#tagging': {
      $delete: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; tagging: true }
        } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: DeleteObjectTaggingOutput
        outputFormat: 'text'
        status: 204
      }
      $get: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; tagging: true }
        } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetObjectTaggingOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; tagging: true }
        } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { Tagging: { TagSet?: {} | undefined } } }
        output: PutObjectTaggingOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#delete': {
      $post: {
        input: { param: { Bucket: string } } & { query: { delete: true } } & {
          header: {
            'x-amz-mfa'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-bypass-governance-retention'?: boolean | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { Delete: { Objects?: {} | undefined; Quiet?: {} | undefined } } }
        output: DeleteObjectsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#publicAccessBlock': {
      $delete: {
        input: { param: { Bucket: string } } & { query: { publicAccessBlock: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { Bucket: string } } & { query: { publicAccessBlock: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetPublicAccessBlockOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { publicAccessBlock: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            PublicAccessBlockConfiguration: {
              BlockPublicAcls?: {} | undefined
              IgnorePublicAcls?: {} | undefined
              BlockPublicPolicy?: {} | undefined
              RestrictPublicBuckets?: {} | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#accelerate': {
      $get: {
        input: { param: { Bucket: string } } & { query: { accelerate: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketAccelerateConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { accelerate: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { AccelerateConfiguration: { Status?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#acl': {
      $get: {
        input: { param: { Bucket: string } } & { query: { acl: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketAclOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { acl: true } } & {
          header: {
            'x-amz-acl'?:
              | 'private'
              | 'public-read'
              | 'public-read-write'
              | 'authenticated-read'
              | undefined
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-grant-full-control'?: string | undefined
            'x-amz-grant-read'?: string | undefined
            'x-amz-grant-read-acp'?: string | undefined
            'x-amz-grant-write'?: string | undefined
            'x-amz-grant-write-acp'?: string | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            AccessControlPolicy?:
              | {
                  Grants?: {} | undefined
                  Owner?: { DisplayName?: {} | undefined; ID?: {} | undefined } | undefined
                }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#lifecycle&deprecated!': {
      $get: {
        input: { param: { Bucket: string } } & { query: { lifecycle: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketLifecycleOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { lifecycle: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { LifecycleConfiguration?: { Rules?: {} | undefined } | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#location': {
      $get: {
        input: { param: { Bucket: string } } & { query: { location: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketLocationOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#logging': {
      $get: {
        input: { param: { Bucket: string } } & { query: { logging: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketLoggingOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { logging: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { BucketLoggingStatus: { LoggingEnabled?: LoggingEnabled | undefined } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#notification': {
      $get: {
        input: { param: { Bucket: string } } & { query: { notification: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: NotificationConfiguration
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { notification: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-skip-destination-validation'?: boolean | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            NotificationConfiguration: {
              TopicConfigurations?: {} | undefined
              QueueConfigurations?: {} | undefined
              LambdaFunctionConfigurations?: {} | undefined
              EventBridgeConfiguration?: {} | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#notification&deprecated!': {
      $get: {
        input: { param: { Bucket: string } } & { query: { notification: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: NotificationConfigurationDeprecated
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { notification: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            NotificationConfiguration: {
              TopicConfiguration?:
                | {
                    Id?: NotificationId | undefined
                    Events?: {} | undefined
                    Event?: {} | undefined
                    Topic?: {} | undefined
                  }
                | undefined
              QueueConfiguration?:
                | {
                    Id?: NotificationId | undefined
                    Event?: {} | undefined
                    Events?: {} | undefined
                    Queue?: {} | undefined
                  }
                | undefined
              CloudFunctionConfiguration?:
                | {
                    Id?: NotificationId | undefined
                    Event?: {} | undefined
                    Events?: {} | undefined
                    CloudFunction?: {} | undefined
                    InvocationRole?: {} | undefined
                  }
                | undefined
            }
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#policyStatus': {
      $get: {
        input: { param: { Bucket: string } } & { query: { policyStatus: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketPolicyStatusOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#requestPayment': {
      $get: {
        input: { param: { Bucket: string } } & { query: { requestPayment: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketRequestPaymentOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { requestPayment: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { RequestPaymentConfiguration: { Payer?: {} | undefined } } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket#versioning': {
      $get: {
        input: { param: { Bucket: string } } & { query: { versioning: true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetBucketVersioningOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { versioning: true } } & {
          header: {
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-mfa'?: string | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: { VersioningConfiguration: { MFADelete?: {} | undefined; Status?: {} | undefined } }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#acl': {
      $get: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; acl: true }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetObjectAclOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; acl: true }
        } & {
          header: {
            'x-amz-acl'?:
              | 'private'
              | 'public-read'
              | 'public-read-write'
              | 'authenticated-read'
              | 'aws-exec-read'
              | 'bucket-owner-read'
              | 'bucket-owner-full-control'
              | undefined
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-grant-full-control'?: string | undefined
            'x-amz-grant-read'?: string | undefined
            'x-amz-grant-read-acp'?: string | undefined
            'x-amz-grant-write'?: string | undefined
            'x-amz-grant-write-acp'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            AccessControlPolicy?:
              | {
                  Grants?: {} | undefined
                  Owner?: { DisplayName?: {} | undefined; ID?: {} | undefined } | undefined
                }
              | undefined
          }
        }
        output: PutObjectAclOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#attributes&x-amz-object-attributes': {
      $get: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; attributes: true }
        } & {
          header: {
            'x-amz-max-parts'?: number | undefined
            'x-amz-part-number-marker'?: number | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-object-attributes': ObjectAttributes[]
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetObjectAttributesOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#legal-hold': {
      $get: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; 'legal-hold': true }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetObjectLegalHoldOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; 'legal-hold': true }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { LegalHold?: { Status?: {} | undefined } | undefined } }
        output: PutObjectLegalHoldOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#object-lock': {
      $get: {
        input: { param: { Bucket: string } } & { query: { 'object-lock': true } } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetObjectLockConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string } } & { query: { 'object-lock': true } } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-bucket-object-lock-token'?: string | undefined
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            ObjectLockConfiguration?:
              | {
                  ObjectLockEnabled?: {} | undefined
                  Rule?:
                    | {
                        DefaultRetention?:
                          | { Mode?: {} | undefined; Days?: {} | undefined; Years?: {} | undefined }
                          | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: PutObjectLockConfigurationOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#retention': {
      $get: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; retention: true }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetObjectRetentionOutput
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; retention: true }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-bypass-governance-retention'?: boolean | undefined
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            Retention?: { Mode?: {} | undefined; RetainUntilDate?: {} | undefined } | undefined
          }
        }
        output: PutObjectRetentionOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#torrent': {
      $get: {
        input: { param: { Bucket: string; Key: string } } & { query: { torrent: true } } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: GetObjectTorrentOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#analytics': {
      $get: {
        input: { param: { Bucket: string } } & {
          query: { 'continuation-token'?: string | undefined; analytics: true }
        } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: ListBucketAnalyticsConfigurationsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#intelligent-tiering': {
      $get: {
        input: { param: { Bucket: string } } & {
          query: { 'continuation-token'?: string | undefined; 'intelligent-tiering': true }
        } & { header: { 'x-amz-security-token'?: string | undefined } }
        output: ListBucketIntelligentTieringConfigurationsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#inventory': {
      $get: {
        input: { param: { Bucket: string } } & {
          query: { 'continuation-token'?: string | undefined; inventory: true }
        } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: ListBucketInventoryConfigurationsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#metrics': {
      $get: {
        input: { param: { Bucket: string } } & {
          query: { 'continuation-token'?: string | undefined; metrics: true }
        } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: ListBucketMetricsConfigurationsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/': {
      $get: {
        input: { header: { 'x-amz-security-token'?: string | undefined } }
        output: ListBucketsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#uploads': {
      $get: {
        input: { param: { Bucket: string } } & {
          query: {
            delimiter?: string | undefined
            'encoding-type'?: 'url' | undefined
            'key-marker'?: string | undefined
            'max-uploads'?: number | undefined
            prefix?: string | undefined
            'upload-id-marker'?: string | undefined
            MaxUploads?: string | undefined
            KeyMarker?: string | undefined
            UploadIdMarker?: string | undefined
            uploads: true
          }
        } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: ListMultipartUploadsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#versions': {
      $get: {
        input: { param: { Bucket: string } } & {
          query: {
            delimiter?: string | undefined
            'encoding-type'?: 'url' | undefined
            'key-marker'?: string | undefined
            'max-keys'?: number | undefined
            prefix?: string | undefined
            'version-id-marker'?: string | undefined
            MaxKeys?: string | undefined
            KeyMarker?: string | undefined
            VersionIdMarker?: string | undefined
            versions: true
          }
        } & {
          header: {
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-optional-object-attributes'?: OptionalObjectAttributes[] | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: ListObjectVersionsOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket#list-type=2': {
      $get: {
        input: { param: { Bucket: string } } & {
          query: {
            delimiter?: string | undefined
            'encoding-type'?: 'url' | undefined
            'max-keys'?: number | undefined
            prefix?: string | undefined
            'continuation-token'?: string | undefined
            'fetch-owner'?: boolean | undefined
            'start-after'?: string | undefined
            MaxKeys?: string | undefined
            ContinuationToken?: string | undefined
            'list-type': '2'
          }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-optional-object-attributes'?: OptionalObjectAttributes[] | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: ListObjectsV2Output
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#restore': {
      $post: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { versionId?: string | undefined; restore: true }
        } & {
          header: {
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            RestoreRequest?:
              | {
                  Days?: {} | undefined
                  GlacierJobParameters?: { Tier: {} } | undefined
                  Type?: {} | undefined
                  Tier?: {} | undefined
                  Description?: {} | undefined
                  SelectParameters?:
                    | {
                        InputSerialization: {
                          CSV?:
                            | {
                                FileHeaderInfo?: {} | undefined
                                Comments?: {} | undefined
                                QuoteEscapeCharacter?: {} | undefined
                                RecordDelimiter?: {} | undefined
                                FieldDelimiter?: {} | undefined
                                QuoteCharacter?: {} | undefined
                                AllowQuotedRecordDelimiter?: {} | undefined
                              }
                            | undefined
                          CompressionType?: {} | undefined
                          JSON?: { Type?: {} | undefined } | undefined
                          Parquet?: {} | undefined
                        }
                        ExpressionType: {}
                        Expression: {}
                        OutputSerialization: {
                          CSV?:
                            | {
                                QuoteFields?: {} | undefined
                                QuoteEscapeCharacter?: {} | undefined
                                RecordDelimiter?: {} | undefined
                                FieldDelimiter?: {} | undefined
                                QuoteCharacter?: {} | undefined
                              }
                            | undefined
                          JSON?: { RecordDelimiter?: {} | undefined } | undefined
                        }
                      }
                    | undefined
                  OutputLocation?:
                    | {
                        S3?:
                          | {
                              BucketName: {}
                              Prefix: {}
                              Encryption?: Encryption | undefined
                              CannedACL?: {} | undefined
                              AccessControlList?: {} | undefined
                              Tagging?: { TagSet: {} } | undefined
                              UserMetadata?: {} | undefined
                              StorageClass?: {} | undefined
                            }
                          | undefined
                      }
                    | undefined
                }
              | undefined
          }
        }
        output: RestoreObjectOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#select&select-type=2': {
      $post: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { select: true; 'select-type': '2' }
        } & {
          header: {
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            Expression: string
            ExpressionType: 'SQL'
            RequestProgress?: { Enabled?: {} | undefined } | undefined
            InputSerialization: {
              CSV?:
                | {
                    FileHeaderInfo?: {} | undefined
                    Comments?: {} | undefined
                    QuoteEscapeCharacter?: {} | undefined
                    RecordDelimiter?: {} | undefined
                    FieldDelimiter?: {} | undefined
                    QuoteCharacter?: {} | undefined
                    AllowQuotedRecordDelimiter?: {} | undefined
                  }
                | undefined
              CompressionType?: {} | undefined
              JSON?: { Type?: {} | undefined } | undefined
              Parquet?: {} | undefined
            }
            OutputSerialization: {
              CSV?:
                | {
                    QuoteFields?: {} | undefined
                    QuoteEscapeCharacter?: {} | undefined
                    RecordDelimiter?: {} | undefined
                    FieldDelimiter?: {} | undefined
                    QuoteCharacter?: {} | undefined
                  }
                | undefined
              JSON?: { RecordDelimiter?: {} | undefined } | undefined
            }
            ScanRange?: { Start?: {} | undefined; End?: {} | undefined } | undefined
          }
        }
        output: SelectObjectContentOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#partNumber&uploadId': {
      $put: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { partNumber: number; uploadId: string }
        } & {
          header: {
            'Content-Length'?: number | undefined
            'Content-MD5'?: string | undefined
            'x-amz-sdk-checksum-algorithm'?: 'CRC32' | 'CRC32C' | 'SHA1' | 'SHA256' | undefined
            'x-amz-checksum-crc32'?: string | undefined
            'x-amz-checksum-crc32c'?: string | undefined
            'x-amz-checksum-sha1'?: string | undefined
            'x-amz-checksum-sha256'?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & { json: { Body?: string | undefined } }
        output: UploadPartOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/:Bucket/:Key#x-amz-copy-source&partNumber&uploadId': {
      $put: {
        input: { param: { Bucket: string; Key: string } } & {
          query: { partNumber: number; uploadId: string }
        } & {
          header: {
            'x-amz-copy-source': string
            'x-amz-copy-source-if-match'?: string | undefined
            'x-amz-copy-source-if-modified-since'?: string | undefined
            'x-amz-copy-source-if-none-match'?: string | undefined
            'x-amz-copy-source-if-unmodified-since'?: string | undefined
            'x-amz-copy-source-range'?: string | undefined
            'x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-server-side-encryption-customer-key'?: string | undefined
            'x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-copy-source-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-copy-source-server-side-encryption-customer-key'?: string | undefined
            'x-amz-copy-source-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-request-payer'?: 'requester' | undefined
            'x-amz-expected-bucket-owner'?: string | undefined
            'x-amz-source-expected-bucket-owner'?: string | undefined
            'x-amz-security-token'?: string | undefined
          }
        }
        output: UploadPartCopyOutput
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/WriteGetObjectResponse#x-amz-request-route&x-amz-request-token': {
      $post: {
        input: {
          header: {
            'x-amz-request-route': string
            'x-amz-request-token': string
            'x-amz-fwd-status'?: number | undefined
            'x-amz-fwd-error-code'?: string | undefined
            'x-amz-fwd-error-message'?: string | undefined
            'x-amz-fwd-header-accept-ranges'?: string | undefined
            'x-amz-fwd-header-Cache-Control'?: string | undefined
            'x-amz-fwd-header-Content-Disposition'?: string | undefined
            'x-amz-fwd-header-Content-Encoding'?: string | undefined
            'x-amz-fwd-header-Content-Language'?: string | undefined
            'Content-Length'?: number | undefined
            'x-amz-fwd-header-Content-Range'?: string | undefined
            'x-amz-fwd-header-Content-Type'?: string | undefined
            'x-amz-fwd-header-x-amz-checksum-crc32'?: string | undefined
            'x-amz-fwd-header-x-amz-checksum-crc32c'?: string | undefined
            'x-amz-fwd-header-x-amz-checksum-sha1'?: string | undefined
            'x-amz-fwd-header-x-amz-checksum-sha256'?: string | undefined
            'x-amz-fwd-header-x-amz-delete-marker'?: boolean | undefined
            'x-amz-fwd-header-ETag'?: string | undefined
            'x-amz-fwd-header-Expires'?: string | undefined
            'x-amz-fwd-header-x-amz-expiration'?: string | undefined
            'x-amz-fwd-header-Last-Modified'?: string | undefined
            'x-amz-fwd-header-x-amz-missing-meta'?: number | undefined
            'x-amz-fwd-header-x-amz-object-lock-mode'?: 'GOVERNANCE' | 'COMPLIANCE' | undefined
            'x-amz-fwd-header-x-amz-object-lock-legal-hold'?: 'ON' | 'OFF' | undefined
            'x-amz-fwd-header-x-amz-object-lock-retain-until-date'?: string | undefined
            'x-amz-fwd-header-x-amz-mp-parts-count'?: number | undefined
            'x-amz-fwd-header-x-amz-replication-status'?:
              | 'COMPLETE'
              | 'PENDING'
              | 'FAILED'
              | 'REPLICA'
              | undefined
            'x-amz-fwd-header-x-amz-request-charged'?: 'requester' | undefined
            'x-amz-fwd-header-x-amz-restore'?: string | undefined
            'x-amz-fwd-header-x-amz-server-side-encryption'?:
              | 'AES256'
              | 'aws:kms'
              | 'aws:kms:dsse'
              | undefined
            'x-amz-fwd-header-x-amz-server-side-encryption-customer-algorithm'?: string | undefined
            'x-amz-fwd-header-x-amz-server-side-encryption-aws-kms-key-id'?: string | undefined
            'x-amz-fwd-header-x-amz-server-side-encryption-customer-key-MD5'?: string | undefined
            'x-amz-fwd-header-x-amz-storage-class'?:
              | 'STANDARD'
              | 'REDUCED_REDUNDANCY'
              | 'STANDARD_IA'
              | 'ONEZONE_IA'
              | 'INTELLIGENT_TIERING'
              | 'GLACIER'
              | 'DEEP_ARCHIVE'
              | 'OUTPOSTS'
              | 'GLACIER_IR'
              | 'SNOW'
              | undefined
            'x-amz-fwd-header-x-amz-tagging-count'?: number | undefined
            'x-amz-fwd-header-x-amz-version-id'?: string | undefined
            'x-amz-fwd-header-x-amz-server-side-encryption-bucket-key-enabled'?: boolean | undefined
            'x-amz-security-token'?: string | undefined
          }
        } & {
          json: {
            Body?: string | undefined
            'x-amz-meta-'?: { [x: string]: MetadataValue } | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
