import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceCreateLocationObjectStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceCreateLocationObjectStorageHandler = app.openapi(
  postXAmzTargetFmrsServiceCreateLocationObjectStorageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
