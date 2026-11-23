import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetInstancePortStatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetInstancePortStatesHandler = app.openapi(
  postXAmzTargetLightsail20161128GetInstancePortStatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
