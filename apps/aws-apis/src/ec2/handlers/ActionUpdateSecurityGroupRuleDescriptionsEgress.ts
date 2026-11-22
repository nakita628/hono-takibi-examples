import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionUpdateSecurityGroupRuleDescriptionsEgressRoute,
  postActionUpdateSecurityGroupRuleDescriptionsEgressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionUpdateSecurityGroupRuleDescriptionsEgressHandler = app
  .openapi(getActionUpdateSecurityGroupRuleDescriptionsEgressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUpdateSecurityGroupRuleDescriptionsEgressRoute, (c) => {
    throw new Error('Not implemented')
  })
