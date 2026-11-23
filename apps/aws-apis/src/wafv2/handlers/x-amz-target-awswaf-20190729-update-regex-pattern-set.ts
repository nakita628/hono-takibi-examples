import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729UpdateRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729UpdateRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729UpdateRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
