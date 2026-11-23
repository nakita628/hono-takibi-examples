import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListByteMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128ListByteMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListByteMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
