import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContactMethodsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetContactMethodsHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContactMethodsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
