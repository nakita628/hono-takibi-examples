import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2SitesRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesHandler = app.openapi(getV2SitesRoute, (c) => {
  throw new Error('Not implemented')
})
