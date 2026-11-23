import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineListPipelinesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineListPipelinesHandler = app.openapi(
  postXAmzTargetDataPipelineListPipelinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
