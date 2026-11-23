import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchSuggestionsHandler = app.openapi(getSearchSuggestionsRoute, (c) => {
  throw new Error('Not implemented')
})
