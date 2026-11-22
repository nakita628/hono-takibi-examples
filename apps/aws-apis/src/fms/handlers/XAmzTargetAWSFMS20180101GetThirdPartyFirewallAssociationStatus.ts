import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusHandler = app.openapi(
  postXAmzTargetAWSFMS20180101GetThirdPartyFirewallAssociationStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
