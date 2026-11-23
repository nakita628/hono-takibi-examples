import { OpenAPIHono } from '@hono/zod-openapi'
import { getIndexingConfigRoute, postIndexingConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const indexingHandler = app
  .openapi(getIndexingConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIndexingConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
