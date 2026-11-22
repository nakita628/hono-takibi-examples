import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(getUserRoute, (c) => {
  throw new Error('Not implemented')
})
