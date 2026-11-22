import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
