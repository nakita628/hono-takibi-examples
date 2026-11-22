import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeEdgeDeploymentPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeEdgeDeploymentPlanHandler = app.openapi(
  postXAmzTargetSageMakerDescribeEdgeDeploymentPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
