import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3LicenseApproximateLicenseCountProductApplicationKeyRoute,
  getRestApi3LicenseApproximateLicenseCountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const licenseMetricsHandler = app
  .openapi(getRestApi3LicenseApproximateLicenseCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3LicenseApproximateLicenseCountProductApplicationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
