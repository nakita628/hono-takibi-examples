import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListResourcesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListResourcesHandler = app.openapi(
  postXAmzTargetWorkMailServiceListResourcesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
