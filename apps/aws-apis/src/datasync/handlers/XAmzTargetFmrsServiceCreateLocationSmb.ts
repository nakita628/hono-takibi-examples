import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationSmbRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateLocationSmbHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationSmbRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
