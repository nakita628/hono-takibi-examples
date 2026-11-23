import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101ListThirdPartyFirewallFirewallPoliciesHandler = app.openapi(
  postXAmzTargetAWSFMS20180101ListThirdPartyFirewallFirewallPoliciesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
