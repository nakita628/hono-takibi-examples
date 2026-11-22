import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
