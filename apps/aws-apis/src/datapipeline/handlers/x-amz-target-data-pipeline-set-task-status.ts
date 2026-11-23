import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineSetTaskStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineSetTaskStatusHandler = app.openapi(
  postXAmzTargetDataPipelineSetTaskStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
