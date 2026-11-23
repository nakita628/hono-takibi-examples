import { OpenAPIHono } from '@hono/zod-openapi'
import { getProviderJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const providerJsonHandler = app.openapi(getProviderJsonRoute, (c) => {
  throw new Error('Not implemented')
})
