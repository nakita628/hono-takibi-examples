import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUtilsAddressesXpubXpubRoleIndexRoute,
  postUtilsTxsEvaluateRoute,
  postUtilsTxsEvaluateUtxosRoute,
} from '../routes'

export const getUtilsAddressesXpubXpubRoleIndexRouteHandler: RouteHandler<
  typeof getUtilsAddressesXpubXpubRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUtilsTxsEvaluateRouteHandler: RouteHandler<
  typeof postUtilsTxsEvaluateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postUtilsTxsEvaluateUtxosRouteHandler: RouteHandler<
  typeof postUtilsTxsEvaluateUtxosRoute
> = async (c) => {
  throw new Error('Not implemented')
}
