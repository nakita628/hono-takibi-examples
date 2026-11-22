import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128DeleteContainerServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetLightsail20161128DeleteContainerServiceHandler = app.openapi(
  postXAmzTargetLightsail20161128DeleteContainerServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
