import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusHandler = app.openapi(
  postXAmzTargetSageMakerGetSagemakerServicecatalogPortfolioStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
