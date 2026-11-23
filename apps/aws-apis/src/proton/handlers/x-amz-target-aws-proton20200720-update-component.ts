import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720UpdateComponentHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
