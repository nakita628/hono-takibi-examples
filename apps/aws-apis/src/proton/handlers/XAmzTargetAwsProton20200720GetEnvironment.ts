import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetEnvironmentHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetEnvironmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
