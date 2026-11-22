import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioHandler =
  app.openapi(postXAmzTargetAWS242ServiceCatalogServiceAssociateProductWithPortfolioRoute, (c) => {
    throw new Error('Not implemented')
  })
