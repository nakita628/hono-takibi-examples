import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getStemmingDictionariesDictionaryIdRoute,
  getStemmingDictionariesRoute,
  postStemmingDictionariesImportRoute,
} from '../routes'

export const getStemmingDictionariesRouteHandler: RouteHandler<
  typeof getStemmingDictionariesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getStemmingDictionariesDictionaryIdRouteHandler: RouteHandler<
  typeof getStemmingDictionariesDictionaryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postStemmingDictionariesImportRouteHandler: RouteHandler<
  typeof postStemmingDictionariesImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
