import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSandboxGroupsSandboxGroupIdBuildsBuildIdRoute,
  deleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
  deleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute,
  getSandboxesRoute,
  getSandboxesSandboxIdExecsExecIdRoute,
  getSandboxesSandboxIdExecsRoute,
  getSandboxesSandboxIdRoute,
  getSandboxGroupsRoute,
  getSandboxGroupsSandboxGroupIdBuildsBuildIdRoute,
  getSandboxGroupsSandboxGroupIdBuildsRoute,
  getSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
  getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsRoute,
  getSandboxGroupsSandboxGroupIdCredentialsRoute,
  getSandboxGroupsSandboxGroupIdRoute,
  getSandboxGroupsSandboxGroupIdSnapshotsRoute,
  getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute,
  patchSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
  patchSandboxGroupsSandboxGroupIdRoute,
  postSandboxesRoute,
  postSandboxesSandboxIdFilesOperationTokenRoute,
  postSandboxesSandboxIdRunsOperationTokenRoute,
  postSandboxesSandboxIdSnapshotsRoute,
  postSandboxesSandboxIdSuspendRoute,
  postSandboxesSandboxIdTerminateRoute,
  postSandboxGroupsRoute,
  postSandboxGroupsSandboxGroupIdBuildsRoute,
  postSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreRoute,
  postSandboxGroupsSandboxGroupIdCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxesHandler = app
  .openapi(postSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIdExecsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIdExecsExecIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdTerminateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsSandboxGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSandboxGroupsSandboxGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsSandboxGroupIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxGroupsSandboxGroupIdCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsSandboxGroupIdCredentialsCredentialIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsSandboxGroupIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxGroupsSandboxGroupIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsSandboxGroupIdBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSandboxGroupsSandboxGroupIdBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsSandboxGroupIdSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdRunsOperationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIdFilesOperationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
