import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingMutualTLSRoute } from '../routes'

const app = new OpenAPIHono()

export const mutualTLSHandler = app.openapi(postAnythingMutualTLSRoute, (c) => {
  throw new Error('Not implemented')
})
