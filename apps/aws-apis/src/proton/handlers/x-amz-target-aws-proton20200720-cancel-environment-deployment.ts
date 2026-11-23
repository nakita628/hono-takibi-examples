import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CancelEnvironmentDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CancelEnvironmentDeploymentHandler = app.openapi(
  postXAmzTargetAwsProton20200720CancelEnvironmentDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
