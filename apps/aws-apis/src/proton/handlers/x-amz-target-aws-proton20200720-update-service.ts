import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UpdateServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsProton20200720UpdateServiceHandler = app.openapi(
  postXAmzTargetAwsProton20200720UpdateServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
