import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824CreateGeoMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824CreateGeoMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824CreateGeoMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
