import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLicensingTokenRoute,
  getLicensingCheckRoute,
  getLicensingCustomPermissionsCsvRoute,
  getLicensingCustomPermissionsRoute,
  getLicensingRefreshStatsRoute,
  getLicensingTokenRoute,
  postLicensingTokenRenewRoute,
  postLicensingTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licensingHandler = app
  .openapi(getLicensingCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensingCustomPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensingCustomPermissionsCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensingRefreshStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLicensingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLicensingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicensingTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicensingTokenRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
