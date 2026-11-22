import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateEdgeDeploymentStageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateEdgeDeploymentStageHandler = app.openapi(
  postXAmzTargetSageMakerCreateEdgeDeploymentStageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
