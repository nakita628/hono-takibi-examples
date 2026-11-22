import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const providerHandler = app.openapi(getProvidersRoute, (c) => {
  throw new Error('Not implemented')
})
