import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersUserLikesRoute, getUsersUserRoute, getUsersUserScoresRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getUsersUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserLikesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserScoresRoute, (c) => {
    throw new Error('Not implemented')
  })
