import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$get(args, options))
}

export async function deleteV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$delete(args, options))
}

export async function patchV1beta1Name(
  args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].$patch(args, options))
}

export async function getV1beta1NameLocations(
  args: InferRequestType<(typeof client.v1beta1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name'].locations.$get(args, options))
}

export async function postV1beta1NameCancel(
  args: InferRequestType<(typeof client.v1beta1)[':name:cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:cancel'].$post(args, options))
}

export async function postV1beta1NameCommit(
  args: InferRequestType<(typeof client.v1beta1)[':name:commit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:commit'].$post(args, options))
}

export async function getV1beta1NameFetchFileGitStatuses(
  args: InferRequestType<(typeof client.v1beta1)[':name:fetchFileGitStatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:fetchFileGitStatuses'].$get(args, options))
}

export async function getV1beta1NameFetchGitAheadBehind(
  args: InferRequestType<(typeof client.v1beta1)[':name:fetchGitAheadBehind']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:fetchGitAheadBehind'].$get(args, options))
}

export async function getV1beta1NameFetchRemoteBranches(
  args: InferRequestType<(typeof client.v1beta1)[':name:fetchRemoteBranches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:fetchRemoteBranches'].$get(args, options))
}

export async function postV1beta1NamePull(
  args: InferRequestType<(typeof client.v1beta1)[':name:pull']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:pull'].$post(args, options))
}

export async function postV1beta1NamePush(
  args: InferRequestType<(typeof client.v1beta1)[':name:push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:push'].$post(args, options))
}

export async function getV1beta1NameQuery(
  args: InferRequestType<(typeof client.v1beta1)[':name:query']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:query'].$get(args, options))
}

export async function postV1beta1NameReset(
  args: InferRequestType<(typeof client.v1beta1)[':name:reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':name:reset'].$post(args, options))
}

export async function getV1beta1ParentCompilationResults(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['compilationResults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].compilationResults.$get(args, options))
}

export async function postV1beta1ParentCompilationResults(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['compilationResults']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].compilationResults.$post(args, options))
}

export async function getV1beta1ParentReleaseConfigs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['releaseConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].releaseConfigs.$get(args, options))
}

export async function postV1beta1ParentReleaseConfigs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['releaseConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].releaseConfigs.$post(args, options))
}

export async function getV1beta1ParentRepositories(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['repositories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].repositories.$get(args, options))
}

export async function postV1beta1ParentRepositories(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['repositories']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].repositories.$post(args, options))
}

export async function getV1beta1ParentWorkflowConfigs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['workflowConfigs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].workflowConfigs.$get(args, options))
}

export async function postV1beta1ParentWorkflowConfigs(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['workflowConfigs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].workflowConfigs.$post(args, options))
}

export async function getV1beta1ParentWorkflowInvocations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['workflowInvocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].workflowInvocations.$get(args, options))
}

export async function postV1beta1ParentWorkflowInvocations(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['workflowInvocations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].workflowInvocations.$post(args, options))
}

export async function getV1beta1ParentWorkspaces(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['workspaces']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].workspaces.$get(args, options))
}

export async function postV1beta1ParentWorkspaces(
  args: InferRequestType<(typeof client.v1beta1)[':parent']['workspaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':parent'].workspaces.$post(args, options))
}

export async function getV1beta1ResourceGetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:getIamPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:getIamPolicy'].$get(args, options))
}

export async function postV1beta1ResourceSetIamPolicy(
  args: InferRequestType<(typeof client.v1beta1)[':resource:setIamPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:setIamPolicy'].$post(args, options))
}

export async function postV1beta1ResourceTestIamPermissions(
  args: InferRequestType<(typeof client.v1beta1)[':resource:testIamPermissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':resource:testIamPermissions'].$post(args, options))
}

export async function getV1beta1WorkspaceFetchFileDiff(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:fetchFileDiff']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:fetchFileDiff'].$get(args, options))
}

export async function postV1beta1WorkspaceInstallNpmPackages(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:installNpmPackages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:installNpmPackages'].$post(args, options))
}

export async function postV1beta1WorkspaceMakeDirectory(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:makeDirectory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:makeDirectory'].$post(args, options))
}

export async function postV1beta1WorkspaceMoveDirectory(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:moveDirectory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:moveDirectory'].$post(args, options))
}

export async function postV1beta1WorkspaceMoveFile(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:moveFile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:moveFile'].$post(args, options))
}

export async function getV1beta1WorkspaceQueryDirectoryContents(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:queryDirectoryContents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1beta1[':workspace:queryDirectoryContents'].$get(args, options),
  )
}

export async function getV1beta1WorkspaceReadFile(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:readFile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:readFile'].$get(args, options))
}

export async function postV1beta1WorkspaceRemoveDirectory(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:removeDirectory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:removeDirectory'].$post(args, options))
}

export async function postV1beta1WorkspaceRemoveFile(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:removeFile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:removeFile'].$post(args, options))
}

export async function postV1beta1WorkspaceWriteFile(
  args: InferRequestType<(typeof client.v1beta1)[':workspace:writeFile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1beta1[':workspace:writeFile'].$post(args, options))
}
