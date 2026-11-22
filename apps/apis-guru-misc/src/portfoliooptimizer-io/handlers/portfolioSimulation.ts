import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPortfolioSimulationRebalancingDriftWeightRoute,
  postPortfolioSimulationRebalancingFixedWeightRoute,
  postPortfolioSimulationRebalancingRandomWeightRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioSimulationHandler = app
  .openapi(postPortfolioSimulationRebalancingDriftWeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioSimulationRebalancingFixedWeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioSimulationRebalancingRandomWeightRoute, (c) => {
    throw new Error('Not implemented')
  })
