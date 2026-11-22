import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexesBooksSearchRoute, postIndexesBooksSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getIndexesBooksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexesBooksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
