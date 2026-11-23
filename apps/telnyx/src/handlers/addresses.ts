import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAddressesIdRoute,
  getAddressesIdRoute,
  getAddressesRoute,
  postAddressesActionsValidateRoute,
  postAddressesIdActionsAcceptSuggestionsRoute,
  postAddressesRoute,
} from '../routes'

export const getAddressesRouteHandler: RouteHandler<typeof getAddressesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAddressesRouteHandler: RouteHandler<typeof postAddressesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAddressesActionsValidateRouteHandler: RouteHandler<
  typeof postAddressesActionsValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAddressesIdRouteHandler: RouteHandler<typeof deleteAddressesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAddressesIdRouteHandler: RouteHandler<typeof getAddressesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAddressesIdActionsAcceptSuggestionsRouteHandler: RouteHandler<
  typeof postAddressesIdActionsAcceptSuggestionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
