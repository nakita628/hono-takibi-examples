import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postAddressesPlacesAutocompleteRoute,
  postAddressesPlacesDetailsRoute,
} from '../routes'

export const postAddressesPlacesAutocompleteRouteHandler: RouteHandler<
  typeof postAddressesPlacesAutocompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAddressesPlacesDetailsRouteHandler: RouteHandler<
  typeof postAddressesPlacesDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
