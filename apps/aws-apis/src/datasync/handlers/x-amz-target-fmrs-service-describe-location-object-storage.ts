import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeLocationObjectStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDescribeLocationObjectStorageHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeLocationObjectStorageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
