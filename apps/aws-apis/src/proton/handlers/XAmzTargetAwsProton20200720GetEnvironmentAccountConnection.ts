import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetEnvironmentAccountConnectionHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetEnvironmentAccountConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
