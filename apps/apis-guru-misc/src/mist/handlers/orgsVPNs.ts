import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdVpnsVpnIdRoute,
  getApiV1OrgsOrgIdStatsVpnPeersCountRoute,
  getApiV1OrgsOrgIdStatsVpnPeersSearchRoute,
  getApiV1OrgsOrgIdVpnsRoute,
  getApiV1OrgsOrgIdVpnsVpnIdRoute,
  postApiV1OrgsOrgIdVpnsRoute,
  putApiV1OrgsOrgIdVpnsVpnIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsVPNsHandler = app
  .openapi(getApiV1OrgsOrgIdStatsVpnPeersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsVpnPeersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdVpnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdVpnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdVpnsVpnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdVpnsVpnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdVpnsVpnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
