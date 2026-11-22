import { OpenAPIHono } from '@hono/zod-openapi'
import { getBookRoute, getBookSearchRoute, postBookSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const bookHandler = app
  .openapi(getBookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBookSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBookSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
