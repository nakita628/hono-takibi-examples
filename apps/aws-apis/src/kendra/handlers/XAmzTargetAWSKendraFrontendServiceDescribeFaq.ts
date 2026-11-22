import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribeFaqRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribeFaqHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribeFaqRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
