import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListSizeConstraintSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListSizeConstraintSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListSizeConstraintSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
