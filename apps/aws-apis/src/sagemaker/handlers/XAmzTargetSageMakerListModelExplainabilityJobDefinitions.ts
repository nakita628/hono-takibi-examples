import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelExplainabilityJobDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListModelExplainabilityJobDefinitionsHandler = app.openapi(
  postXAmzTargetSageMakerListModelExplainabilityJobDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
