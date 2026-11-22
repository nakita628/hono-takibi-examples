import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
