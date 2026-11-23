import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListFailuresForLicenseConfigurationOperationsHandler =
  app.openapi(
    postXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
