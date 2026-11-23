import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateDiskFromSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateDiskFromSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateDiskFromSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
