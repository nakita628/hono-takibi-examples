import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminUpdateUserAttributesHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
