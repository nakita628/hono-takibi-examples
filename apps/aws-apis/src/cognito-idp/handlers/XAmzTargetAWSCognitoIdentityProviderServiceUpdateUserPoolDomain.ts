import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
