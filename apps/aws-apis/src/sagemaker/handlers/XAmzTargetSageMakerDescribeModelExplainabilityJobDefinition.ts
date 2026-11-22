import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelExplainabilityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
