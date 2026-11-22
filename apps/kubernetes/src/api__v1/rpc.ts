import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.api.v1.index.$get(undefined, options))
}

export async function getApiV1Componentstatuses(
  args: InferRequestType<typeof client.api.v1.componentstatuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.componentstatuses.$get(args, options))
}

export async function getApiV1ComponentstatusesName(
  args: InferRequestType<(typeof client.api.v1.componentstatuses)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.componentstatuses[':name'].$get(args, options))
}

export async function getApiV1Configmaps(
  args: InferRequestType<typeof client.api.v1.configmaps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.configmaps.$get(args, options))
}

export async function getApiV1Endpoints(
  args: InferRequestType<typeof client.api.v1.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.endpoints.$get(args, options))
}

export async function getApiV1Events(
  args: InferRequestType<typeof client.api.v1.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.events.$get(args, options))
}

export async function getApiV1Limitranges(
  args: InferRequestType<typeof client.api.v1.limitranges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.limitranges.$get(args, options))
}

export async function getApiV1Namespaces(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces.$get(args, options))
}

export async function postApiV1Namespaces(
  args: InferRequestType<typeof client.api.v1.namespaces.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces.$post(args, options))
}

export async function postApiV1NamespacesNamespaceBindings(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['bindings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].bindings.$post(args, options))
}

export async function getApiV1NamespacesNamespaceConfigmaps(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].configmaps.$get(args, options))
}

export async function postApiV1NamespacesNamespaceConfigmaps(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].configmaps.$post(args, options))
}

export async function deleteApiV1NamespacesNamespaceConfigmaps(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['configmaps']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].configmaps.$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespaceConfigmapsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].configmaps[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceConfigmapsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].configmaps[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceConfigmapsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].configmaps[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceConfigmapsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['configmaps'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].configmaps[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceEndpoints(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].endpoints.$get(args, options))
}

export async function postApiV1NamespacesNamespaceEndpoints(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].endpoints.$post(args, options))
}

export async function deleteApiV1NamespacesNamespaceEndpoints(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['endpoints']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].endpoints.$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespaceEndpointsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].endpoints[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceEndpointsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].endpoints[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceEndpointsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].endpoints[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceEndpointsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['endpoints'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].endpoints[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceEvents(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].events.$get(args, options))
}

export async function postApiV1NamespacesNamespaceEvents(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].events.$post(args, options))
}

export async function deleteApiV1NamespacesNamespaceEvents(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['events']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].events.$delete(args, options))
}

export async function getApiV1NamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].events[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].events[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].events[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['events'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].events[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceLimitranges(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].limitranges.$get(args, options))
}

export async function postApiV1NamespacesNamespaceLimitranges(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].limitranges.$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceLimitranges(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['limitranges']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].limitranges.$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespaceLimitrangesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].limitranges[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceLimitrangesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].limitranges[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceLimitrangesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].limitranges[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceLimitrangesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['limitranges'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].limitranges[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespacePersistentvolumeclaims(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespacePersistentvolumeclaims(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespacePersistentvolumeclaims(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims.$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespacePersistentvolumeclaimsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePersistentvolumeclaimsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespacePersistentvolumeclaimsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePersistentvolumeclaimsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApiV1NamespacesNamespacePersistentvolumeclaimsNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['persistentvolumeclaims'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].persistentvolumeclaims[':name'].status.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespacePods(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].pods.$get(args, options))
}

export async function postApiV1NamespacesNamespacePods(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].pods.$post(args, options))
}

export async function deleteApiV1NamespacesNamespacePods(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].pods.$delete(args, options))
}

export async function getApiV1NamespacesNamespacePodsName(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePodsName(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespacePodsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePodsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameAttach(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].attach.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespacePodsNameAttach(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['attach']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].attach.$post(args, options),
  )
}

