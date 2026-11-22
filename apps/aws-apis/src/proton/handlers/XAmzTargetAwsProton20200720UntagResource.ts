import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720UntagResourceHandler = app.openapi(
  postXAmzTargetAwsProton20200720UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
