import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getAutocompleteAddressesAddressGbrRoute,
  getAutocompleteAddressesAddressUsaRoute,
  getAutocompleteAddressesRoute,
} from '../routes'

export const getAutocompleteAddressesRouteHandler: RouteHandler<
  typeof getAutocompleteAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAutocompleteAddressesAddressGbrRouteHandler: RouteHandler<
  typeof getAutocompleteAddressesAddressGbrRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAutocompleteAddressesAddressUsaRouteHandler: RouteHandler<
  typeof getAutocompleteAddressesAddressUsaRoute
> = async (c) => {
  throw new Error('Not implemented')
}
