import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSandboxGroupsSandboxGroupIdBuildsBuildIdRoute,
  deleteSandboxGroupsSandboxGroupIdCredentialsCredentialIdRoute,
  deleteSandboxGroupsSandboxGroupIdSnapshotsSnapshotIdRoute,
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
  postSandboxGroupsRoute,
  postSandboxGroupsSandboxGroupIdBuildsRoute,
  postSandboxGroupsSandboxGroupIdCredentialsCredentialIdRestoreRoute,
  postSandboxGroupsSandboxGroupIdCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxGroupsHandler = app
  .openapi(postSandboxGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxGroupsRoute, (c) => {
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
