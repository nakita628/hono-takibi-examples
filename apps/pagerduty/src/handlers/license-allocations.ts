import { OpenAPIHono } from '@hono/zod-openapi'
import { getLicenseAllocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const licenseAllocationsHandler = app.openapi(getLicenseAllocationsRoute, (c) => {
  throw new Error('Not implemented')
})
