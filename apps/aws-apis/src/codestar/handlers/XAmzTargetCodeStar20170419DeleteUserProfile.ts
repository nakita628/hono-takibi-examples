import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419DeleteUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419DeleteUserProfileHandler = app.openapi(
  postXAmzTargetCodeStar20170419DeleteUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
