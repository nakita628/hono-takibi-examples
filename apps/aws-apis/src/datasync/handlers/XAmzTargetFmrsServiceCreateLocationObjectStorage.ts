import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationObjectStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceCreateLocationObjectStorageHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationObjectStorageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
