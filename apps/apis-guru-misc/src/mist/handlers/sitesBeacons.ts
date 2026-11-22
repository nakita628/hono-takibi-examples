import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdBeaconsBeaconIdRoute,
  getApiV1SitesSiteIdBeaconsBeaconIdRoute,
  getApiV1SitesSiteIdBeaconsRoute,
  postApiV1SitesSiteIdBeaconsRoute,
  putApiV1SitesSiteIdBeaconsBeaconIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesBeaconsHandler = app
  .openapi(getApiV1SitesSiteIdBeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdBeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdBeaconsBeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdBeaconsBeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdBeaconsBeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
