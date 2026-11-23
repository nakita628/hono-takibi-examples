import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getWordsJsonRandomWordRoute,
  getWordsJsonRandomWordsRoute,
  getWordsJsonReverseDictionaryRoute,
  getWordsJsonSearchQueryRoute,
  getWordsJsonWordOfTheDayRoute,
} from '../routes'

export const getWordsJsonRandomWordRouteHandler: RouteHandler<
  typeof getWordsJsonRandomWordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWordsJsonRandomWordsRouteHandler: RouteHandler<
  typeof getWordsJsonRandomWordsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWordsJsonReverseDictionaryRouteHandler: RouteHandler<
  typeof getWordsJsonReverseDictionaryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWordsJsonSearchQueryRouteHandler: RouteHandler<
  typeof getWordsJsonSearchQueryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getWordsJsonWordOfTheDayRouteHandler: RouteHandler<
  typeof getWordsJsonWordOfTheDayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
