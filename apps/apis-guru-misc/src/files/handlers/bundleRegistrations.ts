import { OpenAPIHono } from '@hono/zod-openapi'
import { getBundleRegistrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const bundleRegistrationsHandler = app.openapi(getBundleRegistrationsRoute, (c) => {
  throw new Error('Not implemented')
})
