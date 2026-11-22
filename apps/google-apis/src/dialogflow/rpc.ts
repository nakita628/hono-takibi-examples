import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV3beta1AgentTestCasesCalculateCoverage(
  args: InferRequestType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3beta1[':agent']['testCases:calculateCoverage'].$get(args, options),
  )
}

export async function postV3beta1BaseVersionCompareVersions(
  args: InferRequestType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':baseVersion:compareVersions'].$post(args, options))
}

export async function postV3beta1EnvironmentDeployFlow(
  args: InferRequestType<(typeof client.v3beta1)[':environment:deployFlow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':environment:deployFlow'].$post(args, options))
}

export async function postV3beta1EnvironmentRunContinuousTest(
  args: InferRequestType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':environment:runContinuousTest'].$post(args, options))
}

export async function getV3beta1Name(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].$get(args, options))
}

export async function deleteV3beta1Name(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].$delete(args, options))
}

export async function patchV3beta1Name(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].$patch(args, options))
}

export async function getV3beta1NameLocations(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].locations.$get(args, options))
}

export async function getV3beta1NameOperations(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name'].operations.$get(args, options))
}

export async function postV3beta1NameCancel(
  args: InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:cancel'].$post(args, options))
}

export async function postV3beta1NameExport(
  args: InferRequestType<(typeof client.v3beta1)[':name:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:export'].$post(args, options))
}

export async function postV3beta1NameLoad(
  args: InferRequestType<(typeof client.v3beta1)[':name:load']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:load'].$post(args, options))
}

export async function getV3beta1NameLookupEnvironmentHistory(
  args: InferRequestType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:lookupEnvironmentHistory'].$get(args, options))
}

export async function postV3beta1NameRestore(
  args: InferRequestType<(typeof client.v3beta1)[':name:restore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:restore'].$post(args, options))
}

export async function postV3beta1NameRun(
  args: InferRequestType<(typeof client.v3beta1)[':name:run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:run'].$post(args, options))
}

export async function postV3beta1NameStart(
  args: InferRequestType<(typeof client.v3beta1)[':name:start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:start'].$post(args, options))
}

export async function postV3beta1NameStop(
  args: InferRequestType<(typeof client.v3beta1)[':name:stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:stop'].$post(args, options))
}

export async function postV3beta1NameTrain(
  args: InferRequestType<(typeof client.v3beta1)[':name:train']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:train'].$post(args, options))
}

export async function postV3beta1NameValidate(
  args: InferRequestType<(typeof client.v3beta1)[':name:validate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':name:validate'].$post(args, options))
}

export async function getV3beta1ParentAgents(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].agents.$get(args, options))
}

export async function postV3beta1ParentAgents(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].agents.$post(args, options))
}

export async function getV3beta1ParentChangelogs(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].changelogs.$get(args, options))
}

export async function getV3beta1ParentContinuousTestResults(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].continuousTestResults.$get(args, options))
}

export async function getV3beta1ParentDeployments(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].deployments.$get(args, options))
}

export async function getV3beta1ParentEntityTypes(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].entityTypes.$get(args, options))
}

export async function postV3beta1ParentEntityTypes(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].entityTypes.$post(args, options))
}

export async function getV3beta1ParentEnvironments(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].environments.$get(args, options))
}

export async function postV3beta1ParentEnvironments(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].environments.$post(args, options))
}

export async function getV3beta1ParentExperiments(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].experiments.$get(args, options))
}

export async function postV3beta1ParentExperiments(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].experiments.$post(args, options))
}

export async function getV3beta1ParentFlows(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].flows.$get(args, options))
}

export async function postV3beta1ParentFlows(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].flows.$post(args, options))
}

export async function postV3beta1ParentFlowsImport(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['flows:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent']['flows:import'].$post(args, options))
}

export async function getV3beta1ParentIntents(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].intents.$get(args, options))
}

export async function postV3beta1ParentIntents(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].intents.$post(args, options))
}

export async function getV3beta1ParentPages(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].pages.$get(args, options))
}

export async function postV3beta1ParentPages(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].pages.$post(args, options))
}

export async function getV3beta1ParentResults(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['results']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].results.$get(args, options))
}

export async function getV3beta1ParentSecuritySettings(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].securitySettings.$get(args, options))
}

export async function postV3beta1ParentSecuritySettings(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].securitySettings.$post(args, options))
}

export async function getV3beta1ParentTestCases(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].testCases.$get(args, options))
}

export async function postV3beta1ParentTestCases(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].testCases.$post(args, options))
}

export async function postV3beta1ParentTestCasesBatchDelete(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v3beta1[':parent']['testCases:batchDelete'].$post(args, options),
  )
}

export async function postV3beta1ParentTestCasesBatchRun(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent']['testCases:batchRun'].$post(args, options))
}

export async function postV3beta1ParentTestCasesExport(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent']['testCases:export'].$post(args, options))
}

export async function postV3beta1ParentTestCasesImport(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent']['testCases:import'].$post(args, options))
}

export async function getV3beta1ParentTransitionRouteGroups(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].transitionRouteGroups.$get(args, options))
}

export async function postV3beta1ParentTransitionRouteGroups(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].transitionRouteGroups.$post(args, options))
}

export async function getV3beta1ParentVersions(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].versions.$get(args, options))
}

export async function postV3beta1ParentVersions(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].versions.$post(args, options))
}

export async function getV3beta1ParentWebhooks(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].webhooks.$get(args, options))
}

export async function postV3beta1ParentWebhooks(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':parent'].webhooks.$post(args, options))
}

export async function postV3beta1SessionDetectIntent(
  args: InferRequestType<(typeof client.v3beta1)[':session:detectIntent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':session:detectIntent'].$post(args, options))
}

export async function postV3beta1SessionFulfillIntent(
  args: InferRequestType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':session:fulfillIntent'].$post(args, options))
}

export async function postV3beta1SessionMatchIntent(
  args: InferRequestType<(typeof client.v3beta1)[':session:matchIntent']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v3beta1[':session:matchIntent'].$post(args, options))
}
