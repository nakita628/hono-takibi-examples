import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAuthorizeSecurityGroupEgressRoute,
  postActionAuthorizeSecurityGroupEgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAuthorizeSecurityGroupEgressHandler = app
  .openapi(getActionAuthorizeSecurityGroupEgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAuthorizeSecurityGroupEgressRoute, (c) => {
    throw new Error('Not implemented')
  })
