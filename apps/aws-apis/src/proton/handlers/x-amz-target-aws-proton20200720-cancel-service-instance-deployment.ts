import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CancelServiceInstanceDeploymentHandler = app.openapi(
  postXAmzTargetAwsProton20200720CancelServiceInstanceDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
