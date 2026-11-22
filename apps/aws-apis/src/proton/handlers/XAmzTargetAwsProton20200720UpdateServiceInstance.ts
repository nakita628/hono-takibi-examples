import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateServiceInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720UpdateServiceInstanceHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateServiceInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
