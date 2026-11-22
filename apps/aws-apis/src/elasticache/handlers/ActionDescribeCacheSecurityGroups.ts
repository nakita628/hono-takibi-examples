import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeCacheSecurityGroupsRoute,
  postActionDescribeCacheSecurityGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeCacheSecurityGroupsHandler = app
  .openapi(getActionDescribeCacheSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeCacheSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
