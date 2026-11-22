import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdGuestsGuestMacRoute,
  getApiV1SitesSiteIdGuestsCountRoute,
  getApiV1SitesSiteIdGuestsGuestMacRoute,
  getApiV1SitesSiteIdGuestsRoute,
  getApiV1SitesSiteIdGuestsSearchRoute,
  putApiV1SitesSiteIdGuestsGuestMacRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesGuestsHandler = app
  .openapi(getApiV1SitesSiteIdGuestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdGuestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdGuestsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdGuestsGuestMacRoute, (c) => {
    throw new Error('Not implemented')
  })
