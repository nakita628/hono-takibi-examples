import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersProfileGetRoute, postUsersProfileSetRoute } from '../routes'

const app = new OpenAPIHono()

export const usersProfileHandler = app
  .openapi(getUsersProfileGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersProfileSetRoute, (c) => {
    throw new Error('Not implemented')
  })
