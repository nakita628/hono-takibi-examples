import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824DeleteGeoMatchSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824DeleteGeoMatchSetHandler = app.openapi(
  postXAmzTargetAWSWAF20150824DeleteGeoMatchSetRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
