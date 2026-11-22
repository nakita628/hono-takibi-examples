import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute,
  getApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute,
  getApiV1SitesSiteIdEvpnTopologiesRoute,
  postApiV1SitesSiteIdEvpnTopologiesRoute,
  putApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sitesDevicesSwitchesEVPNHandler = app
  .openapi(getApiV1SitesSiteIdEvpnTopologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SitesSiteIdEvpnTopologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1SitesSiteIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