export async function postApiV1NamespacesNamespacePodsNameBinding(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['binding']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].binding.$post(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameDynamic(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePodsNameDynamic(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$put(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePodsNameDynamic(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['dynamic']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].dynamic.$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameEphemeralcontainers(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePodsNameEphemeralcontainers(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$put(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePodsNameEphemeralcontainers(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['ephemeralcontainers']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].ephemeralcontainers.$patch(args, options),
  )
}

export async function postApiV1NamespacesNamespacePodsNameEviction(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['eviction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].eviction.$post(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameExec(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].exec.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespacePodsNameExec(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['exec']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].exec.$post(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameLog(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['log']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].log.$get(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNamePortforward(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespacePodsNamePortforward(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['portforward']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].portforward.$post(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePodsNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$put(args, options),
  )
}

export async function postApiV1NamespacesNamespacePodsNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespacePodsNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$delete(args, options),
  )
}

export async function optionsApiV1NamespacesNamespacePodsNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$options(args, options),
  )
}

export async function headApiV1NamespacesNamespacePodsNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$head(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePodsNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy.$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePodsNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$put(args, options),
  )
}

export async function postApiV1NamespacesNamespacePodsNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespacePodsNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$delete(args, options),
  )
}

export async function optionsApiV1NamespacesNamespacePodsNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$options(args, options),
  )
}

export async function headApiV1NamespacesNamespacePodsNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$head(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePodsNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['proxy'][':path']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].proxy[':path'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameResize(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].resize.$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePodsNameResize(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].resize.$put(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePodsNameResize(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['resize']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].resize.$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodsNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].status.$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePodsNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].status.$put(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePodsNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['pods'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].pods[':name'].status.$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodtemplates(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].podtemplates.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespacePodtemplates(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].podtemplates.$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespacePodtemplates(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].podtemplates.$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespacePodtemplatesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].podtemplates[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespacePodtemplatesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].podtemplates[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespacePodtemplatesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].podtemplates[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespacePodtemplatesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['podtemplates'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].podtemplates[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceReplicationcontrollers(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceReplicationcontrollers(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers.$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceReplicationcontrollers(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers.$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespaceReplicationcontrollersName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceReplicationcontrollersName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceReplicationcontrollersName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceReplicationcontrollersName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceReplicationcontrollersNameScale(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$get(
      args,
      options,
    ),
  )
}

export async function putApiV1NamespacesNamespaceReplicationcontrollersNameScale(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$put(
      args,
      options,
    ),
  )
}

export async function patchApiV1NamespacesNamespaceReplicationcontrollersNameScale(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['scale']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].scale.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespaceReplicationcontrollersNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApiV1NamespacesNamespaceReplicationcontrollersNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApiV1NamespacesNamespaceReplicationcontrollersNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['replicationcontrollers'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].replicationcontrollers[':name'].status.$patch(
      args,
      options,
    ),
  )
}

export async function getApiV1NamespacesNamespaceResourcequotas(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceResourcequotas(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas.$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceResourcequotas(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas.$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespaceResourcequotasName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceResourcequotasName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceResourcequotasName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceResourcequotasName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceResourcequotasNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceResourcequotasNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$put(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceResourcequotasNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['resourcequotas'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].resourcequotas[':name'].status.$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceSecrets(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].secrets.$get(args, options))
}

export async function postApiV1NamespacesNamespaceSecrets(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].secrets.$post(args, options))
}

export async function deleteApiV1NamespacesNamespaceSecrets(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['secrets']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].secrets.$delete(args, options))
}

export async function getApiV1NamespacesNamespaceSecretsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].secrets[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceSecretsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].secrets[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceSecretsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].secrets[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceSecretsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['secrets'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].secrets[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceServiceaccounts(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].serviceaccounts.$get(args, options),
  )
}

export async function postApiV1NamespacesNamespaceServiceaccounts(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].serviceaccounts.$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceServiceaccounts(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].serviceaccounts.$delete(args, options),
  )
}

export async function getApiV1NamespacesNamespaceServiceaccountsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceServiceaccountsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceServiceaccountsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceServiceaccountsName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].$patch(args, options),
  )
}

export async function postApiV1NamespacesNamespaceServiceaccountsNameToken(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['serviceaccounts'][':name']['token']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].serviceaccounts[':name'].token.$post(args, options),
  )
}

export async function getApiV1NamespacesNamespaceServices(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].services.$get(args, options))
}

export async function postApiV1NamespacesNamespaceServices(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].services.$post(args, options))
}

export async function deleteApiV1NamespacesNamespaceServices(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['services']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':namespace'].services.$delete(args, options))
}

export async function getApiV1NamespacesNamespaceServicesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceServicesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].$put(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceServicesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].$delete(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceServicesName(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceServicesNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy.$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceServicesNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy.$put(args, options),
  )
}

export async function postApiV1NamespacesNamespaceServicesNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy.$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceServicesNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy.$delete(args, options),
  )
}

export async function optionsApiV1NamespacesNamespaceServicesNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy.$options(args, options),
  )
}

export async function headApiV1NamespacesNamespaceServicesNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy.$head(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceServicesNameProxy(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy.$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceServicesNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceServicesNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$put(args, options),
  )
}

export async function postApiV1NamespacesNamespaceServicesNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$post(args, options),
  )
}

export async function deleteApiV1NamespacesNamespaceServicesNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$delete(args, options),
  )
}

export async function optionsApiV1NamespacesNamespaceServicesNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$options']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$options(args, options),
  )
}

export async function headApiV1NamespacesNamespaceServicesNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$head(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceServicesNameProxyPath(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['proxy'][':path']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].proxy[':path'].$patch(args, options),
  )
}

export async function getApiV1NamespacesNamespaceServicesNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].status.$get(args, options),
  )
}

export async function putApiV1NamespacesNamespaceServicesNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].status.$put(args, options),
  )
}

export async function patchApiV1NamespacesNamespaceServicesNameStatus(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['services'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.namespaces[':namespace'].services[':name'].status.$patch(args, options),
  )
}

export async function getApiV1NamespacesName(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':name'].$get(args, options))
}

export async function putApiV1NamespacesName(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':name'].$put(args, options))
}

export async function deleteApiV1NamespacesName(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':name'].$delete(args, options))
}

export async function patchApiV1NamespacesName(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':name'].$patch(args, options))
}

export async function putApiV1NamespacesNameFinalize(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['finalize']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':name'].finalize.$put(args, options))
}

export async function getApiV1NamespacesNameStatus(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':name'].status.$get(args, options))
}

export async function putApiV1NamespacesNameStatus(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':name'].status.$put(args, options))
}

export async function patchApiV1NamespacesNameStatus(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':name']['status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.namespaces[':name'].status.$patch(args, options))
}

export async function getApiV1Nodes(
  args: InferRequestType<typeof client.api.v1.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes.$get(args, options))
}

export async function postApiV1Nodes(
  args: InferRequestType<typeof client.api.v1.nodes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes.$post(args, options))
}

export async function deleteApiV1Nodes(
  args: InferRequestType<typeof client.api.v1.nodes.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes.$delete(args, options))
}

export async function getApiV1NodesName(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].$get(args, options))
}

export async function putApiV1NodesName(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].$put(args, options))
}

export async function deleteApiV1NodesName(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].$delete(args, options))
}

export async function patchApiV1NodesName(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].$patch(args, options))
}

export async function getApiV1NodesNameProxy(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy.$get(args, options))
}

export async function putApiV1NodesNameProxy(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy.$put(args, options))
}

export async function postApiV1NodesNameProxy(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy.$post(args, options))
}

export async function deleteApiV1NodesNameProxy(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy.$delete(args, options))
}

export async function optionsApiV1NodesNameProxy(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy.$options(args, options))
}

export async function headApiV1NodesNameProxy(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy.$head(args, options))
}

