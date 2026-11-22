import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute,
  getApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute,
  getApiV1OrgsOrgIdMxtunnelsRoute,
  postApiV1OrgsOrgIdMxtunnelsRoute,
  putApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsMxTunnelsHandler = app
  .openapi(getApiV1OrgsOrgIdMxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdMxtunnelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdMxtunnelsMxtunnelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
