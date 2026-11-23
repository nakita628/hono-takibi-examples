import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetRateBasedRuleManagedKeysHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetRateBasedRuleManagedKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
