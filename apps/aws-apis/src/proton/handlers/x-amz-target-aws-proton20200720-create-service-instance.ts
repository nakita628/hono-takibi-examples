import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateServiceInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CreateServiceInstanceHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateServiceInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
