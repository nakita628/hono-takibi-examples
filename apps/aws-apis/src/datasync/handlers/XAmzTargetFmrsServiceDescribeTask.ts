import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetFmrsServiceDescribeTaskHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
