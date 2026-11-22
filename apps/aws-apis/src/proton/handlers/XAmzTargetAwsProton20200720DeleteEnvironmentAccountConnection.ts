import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionHandler = app.openapi(
  postXAmzTargetAwsProton20200720DeleteEnvironmentAccountConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
