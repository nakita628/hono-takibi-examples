import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchShardsRoute, postSearchShardsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchShardsHandler = app
  .openapi(getSearchShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSearchShardsRoute, (c) => {
    throw new Error('Not implemented')
  })
