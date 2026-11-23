import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CancelServicePipelineDeploymentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CancelServicePipelineDeploymentHandler = app.openapi(
  postXAmzTargetAwsProton20200720CancelServicePipelineDeploymentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
