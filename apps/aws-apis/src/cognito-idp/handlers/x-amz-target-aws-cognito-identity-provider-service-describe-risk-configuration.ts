import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsCognitoIdentityProviderServiceDescribeRiskConfigurationHandler =
  app.openapi(
    postXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
