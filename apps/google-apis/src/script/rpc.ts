import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1Processes(
  args: InferRequestType<typeof client.v1.processes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.processes.$get(args, options))
}

export async function getV1ProcessesListScriptProcesses(
  args: InferRequestType<(typeof client.v1)['processes:listScriptProcesses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['processes:listScriptProcesses'].$get(args, options))
}

export async function postV1Projects(
  args: InferRequestType<typeof client.v1.projects.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects.$post(args, options))
}

export async function getV1ProjectsScriptId(
  args: InferRequestType<(typeof client.v1.projects)[':scriptId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':scriptId'].$get(args, options))
}

export async function getV1ProjectsScriptIdContent(
  args: InferRequestType<(typeof client.v1.projects)[':scriptId']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':scriptId'].content.$get(args, options))
}

export async function putV1ProjectsScriptIdContent(
  args: InferRequestType<(typeof client.v1.projects)[':scriptId']['content']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':scriptId'].content.$put(args, options))
}

export async function getV1ProjectsScriptIdDeployments(
  args: InferRequestType<(typeof client.v1.projects)[':scriptId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':scriptId'].deployments.$get(args, options))
}

export async function postV1ProjectsScriptIdDeployments(
  args: InferRequestType<(typeof client.v1.projects)[':scriptId']['deployments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':scriptId'].deployments.$post(args, options))
}

export async function getV1ProjectsScriptIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':scriptId'].deployments[':deploymentId'].$get(args, options),
  )
}

export async function putV1ProjectsScriptIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':scriptId'].deployments[':deploymentId'].$put(args, options),
  )
}

export async function deleteV1ProjectsScriptIdDeploymentsDeploymentId(
  args: InferRequestType<
    (typeof client.v1.projects)[':scriptId']['deployments'][':deploymentId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':scriptId'].deployments[':deploymentId'].$delete(args, options),
  )
}

export async function getV1ProjectsScriptIdMetrics(
  args: InferRequestType<(typeof client.v1.projects)[':scriptId']['metrics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':scriptId'].metrics.$get(args, options))
}

export async function getV1ProjectsScriptIdVersions(
  args: InferRequestType<(typeof client.v1.projects)[':scriptId']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':scriptId'].versions.$get(args, options))
}

export async function postV1ProjectsScriptIdVersions(
  args: InferRequestType<(typeof client.v1.projects)[':scriptId']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.projects[':scriptId'].versions.$post(args, options))
}

export async function getV1ProjectsScriptIdVersionsVersionNumber(
  args: InferRequestType<
    (typeof client.v1.projects)[':scriptId']['versions'][':versionNumber']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.projects[':scriptId'].versions[':versionNumber'].$get(args, options),
  )
}

export async function postV1ScriptsScriptIdRun(
  args: InferRequestType<(typeof client.v1.scripts)[':scriptId:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.scripts[':scriptId:run'].$post(args, options))
}
