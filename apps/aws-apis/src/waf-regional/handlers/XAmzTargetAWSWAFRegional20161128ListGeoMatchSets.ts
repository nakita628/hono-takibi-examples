import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSWAFRegional20161128ListGeoMatchSetsHandler = app.openapi(
  postXAmzTargetAWSWAFRegional20161128ListGeoMatchSetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
