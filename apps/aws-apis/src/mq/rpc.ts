import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Brokers(
  args: InferRequestType<typeof client.v1.brokers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers.$get(args, options))
}

export async function postV1Brokers(
  args: InferRequestType<typeof client.v1.brokers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers.$post(args, options))
}

export async function getV1Configurations(
  args: InferRequestType<typeof client.v1.configurations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations.$get(args, options))
}

export async function postV1Configurations(
  args: InferRequestType<typeof client.v1.configurations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations.$post(args, options))
}

export async function getV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resource-arn'].$get(args, options))
}

export async function postV1TagsResourceArn(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resource-arn'].$post(args, options))
}

export async function getV1BrokersBrokerIdUsersUsername(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers[':broker-id'].users[':username'].$get(args, options))
}

export async function putV1BrokersBrokerIdUsersUsername(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers[':broker-id'].users[':username'].$put(args, options))
}

export async function postV1BrokersBrokerIdUsersUsername(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.brokers[':broker-id'].users[':username'].$post(args, options),
  )
}

export async function deleteV1BrokersBrokerIdUsersUsername(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users'][':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.brokers[':broker-id'].users[':username'].$delete(args, options),
  )
}

export async function getV1BrokersBrokerId(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers[':broker-id'].$get(args, options))
}

export async function putV1BrokersBrokerId(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers[':broker-id'].$put(args, options))
}

export async function deleteV1BrokersBrokerId(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers[':broker-id'].$delete(args, options))
}

export async function deleteV1TagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.v1.tags)[':resource-arn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':resource-arn#tagKeys'].$delete(args, options))
}

export async function getV1BrokerEngineTypes(
  args: InferRequestType<(typeof client.v1)['broker-engine-types']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['broker-engine-types'].$get(args, options))
}

export async function getV1BrokerInstanceOptions(
  args: InferRequestType<(typeof client.v1)['broker-instance-options']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['broker-instance-options'].$get(args, options))
}

export async function getV1ConfigurationsConfigurationId(
  args: InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations[':configuration-id'].$get(args, options))
}

export async function putV1ConfigurationsConfigurationId(
  args: InferRequestType<(typeof client.v1.configurations)[':configuration-id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configurations[':configuration-id'].$put(args, options))
}

export async function getV1ConfigurationsConfigurationIdRevisionsConfigurationRevision(
  args: InferRequestType<
    (typeof client.v1.configurations)[':configuration-id']['revisions'][':configuration-revision']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.configurations[':configuration-id'].revisions[':configuration-revision'].$get(
      args,
      options,
    ),
  )
}

export async function getV1ConfigurationsConfigurationIdRevisions(
  args: InferRequestType<
    (typeof client.v1.configurations)[':configuration-id']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.configurations[':configuration-id'].revisions.$get(args, options),
  )
}

export async function getV1BrokersBrokerIdUsers(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers[':broker-id'].users.$get(args, options))
}

export async function postV1BrokersBrokerIdPromote(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['promote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers[':broker-id'].promote.$post(args, options))
}

export async function postV1BrokersBrokerIdReboot(
  args: InferRequestType<(typeof client.v1.brokers)[':broker-id']['reboot']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.brokers[':broker-id'].reboot.$post(args, options))
}
