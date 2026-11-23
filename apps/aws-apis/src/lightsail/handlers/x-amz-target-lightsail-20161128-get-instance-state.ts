import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetInstanceStateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetInstanceStateHandler = app.openapi(
  postXAmzTargetLightsail20161128GetInstanceStateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
