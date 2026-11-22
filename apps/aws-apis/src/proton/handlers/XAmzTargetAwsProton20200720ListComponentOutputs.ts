import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAwsProton20200720ListComponentOutputsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAwsProton20200720ListComponentOutputsHandler = app.openapi(
  postXAmzTargetAwsProton20200720ListComponentOutputsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
