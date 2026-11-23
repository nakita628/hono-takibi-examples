import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRevokeClusterSecurityGroupIngressRoute,
  postActionRevokeClusterSecurityGroupIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRevokeClusterSecurityGroupIngressHandler = app
  .openapi(getActionRevokeClusterSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRevokeClusterSecurityGroupIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
