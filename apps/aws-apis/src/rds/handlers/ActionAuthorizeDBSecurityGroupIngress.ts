import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeDBSecurityGroupIngressRoute,
  postActionAuthorizeDBSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAuthorizeDBSecurityGroupIngressHandler = app
  .openapi(getActionAuthorizeDBSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeDBSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
