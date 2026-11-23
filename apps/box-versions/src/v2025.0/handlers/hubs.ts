import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteHubsHubIdRoute,
  getHubsHubIdRoute,
  getHubsRoute,
  postHubsHubIdCopyRoute,
  postHubsHubIdManageItemsRoute,
  postHubsRoute,
  putHubsHubIdRoute,
} from '../routes'

export const getHubsRouteHandler: RouteHandler<typeof getHubsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHubsRouteHandler: RouteHandler<typeof postHubsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getHubsHubIdRouteHandler: RouteHandler<typeof getHubsHubIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putHubsHubIdRouteHandler: RouteHandler<typeof putHubsHubIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteHubsHubIdRouteHandler: RouteHandler<typeof deleteHubsHubIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postHubsHubIdCopyRouteHandler: RouteHandler<typeof postHubsHubIdCopyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postHubsHubIdManageItemsRouteHandler: RouteHandler<
  typeof postHubsHubIdManageItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
