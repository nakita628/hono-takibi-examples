import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminTaxProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const taxProvidersHandler = app.openapi(getAdminTaxProvidersRoute, (c) => {
  throw new Error('Not implemented')
})
