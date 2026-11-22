import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
