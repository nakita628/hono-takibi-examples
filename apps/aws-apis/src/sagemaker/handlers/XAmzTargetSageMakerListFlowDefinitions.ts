import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListFlowDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListFlowDefinitionsHandler = app.openapi(
  postXAmzTargetSageMakerListFlowDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
