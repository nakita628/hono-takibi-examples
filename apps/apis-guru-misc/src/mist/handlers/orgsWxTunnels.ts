import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute,
  getApiV1OrgsOrgIdWxtunnelsRoute,
  getApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute,
  postApiV1OrgsOrgIdWxtunnelsRoute,
  putApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsWxTunnelsHandler = app
  .openapi(getApiV1OrgsOrgIdWxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWxtunnelsWxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
