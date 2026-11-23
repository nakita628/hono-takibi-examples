import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisAppsV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis.apps.v1.index.$get(undefined, options))
}

export async function getApisAppsV1Controllerrevisions(
  args: InferRequestType<typeof client.apis.apps.v1.controllerrevisions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.controllerrevisions.$get(args, options))
}

export async function getApisAppsV1Daemonsets(
  args: InferRequestType<typeof client.apis.apps.v1.daemonsets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.daemonsets.$get(args, options))
}

export async function getApisAppsV1Deployments(
  args: InferRequestType<typeof client.apis.apps.v1.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.deployments.$get(args, options))
}

export async function getApisAppsV1NamespacesNamespaceControllerrevisions(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$get(args, options),
  )
}

export async function postApisAppsV1NamespacesNamespaceControllerrevisions(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$post(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceControllerrevisions(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].controllerrevisions.$delete(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceControllerrevisionsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceControllerrevisionsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$put(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceControllerrevisionsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisAppsV1NamespacesNamespaceControllerrevisionsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['controllerrevisions'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].controllerrevisions[':name'].$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceDaemonsets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets.$get(args, options),
  )
}

export async function postApisAppsV1NamespacesNamespaceDaemonsets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets.$post(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceDaemonsets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets.$delete(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceDaemonsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceDaemonsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$put(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceDaemonsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$delete(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceDaemonsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceDaemonsetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceDaemonsetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$put(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceDaemonsetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['daemonsets'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].daemonsets[':name'].status.$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceDeployments(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments.$get(args, options),
  )
}

export async function postApisAppsV1NamespacesNamespaceDeployments(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments.$post(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceDeployments(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments.$delete(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$put(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$delete(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceDeploymentsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceDeploymentsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$put(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceDeploymentsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['scale']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].scale.$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceDeploymentsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceDeploymentsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$put(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceDeploymentsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['deployments'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].deployments[':name'].status.$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceReplicasets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets.$get(args, options),
  )
}

export async function postApisAppsV1NamespacesNamespaceReplicasets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets.$post(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceReplicasets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets.$delete(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceReplicasetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceReplicasetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$put(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceReplicasetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$delete(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceReplicasetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceReplicasetsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceReplicasetsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$put(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceReplicasetsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['scale']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].scale.$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceReplicasetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceReplicasetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$put(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceReplicasetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['replicasets'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].replicasets[':name'].status.$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceStatefulsets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets.$get(args, options),
  )
}

export async function postApisAppsV1NamespacesNamespaceStatefulsets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets.$post(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceStatefulsets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets.$delete(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceStatefulsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceStatefulsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$put(args, options),
  )
}

export async function deleteApisAppsV1NamespacesNamespaceStatefulsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$delete(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceStatefulsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceStatefulsetsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceStatefulsetsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$put(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceStatefulsetsNameScale(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['scale']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].scale.$patch(args, options),
  )
}

export async function getApisAppsV1NamespacesNamespaceStatefulsetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$get(args, options),
  )
}

export async function putApisAppsV1NamespacesNamespaceStatefulsetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$put(args, options),
  )
}

export async function patchApisAppsV1NamespacesNamespaceStatefulsetsNameStatus(
  args: InferRequestType<
    (typeof client.apis.apps.v1.namespaces)[':namespace']['statefulsets'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.namespaces[':namespace'].statefulsets[':name'].status.$patch(args, options),
  )
}

export async function getApisAppsV1Replicasets(
  args: InferRequestType<typeof client.apis.apps.v1.replicasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.replicasets.$get(args, options))
}

export async function getApisAppsV1Statefulsets(
  args: InferRequestType<typeof client.apis.apps.v1.statefulsets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.statefulsets.$get(args, options))
}

export async function getApisAppsV1WatchControllerrevisions(
  args: InferRequestType<typeof client.apis.apps.v1.watch.controllerrevisions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.watch.controllerrevisions.$get(args, options))
}

export async function getApisAppsV1WatchDaemonsets(
  args: InferRequestType<typeof client.apis.apps.v1.watch.daemonsets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.watch.daemonsets.$get(args, options))
}

export async function getApisAppsV1WatchDeployments(
  args: InferRequestType<typeof client.apis.apps.v1.watch.deployments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.watch.deployments.$get(args, options))
}

export async function getApisAppsV1WatchNamespacesNamespaceControllerrevisions(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions.$get(args, options),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceControllerrevisionsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['controllerrevisions'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].controllerrevisions[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceDaemonsets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets.$get(args, options),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceDaemonsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['daemonsets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].daemonsets[':name'].$get(args, options),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceDeployments(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].deployments.$get(args, options),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceDeploymentsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['deployments'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].deployments[':name'].$get(args, options),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceReplicasets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].replicasets.$get(args, options),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceReplicasetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['replicasets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].replicasets[':name'].$get(args, options),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceStatefulsets(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets.$get(args, options),
  )
}

export async function getApisAppsV1WatchNamespacesNamespaceStatefulsetsName(
  args: InferRequestType<
    (typeof client.apis.apps.v1.watch.namespaces)[':namespace']['statefulsets'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.apps.v1.watch.namespaces[':namespace'].statefulsets[':name'].$get(args, options),
  )
}

export async function getApisAppsV1WatchReplicasets(
  args: InferRequestType<typeof client.apis.apps.v1.watch.replicasets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.watch.replicasets.$get(args, options))
}

export async function getApisAppsV1WatchStatefulsets(
  args: InferRequestType<typeof client.apis.apps.v1.watch.statefulsets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis.apps.v1.watch.statefulsets.$get(args, options))
}
