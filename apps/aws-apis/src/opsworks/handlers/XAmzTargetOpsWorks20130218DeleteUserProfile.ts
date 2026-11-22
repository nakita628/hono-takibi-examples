import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218DeleteUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218DeleteUserProfileHandler = app.openapi(
  postXAmzTargetOpsWorks20130218DeleteUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
