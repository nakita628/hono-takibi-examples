import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionHandler = app.openapi(
  postXAmzTargetAwsProton20200720AcceptEnvironmentAccountConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
