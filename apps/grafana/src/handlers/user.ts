import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserEmailUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app.openapi(getUserEmailUpdateRoute, (c) => {
  throw new Error('Not implemented')
})
