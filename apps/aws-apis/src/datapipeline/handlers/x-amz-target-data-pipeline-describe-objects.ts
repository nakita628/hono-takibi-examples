import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineDescribeObjectsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineDescribeObjectsHandler = app.openapi(
  postXAmzTargetDataPipelineDescribeObjectsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
