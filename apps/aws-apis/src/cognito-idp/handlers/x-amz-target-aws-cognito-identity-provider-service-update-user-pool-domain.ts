import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceUpdateUserPoolDomainHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
