import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfiguredNetworksRoute } from '../routes'

const app = new OpenAPIHono()

export const configuredNetworksHandler = app.openapi(getConfiguredNetworksRoute, (c) => {
  throw new Error('Not implemented')
})
