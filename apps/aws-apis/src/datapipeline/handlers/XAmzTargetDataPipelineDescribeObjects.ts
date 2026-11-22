import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineDescribeObjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineDescribeObjectsHandler = app.openapi(
  postXAmzTargetDataPipelineDescribeObjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
