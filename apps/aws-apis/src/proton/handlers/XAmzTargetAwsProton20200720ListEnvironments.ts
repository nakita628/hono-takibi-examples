import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListEnvironmentsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListEnvironmentsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListEnvironmentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
