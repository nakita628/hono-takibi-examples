import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeClusterSecurityGroupIngressRoute,
  postActionAuthorizeClusterSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAuthorizeClusterSecurityGroupIngressHandler = app
  .openapi(getActionAuthorizeClusterSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeClusterSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
