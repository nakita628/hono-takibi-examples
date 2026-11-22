import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute,
  deleteAccountsAccountIdAccessAppsAppIdCaRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute,
  getAccountOrZoneAccountOrZoneIdAccessAppsCaRoute,
  getAccountsAccountIdAccessAppsAppIdCaRoute,
  getAccountsAccountIdAccessAppsCaRoute,
  postAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute,
  postAccountsAccountIdAccessAppsAppIdCaRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessShortLivedCertificateCAsHandler = app
  .openapi(getAccountsAccountIdAccessAppsCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessAppsCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountOrZoneAccountOrZoneIdAccessAppsAppIdCaRoute, (c) => {
    throw new Error('Not implemented')
  })
