import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getContactAddressImportIdIndexRoute,
  getContactAddressImportIndexRoute,
  postContactAddressImportIndexRoute,
} from '../routes'

export const getContactAddressImportIndexRouteHandler: RouteHandler<
  typeof getContactAddressImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postContactAddressImportIndexRouteHandler: RouteHandler<
  typeof postContactAddressImportIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getContactAddressImportIdIndexRouteHandler: RouteHandler<
  typeof getContactAddressImportIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}
