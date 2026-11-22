import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720GetServiceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720GetServiceHandler = app.openapi(
  postXAmzTargetAwsProton20200720GetServiceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
