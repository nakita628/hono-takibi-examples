import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicenseRoute, postLicenseRefreshRoute } from '../routes'

const app = new OpenAPIHono()

export const licenseHandler = app
  .openapi(getLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLicenseRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
