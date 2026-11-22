import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeleteIPSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
