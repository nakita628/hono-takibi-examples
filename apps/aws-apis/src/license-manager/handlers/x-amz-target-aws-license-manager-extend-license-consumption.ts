import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerExtendLicenseConsumptionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerExtendLicenseConsumptionHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerExtendLicenseConsumptionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
