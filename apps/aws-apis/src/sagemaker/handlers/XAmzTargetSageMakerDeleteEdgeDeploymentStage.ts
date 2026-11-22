import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteEdgeDeploymentStageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteEdgeDeploymentStageHandler = app.openapi(
  postXAmzTargetSageMakerDeleteEdgeDeploymentStageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
