import { OpenAPIHono } from '@hono/zod-openapi'
import { getProvidersJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const providersJsonHandler = app.openapi(getProvidersJsonRoute, (c) => {
  throw new Error('Not implemented')
})
