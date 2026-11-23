import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersProfileGetRoute } from '../routes'

const app = new OpenAPIHono()

export const usersProfileGetHandler = app.openapi(getUsersProfileGetRoute, (c) => {
  throw new Error('Not implemented')
})
