import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetRateBasedRuleManagedKeysHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetRateBasedRuleManagedKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
