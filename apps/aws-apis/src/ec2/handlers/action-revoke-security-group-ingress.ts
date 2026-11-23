import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRevokeSecurityGroupIngressRoute,
  postActionRevokeSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRevokeSecurityGroupIngressHandler = app
  .openapi(getActionRevokeSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRevokeSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
