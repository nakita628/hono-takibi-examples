import { OpenAPIHono } from '@hono/zod-openapi'
import { getX509AuthProviderRoute } from '../routes'

const app = new OpenAPIHono()

export const x509AuthProviderHandler = app.openapi(getX509AuthProviderRoute, (c) => {
  throw new Error('Not implemented')
})
