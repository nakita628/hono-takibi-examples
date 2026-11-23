import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceEnableAwsOrganizationsAccessHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceEnableAWSOrganizationsAccessRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
