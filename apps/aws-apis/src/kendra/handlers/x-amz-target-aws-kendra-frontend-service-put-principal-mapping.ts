import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServicePutPrincipalMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsKendraFrontendServicePutPrincipalMappingHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServicePutPrincipalMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
