import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListEdgeDeploymentPlansRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListEdgeDeploymentPlansHandler = app.openapi(
  postXAmzTargetSageMakerListEdgeDeploymentPlansRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
