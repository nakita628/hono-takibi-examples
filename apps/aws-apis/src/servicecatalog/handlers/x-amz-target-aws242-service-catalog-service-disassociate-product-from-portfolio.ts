import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceDisassociateProductFromPortfolioHandler =
  app.openapi(
    postXAmzTargetAWS242ServiceCatalogServiceDisassociateProductFromPortfolioRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
