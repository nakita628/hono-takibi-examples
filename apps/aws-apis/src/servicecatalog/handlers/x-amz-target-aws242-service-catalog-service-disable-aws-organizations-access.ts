import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDisableAwsOrganizationsAccessHandler =
  app.openapi(postXAmzTargetAWS242ServiceCatalogServiceDisableAWSOrganizationsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
