import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameFetchFileGitStatusesRoute,
  getV1beta1NameFetchGitAheadBehindRoute,
  getV1beta1NameFetchRemoteBranchesRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameQueryRoute,
  getV1beta1NameRoute,
  getV1beta1ParentCompilationResultsRoute,
  getV1beta1ParentReleaseConfigsRoute,
  getV1beta1ParentRepositoriesRoute,
  getV1beta1ParentWorkflowConfigsRoute,
  getV1beta1ParentWorkflowInvocationsRoute,
  getV1beta1ParentWorkspacesRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  getV1beta1WorkspaceFetchFileDiffRoute,
  getV1beta1WorkspaceQueryDirectoryContentsRoute,
  getV1beta1WorkspaceReadFileRoute,
  patchV1beta1NameRoute,
  postV1beta1NameCancelRoute,
  postV1beta1NameCommitRoute,
  postV1beta1NamePullRoute,
  postV1beta1NamePushRoute,
  postV1beta1NameResetRoute,
  postV1beta1ParentCompilationResultsRoute,
  postV1beta1ParentReleaseConfigsRoute,
  postV1beta1ParentRepositoriesRoute,
  postV1beta1ParentWorkflowConfigsRoute,
  postV1beta1ParentWorkflowInvocationsRoute,
  postV1beta1ParentWorkspacesRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
  postV1beta1WorkspaceInstallNpmPackagesRoute,
  postV1beta1WorkspaceMakeDirectoryRoute,
  postV1beta1WorkspaceMoveDirectoryRoute,
  postV1beta1WorkspaceMoveFileRoute,
  postV1beta1WorkspaceRemoveDirectoryRoute,
  postV1beta1WorkspaceRemoveFileRoute,
  postV1beta1WorkspaceWriteFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameFetchFileGitStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameFetchGitAheadBehindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameFetchRemoteBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NamePullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NamePushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentCompilationResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentCompilationResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentReleaseConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentReleaseConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentWorkflowConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentWorkflowConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentWorkflowInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentWorkflowInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentWorkspacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1WorkspaceFetchFileDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1WorkspaceInstallNpmPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1WorkspaceMakeDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1WorkspaceMoveDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1WorkspaceMoveFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1WorkspaceQueryDirectoryContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1WorkspaceReadFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1WorkspaceRemoveDirectoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1WorkspaceRemoveFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1WorkspaceWriteFileRoute, (c) => {
    throw new Error('Not implemented')
  })
