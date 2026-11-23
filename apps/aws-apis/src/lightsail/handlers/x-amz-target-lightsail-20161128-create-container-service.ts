import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateContainerServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateContainerServiceHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateContainerServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
