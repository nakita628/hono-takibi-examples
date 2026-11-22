import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSandboxesSandboxIDRoute,
  getSandboxesMetricsRoute,
  getSandboxesRoute,
  getSandboxesSandboxIDLogsRoute,
  getSandboxesSandboxIDMetricsRoute,
  getSandboxesSandboxIDRoute,
  getUnstableSandboxesSandboxIDRecordRoute,
  getV2SandboxesRoute,
  getV2SandboxesSandboxIDLogsRoute,
  postSandboxesRoute,
  postSandboxesSandboxIDConnectRoute,
  postSandboxesSandboxIDForkRoute,
  postSandboxesSandboxIDPauseRoute,
  postSandboxesSandboxIDRefreshesRoute,
  postSandboxesSandboxIDResumeRoute,
  postSandboxesSandboxIDSnapshotsRoute,
  postSandboxesSandboxIDTimeoutRoute,
  postV2SandboxesRoute,
  postV2SandboxesSandboxIDConnectRoute,
  putSandboxesSandboxIDNetworkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sandboxesHandler = app
  .openapi(getSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2SandboxesSandboxIDLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSandboxesSandboxIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSandboxesSandboxIDMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUnstableSandboxesSandboxIDRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIDPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIDResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIDForkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIDConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2SandboxesSandboxIDConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIDTimeoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSandboxesSandboxIDNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIDRefreshesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSandboxesSandboxIDSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
