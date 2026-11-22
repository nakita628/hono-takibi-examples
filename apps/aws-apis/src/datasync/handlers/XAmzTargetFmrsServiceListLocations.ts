import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceListLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceListLocationsHandler = app.openapi(
  postXAmzTargetFmrsServiceListLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
