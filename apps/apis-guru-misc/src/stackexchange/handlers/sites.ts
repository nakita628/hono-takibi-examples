import { OpenAPIHono } from '@hono/zod-openapi'
import { getSitesRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app.openapi(getSitesRoute, (c) => {
  throw new Error('Not implemented')
})
