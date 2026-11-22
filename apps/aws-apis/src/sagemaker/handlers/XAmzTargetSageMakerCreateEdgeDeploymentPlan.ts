import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateEdgeDeploymentPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateEdgeDeploymentPlanHandler = app.openapi(
  postXAmzTargetSageMakerCreateEdgeDeploymentPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
