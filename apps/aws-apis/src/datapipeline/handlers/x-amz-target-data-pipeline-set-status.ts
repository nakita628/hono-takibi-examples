import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineSetStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineSetStatusHandler = app.openapi(
  postXAmzTargetDataPipelineSetStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
