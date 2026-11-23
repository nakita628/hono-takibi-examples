import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListXssMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824ListXssMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListXssMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
