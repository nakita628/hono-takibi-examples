import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListEnvironmentOutputsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720ListEnvironmentOutputsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListEnvironmentOutputsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
