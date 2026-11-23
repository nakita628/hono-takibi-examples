import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteSizeConstraintSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteSizeConstraintSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
