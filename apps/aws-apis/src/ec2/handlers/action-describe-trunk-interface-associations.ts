import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeTrunkInterfaceAssociationsRoute,
  postActionDescribeTrunkInterfaceAssociationsRoute,
} from '../routes'

export const getActionDescribeTrunkInterfaceAssociationsRouteHandler: RouteHandler<
  typeof getActionDescribeTrunkInterfaceAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeTrunkInterfaceAssociationsRouteHandler: RouteHandler<
  typeof postActionDescribeTrunkInterfaceAssociationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
