import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteEdgeDeploymentStageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteEdgeDeploymentStageHandler = app.openapi(
  postXAmzTargetSageMakerDeleteEdgeDeploymentStageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
