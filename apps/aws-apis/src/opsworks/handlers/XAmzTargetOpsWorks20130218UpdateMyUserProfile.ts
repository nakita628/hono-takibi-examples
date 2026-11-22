import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorks20130218UpdateMyUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOpsWorks20130218UpdateMyUserProfileHandler = app.openapi(
  postXAmzTargetOpsWorks20130218UpdateMyUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
