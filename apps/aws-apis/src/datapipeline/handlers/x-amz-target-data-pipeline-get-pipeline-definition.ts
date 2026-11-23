import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDataPipelineGetPipelineDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDataPipelineGetPipelineDefinitionHandler = app.openapi(
  postXAmzTargetDataPipelineGetPipelineDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
