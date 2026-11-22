import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetServiceInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetServiceInstanceHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetServiceInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
