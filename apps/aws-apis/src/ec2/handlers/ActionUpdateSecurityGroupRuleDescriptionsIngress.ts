import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateSecurityGroupRuleDescriptionsIngressRoute,
  postActionUpdateSecurityGroupRuleDescriptionsIngressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateSecurityGroupRuleDescriptionsIngressHandler = app
  .openapi(getActionUpdateSecurityGroupRuleDescriptionsIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateSecurityGroupRuleDescriptionsIngressRoute, (c) => {
    throw new Error('Not implemented')
  })
