import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ClaimLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const claimLicenseHandler = app.openapi(getApiV1ClaimLicenseRoute, (c) => {
  throw new Error('Not implemented')
})
