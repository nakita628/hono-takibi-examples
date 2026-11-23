import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128ListSizeConstraintSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListSizeConstraintSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
