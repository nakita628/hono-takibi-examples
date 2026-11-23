import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDisassociateTrunkInterfaceRoute,
  postActionDisassociateTrunkInterfaceRoute,
} from '../routes'

export const getActionDisassociateTrunkInterfaceRouteHandler: RouteHandler<
  typeof getActionDisassociateTrunkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDisassociateTrunkInterfaceRouteHandler: RouteHandler<
  typeof postActionDisassociateTrunkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
