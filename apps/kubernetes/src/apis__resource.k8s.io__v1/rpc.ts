import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisResourceK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['resource.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisResourceK8sIoV1Deviceclasses(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$get(args, options))
}

export async function postApisResourceK8sIoV1Deviceclasses(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$post(args, options))
}

export async function deleteApisResourceK8sIoV1Deviceclasses(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['deviceclasses']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['resource.k8s.io'].v1.deviceclasses.$delete(args, options))
}

export async function getApisResourceK8sIoV1DeviceclassesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$get(args, options),
  )
}

export async function putApisResourceK8sIoV1DeviceclassesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$put(args, options),
  )
}

export async function deleteApisResourceK8sIoV1DeviceclassesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$delete(args, options),
  )
}

export async function patchApisResourceK8sIoV1DeviceclassesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['deviceclasses'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.deviceclasses[':name'].$patch(args, options),
  )
}

export async function getApisResourceK8sIoV1Devicetaintrules(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['resource.k8s.io'].v1.devicetaintrules.$get(args, options))
}

export async function postApisResourceK8sIoV1Devicetaintrules(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules.$post(args, options),
  )
}

export async function deleteApisResourceK8sIoV1Devicetaintrules(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules.$delete(args, options),
  )
}

export async function getApisResourceK8sIoV1DevicetaintrulesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$get(args, options),
  )
}

export async function putApisResourceK8sIoV1DevicetaintrulesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$put(args, options),
  )
}

export async function deleteApisResourceK8sIoV1DevicetaintrulesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$delete(args, options),
  )
}

export async function patchApisResourceK8sIoV1DevicetaintrulesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].$patch(args, options),
  )
}

export async function getApisResourceK8sIoV1DevicetaintrulesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$get(args, options),
  )
}

export async function putApisResourceK8sIoV1DevicetaintrulesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$put(args, options),
  )
}

export async function patchApisResourceK8sIoV1DevicetaintrulesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['devicetaintrules'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.devicetaintrules[':name'].status.$patch(args, options),
  )
}

export async function getApisResourceK8sIoV1NamespacesNamespaceResourceclaims(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$get(args, options),
  )
}

export async function postApisResourceK8sIoV1NamespacesNamespaceResourceclaims(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$post(args, options),
  )
}

export async function deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaims(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims.$delete(
      args,
      options,
    ),
  )
}

export async function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaims'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaims[
      ':name'
    ].status.$patch(args, options),
  )
}

export async function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$get(
      args,
      options,
    ),
  )
}

export async function postApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplates(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates.$delete(
      args,
      options,
    ),
  )
}

export async function getApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
      ':name'
    ].$delete(args, options),
  )
}

export async function patchApisResourceK8sIoV1NamespacesNamespaceResourceclaimtemplatesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.namespaces[':namespace'].resourceclaimtemplates[
      ':name'
    ].$patch(args, options),
  )
}

export async function getApisResourceK8sIoV1Resourceclaims(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceclaims']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['resource.k8s.io'].v1.resourceclaims.$get(args, options))
}

export async function getApisResourceK8sIoV1Resourceclaimtemplates(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceclaimtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.resourceclaimtemplates.$get(args, options),
  )
}

export async function getApisResourceK8sIoV1Resourceslices(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['resource.k8s.io'].v1.resourceslices.$get(args, options))
}

export async function postApisResourceK8sIoV1Resourceslices(
  args: InferRequestType<(typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['resource.k8s.io'].v1.resourceslices.$post(args, options))
}

export async function deleteApisResourceK8sIoV1Resourceslices(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.resourceslices.$delete(args, options),
  )
}

export async function getApisResourceK8sIoV1ResourceslicesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.resourceslices[':name'].$get(args, options),
  )
}

export async function putApisResourceK8sIoV1ResourceslicesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.resourceslices[':name'].$put(args, options),
  )
}

export async function deleteApisResourceK8sIoV1ResourceslicesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.resourceslices[':name'].$delete(args, options),
  )
}

export async function patchApisResourceK8sIoV1ResourceslicesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['resourceslices'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.resourceslices[':name'].$patch(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchDeviceclasses(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.deviceclasses.$get(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchDeviceclassesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['deviceclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.deviceclasses[':name'].$get(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchDevicetaintrules(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.devicetaintrules.$get(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchDevicetaintrulesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['devicetaintrules'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.devicetaintrules[':name'].$get(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaims(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims.$get(
      args,
      options,
    ),
  )
}

export async function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimsName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaims'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaims[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplates(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaimtemplates.$get(
      args,
      options,
    ),
  )
}

export async function getApisResourceK8sIoV1WatchNamespacesNamespaceResourceclaimtemplatesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['namespaces'][':namespace']['resourceclaimtemplates'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.namespaces[':namespace'].resourceclaimtemplates[
      ':name'
    ].$get(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchResourceclaims(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaims']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.resourceclaims.$get(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchResourceclaimtemplates(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceclaimtemplates']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.resourceclaimtemplates.$get(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchResourceslices(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.resourceslices.$get(args, options),
  )
}

export async function getApisResourceK8sIoV1WatchResourceslicesName(
  args: InferRequestType<
    (typeof client.apis)['resource.k8s.io']['v1']['watch']['resourceslices'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['resource.k8s.io'].v1.watch.resourceslices[':name'].$get(args, options),
  )
}
