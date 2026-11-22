import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateIPSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824CreateIPSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateIPSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
