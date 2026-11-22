import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1MeRoute } from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app.openapi(getV1MeRoute, (c) => {
  throw new Error('Not implemented')
})
