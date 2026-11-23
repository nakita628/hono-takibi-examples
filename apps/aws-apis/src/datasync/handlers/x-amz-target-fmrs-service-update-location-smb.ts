import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceUpdateLocationSmbRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceUpdateLocationSmbHandler = app.openapi(
  postXAmzTargetFmrsServiceUpdateLocationSmbRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
