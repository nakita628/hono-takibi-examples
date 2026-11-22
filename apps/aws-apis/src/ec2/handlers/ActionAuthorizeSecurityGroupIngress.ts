import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeSecurityGroupIngressRoute,
  postActionAuthorizeSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAuthorizeSecurityGroupIngressHandler = app
  .openapi(getActionAuthorizeSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
