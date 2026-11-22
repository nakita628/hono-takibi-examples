import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdPcapsCaptureRoute,
  getApiV1SitesSiteIdPcapsCaptureRoute,
  getApiV1SitesSiteIdPcapsRoute,
  postApiV1SitesSiteIdPcapsCaptureRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesPcapsHandler = app
  .openapi(getApiV1SitesSiteIdPcapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdPcapsCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdPcapsCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdPcapsCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
