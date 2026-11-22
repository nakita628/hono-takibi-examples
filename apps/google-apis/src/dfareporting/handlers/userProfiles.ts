import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserprofilesProfileIdRoute, getUserprofilesRoute } from '../routes'

const app = new OpenAPIHono()

export const userProfilesHandler = app
  .openapi(getUserprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
