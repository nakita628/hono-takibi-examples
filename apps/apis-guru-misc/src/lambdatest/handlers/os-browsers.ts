import { OpenAPIHono } from '@hono/zod-openapi'
import { getOsBrowsersRoute } from '../routes'

const app = new OpenAPIHono()

export const osBrowsersHandler = app.openapi(getOsBrowsersRoute, (c) => {
  throw new Error('Not implemented')
})
