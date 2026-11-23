import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetDisksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetDisksHandler = app.openapi(
  postXAmzTargetLightsail20161128GetDisksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
