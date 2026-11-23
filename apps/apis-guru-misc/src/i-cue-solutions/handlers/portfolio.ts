import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postPortfolioAbcRoute,
  postPortfolioFileToPortfolioRoute,
  postPortfolioForecastPerformanceRewindRoute,
  postPortfolioRoute,
  postPortfolioXyzRoute,
} from '../routes'

export const postPortfolioRouteHandler: RouteHandler<typeof postPortfolioRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortfolioAbcRouteHandler: RouteHandler<typeof postPortfolioAbcRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPortfolioFileToPortfolioRouteHandler: RouteHandler<
  typeof postPortfolioFileToPortfolioRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortfolioForecastPerformanceRewindRouteHandler: RouteHandler<
  typeof postPortfolioForecastPerformanceRewindRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPortfolioXyzRouteHandler: RouteHandler<typeof postPortfolioXyzRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
