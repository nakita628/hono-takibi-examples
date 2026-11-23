import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateInstancesFromSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateInstancesFromSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateInstancesFromSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
