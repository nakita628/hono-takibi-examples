import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128UpdateGeoMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128UpdateGeoMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