export async function patchApiV1NodesNameProxy(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy.$patch(args, options))
}

export async function getApiV1NodesNameProxyPath(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$get(args, options))
}

export async function putApiV1NodesNameProxyPath(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$put(args, options))
}

export async function postApiV1NodesNameProxyPath(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$post(args, options))
}

export async function deleteApiV1NodesNameProxyPath(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$delete(args, options))
}

export async function optionsApiV1NodesNameProxyPath(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$options']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$options(args, options))
}

export async function headApiV1NodesNameProxyPath(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$head(args, options))
}

export async function patchApiV1NodesNameProxyPath(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['proxy'][':path']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].proxy[':path'].$patch(args, options))
}

export async function getApiV1NodesNameStatus(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].status.$get(args, options))
}

export async function putApiV1NodesNameStatus(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].status.$put(args, options))
}

export async function patchApiV1NodesNameStatus(
  args: InferRequestType<(typeof client.api.v1.nodes)[':name']['status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.nodes[':name'].status.$patch(args, options))
}

export async function getApiV1Persistentvolumeclaims(
  args: InferRequestType<typeof client.api.v1.persistentvolumeclaims.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumeclaims.$get(args, options))
}

export async function getApiV1Persistentvolumes(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes.$get(args, options))
}

export async function postApiV1Persistentvolumes(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes.$post(args, options))
}

export async function deleteApiV1Persistentvolumes(
  args: InferRequestType<typeof client.api.v1.persistentvolumes.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes.$delete(args, options))
}

export async function getApiV1PersistentvolumesName(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes[':name'].$get(args, options))
}

export async function putApiV1PersistentvolumesName(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes[':name'].$put(args, options))
}

export async function deleteApiV1PersistentvolumesName(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes[':name'].$delete(args, options))
}

export async function patchApiV1PersistentvolumesName(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes[':name'].$patch(args, options))
}

export async function getApiV1PersistentvolumesNameStatus(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes[':name'].status.$get(args, options))
}

export async function putApiV1PersistentvolumesNameStatus(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes[':name'].status.$put(args, options))
}

export async function patchApiV1PersistentvolumesNameStatus(
  args: InferRequestType<(typeof client.api.v1.persistentvolumes)[':name']['status']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.persistentvolumes[':name'].status.$patch(args, options))
}

export async function getApiV1Pods(
  args: InferRequestType<typeof client.api.v1.pods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.pods.$get(args, options))
}

export async function getApiV1Podtemplates(
  args: InferRequestType<typeof client.api.v1.podtemplates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.podtemplates.$get(args, options))
}

export async function getApiV1Replicationcontrollers(
  args: InferRequestType<typeof client.api.v1.replicationcontrollers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.replicationcontrollers.$get(args, options))
}

export async function getApiV1Resourcequotas(
  args: InferRequestType<typeof client.api.v1.resourcequotas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.resourcequotas.$get(args, options))
}

export async function getApiV1Secrets(
  args: InferRequestType<typeof client.api.v1.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.secrets.$get(args, options))
}

export async function getApiV1Serviceaccounts(
  args: InferRequestType<typeof client.api.v1.serviceaccounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.serviceaccounts.$get(args, options))
}

export async function getApiV1Services(
  args: InferRequestType<typeof client.api.v1.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.services.$get(args, options))
}

export async function getApiV1WatchConfigmaps(
  args: InferRequestType<typeof client.api.v1.watch.configmaps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.configmaps.$get(args, options))
}

export async function getApiV1WatchEndpoints(
  args: InferRequestType<typeof client.api.v1.watch.endpoints.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.endpoints.$get(args, options))
}

export async function getApiV1WatchEvents(
  args: InferRequestType<typeof client.api.v1.watch.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.events.$get(args, options))
}

export async function getApiV1WatchLimitranges(
  args: InferRequestType<typeof client.api.v1.watch.limitranges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.limitranges.$get(args, options))
}

