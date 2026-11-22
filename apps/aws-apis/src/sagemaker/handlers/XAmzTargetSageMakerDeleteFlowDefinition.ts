import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteFlowDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteFlowDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteFlowDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
