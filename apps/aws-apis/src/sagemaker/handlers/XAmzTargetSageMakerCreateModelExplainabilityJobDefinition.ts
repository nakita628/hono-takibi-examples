import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateModelExplainabilityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelExplainabilityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
