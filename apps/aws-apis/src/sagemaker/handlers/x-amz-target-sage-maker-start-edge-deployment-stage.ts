import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerStartEdgeDeploymentStageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerStartEdgeDeploymentStageHandler = app.openapi(
  postXAmzTargetSageMakerStartEdgeDeploymentStageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
