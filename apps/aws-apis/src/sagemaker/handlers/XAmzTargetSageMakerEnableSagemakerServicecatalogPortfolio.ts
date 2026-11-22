import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioHandler = app.openapi(
  postXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
