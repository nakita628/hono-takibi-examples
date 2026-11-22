import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdStatsAssetsRoute,
  getApiV1OrgsOrgIdStatsDevicesRoute,
  getApiV1OrgsOrgIdStatsMxedgesMxedgeIdRoute,
  getApiV1OrgsOrgIdStatsMxedgesRoute,
  getApiV1OrgsOrgIdStatsRoute,
  getApiV1OrgsOrgIdStatsSwitchPortsCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsStatsHandler = app
  .openapi(getApiV1OrgsOrgIdStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsMxedgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsMxedgesMxedgeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdStatsSwitchPortsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
