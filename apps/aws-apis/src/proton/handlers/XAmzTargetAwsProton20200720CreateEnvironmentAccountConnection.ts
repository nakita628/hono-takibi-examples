import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateEnvironmentAccountConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
