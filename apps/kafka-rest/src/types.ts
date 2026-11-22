type ResourceCollectionMetadata = { self: string; next?: (string | null) | undefined }
type ResourceMetadata = { self: string; resource_name?: (string | null) | undefined }
type Relationship = { related: string }
type ClusterData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  controller?: Relationship | undefined
  acls: Relationship
  brokers: Relationship
  broker_configs: Relationship
  consumer_groups: Relationship
  topics: Relationship
  partition_reassignments: Relationship
}
type ClusterDataList = { kind: string; metadata: ResourceCollectionMetadata; data: ClusterData[] }
type Error = { error_code: number; message: string | null }
type AclResourceType =
  | 'UNKNOWN'
  | 'ANY'
  | 'TOPIC'
  | 'GROUP'
  | 'CLUSTER'
  | 'TRANSACTIONAL_ID'
  | 'DELEGATION_TOKEN'
type AclPatternType = string
type AclOperation = string
type AclPermission = string
type CreateAclRequestData = {
  resource_type: AclResourceType
  resource_name: string
  pattern_type: AclPatternType
  principal: string
  host: string
  operation: AclOperation
  permission: AclPermission
}
type CreateAclRequestDataList = { data: CreateAclRequestData[] }
type AclData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  resource_type: AclResourceType
  resource_name: string
  pattern_type: AclPatternType
  principal: string
  host: string
  operation: AclOperation
  permission: AclPermission
}
type AclDataList = { kind: string; metadata: ResourceCollectionMetadata; data: AclData[] }
type ConfigSource = string
type ConfigSynonymData = { name: string; value?: (string | null) | undefined; source: ConfigSource }
type ClusterConfigType = string
type ClusterConfigData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  name: string
  value?: (string | null) | undefined
  is_default: boolean
  is_read_only: boolean
  is_sensitive: boolean
  source: ConfigSource
  synonyms: ConfigSynonymData[]
  config_type: ClusterConfigType
}
type ClusterConfigDataList = {
  kind: string
  metadata: ResourceCollectionMetadata
  data: ClusterConfigData[]
}
type AlterConfigBatchRequestData = {
  data: {
    name: string
    value?: (string | null) | undefined
    operation?: (string | null) | undefined
  }[]
  validate_only?: boolean | undefined
}
type UpdateConfigRequestData = { value?: (string | null) | undefined }
type BrokerData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  broker_id: number
  host?: (string | null) | undefined
  port?: (number | null) | undefined
  rack?: (string | null) | undefined
  configs: Relationship
  partition_replicas: Relationship
}
type BrokerDataList = { kind: string; metadata: ResourceCollectionMetadata; data: BrokerData[] }
type BrokerConfigData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  name: string
  value?: (string | null) | undefined
  is_default: boolean
  is_read_only: boolean
  is_sensitive: boolean
  source: ConfigSource
  synonyms: ConfigSynonymData[]
  broker_id: number
}
type BrokerConfigDataList = {
  kind: string
  metadata: ResourceCollectionMetadata
  data: BrokerConfigData[]
}
type ReplicaData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  topic_name: string
  partition_id: number
  broker_id: number
  is_leader: boolean
  is_in_sync: boolean
  broker: Relationship
}
type ReplicaDataList = { kind: string; metadata: ResourceCollectionMetadata; data: ReplicaData[] }
type ConsumerGroupState = string
type ConsumerGroupType = string
type ConsumerGroupData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  consumer_group_id: string
  is_simple: boolean
  partition_assignor: string
  state: ConsumerGroupState
  type: ConsumerGroupType
  is_mixed_consumer_group: boolean
  coordinator: Relationship
  consumers: Relationship
  lag_summary: Relationship
}
type ConsumerGroupDataList = {
  kind: string
  metadata: ResourceCollectionMetadata
  data: ConsumerGroupData[]
}
type ConsumerData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  consumer_group_id: string
  consumer_id: string
  instance_id?: (string | null) | undefined
  client_id: string
  assignments: Relationship
}
type ConsumerDataList = { kind: string; metadata: ResourceCollectionMetadata; data: ConsumerData[] }
type ConsumerGroupLagSummaryData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  consumer_group_id: string
  max_lag_consumer_id: string
  max_lag_instance_id?: (string | null) | undefined
  max_lag_client_id: string
  max_lag_topic_name: string
  max_lag_partition_id: number
  max_lag: bigint
  total_lag: bigint
  max_lag_consumer: Relationship
  max_lag_partition: Relationship
}
type ConsumerLagData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  consumer_group_id: string
  topic_name: string
  partition_id: number
  current_offset: bigint
  log_end_offset: bigint
  lag: bigint
  consumer_id: string
  instance_id?: (string | null) | undefined
  client_id: string
}
type ConsumerLagDataList = {
  kind: string
  metadata: ResourceCollectionMetadata
  data: ConsumerLagData[]
}
type ConsumerAssignmentData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  consumer_group_id: string
  consumer_id: string
  topic_name: string
  partition_id: number
  partition: Relationship
  lag: Relationship
}
type ConsumerAssignmentDataList = {
  kind: string
  metadata: ResourceCollectionMetadata
  data: ConsumerAssignmentData[]
}
type AuthorizedOperations = string[]
type TopicData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  topic_name: string
  is_internal: boolean
  replication_factor: number
  partitions_count: number
  partitions: Relationship
  configs: Relationship
  partition_reassignments: Relationship
  authorized_operations?: AuthorizedOperations | undefined
}
type TopicDataList = { kind: string; metadata: ResourceCollectionMetadata; data: TopicData[] }
type CreateTopicRequestData = {
  topic_name: string
  partitions_count?: number | undefined
  replication_factor?: number | undefined
  replicas_assignments?: { [x: string]: number[] } | undefined
  configs?: { name: string; value?: (string | null) | undefined }[] | undefined
  validate_only?: boolean | undefined
}
type UpdatePartitionCountRequestData = { partitions_count: number }
type TopicConfigData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  name: string
  value?: (string | null) | undefined
  is_default: boolean
  is_read_only: boolean
  is_sensitive: boolean
  source: ConfigSource
  synonyms: ConfigSynonymData[]
  topic_name: string
}
type TopicConfigDataList = {
  kind: string
  metadata: ResourceCollectionMetadata
  data: TopicConfigData[]
}
type PartitionWithOffsetsData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  topic_name: string
  partition_id: number
  earliest_offset: unknown
  latest_offset: unknown
}
type PartitionData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  topic_name: string
  partition_id: number
  leader?: Relationship | undefined
  replicas: Relationship
  reassignment: Relationship
}
type PartitionDataList = {
  kind: string
  metadata: ResourceCollectionMetadata
  data: PartitionData[]
}
type ReassignmentData = {
  kind: string
  metadata: ResourceMetadata
  cluster_id: string
  topic_name: string
  partition_id: number
  adding_replicas: number[]
  removing_replicas: number[]
  replicas: Relationship
}
type ReassignmentDataList = {
  kind: string
  metadata: ResourceCollectionMetadata
  data: ReassignmentData[]
}
type ProduceRequestHeader = { name: string; value?: (string | null) | undefined }
type AnyValue = { [x: string]: unknown } | null
type ProduceRequestData = {
  type?: string | undefined
  subject?: (string | null) | undefined
  subject_name_strategy?: (string | null) | undefined
  schema_id?: (number | null) | undefined
  schema_version?: (number | null) | undefined
  schema?: (string | null) | undefined
  data?: AnyValue | undefined
} | null
type ProduceRequest = {
  partition_id?: (number | null) | undefined
  headers?: ProduceRequestHeader[] | undefined
  key?: ProduceRequestData | undefined
  value?: ProduceRequestData | undefined
  timestamp?: (string | null) | undefined
}
type ProduceResponseData = {
  size: bigint
  type: string | null
  subject?: (string | null) | undefined
  schema_id?: (number | null) | undefined
  schema_version?: (number | null) | undefined
} | null
type ProduceResponse = {
  error_code: number
  message?: string | undefined
  cluster_id?: string | undefined
  topic_name?: string | undefined
  partition_id?: number | undefined
  offset?: bigint | undefined
  timestamp?: (string | null) | undefined
  key?: ProduceResponseData | undefined
  value?: ProduceResponseData | undefined
}
type ProduceBatchRequestEntry = {
  id: string
  partition_id?: (number | null) | undefined
  headers?: ProduceRequestHeader[] | undefined
  key?: ProduceRequestData | undefined
  value?: ProduceRequestData | undefined
  timestamp?: (string | null) | undefined
}
type ProduceBatchRequest = { entries: ProduceBatchRequestEntry[] }
type ProduceBatchResponseSuccessEntry = {
  id: string
  cluster_id?: string | undefined
  topic_name?: string | undefined
  partition_id?: number | undefined
  offset?: bigint | undefined
  timestamp?: (string | null) | undefined
  key?: ProduceResponseData | undefined
  value?: ProduceResponseData | undefined
}
type ProduceBatchResponseFailureEntry = {
  id: string
  error_code: number
  message?: string | undefined
}
type ProduceBatchResponse = {
  successes?: ProduceBatchResponseSuccessEntry[] | undefined
  failures?: ProduceBatchResponseFailureEntry[] | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/clusters': {
      $get:
        | { input: {}; output: ClusterDataList; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 400 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 401 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 403 }
        | { input: {}; output: string; outputFormat: 'text'; status: 429 }
        | { input: {}; output: Error; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/clusters/:cluster_id': {
      $get:
        | {
            input: { param: { cluster_id: string } }
            output: ClusterData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/acls:batch': {
      $post:
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestDataList }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestDataList }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestDataList }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestDataList }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestDataList }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestDataList }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/acls': {
      $get:
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type?: AclResourceType | undefined
                resource_name?: string | undefined
                pattern_type?: AclPatternType | undefined
                principal?: string | undefined
                host?: string | undefined
                operation?: AclOperation | undefined
                permission?: AclPermission | undefined
              }
            }
            output: AclDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type?: AclResourceType | undefined
                resource_name?: string | undefined
                pattern_type?: AclPatternType | undefined
                principal?: string | undefined
                host?: string | undefined
                operation?: AclOperation | undefined
                permission?: AclPermission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type?: AclResourceType | undefined
                resource_name?: string | undefined
                pattern_type?: AclPatternType | undefined
                principal?: string | undefined
                host?: string | undefined
                operation?: AclOperation | undefined
                permission?: AclPermission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type?: AclResourceType | undefined
                resource_name?: string | undefined
                pattern_type?: AclPatternType | undefined
                principal?: string | undefined
                host?: string | undefined
                operation?: AclOperation | undefined
                permission?: AclPermission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type?: AclResourceType | undefined
                resource_name?: string | undefined
                pattern_type?: AclPatternType | undefined
                principal?: string | undefined
                host?: string | undefined
                operation?: AclOperation | undefined
                permission?: AclPermission | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type?: AclResourceType | undefined
                resource_name?: string | undefined
                pattern_type?: AclPatternType | undefined
                principal?: string | undefined
                host?: string | undefined
                operation?: AclOperation | undefined
                permission?: AclPermission | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestData }
            output: {}
            outputFormat: string
            status: 201
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestData }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestData }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestData }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestData }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateAclRequestData }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type: AclResourceType
                resource_name?: string | undefined
                pattern_type: AclPatternType
                principal?: string | undefined
                host?: string | undefined
                operation: AclOperation
                permission: AclPermission
              }
            }
            output: { data: AclData[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type: AclResourceType
                resource_name?: string | undefined
                pattern_type: AclPatternType
                principal?: string | undefined
                host?: string | undefined
                operation: AclOperation
                permission: AclPermission
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type: AclResourceType
                resource_name?: string | undefined
                pattern_type: AclPatternType
                principal?: string | undefined
                host?: string | undefined
                operation: AclOperation
                permission: AclPermission
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type: AclResourceType
                resource_name?: string | undefined
                pattern_type: AclPatternType
                principal?: string | undefined
                host?: string | undefined
                operation: AclOperation
                permission: AclPermission
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type: AclResourceType
                resource_name?: string | undefined
                pattern_type: AclPatternType
                principal?: string | undefined
                host?: string | undefined
                operation: AclOperation
                permission: AclPermission
              }
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } } & {
              query: {
                resource_type: AclResourceType
                resource_name?: string | undefined
                pattern_type: AclPatternType
                principal?: string | undefined
                host?: string | undefined
                operation: AclOperation
                permission: AclPermission
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/broker-configs': {
      $get:
        | {
            input: { param: { cluster_id: string } }
            output: ClusterConfigDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/broker-configs:alter': {
      $post:
        | {
            input: { param: { cluster_id: string } } & { json: AlterConfigBatchRequestData }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string } } & { json: AlterConfigBatchRequestData }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } } & { json: AlterConfigBatchRequestData }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } } & { json: AlterConfigBatchRequestData }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } } & { json: AlterConfigBatchRequestData }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } } & { json: AlterConfigBatchRequestData }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/broker-configs/:name': {
      $get:
        | {
            input: { param: { cluster_id: string; name: string } }
            output: ClusterConfigData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { cluster_id: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { cluster_id: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/brokers': {
      $get:
        | {
            input: { param: { cluster_id: string } }
            output: BrokerDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/brokers/:broker_id': {
      $get:
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: BrokerData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/brokers/-/configs': {
      $get:
        | {
            input: { param: { cluster_id: string } }
            output: BrokerConfigDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/brokers/:broker_id/configs': {
      $get:
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: BrokerConfigDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/brokers/:broker_id/configs:alter': {
      $post:
        | {
            input: { param: { cluster_id: string; broker_id: number } } & {
              json: AlterConfigBatchRequestData
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } } & {
              json: AlterConfigBatchRequestData
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/brokers/:broker_id/configs/:name': {
      $get:
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: BrokerConfigData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; broker_id: number; name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/brokers/:broker_id/partition-replicas': {
      $get:
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: ReplicaDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; broker_id: number } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups': {
      $get:
        | {
            input: { param: { cluster_id: string } }
            output: ConsumerGroupDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id': {
      $get:
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: ConsumerGroupData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers': {
      $get:
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: ConsumerDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lag-summary': {
      $get:
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: ConsumerGroupLagSummaryData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lags': {
      $get:
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: ConsumerLagDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/lags/:topic_name/partitions/:partition_id': {
      $get:
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: ConsumerLagData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id': {
      $get:
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: ConsumerData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id/assignments': {
      $get:
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: ConsumerAssignmentDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; consumer_group_id: string; consumer_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/consumer-groups/:consumer_group_id/consumers/:consumer_id/assignments/:topic_name/partitions/:partition_id': {
      $get:
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                consumer_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: ConsumerAssignmentData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                consumer_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                consumer_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                consumer_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                consumer_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              param: {
                cluster_id: string
                consumer_group_id: string
                consumer_id: string
                topic_name: string
                partition_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics': {
      $get:
        | {
            input: { param: { cluster_id: string } }
            output: TopicDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { param: { cluster_id: string } } & { json: CreateTopicRequestData }
            output: TopicData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateTopicRequestData }
            output: TopicData
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateTopicRequestData }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateTopicRequestData }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateTopicRequestData }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateTopicRequestData }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } } & { json: CreateTopicRequestData }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              query: { include_authorized_operations?: boolean | undefined }
            }
            output: TopicData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              query: { include_authorized_operations?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              query: { include_authorized_operations?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              query: { include_authorized_operations?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              query: { include_authorized_operations?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              query: { include_authorized_operations?: boolean | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              query: { include_authorized_operations?: boolean | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: UpdatePartitionCountRequestData
            }
            output: TopicData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: UpdatePartitionCountRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: UpdatePartitionCountRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: UpdatePartitionCountRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: UpdatePartitionCountRequestData
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: UpdatePartitionCountRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/configs': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: TopicConfigDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/configs:alter': {
      $post:
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: AlterConfigBatchRequestData
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: AlterConfigBatchRequestData
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: AlterConfigBatchRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/configs/:name': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: TopicConfigData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $put:
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } } & {
              json: UpdateConfigRequestData
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: {}
            outputFormat: string
            status: 204
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/offset': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } } & {
              query: { offset_type?: string | undefined }
            }
            output: PartitionWithOffsetsData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } } & {
              query: { offset_type?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } } & {
              query: { offset_type?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } } & {
              query: { offset_type?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } } & {
              query: { offset_type?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } } & {
              query: { offset_type?: string | undefined }
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } } & {
              query: { offset_type?: string | undefined }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/partitions': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: PartitionDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: PartitionData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/-/partitions/-/reassignment': {
      $get:
        | {
            input: { param: { cluster_id: string } }
            output: ReassignmentDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/partitions/-/reassignment': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: ReassignmentDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/reassignment': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: ReassignmentData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/replicas': {
      $get:
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: ReplicaDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string; partition_id: number } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/partitions/:partition_id/replicas/:broker_id': {
      $get:
        | {
            input: {
              param: {
                cluster_id: string
                topic_name: string
                partition_id: number
                broker_id: number
              }
            }
            output: ReplicaData
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              param: {
                cluster_id: string
                topic_name: string
                partition_id: number
                broker_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              param: {
                cluster_id: string
                topic_name: string
                partition_id: number
                broker_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              param: {
                cluster_id: string
                topic_name: string
                partition_id: number
                broker_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              param: {
                cluster_id: string
                topic_name: string
                partition_id: number
                broker_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              param: {
                cluster_id: string
                topic_name: string
                partition_id: number
                broker_id: number
              }
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: {
              param: {
                cluster_id: string
                topic_name: string
                partition_id: number
                broker_id: number
              }
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/-/configs': {
      $get:
        | {
            input: { param: { cluster_id: string } }
            output: TopicConfigDataList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string } }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string } }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/records': {
      $post:
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: ProduceResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: Error
            outputFormat: 'json'
            status: 413
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: Error
            outputFormat: 'json'
            status: 422
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & { json: ProduceRequest }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/clusters/:cluster_id/topics/:topic_name/records:batch': {
      $post:
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: ProduceBatchRequest
            }
            output: ProduceBatchResponse
            outputFormat: 'json'
            status: 207
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: ProduceBatchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: ProduceBatchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: ProduceBatchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: ProduceBatchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: ProduceBatchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 415
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: ProduceBatchRequest
            }
            output: string
            outputFormat: 'text'
            status: 429
          }
        | {
            input: { param: { cluster_id: string; topic_name: string } } & {
              json: ProduceBatchRequest
            }
            output: Error
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
