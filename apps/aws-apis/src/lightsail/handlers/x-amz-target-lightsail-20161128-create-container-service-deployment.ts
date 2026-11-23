import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128CreateContainerServiceDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128CreateContainerServiceDeploymentHandler = app.openapi(
  postXAmzTargetLightsail20161128CreateContainerServiceDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
