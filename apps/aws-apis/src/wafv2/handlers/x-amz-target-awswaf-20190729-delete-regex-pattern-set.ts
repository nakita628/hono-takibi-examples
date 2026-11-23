import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DeleteRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729DeleteRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DeleteRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
