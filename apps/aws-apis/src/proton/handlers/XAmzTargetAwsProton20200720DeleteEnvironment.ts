import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720DeleteEnvironmentHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteEnvironmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
