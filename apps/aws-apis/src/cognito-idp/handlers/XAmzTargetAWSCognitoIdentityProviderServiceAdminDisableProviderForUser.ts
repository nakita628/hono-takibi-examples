import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
