import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateSizeConstraintSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824UpdateSizeConstraintSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateSizeConstraintSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
