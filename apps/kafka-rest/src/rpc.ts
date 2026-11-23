import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getClusters(options?: ClientRequestOptions) {
  return await parseResponse(client.clusters.$get(undefined, options))
}

export async function getClustersClusterId(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id'].$get(args, options))
}

export async function postClustersClusterIdAclsBatch(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls:batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id']['acls:batch'].$post(args, options))
}

export async function getClustersClusterIdAcls(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id'].acls.$get(args, options))
}

export async function postClustersClusterIdAcls(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id'].acls.$post(args, options))
}

export async function deleteClustersClusterIdAcls(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['acls']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id'].acls.$delete(args, options))
}

export async function getClustersClusterIdBrokerConfigs(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id']['broker-configs'].$get(args, options))
}

export async function postClustersClusterIdBrokerConfigsAlter(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['broker-configs:alter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['broker-configs:alter'].$post(args, options),
  )
}

export async function getClustersClusterIdBrokerConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['broker-configs'][':name'].$get(args, options),
  )
}

export async function putClustersClusterIdBrokerConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['broker-configs'][':name'].$put(args, options),
  )
}

export async function deleteClustersClusterIdBrokerConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['broker-configs'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['broker-configs'][':name'].$delete(args, options),
  )
}

export async function getClustersClusterIdBrokers(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id'].brokers.$get(args, options))
}

export async function getClustersClusterIdBrokersBrokerId(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].brokers[':broker_id'].$get(args, options),
  )
}

export async function getClustersClusterIdBrokersDashConfigs(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers']['-']['configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].brokers['-'].configs.$get(args, options),
  )
}

export async function getClustersClusterIdBrokersBrokerIdConfigs(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].brokers[':broker_id'].configs.$get(args, options),
  )
}

export async function postClustersClusterIdBrokersBrokerIdConfigsAlter(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs:alter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].brokers[':broker_id']['configs:alter'].$post(args, options),
  )
}

export async function getClustersClusterIdBrokersBrokerIdConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$get(args, options),
  )
}

export async function putClustersClusterIdBrokersBrokerIdConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$put(args, options),
  )
}

export async function deleteClustersClusterIdBrokersBrokerIdConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['configs'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].brokers[':broker_id'].configs[':name'].$delete(args, options),
  )
}

export async function getClustersClusterIdBrokersBrokerIdPartitionReplicas(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['brokers'][':broker_id']['partition-replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].brokers[':broker_id']['partition-replicas'].$get(args, options),
  )
}

export async function getClustersClusterIdConsumerGroups(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['consumer-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id']['consumer-groups'].$get(args, options))
}

export async function getClustersClusterIdConsumerGroupsConsumerGroupId(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].$get(args, options),
  )
}

export async function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumers(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers.$get(
      args,
      options,
    ),
  )
}

export async function getClustersClusterIdConsumerGroupsConsumerGroupIdLagSummary(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id']['lag-summary'].$get(
      args,
      options,
    ),
  )
}

export async function getClustersClusterIdConsumerGroupsConsumerGroupIdLags(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags.$get(
      args,
      options,
    ),
  )
}

export async function getClustersClusterIdConsumerGroupsConsumerGroupIdLagsTopicNamePartitionsPartitionId(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['lags'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].lags[
      ':topic_name'
    ].partitions[':partition_id'].$get(args, options),
  )
}

export async function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerId(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
      ':consumer_id'
    ].$get(args, options),
  )
}

export async function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignments(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
      ':consumer_id'
    ].assignments.$get(args, options),
  )
}

export async function getClustersClusterIdConsumerGroupsConsumerGroupIdConsumersConsumerIdAssignmentsTopicNamePartitionsPartitionId(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['consumer-groups'][':consumer_group_id']['consumers'][':consumer_id']['assignments'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id']['consumer-groups'][':consumer_group_id'].consumers[
      ':consumer_id'
    ].assignments[':topic_name'].partitions[':partition_id'].$get(args, options),
  )
}

export async function getClustersClusterIdTopics(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id'].topics.$get(args, options))
}

export async function postClustersClusterIdTopics(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id'].topics.$post(args, options))
}

export async function getClustersClusterIdTopicsTopicName(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].$get(args, options),
  )
}

export async function deleteClustersClusterIdTopicsTopicName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].$delete(args, options),
  )
}

export async function patchClustersClusterIdTopicsTopicName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].$patch(args, options),
  )
}

export async function getClustersClusterIdTopicsTopicNameConfigs(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].configs.$get(args, options),
  )
}

export async function postClustersClusterIdTopicsTopicNameConfigsAlter(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs:alter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name']['configs:alter'].$post(args, options),
  )
}

export async function getClustersClusterIdTopicsTopicNameConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$get(args, options),
  )
}

export async function putClustersClusterIdTopicsTopicNameConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$put(args, options),
  )
}

export async function deleteClustersClusterIdTopicsTopicNameConfigsName(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['configs'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].configs[':name'].$delete(args, options),
  )
}

export async function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdOffset(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['offset']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].offset.$get(
      args,
      options,
    ),
  )
}

export async function getClustersClusterIdTopicsTopicNamePartitions(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].partitions.$get(args, options),
  )
}

export async function getClustersClusterIdTopicsTopicNamePartitionsPartitionId(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].$get(
      args,
      options,
    ),
  )
}

export async function getClustersClusterIdTopicsDashPartitionsDashReassignment(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics']['-']['partitions']['-']['reassignment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics['-'].partitions['-'].reassignment.$get(args, options),
  )
}

export async function getClustersClusterIdTopicsTopicNamePartitionsDashReassignment(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions']['-']['reassignment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].partitions['-'].reassignment.$get(
      args,
      options,
    ),
  )
}

export async function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReassignment(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['reassignment']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].partitions[
      ':partition_id'
    ].reassignment.$get(args, options),
  )
}

export async function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicas(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].replicas.$get(
      args,
      options,
    ),
  )
}

export async function getClustersClusterIdTopicsTopicNamePartitionsPartitionIdReplicasBrokerId(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['partitions'][':partition_id']['replicas'][':broker_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].partitions[':partition_id'].replicas[
      ':broker_id'
    ].$get(args, options),
  )
}

export async function getClustersClusterIdTopicsDashConfigs(
  args: InferRequestType<(typeof client.clusters)[':cluster_id']['topics']['-']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.clusters[':cluster_id'].topics['-'].configs.$get(args, options))
}

export async function postClustersClusterIdTopicsTopicNameRecords(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name'].records.$post(args, options),
  )
}

export async function postClustersClusterIdTopicsTopicNameRecordsBatch(
  args: InferRequestType<
    (typeof client.clusters)[':cluster_id']['topics'][':topic_name']['records:batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.clusters[':cluster_id'].topics[':topic_name']['records:batch'].$post(args, options),
  )
}
