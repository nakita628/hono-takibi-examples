import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
