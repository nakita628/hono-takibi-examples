import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20190729GetIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20190729GetIPSetHandler = app.openapi(
  postXAmzTargetAWSWAF20190729GetIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
