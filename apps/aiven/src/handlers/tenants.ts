import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTenantsTenantOsAvailablePluginsRoute,
  getTenantsTenantPgAvailableExtensionsRoute,
  getTenantsTenantPrivatelinkAvailabilityRoute,
  getTenantsTenantStaticIpAvailabilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tenantsHandler = app
  .openapi(getTenantsTenantPrivatelinkAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantsTenantStaticIpAvailabilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantsTenantOsAvailablePluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantsTenantPgAvailableExtensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
