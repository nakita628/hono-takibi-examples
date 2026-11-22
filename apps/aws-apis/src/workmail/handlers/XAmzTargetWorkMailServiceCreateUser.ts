import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceCreateUserHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
