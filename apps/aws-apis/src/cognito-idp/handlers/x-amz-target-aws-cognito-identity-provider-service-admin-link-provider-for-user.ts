import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceAdminLinkProviderForUserHandler =
  app.openapi(postXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserRoute, (c) => {
    throw new Error('Not implemented')
  })
