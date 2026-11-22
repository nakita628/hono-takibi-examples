import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUseridPhotoRoute, getUsersUsernameRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUseridPhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
