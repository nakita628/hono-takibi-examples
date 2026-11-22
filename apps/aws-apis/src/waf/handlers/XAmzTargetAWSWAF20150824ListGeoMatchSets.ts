import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAF20150824ListGeoMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAF20150824ListGeoMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAF20150824ListGeoMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
