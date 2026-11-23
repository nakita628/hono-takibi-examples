import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRevokeDBSecurityGroupIngressRoute,
  postActionRevokeDBSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRevokeDbSecurityGroupIngressHandler = app
  .openapi(getActionRevokeDBSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRevokeDBSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
