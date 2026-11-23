import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824DeleteRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
