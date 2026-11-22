import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchperpackageRoute, getSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchperpackageRoute, (c) => {
    throw new Error('Not implemented')
  })
