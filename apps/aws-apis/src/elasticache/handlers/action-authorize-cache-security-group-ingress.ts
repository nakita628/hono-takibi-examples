import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeCacheSecurityGroupIngressRoute,
  postActionAuthorizeCacheSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAuthorizeCacheSecurityGroupIngressHandler = app
  .openapi(getActionAuthorizeCacheSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeCacheSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
