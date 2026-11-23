type Consumer = {
  name?: string | undefined
  format?: string | undefined
  'auto.offset.reset'?: string | undefined
  'fetch.min.bytes'?: number | undefined
  'consumer.request.timeout.ms'?: number | undefined
  'enable.auto.commit'?: boolean | undefined
  'isolation.level'?: string | undefined
}
type CreatedConsumer = { instance_id?: string | undefined; base_uri?: string | undefined }
type Error = {
  error_code?: number | undefined
  message?: string | undefined
  validation_errors?: string[] | undefined
}
type Partition = { topic?: string | undefined; partition?: number | undefined }
type Partitions = { partitions?: Partition[] | undefined }
type Topics = { topics?: string[] | undefined; topic_pattern?: string | undefined }
type AssignedTopicPartitions = { [x: string]: number[] }
type SubscribedTopicList = {
  topics?: Topics | undefined
  partitions?: AssignedTopicPartitions[] | undefined
}
type OffsetCommitSeek = { topic: string; partition: number; offset: bigint }
type OffsetCommitSeekList = { offsets?: OffsetCommitSeek[] | undefined }
type Replica = {
  broker?: number | undefined
  leader?: boolean | undefined
  in_sync?: boolean | undefined
}
type PartitionMetadata = {
  partition?: number | undefined
  leader?: number | undefined
  replicas?: Replica[] | undefined
}
type TopicMetadata = {
  name?: string | undefined
  configs?: { [x: string]: string } | undefined
  partitions?: PartitionMetadata[] | undefined
}
type RecordValue =
  | { [x: string]: unknown }[]
  | { [x: string]: unknown }
  | string
  | ({ [x: string]: unknown } | null)
type RecordKey = { [x: string]: unknown }[] | { [x: string]: unknown } | string
type KafkaHeader = { key: string; value: string }
type KafkaHeaderList = KafkaHeader[]
type ProducerRecord = {
  value: RecordValue
  key?: RecordKey | undefined
  partition?: number | undefined
  timestamp?: bigint | undefined
  headers?: KafkaHeaderList | undefined
}
type ProducerRecordList = { records?: ProducerRecord[] | undefined }
type OffsetRecordSent = { partition?: number | undefined; offset?: bigint | undefined }
type OffsetRecordSentList = { offsets?: (OffsetRecordSent | Error)[] | undefined }
type NewTopic = {
  topic_name: string
  partitions_count?: (number | null) | undefined
  replication_factor?: (number | null) | undefined
}
type ConsumerRecord = {
  topic?: string | undefined
  key?: RecordKey | undefined
  value?: RecordValue | undefined
  partition?: number | undefined
  offset?: bigint | undefined
  timestamp?: bigint | undefined
  headers?: KafkaHeaderList | undefined
}
type ConsumerRecordList = ConsumerRecord[]
type ProducerRecordToPartition = {
  value: RecordValue
  key?: RecordKey | undefined
  headers?: KafkaHeaderList | undefined
}
type ProducerRecordToPartitionList = { records?: ProducerRecordToPartition[] | undefined }
type OffsetsSummary = { beginning_offset?: bigint | undefined; end_offset?: bigint | undefined }
type BridgeInfo = { bridge_version?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/consumers/:groupid': {
      $post:
        | {
            input: { param: { groupid: string } } & { json: Consumer }
            output: CreatedConsumer
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupid: string } } & { json: Consumer }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { groupid: string } } & { json: Consumer }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/consumers/:groupid/instances/:name/positions/beginning': {
      $post:
        | {
            input: { param: { groupid: string; name: string } } & { json: Partitions }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: Partitions }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/consumers/:groupid/instances/:name/positions/end': {
      $post:
        | {
            input: { param: { groupid: string; name: string } } & { json: Partitions }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: Partitions }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/consumers/:groupid/instances/:name/subscription': {
      $get:
        | {
            input: { param: { groupid: string; name: string } }
            output: SubscribedTopicList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupid: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { groupid: string; name: string } } & { json: Topics }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: Topics }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: Topics }
            output: Error
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: Topics }
            output: Error
            outputFormat: 'json'
            status: 422
          }
      $delete:
        | {
            input: { param: { groupid: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupid: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/consumers/:groupid/instances/:name/positions': {
      $post:
        | {
            input: { param: { groupid: string; name: string } } & { json: OffsetCommitSeekList }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: OffsetCommitSeekList }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/consumers/:groupid/instances/:name/assignments': {
      $post:
        | {
            input: { param: { groupid: string; name: string } } & { json: Partitions }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: Partitions }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: Partitions }
            output: Error
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/topics': { $get: { input: {}; output: string[]; outputFormat: 'json'; status: 200 } }
  } & {
    '/topics/:topicname': {
      $get:
        | {
            input: { param: { topicname: string } }
            output: TopicMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicname: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { topicname: string } } & { query: { async?: boolean | undefined } } & {
              json: ProducerRecordList
            }
            output: OffsetRecordSentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicname: string } } & { query: { async?: boolean | undefined } } & {
              json: ProducerRecordList
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/admin/topics': {
      $post: { input: { json: NewTopic }; output: {}; outputFormat: string; status: 201 }
    }
  } & {
    '/consumers/:groupid/instances/:name/records': {
      $get:
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: ConsumerRecordList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: ConsumerRecordList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: ConsumerRecordList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: ConsumerRecordList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 406
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { groupid: string; name: string } } & {
              query: { timeout?: number | undefined; max_bytes?: number | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/topics/:topicname/partitions': {
      $get:
        | {
            input: { param: { topicname: string } }
            output: PartitionMetadata[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicname: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/topics/:topicname/partitions/:partitionid': {
      $get:
        | {
            input: { param: { topicname: string; partitionid: number } }
            output: PartitionMetadata
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicname: string; partitionid: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { topicname: string; partitionid: number } } & {
              query: { async?: boolean | undefined }
            } & { json: ProducerRecordToPartitionList }
            output: OffsetRecordSentList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicname: string; partitionid: number } } & {
              query: { async?: boolean | undefined }
            } & { json: ProducerRecordToPartitionList }
            output: Error
            outputFormat: 'json'
            status: 422
          }
    }
  } & {
    '/topics/:topicname/partitions/:partitionid/offsets': {
      $get:
        | {
            input: { param: { topicname: string; partitionid: number } }
            output: OffsetsSummary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { topicname: string; partitionid: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/consumers/:groupid/instances/:name': {
      $delete:
        | {
            input: { param: { groupid: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupid: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/consumers/:groupid/instances/:name/offsets': {
      $post:
        | {
            input: { param: { groupid: string; name: string } } & { json: OffsetCommitSeekList }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { groupid: string; name: string } } & { json: OffsetCommitSeekList }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/healthy': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & {
    '/ready': {
      $get:
        | { input: {}; output: {}; outputFormat: string; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 500 }
    }
  } & { '/openapi': { $get: { input: {}; output: string; outputFormat: 'json'; status: 200 } } } & {
    '/openapi/v3': { $get: { input: {}; output: string; outputFormat: 'json'; status: 200 } }
  } & {
    '/metrics': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 404 }
    }
  } & { '/': { $get: { input: {}; output: BridgeInfo; outputFormat: 'json'; status: 200 } } },
  '/'
>
export default routes
