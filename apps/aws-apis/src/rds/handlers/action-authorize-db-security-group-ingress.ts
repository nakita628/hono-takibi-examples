import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeDBSecurityGroupIngressRoute,
  postActionAuthorizeDBSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionAuthorizeDbSecurityGroupIngressHandler = app
  .openapi(getActionAuthorizeDBSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeDBSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
