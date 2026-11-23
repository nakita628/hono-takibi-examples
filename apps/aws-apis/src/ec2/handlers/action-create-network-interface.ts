import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateNetworkInterfaceRoute,
  postActionCreateNetworkInterfaceRoute,
} from '../routes'

export const getActionCreateNetworkInterfaceRouteHandler: RouteHandler<
  typeof getActionCreateNetworkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateNetworkInterfaceRouteHandler: RouteHandler<
  typeof postActionCreateNetworkInterfaceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
