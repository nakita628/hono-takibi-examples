import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419UpdateUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419UpdateUserProfileHandler = app.openapi(
  postXAmzTargetCodeStar20170419UpdateUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
