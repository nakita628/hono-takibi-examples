import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListServiceInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListServiceInstancesHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListServiceInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
