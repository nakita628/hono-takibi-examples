import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersListRoute } from '../routes'

const app = new OpenAPIHono()

export const usersListHandler = app.openapi(getUsersListRoute, (c) => {
  throw new Error('Not implemented')
})
