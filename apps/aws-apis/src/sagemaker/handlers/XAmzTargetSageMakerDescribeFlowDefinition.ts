import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeFlowDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeFlowDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeFlowDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
