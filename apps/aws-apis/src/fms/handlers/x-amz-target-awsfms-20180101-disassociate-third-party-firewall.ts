import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsfms20180101DisassociateThirdPartyFirewallHandler = app.openapi(
  postXAmzTargetAWSFMS20180101DisassociateThirdPartyFirewallRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
