import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListUsersHandler = app.openapi(
  postXAmzTargetWorkMailServiceListUsersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
