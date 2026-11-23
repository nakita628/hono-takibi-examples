import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceDeleteGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceDeleteGroupHandler = app.openapi(
  postXAmzTargetWorkMailServiceDeleteGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
