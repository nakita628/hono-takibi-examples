import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getCaCertificates(
  args: InferRequestType<typeof client.ca_certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ca_certificates.$get(args, options))
}

export async function postCaCertificates(
  args: InferRequestType<typeof client.ca_certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ca_certificates.$post(args, options))
}

export async function getCaCertificatesCaCertificateId(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ca_certificates[':ca_certificate_id'].$get(args, options))
}

export async function putCaCertificatesCaCertificateId(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ca_certificates[':ca_certificate_id'].$put(args, options))
}

export async function deleteCaCertificatesCaCertificateId(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ca_certificates[':ca_certificate_id'].$delete(args, options))
}

export async function patchCaCertificatesCaCertificateId(
  args: InferRequestType<(typeof client.ca_certificates)[':ca_certificate_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ca_certificates[':ca_certificate_id'].$patch(args, options))
}

export async function getCertificates(
  args: InferRequestType<typeof client.certificates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates.$get(args, options))
}

export async function postCertificates(
  args: InferRequestType<typeof client.certificates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates.$post(args, options))
}

export async function getCertificatesCertificateId(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':certificate_id'].$get(args, options))
}

export async function putCertificatesCertificateId(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':certificate_id'].$put(args, options))
}

export async function deleteCertificatesCertificateId(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':certificate_id'].$delete(args, options))
}

export async function patchCertificatesCertificateId(
  args: InferRequestType<(typeof client.certificates)[':certificate_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.certificates[':certificate_id'].$patch(args, options))
}

export async function getCertificatesCertificateNameOrIdSnis(
  args: InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.certificates[':certificate_name_or_id'].snis.$get(args, options),
  )
}

export async function postCertificatesCertificateNameOrIdSnis(
  args: InferRequestType<(typeof client.certificates)[':certificate_name_or_id']['snis']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.certificates[':certificate_name_or_id'].snis.$post(args, options),
  )
}

export async function getCertificatesCertificateIdSnisSniNameOrId(
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.certificates[':certificate_id'].snis[':sni_name_or_id'].$get(args, options),
  )
}

export async function putCertificatesCertificateIdSnisSniNameOrId(
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.certificates[':certificate_id'].snis[':sni_name_or_id'].$put(args, options),
  )
}

export async function deleteCertificatesCertificateIdSnisSniNameOrId(
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.certificates[':certificate_id'].snis[':sni_name_or_id'].$delete(args, options),
  )
}

export async function patchCertificatesCertificateIdSnisSniNameOrId(
  args: InferRequestType<
    (typeof client.certificates)[':certificate_id']['snis'][':sni_name_or_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.certificates[':certificate_id'].snis[':sni_name_or_id'].$patch(args, options),
  )
}

export async function getConsumers(
  args: InferRequestType<typeof client.consumers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers.$get(args, options))
}

export async function postConsumers(
  args: InferRequestType<typeof client.consumers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers.$post(args, options))
}

export async function getConsumersConsumerUsernameOrId(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers[':consumer_username_or_id'].$get(args, options))
}

export async function putConsumersConsumerUsernameOrId(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers[':consumer_username_or_id'].$put(args, options))
}

export async function deleteConsumersConsumerUsernameOrId(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers[':consumer_username_or_id'].$delete(args, options))
}

export async function patchConsumersConsumerUsernameOrId(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.consumers[':consumer_username_or_id'].$patch(args, options))
}

export async function getConsumersConsumerUsernameOrIdPlugins(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':consumer_username_or_id'].plugins.$get(args, options),
  )
}

export async function postConsumersConsumerUsernameOrIdPlugins(
  args: InferRequestType<(typeof client.consumers)[':consumer_username_or_id']['plugins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':consumer_username_or_id'].plugins.$post(args, options),
  )
}

export async function getConsumersConsumerUsernameOrIdPluginsPluginId(
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$get(args, options),
  )
}

