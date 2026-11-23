import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServiceDeletePrincipalMappingHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDeletePrincipalMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
