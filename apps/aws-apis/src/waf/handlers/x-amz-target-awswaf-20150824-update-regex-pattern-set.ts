import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824UpdateRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
