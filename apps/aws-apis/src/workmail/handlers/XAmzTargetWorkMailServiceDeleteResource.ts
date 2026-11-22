import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
