import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CloseInstancePublicPortsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CloseInstancePublicPortsHandler = app.openapi(
  postXAmzTargetLightsail20161128CloseInstancePublicPortsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
