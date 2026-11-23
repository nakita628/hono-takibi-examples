import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListByteMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824ListByteMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListByteMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
