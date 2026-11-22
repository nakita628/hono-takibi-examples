import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLicenseCancelRoute,
  deleteApiLicenseRoute,
  getApiLicenseHasLicenseRoute,
  getApiLicenseInfoRoute,
  getApiLicenseProductsRoute,
  getApiLicenseProviderHealthRoute,
  getApiLicenseStatsRoute,
  getApiLicenseValidLicenseRoute,
  postApiLicenseChangeEmailRoute,
  postApiLicenseRenewRoute,
  postApiLicenseResendLicenseRoute,
  postApiLicenseResetRoute,
  postApiLicenseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseHandler = app
  .openapi(getApiLicenseValidLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseHasLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseResendLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseProviderHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLicenseCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLicenseProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseRenewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLicenseChangeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
