import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRevokeCacheSecurityGroupIngressRoute,
  postActionRevokeCacheSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionRevokeCacheSecurityGroupIngressHandler = app
  .openapi(getActionRevokeCacheSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRevokeCacheSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
