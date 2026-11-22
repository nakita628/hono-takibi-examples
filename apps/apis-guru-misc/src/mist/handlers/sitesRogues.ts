import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdRoguesEventsCountRoute,
  getApiV1SitesSiteIdRoguesEventsSearchRoute,
  getApiV1SitesSiteIdRoguesRogueBssidRoute,
  postApiV1SitesSiteIdRoguesRogueBssidDeauthClientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesRoguesHandler = app
  .openapi(getApiV1SitesSiteIdRoguesEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRoguesEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdRoguesRogueBssidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdRoguesRogueBssidDeauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
