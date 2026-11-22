import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserListRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(getUserListRoute, (c) => {
  throw new Error('Not implemented')
})
