import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineDescribePipelinesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineDescribePipelinesHandler = app.openapi(
  postXAmzTargetDataPipelineDescribePipelinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
