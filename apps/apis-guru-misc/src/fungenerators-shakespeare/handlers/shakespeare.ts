import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShakespeareGenerateInsultRoute,
  getShakespeareGenerateLoremIpsumRoute,
  getShakespeareGenerateNameRoute,
  getShakespeareQuoteRoute,
  getShakespeareTranslateRoute,
} from '../routes'

export const getShakespeareGenerateInsultRouteHandler: RouteHandler<
  typeof getShakespeareGenerateInsultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShakespeareGenerateLoremIpsumRouteHandler: RouteHandler<
  typeof getShakespeareGenerateLoremIpsumRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShakespeareGenerateNameRouteHandler: RouteHandler<
  typeof getShakespeareGenerateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShakespeareQuoteRouteHandler: RouteHandler<
  typeof getShakespeareQuoteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShakespeareTranslateRouteHandler: RouteHandler<
  typeof getShakespeareTranslateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
