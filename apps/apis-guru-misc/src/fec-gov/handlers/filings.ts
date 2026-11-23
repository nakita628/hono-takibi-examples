import { OpenAPIHono } from '@hono/zod-openapi'
import { getFilingsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const filingsHandler = app.openapi(getFilingsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
