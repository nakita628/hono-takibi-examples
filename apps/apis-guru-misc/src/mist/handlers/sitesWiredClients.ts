import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SitesSiteIdWiredClientsCountRoute,
  getApiV1SitesSiteIdWiredClientsSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesWiredClientsHandler = app
  .openapi(getApiV1SitesSiteIdWiredClientsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdWiredClientsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