export async function putConsumersConsumerUsernameOrIdPluginsPluginId(
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$put(args, options),
  )
}

export async function deleteConsumersConsumerUsernameOrIdPluginsPluginId(
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$delete(args, options),
  )
}

export async function patchConsumersConsumerUsernameOrIdPluginsPluginId(
  args: InferRequestType<
    (typeof client.consumers)[':consumer_username_or_id']['plugins'][':plugin_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.consumers[':consumer_username_or_id'].plugins[':plugin_id'].$patch(args, options),
  )
}

export async function getKeySets(
  args: InferRequestType<(typeof client)['key-sets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-sets'].$get(args, options))
}

export async function postKeySets(
  args: InferRequestType<(typeof client)['key-sets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-sets'].$post(args, options))
}

export async function getKeySetsKeySetIdOrName(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-sets'][':key-set_id_or_name'].$get(args, options))
}

export async function putKeySetsKeySetIdOrName(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-sets'][':key-set_id_or_name'].$put(args, options))
}

export async function deleteKeySetsKeySetIdOrName(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-sets'][':key-set_id_or_name'].$delete(args, options))
}

export async function patchKeySetsKeySetIdOrName(
  args: InferRequestType<(typeof client)['key-sets'][':key-set_id_or_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['key-sets'][':key-set_id_or_name'].$patch(args, options))
}

export async function getKeys(
  args: InferRequestType<typeof client.keys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.$get(args, options))
}

export async function postKeys(
  args: InferRequestType<typeof client.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys.$post(args, options))
}

export async function getKeysKeyIdOrName(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key_id_or_name'].$get(args, options))
}

export async function putKeysKeyIdOrName(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key_id_or_name'].$put(args, options))
}

export async function deleteKeysKeyIdOrName(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key_id_or_name'].$delete(args, options))
}

export async function patchKeysKeyIdOrName(
  args: InferRequestType<(typeof client.keys)[':key_id_or_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keys[':key_id_or_name'].$patch(args, options))
}

export async function getPlugins(
  args: InferRequestType<typeof client.plugins.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins.$get(args, options))
}

export async function postPlugins(
  args: InferRequestType<typeof client.plugins.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins.$post(args, options))
}

export async function getPluginsPluginId(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':plugin_id'].$get(args, options))
}

export async function putPluginsPluginId(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':plugin_id'].$put(args, options))
}

export async function deletePluginsPluginId(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':plugin_id'].$delete(args, options))
}

export async function patchPluginsPluginId(
  args: InferRequestType<(typeof client.plugins)[':plugin_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plugins[':plugin_id'].$patch(args, options))
}

export async function getRoutes(
  args: InferRequestType<typeof client.routes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.$get(args, options))
}

export async function postRoutes(
  args: InferRequestType<typeof client.routes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes.$post(args, options))
}

export async function getRoutesRouteIdOrName(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':route_id_or_name'].$get(args, options))
}

export async function putRoutesRouteIdOrName(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':route_id_or_name'].$put(args, options))
}

export async function deleteRoutesRouteIdOrName(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':route_id_or_name'].$delete(args, options))
}

export async function patchRoutesRouteIdOrName(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':route_id_or_name'].$patch(args, options))
}

export async function getRoutesRouteIdOrNamePlugins(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':route_id_or_name'].plugins.$get(args, options))
}

export async function postRoutesRouteIdOrNamePlugins(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['plugins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.routes[':route_id_or_name'].plugins.$post(args, options))
}

export async function getRoutesRouteIdOrNamePluginsPluginId(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name'].plugins[':plugin_id'].$get(args, options),
  )
}

export async function putRoutesRouteIdOrNamePluginsPluginId(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name'].plugins[':plugin_id'].$put(args, options),
  )
}

export async function deleteRoutesRouteIdOrNamePluginsPluginId(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name'].plugins[':plugin_id'].$delete(args, options),
  )
}

