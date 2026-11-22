import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceDeleteUserHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteUserRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
