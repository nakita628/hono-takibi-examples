import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateEnvironmentAccountConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
