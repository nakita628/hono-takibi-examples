import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2SandboxesDrivesNameOrIdRoute,
  deleteV2SandboxesNameRoute,
  deleteV2SandboxesSnapshotsSnapshotIdRoute,
  getV2SandboxesDrivesNameOrIdRoute,
  getV2SandboxesDrivesRoute,
  getV2SandboxesNameRoute,
  getV2SandboxesRoute,
  getV2SandboxesSessionsRoute,
  getV2SandboxesSessionsSessionIdCmdCmdIdLogsRoute,
  getV2SandboxesSessionsSessionIdCmdCmdIdRoute,
  getV2SandboxesSessionsSessionIdCmdRoute,
  getV2SandboxesSessionsSessionIdRoute,
  getV2SandboxesSnapshotsRoute,
  getV2SandboxesSnapshotsSnapshotIdRoute,
  patchV2SandboxesNameRoute,
  postV2SandboxesDrivesNameForkRoute,
  postV2SandboxesDrivesNameRoute,
  postV2SandboxesNameForkRoute,
  postV2SandboxesRoute,
  postV2SandboxesSessionsSessionIdCmdCmdIdKillRoute,
  postV2SandboxesSessionsSessionIdCmdCmdIdStdinRoute,
  postV2SandboxesSessionsSessionIdCmdRoute,
  postV2SandboxesSessionsSessionIdExtendTimeoutRoute,
  postV2SandboxesSessionsSessionIdFsMkdirRoute,
  postV2SandboxesSessionsSessionIdFsReadRoute,
  postV2SandboxesSessionsSessionIdFsWriteRoute,
  postV2SandboxesSessionsSessionIdNetworkPolicyRoute,
  postV2SandboxesSessionsSessionIdSnapshotRoute,
  postV2SandboxesSessionsSessionIdStopRoute,
  postV3SandboxesNameForkRoute,
  postV3SandboxesRoute,
  postV3SandboxesSessionsSessionIdSnapshotRoute,
  postV4SandboxesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxesHandler = app
  .openapi(getV2SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesDrivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesDrivesNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SandboxesDrivesNameOrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesDrivesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesDrivesNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SandboxesSnapshotsSnapshotIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2SandboxesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2SandboxesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsSessionIdCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdCmdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsSessionIdCmdCmdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdCmdCmdIdKillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdCmdCmdIdStdinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSessionsSessionIdCmdCmdIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdExtendTimeoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdNetworkPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdFsReadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdFsMkdirRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdFsWriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSessionsSessionIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SandboxesSessionsSessionIdSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3SandboxesNameForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
