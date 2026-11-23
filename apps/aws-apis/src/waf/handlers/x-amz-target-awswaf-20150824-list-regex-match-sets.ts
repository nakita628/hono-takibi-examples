import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListRegexMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824ListRegexMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListRegexMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
