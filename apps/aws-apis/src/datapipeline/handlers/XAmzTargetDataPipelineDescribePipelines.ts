import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineDescribePipelinesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineDescribePipelinesHandler = app.openapi(
  postXAmzTargetDataPipelineDescribePipelinesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
