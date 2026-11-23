import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelExplainabilityJobDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListModelExplainabilityJobDefinitionsHandler = app.openapi(
  postXAmzTargetSageMakerListModelExplainabilityJobDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
