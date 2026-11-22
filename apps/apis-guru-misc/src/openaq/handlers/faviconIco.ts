import { OpenAPIHono } from '@hono/zod-openapi'
import { getFaviconIcoRoute } from '../routes'

const app = new OpenAPIHono()

export const faviconIcoHandler = app.openapi(getFaviconIcoRoute, (c) => {
  throw new Error('Not implemented')
})
