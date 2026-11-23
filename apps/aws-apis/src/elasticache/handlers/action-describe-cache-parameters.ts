import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCacheParametersRoute,
  postActionDescribeCacheParametersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeCacheParametersHandler = app
  .openapi(getActionDescribeCacheParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCacheParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
