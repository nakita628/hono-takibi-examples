import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateCacheSecurityGroupRoute,
  postActionCreateCacheSecurityGroupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionCreateCacheSecurityGroupHandler = app
  .openapi(getActionCreateCacheSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateCacheSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
