import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetChangeTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824GetChangeTokenHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetChangeTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
