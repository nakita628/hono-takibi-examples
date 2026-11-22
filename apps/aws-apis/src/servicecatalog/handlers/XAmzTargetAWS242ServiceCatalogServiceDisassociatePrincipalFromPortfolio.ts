import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceDisassociatePrincipalFromPortfolioRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
