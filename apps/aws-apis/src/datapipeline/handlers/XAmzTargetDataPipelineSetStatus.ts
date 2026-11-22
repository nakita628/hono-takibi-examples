import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineSetStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineSetStatusHandler = app.openapi(
  postXAmzTargetDataPipelineSetStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
