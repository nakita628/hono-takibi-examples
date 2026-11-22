import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchAdvancedRoute, getSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchAdvancedRoute, (c) => {
    throw new Error('Not implemented')
  })
