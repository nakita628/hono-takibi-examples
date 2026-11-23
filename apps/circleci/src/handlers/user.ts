import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserIdRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(getUserIdRoute, (c) => {
  throw new Error('Not implemented')
})
