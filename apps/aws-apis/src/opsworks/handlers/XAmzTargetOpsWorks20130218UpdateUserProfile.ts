import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218UpdateUserProfileHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
