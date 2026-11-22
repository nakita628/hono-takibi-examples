import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630UpdateSnapshotScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630UpdateSnapshotScheduleHandler = app.openapi(
  postXAmzTargetStorageGateway20130630UpdateSnapshotScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
