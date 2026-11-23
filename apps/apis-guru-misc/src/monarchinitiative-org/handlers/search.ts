import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSearchEntityAutocompleteTermRoute,
  getSearchEntityHpoPlTermRoute,
  getSearchEntityTermRoute,
} from '../routes'

export const getSearchEntityAutocompleteTermRouteHandler: RouteHandler<
  typeof getSearchEntityAutocompleteTermRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchEntityHpoPlTermRouteHandler: RouteHandler<
  typeof getSearchEntityHpoPlTermRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSearchEntityTermRouteHandler: RouteHandler<
  typeof getSearchEntityTermRoute
> = async (c) => {
  throw new Error('Not implemented')
}
