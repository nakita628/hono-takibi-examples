import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
