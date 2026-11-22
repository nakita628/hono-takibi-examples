import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postIdentitypoolsIdentityPoolIdBulkpublish(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['bulkpublish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].bulkpublish.$post(args, options),
  )
}

export async function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[':DatasetName'].$get(
      args,
      options,
    ),
  )
}

export async function postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
      ':DatasetName'
    ].$post(args, options),
  )
}

export async function deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetName(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
      ':DatasetName'
    ].$delete(args, options),
  )
}

export async function getIdentitypoolsIdentityPoolId(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identitypools[':IdentityPoolId'].$get(args, options))
}

export async function getIdentitypoolsIdentityPoolIdIdentitiesIdentityId(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identities[':IdentityId'].$get(args, options),
  )
}

export async function postIdentitypoolsIdentityPoolIdGetBulkPublishDetails(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['getBulkPublishDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].getBulkPublishDetails.$post(args, options),
  )
}

export async function getIdentitypoolsIdentityPoolIdEvents(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identitypools[':IdentityPoolId'].events.$get(args, options))
}

export async function postIdentitypoolsIdentityPoolIdEvents(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identitypools[':IdentityPoolId'].events.$post(args, options))
}

export async function getIdentitypoolsIdentityPoolIdConfiguration(
  args: InferRequestType<(typeof client.identitypools)[':IdentityPoolId']['configuration']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].configuration.$get(args, options),
  )
}

export async function postIdentitypoolsIdentityPoolIdConfiguration(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['configuration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].configuration.$post(args, options),
  )
}

export async function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasets(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets.$get(args, options),
  )
}

export async function getIdentitypools(
  args: InferRequestType<typeof client.identitypools.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identitypools.$get(args, options))
}

export async function getIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameRecords(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['records']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
      ':DatasetName'
    ].records.$get(args, options),
  )
}

export async function postIdentitypoolsIdentityPoolIdIdentityIdentityIdDevice(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identity'][':IdentityId']['device']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identity[':IdentityId'].device.$post(args, options),
  )
}

export async function postIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceId(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
      ':DatasetName'
    ].subscriptions[':DeviceId'].$post(args, options),
  )
}

export async function deleteIdentitypoolsIdentityPoolIdIdentitiesIdentityIdDatasetsDatasetNameSubscriptionsDeviceId(
  args: InferRequestType<
    (typeof client.identitypools)[':IdentityPoolId']['identities'][':IdentityId']['datasets'][':DatasetName']['subscriptions'][':DeviceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.identitypools[':IdentityPoolId'].identities[':IdentityId'].datasets[
      ':DatasetName'
    ].subscriptions[':DeviceId'].$delete(args, options),
  )
}
