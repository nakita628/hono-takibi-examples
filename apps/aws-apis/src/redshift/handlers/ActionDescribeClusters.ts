import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeClustersRoute, postActionDescribeClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeClustersHandler = app
  .openapi(getActionDescribeClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
