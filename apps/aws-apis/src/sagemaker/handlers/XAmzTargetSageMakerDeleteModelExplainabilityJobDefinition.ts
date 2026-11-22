import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelExplainabilityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
