import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListRegexMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListRegexMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
