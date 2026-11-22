import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute,
  getApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute,
  getApiV1OrgsOrgIdEvpnTopologiesRoute,
  postApiV1OrgsOrgIdEvpnTopologiesRoute,
  putApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsDevicesEVPNHandler = app
  .openapi(getApiV1OrgsOrgIdEvpnTopologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdEvpnTopologiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdEvpnTopologiesEvpnTopologyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
