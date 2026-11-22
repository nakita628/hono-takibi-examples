import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PrivateLocalRunnersRunnerIdRoute,
  getV1PrivateLocalRunnersJobsJobIdLogsRoute,
  getV1PrivateLocalRunnersJobsJobIdRoute,
  getV1PrivateLocalRunnersRoute,
  getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdRoute,
  getV1PrivateLocalRunnersRunnerIdJobsRoute,
  getV1PrivateLocalRunnersRunnerIdRoute,
  patchV1PrivateLocalRunnersRunnerIdChecklistRoute,
  postV1PrivateLocalRunnersJobsJobIdCancelRoute,
  postV1PrivateLocalRunnersJobsJobIdLogsRoute,
  postV1PrivateLocalRunnersJobsJobIdResultsRoute,
  postV1PrivateLocalRunnersJobsRoute,
  postV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsRoute,
  postV1PrivateLocalRunnersRunnerIdBridgeCommandsNextRoute,
  postV1PrivateLocalRunnersRunnerIdBridgeCommandsRoute,
  postV1PrivateLocalRunnersRunnerIdHeartbeatsRoute,
  postV1PrivateLocalRunnersRunnerIdJobsNextRoute,
  putV1PrivateLocalRunnersRunnerIdAgentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const runnersHandler = app
  .openapi(getV1PrivateLocalRunnersJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersJobsJobIdLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdBridgeCommandsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PrivateLocalRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersJobsJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdHeartbeatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersRunnerIdJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateLocalRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdBridgeCommandsNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdJobsNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateLocalRunnersRunnerIdChecklistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PrivateLocalRunnersRunnerIdAgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersRunnerIdBridgeCommandsCommandIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateLocalRunnersJobsJobIdResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
