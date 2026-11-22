import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729DeleteIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729DeleteIPSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729DeleteIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
