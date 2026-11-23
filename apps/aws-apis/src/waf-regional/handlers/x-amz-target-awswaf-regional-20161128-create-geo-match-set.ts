import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128CreateGeoMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128CreateGeoMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
