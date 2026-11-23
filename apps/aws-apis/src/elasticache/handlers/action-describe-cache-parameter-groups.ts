import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCacheParameterGroupsRoute,
  postActionDescribeCacheParameterGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeCacheParameterGroupsHandler = app
  .openapi(getActionDescribeCacheParameterGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCacheParameterGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
