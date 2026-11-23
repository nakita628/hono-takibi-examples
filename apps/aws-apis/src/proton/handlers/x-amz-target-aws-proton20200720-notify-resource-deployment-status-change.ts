import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeHandler = app.openapi(
  postXAmzTargetAwsProton20200720NotifyResourceDeploymentStatusChangeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
