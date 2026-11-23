import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityGroupIdRoute,
  deleteSecurityGroupIdRulesRuleIdRoute,
  getSecurityGroupIdRoute,
  getSecurityGroupRoute,
  postSecurityGroupIdRulesRoute,
  postSecurityGroupRoute,
  putSecurityGroupIdAddSourceRoute,
  putSecurityGroupIdAttachRoute,
  putSecurityGroupIdDetachRoute,
  putSecurityGroupIdRemoveSourceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityGroupHandler = app
  .openapi(deleteSecurityGroupIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityGroupIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityGroupIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityGroupIdRemoveSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityGroupIdDetachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSecurityGroupIdAddSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
