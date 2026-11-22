import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729ListRegexPatternSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729ListRegexPatternSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20190729ListRegexPatternSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
