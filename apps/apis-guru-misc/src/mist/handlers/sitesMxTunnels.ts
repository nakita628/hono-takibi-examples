import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1SitesSiteIdMxtunnelsMxtunnelIdPreemptApsRoute } from '../routes'

const app = new OpenAPIHono()

export const sitesMxTunnelsHandler = app.openapi(
  postApiV1SitesSiteIdMxtunnelsMxtunnelIdPreemptApsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
