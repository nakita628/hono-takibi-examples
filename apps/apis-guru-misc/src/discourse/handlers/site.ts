import { OpenAPIHono } from '@hono/zod-openapi'
import { getSiteJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const siteHandler = app.openapi(getSiteJsonRoute, (c) => {
  throw new Error('Not implemented')
})
