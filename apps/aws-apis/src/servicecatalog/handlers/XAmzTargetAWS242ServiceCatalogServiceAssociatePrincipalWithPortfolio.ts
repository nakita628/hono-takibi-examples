import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceAssociatePrincipalWithPortfolioRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
