import { OpenAPIHono } from '@hono/zod-openapi'
import { getJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const jsonHandler = app.openapi(getJsonRoute, (c) => {
  throw new Error('Not implemented')
})
