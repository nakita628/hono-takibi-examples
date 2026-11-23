import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVendorAppsAddonIdLogscollectorRoute,
  getVendorAppsAddonIdRoute,
  getVendorAppsRoute,
  postVendorAddonsRoute,
  postVendorAppsAddonIdConsumptionsRoute,
  putVendorAppsAddonIdMigrationCallbackRoute,
  putVendorAppsAddonIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const vendorHandler = app
  .openapi(postVendorAddonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVendorAppsAddonIdLogscollectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVendorAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVendorAppsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVendorAppsAddonIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVendorAppsAddonIdConsumptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVendorAppsAddonIdMigrationCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
