import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
