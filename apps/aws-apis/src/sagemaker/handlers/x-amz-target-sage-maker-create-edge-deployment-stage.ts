import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateEdgeDeploymentStageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateEdgeDeploymentStageHandler = app.openapi(
  postXAmzTargetSageMakerCreateEdgeDeploymentStageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
