import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListEnvironmentAccountConnectionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
