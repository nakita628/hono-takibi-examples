import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720CreateComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720CreateComponentHandler = app.openapi(
  postXAmzTargetAwsProton20200720CreateComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
