import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioHandler = app.openapi(
  postXAmzTargetSageMakerDisableSagemakerServicecatalogPortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
