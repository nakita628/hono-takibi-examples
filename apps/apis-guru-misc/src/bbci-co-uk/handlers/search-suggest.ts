import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchSuggestRoute } from '../routes'

const app = new OpenAPIHono()

export const searchSuggestHandler = app.openapi(getSearchSuggestRoute, (c) => {
  throw new Error('Not implemented')
})
