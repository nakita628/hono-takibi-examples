import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateFlowDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateFlowDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerCreateFlowDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
