import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMeFollowedSitesCountRoute,
  getMeFollowedSitesRoute,
  getMeFollowedSitesSiteIdRoute,
  postMeFollowedSitesAddRoute,
  postMeFollowedSitesRemoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meSiteHandler = app
  .openapi(getMeFollowedSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowedSitesSiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeFollowedSitesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeFollowedSitesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeFollowedSitesRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
