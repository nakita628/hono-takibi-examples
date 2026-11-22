import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceHandler =
  app.openapi(postXAmzTargetAWS242ServiceCatalogServiceDisassociateBudgetFromResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