export async function patchRoutesRouteIdOrNamePluginsPluginId(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['plugins'][':plugin_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name'].plugins[':plugin_id'].$patch(args, options),
  )
}

export async function getServices(
  args: InferRequestType<typeof client.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$get(args, options))
}

export async function postServices(
  args: InferRequestType<typeof client.services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.$post(args, options))
}

export async function getServicesServiceIdOrName(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':service_id_or_name'].$get(args, options))
}

export async function putServicesServiceIdOrName(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':service_id_or_name'].$put(args, options))
}

export async function deleteServicesServiceIdOrName(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':service_id_or_name'].$delete(args, options))
}

export async function patchServicesServiceIdOrName(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':service_id_or_name'].$patch(args, options))
}

export async function getServicesServiceIdOrNamePlugins(
  args: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':service_id_or_nameplugins'].$get(args, options))
}

export async function postServicesServiceIdOrNamePlugins(
  args: InferRequestType<(typeof client.services)[':service_id_or_nameplugins']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':service_id_or_nameplugins'].$post(args, options))
}

export async function getServicesServiceIdOrNamePluginsPluginId(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name'].plugins[':plugin_id'].$get(args, options),
  )
}

export async function putServicesServiceIdOrNamePluginsPluginId(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name'].plugins[':plugin_id'].$put(args, options),
  )
}

export async function deleteServicesServiceIdOrNamePluginsPluginId(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name'].plugins[':plugin_id'].$delete(args, options),
  )
}

export async function patchServicesServiceIdOrNamePluginsPluginId(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['plugins'][':plugin_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name'].plugins[':plugin_id'].$patch(args, options),
  )
}

export async function getServicesServiceIdOrNameRoutes(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':service_id_or_name'].routes.$get(args, options))
}

export async function postServicesServiceIdOrNameRoutes(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['routes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services[':service_id_or_name'].routes.$post(args, options))
}

export async function getServicesServiceIdOrNameRoutesRouteIdOrName(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name'].routes[':route_id_or_name'].$get(args, options),
  )
}

export async function putServicesServiceIdOrNameRoutesRouteIdOrName(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name'].routes[':route_id_or_name'].$put(args, options),
  )
}

export async function deleteServicesServiceIdOrNameRoutesRouteIdOrName(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name'].routes[':route_id_or_name'].$delete(args, options),
  )
}

export async function patchServicesServiceIdOrNameRoutesRouteIdOrName(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['routes'][':route_id_or_name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name'].routes[':route_id_or_name'].$patch(args, options),
  )
}

export async function getSnis(
  args: InferRequestType<typeof client.snis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snis.$get(args, options))
}

export async function postSnis(
  args: InferRequestType<typeof client.snis.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snis.$post(args, options))
}

export async function getSnisSniNameOrId(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snis[':sni_name_or_id'].$get(args, options))
}

export async function putSnisSniNameOrId(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snis[':sni_name_or_id'].$put(args, options))
}

export async function deleteSnisSniNameOrId(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snis[':sni_name_or_id'].$delete(args, options))
}

export async function patchSnisSniNameOrId(
  args: InferRequestType<(typeof client.snis)[':sni_name_or_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snis[':sni_name_or_id'].$patch(args, options))
}

export async function getUpstreams(
  args: InferRequestType<typeof client.upstreams.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upstreams.$get(args, options))
}

export async function postUpstreams(
  args: InferRequestType<typeof client.upstreams.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upstreams.$post(args, options))
}

export async function getUpstreamsUpstreamIdOrName(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upstreams[':upstream_id_or_name'].$get(args, options))
}

export async function putUpstreamsUpstreamIdOrName(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upstreams[':upstream_id_or_name'].$put(args, options))
}

export async function deleteUpstreamsUpstreamIdOrName(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upstreams[':upstream_id_or_name'].$delete(args, options))
}

