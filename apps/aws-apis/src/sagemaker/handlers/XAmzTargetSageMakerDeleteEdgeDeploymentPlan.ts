import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteEdgeDeploymentPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteEdgeDeploymentPlanHandler = app.openapi(
  postXAmzTargetSageMakerDeleteEdgeDeploymentPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
