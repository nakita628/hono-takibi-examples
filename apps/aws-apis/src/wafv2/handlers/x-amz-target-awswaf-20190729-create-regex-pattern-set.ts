import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729CreateRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20190729CreateRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729CreateRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
