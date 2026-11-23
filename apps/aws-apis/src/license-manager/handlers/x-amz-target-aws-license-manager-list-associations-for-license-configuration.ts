import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListAssociationsForLicenseConfigurationHandler =
  app.openapi(postXAmzTargetAWSLicenseManagerListAssociationsForLicenseConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