export async function patchUpstreamsUpstreamIdOrName(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upstreams[':upstream_id_or_name'].$patch(args, options))
}

export async function getUpstreamsUpstreamIdOrNameTargets(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upstreams[':upstream_id_or_name'].targets.$get(args, options))
}

export async function postUpstreamsUpstreamIdOrNameTargets(
  args: InferRequestType<(typeof client.upstreams)[':upstream_id_or_name']['targets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.upstreams[':upstream_id_or_name'].targets.$post(args, options))
}

export async function getUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget(
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$get(args, options),
  )
}

export async function putUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget(
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$put(args, options),
  )
}

export async function deleteUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget(
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$delete(args, options),
  )
}

export async function patchUpstreamsUpstreamIdOrNameTargetsTargetIdOrTarget(
  args: InferRequestType<
    (typeof client.upstreams)[':upstream_id_or_name']['targets'][':target_id_or_target']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.upstreams[':upstream_id_or_name'].targets[':target_id_or_target'].$patch(args, options),
  )
}

export async function getVaults(
  args: InferRequestType<typeof client.vaults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults.$get(args, options))
}

export async function postVaults(
  args: InferRequestType<typeof client.vaults.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults.$post(args, options))
}

export async function getVaultsVaultIdOrPrefix(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id_or_prefix'].$get(args, options))
}

export async function putVaultsVaultIdOrPrefix(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id_or_prefix'].$put(args, options))
}

export async function deleteVaultsVaultIdOrPrefix(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id_or_prefix'].$delete(args, options))
}

export async function patchVaultsVaultIdOrPrefix(
  args: InferRequestType<(typeof client.vaults)[':vault_id_or_prefix']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vaults[':vault_id_or_prefix'].$patch(args, options))
}

export async function getEndpoints(options?: ClientRequestOptions) {
  return await parseResponse(client.endpoints.$get(undefined, options))
}

export async function optionsEndpoint(
  args: InferRequestType<(typeof client)[':endpoint']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':endpoint'].$options(args, options))
}

export async function headEndpoint(
  args: InferRequestType<(typeof client)[':endpoint']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':endpoint'].$head(args, options))
}

export async function getSchemasEntity(
  args: InferRequestType<(typeof client.schemas)[':entity']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas[':entity'].$get(args, options))
}

