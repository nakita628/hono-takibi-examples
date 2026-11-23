import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateEnvironmentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720UpdateEnvironmentHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateEnvironmentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
