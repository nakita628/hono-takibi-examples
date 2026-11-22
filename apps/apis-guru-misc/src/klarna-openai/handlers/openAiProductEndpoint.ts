import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicOpenaiV0ProductsRoute } from '../routes'

const app = new OpenAPIHono()

export const openAiProductEndpointHandler = app.openapi(getPublicOpenaiV0ProductsRoute, (c) => {
  throw new Error('Not implemented')
})
