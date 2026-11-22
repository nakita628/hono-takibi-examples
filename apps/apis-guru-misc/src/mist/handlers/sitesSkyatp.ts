import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdSkyatpEventsCountRoute,
  getApiV1SitesSiteIdSkyatpEventsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesSkyatpHandler = app
  .openapi(getApiV1SitesSiteIdSkyatpEventsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdSkyatpEventsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
