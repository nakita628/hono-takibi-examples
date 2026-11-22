import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
