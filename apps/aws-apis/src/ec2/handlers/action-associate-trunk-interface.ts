import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionAssociateTrunkInterfaceRoute,
  postActionAssociateTrunkInterfaceRoute,
} from '../routes'

export const getActionAssociateTrunkInterfaceRouteHandler: RouteHandler<
  typeof getActionAssociateTrunkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAssociateTrunkInterfaceRouteHandler: RouteHandler<
  typeof postActionAssociateTrunkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
