import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceUpdateLocationObjectStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceUpdateLocationObjectStorageHandler = app.openapi(
  postXAmzTargetFmrsServiceUpdateLocationObjectStorageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
