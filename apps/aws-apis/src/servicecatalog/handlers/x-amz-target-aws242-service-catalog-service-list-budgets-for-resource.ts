import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAws242ServiceCatalogServiceListBudgetsForResourceHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListBudgetsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
