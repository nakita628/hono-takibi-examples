import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DeleteSnapshotScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DeleteSnapshotScheduleHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DeleteSnapshotScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
