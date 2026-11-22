import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetRateBasedStatementManagedKeysRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
