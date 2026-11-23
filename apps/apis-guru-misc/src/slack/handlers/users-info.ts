import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsersInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const usersInfoHandler = app.openapi(getUsersInfoRoute, (c) => {
  throw new Error('Not implemented')
})
