import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdArgoCountZonesEnabledRoute,
  getUserArgoCountZonesEnabledRoute,
  getZonesZoneIdArgoSmartRoutingRoute,
  patchZonesZoneIdArgoSmartRoutingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const argoSmartRoutingHandler = app
  .openapi(getAccountsAccountIdArgoCountZonesEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserArgoCountZonesEnabledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdArgoSmartRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdArgoSmartRoutingRoute, (c) => {
    throw new Error('Not implemented')
  })
