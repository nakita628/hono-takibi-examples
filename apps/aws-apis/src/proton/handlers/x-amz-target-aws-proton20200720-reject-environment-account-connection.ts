import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionHandler = app.openapi(
  postXAmzTargetAwsProton20200720RejectEnvironmentAccountConnectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
