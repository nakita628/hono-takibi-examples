import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceGetSigningCertificateHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
