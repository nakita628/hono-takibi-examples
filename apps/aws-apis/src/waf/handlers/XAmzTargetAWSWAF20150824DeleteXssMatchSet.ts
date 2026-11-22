import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteXssMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeleteXssMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteXssMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
