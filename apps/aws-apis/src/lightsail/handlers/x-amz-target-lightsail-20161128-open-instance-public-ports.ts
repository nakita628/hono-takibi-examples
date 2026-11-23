import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128OpenInstancePublicPortsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128OpenInstancePublicPortsHandler = app.openapi(
  postXAmzTargetLightsail20161128OpenInstancePublicPortsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
