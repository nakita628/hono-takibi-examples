import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCacheClustersRoute,
  postActionDescribeCacheClustersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeCacheClustersHandler = app
  .openapi(getActionDescribeCacheClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCacheClustersRoute, (c) => {
    throw new Error('Not implemented')
  })
