import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CreateServiceHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
