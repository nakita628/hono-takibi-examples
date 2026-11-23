import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStopEdgeDeploymentStageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStopEdgeDeploymentStageHandler = app.openapi(
  postXAmzTargetSageMakerStopEdgeDeploymentStageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
