import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
