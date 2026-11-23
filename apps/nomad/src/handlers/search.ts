import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchFuzzyRoute, postSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(postSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchFuzzyRoute, (c) => {
    throw new Error('Not implemented')
  })
