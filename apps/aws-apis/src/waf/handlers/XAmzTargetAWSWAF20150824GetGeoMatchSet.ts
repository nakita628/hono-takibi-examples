import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824GetGeoMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824GetGeoMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824GetGeoMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
