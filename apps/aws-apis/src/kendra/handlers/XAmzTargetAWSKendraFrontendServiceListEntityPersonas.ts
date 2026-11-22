import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceListEntityPersonasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceListEntityPersonasHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceListEntityPersonasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
