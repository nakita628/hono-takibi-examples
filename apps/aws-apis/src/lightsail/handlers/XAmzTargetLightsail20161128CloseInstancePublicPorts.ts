import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CloseInstancePublicPortsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128CloseInstancePublicPortsHandler = app.openapi(
  postXAmzTargetLightsail20161128CloseInstancePublicPortsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
