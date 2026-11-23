type AddTagsToStreamInput = { StreamName?: {} | undefined; Tags: {}; StreamARN?: {} | undefined }
type CreateStreamInput = {
  StreamName: {}
  ShardCount?: {} | undefined
  StreamModeDetails?: { StreamMode: {} } | undefined
}
type DecreaseStreamRetentionPeriodInput = {
  StreamName?: {} | undefined
  RetentionPeriodHours: {}
  StreamARN?: {} | undefined
}
type DeleteStreamInput = {
  StreamName?: {} | undefined
  EnforceConsumerDeletion?: {} | undefined
  StreamARN?: {} | undefined
}
type DeregisterStreamConsumerInput = {
  StreamARN?: {} | undefined
  ConsumerName?: {} | undefined
  ConsumerARN?: {} | undefined
}
type DescribeLimitsInput = { [x: string]: unknown }
type DescribeLimitsOutput = {
  ShardLimit: {}
  OpenShardCount: {}
  OnDemandStreamCount: {}
  OnDemandStreamCountLimit: {}
}
type DescribeStreamInput = {
  StreamName?: {} | undefined
  Limit?: {} | undefined
  ExclusiveStartShardId?: {} | undefined
  StreamARN?: {} | undefined
}
type DescribeStreamOutput = {
  StreamDescription: {
    StreamName: {}
    StreamARN: {}
    StreamStatus: {}
    StreamModeDetails?: { StreamMode: {} } | undefined
    Shards: {}
    HasMoreShards: {}
    RetentionPeriodHours: {}
    StreamCreationTimestamp: {}
    EnhancedMonitoring: {}
    EncryptionType?: {} | undefined
    KeyId?: {} | undefined
  }
}
type DescribeStreamConsumerInput = {
  StreamARN?: {} | undefined
  ConsumerName?: {} | undefined
  ConsumerARN?: {} | undefined
}
type DescribeStreamConsumerOutput = {
  ConsumerDescription: {
    ConsumerName: {}
    ConsumerARN: {}
    ConsumerStatus: {}
    ConsumerCreationTimestamp: {}
    StreamARN: {}
  }
}
type DescribeStreamSummaryInput = { StreamName?: {} | undefined; StreamARN?: {} | undefined }
type DescribeStreamSummaryOutput = {
  StreamDescriptionSummary: {
    StreamName: {}
    StreamARN: {}
    StreamStatus: {}
    StreamModeDetails?: { StreamMode: {} } | undefined
    RetentionPeriodHours: {}
    StreamCreationTimestamp: {}
    EnhancedMonitoring: {}
    EncryptionType?: {} | undefined
    KeyId?: {} | undefined
    OpenShardCount: {}
    ConsumerCount?: {} | undefined
  }
}
type DisableEnhancedMonitoringInput = {
  StreamName?: {} | undefined
  ShardLevelMetrics: {}
  StreamARN?: {} | undefined
}
type EnhancedMonitoringOutput = {
  StreamName?: {} | undefined
  CurrentShardLevelMetrics?: {} | undefined
  DesiredShardLevelMetrics?: {} | undefined
  StreamARN?: {} | undefined
}
type EnableEnhancedMonitoringInput = {
  StreamName?: {} | undefined
  ShardLevelMetrics: {}
  StreamARN?: {} | undefined
}
type GetRecordsInput = { ShardIterator: {}; Limit?: {} | undefined; StreamARN?: {} | undefined }
type GetRecordsOutput = {
  Records: {}
  NextShardIterator?: {} | undefined
  MillisBehindLatest?: {} | undefined
  ChildShards?: {} | undefined
}
type GetShardIteratorInput = {
  StreamName?: {} | undefined
  ShardId: {}
  ShardIteratorType: {}
  StartingSequenceNumber?: {} | undefined
  Timestamp?: {} | undefined
  StreamARN?: {} | undefined
}
type GetShardIteratorOutput = { ShardIterator?: {} | undefined }
type IncreaseStreamRetentionPeriodInput = {
  StreamName?: {} | undefined
  RetentionPeriodHours: {}
  StreamARN?: {} | undefined
}
type ListShardsInput = {
  StreamName?: {} | undefined
  NextToken?: {} | undefined
  ExclusiveStartShardId?: {} | undefined
  MaxResults?: {} | undefined
  StreamCreationTimestamp?: {} | undefined
  ShardFilter?: { Type: {}; ShardId?: {} | undefined; Timestamp?: {} | undefined } | undefined
  StreamARN?: {} | undefined
}
type ListShardsOutput = { Shards?: {} | undefined; NextToken?: {} | undefined }
type ListStreamConsumersInput = {
  StreamARN: {}
  NextToken?: {} | undefined
  MaxResults?: {} | undefined
  StreamCreationTimestamp?: {} | undefined
}
type ListStreamConsumersOutput = { Consumers?: {} | undefined; NextToken?: {} | undefined }
type ListStreamsInput = {
  Limit?: {} | undefined
  ExclusiveStartStreamName?: {} | undefined
  NextToken?: {} | undefined
}
type ListStreamsOutput = {
  StreamNames: {}
  HasMoreStreams: {}
  NextToken?: {} | undefined
  StreamSummaries?: {} | undefined
}
type ListTagsForStreamInput = {
  StreamName?: {} | undefined
  ExclusiveStartTagKey?: {} | undefined
  Limit?: {} | undefined
  StreamARN?: {} | undefined
}
type ListTagsForStreamOutput = { Tags: {}; HasMoreTags: {} }
type MergeShardsInput = {
  StreamName?: {} | undefined
  ShardToMerge: {}
  AdjacentShardToMerge: {}
  StreamARN?: {} | undefined
}
type PutRecordInput = {
  StreamName?: {} | undefined
  Data: {}
  PartitionKey: {}
  ExplicitHashKey?: {} | undefined
  SequenceNumberForOrdering?: {} | undefined
  StreamARN?: {} | undefined
}
type PutRecordOutput = { ShardId: {}; SequenceNumber: {}; EncryptionType?: {} | undefined }
type PutRecordsInput = { Records: {}; StreamName?: {} | undefined; StreamARN?: {} | undefined }
type PutRecordsOutput = {
  FailedRecordCount?: {} | undefined
  Records: {}
  EncryptionType?: {} | undefined
}
type RegisterStreamConsumerInput = { StreamARN: {}; ConsumerName: {} }
type RegisterStreamConsumerOutput = {
  Consumer: { ConsumerName: {}; ConsumerARN: {}; ConsumerStatus: {}; ConsumerCreationTimestamp: {} }
}
type RemoveTagsFromStreamInput = {
  StreamName?: {} | undefined
  TagKeys: {}
  StreamARN?: {} | undefined
}
type SplitShardInput = {
  StreamName?: {} | undefined
  ShardToSplit: {}
  NewStartingHashKey: {}
  StreamARN?: {} | undefined
}
type StartStreamEncryptionInput = {
  StreamName?: {} | undefined
  EncryptionType: {}
  KeyId: {}
  StreamARN?: {} | undefined
}
type StopStreamEncryptionInput = {
  StreamName?: {} | undefined
  EncryptionType: {}
  KeyId: {}
  StreamARN?: {} | undefined
}
type UpdateShardCountInput = {
  StreamName?: {} | undefined
  TargetShardCount: {}
  ScalingType: {}
  StreamARN?: {} | undefined
}
type UpdateShardCountOutput = {
  StreamName?: {} | undefined
  CurrentShardCount?: {} | undefined
  TargetShardCount?: {} | undefined
  StreamARN?: {} | undefined
}
type UpdateStreamModeInput = { StreamARN: {}; StreamModeDetails: { StreamMode: {} } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/#X-Amz-Target=Kinesis_20131202.AddTagsToStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.AddTagsToStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: AddTagsToStreamInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.CreateStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.CreateStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: CreateStreamInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.DecreaseStreamRetentionPeriod': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.DecreaseStreamRetentionPeriod'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DecreaseStreamRetentionPeriodInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.DeleteStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.DeleteStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeleteStreamInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.DeregisterStreamConsumer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.DeregisterStreamConsumer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DeregisterStreamConsumerInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.DescribeLimits': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.DescribeLimits'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeLimitsInput }
        output: DescribeLimitsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.DescribeStream': {
      $post: {
        input: {
          query: { Limit?: string | undefined; ExclusiveStartShardId?: string | undefined }
        } & {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.DescribeStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStreamInput }
        output: DescribeStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.DescribeStreamConsumer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.DescribeStreamConsumer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStreamConsumerInput }
        output: DescribeStreamConsumerOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.DescribeStreamSummary': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.DescribeStreamSummary'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DescribeStreamSummaryInput }
        output: DescribeStreamSummaryOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.DisableEnhancedMonitoring': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.DisableEnhancedMonitoring'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: DisableEnhancedMonitoringInput }
        output: EnhancedMonitoringOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.EnableEnhancedMonitoring': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.EnableEnhancedMonitoring'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: EnableEnhancedMonitoringInput }
        output: EnhancedMonitoringOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.GetRecords': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.GetRecords'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetRecordsInput }
        output: GetRecordsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.GetShardIterator': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.GetShardIterator'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: GetShardIteratorInput }
        output: GetShardIteratorOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.IncreaseStreamRetentionPeriod': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.IncreaseStreamRetentionPeriod'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: IncreaseStreamRetentionPeriodInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.ListShards': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.ListShards'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListShardsInput }
        output: ListShardsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.ListStreamConsumers': {
      $post: {
        input: { query: { MaxResults?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.ListStreamConsumers'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStreamConsumersInput }
        output: ListStreamConsumersOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.ListStreams': {
      $post: {
        input: { query: { Limit?: string | undefined; NextToken?: string | undefined } } & {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.ListStreams'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListStreamsInput }
        output: ListStreamsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.ListTagsForStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.ListTagsForStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: ListTagsForStreamInput }
        output: ListTagsForStreamOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.MergeShards': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.MergeShards'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: MergeShardsInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.PutRecord': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.PutRecord'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRecordInput }
        output: PutRecordOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.PutRecords': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.PutRecords'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: PutRecordsInput }
        output: PutRecordsOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.RegisterStreamConsumer': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.RegisterStreamConsumer'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RegisterStreamConsumerInput }
        output: RegisterStreamConsumerOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.RemoveTagsFromStream': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.RemoveTagsFromStream'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: RemoveTagsFromStreamInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.SplitShard': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.SplitShard'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: SplitShardInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.StartStreamEncryption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.StartStreamEncryption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StartStreamEncryptionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.StopStreamEncryption': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.StopStreamEncryption'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: StopStreamEncryptionInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.UpdateShardCount': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.UpdateShardCount'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateShardCountInput }
        output: UpdateShardCountOutput
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/#X-Amz-Target=Kinesis_20131202.UpdateStreamMode': {
      $post: {
        input: {
          header: {
            'X-Amz-Target': 'Kinesis_20131202.UpdateStreamMode'
            'X-Amz-Content-Sha256'?: string | undefined
            'X-Amz-Date'?: string | undefined
            'X-Amz-Algorithm'?: string | undefined
            'X-Amz-Credential'?: string | undefined
            'X-Amz-Security-Token'?: string | undefined
            'X-Amz-Signature'?: string | undefined
            'X-Amz-SignedHeaders'?: string | undefined
          }
        } & { json: UpdateStreamModeInput }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
