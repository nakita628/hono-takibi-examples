import { OpenAPIHono } from '@hono/zod-openapi'
import { getAutocompleteSuggestionsRoute } from '../routes'

const app = new OpenAPIHono()

export const autocompleteSuggestionsHandler = app.openapi(getAutocompleteSuggestionsRoute, (c) => {
  throw new Error('Not implemented')
})
