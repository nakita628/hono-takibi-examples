import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218CreateUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorks20130218CreateUserProfileHandler = app.openapi(
  postXAmzTargetOpsWorks20130218CreateUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
