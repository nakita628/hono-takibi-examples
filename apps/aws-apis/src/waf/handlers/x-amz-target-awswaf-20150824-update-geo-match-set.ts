import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824UpdateGeoMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwswaf20150824UpdateGeoMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824UpdateGeoMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
