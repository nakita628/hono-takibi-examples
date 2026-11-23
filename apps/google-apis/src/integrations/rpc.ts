import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1CallbackGenerateToken(
  args: InferRequestType<(typeof client.v1)['callback:generateToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['callback:generateToken'].$get(args, options))
}

export async function getV1ConnectorPlatformRegionsEnumerate(
  args: InferRequestType<(typeof client.v1)['connectorPlatformRegions:enumerate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['connectorPlatformRegions:enumerate'].$get(args, options))
}

export async function postV1IntegrationVersionTakeoverEditLock(
  args: InferRequestType<(typeof client.v1)[':integrationVersion:takeoverEditLock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':integrationVersion:takeoverEditLock'].$post(args, options))
}

export async function getV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$get(args, options))
}

export async function deleteV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$delete(args, options))
}

export async function patchV1Name(
  args: InferRequestType<(typeof client.v1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name'].$patch(args, options))
}

export async function postV1NameCancel(
  args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:cancel'].$post(args, options))
}

export async function getV1NameDownload(
  args: InferRequestType<(typeof client.v1)[':name:download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:download'].$get(args, options))
}

export async function postV1NameExecute(
  args: InferRequestType<(typeof client.v1)[':name:execute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:execute'].$post(args, options))
}

export async function postV1NameLift(
  args: InferRequestType<(typeof client.v1)[':name:lift']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:lift'].$post(args, options))
}

export async function postV1NamePublish(
  args: InferRequestType<(typeof client.v1)[':name:publish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:publish'].$post(args, options))
}

export async function postV1NameResolve(
  args: InferRequestType<(typeof client.v1)[':name:resolve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:resolve'].$post(args, options))
}

export async function postV1NameSchedule(
  args: InferRequestType<(typeof client.v1)[':name:schedule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:schedule'].$post(args, options))
}

export async function postV1NameTest(
  args: InferRequestType<(typeof client.v1)[':name:test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:test'].$post(args, options))
}

export async function postV1NameUnpublish(
  args: InferRequestType<(typeof client.v1)[':name:unpublish']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':name:unpublish'].$post(args, options))
}

export async function postV1ParentAppsScriptProjects(
  args: InferRequestType<(typeof client.v1)[':parent']['appsScriptProjects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].appsScriptProjects.$post(args, options))
}

export async function postV1ParentAppsScriptProjectsLink(
  args: InferRequestType<(typeof client.v1)[':parent']['appsScriptProjects:link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['appsScriptProjects:link'].$post(args, options))
}

export async function getV1ParentAuthConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['authConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].authConfigs.$get(args, options))
}

export async function postV1ParentAuthConfigs(
  args: InferRequestType<(typeof client.v1)[':parent']['authConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].authConfigs.$post(args, options))
}

export async function getV1ParentCertificates(
  args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificates.$get(args, options))
}

export async function postV1ParentCertificates(
  args: InferRequestType<(typeof client.v1)[':parent']['certificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].certificates.$post(args, options))
}

export async function getV1ParentClientmetadata(
  args: InferRequestType<(typeof client.v1)[':parent']['clientmetadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].clientmetadata.$get(args, options))
}

export async function getV1ParentClients(
  args: InferRequestType<(typeof client.v1)[':parent']['clients']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].clients.$get(args, options))
}

export async function postV1ParentClientsDeprovision(
  args: InferRequestType<(typeof client.v1)[':parent']['clients:deprovision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['clients:deprovision'].$post(args, options))
}

export async function postV1ParentClientsProvision(
  args: InferRequestType<(typeof client.v1)[':parent']['clients:provision']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['clients:provision'].$post(args, options))
}

export async function postV1ParentClientsSwitch(
  args: InferRequestType<(typeof client.v1)[':parent']['clients:switch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['clients:switch'].$post(args, options))
}

export async function postV1ParentCloudFunctions(
  args: InferRequestType<(typeof client.v1)[':parent']['cloudFunctions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].cloudFunctions.$post(args, options))
}

export async function getV1ParentConnections(
  args: InferRequestType<(typeof client.v1)[':parent']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].connections.$get(args, options))
}

export async function getV1ParentExecutions(
  args: InferRequestType<(typeof client.v1)[':parent']['executions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].executions.$get(args, options))
}

export async function getV1ParentIntegrations(
  args: InferRequestType<(typeof client.v1)[':parent']['integrations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].integrations.$get(args, options))
}

export async function getV1ParentRuntimeActionSchemas(
  args: InferRequestType<(typeof client.v1)[':parent']['runtimeActionSchemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].runtimeActionSchemas.$get(args, options))
}

export async function getV1ParentRuntimeEntitySchemas(
  args: InferRequestType<(typeof client.v1)[':parent']['runtimeEntitySchemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].runtimeEntitySchemas.$get(args, options))
}

export async function getV1ParentSfdcChannels(
  args: InferRequestType<(typeof client.v1)[':parent']['sfdcChannels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].sfdcChannels.$get(args, options))
}

export async function postV1ParentSfdcChannels(
  args: InferRequestType<(typeof client.v1)[':parent']['sfdcChannels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].sfdcChannels.$post(args, options))
}

export async function getV1ParentSfdcInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['sfdcInstances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].sfdcInstances.$get(args, options))
}

export async function postV1ParentSfdcInstances(
  args: InferRequestType<(typeof client.v1)[':parent']['sfdcInstances']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].sfdcInstances.$post(args, options))
}

export async function getV1ParentSuspensions(
  args: InferRequestType<(typeof client.v1)[':parent']['suspensions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].suspensions.$get(args, options))
}

export async function getV1ParentVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].versions.$get(args, options))
}

export async function postV1ParentVersions(
  args: InferRequestType<(typeof client.v1)[':parent']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent'].versions.$post(args, options))
}

export async function postV1ParentVersionsUpload(
  args: InferRequestType<(typeof client.v1)[':parent']['versions:upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1[':parent']['versions:upload'].$post(args, options))
}
