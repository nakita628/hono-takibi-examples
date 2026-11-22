import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchRoute, getSearchSuggestRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchSuggestRoute, (c) => {
    throw new Error('Not implemented')
  })
