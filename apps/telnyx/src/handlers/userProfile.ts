import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserProfileRoute, patchUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const userProfileHandler = app
  .openapi(getUserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
