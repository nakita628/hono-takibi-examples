import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceCreateGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceCreateGroupHandler = app.openapi(
  postXAmzTargetWorkMailServiceCreateGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
