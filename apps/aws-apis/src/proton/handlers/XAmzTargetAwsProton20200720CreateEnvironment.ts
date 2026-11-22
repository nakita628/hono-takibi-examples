import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720CreateEnvironmentHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateEnvironmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
