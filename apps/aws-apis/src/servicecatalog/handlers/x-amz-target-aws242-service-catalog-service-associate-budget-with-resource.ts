import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceAssociateBudgetWithResourceHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceAssociateBudgetWithResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
