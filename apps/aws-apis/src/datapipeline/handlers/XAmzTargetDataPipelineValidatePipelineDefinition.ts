import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineValidatePipelineDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDataPipelineValidatePipelineDefinitionHandler = app.openapi(
  postXAmzTargetDataPipelineValidatePipelineDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
