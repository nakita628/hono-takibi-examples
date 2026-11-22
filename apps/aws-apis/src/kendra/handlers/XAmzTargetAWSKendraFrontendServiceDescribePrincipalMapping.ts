import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingHandler = app.openapi(
  postXAmzTargetAWSKendraFrontendServiceDescribePrincipalMappingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
