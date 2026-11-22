import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetRegexPatternSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetRegexPatternSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetRegexPatternSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
