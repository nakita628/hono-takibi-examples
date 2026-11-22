import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetComponentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetComponentHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetComponentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
