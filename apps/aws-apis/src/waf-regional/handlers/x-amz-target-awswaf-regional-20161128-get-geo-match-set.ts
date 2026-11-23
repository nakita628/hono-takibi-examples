import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128GetGeoMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128GetGeoMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128GetGeoMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
