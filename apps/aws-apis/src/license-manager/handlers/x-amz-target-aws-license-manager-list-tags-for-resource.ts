import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSLicenseManagerListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsLicenseManagerListTagsForResourceHandler = app.openapi(
  postXAmzTargetAWSLicenseManagerListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
