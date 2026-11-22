import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateSizeConstraintSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
