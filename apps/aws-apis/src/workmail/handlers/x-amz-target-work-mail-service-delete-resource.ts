import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDeleteResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
