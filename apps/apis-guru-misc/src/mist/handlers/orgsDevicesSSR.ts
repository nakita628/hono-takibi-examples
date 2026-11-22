import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1OrgsOrgIdSsrUpgradeRoute,
  postApiV1OrgsOrgIdSsrUpgradeRoute,
  postApiV1OrgsOrgIdSsrUpgradeUpgradeIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsDevicesSSRHandler = app
  .openapi(getApiV1OrgsOrgIdSsrUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSsrUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdSsrUpgradeUpgradeIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
