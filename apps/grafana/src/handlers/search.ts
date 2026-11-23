import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchRoute, getSearchSortingRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchSortingRoute, (c) => {
    throw new Error('Not implemented')
  })
