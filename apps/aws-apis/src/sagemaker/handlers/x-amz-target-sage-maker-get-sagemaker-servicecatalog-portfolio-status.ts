import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusHandler = app.openapi(
  postXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
