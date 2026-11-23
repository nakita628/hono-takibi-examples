import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCacheEngineVersionsRoute,
  postActionDescribeCacheEngineVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeCacheEngineVersionsHandler = app
  .openapi(getActionDescribeCacheEngineVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCacheEngineVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
