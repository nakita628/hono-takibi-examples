import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postGraphql(
  args: InferRequestType<typeof client.graphql.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.graphql.$post(args, options))
}

export async function getOpenapiJson(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.json'].$get(undefined, options))
}

export async function getServiceCredentialTypes(
  args: InferRequestType<typeof client.service_credential_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_credential_types.$get(args, options))
}

export async function getServiceCredentialTypesId(
  args: InferRequestType<(typeof client.service_credential_types)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_credential_types[':id'].$get(args, options))
}

export async function getServiceCredentials(
  args: InferRequestType<typeof client.service_credentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_credentials.$get(args, options))
}

export async function getServiceCredentialsId(
  args: InferRequestType<(typeof client.service_credentials)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_credentials[':id'].$get(args, options))
}

export async function getServiceInstances(
  args: InferRequestType<typeof client.service_instances.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_instances.$get(args, options))
}

export async function getServiceInstancesId(
  args: InferRequestType<(typeof client.service_instances)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_instances[':id'].$get(args, options))
}

export async function getServiceInventories(
  args: InferRequestType<typeof client.service_inventories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_inventories.$get(args, options))
}

export async function getServiceInventoriesId(
  args: InferRequestType<(typeof client.service_inventories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_inventories[':id'].$get(args, options))
}

export async function postServiceInventoriesIdTag(
  args: InferRequestType<(typeof client.service_inventories)[':id']['tag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_inventories[':id'].tag.$post(args, options))
}

export async function getServiceInventoriesIdTags(
  args: InferRequestType<(typeof client.service_inventories)[':id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_inventories[':id'].tags.$get(args, options))
}

export async function postServiceInventoriesIdUntag(
  args: InferRequestType<(typeof client.service_inventories)[':id']['untag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_inventories[':id'].untag.$post(args, options))
}

export async function getServiceOfferingNodes(
  args: InferRequestType<typeof client.service_offering_nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_offering_nodes.$get(args, options))
}

export async function getServiceOfferingNodesId(
  args: InferRequestType<(typeof client.service_offering_nodes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_offering_nodes[':id'].$get(args, options))
}

export async function getServiceOfferings(
  args: InferRequestType<typeof client.service_offerings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_offerings.$get(args, options))
}

export async function getServiceOfferingsId(
  args: InferRequestType<(typeof client.service_offerings)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_offerings[':id'].$get(args, options))
}

export async function postServiceOfferingsIdAppliedInventoriesTags(
  args: InferRequestType<
    (typeof client.service_offerings)[':id']['applied_inventories_tags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.service_offerings[':id'].applied_inventories_tags.$post(args, options),
  )
}

export async function postServiceOfferingsIdOrder(
  args: InferRequestType<(typeof client.service_offerings)[':id']['order']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_offerings[':id'].order.$post(args, options))
}

export async function getServiceOfferingsIdServiceInstances(
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_offerings[':id'].service_instances.$get(args, options))
}

export async function getServiceOfferingsIdServiceOfferingNodes(
  args: InferRequestType<
    (typeof client.service_offerings)[':id']['service_offering_nodes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.service_offerings[':id'].service_offering_nodes.$get(args, options),
  )
}

export async function getServiceOfferingsIdServicePlans(
  args: InferRequestType<(typeof client.service_offerings)[':id']['service_plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_offerings[':id'].service_plans.$get(args, options))
}

export async function getServicePlans(
  args: InferRequestType<typeof client.service_plans.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_plans.$get(args, options))
}

export async function getServicePlansId(
  args: InferRequestType<(typeof client.service_plans)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_plans[':id'].$get(args, options))
}

export async function getSources(
  args: InferRequestType<typeof client.sources.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources.$get(args, options))
}

export async function getSourcesId(
  args: InferRequestType<(typeof client.sources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].$get(args, options))
}

export async function patchSourcesIdIncrementalRefresh(
  args: InferRequestType<(typeof client.sources)[':id']['incremental_refresh']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].incremental_refresh.$patch(args, options))
}

export async function patchSourcesIdRefresh(
  args: InferRequestType<(typeof client.sources)[':id']['refresh']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].refresh.$patch(args, options))
}

export async function getSourcesIdServiceInstances(
  args: InferRequestType<(typeof client.sources)[':id']['service_instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].service_instances.$get(args, options))
}

export async function getSourcesIdServiceInventories(
  args: InferRequestType<(typeof client.sources)[':id']['service_inventories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].service_inventories.$get(args, options))
}

export async function getSourcesIdServiceOfferingNodes(
  args: InferRequestType<(typeof client.sources)[':id']['service_offering_nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].service_offering_nodes.$get(args, options))
}

export async function getSourcesIdServiceOfferings(
  args: InferRequestType<(typeof client.sources)[':id']['service_offerings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].service_offerings.$get(args, options))
}

export async function getSourcesIdServicePlans(
  args: InferRequestType<(typeof client.sources)[':id']['service_plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].service_plans.$get(args, options))
}

export async function getSourcesIdTasks(
  args: InferRequestType<(typeof client.sources)[':id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sources[':id'].tasks.$get(args, options))
}

export async function getTags(
  args: InferRequestType<typeof client.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags.$get(args, options))
}

export async function getTasks(
  args: InferRequestType<typeof client.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$get(args, options))
}

export async function getTasksId(
  args: InferRequestType<(typeof client.tasks)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].$get(args, options))
}

export async function patchTasksId(
  args: InferRequestType<(typeof client.tasks)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':id'].$patch(args, options))
}
