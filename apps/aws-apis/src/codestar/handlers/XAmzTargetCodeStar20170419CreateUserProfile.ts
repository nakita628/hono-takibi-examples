import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419CreateUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419CreateUserProfileHandler = app.openapi(
  postXAmzTargetCodeStar20170419CreateUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
