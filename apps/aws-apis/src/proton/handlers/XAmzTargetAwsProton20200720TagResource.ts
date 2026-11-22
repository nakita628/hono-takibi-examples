import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720TagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720TagResourceHandler = app.openapi(
  postXAmzTargetAwsProton20200720TagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
