import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CancelComponentDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720CancelComponentDeploymentHandler = app.openapi(
  postXAmzTargetAwsProton20200720CancelComponentDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
