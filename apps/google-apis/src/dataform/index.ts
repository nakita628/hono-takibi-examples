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
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameFetchFileGitStatusesRouteHandler,
  getV1beta1NameFetchGitAheadBehindRouteHandler,
  getV1beta1NameFetchRemoteBranchesRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameQueryRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentCompilationResultsRouteHandler,
  getV1beta1ParentReleaseConfigsRouteHandler,
  getV1beta1ParentRepositoriesRouteHandler,
  getV1beta1ParentWorkflowConfigsRouteHandler,
  getV1beta1ParentWorkflowInvocationsRouteHandler,
  getV1beta1ParentWorkspacesRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  getV1beta1WorkspaceFetchFileDiffRouteHandler,
  getV1beta1WorkspaceQueryDirectoryContentsRouteHandler,
  getV1beta1WorkspaceReadFileRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1NameCommitRouteHandler,
  postV1beta1NamePullRouteHandler,
  postV1beta1NamePushRouteHandler,
  postV1beta1NameResetRouteHandler,
  postV1beta1ParentCompilationResultsRouteHandler,
  postV1beta1ParentReleaseConfigsRouteHandler,
  postV1beta1ParentRepositoriesRouteHandler,
  postV1beta1ParentWorkflowConfigsRouteHandler,
  postV1beta1ParentWorkflowInvocationsRouteHandler,
  postV1beta1ParentWorkspacesRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
  postV1beta1WorkspaceInstallNpmPackagesRouteHandler,
  postV1beta1WorkspaceMakeDirectoryRouteHandler,
  postV1beta1WorkspaceMoveDirectoryRouteHandler,
  postV1beta1WorkspaceMoveFileRouteHandler,
  postV1beta1WorkspaceRemoveDirectoryRouteHandler,
  postV1beta1WorkspaceRemoveFileRouteHandler,
  postV1beta1WorkspaceWriteFileRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(postV1beta1NameCommitRoute, postV1beta1NameCommitRouteHandler)
  .openapi(getV1beta1NameFetchFileGitStatusesRoute, getV1beta1NameFetchFileGitStatusesRouteHandler)
  .openapi(getV1beta1NameFetchGitAheadBehindRoute, getV1beta1NameFetchGitAheadBehindRouteHandler)
  .openapi(getV1beta1NameFetchRemoteBranchesRoute, getV1beta1NameFetchRemoteBranchesRouteHandler)
  .openapi(postV1beta1NamePullRoute, postV1beta1NamePullRouteHandler)
  .openapi(postV1beta1NamePushRoute, postV1beta1NamePushRouteHandler)
  .openapi(getV1beta1NameQueryRoute, getV1beta1NameQueryRouteHandler)
  .openapi(postV1beta1NameResetRoute, postV1beta1NameResetRouteHandler)
  .openapi(getV1beta1ParentCompilationResultsRoute, getV1beta1ParentCompilationResultsRouteHandler)
  .openapi(
    postV1beta1ParentCompilationResultsRoute,
    postV1beta1ParentCompilationResultsRouteHandler,
  )
  .openapi(getV1beta1ParentReleaseConfigsRoute, getV1beta1ParentReleaseConfigsRouteHandler)
  .openapi(postV1beta1ParentReleaseConfigsRoute, postV1beta1ParentReleaseConfigsRouteHandler)
  .openapi(getV1beta1ParentRepositoriesRoute, getV1beta1ParentRepositoriesRouteHandler)
  .openapi(postV1beta1ParentRepositoriesRoute, postV1beta1ParentRepositoriesRouteHandler)
  .openapi(getV1beta1ParentWorkflowConfigsRoute, getV1beta1ParentWorkflowConfigsRouteHandler)
  .openapi(postV1beta1ParentWorkflowConfigsRoute, postV1beta1ParentWorkflowConfigsRouteHandler)
  .openapi(
    getV1beta1ParentWorkflowInvocationsRoute,
    getV1beta1ParentWorkflowInvocationsRouteHandler,
  )
  .openapi(
    postV1beta1ParentWorkflowInvocationsRoute,
    postV1beta1ParentWorkflowInvocationsRouteHandler,
  )
  .openapi(getV1beta1ParentWorkspacesRoute, getV1beta1ParentWorkspacesRouteHandler)
  .openapi(postV1beta1ParentWorkspacesRoute, postV1beta1ParentWorkspacesRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )
  .openapi(getV1beta1WorkspaceFetchFileDiffRoute, getV1beta1WorkspaceFetchFileDiffRouteHandler)
  .openapi(
    postV1beta1WorkspaceInstallNpmPackagesRoute,
    postV1beta1WorkspaceInstallNpmPackagesRouteHandler,
  )
  .openapi(postV1beta1WorkspaceMakeDirectoryRoute, postV1beta1WorkspaceMakeDirectoryRouteHandler)
  .openapi(postV1beta1WorkspaceMoveDirectoryRoute, postV1beta1WorkspaceMoveDirectoryRouteHandler)
  .openapi(postV1beta1WorkspaceMoveFileRoute, postV1beta1WorkspaceMoveFileRouteHandler)
  .openapi(
    getV1beta1WorkspaceQueryDirectoryContentsRoute,
    getV1beta1WorkspaceQueryDirectoryContentsRouteHandler,
  )
  .openapi(getV1beta1WorkspaceReadFileRoute, getV1beta1WorkspaceReadFileRouteHandler)
  .openapi(
    postV1beta1WorkspaceRemoveDirectoryRoute,
    postV1beta1WorkspaceRemoveDirectoryRouteHandler,
  )
  .openapi(postV1beta1WorkspaceRemoveFileRoute, postV1beta1WorkspaceRemoveFileRouteHandler)
  .openapi(postV1beta1WorkspaceWriteFileRoute, postV1beta1WorkspaceWriteFileRouteHandler)

export default app
