type CancelJournalKinesisStreamResponse = { StreamId?: {} | undefined }
type DescribeJournalKinesisStreamResponse = {
  Stream?:
    | {
        LedgerName: {}
        CreationTime?: {} | undefined
        InclusiveStartTime?: {} | undefined
        ExclusiveEndTime?: {} | undefined
        RoleArn: {}
        StreamId: {}
        Arn?: {} | undefined
        Status: {}
        KinesisConfiguration: { StreamArn: {}; AggregationEnabled?: {} | undefined }
        ErrorCause?: {} | undefined
        StreamName: {}
      }
    | undefined
}
type TagValue = string
type CreateLedgerResponse = {
  Name?: {} | undefined
  Arn?: {} | undefined
  State?: {} | undefined
  CreationDateTime?: {} | undefined
  PermissionsMode?: {} | undefined
  DeletionProtection?: {} | undefined
  KmsKeyArn?: {} | undefined
}
type ListLedgersResponse = { Ledgers?: {} | undefined; NextToken?: {} | undefined }
type DescribeLedgerResponse = {
  Name?: {} | undefined
  Arn?: {} | undefined
  State?: {} | undefined
  CreationDateTime?: {} | undefined
  PermissionsMode?: {} | undefined
  DeletionProtection?: {} | undefined
  EncryptionDescription?:
    | { KmsKeyArn: {}; EncryptionStatus: {}; InaccessibleKmsKeyDateTime?: {} | undefined }
    | undefined
}
type UpdateLedgerResponse = {
  Name?: {} | undefined
  Arn?: {} | undefined
  State?: {} | undefined
  CreationDateTime?: {} | undefined
  DeletionProtection?: {} | undefined
  EncryptionDescription?:
    | { KmsKeyArn: {}; EncryptionStatus: {}; InaccessibleKmsKeyDateTime?: {} | undefined }
    | undefined
}
type S3ExportConfiguration = {
  Bucket: {}
  Prefix: {}
  EncryptionConfiguration: { ObjectEncryptionType: {}; KmsKeyArn?: {} | undefined }
}
type DescribeJournalS3ExportResponse = {
  ExportDescription: {
    LedgerName: {}
    ExportId: {}
    ExportCreationTime: {}
    Status: {}
    InclusiveStartTime: {}
    ExclusiveEndTime: {}
    S3ExportConfiguration: S3ExportConfiguration
    RoleArn: {}
    OutputFormat?: {} | undefined
  }
}
type ExportJournalToS3Response = { ExportId: {} }
type ListJournalS3ExportsForLedgerResponse = {
  JournalS3Exports?: {} | undefined
  NextToken?: {} | undefined
}
type GetBlockResponse = {
  Block: { IonText?: {} | undefined }
  Proof?: { IonText?: {} | undefined } | undefined
}
type GetDigestResponse = { Digest: {}; DigestTipAddress: { IonText?: {} | undefined } }
type GetRevisionResponse = {
  Proof?: { IonText?: {} | undefined } | undefined
  Revision: { IonText?: {} | undefined }
}
type ListJournalKinesisStreamsForLedgerResponse = {
  Streams?: {} | undefined
  NextToken?: {} | undefined
}
type StreamJournalToKinesisResponse = { StreamId?: {} | undefined }
type ListJournalS3ExportsResponse = {
  JournalS3Exports?: {} | undefined
  NextToken?: {} | undefined
}
type ListTagsForResourceResponse = { Tags?: {} | undefined }
type TagResourceResponse = { [x: string]: unknown }
type TagKey = string
type UntagResourceResponse = { [x: string]: unknown }
type UpdateLedgerPermissionsModeResponse = {
  Name?: {} | undefined
  Arn?: {} | undefined
  PermissionsMode?: {} | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/ledgers/:name/journal-kinesis-streams/:streamId': {
      $delete: {
        input: { param: { name: string; streamId: string } } & {
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
        output: CancelJournalKinesisStreamResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string; streamId: string } } & {
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
        output: DescribeJournalKinesisStreamResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers': {
      $post: {
        input: {
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
            Name: string
            Tags?: { [x: string]: TagValue } | undefined
            PermissionsMode: 'ALLOW_ALL' | 'STANDARD'
            DeletionProtection?: boolean | undefined
            KmsKey?: string | undefined
          }
        }
        output: CreateLedgerResponse
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ListLedgersResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers/:name': {
      $delete: {
        input: { param: { name: string } } & {
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
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
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
        output: DescribeLedgerResponse
        outputFormat: 'json'
        status: 200
      }
      $patch: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { DeletionProtection?: boolean | undefined; KmsKey?: string | undefined } }
        output: UpdateLedgerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers/:name/journal-s3-exports/:exportId': {
      $get: {
        input: { param: { name: string; exportId: string } } & {
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
        output: DescribeJournalS3ExportResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers/:name/journal-s3-exports': {
      $post: {
        input: { param: { name: string } } & {
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
            InclusiveStartTime: string
            ExclusiveEndTime: string
            S3ExportConfiguration: {
              Bucket?: {} | undefined
              Prefix?: {} | undefined
              EncryptionConfiguration?:
                | { ObjectEncryptionType: {}; KmsKeyArn?: {} | undefined }
                | undefined
            }
            RoleArn: string
            OutputFormat?: 'ION_BINARY' | 'ION_TEXT' | 'JSON' | undefined
          }
        }
        output: ExportJournalToS3Response
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { param: { name: string } } & {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ListJournalS3ExportsForLedgerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers/:name/block': {
      $post: {
        input: { param: { name: string } } & {
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
            BlockAddress: { IonText?: {} | undefined }
            DigestTipAddress?: { IonText?: {} | undefined } | undefined
          }
        }
        output: GetBlockResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers/:name/digest': {
      $post: {
        input: { param: { name: string } } & {
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
        output: GetDigestResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers/:name/revision': {
      $post: {
        input: { param: { name: string } } & {
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
            BlockAddress: { IonText?: {} | undefined }
            DocumentId: string
            DigestTipAddress?: { IonText?: {} | undefined } | undefined
          }
        }
        output: GetRevisionResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers/:name/journal-kinesis-streams': {
      $get: {
        input: { param: { name: string } } & {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ListJournalKinesisStreamsForLedgerResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { name: string } } & {
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
            RoleArn: string
            Tags?: { [x: string]: TagValue } | undefined
            InclusiveStartTime: string
            ExclusiveEndTime?: string | undefined
            KinesisConfiguration: {
              StreamArn?: {} | undefined
              AggregationEnabled?: {} | undefined
            }
            StreamName: string
          }
        }
        output: StreamJournalToKinesisResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/journal-s3-exports': {
      $get: {
        input: {
          query: {
            max_results?: number | undefined
            next_token?: string | undefined
            MaxResults?: string | undefined
            NextToken?: string | undefined
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
        output: ListJournalS3ExportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn': {
      $get: {
        input: { param: { resourceArn: string } } & {
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
        output: ListTagsForResourceResponse
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { resourceArn: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { Tags: { [x: string]: TagValue } } }
        output: TagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/tags/:resourceArn#tagKeys': {
      $delete: {
        input: { param: { resourceArn: string } } & { query: { tagKeys: TagKey[] } } & {
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
        output: UntagResourceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/ledgers/:name/permissions-mode': {
      $patch: {
        input: { param: { name: string } } & {
          header: {
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: { PermissionsMode: 'ALLOW_ALL' | 'STANDARD' } }
        output: UpdateLedgerPermissionsModeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
