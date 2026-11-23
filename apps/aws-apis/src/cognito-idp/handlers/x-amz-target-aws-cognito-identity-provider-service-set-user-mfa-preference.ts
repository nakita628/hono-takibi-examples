import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceSetUserMfaPreferenceHandler = app.openapi(
  postXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
