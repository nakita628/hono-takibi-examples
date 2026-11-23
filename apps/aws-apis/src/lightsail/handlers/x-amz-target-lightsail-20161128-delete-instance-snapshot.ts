import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteInstanceSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteInstanceSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteInstanceSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
