import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postConsumersGroupid(
  args: InferRequestType<(typeof client.consumers)[':groupid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers[':groupid'].$post(args, options))
}

export async function postConsumersGroupidInstancesNamePositionsBeginning(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['positions']['beginning']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].positions.beginning.$post(args, options),
  )
}

export async function postConsumersGroupidInstancesNamePositionsEnd(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['positions']['end']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].positions.end.$post(args, options),
  )
}

export async function getConsumersGroupidInstancesNameSubscription(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].subscription.$get(args, options),
  )
}

export async function postConsumersGroupidInstancesNameSubscription(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].subscription.$post(args, options),
  )
}

export async function deleteConsumersGroupidInstancesNameSubscription(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['subscription']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].subscription.$delete(args, options),
  )
}

export async function postConsumersGroupidInstancesNamePositions(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['positions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].positions.$post(args, options),
  )
}

export async function postConsumersGroupidInstancesNameAssignments(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['assignments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].assignments.$post(args, options),
  )
}

export async function getTopics(options?: ClientRequestOptions) {
  return await parseResponse(client.topics.$get(undefined, options))
}

export async function getTopicsTopicname(
  args: InferRequestType<(typeof client.topics)[':topicname']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics[':topicname'].$get(args, options))
}

export async function postTopicsTopicname(
  args: InferRequestType<(typeof client.topics)[':topicname']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics[':topicname'].$post(args, options))
}

export async function postAdminTopics(
  args: InferRequestType<typeof client.admin.topics.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.topics.$post(args, options))
}

export async function getConsumersGroupidInstancesNameRecords(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].records.$get(args, options),
  )
}

export async function getTopicsTopicnamePartitions(
  args: InferRequestType<(typeof client.topics)[':topicname']['partitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topics[':topicname'].partitions.$get(args, options))
}

export async function getTopicsTopicnamePartitionsPartitionid(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.topics[':topicname'].partitions[':partitionid'].$get(args, options),
  )
}

export async function postTopicsTopicnamePartitionsPartitionid(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.topics[':topicname'].partitions[':partitionid'].$post(args, options),
  )
}

export async function getTopicsTopicnamePartitionsPartitionidOffsets(
  args: InferRequestType<
    (typeof client.topics)[':topicname']['partitions'][':partitionid']['offsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.topics[':topicname'].partitions[':partitionid'].offsets.$get(args, options),
  )
}

export async function deleteConsumersGroupidInstancesName(
  args: InferRequestType<(typeof client.consumers)[':groupid']['instances'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers[':groupid'].instances[':name'].$delete(args, options))
}

export async function postConsumersGroupidInstancesNameOffsets(
  args: InferRequestType<
    (typeof client.consumers)[':groupid']['instances'][':name']['offsets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':groupid'].instances[':name'].offsets.$post(args, options),
  )
}

export async function getHealthy(options?: ClientRequestOptions) {
  return await parseResponse(client.healthy.$get(undefined, options))
}

export async function getReady(options?: ClientRequestOptions) {
  return await parseResponse(client.ready.$get(undefined, options))
}

export async function getOpenapi(options?: ClientRequestOptions) {
  return await parseResponse(client.openapi.$get(undefined, options))
}

export async function getOpenapiV3(options?: ClientRequestOptions) {
  return await parseResponse(client.openapi.v3.$get(undefined, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}
