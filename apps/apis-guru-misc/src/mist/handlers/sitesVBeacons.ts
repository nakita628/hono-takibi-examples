import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdVbeaconsVbeaconIdRoute,
  getApiV1SitesSiteIdVbeaconsRoute,
  getApiV1SitesSiteIdVbeaconsVbeaconIdRoute,
  postApiV1SitesSiteIdVbeaconsRoute,
  putApiV1SitesSiteIdVbeaconsVbeaconIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesVBeaconsHandler = app
  .openapi(getApiV1SitesSiteIdVbeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdVbeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdVbeaconsVbeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdVbeaconsVbeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdVbeaconsVbeaconIdRoute, (c) => {
    throw new Error('Not implemented')
  })
