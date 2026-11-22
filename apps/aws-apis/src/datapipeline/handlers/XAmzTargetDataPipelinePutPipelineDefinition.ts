import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelinePutPipelineDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelinePutPipelineDefinitionHandler = app.openapi(
  postXAmzTargetDataPipelinePutPipelineDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
