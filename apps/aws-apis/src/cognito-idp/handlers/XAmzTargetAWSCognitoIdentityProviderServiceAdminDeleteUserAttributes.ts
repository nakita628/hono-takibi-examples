import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
