import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128PutInstancePublicPortsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128PutInstancePublicPortsHandler = app.openapi(
  postXAmzTargetLightsail20161128PutInstancePublicPortsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
