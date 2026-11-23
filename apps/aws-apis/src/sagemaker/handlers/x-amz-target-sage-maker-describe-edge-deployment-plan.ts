import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeEdgeDeploymentPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeEdgeDeploymentPlanHandler = app.openapi(
  postXAmzTargetSageMakerDescribeEdgeDeploymentPlanRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
