import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteCacheSecurityGroupRoute,
  postActionDeleteCacheSecurityGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteCacheSecurityGroupHandler = app
  .openapi(getActionDeleteCacheSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteCacheSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
