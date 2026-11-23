import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128ListRegexPatternSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListRegexPatternSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
