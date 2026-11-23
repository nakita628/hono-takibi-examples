import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListManagedRuleSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729ListManagedRuleSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListManagedRuleSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
