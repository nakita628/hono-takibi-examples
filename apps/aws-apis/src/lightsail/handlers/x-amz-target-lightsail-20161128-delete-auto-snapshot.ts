import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteAutoSnapshotRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128DeleteAutoSnapshotHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteAutoSnapshotRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
