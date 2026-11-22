import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListEdgeDeploymentPlansRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListEdgeDeploymentPlansHandler = app.openapi(
  postXAmzTargetSageMakerListEdgeDeploymentPlansRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
