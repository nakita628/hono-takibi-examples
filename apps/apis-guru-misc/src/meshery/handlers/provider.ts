import { OpenAPIHono } from '@hono/zod-openapi'
import { getProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const providerHandler = app.openapi(getProviderRoute, (c) => {
  throw new Error('Not implemented')
})
