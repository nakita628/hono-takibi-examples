type ArchiveCreationOutput = { [x: string]: unknown }
type ListPartsOutput = {
  MultipartUploadId?: {} | undefined
  VaultARN?: {} | undefined
  ArchiveDescription?: {} | undefined
  PartSizeInBytes?: {} | undefined
  CreationDate?: {} | undefined
  Parts?: {} | undefined
  Marker?: {} | undefined
}
type UploadMultipartPartOutput = { [x: string]: unknown }
type GetVaultLockOutput = {
  Policy?: {} | undefined
  State?: {} | undefined
  ExpirationDate?: {} | undefined
  CreationDate?: {} | undefined
}
type InitiateVaultLockOutput = { [x: string]: unknown }
type TagValue = string
type CreateVaultOutput = { [x: string]: unknown }
type DescribeVaultOutput = {
  VaultARN?: {} | undefined
  VaultName?: {} | undefined
  CreationDate?: {} | undefined
  LastInventoryDate?: {} | undefined
  NumberOfArchives?: {} | undefined
  SizeInBytes?: {} | undefined
}
type GetVaultAccessPolicyOutput = { policy?: { Policy?: {} | undefined } | undefined }
type GetVaultNotificationsOutput = {
  vaultNotificationConfig?: { SNSTopic?: {} | undefined; Events?: {} | undefined } | undefined
}
type GlacierJobDescription = {
  JobId?: {} | undefined
  JobDescription?: {} | undefined
  Action?: {} | undefined
  ArchiveId?: {} | undefined
  VaultARN?: {} | undefined
  CreationDate?: {} | undefined
  Completed?: {} | undefined
  StatusCode?: {} | undefined
  StatusMessage?: {} | undefined
  ArchiveSizeInBytes?: {} | undefined
  InventorySizeInBytes?: {} | undefined
  SNSTopic?: {} | undefined
  CompletionDate?: {} | undefined
  SHA256TreeHash?: {} | undefined
  ArchiveSHA256TreeHash?: {} | undefined
  RetrievalByteRange?: {} | undefined
  Tier?: {} | undefined
  InventoryRetrievalParameters?:
    | {
        Format?: {} | undefined
        StartDate?: {} | undefined
        EndDate?: {} | undefined
        Limit?: {} | undefined
        Marker?: {} | undefined
      }
    | undefined
  JobOutputPath?: {} | undefined
  SelectParameters?:
    | {
        InputSerialization?:
          | {
              csv?:
                | {
                    FileHeaderInfo?: {} | undefined
                    Comments?: {} | undefined
                    QuoteEscapeCharacter?: {} | undefined
                    RecordDelimiter?: {} | undefined
                    FieldDelimiter?: {} | undefined
                    QuoteCharacter?: {} | undefined
                  }
                | undefined
            }
          | undefined
        ExpressionType?: {} | undefined
        Expression?: {} | undefined
        OutputSerialization?:
          | {
              csv?:
                | {
                    QuoteFields?: {} | undefined
                    QuoteEscapeCharacter?: {} | undefined
                    RecordDelimiter?: {} | undefined
                    FieldDelimiter?: {} | undefined
                    QuoteCharacter?: {} | undefined
                  }
                | undefined
            }
          | undefined
      }
    | undefined
  OutputLocation?:
    | {
        S3?:
          | {
              BucketName?: {} | undefined
              Prefix?: {} | undefined
              Encryption?:
                | {
                    EncryptionType?: {} | undefined
                    KMSKeyId?: {} | undefined
                    KMSContext?: {} | undefined
                  }
                | undefined
              CannedACL?: {} | undefined
              AccessControlList?: {} | undefined
              Tagging?: {} | undefined
              UserMetadata?: {} | undefined
              StorageClass?: {} | undefined
            }
          | undefined
      }
    | undefined
}
type GetDataRetrievalPolicyOutput = { Policy?: { Rules?: {} | undefined } | undefined }
type GetJobOutputOutput = { body?: {} | undefined; status?: {} | undefined }
type InitiateJobOutput = { [x: string]: unknown }
type ListJobsOutput = { JobList?: {} | undefined; Marker?: {} | undefined }
type InitiateMultipartUploadOutput = { [x: string]: unknown }
type ListMultipartUploadsOutput = { UploadsList?: {} | undefined; Marker?: {} | undefined }
type ListProvisionedCapacityOutput = { ProvisionedCapacityList?: {} | undefined }
type PurchaseProvisionedCapacityOutput = { [x: string]: unknown }
type ListTagsForVaultOutput = { Tags?: {} | undefined }
type ListVaultsOutput = { VaultList?: {} | undefined; Marker?: {} | undefined }
type String = string
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId': {
      $delete: {
        input: { param: { accountId: string; vaultName: string; uploadId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $post: {
        input: { param: { accountId: string; vaultName: string; uploadId: string } } & {
          header: {
            'x-amz-archive-size'?: string | undefined
            'x-amz-sha256-tree-hash'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ArchiveCreationOutput
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { accountId: string; vaultName: string; uploadId: string } } & {
          query: { marker?: string | undefined; limit?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListPartsOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; vaultName: string; uploadId: string } } & {
          header: {
            'x-amz-sha256-tree-hash'?: string | undefined
            'Content-Range'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { body?: string | undefined } }
        output: UploadMultipartPartOutput
        outputFormat: 'json'
        status: 204
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/lock-policy': {
      $delete: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVaultLockOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { policy?: { Policy?: {} | undefined } | undefined } }
        output: InitiateVaultLockOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/tags#operation=add': {
      $post: {
        input: { param: { accountId: string; vaultName: string } } & {
          query: { operation: 'add' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags?: { [x: string]: TagValue } | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/lock-policy/:lockId': {
      $post: {
        input: { param: { accountId: string; vaultName: string; lockId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:accountId/vaults/:vaultName': {
      $put: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: CreateVaultOutput
        outputFormat: 'json'
        status: 201
      }
      $delete: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: DescribeVaultOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/archives/:archiveId': {
      $delete: {
        input: { param: { accountId: string; vaultName: string; archiveId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/access-policy': {
      $delete: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVaultAccessPolicyOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { policy?: { Policy?: {} | undefined } | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/notification-configuration': {
      $delete: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
      $get: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetVaultNotificationsOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            vaultNotificationConfig?:
              | { SNSTopic?: {} | undefined; Events?: {} | undefined }
              | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/jobs/:jobId': {
      $get: {
        input: { param: { accountId: string; vaultName: string; jobId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GlacierJobDescription
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:accountId/policies/data-retrieval': {
      $get: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetDataRetrievalPolicyOutput
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Policy?: { Rules?: {} | undefined } | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/jobs/:jobId/output': {
      $get: {
        input: { param: { accountId: string; vaultName: string; jobId: string } } & {
          header: {
            Range?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: GetJobOutputOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/jobs': {
      $post: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & {
          json: {
            jobParameters?:
              | {
                  Format?: {} | undefined
                  Type?: {} | undefined
                  ArchiveId?: {} | undefined
                  Description?: {} | undefined
                  SNSTopic?: {} | undefined
                  RetrievalByteRange?: {} | undefined
                  Tier?: {} | undefined
                  InventoryRetrievalParameters?:
                    | {
                        StartDate?: {} | undefined
                        EndDate?: {} | undefined
                        Limit?: {} | undefined
                        Marker?: {} | undefined
                      }
                    | undefined
                  SelectParameters?:
                    | {
                        InputSerialization?:
                          | {
                              csv?:
                                | {
                                    FileHeaderInfo?: {} | undefined
                                    Comments?: {} | undefined
                                    QuoteEscapeCharacter?: {} | undefined
                                    RecordDelimiter?: {} | undefined
                                    FieldDelimiter?: {} | undefined
                                    QuoteCharacter?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                        ExpressionType?: {} | undefined
                        Expression?: {} | undefined
                        OutputSerialization?:
                          | {
                              csv?:
                                | {
                                    QuoteFields?: {} | undefined
                                    QuoteEscapeCharacter?: {} | undefined
                                    RecordDelimiter?: {} | undefined
                                    FieldDelimiter?: {} | undefined
                                    QuoteCharacter?: {} | undefined
                                  }
                                | undefined
                            }
                          | undefined
                      }
                    | undefined
                  OutputLocation?:
                    | {
                        S3?:
                          | {
                              BucketName?: {} | undefined
                              Prefix?: {} | undefined
                              Encryption?:
                                | {
                                    EncryptionType?: {} | undefined
                                    KMSKeyId?: {} | undefined
                                    KMSContext?: {} | undefined
                                  }
                                | undefined
                              CannedACL?: {} | undefined
                              AccessControlList?: {} | undefined
                              Tagging?: {} | undefined
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
        output: InitiateJobOutput
        outputFormat: 'json'
        status: 202
      }
      $get: {
        input: { param: { accountId: string; vaultName: string } } & {
          query: {
            limit?: string | undefined
            marker?: string | undefined
            statuscode?: string | undefined
            completed?: string | undefined
          }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListJobsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/multipart-uploads': {
      $post: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'x-amz-archive-description'?: string | undefined
            'x-amz-part-size'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: InitiateMultipartUploadOutput
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { param: { accountId: string; vaultName: string } } & {
          query: { marker?: string | undefined; limit?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListMultipartUploadsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:accountId/provisioned-capacity': {
      $get: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListProvisionedCapacityOutput
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { accountId: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: PurchaseProvisionedCapacityOutput
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/tags': {
      $get: {
        input: { param: { accountId: string; vaultName: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListTagsForVaultOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:accountId/vaults': {
      $get: {
        input: { param: { accountId: string } } & {
          query: { marker?: string | undefined; limit?: string | undefined }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        }
        output: ListVaultsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/tags#operation=remove': {
      $post: {
        input: { param: { accountId: string; vaultName: string } } & {
          query: { operation: 'remove' }
        } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { TagKeys?: String[] | undefined } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/:accountId/vaults/:vaultName/archives': {
      $post: {
        input: { param: { vaultName: string; accountId: string } } & {
          header: {
            'x-amz-archive-description'?: string | undefined
            'x-amz-sha256-tree-hash'?: string | undefined
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { body?: string | undefined } }
        output: ArchiveCreationOutput
        outputFormat: 'json'
        status: 201
      }
    }
  },
  '/'
>
export default routes
