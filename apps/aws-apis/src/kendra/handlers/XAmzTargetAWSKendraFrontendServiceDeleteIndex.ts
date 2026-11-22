import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeleteIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDeleteIndexHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeleteIndexRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
