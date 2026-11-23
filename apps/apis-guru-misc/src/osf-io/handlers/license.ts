import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicenseLicenseIdIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const licenseHandler = app.openapi(getLicenseLicenseIdIndexRoute, (c) => {
  throw new Error('Not implemented')
})
