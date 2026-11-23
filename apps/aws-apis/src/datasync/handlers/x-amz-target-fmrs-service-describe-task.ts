import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetFmrsServiceDescribeTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetFmrsServiceDescribeTaskHandler = app.openapi(
  postXAmzTargetFmrsServiceDescribeTaskRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
