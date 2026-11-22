import { OpenAPIHono } from '@hono/zod-openapi'
import { getOsBrowsersRoute } from '../routes'

const app = new OpenAPIHono()

export const getOSBrowsersHandler = app.openapi(getOsBrowsersRoute, (c) => {
  throw new Error('Not implemented')
})
