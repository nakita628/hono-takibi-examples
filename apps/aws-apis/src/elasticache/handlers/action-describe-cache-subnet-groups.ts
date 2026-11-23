import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCacheSubnetGroupsRoute,
  postActionDescribeCacheSubnetGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeCacheSubnetGroupsHandler = app
  .openapi(getActionDescribeCacheSubnetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCacheSubnetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
