import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsHandler =
  app.openapi(
    postXAmzTargetAWSLicenseManagerListFailuresForLicenseConfigurationOperationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
