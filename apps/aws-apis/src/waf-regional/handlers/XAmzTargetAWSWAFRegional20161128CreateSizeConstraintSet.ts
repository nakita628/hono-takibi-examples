import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateSizeConstraintSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