export async function postSchemasEntityValidate(
  args: InferRequestType<(typeof client.schemas)[':entity']['validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas[':entity'].validate.$post(args, options))
}

export async function getSchemasFiltersFilterName(
  args: InferRequestType<(typeof client.schemas.filters)[':filter_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas.filters[':filter_name'].$get(args, options))
}

export async function getSchemasPluginsPluginName(
  args: InferRequestType<(typeof client.schemas.plugins)[':plugin_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas.plugins[':plugin_name'].$get(args, options))
}

export async function postSchemasPluginsValidate(options?: ClientRequestOptions) {
  return await parseResponse(client.schemas.plugins.validate.$post(undefined, options))
}

export async function getTimers(options?: ClientRequestOptions) {
  return await parseResponse(client.timers.$get(undefined, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getStatusDns(options?: ClientRequestOptions) {
  return await parseResponse(client.status.dns.$get(undefined, options))
}

export async function getTags(options?: ClientRequestOptions) {
  return await parseResponse(client.tags.$get(undefined, options))
}

export async function getTagsTags(
  args: InferRequestType<(typeof client.tags)[':tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':tags'].$get(args, options))
}

export async function putDebugClusterControlPlanesNodesLogLevelLogLevel(
  args: InferRequestType<
    (typeof client.debug.cluster)['control-planes-nodes']['log-level'][':log_level']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.debug.cluster['control-planes-nodes']['log-level'][':log_level'].$put(args, options),
  )
}

export async function putDebugClusterLogLevelLogLevel(
  args: InferRequestType<(typeof client.debug.cluster)['log-level'][':log_level']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.cluster['log-level'][':log_level'].$put(args, options))
}

export async function getDebugNodeLogLevel(options?: ClientRequestOptions) {
  return await parseResponse(client.debug.node['log-level'].$get(undefined, options))
}

export async function putDebugNodeLogLevelLogLevel(
  args: InferRequestType<(typeof client.debug.node)['log-level'][':log_level']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug.node['log-level'][':log_level'].$put(args, options))
}

export async function getSchemasVaultsVaultName(
  args: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas.vaults[':vault_name'].$get(args, options))
}

export async function postSchemasVaultsVaultName(
  args: InferRequestType<(typeof client.schemas.vaults)[':vault_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schemas.vaults[':vault_name'].$post(args, options))
}

export async function getFilterChains(options?: ClientRequestOptions) {
  return await parseResponse(client['filter-chains'].$get(undefined, options))
}

export async function postFilterChains(
  args: InferRequestType<(typeof client)['filter-chains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['filter-chains'].$post(args, options))
}

export async function getRoutesRouteIdOrNameFilterChains(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name']['filter-chains'].$get(args, options),
  )
}

export async function postRoutesRouteIdOrNameFilterChains(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name']['filter-chains'].$post(args, options),
  )
}

export async function patchRoutesRouteIdOrNameFilterChains(
  args: InferRequestType<(typeof client.routes)[':route_id_or_name']['filter-chains']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name']['filter-chains'].$patch(args, options),
  )
}

export async function getServicesServiceIdOrNameFilterChains(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name']['filter-chains'].$get(args, options),
  )
}

export async function postServicesServiceIdOrNameFilterChains(
  args: InferRequestType<(typeof client.services)[':service_id_or_name']['filter-chains']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name']['filter-chains'].$post(args, options),
  )
}

export async function getFilterChainsFilterChainId(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['filter-chains'][':filter_chain_id'].$get(args, options))
}

export async function putFilterChainsFilterChainId(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['filter-chains'][':filter_chain_id'].$put(args, options))
}

export async function deleteFilterChainsFilterChainId(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['filter-chains'][':filter_chain_id'].$delete(args, options))
}

export async function patchFilterChainsFilterChainId(
  args: InferRequestType<(typeof client)['filter-chains'][':filter_chain_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['filter-chains'][':filter_chain_id'].$patch(args, options))
}

export async function getRoutesRouteIdOrNameFilterChainsFilterChainId(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$get(args, options),
  )
}

export async function putRoutesRouteIdOrNameFilterChainsFilterChainId(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name']['filter-chains'][':filter_chain_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name']['filter-chains'][':filter_chain_id'].$put(args, options),
  )
}

export async function deleteRoutesRouteIdOrNameFilterChainId(
  args: InferRequestType<
    (typeof client.routes)[':route_id_or_name'][':filter_chain_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.routes[':route_id_or_name'][':filter_chain_id'].$delete(args, options),
  )
}

export async function deleteServicesServiceIdOrNameFilterChainsFilterChainId(
  args: InferRequestType<
    (typeof client.services)[':service_id_or_name']['filter-chains'][':filter_chain_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.services[':service_id_or_name']['filter-chains'][':filter_chain_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getClusteringDataPlanes(options?: ClientRequestOptions) {
  return await parseResponse(client.clustering['data-planes'].$get(undefined, options))
}

export async function getClusteringStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.clustering.status.$get(undefined, options))
}

export async function getCacheKey(
  args: InferRequestType<(typeof client.cache)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache[':key'].$get(args, options))
}

export async function deleteCacheKey(
  args: InferRequestType<(typeof client.cache)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cache[':key'].$delete(args, options))
}

export async function deleteCache(options?: ClientRequestOptions) {
  return await parseResponse(client.cache.$delete(undefined, options))
}

export async function getConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$get(undefined, options))
}

export async function postConfig(
  args: InferRequestType<typeof client.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.$post(args, options))
}
