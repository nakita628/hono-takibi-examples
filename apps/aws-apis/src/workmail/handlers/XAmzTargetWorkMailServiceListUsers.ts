import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetWorkMailServiceListUsersHandler = app.openapi(
  postXAmzTargetWorkMailServiceListUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
