import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeRoute, getUsersIdRoute, putUsersIdRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
