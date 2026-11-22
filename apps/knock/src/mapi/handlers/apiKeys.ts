import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ApiKeysExchangeRoute } from '../routes'

const app = new OpenAPIHono()

export const apiKeysHandler = app.openapi(postV1ApiKeysExchangeRoute, (c) => {
  throw new Error('Not implemented')
})
