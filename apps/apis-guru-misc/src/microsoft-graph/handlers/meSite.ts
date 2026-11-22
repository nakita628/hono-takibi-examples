import { OpenAPIHono } from '@hono/zod-openapi'
import { getMeFollowedSitesRoute, getMeFollowedSitesSiteIdRoute } from '../routes'

const app = new OpenAPIHono()

export const meSiteHandler = app
  .openapi(getMeFollowedSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowedSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
