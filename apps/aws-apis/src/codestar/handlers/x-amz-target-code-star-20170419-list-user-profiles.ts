import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419ListUserProfilesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419ListUserProfilesHandler = app.openapi(
  postXAmzTargetCodeStar20170419ListUserProfilesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
