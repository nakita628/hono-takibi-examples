import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionRevokeSecurityGroupEgressRoute,
  postActionRevokeSecurityGroupEgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionRevokeSecurityGroupEgressHandler = app
  .openapi(getActionRevokeSecurityGroupEgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionRevokeSecurityGroupEgressRoute, (c) => {
    throw new Error('Not implemented')
  })
