import { OpenAPIHono } from '@hono/zod-openapi'
import { getProviderServicesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const providerHandler = app.openapi(getProviderServicesJsonRoute, (c) => {
  throw new Error('Not implemented')
})
