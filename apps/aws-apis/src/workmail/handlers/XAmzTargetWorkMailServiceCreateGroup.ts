import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceCreateGroupHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
