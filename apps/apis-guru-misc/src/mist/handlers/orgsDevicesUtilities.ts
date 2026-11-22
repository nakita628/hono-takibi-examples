import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdStatsBgpPeersCountRoute,
  getApiV1OrgsOrgIdStatsBgpPeersSearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsDevicesUtilitiesHandler = app
  .openapi(getApiV1OrgsOrgIdStatsBgpPeersCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsBgpPeersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