export async function getApiV1WatchNamespaces(
  args: InferRequestType<typeof client.api.v1.watch.namespaces.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.namespaces.$get(args, options))
}

export async function getApiV1WatchNamespacesNamespaceConfigmaps(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].configmaps.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceConfigmapsName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['configmaps'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].configmaps[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceEndpoints(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].endpoints.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceEndpointsName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['endpoints'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].endpoints[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceEvents(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].events.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceEventsName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['events'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].events[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceLimitranges(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].limitranges.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceLimitrangesName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['limitranges'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].limitranges[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespacePersistentvolumeclaims(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespacePersistentvolumeclaimsName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['persistentvolumeclaims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].persistentvolumeclaims[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV1WatchNamespacesNamespacePods(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['pods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.namespaces[':namespace'].pods.$get(args, options))
}

export async function getApiV1WatchNamespacesNamespacePodsName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['pods'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].pods[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespacePodtemplates(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].podtemplates.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespacePodtemplatesName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['podtemplates'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].podtemplates[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceReplicationcontrollers(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].replicationcontrollers.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceReplicationcontrollersName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['replicationcontrollers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].replicationcontrollers[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApiV1WatchNamespacesNamespaceResourcequotas(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].resourcequotas.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceResourcequotasName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['resourcequotas'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].resourcequotas[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceSecrets(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['secrets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].secrets.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceSecretsName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['secrets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].secrets[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceServiceaccounts(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].serviceaccounts.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceServiceaccountsName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['serviceaccounts'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].serviceaccounts[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceServices(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':namespace']['services']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].services.$get(args, options),
  )
}

export async function getApiV1WatchNamespacesNamespaceServicesName(
  args: InferRequestType<
    (typeof client.api.v1.watch.namespaces)[':namespace']['services'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.v1.watch.namespaces[':namespace'].services[':name'].$get(args, options),
  )
}

export async function getApiV1WatchNamespacesName(
  args: InferRequestType<(typeof client.api.v1.watch.namespaces)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.namespaces[':name'].$get(args, options))
}

export async function getApiV1WatchNodes(
  args: InferRequestType<typeof client.api.v1.watch.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.nodes.$get(args, options))
}

export async function getApiV1WatchNodesName(
  args: InferRequestType<(typeof client.api.v1.watch.nodes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.nodes[':name'].$get(args, options))
}

export async function getApiV1WatchPersistentvolumeclaims(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumeclaims.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.persistentvolumeclaims.$get(args, options))
}

export async function getApiV1WatchPersistentvolumes(
  args: InferRequestType<typeof client.api.v1.watch.persistentvolumes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.persistentvolumes.$get(args, options))
}

export async function getApiV1WatchPersistentvolumesName(
  args: InferRequestType<(typeof client.api.v1.watch.persistentvolumes)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.persistentvolumes[':name'].$get(args, options))
}

export async function getApiV1WatchPods(
  args: InferRequestType<typeof client.api.v1.watch.pods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.pods.$get(args, options))
}

export async function getApiV1WatchPodtemplates(
  args: InferRequestType<typeof client.api.v1.watch.podtemplates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.podtemplates.$get(args, options))
}

export async function getApiV1WatchReplicationcontrollers(
  args: InferRequestType<typeof client.api.v1.watch.replicationcontrollers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.replicationcontrollers.$get(args, options))
}

export async function getApiV1WatchResourcequotas(
  args: InferRequestType<typeof client.api.v1.watch.resourcequotas.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.resourcequotas.$get(args, options))
}

export async function getApiV1WatchSecrets(
  args: InferRequestType<typeof client.api.v1.watch.secrets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.secrets.$get(args, options))
}

export async function getApiV1WatchServiceaccounts(
  args: InferRequestType<typeof client.api.v1.watch.serviceaccounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.serviceaccounts.$get(args, options))
}

export async function getApiV1WatchServices(
  args: InferRequestType<typeof client.api.v1.watch.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.v1.watch.services.$get(args, options))
}
