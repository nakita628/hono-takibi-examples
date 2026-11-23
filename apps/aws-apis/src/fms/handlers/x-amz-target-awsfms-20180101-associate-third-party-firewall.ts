import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101AssociateThirdPartyFirewallHandler = app.openapi(
  postXAmzTargetAWSFMS20180101AssociateThirdPartyFirewallRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
