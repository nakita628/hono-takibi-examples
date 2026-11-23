import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswafRegional20161128DeleteGeoMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128DeleteGeoMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
