import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisRbacAuthorizationK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.index.$get(undefined, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1Clusterrolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$get(args, options),
  )
}

export async function postApisRbacAuthorizationK8sIoV1Clusterrolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$post(args, options),
  )
}

export async function deleteApisRbacAuthorizationK8sIoV1Clusterrolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings.$delete(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1ClusterrolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$get(args, options),
  )
}

export async function putApisRbacAuthorizationK8sIoV1ClusterrolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$put(args, options),
  )
}

export async function deleteApisRbacAuthorizationK8sIoV1ClusterrolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$delete(args, options),
  )
}

export async function patchApisRbacAuthorizationK8sIoV1ClusterrolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterrolebindings'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterrolebindings[':name'].$patch(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1Clusterroles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$get(args, options),
  )
}

export async function postApisRbacAuthorizationK8sIoV1Clusterroles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$post(args, options),
  )
}

export async function deleteApisRbacAuthorizationK8sIoV1Clusterroles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterroles.$delete(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1ClusterrolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$get(args, options),
  )
}

export async function putApisRbacAuthorizationK8sIoV1ClusterrolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$put(args, options),
  )
}

export async function deleteApisRbacAuthorizationK8sIoV1ClusterrolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$delete(args, options),
  )
}

export async function patchApisRbacAuthorizationK8sIoV1ClusterrolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['clusterroles'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.clusterroles[':name'].$patch(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$get(
      args,
      options,
    ),
  )
}

export async function postApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings.$delete(
      args,
      options,
    ),
  )
}

export async function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
      ':name'
    ].$delete(args, options),
  )
}

export async function patchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['rolebindings'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].rolebindings[
      ':name'
    ].$patch(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$get(args, options),
  )
}

export async function postApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$post(args, options),
  )
}

export async function deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRoles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles.$delete(
      args,
      options,
    ),
  )
}

export async function getApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisRbacAuthorizationK8sIoV1NamespacesNamespaceRolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['namespaces'][':namespace']['roles'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.namespaces[':namespace'].roles[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisRbacAuthorizationK8sIoV1Rolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['rolebindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.rolebindings.$get(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1Roles(
  args: InferRequestType<(typeof client.apis)['rbac.authorization.k8s.io']['v1']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['rbac.authorization.k8s.io'].v1.roles.$get(args, options))
}

export async function getApisRbacAuthorizationK8sIoV1WatchClusterrolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings.$get(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchClusterrolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterrolebindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.clusterrolebindings[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchClusterroles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles.$get(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchClusterrolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['clusterroles'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.clusterroles[':name'].$get(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].rolebindings.$get(
      args,
      options,
    ),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolebindingsName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['rolebindings'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].rolebindings[
      ':name'
    ].$get(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRoles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles.$get(
      args,
      options,
    ),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchNamespacesNamespaceRolesName(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['namespaces'][':namespace']['roles'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.namespaces[':namespace'].roles[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchRolebindings(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['rolebindings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.rolebindings.$get(args, options),
  )
}

export async function getApisRbacAuthorizationK8sIoV1WatchRoles(
  args: InferRequestType<
    (typeof client.apis)['rbac.authorization.k8s.io']['v1']['watch']['roles']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['rbac.authorization.k8s.io'].v1.watch.roles.$get(args, options),
  )
}
