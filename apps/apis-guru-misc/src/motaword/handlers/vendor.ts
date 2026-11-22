import { OpenAPIHono } from '@hono/zod-openapi'
import { postUsersAvailableVendorsRoute } from '../routes'

const app = new OpenAPIHono()

export const vendorHandler = app.openapi(postUsersAvailableVendorsRoute, (c) => {
  throw new Error('Not implemented')
})
