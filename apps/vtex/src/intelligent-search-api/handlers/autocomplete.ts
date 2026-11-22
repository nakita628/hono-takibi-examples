import { OpenAPIHono } from '@hono/zod-openapi'
import { getAutocompleteSuggestionsRoute, getTopSearchesRoute } from '../routes'

const app = new OpenAPIHono()

export const autocompleteHandler = app
  .openapi(getAutocompleteSuggestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTopSearchesRoute, (c) => {
    throw new Error('Not implemented')
  })
