import { OpenAPIHono } from '@hono/zod-openapi'
import { getSuggestRoute } from '../routes'

const app = new OpenAPIHono()

export const suggestHandler = app.openapi(getSuggestRoute, (c) => {
  throw new Error('Not implemented')
})
