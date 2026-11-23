import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceGetAwsOrganizationsAccessStatusHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceGetAWSOrganizationsAccessStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
