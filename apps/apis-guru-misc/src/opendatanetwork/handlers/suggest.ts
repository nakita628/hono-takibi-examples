import { OpenAPIHono } from '@hono/zod-openapi'
import { getSuggestV1TypeRoute } from '../routes'

const app = new OpenAPIHono()

export const suggestHandler = app.openapi(getSuggestV1TypeRoute, (c) => {
  throw new Error('Not implemented')
})
