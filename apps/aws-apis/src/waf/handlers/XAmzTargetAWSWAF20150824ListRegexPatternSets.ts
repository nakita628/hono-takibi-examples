import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListRegexPatternSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListRegexPatternSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListRegexPatternSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
