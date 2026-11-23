import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceCreateUserHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
