import { OpenAPIHono } from '@hono/zod-openapi'
import { getItemsSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const suggestionHandler = app.openapi(getItemsSuggestionsRoute, (c) => {
  throw new Error('Not implemented')
})
