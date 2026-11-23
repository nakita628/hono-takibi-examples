import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListOrganizationPortfolioAccessHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceListOrganizationPortfolioAccessRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
