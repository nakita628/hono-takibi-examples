import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128GetSizeConstraintSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetSizeConstraintSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
