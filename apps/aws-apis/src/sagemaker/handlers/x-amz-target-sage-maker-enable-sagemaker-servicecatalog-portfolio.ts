import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioHandler = app.openapi(
  postXAmzTargetSageMakerEnableSagemakerServicecatalogPortfolioRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
